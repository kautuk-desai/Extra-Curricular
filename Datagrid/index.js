//The below functions are just for demo,  use the iago utility function instead of this
var removeNegative = function(number) {
    if (isNaN(number) === true || number == null)
        return number;
    return number.toString().replace("-", "");
}

var stripToNumber = function(value) {
    if (typeof(value) == "string")
        return Number(value.replace(/[^\d.-]/g, ''));
    else
        return value;
}

var adjustDecimal = function(number, places) {
    if (isNaN(number) == true || number == null)
        return number;
    return parseFloat(Math.round(number * Math.pow(10, places)) / Math.pow(10, places)).toFixed(places);
}

var numberFormatterWithoutUnit = function(labelValue) {
        labelValue = stripToNumber(labelValue); // iago.utils.formatter.stripToNumber(labelValue);
        var labelValueAbs = removeNegative(labelValue); //iago.utils.formatter.removeNegative(labelValue);
        var convertedValue;

        if (labelValueAbs >= 1.0e+9) {
            convertedValue = (labelValue / 1.0e+9);
        } else if (labelValueAbs >= 1.0e+6) {
            convertedValue = (labelValue / 1.0e+6);
        } else if (labelValueAbs >= 1.0e+3) {
            convertedValue = (labelValue / 1.0e+3);
        } else {
            convertedValue = labelValue;
        }

        return adjustDecimal(convertedValue, 2); //iago.utils.formatter.adjustDecimal(convertedValue, 2);
    }
    // iago utility function end


