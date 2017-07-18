// the semi-colon before the function invocation is a safety 
// net against concatenated scripts and/or other plugins 
// that are not closed properly.
;
(function($, window, document, undefined) {
    'use strict'
    // undefined is used here as the undefined global 
    // variable in ECMAScript 3 and is mutable (i.e. it can 
    // be changed by someone else). undefined isn't really 
    // being passed in so we can ensure that its value is 
    // truly undefined. In ES5, undefined can no longer be 
    // modified.

    // window and document are passed through as local 
    // variables rather than as globals, because this (slightly) 
    // quickens the resolution process and can be more 
    // efficiently minified (especially when both are 
    // regularly referenced in your plugin).

    // Create the defaults once
    var pluginName = 'datagrid';
    var defaultConfig = {
        rowId: 'id',
        ishierarchial: false,
        sorting: [], // this is required to display the data in the order it was received from API
        lengthChange: false,
        scrollY: '30vh',
        paging: false,
        colReorder: true,
        // this will tell datatable to not create filter text box
        // for more details visit: https://datatables.net/reference/option/dom
        dom: "<'row'<'col-sm-6'l>>" +
            "<'row'<'col-sm-12'tr>>" +
            "<'row'<'col-sm-5'i><'col-sm-7'p>>",

    }

    var defaultHierarchConfig = {
        dom: "<'row'<'col-sm-6'><'col-sm-6'B>>" +
            "<'row'<'col-sm-12'tr>>" +
            "<'row'<'col-sm-5'i><'col-sm-7'p>>",
        ordering: false,
    }

    let _configoptions;
    let $hierarchytbody;

    var addAttribute = function($element, data) {
        if (_configoptions.ishierarchial) {

            if (data.constructor === Array) {
                $.grep(data, function(ele, i) {
                    $element += ' dg-' + ele.key + '=' + ele.value;
                });
            } else {
                $element += ' data-' + ele.key + '=' + ele.value;
            }

            return $element
        } else {

            if (data.constructor === Array) {
                $.grep(data, function(ele, i) {
                    $element.attr('dg-' + ele.key, ele.value);
                });
            } else {
                $element.attr('dg-' + data.key, data.value);
            }
        }
    };

    var addRowFeatures = function() {
        let $row;
        defaultConfig = $.extend({
            createdRow: function(row, data, dataIndex) {
                $row = $(row);
                if (_configoptions.enablerowdeletion) {
                    $row.addClass('dg-deleteable-row');
                }

                if (_configoptions.rowattr) {
                    addAttribute($row, _configoptions.rowattr);
                }
                //$(row).attr('data-row-index', dataIndex);
            }
        }, defaultConfig);
    };

    var addCellFeatures = function() {
        let $td;
        let column;

        let cellCallbackFunc = function(td, cellData, rowData, row, col) {
            $td = $(td)
            column = _configoptions.columns[col];

            $td.attr('dg-cell-key', column.data);
            $td.attr('dg-cell-position', rowData[_configoptions.rowId] + '-' + column.data);

            if (column.editable) {
                $td.addClass('dg-cell-editable');
                _configoptions.hasEditFunctionality = true;
            }

            if (column.type) {
                $td.attr('dg-datatype', column.type);
            } else {
                $td.attr('dg-datatype', 'string');
            }

            if (column.colattr) {
                addAttribute($td, column.colattr);
            }
        }

        $.grep(_configoptions.columns, function(ele, i) {
            ele.createdCell = cellCallbackFunc;
        });
    };

    var formColumnKeysGet = function(keyArray) {
        let keys = "ele";
        $.grep(keyArray, function(ele, index) {
            keys += "['" + ele + "']"
        });

        return keys;
    }

    // function that recursively loops and adds row to the table. Used for hierarchy only.
    var buildTable = function(data, parentID, level) {
        let currentLevel = level;
        debugger;
        $.grep(data, function(ele, i) {
            ele.datalevel = currentLevel;
            let tr = "<tr id='" + ele[_configoptions.rowId] + "'";
            tr += " class='treegrid-" + ele.id;

            if (parentID !== undefined && ele.id !== parentID) {
                tr += ' treegrid-parent-' + parentID;
            }

            // if (config.enablerowdeletion) {
            //     tr+= ' dg-deleteable-row';
            // }

            tr += "' dg-account-name='" + ele.name + "'";

            if (_configoptions.rowattr) {
                tr = addAttribute(tr, _configoptions.rowattr);
            }

            tr += " >"

            $.grep(_configoptions.columns, function(key, index) {
                let cellpos = ele[_configoptions.rowId] + "-" + key.data;
                let celldata;
                let coldatakey = key.data.split(".");

                tr += "<td ";

                if (key.editable) {
                    tr += "class='dg-cell-editable'";
                    _configoptions.hasEditFunctionality = true;
                }

                tr += " dg-cell-key=" + key.data + " dg-cell-position=" + cellpos;

                if (key.type) {
                    tr += " dg-datatype=" + key.type;
                }

                if (key.colattr) {
                    tr = addAttribute(tr, key.colattr);
                }

                tr += ">";

                if (coldatakey.length > 0) {
                    let colvalue = eval(formColumnKeysGet(coldatakey));

                    colvalue = colvalue ? colvalue : '';

                    if (key.render) {
                        celldata = key.render(colvalue);
                        celldata ? tr += celldata : '';
                    } else {
                        tr += colvalue;
                    }

                    tr += "</td>";

                } else {
                    tr += "</td>";
                }
            });

            tr += "</tr>";
            $hierarchytbody.append(tr);

            if (ele.hasOwnProperty("children")) {
                if (ele["children"].length > 0) {
                    buildTable(ele.children, ele.id, parseInt(currentLevel + 1));
                }
            }
        });
    };

    var _destroy = function() {
        var that = this;
        $(this.$table.header()).find('tr:first').remove();
        this.$table.clear().draw();
        this.$table.destroy();
        this.$element.find('tbody').remove(); // this is for hierarchy grid, as we append html to DOM it needs to be removed upon destroy
        this.$element.data('plugin_' + pluginName, ''); // remove the datagrid instance from the element
    }

    // The actual plugin constructor
    function datagrid(element, configoptions) {
        _configoptions = configoptions;
        this.$element = $(element);
        this.$table;

        this.destroy = _destroy;
        // jQuery has an extend method that merges the 
        // contents of two or more objects, storing the 
        // result in the first object. The first object 
        // is generally empty because we don't want to alter 
        // the default options for future instances of the plugin
        addRowFeatures();
        addCellFeatures();

        this._config = $.extend({}, defaultConfig, configoptions);

        //this._defaultConfig = defaultConfig; // expose the default config only if required.
        this._name = pluginName;

        this.init();

        this.bindEvents();
    }

    datagrid.prototype.bindEvents = function() {
        var that = this;
        that._config.hasEditFunctionality = _configoptions.hasEditFunctionality;

        if (that._config.colReorder) {
            let $searchrow;
            if (that._config.scrollY) {
                $searchrow = that.$element.parent().siblings().find('thead tr:first');
            }

            that.$table.off('column-reorder')
            that.$table.on('column-reorder', function(e, settings, details) {
                // when the column is reordered the search row's th element also changes the order.
                // this causes issue while filtering hence to keep the data-index state same as before we do this.
                $searchrow.find('th').eq(details.to).attr('dg-index', details.to);
                $searchrow.find('th').eq(details.from).attr('dg-index', details.from);
            });
        }


        if (that._config.hasEditFunctionality) {
            var $clickedcell;
            var clickedcelldatatype = undefined;
            var $editedcell;
            var editedcellinfo;
            var olddata;

            that.$element.off('dblclick', 'tbody tr .dg-cell-editable')
            that.$element.on('dblclick', 'tbody tr .dg-cell-editable', function(e) {
                e.stopPropagation();
                $clickedcell = $(this);
                clickedcelldatatype = $clickedcell.attr('dg-datatype');
                editedcellinfo = {};

                editedcellinfo.prevvalue = $clickedcell.text();
                $clickedcell.attr("contentEditable", "true");
                $clickedcell.toggleClass('cell-editing');
            });

            that.$element.off("keypress", "tbody tr .dg-cell-editable");
            that.$element.on("keypress", "tbody tr .dg-cell-editable", function(event) {
                event.stopPropagation();
                if (event.keyCode === 13) {
                    $editedcell = $(this);
                    editedcellinfo.modifiedvalue = $editedcell.text();
                    $editedcell.attr("contentEditable", "false");

                    editedcellinfo.clckdcellkey = $clickedcell.attr('dg-cell-key');
                    editedcellinfo.clckdcellrowid = $clickedcell.parent().attr('id');
                    editedcellinfo.clckdcellposition = $clickedcell.attr('dg-cell-position');

                    that.$element.trigger('dg-cell-edited', [editedcellinfo]);

                    if ($editedcell.hasClass('cell-edited')) {
                        $clickedcell.toggleClass('cell-editing');
                    } else {
                        $clickedcell.toggleClass('cell-editing cell-edited');
                    }

                    console.log('Data for ' + that._name + ' is: ', that._config.data)

                } else if (clickedcelldatatype === 'num') {
                    if (event.keyCode < 48 || event.keyCode > 57) {
                        return false;
                    }
                }
            });

            // return to default value when the user presses the escape key
            that.$element.off('keyup', "tbody tr .dg-cell-editable");
            that.$element.on('keyup', "tbody tr .dg-cell-editable", function(e) {
                e.stopPropagation();
                if (e.keyCode === 27) {
                    $clickedcell.attr("contentEditable", "false");
                    $clickedcell.text(editedcellinfo.prevvalue);
                    $clickedcell.toggleClass('cell-editing');
                }
            });
        }

        // hierarchy search algo. This can be significantly improved. But in the interest of time this is what we could build.
        var displayParent = function(ele) {
            if (ele.attr('class') !== undefined) {
                if (ele.attr('class').indexOf("-parent-") > 0) {
                    var regex = /treegrid-parent-([0-9])/.exec(ele.attr('class'));
                    $('.treegrid-' + regex[1]).css("display", "");
                    displayParent($('.treegrid-' + regex[1]));
                }
            }
        }

        $(that.$table.header()).off('keyup', '.hierarchy-column-filter');
        $(that.$table.header()).on('keyup', '.hierarchy-column-filter', function(e) {
            e.stopPropagation();
            var self = $(this);
            var searchKey = self.text();
            var parentID;
            var name;
            let tableID = '#' + self.attr('aria-controls');

            //var visibleElements;
            //$('.treegrid-5,.treegrid-6').css("display", "none")
            //var ele = $("[accountName=*'" + searchKey + "']")
            $(tableID + ' tbody tr td:first-child').each(function(i, element) {
                if ((i !== 0)) {
                    name = element.innerText.toLowerCase();
                    if (name.indexOf(searchKey) < 0) {
                        element.parentNode.style.display = "none"
                    } else {
                        // below code was written to display only the child and its parent
                        displayParent($(element.parentNode));
                        element.parentNode.style.display = "";
                    };
                }
            })
        });


        $(that.$table.header()).off('keyup change', '.column-filter');
        $(that.$table.header()).on('keyup change', '.column-filter', function(e) {
            e.stopPropagation();
            let self = $(this);
            let index = self.attr('dg-index');
            let findvalue = self.text();

            that.$table.column(index).search(findvalue).draw();
        });

        if (that._config.enablerowdeletion) {

            that.$element.off('click', 'tbody tr td:first-child')
            that.$element.on('click', 'tbody tr td:first-child', function() {
                $(this).parent().toggleClass('selected');

                if (that.$table.$('tr.selected').length > 0) {
                    $.contextMenu('destroy');
                    $.contextMenu({
                        selector: '.dg-deleteable-row.selected',
                        autoHide: true,
                        callback: function(key, options) {
                            if (key === 'delete') {
                                that.$table.$('tr.selected').remove();
                            }
                        },
                        items: {
                            "delete": { name: "Delete", icon: "delete" },
                        }
                    });
                }
            });
        }
    }

    datagrid.prototype.init = function() {
        var that = this;
        let tableID = that.$element.attr('id');
        // Place initialization logic here
        // You already have access to the DOM element and
        // the options via the instance, e.g. this.element 
        // and this.options
        if (that._config.columnlevelfilter) {
            let columncount;
            let searchrow;

            columncount = that.$element.find('thead tr:last th').length;

            searchrow = '<tr>'
            for (let i = 0; i < columncount; i++) {
                searchrow += '<th contenteditable="true" class="column-filter" dg-index=' + i + ' aria-controls="' + tableID + '"></th>'
            }
            searchrow += '</tr>';

            that.$element.parents().closest('.datagrid-container').find('thead:first').prepend(searchrow);
        }

        if (that._config.ishierarchial) {

            let hierarchyconfig = undefined;
            that.$element.find('thead').prepend('<tr> <th contenteditable=true class="hierarchy-column-filter" aria-controls="' + tableID + '"> </th> </tr>');
            that._config = $.extend(that._config, defaultHierarchConfig);

            hierarchyconfig = JSON.parse(JSON.stringify(that._config));
            delete hierarchyconfig["data"];
            delete hierarchyconfig["columns"];;

            $hierarchytbody = that.$element.append('<tbody>').find('tbody');

            debugger
            if (that._config.data) {
                buildTable(that._config.data, undefined, 0);
                that.$table = that.$element.DataTable(hierarchyconfig);
                that.$element.treegrid({
                    expanderExpandedClass: that._config.iconWhenExpanded || "fa fa-compress",
                    expanderCollapsedClass: that._config.iconWhenCollapsed || "fa fa-expand"
                });
            }
        } else {
            that.$table = that.$element.DataTable(that._config);
        }
    };

    // A really lightweight plugin wrapper around the constructor, 
    // preventing against multiple instantiations
    $.fn[pluginName] = function(options) {
        let obj;
        $.each(this, function() {
            if (!$.data(this, 'plugin_' + pluginName)) {
                obj = new datagrid(this, options)
                $.data(this, 'plugin_' + pluginName, obj);
            } else if (options.toLowerCase() === 'destroy') {
                $($.data(this, 'plugin_' + pluginName).$table.header()).find('tr:first').remove();
                $.data(this, 'plugin_' + pluginName).$table.clear().draw();
                $.data(this, 'plugin_' + pluginName).$table.destroy();
                $.data(this, 'plugin_' + pluginName, '');
            }
        });

        return obj;
    }

})(jQuery, window, document);
