"use strict";
(function(root, factory) {
    if (typeof define === "function" && define.amd) {
        define([ "../common/PropertyExt", "../common/Class", "../canvas", "../common/Palette",  "css!./Combo" ], factory);
    } else {
        root.amchart_Combo = factory(root.common_PropertyExt, root.common_Class, root.canvasJS ,root.common_Palette);
    }
}(this, function(PropertyExt, Class, canvasjs, Palette) {
    function Combo() {
        this._tag = "div";
        console.log(this);
        //Class.call(this);
        PropertyExt.call(this);
    }

    
    Combo.prototype = Object.create(Class.prototype);
    Combo.prototype.constructor = Combo;
    Combo.prototype.mixin(PropertyExt);
    Combo.prototype._palette = Palette.rainbow("default");
    Combo.prototype._class += " canvas_Combo";


    Combo.prototype.publish("paletteID", "default", "set", "Palette ID", Combo.prototype._palette.switch(),{tags:["Basic","Shared"]});

     
    Combo.prototype.publish("charts", [], "widgetArray", "widgets", null, { tags: ["Basic"] }); // perhaps we want to load up the params on a chart and pass in the chart and just read the params there?
   
    Combo.prototype.publish("axisFontSize", null, "number", "X/Y Axis Text Font Size",null,{tags:["Basic","Shared"]});
    Combo.prototype.publish("axisFontFamily", null, "string", "X/Y Axis Text Font Name",null,{tags:["Basic","Shared"]});

    Combo.prototype.publish("showXGrid", false, "boolean", "show XGrid",null,{tags:["Basic","Shared"]});
    Combo.prototype.publish("showYGrid", false, "boolean", "show YGrid",null,{tags:["Basic","Shared"]});
    Combo.prototype.publish("invert", false, "boolean", "invert",null,{tags:["Basic","Shared"]});

    Combo.prototype.publish("axisThickness", 1, "number", "axis Thickness",null,{tags:["Basic","Shared"]});
    
    Combo.prototype.publish("yAxisDomainLow", null, "number", "yAxisDomainLow",null,{tags:["Basic","Shared"]});
    Combo.prototype.publish("yAxisDomainHigh", null, "number", "yAxisDomainHigh",null,{tags:["Basic","Shared"]});

    Combo.prototype.publish("yAxis2DomainLow", null, "number", "yAxis2DomainLow",null,{tags:["Basic","Shared"]});
    Combo.prototype.publish("yAxis2DomainHigh", null, "number", "yAxis2DomainHigh",null,{tags:["Basic","Shared"]});


    Combo.prototype.publish("xAxisBaselineColor", null, "html-color", "X Axis Baseline Color",null,{tags:["Basic","Shared"]});
    Combo.prototype.publish("yAxisBaselineColor", null, "html-color", "Y Axis Baseline Color",null,{tags:["Basic","Shared"]});

    Combo.prototype.publish("xAxisFontColor", null, "html-color", "X Axis Text Font Color",null,{tags:["Basic","Shared"]});
    Combo.prototype.publish("yAxisFontColor", null, "html-color", "Y Axis Text Font Color",null,{tags:["Basic","Shared"]});
    Combo.prototype.publish("yaxis2", false, "boolean", "secondary",null,{tags:["Basic","Shared"]});

    Combo.prototype.publish("line", false, "boolean", "Line Chart",null,{tags:["Basic","Shared"]});
    Combo.prototype.publish("bar", true, "boolean", "Bar Chart",null,{tags:["Basic","Shared"]});
    Combo.prototype.publish("scatter", false, "boolean", "Scatter Chart",null,{tags:["Basic","Shared"]});

    Combo.prototype.setId = function(id){
        Combo.prototype.tagId = id;
    };
    Combo.prototype.setSecondaryAxis = function(maxData){
        var merged = [].concat.apply([], maxData);
        var maxSecondaryValue = merged.reduce(function(a, b) {
            return Math.max(a, b);
        });

        var maxValue = Math.ceil(maxSecondaryValue/100)*100;
        Combo.prototype.setSecondaryAxisValue = {
            minimum : 0,
            maximum : maxValue
        };
    };
    function clone(obj) {
        if (null === obj || "object" !== typeof obj) return obj;
        var copy = obj.constructor();
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
        }
        return copy;
    }
    Combo.prototype.updateData = function(data, colorObject, options){
        var intials = [], finalData = [], maxData = [];
            for(var current_Data = 0 ; current_Data < data.length ; current_Data++){
                var objectName = data[current_Data][0];

                for (var current_internal = 0 ; current_internal < data[current_Data].length ; current_internal++){
                
                    if(intials.length <= current_internal){
                        intials[current_internal] = []; 
                        maxData[current_internal] = [];
                    }

                    var currentObj ={label: objectName, y: data[current_Data][current_internal]};
                    maxData[current_internal].push(data[current_Data][current_internal]);
                    intials[current_internal].push(currentObj);

                }
            }

            intials.splice(0, 1);
            maxData.splice(0, 1);
            Combo.prototype.setSecondaryAxis(maxData);
        
        

        if(intials.length>0){

            for(var i=0; i< intials.length; i++){
                var currentObj1 = clone(options);
                var currentObj2;
                currentObj1.color = colorObject[options.colorType][i];
                currentObj1.dataPoints = intials[i];
                finalData.push(currentObj1);
                currentObj2 = clone(currentObj1);
                if(Combo.prototype.self.__prop_yaxis2 && i === 0){
                    currentObj2.axisYType = "secondary";
                    currentObj2.dataPoints = [];
                    finalData.push(currentObj2);
                }
            }

        }

        
        return finalData;
    };

    Combo.prototype.columns = function(columns){
        Combo.prototype.chart_columns = columns;
    };

    Combo.prototype.dataColumn = function(data){
        Combo.prototype.chart_Column_Data = data;
    };

    Combo.prototype.dataLine = function(data){
        Combo.prototype.chart_Line_Data = data;
    };

    Combo.prototype.dataScatter = function(data){
        Combo.prototype.chart_Scatter_Data = data;
    };

    Combo.prototype.setAxisY = function(yAxis){
        Combo.prototype.axisY = yAxis;
    };

    Combo.prototype.setAxisY2 = function(yAxis2){
        Combo.prototype.axisY2 = yAxis2;
    };

    Combo.prototype.propertyExists = function(option, callBack){
        
        if(option !== undefined){
            return option;
        }
        return callBack;
    };
    Combo.prototype.createColorPalette = function(_){

            var totalColorCount = 0;
            var colorArray = [];
            var colorObject = {};
            var count = 0;
            this._palette = this._palette.switch(Combo.prototype.self.__prop_paletteID || this.paletteID());
            if(arguments.length > 0 ){
                for( var i = 0; i < arguments.length; i++){
                    var valueOfArg =  arguments[i];
                    colorObject[valueOfArg.toLowerCase()] = {
                        totalColorCount: totalColorCount-1 || 0,
                        count: Combo.prototype["chart_"+arguments[i]+"_Data"].length
                    };
                    totalColorCount += Combo.prototype["chart_"+arguments[i]+"_Data"].length;
                    
                    colorArray[totalColorCount-1] = 'break';
                }

                for( var j = 0 ; j < totalColorCount; j++) {
                    var value2 = this._palette(j,1,totalColorCount);

                    if(colorArray[j] === "break"){
                        colorArray[j] = value2; 
                        var cloneColor = colorArray;
                        var countValue = colorObject[arguments[count].toLowerCase()].totalColorCount;
                        countValue = countValue > 0 ? countValue : 0;
                        colorObject[arguments[count].toLowerCase()] = 
                        cloneColor.slice(countValue,j+1);
                        count++;
                    }else{
                        colorArray[j] = value2;    
                    }
                }
            }

            return colorObject;


    };
    Combo.prototype.canvasCreate = function(callBack){
        console.log(Combo);
        var _canvasCombo = {
            theme: "theme3",
            creditText:'',
            creditHref: '',
            animationEnabled: typeof callBack === "function" ? true : false,
            axisX:{
                gridThickness: Combo.prototype.self.__prop_showXGrid || 0,
                tickLength: 10,
                labelFontSize: Combo.prototype.self.__prop_axisFontSize || 10,
                lineColor: Combo.prototype.self.__prop_xAxisBaselineColor || "black",
                labelFontColor: Combo.prototype.self.__prop_xAxisFontColor || "black",
                lineThickness: Combo.prototype.self.__prop_axisThickness || 1
            },
            axisY: Combo.prototype.axisY ? {
                gridThickness: Combo.prototype.self.__prop_showYGrid || 0,
                labelFontSize: Combo.prototype.self.__prop_axisFontSize || 10,
                lineThickness: Combo.prototype.self.__prop_axisThickness || 1,
                labelFontColor: Combo.prototype.self.__prop_yAxisFontColor || "black",
                lineColor: Combo.prototype.self.__prop_yAxisBaselineColor || "black"
                 } : null,
            axisY2: Combo.prototype.axisY2 ? { 
                gridThickness: Combo.prototype.self.__prop_showYGrid || 0,
                labelFontSize: Combo.prototype.self.__prop_axisFontSize || 10,
                lineColor: Combo.prototype.self.__prop_yAxisBaselineColor || "black",
                labelFontColor: Combo.prototype.self.__prop_yAxisFontColor || "black",
                lineThickness: Combo.prototype.self.__prop_axisThickness || 1
                 } : null,
            data: []
        };

        if(!isNaN(Combo.prototype.self.__prop_yAxisDomainLow) && !isNaN(Combo.prototype.self.__prop_yAxisDomainHigh) &&
            Combo.prototype.self.__prop_yAxisDomainHigh > Combo.prototype.self.__prop_yAxisDomainLow ) {
            _canvasCombo.axisY.minimum = Combo.prototype.self.__prop_yAxisDomainLow;
            _canvasCombo.axisY.maximum = Combo.prototype.self.__prop_yAxisDomainHigh;

        }
        if(!isNaN(Combo.prototype.self.__prop_yAxis2DomainLow) && !isNaN(Combo.prototype.self.__prop_yAxis2DomainHigh) &&
            Combo.prototype.self.__prop_yAxis2DomainHigh > Combo.prototype.self.__prop_yAxis2DomainLow ) {
            _canvasCombo.axisY2.minimum = Combo.prototype.self.__prop_yAxis2DomainLow;
            _canvasCombo.axisY2.maximum = Combo.prototype.self.__prop_yAxis2DomainHigh;
        }

        var colorObject = Combo.prototype.createColorPalette('Scatter', 'Line', 'Column');
        
        if(Combo.prototype.propertyExists(Combo.prototype.self.__prop_bar,Combo.prototype.bar())){
            _canvasCombo.data = _canvasCombo.data.concat(Combo.prototype.updateData(Combo.prototype.chart_Column_Data, colorObject, {
                type: Combo.prototype.self.__prop_invert ? "bar" : "column",
                colorType: "column"
            }));
        }
        if(Combo.prototype.propertyExists(Combo.prototype.self.__prop_scatter,Combo.prototype.scatter())){
            _canvasCombo.data = _canvasCombo.data.concat(Combo.prototype.updateData(Combo.prototype.chart_Scatter_Data, colorObject, {
                type: "scatter",
                colorType: "scatter",
                markerType: "cross"
            }));
        }
        if(Combo.prototype.propertyExists(Combo.prototype.self.__prop_line,Combo.prototype.line())){
             _canvasCombo.data = _canvasCombo.data.concat(Combo.prototype.updateData(Combo.prototype.chart_Line_Data, colorObject, {
                type: "line",
                colorType: "scatter"
            }));
           
        }

        if(Combo.prototype.setSecondaryAxisValue && Combo.prototype.axisY2 &&  !_canvasCombo.axisY2.maximum){
            _canvasCombo.axisY2 = Object.assign({}, Combo.prototype.setSecondaryAxisValue,_canvasCombo.axisY2);
            
        }

        return _canvasCombo;
    };


    Combo.prototype.updateChart = function(callBack){
       var uniqueId = Combo.prototype.tagId.split("#")[1];
       
       var _canvasChart = new canvasjs.prototype.Chart(''+uniqueId+'', Combo.prototype.canvasCreate(callBack));
       _canvasChart.render();
       if ( typeof callBack === "function") {
        callBack(_canvasChart);
       }
       
    };
    
    Combo.prototype.render = function (callBack) {
        Combo.prototype.self = this;
        Combo.prototype.updateChart(callBack);
       
    };
    return Combo;
}));