var tempdata = {
    data: [{
        "id": 1,
        "name": "asset",
        "description": "Assets",
        "children": [{
            "id": 2,
            "name": "currentassets",
            "description": "Current Assets",
            "children": [{
                "id": 3,
                "name": "accountsreceivables",
                "description": "Accounts Receivables",
                "mappedTo": "Accounts Receivable",
                "mappedToAccountId": 8,
                "data": {
                    "Account": "Accounts Receivable",
                    "col_2": "61,406",
                    "col_3": "62,375",
                    "col_4": "64,021",
                    "col_5": "64,619",
                    "col_6": "65,197",
                    "col_7": "64,589",
                    "col_8": "64,910",
                    "col_9": "62,856",
                    "col_10": "63,309",
                    "col_11": "66,563",
                    "col_12": "69,432",
                    "col_13": "69,184",
                    "ID": 8,
                    "Action": [
                        "None"
                    ]
                },
                "datalevel": 3
            }, {
                "id": 4,
                "name": "cash&cashequivalents",
                "description": "Cash & Cash Equivalents",
                "mappedTo": "Cash",
                "mappedToAccountId": 6,
                "data": {},
                "datalevel": 3,
                "projections": []
            }, {
                "id": 5,
                "name": "restrictedcash",
                "description": "Restricted Cash",
                "mappedTo": "",
                "mappedToAccountId": null,
                "data": {},
                "datalevel": 3
            }, {
                "id": 6,
                "name": "inventories",
                "description": "Inventories",
                "mappedTo": "",
                "mappedToAccountId": null,
                "data": {},
                "datalevel": 3
            }, {
                "id": 7,
                "name": "currentinvestments",
                "description": "Other Current Assets",
                "mappedTo": "Other Current Assets",
                "mappedToAccountId": 9,
                "data": {
                    "Account": "Other Current Assets",
                    "col_2": "7,606",
                    "col_3": "7,619",
                    "col_4": "6,870",
                    "col_5": "6,322",
                    "col_6": "10,161",
                    "col_7": "9,340",
                    "col_8": "8,978",
                    "col_9": "8,209",
                    "col_10": "7,522",
                    "col_11": "6,751",
                    "col_12": "5,887",
                    "col_13": "5,618",
                    "ID": 9,
                    "Action": [
                        "None"
                    ]
                },
                "datalevel": 3
            }],
            "mappedTo": "   Current Assets",
            "mappedToAccountId": 10,
            "data": {
                "Account": "   Current Assets",
                "col_2": "81,094",
                "col_3": "80,477",
                "col_4": "74,994",
                "col_5": "79,949",
                "col_6": "87,303",
                "col_7": "81,615",
                "col_8": "84,827",
                "col_9": "79,957",
                "col_10": "79,554",
                "col_11": "83,083",
                "col_12": "84,919",
                "col_13": "87,167",
                "ID": 10,
                "Action": [
                    "None"
                ]
            },
            "datalevel": 2
        }, {
            "id": 8,
            "name": "fixedassets(net)",
            "description": "Fixed Assets (net)",
            "children": [{
                "id": 9,
                "name": "plantandequipmentatcost",
                "description": "Plant and Equipment at cost",
                "mappedTo": "",
                "mappedToAccountId": null,
                "data": {},
                "datalevel": 3
            }, {
                "id": 10,
                "name": "accumulateddepreciation",
                "description": "Accumulated Depreciation",
                "mappedTo": "",
                "mappedToAccountId": null,
                "data": {},
                "datalevel": 3
            }, {
                "id": 11,
                "name": "otherfixedassets",
                "description": "Other Fixed Assets",
                "mappedTo": "",
                "mappedToAccountId": null,
                "data": {},
                "datalevel": 3
            }],
            "mappedTo": "Fixed Assets (net",
            "mappedToAccountId": 11,
            "data": {
                "Account": "Fixed Assets (net",
                "col_2": "11,282",
                "col_3": "11,920",
                "col_4": "12,103",
                "col_5": "12,279",
                "col_6": "12,611",
                "col_7": "12,549",
                "col_8": "12,528",
                "col_9": "12,542",
                "col_10": "13,271",
                "col_11": "13,527",
                "col_12": "13,912",
                "col_13": "14,291",
                "ID": 11,
                "Action": [
                    "None"
                ]
            },
            "datalevel": 2
        }, {
            "id": 12,
            "name": "noncurrentassets",
            "description": "Non Current Assets",
            "children": [{
                "id": 13,
                "name": "longterminvestments",
                "description": "Long Term Investments",
                "mappedTo": "",
                "mappedToAccountId": null,
                "data": {},
                "datalevel": 3
            }, {
                "id": 14,
                "name": "othernoncurrentassets",
                "description": "Other Non Current Assets",
                "mappedTo": "Other Current Assets",
                "mappedToAccountId": 9,
                "data": {
                    "Account": "Other Current Assets",
                    "col_2": "7,606",
                    "col_3": "7,619",
                    "col_4": "6,870",
                    "col_5": "6,322",
                    "col_6": "10,161",
                    "col_7": "9,340",
                    "col_8": "8,978",
                    "col_9": "8,209",
                    "col_10": "7,522",
                    "col_11": "6,751",
                    "col_12": "5,887",
                    "col_13": "5,618",
                    "ID": 9,
                    "Action": [
                        "None"
                    ]
                },
                "datalevel": 3
            }],
            "mappedTo": "Other Current Assets",
            "mappedToAccountId": 9,
            "data": {
                "Account": "Other Current Assets",
                "col_2": "7,606",
                "col_3": "7,619",
                "col_4": "6,870",
                "col_5": "6,322",
                "col_6": "10,161",
                "col_7": "9,340",
                "col_8": "8,978",
                "col_9": "8,209",
                "col_10": "7,522",
                "col_11": "6,751",
                "col_12": "5,887",
                "col_13": "5,618",
                "ID": 9,
                "Action": [
                    "None"
                ]
            },
            "datalevel": 2
        }, {
            "id": 15,
            "name": "capitalworkinprogress",
            "description": "Capital Work in Progress",
            "children": [],
            "mappedTo": "",
            "mappedToAccountId": null,
            "data": {},
            "datalevel": 2
        }, {
            "id": 16,
            "name": "intangibleassets(net)",
            "description": "Intangible Assets (net)",
            "children": [{
                "id": 17,
                "name": "licensespatentscopyrights",
                "description": "Licenses, Patents, Copyrights",
                "mappedTo": "",
                "mappedToAccountId": null,
                "data": {},
                "datalevel": 3
            }, {
                "id": 18,
                "name": "accumulatedamortization",
                "description": "Accumulated Amortization",
                "mappedTo": "",
                "mappedToAccountId": null,
                "data": {},
                "datalevel": 3
            }, {
                "id": 19,
                "name": "goodwill",
                "description": "Goodwill",
                "mappedTo": "",
                "mappedToAccountId": null,
                "data": {},
                "datalevel": 3
            }, {
                "id": 20,
                "name": "otherintangibleassets",
                "description": "Other Intangible Assets",
                "mappedTo": "",
                "mappedToAccountId": null,
                "data": {},
                "datalevel": 3
            }],
            "mappedTo": "Intangible Assets (net",
            "mappedToAccountId": 12,
            "data": {
                "Account": "Intangible Assets (net",
                "col_2": "158,505",
                "col_3": "158,505",
                "col_4": "158,505",
                "col_5": "158,505",
                "col_6": "158,505",
                "col_7": "158,505",
                "col_8": "158,505",
                "col_9": "158,505",
                "col_10": "158,505",
                "col_11": "158,505",
                "col_12": "158,505",
                "col_13": "145,462",
                "ID": 12,
                "Action": [
                    "None"
                ]
            },
            "datalevel": 2
        }, {
            "id": 21,
            "name": "contingentassets",
            "description": "Contingent Assets",
            "children": [],
            "mappedTo": "",
            "mappedToAccountId": null,
            "data": {},
            "datalevel": 2
        }, {
            "id": 22,
            "name": "otherassets",
            "description": "Other Assets",
            "children": [],
            "mappedTo": "Other Assets",
            "mappedToAccountId": 13,
            "data": {
                "Account": "Other Assets",
                "col_2": "7,677",
                "col_3": "7,573",
                "col_4": "7,546",
                "col_5": "7,464",
                "col_6": "7,409",
                "col_7": "7,379",
                "col_8": "7,316",
                "col_9": "7,247",
                "col_10": "7,185",
                "col_11": "7,124",
                "col_12": "7,053",
                "col_13": "7,041",
                "ID": 13,
                "Action": [
                    "None"
                ]
            },
            "datalevel": 2
        }],
        "mappedTo": "Assets",
        "mappedToAccountId": 5,
        "data": {
            "Account": "Assets",
            "col_2": "",
            "col_3": "",
            "col_4": "",
            "col_5": "",
            "col_6": "",
            "col_7": "",
            "col_8": "",
            "col_9": "",
            "col_10": "",
            "col_11": "",
            "col_12": "",
            "col_13": "",
            "ID": 5,
            "Action": [
                "None"
            ]
        },
        "datalevel": 1
    }, {
        "id": 23,
        "name": "",
        "description": "Total Assets",
        "mappedTo": "Total Assets",
        "mappedToAccountId": 14,
        "data": {
            "Account": "Total Assets",
            "col_2": "258,558",
            "col_3": "258,475",
            "col_4": "253,148",
            "col_5": "258,197",
            "col_6": "265,828",
            "col_7": "260,048",
            "col_8": "263,176",
            "col_9": "258,250",
            "col_10": "258,514",
            "col_11": "262,239",
            "col_12": "264,390",
            "col_13": "253,961",
            "ID": 14,
            "Action": [
                "None"
            ]
        },
        "datalevel": 1
    }, {
        "id": 24,
        "name": "liabilities&equity",
        "description": "Liabilities & Equity",
        "children": [{
            "id": 25,
            "name": "currentliabilities",
            "description": "Current Liabilities",
            "children": [{
                "id": 26,
                "name": "",
                "description": "Accounts Payables",
                "mappedTo": "Accounts Payable",
                "mappedToAccountId": 16,
                "data": {
                    "Account": "Accounts Payable",
                    "col_2": "2,560",
                    "col_3": "2,099",
                    "col_4": "1,745",
                    "col_5": "2,414",
                    "col_6": "3,600",
                    "col_7": "2,646",
                    "col_8": "1,991",
                    "col_9": "3,103",
                    "col_10": "2,529",
                    "col_11": "2,481",
                    "col_12": "2,881",
                    "col_13": "4,552",
                    "ID": 16,
                    "Action": [
                        "None"
                    ]
                },
                "datalevel": 3
            }, {
                "id": 27,
                "name": "",
                "description": "Long Term Debt - Current Portion",
                "mappedTo": "",
                "mappedToAccountId": null,
                "data": {},
                "datalevel": 3
            }, {
                "id": 28,
                "name": "",
                "description": "Accrued Payroll",
                "mappedTo": "Accrual Payroll",
                "mappedToAccountId": 17,
                "data": {
                    "Account": "Accrual Payroll",
                    "col_2": "33,165",
                    "col_3": "31,610",
                    "col_4": "26,712",
                    "col_5": "27,995",
                    "col_6": "30,184",
                    "col_7": "26,494",
                    "col_8": "30,255",
                    "col_9": "24,653",
                    "col_10": "26,895",
                    "col_11": "29,284",
                    "col_12": "29,515",
                    "col_13": "29,149",
                    "ID": 17,
                    "Action": [
                        "None"
                    ]
                },
                "datalevel": 3
            }, {
                "id": 29,
                "name": "",
                "description": "Taxes Payable",
                "mappedTo": "",
                "mappedToAccountId": null,
                "data": {},
                "datalevel": 3
            }, {
                "id": 30,
                "name": "",
                "description": "Dividends Payable",
                "mappedTo": "",
                "mappedToAccountId": null,
                "data": {},
                "datalevel": 3
            }, {
                "id": 31,
                "name": "",
                "description": "Other Current Liabilities",
                "mappedTo": "Total Current Liabilities",
                "mappedToAccountId": 20,
                "data": {
                    "Account": "Total Current Liabilities",
                    "col_2": "74,697",
                    "col_3": "73,245",
                    "col_4": "66,594",
                    "col_5": "71,396",
                    "col_6": "77,702",
                    "col_7": "70,868",
                    "col_8": "74,848",
                    "col_9": "68,617",
                    "col_10": "67,857",
                    "col_11": "71,567",
                    "col_12": "72,890",
                    "col_13": "76,456",
                    "ID": 20,
                    "Action": [
                        "None"
                    ]
                },
                "datalevel": 3
            }],
            "mappedTo": "Total Current Liabilities",
            "mappedToAccountId": 20,
            "data": {
                "Account": "Total Current Liabilities",
                "col_2": "74,697",
                "col_3": "73,245",
                "col_4": "66,594",
                "col_5": "71,396",
                "col_6": "77,702",
                "col_7": "70,868",
                "col_8": "74,848",
                "col_9": "68,617",
                "col_10": "67,857",
                "col_11": "71,567",
                "col_12": "72,890",
                "col_13": "76,456",
                "ID": 20,
                "Action": [
                    "None"
                ]
            },
            "datalevel": 2
        }, {
            "id": 32,
            "name": "noncurrentliabilities",
            "description": "Non Current Liabilities",
            "children": [{
                "id": 33,
                "name": "",
                "description": "Long Term Debt - less Current Portion",
                "mappedTo": "Long-term debt, less current",
                "mappedToAccountId": 21,
                "data": {
                    "Account": "Long-term debt, less current",
                    "col_2": "135,406",
                    "col_3": "136,063",
                    "col_4": "136,063",
                    "col_5": "134,750",
                    "col_6": "134,750",
                    "col_7": "134,750",
                    "col_8": "133,438",
                    "col_9": "133,438",
                    "col_10": "133,438",
                    "col_11": "132,125",
                    "col_12": "132,125",
                    "col_13": "132,125",
                    "ID": 21,
                    "Action": [
                        "None"
                    ]
                },
                "datalevel": 3
            }, {
                "id": 34,
                "name": "",
                "description": "Deferred Tax (net)",
                "mappedTo": "",
                "mappedToAccountId": null,
                "data": {},
                "datalevel": 3
            }, {
                "id": 35,
                "name": "",
                "description": "Other Long Term Liabilities",
                "mappedTo": "Other long-term liabilities",
                "mappedToAccountId": 22,
                "data": {
                    "Account": "Other long-term liabilities",
                    "col_2": "18,598",
                    "col_3": "18,615",
                    "col_4": "18,641",
                    "col_5": "18,657",
                    "col_6": "18,674",
                    "col_7": "18,743",
                    "col_8": "18,768",
                    "col_9": "18,785",
                    "col_10": "18,603",
                    "col_11": "18,620",
                    "col_12": "18,614",
                    "col_13": "18,687",
                    "ID": 22,
                    "Action": [
                        "None"
                    ]
                },
                "datalevel": 3
            }],
            "mappedTo": "Total Current Liabilities",
            "mappedToAccountId": 20,
            "data": {
                "Account": "Total Current Liabilities",
                "col_2": "74,697",
                "col_3": "73,245",
                "col_4": "66,594",
                "col_5": "71,396",
                "col_6": "77,702",
                "col_7": "70,868",
                "col_8": "74,848",
                "col_9": "68,617",
                "col_10": "67,857",
                "col_11": "71,567",
                "col_12": "72,890",
                "col_13": "76,456",
                "ID": 20,
                "Action": [
                    "None"
                ]
            },
            "datalevel": 2
        }, {
            "id": 36,
            "name": "",
            "description": "Contingent Liabilities",
            "children": [],
            "mappedTo": "",
            "mappedToAccountId": null,
            "data": {},
            "datalevel": 2
        }, {
            "id": 37,
            "name": "",
            "description": "Other Liabilities",
            "children": [],
            "mappedTo": "Total Liabilities",
            "mappedToAccountId": 23,
            "data": {
                "Account": "Total Liabilities",
                "col_2": "228,701",
                "col_3": "227,923",
                "col_4": "221,297",
                "col_5": "224,803",
                "col_6": "231,126",
                "col_7": "224,361",
                "col_8": "227,053",
                "col_9": "220,840",
                "col_10": "219,898",
                "col_11": "222,312",
                "col_12": "223,629",
                "col_13": "227,268",
                "ID": 23,
                "Action": [
                    "None"
                ]
            },
            "datalevel": 2
        }, {
            "id": 38,
            "name": "shareholdersequity",
            "description": "Shareholders' Equity",
            "children": [{
                "id": 39,
                "name": "preferredstock",
                "description": "Preferred Stock",
                "mappedTo": "",
                "mappedToAccountId": null,
                "data": {},
                "datalevel": 3
            }, {
                "id": 40,
                "name": "commonstock",
                "description": "Common Stock",
                "mappedTo": "",
                "mappedToAccountId": null,
                "data": {},
                "datalevel": 3
            }, {
                "id": 41,
                "name": "additionalpaidincapital",
                "description": "Additional Paid-In Capital",
                "mappedTo": "",
                "mappedToAccountId": null,
                "data": {},
                "datalevel": 3
            }, {
                "id": 42,
                "name": "Retained Earnings",
                "description": "Retained Earnings",
                "mappedTo": "",
                "mappedToAccountId": null,
                "data": {},
                "datalevel": 3
            }, {
                "id": 43,
                "name": "Other Adjustments",
                "description": "Other Adjustments",
                "mappedTo": "",
                "mappedToAccountId": null,
                "data": {},
                "datalevel": 3
            }],
            "mappedTo": "",
            "mappedToAccountId": null,
            "data": {},
            "datalevel": 2
        }],
        "mappedTo": "Liabilities & Equity",
        "mappedToAccountId": 15,
        "data": {
            "Account": "Liabilities & Equity",
            "col_2": "",
            "col_3": "",
            "col_4": "",
            "col_5": "",
            "col_6": "",
            "col_7": "",
            "col_8": "",
            "col_9": "",
            "col_10": "",
            "col_11": "",
            "col_12": "",
            "col_13": "",
            "ID": 15,
            "Action": [
                "None"
            ]
        },
        "datalevel": 1
    }, {
        "id": 44,
        "name": "",
        "description": "Total Liabilities & Stockholder's Equity",
        "mappedTo": "",
        "mappedToAccountId": null,
        "data": {},
        "datalevel": 1
    }]
};

