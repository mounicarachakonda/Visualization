"use strict";
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(["d3", "handsontable", "../common/Widget", "../common/HTMLWidget", "../common/PropertyExt", "../common/Utility", "css!handsontable", 

"css!./Table"], factory);
    } else {
        root.handson_Table = factory(root.d3, root.Handsontable, root.common_Widget, root.common_HTMLWidget, root.common_PropertyExt, root.common_Utility);
    }
}(this, function (d3, Handsontable, Widget, HTMLWidget, PropertyExt, Utility) {

    function Column(owner) {
        PropertyExt.call(this);
        this._owner = owner;
    }
    Column.prototype = Object.create(PropertyExt.prototype);
    Column.prototype.constructor = Column;
    Column.prototype._class += " handson_Table.Column";

    Column.prototype.publish("tableColumns", "", "set", "Only show column properties of the table",function () { return this._owner ? this._owner.columns() : []; }, { optional: true });
    Column.prototype.publish("minRange", null, "number", "Minimum value of a handsontable", function () { return this._owner ? this._owner.columns() : []; }, { tags: ["Basic"], optional: true });
    Column.prototype.publish("maxRange", null, "number", "Maximum value of a handsontable", function () { return this._owner ? this._owner.columns() : []; }, { tags: ["Basic"], optional: true });
    Column.prototype.publish("belowMinRangeColor", "#ff0000", "html-color", "Series Color", function () { return this._owner ? this._owner.columns() : []; }, { optional: true });
    Column.prototype.publish("aboveMaxRangeColor", "#0000ff", "html-color", "Series Color", function () { return this._owner ? this._owner.columns() : []; }, { optional: true });
    Column.prototype.publish("rangeColor", "#00ff00", "html-color", "Series Color", function () { return this._owner ? this._owner.columns() : []; }, { optional: true });
    
    function Table() {
        HTMLWidget.call(this);
        this._tag = "div";

        this._selectionBag = new Utility.Selection();
        this._widgetCache = {};
        this._widgetCache2 = {};
    }
//handson
    Table.prototype = Object.create(HTMLWidget.prototype);
    Table.prototype.constructor = Table;
    Table.prototype._class += " handson_Table";
    Table.prototype.Column = Column;
    Table.prototype.publish("mappings", [], "propertyArray", "Source Columns", null, { autoExpand: Column });
    Table.prototype.publish("renderHtmlDataCells", false, "boolean", "enable or disable HTML within cells",null,{tags:["Private"]});
    Table.prototype.publish("fixedColumn", false, "boolean", "Enable or disable fixed first column", null, { tags: ["Private"] });
    Table.prototype.publish("multiSelect", false, "boolean", "Multiple Selection", null, { tags: ["Basic"] });
    Table.prototype.publish("minWidgetWidth", 100, "number", "Minimum width of a child widget", null, { tags: ["Basic"], optional: 
true });
    Table.prototype.publish("minWidgetHeight", 100, "number", "Minimum height of a child widget", null, { tags: ["Basic"], optional: 
true });

    function WidgetReference(rowIdx, colIdx) {
        this.rowIdx = rowIdx;
        this.colIdx = colIdx;
    }

    WidgetReference.prototype.get = function (table) {
        if (!table._widgetCache[this.rowIdx]) {
            table._widgetCache[this.rowIdx] = {};
        }
        if (!table._widgetCache[this.rowIdx][this.colIdx]) {
            table._widgetCache[this.rowIdx][this.colIdx] = {};
        }
        if (!table._widgetCache2[this.colIdx]) {
            table._widgetCache2[this.colIdx] = {};
        }
        if (!table._widgetCache2[this.colIdx][this.rowIdx]) {
            table._widgetCache2[this.colIdx][this.rowIdx] = true;
        }
        return table._widgetCache[this.rowIdx][this.colIdx];
    };

    Table.prototype.enter = function (domNode, element) {
        HTMLWidget.prototype.enter.apply(this, arguments);
        element.style("overflow", "hidden");
        var context = this;

        this._table = new Handsontable(domNode, {
            columnSorting: true,
            readOnlyCellClassName: "",
            manualColumnResize: true,
            sortIndicator: true,
            wordWrap: false,
            manualRowResize: true,
            formulas : true,      
            colHeaders: true,     
            //autoColumnSize: {syncLimit: 10},
            //autoRowSize: {syncLimit: 10},
            // autoColumnSize: {useHeaders: true},
            stretchH: 'all',
            currentRowClassName: 'currentRow',
            rowHeights: function (row) {
                if (context._table.sortIndex.length) {
                    row = context._table.sortIndex[row][0];
                }
                if (context._widgetCache[row]) {
                    return context.minWidgetHeight();
                }
                return undefined;
            },
            colWidths: function (col) {
                if (context._widgetCache2[col]) {
                    return context.minWidgetWidth();
                }
                return undefined;
            },
            beforeOnCellMouseDown: function (event, coords, TD) {
                if (!event.shiftKey && !event.ctrlKey) {
                    event.stopImmediatePropagation();
                    event.preventDefault();
                    var d = this.getDataAtRow(coords.row);
                    context.selectionBagClick(d, coords.row, event);
                    var isSelected = context._selectionBag.isSelected(context._createSelectionObject(coords.row));
                    context.click(context.rowToObj(d), coords.col, isSelected);
                    if (isSelected) {
                        context._table.selectCell(coords.row, coords.col, coords.row, coords.col, false, false);
                    } else {
                        context._table.deselectCell();
                    }
                    context._table.render();
                }
            },
            afterRenderer: function (TD, row, col, prop, value, cellProperties) {
                if (value instanceof WidgetReference) {
                    if (document.body.contains(value.get(context).domNode)) {
                        setTimeout(function () {
                            value.get(context).widget
                                .resize()
                                .lazyRender()
                            ;
                        }, 0);
                    }
                }
            },

            cells: function(row, col, prop) {
                return {
                    renderer: function (instance, td, row, col, prop, value, cellProperties) {
                        if (row === 2 && col === 3) {
                        }
                        if (value instanceof WidgetReference) {
                            var retVal = Handsontable.renderers.BaseRenderer.apply(this, arguments);

                            var width = Math.max(context._table.getColWidth(col) || 50, context.minWidgetWidth()) - 8;
                            var height = Math.max(context._table.getRowHeight(row) || 16, context.minWidgetHeight());
                            if (!value.get(context).domNode) {
                                value.get(context).domNode = document.createElement('DIV');
                                value.get(context).widget
                                    .width(width)
                                    .height(height)
                                    .target(value.get(context).domNode)

                                ;
                            }
                            Handsontable.Dom.empty(td);
                            td.appendChild(value.get(context).domNode);
                            return retVal;
                        }

                        var field = context.fields()[col];
                        var textRender = context.renderHtmlDataCells() ? Handsontable.renderers.HtmlRenderer : 

Handsontable.renderers.TextRenderer;
                        switch (field.type()) {
                            case "string":
                                value = field.transform(value);
                                textRender.call(this, instance, td, row, col, prop, value, cellProperties);
                                break;
                            case "number":
                                Handsontable.renderers.NumericRenderer.call(this, instance, td, row, col, prop, value, 

cellProperties);
                                break;
                            case "boolean":
                                Handsontable.renderers.CheckboxRenderer.call(this, instance, td, row, col, prop, value, 

cellProperties);
                                break;
                            case "time":
                                break;
                            default:
                                value = field.transform(value);
                                textRender.call(this, instance, td, row, col, prop, value, cellProperties);
                                break;
                        }

                        if (context._selectionBag.isSelected({ _id: row })) {
                            td.style.color = "white";
                            td.style.background = "#f48a00";

                        } else {
                            td.style.color = null;
                            td.style.background = null;
                        }
                        if (row === context.data().length-1) {
                               cellProperties.readOnly = false; // make cell read-only if it is first row or the text reads 'readOnly'
                           if(col === context.columns().indexOf(field.__prop_label)){
                                cellProperties.formulas = true;
                                if(value === "sum("+field.__prop_label+")"){
                                     var temp=0; 
                                    for(var i=0;i<context.data().length;i++){ 
                                        var innerArray = context.data()[i]; 
                                        for(var j=0;j<innerArray.length;j++){ 
                                                  var cellValue = parseFloat(innerArray[col]);
                                                 if(typeof cellValue ==="number" && !isNaN(cellValue)){
                                                    temp += parseFloat(cellValue); 
                                                    break;
                                                 }  
                                        }
                                    }  

                                    td.textContent = temp;
                                }
                           }
                        }else{
                                cellProperties.readOnly = true;
                        }
                        if(context.mappings().length>0){
                            for (var k = 0; k < context.columns().length; k++) {
                                if((context.mappings()[k]) !==undefined && ((context.mappings()[k]).tableColumns() === field.__prop_label)){
                                        if (value < (context.mappings()[k]).minRange()){
                                          td.style.color = (context.mappings()[k]).belowMinRangeColor();
                                        }else if(value > (context.mappings()[k]).maxRange()){
                                             td.style.color = (context.mappings()[k]).aboveMaxRangeColor();
                                        }else if(value >= (context.mappings()[k]).minRange() && value <= (context.mappings()[k]).maxRange()){
                                             td.style.color = (context.mappings()[k]).rangeColor();
                                        }
                                }
                            }
                        }

                       return td;
                    }
                };
            },
            columns: [],
            fixedColumnsLeft: 1,
            width: this.width(),
            height: this.height(),
            data: []
        });
    };

    Table.prototype.update = function (domNode, element) {
        HTMLWidget.prototype.update.apply(this, arguments);
        var context = this;
        var settings = {};
        settings.colHeaders = context.columns();
        settings.columns = this.fields().map(function (field) {
            return {
                //readOnly: true,
                sortFunction: function (sortOrder) {
                    return function (a, b) {
                        var l = sortOrder ? field.parse(a[1]) : field.parse(b[1]);
                        var r = sortOrder ? field.parse(b[1]) : field.parse(a[1]);
                        if (l === r) {
                            return 0;
                        }
                        if (l < r) {
                            return -1;
                        }
                        return 1;
                    };
                }
            };
        });
        settings.fixedColumnsLeft = this.fixedColumn() ? 1 : 0;
        settings.width = this.width();
        settings.height = this.height();
        settings.data = this.data().map(function (row, rowIdx) {
            return row.map(function (cell, colIdx) {
                if (cell instanceof Widget) {
                    var retVal = new WidgetReference(rowIdx, colIdx);
                    if (retVal.get(context).widget !== cell) {
                        delete retVal.get(context).domNode;
                        retVal.get(context).widget = cell;
                    }
                    return retVal;
                }
                return cell;
            });
        });
        this._table.updateSettings(settings);
        if (this._table.sortingEnabled) {
            this._table.sort(this._table.sortColumn, this._table.sortOrder);
        }
    };

    Table.prototype.exit = function (domNode, element) {
        HTMLWidget.prototype.exit.apply(this, arguments);
    };

    Table.prototype._createSelectionObject = function (i) {
    //    var context = this;
        return {
            _id: i,
            element: function () {
                return d3.select();
            }
        };
    };

    Table.prototype.selection = function (_) {
        if (!arguments.length) return this._selectionBag.get().map(function (d) { return d._id; });
        this._selectionBag.set(_.map(function (row) {
            return this._createSelectionObject(row);
        }, this));
        return this;
    };

    Table.prototype.selectionBagClick = function (d, i, event) {
        if (this.multiSelect() && event.shiftKey && this._selectionPrevClick) {
            var inRange = false;
            var rows = [];
            var selection = this.data().filter(function (row, i) {
                var lastInRangeRow = false;
                if (row === d || row === this._selectionPrevClick) {
                    if (inRange) {
                        lastInRangeRow = true;
                    }
                    inRange = !inRange;
                    rows.push(i);
                }
                return inRange || lastInRangeRow;
            }, this);
            this.selection(selection);
        } else if (this.multiSelect()) {
            this._selectionBag.click(this._createSelectionObject(d), event);
            this._selectionPrevClick = d;
        } else {
            var selObj = this._createSelectionObject(i);
            this._selectionBag.click(selObj, { ctrlKey: this._selectionBag.isSelected(selObj) });
            this._selectionPrevClick = d;
        }
    };

    Table.prototype.renderInputs = function(d) {

        alert("call render input");
    };

    Table.prototype.click = function (row, column, selected) {
        function replacer(key, value) {
            if (value instanceof Widget) {
                return "Widget with class: " + value.classID();
            }
            return value;
        }
        console.log("Click:  " + JSON.stringify(row, replacer) + ", " + column + "," + selected);
    };

    return Table;
}));

