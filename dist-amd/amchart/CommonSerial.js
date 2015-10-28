(function(e,t){typeof define=="function"&&define.amd?define(["d3","../common/HTMLWidget","amcharts.serial","require"],t):e.amchart_CommonSerial=t(e.d3,e.common_HTMLWidget,e.AmCharts,e.require)})(this,function(e,t,n,r){function i(){t.call(this),this._tag="div",this._chart={}}return i.prototype=Object.create(t.prototype),i.prototype.constructor=i,i.prototype._class+=" amchart_CommonSerial",i.prototype.publish("fontSize",null,"number","Font Size",null,{tags:["Basic","Shared"]}),i.prototype.publish("fontFamily",null,"string","Font Name",null,{tags:["Basic","Shared","Shared"]}),i.prototype.publish("fontColor",null,"html-color","Font Color",null,{tags:["Basic","Shared"]}),i.prototype.publish("lineWidth",1,"number","Line Thickness",null,{min:0,max:10,step:1,inputType:"range",tags:["Basic","Shared"]}),i.prototype.publish("lineColor",null,"html-color","Color of the data/content lines",null,{tags:["Basic","Shared"]}),i.prototype.publish("lineOpacity",1,"number","Line Opacity",null,{min:0,max:1,step:.001,inputType:"range",tags:["Basic","Shared"]}),i.prototype.publish("dashedLineStyle",0,"number","Length of Dashed Line. 0 = none",null,{tags:["Advanced","Shared"]}),i.prototype.publish("axisFontSize",null,"number","X/Y Axis Text Font Size",null,{tags:["Basic","Shared"]}),i.prototype.publish("xAxisBaselineColor",null,"html-color","X Axis Baseline Color",null,{tags:["Basic","Shared"]}),i.prototype.publish("yAxisBaselineColor",null,"html-color","Y Axis baseline Color",null,{tags:["Basic","Shared"]}),i.prototype.publish("xAxisFontColor",null,"html-color","Horizontal Axis Text Style (Color)",null,{tags:["Basic","Shared"]}),i.prototype.publish("yAxisFontColor",null,"html-color","Vertical Axis Text Style (Color)",null,{tags:["Basic","Shared"]}),i.prototype.publish("xAxisTitle","","string","X-Axis Title",null,{tags:["Basic","Shared"]}),i.prototype.publish("yAxisTitle","","string","Y-Axis Title",null,{tags:["Basic","Shared"]}),i.prototype.publish("xAxisTitleFontSize",null,"number","Vertical Axis Title Text Style (Font Size)",null,{tags:["Basic","Shared"]}),i.prototype.publish("yAxisTitleFontSize",null,"number","Vertical Axis Title Text Style (Font Size)",null,{tags:["Intermediate","Shared"]}),i.prototype.publish("xAxisTitleFontColor",null,"html-color","Horizontal Axis Title Text Style (Color)",null,{tags:["Basic","Shared"]}),i.prototype.publish("yAxisTitleFontColor",null,"html-color","Vertical Axis Title Text Style (Color)",null,{tags:["Basic","Shared"]}),i.prototype.publish("xAxisLabelRotation",null,"number","X-Axis Label Rotation",null,{min:0,max:90,step:.1,inputType:"range",tags:["Intermediate","Shared"]}),i.prototype.publish("axisLineWidth",1,"number","Axis Line Width",null,{tags:["Intermediate","Shared"]}),i.prototype.publish("axisAlpha",1,"number","Axis Alpha",null,{tags:["Intermediate"]}),i.prototype.publish("marginLeft",null,"number","Margin (Left)",null,{tags:["Intermediate"]}),i.prototype.publish("marginRight",null,"number","Margin (Right)",null,{tags:["Intermediate"]}),i.prototype.publish("marginTop",null,"number","Margin (Top)",null,{tags:["Intermediate"]}),i.prototype.publish("marginBottom",null,"number","Margin (Bottom)",null,{tags:["Intermediate"]}),i.prototype.publish("showScrollbar",!1,"boolean","Show Chart Scrollbar",null,{tags:["Intermediate","Shared"]}),i.prototype.publish("orientation","horizontal","set","Orientation",["horizontal","vertical"],{tags:["Intermediate"]}),i.prototype.publish("bulletSize",0,"number","Bullet Size",null,{tags:["Intermediate"]}),i.prototype.publish("bulletType","none","set","Bullet Type",["none","round","square","triangleUp","triangleDown","triangleLeft","triangleRight","bubble","diamond"],{tags:["Basic"]}),i.prototype.publish("dataDateFormat",null,"string","",null,{tags:["Private"]}),i.prototype.publish("xAxisAutoGridCount",!0,"boolean","Specifies Whether Number of GridCount Is Specified Automatically, According To The Axis Size",null,{tags:["Advanced"]}),i.prototype.publish("xAxisGridPosition","middle","set","Specifies If A Grid Line Is Placed On The Center of A Cell or On The Beginning of A Cell",["start","middle"],{tags:["Advanced"]}),i.prototype.publish("xAxisBoldPeriodBeginning",!0,"boolean","When parse dates is on for the category axis, the chart will try to highlight the beginning of the periods, like month, in bold.",null,{tags:["Intermediate"]}),i.prototype.publish("yAxisBoldPeriodBeginning",!0,"boolean","When parse dates is on for the category axis, the chart will try to highlight the beginning of the periods, like month, in bold.",null,{tags:["Intermediate"]}),i.prototype.publish("xAxisDashLength",0,"number","Length of a dash. 0 means line is not dashed.",null,{tags:["Advanced"]}),i.prototype.publish("yAxisDashLength",0,"number","Length of a dash. 0 means line is not dashed.",null,{tags:["Advanced"]}),i.prototype.publish("xAxisFillAlpha",0,"number","Fill opacity. Every second space between grid lines can be filled with color. Set fillAlpha to a value greater than 0 to see the fills.",null,{tags:["Intermediate"]}),i.prototype.publish("yAxisFillAlpha",0,"number","Fill opacity. Every second space between grid lines can be filled with color. Set fillAlpha to a value greater than 0 to see the fills.",null,{tags:["Intermediate"]}),i.prototype.publish("xAxisFillColor",null,"html-color","Fill color. Every second space between grid lines can be filled with color. Set fillAlpha to a value greater than 0 to see the fills.",null,{tags:["Intermediate"]}),i.prototype.publish("yAxisFillColor",null,"html-color","Fill color. Every second space between grid lines can be filled with color. Set fillAlpha to a value greater than 0 to see the fills.",null,{tags:["Intermediate"]}),i.prototype.publish("xAxisGridAlpha",.2,"number","Grid alpha.",null,{tags:["Intermediate"]}),i.prototype.publish("yAxisGridAlpha",.2,"number","Grid alpha.",null,{tags:["Intermediate"]}),i.prototype.publish("yAxisTitleOffset",null,"number","",null,{tags:["Intermediate"]}),i.prototype.publish("startOnAxis",!0,"boolean","Draw Chart Starting On Axis.",null,{tags:["Intermediate"]}),i.prototype.publish("startDuration",.3,"number","Start Duration (sec)",null,{tags:["Private"]}),i.prototype.publish("useImgPatterns",!1,"boolean","Enable Image Pattern backgrounds",null,{tags:["Private"]}),i.prototype.publish("imgPatternArr",'["../ampatterns/black/pattern2.png"]',"string","Background Pattern Images (Not used if '[]')",null,{inputType:"textarea",tags:["Private"]}),i.prototype.publish("useClonedPalette",!1,"boolean","Enable or disable using a cloned palette",null,{tags:["Intermediate","Shared"]}),i.prototype.updateChartOptions=function(){return this._chart.dataDateFormat=this.dataDateFormat(),this._chart.type="serial",this._chart.startDuration=this.startDuration(),this._chart.rotate=this.orientation()==="vertical",this._chart.categoryField=this._categoryField,this._chart.color=this.fontColor(),this._chart.fontSize=this.fontSize(),this._chart.fontFamily=this.fontFamily(),this._chart.categoryAxis={},this._chart.categoryAxis.autoGridCount=this.xAxisAutoGridCount(),this._chart.categoryAxis.gridPosition=this.xAxisGridPosition(),this._chart.categoryAxis.axisAlpha=this.axisAlpha(),this._chart.categoryAxis.gridAlpha=this.xAxisGridAlpha(),this._chart.categoryAxis.startOnAxis=this.startOnAxis(),this._chart.categoryAxis.labelRotation=this.xAxisLabelRotation(),this._chart.categoryAxis.title=this.xAxisTitle(),this._chart.categoryAxis.axisColor=this.xAxisBaselineColor(),this._chart.categoryAxis.axisThickness=this.axisLineWidth(),this._chart.categoryAxis.boldPeriodBeginning=this.xAxisBoldPeriodBeginning(),this._chart.categoryAxis.dashLength=this.xAxisDashLength(),this._chart.categoryAxis.fillAlpha=this.xAxisFillAlpha(),this._chart.categoryAxis.fillColor=this.xAxisFillColor(),this._chart.categoryAxis.fontSize=this.axisFontSize(),this._chart.categoryAxis.color=this.xAxisFontColor(),this._chart.categoryAxis.titleColor=this.xAxisTitleFontColor(),this._chart.categoryAxis.titleFontSize=this.xAxisTitleFontSize(),this._chart.titles=[],this.marginLeft()&&(this._chart.marginLeft=this.marginLeft()),this.marginRight()&&(this._chart.marginRight=this.marginRight()),this.marginTop()&&(this._chart.marginTop=this.marginTop()),this.marginBottom()&&(this._chart.marginBottom=this.marginBottom()),this._chart.dataProvider=this.formatData(this._data),this._chart.valueAxes[0].title=this.yAxisTitle(),this._chart.valueAxes[0].titleColor=this.yAxisTitleFontColor(),this._chart.valueAxes[0].titleFontSize=this.yAxisTitleFontSize(),this._chart.valueAxes[0].axisThickness=this.axisLineWidth(),this._chart.valueAxes[0].color=this.yAxisFontColor(),this._chart.valueAxes[0].fontSize=this.axisFontSize(),this._chart.valueAxes[0].axisColor=this.yAxisBaselineColor(),this._chart.valueAxes[0].axisAlpha=this.axisAlpha(),this._chart.valueAxes[0].fillColor=this.yAxisFillColor(),this._chart.valueAxes[0].fillAlpha=this.yAxisFillAlpha(),this._chart.valueAxes[0].gridAlpha=this.yAxisGridAlpha(),this._chart.valueAxes[0].dashLength=this.yAxisDashLength(),this._chart.valueAxes[0].boldPeriodBeginning=this.yAxisBoldPeriodBeginning(),this._chart.valueAxes[0].axisTitleOffset=this.yAxisTitleOffset(),this.showScrollbar()?this._chart.chartScrollbar.enabled=!0:this._chart.chartScrollbar.enabled=!1,this._chart},i.prototype.buildGraphObj=function(e,t){var n=this,r={};r.balloonText=n.tooltipTemplate(),r.lineAlpha=n.lineOpacity(),r.lineColor=n.lineColor(),r.lineThickness=n.lineWidth(),r.bullet=n.bulletType(),r.bulletSize=n.bulletSize(),r.dashLength=n.dashedLineStyle(),r.type=e,r.title="";var i=["value","open","close","high","low"];i.forEach(function(e){typeof n["_"+e+"Field"]!="undefined"&&typeof n["_"+e+"Field"][t]!="undefined"&&(r[e+"Field"]=n["_"+e+"Field"][t])});try{if(n.useImgPatterns()){var s=JSON.parse(n.imgPatternArr());typeof s[t]!="undefined"&&(r.pattern=s[t])}else r.pattern=""}catch(o){console.log("e:"),console.log(o)}return r},i.prototype.formatData=function(e){var t=[],n=this;return e.forEach(function(e){var r={};n._columns.forEach(function(t,n){r[t]=e[n]}),t.push(r)}),t},i.prototype.columns=function(e){if(!arguments.length)return this._columns;var n=t.prototype.columns.apply(this,arguments),r=this;return arguments.length?(this._categoryField=e[0],this._valueField=[],e.slice(1,e.length).forEach(function(e){r._valueField.push(e)}),this._columns=e,this):n},i.prototype.enter=function(e,i){t.prototype.enter.apply(this,arguments);var s=this,o={type:"serial",chartScrollbar:{}};typeof define=="function"&&define.amd&&(o.pathToImages=r.toUrl("amchartsImg")),this._chart=n.makeChart(e,o),this._chart.addListener("clickGraphItem",function(e){s.click(s.rowToObj(s._data[e.index]),s._columns[e.target.columnIndex+1])})},i.prototype.update=function(e,n){t.prototype.update.apply(this,arguments),e.style.width=this.size().width+"px",e.style.height=this.size().height+"px",this._palette=this._palette.switch(this.paletteID()),this.useClonedPalette()&&(this._palette=this._palette.cloneNotExists(this.paletteID()+"_"+this.id()))},i});