var abc = $("#gridWithHierarchy").datagrid({
    ishierarchial: true,
    data: tempdata.data,
    rowId: 'name',
    rowattr: [{ key: 'row-id', value: '123' }, { key: 'attr-t', value: 'true' }],
    iconWhenExpanded: 'fa fa-chevron-up',
    iconWhenCollapsed: 'fa fa-chevron-down',
    //enablerowdeletion: true,
    buttons: [
        'colvis'
    ],
    columns: [
        { data: "description", colattr: [{ key: 'row-id', value: '123' }, { key: 'attr-t', value: 'true' }] },
        { data: "data.col_2", editable: true, type: 'num' }, //render: numberFormatterWithoutUnit,  }, // use pevUtils.prototype.numberFormatterWithoutUnit
        { data: "data.col_3", editable: true, type: 'num' },
        { data: "data.col_4", editable: true, type: 'num' },
        { data: "data.col_5", editable: true, type: 'num' },
        { data: "data.col_6", editable: true, type: 'num' }
    ]
});

console.log(abc)

$(document).on('dg-cell-edited', '#gridWithHierarchy', function(e, config) {
    console.log('cell edited...', config);
});

setTimeout(function() {

    //$("#gridWithoutHierarchy").datagrid("destroy");
    abc.destroy();
}, 2000)

