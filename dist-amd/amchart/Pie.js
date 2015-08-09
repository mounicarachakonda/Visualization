(function(e,t){typeof define=="function"&&define.amd?define(["d3","../common/HTMLWidget","amcharts.pie","../api/I2DChart"],t):e.amchart_Pie=t(e.d3,e.common_HTMLWidget,e.AmCharts,e.api_I2DChart)})(this,function(e,t,n,r){function i(){t.call(this),this._tag="div",this._chart={}}return i.prototype=Object.create(t.prototype),i.prototype.implements(r.prototype),i.prototype._class+=" amchart_Pie",i.prototype.publish("paletteID","default","set","Palette ID",i.prototype._palette.switch(),{tags:["Basic","Shared"]}),i.prototype.publish("fontFamily","Verdana","string","Label Font Family",null,{tags:["Basic","Shared"]}),i.prototype.publish("fontSize",11,"number","Label Font Size",null,{tags:["Basic","Shared"]}),i.prototype.publish("fontColor",null,"html-color","Label Font Color",null,{tags:["Basic","Shared"]}),i.prototype.publish("tooltipTemplate","[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>","string","Tooltip Text",null,{tags:["Intermediate"]}),i.prototype.publish("Depth3D",10,"number","3D Depth (px)",null,{tags:["Basic"]}),i.prototype.publish("Angle3D",15,"number","3D Angle (Deg)",null,{tags:["Basic"]}),i.prototype.publish("marginLeft",0,"number","Margin (Left)",null,{tags:["Intermediate"]}),i.prototype.publish("marginRight",0,"number","Margin (Right)",null,{tags:["Intermediate"]}),i.prototype.publish("marginTop",0,"number","Margin (Top)",null,{tags:["Intermediate"]}),i.prototype.publish("marginBottom",0,"number","Margin (Bottom)",null,{tags:["Intermediate"]}),i.prototype.publish("reverseDataSorting",!1,"boolean","Reverse Data Sorting",null,{tags:["Intermediate"]}),i.prototype.publish("holePercent",0,"number","Hole Size (Percent)",null,{tags:["Basic"]}),i.prototype.publish("radius",null,"number","Radius",null,{tags:["Basic"]}),i.prototype.publish("pieAlpha",[],"array","Individual Alpha per Slice",null,{tags:["Private"]}),i.prototype.publish("labelPosition","right","set","Label Position",["left","right"],{tags:["Intermediate"]}),i.prototype.updateChartOptions=function(){var e=this;this._chart.type="pie",this._chart.radius=this.radius(),this._chart.balloonText=e.tooltipTemplate(),this._chart.labelPosition=this.labelPosition(),this.marginLeft()&&(this._chart.marginLeft=this.marginLeft()),this.marginRight()&&(this._chart.marginRight=this.marginRight()),this.marginTop()&&(this._chart.marginTop=this.marginTop()),this.marginBottom()&&(this._chart.marginBottom=this.marginBottom()),this._chart.depth3D=this.Depth3D(),this._chart.angle=this.Angle3D(),this._chart.innerRadius=this.holePercent()+"%",this._chart.fontFamily=this.fontFamily(),this._chart.fontSize=this.fontSize(),this._chart.fontSize=this.fontSize(),this._chart.color=this.fontColor(),this._chart.allLabels=[],this._chart.pieAlpha=this.pieAlpha(),this._chart.titleField=this._columns[0],this._chart.valueField=this._columns[1];var t;return this.reverseDataSorting()?t=function(e,t){return e[1]<t[1]?1:-1}:t=function(e,t){return e[1]>t[1]?1:-1},this._data=this._data.sort(t),this._chart.dataProvider=this.formatData(this._data),this._chart.colors=this._data.map(function(e){return this._palette(e[0])},this),this.pieAlpha().forEach(function(e,t){typeof this._chart.chartData[t]=="undefined"&&(this._chart.chartData[t]={}),this._chart.chartData[t].alpha=e},this),this._chart},i.prototype.formatData=function(e){var t=[],n=this;return e.forEach(function(e){var r={};n._columns.forEach(function(t,n){r[t]=e[n]}),t.push(r)}),t},i.prototype.columns=function(e){if(!arguments.length)return this._columns;var n=t.prototype.columns.apply(this,arguments),r=this;return arguments.length?(this._valueField=[],e.slice(1,e.length).forEach(function(e){r._valueField.push(e)}),this._columns=e,this):n},i.prototype.enter=function(e,r){t.prototype.enter.apply(this,arguments);var i=this,s={type:"pie",theme:"none"};this._chart=n.makeChart(e,s),this._chart.addListener("clickSlice",function(e){i.click(i.rowToObj(i._data[e.dataItem.index]))})},i.prototype.update=function(e,t){this._palette=this._palette.switch(this.paletteID()),e.style.width=this.size().width+"px",e.style.height=this.size().height+"px",this.updateChartOptions(),this._chart.validateNow(),this._chart.validateData()},i});