setTimeout(function() {

    var abc = $("#gridWithHierarchy").datagrid({
        ishierarchial: true,
        data: tempdata.data,
        rowId: 'name',
        rowattr: [{ key: 'row-id', value: '123' }, { key: 'attr-t', value: 'true' }],
        iconWhenExpanded: 'fa fa-chevron-up',
        iconWhenCollapsed: 'fa fa-chevron-down',
        //enablerowdeletion: true,
        buttons: [
            'colvis'
        ],
        columns: [
            { data: "description", colattr: [{ key: 'row-id', value: '123' }, { key: 'attr-t', value: 'true' }] },
            { data: "data.col_2", editable: true, type: 'num' }, //render: numberFormatterWithoutUnit,  }, // use pevUtils.prototype.numberFormatterWithoutUnit
            { data: "data.col_3", editable: true, type: 'num' },
            { data: "data.col_4", editable: true, type: 'num' },
            { data: "data.col_5", editable: true, type: 'num' },
            { data: "data.col_6", editable: true, type: 'num' }
        ]
    });

}, 3000)



var dataWithoutHierarchy = {
    "fid": "IVPMillenniumFund",
    "name": "IVP Millennium Fund",
    "raisedcapital": 300000000,
    "inceptiondate": "6/3/2002",
    "enddate": "Dec 2022",
    "calledcapital": 150000000,
    "investedcapital": 123269000,
    "drypowder": 26731000,
    "aum": 184903500,
    "portfoliocompanies": [{
        "pcid": "TELXIUSTELECOMS.A.",
        "name": "Telxius Telecom S.A.",
        "investedcapital": 684000000,
        "acquisitiondate": "Feb 2017",
        "exitdate": "Dec 2025",
        "exitmultiple": "5.5x",
        "tevcurrent": 360000000000,
        "tevprevqtr": 3.3,
        "tevprevyr": 3.56,
        "ebitdacurrent": 6,
        "ebitdaprevqtr": 3.63,
        "ebitdaprevyr": 3.27,
        "multiplecurrent": "12x",
        "multipleexit": "15.5x",
        "multipleprevqtr": 3.6,
        "multipleprevyr": 3.8,
        "irrcurrent": 7.04,
        "irrprevqtr": 3.2,
        "irrprevyr": 3.5,
        "moiccurrent": "1.8x",
        "moicexit": "5.5x",
        "moicprevqtr": 4.2,
        "moicprevyr": 4.5,
        "sector": "Engineering & Construction Svcs",
        "status": "Pending"
    }, {
        "pcid": "Pemex",
        "name": "Pemex",
        "investedcapital": 188000000,
        "acquisitiondate": "Feb 2017",
        "exitdate": "Dec 2026",
        "exitmultiple": "5x",
        "tevcurrent": 180000000000,
        "tevprevqtr": -1.87,
        "tevprevyr": -2.02,
        "ebitdacurrent": 3,
        "ebitdaprevqtr": -2.06,
        "ebitdaprevyr": -1.85,
        "multiplecurrent": "12.5x",
        "multipleexit": "15x",
        "multipleprevqtr": -2,
        "multipleprevyr": -2.2,
        "irrcurrent": 6.38,
        "irrprevqtr": -1.8,
        "irrprevyr": -2,
        "moiccurrent": "0.8x",
        "moicexit": "5x",
        "moicprevqtr": -2.4,
        "moicprevyr": -2.6,
        "sector": "Infrastructure",
        "status": "Review"
    }, {
        "pcid": "SaratogaResources,Inc.",
        "name": "Saratoga Resources, Inc.",
        "investedcapital": 3159000000,
        "acquisitiondate": "Mar 2017",
        "exitdate": "Dec 2025",
        "exitmultiple": "3.75x",
        "tevcurrent": 1183194,
        "tevprevqtr": -1.2,
        "tevprevyr": -1.3,
        "ebitdacurrent": 7.937,
        "ebitdaprevqtr": 1.08,
        "ebitdaprevyr": 0.97,
        "multiplecurrent": "11.2x",
        "multipleexit": "23.75x",
        "multipleprevqtr": 1,
        "multipleprevyr": 1,
        "irrcurrent": 7,
        "irrprevqtr": 0.9,
        "irrprevyr": 0.9,
        "moiccurrent": "3.2x",
        "moicexit": "3.75x",
        "moicprevqtr": 1.1,
        "moicprevyr": 1.2,
        "sector": "Energy",
        "status": "Review"
    }, {
        "pcid": "BrookfieldInfrastructurePartnersL.P.",
        "name": "Brookfield Infrastructure Partners L.P.",
        "investedcapital": 7596000000,
        "acquisitiondate": "1/31/2017",
        "exitdate": "Dec 2025",
        "exitmultiple": "3x",
        "tevcurrent": 1197593,
        "tevprevqtr": 1.96,
        "tevprevyr": 2.12,
        "ebitdacurrent": 4.9,
        "ebitdaprevqtr": 2.16,
        "ebitdaprevyr": 1.94,
        "multiplecurrent": "11.5x",
        "multipleexit": "13x",
        "multipleprevqtr": 2.1,
        "multipleprevyr": 2.3,
        "irrcurrent": 5.67,
        "irrprevqtr": 1.9,
        "irrprevyr": 2.1,
        "moiccurrent": "2.5x",
        "moicexit": "3x",
        "moicprevqtr": 2.5,
        "moicprevyr": 2.7,
        "sector": "Infrastructure",
        "status": "Pending"
    }, {
        "pcid": "AT&TInc.",
        "name": "AT&T Inc.",
        "investedcapital": 177000000,
        "acquisitiondate": "Mar 2017",
        "exitdate": "Dec 2025",
        "exitmultiple": "4x",
        "tevcurrent": 90000000000,
        "tevprevqtr": 1.76,
        "tevprevyr": 1.9,
        "ebitdacurrent": 1.5,
        "ebitdaprevqtr": 1.94,
        "ebitdaprevyr": 1.74,
        "multiplecurrent": "11.75x",
        "multipleexit": "24x",
        "multipleprevqtr": 1.9,
        "multipleprevyr": 2.1,
        "irrcurrent": 4.86,
        "irrprevqtr": 1.7,
        "irrprevyr": 1.8,
        "moiccurrent": "1.5x",
        "moicexit": "4x",
        "moicprevqtr": 2.2,
        "moicprevyr": 2.4,
        "sector": "Telecom",
        "status": "Pending"
    }, {
        "pcid": "UltraPetroleumCorp.",
        "name": "Ultra Petroleum Corp.",
        "investedcapital": 23000000,
        "acquisitiondate": "Dec 2016",
        "exitdate": "Dec 2026",
        "exitmultiple": "4.5x",
        "tevcurrent": 36000000000,
        "tevprevqtr": 2.94,
        "tevprevyr": 3.18,
        "ebitdacurrent": 600,
        "ebitdaprevqtr": 3.23,
        "ebitdaprevyr": 2.91,
        "multiplecurrent": "10.9x",
        "multipleexit": "14.5x",
        "multipleprevqtr": 3.2,
        "multipleprevyr": 3.4,
        "irrcurrent": 5.4,
        "irrprevqtr": 2.9,
        "irrprevyr": 3.1,
        "moiccurrent": "0.95x",
        "moicexit": "4.5x",
        "moicprevqtr": 3.7,
        "moicprevyr": 4,
        "sector": "Energy",
        "status": "Approved"
    }, {
        "pcid": "A2ASpA",
        "name": "A2A SpA",
        "investedcapital": 58000000,
        "acquisitiondate": "Mar 2017",
        "exitdate": "Dec 2026",
        "exitmultiple": "4x",
        "tevcurrent": 54000000000,
        "tevprevqtr": -1.66,
        "tevprevyr": -1.79,
        "ebitdacurrent": 900,
        "ebitdaprevqtr": -1.83,
        "ebitdaprevyr": -1.64,
        "multiplecurrent": "12x",
        "multipleexit": "14x",
        "multipleprevqtr": -1.8,
        "multipleprevyr": -1.9,
        "irrcurrent": 5.76,
        "irrprevqtr": -1.6,
        "irrprevyr": -1.7,
        "moiccurrent": "3.2x",
        "moicexit": "4x",
        "moicprevqtr": -2.1,
        "moicprevyr": -2.3,
        "sector": "Energy",
        "status": "Escalated"
    }, {
        "pcid": "NeptuneOrientLinesLtd.",
        "name": "Neptune Orient Lines Ltd.",
        "investedcapital": 70000000,
        "acquisitiondate": "Feb 2017",
        "exitdate": "Dec 2025",
        "exitmultiple": "5x",
        "tevcurrent": 144000000000,
        "tevprevqtr": 0.82,
        "tevprevyr": 0.89,
        "ebitdacurrent": 2.4,
        "ebitdaprevqtr": 0.9,
        "ebitdaprevyr": 0.81,
        "multiplecurrent": "12.5x",
        "multipleexit": "25x",
        "multipleprevqtr": 0.9,
        "multipleprevyr": 1,
        "irrcurrent": 5.22,
        "irrprevqtr": 0.8,
        "irrprevyr": 0.9,
        "moiccurrent": "3.5x",
        "moicexit": "5x",
        "moicprevqtr": 1,
        "moicprevyr": 1.1,
        "sector": "Infrastructure",
        "status": "Escalated"
    }, {
        "pcid": "KinderMorganInc",
        "name": "Kinder Morgan Inc",
        "investedcapital": 372000000,
        "acquisitiondate": "Feb 2017",
        "exitdate": "Dec 2026",
        "exitmultiple": "5.5x",
        "tevcurrent": 216000000000,
        "tevprevqtr": -1.17,
        "tevprevyr": -1.26,
        "ebitdacurrent": 3.6,
        "ebitdaprevqtr": -1.29,
        "ebitdaprevyr": -1.16,
        "multiplecurrent": "11.2x",
        "multipleexit": "15.5x",
        "multipleprevqtr": -1.3,
        "multipleprevyr": -1.4,
        "irrcurrent": 6.3,
        "irrprevqtr": -1.1,
        "irrprevyr": -1.2,
        "moiccurrent": "1.6x",
        "moicexit": "5.5x",
        "moicprevqtr": -1.5,
        "moicprevyr": -1.6,
        "sector": "Energy",
        "status": "Escalated"
    }, {
        "pcid": "LakeRegionMedicalHoldings,Inc",
        "name": "Lake Region Medical Holdings, Inc",
        "investedcapital": 1244000000,
        "acquisitiondate": "1/31/2017",
        "exitdate": "Dec 2025",
        "exitmultiple": "5x",
        "tevcurrent": 1402500,
        "tevprevqtr": 1.96,
        "tevprevyr": 2.12,
        "ebitdacurrent": 48.375,
        "ebitdaprevqtr": 2.16,
        "ebitdaprevyr": 1.94,
        "multiplecurrent": "12x",
        "multipleexit": "15x",
        "multipleprevqtr": 2.1,
        "multipleprevyr": 2.3,
        "irrcurrent": 4.86,
        "irrprevqtr": 1.9,
        "irrprevyr": 2.1,
        "moiccurrent": "0.8x",
        "moicexit": "5x",
        "moicprevqtr": 2.5,
        "moicprevyr": 2.7,
        "sector": "Medical Technology and Svcs",
        "status": "Approved"
    }, {
        "pcid": "ChinaShenhuaEnergy",
        "name": "China Shenhua Energy",
        "investedcapital": 496000000,
        "acquisitiondate": "Feb 2017",
        "exitdate": "Dec 2024",
        "exitmultiple": "4x",
        "tevcurrent": 288000000000,
        "tevprevqtr": 2.2,
        "tevprevyr": 2.38,
        "ebitdacurrent": 4.8,
        "ebitdaprevqtr": 2.42,
        "ebitdaprevyr": 2.18,
        "multiplecurrent": "11.75x",
        "multipleexit": "24x",
        "multipleprevqtr": 2.4,
        "multipleprevyr": 2.6,
        "irrcurrent": 5.94,
        "irrprevqtr": 2.1,
        "irrprevyr": 2.3,
        "moiccurrent": "1.6x",
        "moicexit": "4x",
        "moicprevqtr": 2.8,
        "moicprevyr": 3,
        "sector": "Energy",
        "status": "Review"
    }, {
        "pcid": "AvagoTechnologiesLTD",
        "name": "Avago Technologies LTD",
        "investedcapital": 2400000000,
        "acquisitiondate": "Mar 2017",
        "exitdate": "Dec 2026",
        "exitmultiple": "4x",
        "tevcurrent": 258000000000,
        "tevprevqtr": 2.94,
        "tevprevyr": 3.18,
        "ebitdacurrent": 21.5,
        "ebitdaprevqtr": 3.23,
        "ebitdaprevyr": 2.91,
        "multiplecurrent": "11.2x",
        "multipleexit": "14x",
        "multipleprevqtr": 3.2,
        "multipleprevyr": 3.4,
        "irrcurrent": 5.76,
        "irrprevqtr": 2.9,
        "irrprevyr": 3.1,
        "moiccurrent": "2.5x",
        "moicexit": "4x",
        "moicprevqtr": 3.7,
        "moicprevyr": 4,
        "sector": "Technology",
        "status": "Approved"
    }, {
        "pcid": "MedtronicPLC",
        "name": "Medtronic PLC",
        "investedcapital": 349000000,
        "acquisitiondate": "Mar 2017",
        "exitdate": "Dec 2026",
        "exitmultiple": "4x",
        "tevcurrent": 645000000000,
        "tevprevqtr": -1.66,
        "tevprevyr": -1.79,
        "ebitdacurrent": 5.375,
        "ebitdaprevqtr": -1.83,
        "ebitdaprevyr": -1.64,
        "multiplecurrent": "12.5x",
        "multipleexit": "14x",
        "multipleprevqtr": -1.8,
        "multipleprevyr": -1.9,
        "irrcurrent": 7,
        "irrprevqtr": -1.6,
        "irrprevyr": -1.7,
        "moiccurrent": "0.8x",
        "moicexit": "4x",
        "moicprevqtr": -2.1,
        "moicprevyr": -2.3,
        "sector": "Medical Technology and Svcs",
        "status": "Review"
    }, {
        "pcid": "AccentCare",
        "name": "Accent Care",
        "investedcapital": 35000000,
        "acquisitiondate": "Nov 2016",
        "exitdate": "Dec 2024",
        "exitmultiple": "5x",
        "tevcurrent": 221540000,
        "tevprevqtr": -1.2,
        "tevprevyr": -1.3,
        "ebitdacurrent": 7937000,
        "ebitdaprevqtr": -1.44,
        "ebitdaprevyr": -1.3,
        "multiplecurrent": "27.9x",
        "multipleexit": "40x",
        "multipleprevqtr": -1.3,
        "multipleprevyr": -1.4,
        "irrcurrent": 6.3,
        "irrprevqtr": -1.2,
        "irrprevyr": -1.3,
        "moiccurrent": "2.4x",
        "moicexit": "5x",
        "moicprevqtr": -1.5,
        "moicprevyr": -1.6,
        "sector": "Energy",
        "status": "Review"
    }, {
        "pcid": "FleurDeLisEnergy",
        "name": "Fleur De Lis Energy",
        "investedcapital": 1522000,
        "acquisitiondate": "Dec 2016",
        "exitdate": "Dec 2025",
        "exitmultiple": "5.5x",
        "tevcurrent": 48000000,
        "tevprevqtr": 2,
        "tevprevyr": 2.16,
        "ebitdacurrent": 4000000,
        "ebitdaprevqtr": 2.4,
        "ebitdaprevyr": 2.16,
        "multiplecurrent": "12x",
        "multipleexit": "24x",
        "multipleprevqtr": 2.2,
        "multipleprevyr": 2.3,
        "irrcurrent": 5.4,
        "irrprevqtr": 1.9,
        "irrprevyr": 2.1,
        "moiccurrent": "4.5x",
        "moicexit": "4x",
        "moicprevqtr": 2.5,
        "moicprevyr": 2.7,
        "sector": "Energy",
        "status": "Approved"
    }, {
        "pcid": "GestampSolar",
        "name": "Gestamp Solar",
        "investedcapital": 6605000,
        "acquisitiondate": "Feb 2017",
        "exitdate": "Dec 2026",
        "exitmultiple": "4x",
        "tevcurrent": 96000000,
        "tevprevqtr": 1.8,
        "tevprevyr": 1.94,
        "ebitdacurrent": 8000000,
        "ebitdaprevqtr": 2.16,
        "ebitdaprevyr": 1.94,
        "multiplecurrent": "12x",
        "multipleexit": "23.5x",
        "multipleprevqtr": 1.9,
        "multipleprevyr": 2.1,
        "irrcurrent": 6,
        "irrprevqtr": 1.7,
        "irrprevyr": 1.9,
        "moiccurrent": "3.7x",
        "moicexit": "3.5x",
        "moicprevqtr": 2.3,
        "moicprevyr": 2.5,
        "sector": "Energy",
        "status": "Review"
    }, {
        "pcid": "SuzlonEnergyLTD",
        "name": "Suzlon Energy LTD",
        "investedcapital": 625000,
        "acquisitiondate": "Mar 2017",
        "exitdate": "Dec 2026",
        "exitmultiple": "7x",
        "tevcurrent": 48000000,
        "tevprevqtr": 3,
        "tevprevyr": 3.24,
        "ebitdacurrent": 4000000,
        "ebitdaprevqtr": 3.6,
        "ebitdaprevyr": 3.24,
        "multiplecurrent": "12x",
        "multipleexit": "26x",
        "multipleprevqtr": 3.2,
        "multipleprevyr": 3.5,
        "irrcurrent": 6.4,
        "irrprevqtr": 2.9,
        "irrprevyr": 3.1,
        "moiccurrent": "6.8x",
        "moicexit": "6x",
        "moicprevqtr": 3.8,
        "moicprevyr": 4.1,
        "sector": "Energy",
        "status": "Approved"
    }, {
        "pcid": "PetroquestEnergyInc",
        "name": "Petroquest Energy Inc",
        "investedcapital": 967000,
        "acquisitiondate": "Mar 2017",
        "exitdate": "Dec 2025",
        "exitmultiple": "6x",
        "tevcurrent": 24000000,
        "tevprevqtr": -1.7,
        "tevprevyr": -1.84,
        "ebitdacurrent": 2000000,
        "ebitdaprevqtr": -2.04,
        "ebitdaprevyr": -1.84,
        "multiplecurrent": "12x",
        "multipleexit": "24x",
        "multipleprevqtr": -1.8,
        "multipleprevyr": -2,
        "irrcurrent": 5.8,
        "irrprevqtr": -1.7,
        "irrprevyr": -1.8,
        "moiccurrent": "5.4x",
        "moicexit": "4x",
        "moicprevqtr": -2.1,
        "moicprevyr": -2.3,
        "sector": "Energy",
        "status": "Review"
    }, {
        "pcid": "CorianceGroup",
        "name": "Coriance Group",
        "investedcapital": 35000000,
        "acquisitiondate": "Mar 2017",
        "exitdate": "Dec 2026",
        "exitmultiple": "6x",
        "tevcurrent": 246069000,
        "tevprevqtr": 0.99,
        "tevprevyr": 1.07,
        "ebitdacurrent": 8988000,
        "ebitdaprevqtr": 1.09,
        "ebitdaprevyr": 0.98,
        "multiplecurrent": "27.36x",
        "multipleexit": "23.75x",
        "multipleprevqtr": 1.1,
        "multipleprevyr": 1.2,
        "irrcurrent": 7.7,
        "irrprevqtr": 1,
        "irrprevyr": 1,
        "moiccurrent": "1.4x",
        "moicexit": "3.75x",
        "moicprevqtr": 1.3,
        "moicprevyr": 1.4,
        "sector": "Energy",
        "status": "Approved"
    }, {
        "pcid": "SempraEnergy",
        "name": "Sempra Energy",
        "investedcapital": 3736000,
        "acquisitiondate": "Dec 2016",
        "exitdate": "Dec 2026",
        "exitmultiple": "5x",
        "tevcurrent": 24000000,
        "tevprevqtr": -1.32,
        "tevprevyr": -1.43,
        "ebitdacurrent": 4000000,
        "ebitdaprevqtr": -1.45,
        "ebitdaprevyr": -1.31,
        "multiplecurrent": "11x",
        "multipleexit": "24.5x",
        "multipleprevqtr": -1.4,
        "multipleprevyr": -1.5,
        "irrcurrent": 6.93,
        "irrprevqtr": -1.3,
        "irrprevyr": -1.4,
        "moiccurrent": "4.6x",
        "moicexit": "4.5x",
        "moicprevqtr": -1.7,
        "moicprevyr": -1.8,
        "sector": "Energy",
        "status": "Review"
    }, {
        "pcid": "ipayments",
        "name": "iPayments Holdings Inc.",
        "investedcapital": 17284000,
        "acquisitiondate": "Mar 2017",
        "exitdate": "Dec 2025",
        "exitmultiple": "5.5x",
        "tevcurrent": 178781000,
        "tevprevqtr": 1.74,
        "tevprevyr": 1.88,
        "ebitdacurrent": 5306000,
        "ebitdaprevqtr": 1.91,
        "ebitdaprevyr": 1.72,
        "multiplecurrent": "33.70x",
        "multipleexit": "30x",
        "multipleprevqtr": 1.9,
        "multipleprevyr": 2,
        "irrcurrent": 5.4,
        "irrprevqtr": 1.7,
        "irrprevyr": 1.8,
        "moiccurrent": "4x",
        "moicexit": "3x",
        "moicprevqtr": 2.2,
        "moicprevyr": 2.4,
        "sector": "Energy",
        "status": "Approved"
    }]
}

var def = $("#gridWithoutHierarchy").datagrid({
    data: dataWithoutHierarchy.portfoliocompanies,
    rowId: 'pcid',
    columnlevelfilter: true,
    enablerowdeletion: true,
    //orderCellsTop: true, this did not work
    rowattr: [{ key: 'row-id', value: '123' }, { key: 'attr-t', value: 'true' }], // this attr can support an array of custom attr or a single object: rowattr: { key: 'row-id', value: '123' },
    columns: [
        { data: "name", visible: true, orderable: false, colattr: [{ key: 'row-id', value: '123' }, { key: 'attr-t', value: 'true' }] },
        { data: "acquisitiondate", type: 'date', editable: true, },
        { data: "investedcapital", type: "num", render: numberFormatterWithoutUnit }, //this just for demo, use pevUtils.prototype.numberFormatterWithoutUnit
        { data: "exitdate", type: 'date' },
        { data: "tevcurrent", type: 'num', render: $.fn.dataTable.render.number(',', '.', 2, '$'), },
        { data: "ebitdacurrent", editable: true, type: 'num' },
        { data: "multiplecurrent", },
        { data: "irrcurrent", type: 'num' },
        { data: "moiccurrent", },
        { data: "status", editable: true, }
    ]
});

console.log(def);

setTimeout(function() {

    //$("#gridWithoutHierarchy").datagrid("destroy");
    def.destroy();
}, 2000)

setTimeout(function() {

    var def = $("#gridWithoutHierarchy").datagrid({
        data: dataWithoutHierarchy.portfoliocompanies,
        rowId: 'pcid',
        columnlevelfilter: true,
        enablerowdeletion: true,
        //orderCellsTop: true, this did not work
        rowattr: [{ key: 'row-id', value: '123' }, { key: 'attr-t', value: 'true' }], // this attr can support an array of custom attr or a single object: rowattr: { key: 'row-id', value: '123' },
        columns: [
            { data: "name", visible: true, orderable: false, colattr: [{ key: 'row-id', value: '123' }, { key: 'attr-t', value: 'true' }] },
            { data: "acquisitiondate", type: 'date', editable: true, },
            { data: "investedcapital", type: "num", render: numberFormatterWithoutUnit }, //this just for demo, use pevUtils.prototype.numberFormatterWithoutUnit
            { data: "exitdate", type: 'date' },
            { data: "tevcurrent", type: 'num', render: $.fn.dataTable.render.number(',', '.', 2, '$'), },
            { data: "ebitdacurrent", editable: true, type: 'num' },
            { data: "multiplecurrent", },
            { data: "irrcurrent", type: 'num' },
            { data: "moiccurrent", },
            { data: "status", editable: true, }
        ]
    });
}, 3000)


$(document).on('dg-cell-edited', '#gridWithoutHierarchy', function(e, config) {
    console.log('cell edited...', config);
})
