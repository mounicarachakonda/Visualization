define("css!src/chart/XYAxis",[],function(){}),function(e,t){typeof define=="function"&&define.amd?define("src/chart/XYAxis",["d3","../common/SVGWidget","css!./XYAxis"],t):e.chart_XYAxis=t(e.d3,e.common_SVGWidget)}(this,function(e,t){function n(n){t.call(this),this._drawStartPos="origin",this._dateParserData=e.time.format("%Y-%m-%d").parse,this._dateParserValue=e.time.format("%Y-%m-%d").parse}n.prototype=Object.create(t.prototype),n.prototype._class+=" chart_XYAxis",n.prototype.publish("orientation","horizontal","set","Selects orientation for the axis",["horizontal","vertical"]),n.prototype.publish("selectionMode",!1,"boolean","Range Selector"),n.prototype.publish("xAxisType","ordinal","set","X-Axis Type",["ordinal","linear","time"]),n.prototype.publish("xAxisTypeTimePattern","%Y-%m-%d","string","Time Series Pattern"),n.prototype.publish("xAxisDomainLow","","string","X-Axis Low"),n.prototype.publish("xAxisDomainHigh","","string","X-Axis High"),n.prototype.publish("yAxisTitle","","string","Y-Axis Title"),n.prototype.publish("yAxisTickCount",10,"number","Y-Axis Tick Count"),n.prototype.publish("yAxisTickFormat","s","string","Y-Axis Tick Format"),n.prototype.publish("yAxisType","linear","set","Y-Axis Type",["none","linear","pow","log","time"]),n.prototype.publish("yAxisTypeTimePattern","%Y-%m-%d","string","Time Series Pattern"),n.prototype.publish("yAxisTypePowExponent",2,"number","Exponent for Pow on Value Axis"),n.prototype.publish("yAxisTypeLogBase",10,"number","Base for log on Value Axis"),n.prototype.publish("yAxisDomainLow","","string","Y-Axis Low"),n.prototype.publish("yAxisDomainHigh","","string","Y-Axis High"),n.prototype.publish("yAxisDomainPadding",5,"number","Y-Axis Low/High Padding (if no low/high specified"),n.prototype.publish("regions",[],"array","Regions"),n.prototype.publish("sampleData","","set","Display Sample Data",["","ordinal","ordinalRange","linear","time-x","time-y"]),n.prototype._sampleData=n.prototype.sampleData,n.prototype.sampleData=function(e){var t=n.prototype._sampleData.apply(this,arguments);if(arguments.length)switch(e){case"ordinal":this.testDataOrdinal();break;case"ordinalRange":this.testDataOrdinalRange();break;case"linear":this.testDataLinear();break;case"time-x":this.testDataTimeX();break;case"time-y":this.testDataTimeY()}return t},n.prototype.resetSelection=function(){return this._prevBrush=null,this},n.prototype.testData=function(){return this.sampleData("ordinal"),this},n.prototype.testDataOrdinal=function(){return this.xAxisType("ordinal").yAxisType("linear").columns(["Subject","Year 1","Year 2","Year 3"]).data([["Geography",75,68,65],["English",45,"55",52],["Math",98,92,90],["Science",66,null,56]]),this},n.prototype.testDataOrdinalRange=function(){return this.xAxisType("ordinal").yAxisType("linear").columns(["Region","May","June","July"]).data([["Munster",[1,11],[2,14],[8,18]],["Leinster",[3,10],[1,15],["7",16]],["Ulster",[2,14],[5,12],[8,17]],["Connacht",[0,10],[1,12],[7,16]]]),this},n.prototype.testDataLinear=function(){return this.xAxisType("linear").yAxisType("linear").columns(["Subject","2nd Year"]).data([[10,75],[13,45],[14,45],[15,85],[16,98],[19,66]]),this},n.prototype.testDataTimeX=function(){var e=[{DateTime:"2014-06-01T07:01:39",Price:821},{DateTime:"2015-12-01T01:33:35",Price:841},{DateTime:"2015-12-25T23:58:34",Price:1356},{DateTime:"2015-05-16T17:02:17",Price:1136},{DateTime:"2015-09-11T10:37:50",Price:1094},{DateTime:"2014-11-03T21:34:47",Price:1266},{DateTime:"2015-11-05T12:31:45",Price:1159},{DateTime:"2014-11-27T16:25:57",Price:1572},{DateTime:"2015-12-26T15:13:48",Price:1083},{DateTime:"2014-06-18T16:21:06",Price:1324},{DateTime:"2014-05-13T05:35:12",Price:1553},{DateTime:"2014-06-01T20:40:50",Price:1216},{DateTime:"2015-07-15T07:19:39",Price:1403},{DateTime:"2016-03-17T09:32:59",Price:1382},{DateTime:"2015-05-28T02:24:27",Price:1337},{DateTime:"2015-08-08T18:46:00",Price:1084},{DateTime:"2015-10-25T15:42:48",Price:1217},{DateTime:"2016-01-07T00:48:47",Price:1464},{DateTime:"2015-12-13T23:21:16",Price:894},{DateTime:"2014-06-13T22:49:52",Price:967},{DateTime:"2015-01-07T20:33:03",Price:1033},{DateTime:"2015-02-28T10:08:16",Price:1119},{DateTime:"2015-11-09T15:33:56",Price:1298},{DateTime:"2015-04-18T00:05:19",Price:808},{DateTime:"2016-04-19T04:09:19",Price:1331},{DateTime:"2015-11-26T05:03:53",Price:1221},{DateTime:"2014-09-17T08:59:31",Price:1450},{DateTime:"2016-03-29T15:34:22",Price:1403},{DateTime:"2015-09-13T13:46:01",Price:1088},{DateTime:"2014-12-04T20:41:36",Price:1503},{DateTime:"2015-06-19T12:43:51",Price:1350},{DateTime:"2014-05-21T12:58:46",Price:874},{DateTime:"2016-02-11T07:48:56",Price:1519},{DateTime:"2015-02-23T22:35:44",Price:1383},{DateTime:"2015-11-28T11:35:45",Price:928},{DateTime:"2016-01-17T10:27:12",Price:941},{DateTime:"2015-02-04T07:17:50",Price:1076},{DateTime:"2016-04-11T08:28:10",Price:907},{DateTime:"2015-02-27T15:02:35",Price:1263},{DateTime:"2016-03-23T15:54:53",Price:911},{DateTime:"2014-09-26T19:15:38",Price:1076},{DateTime:"2015-10-15T15:13:47",Price:1052},{DateTime:"2015-04-07T13:22:52",Price:1481},{DateTime:"2016-01-31T11:15:52",Price:1248},{DateTime:"2014-11-20T09:46:51",Price:1360},{DateTime:"2015-10-19T15:05:26",Price:1094},{DateTime:"2016-04-30T09:54:01",Price:1552},{DateTime:"2015-06-07T23:49:49",Price:1329},{DateTime:"2015-07-10T20:12:46",Price:801},{DateTime:"2014-12-22T19:11:04",Price:1066},{DateTime:"2015-12-07T17:03:07",Price:1032},{DateTime:"2015-11-30T13:11:22",Price:1546},{DateTime:"2014-06-29T07:24:44",Price:1042},{DateTime:"2014-08-03T08:15:25",Price:1326},{DateTime:"2015-09-01T20:32:23",Price:928},{DateTime:"2016-05-02T12:56:47",Price:1550},{DateTime:"2014-11-18T04:38:21",Price:972},{DateTime:"2016-05-03T01:05:51",Price:1164},{DateTime:"2015-02-03T17:16:07",Price:998},{DateTime:"2015-09-04T21:29:16",Price:1199},{DateTime:"2015-12-02T10:44:32",Price:1250},{DateTime:"2016-01-26T16:11:51",Price:1241},{DateTime:"2015-05-30T12:42:11",Price:1336},{DateTime:"2014-09-11T10:19:44",Price:1231},{DateTime:"2016-04-06T05:54:55",Price:1276},{DateTime:"2016-02-18T00:29:49",Price:939},{DateTime:"2014-11-16T15:35:04",Price:1557},{DateTime:"2015-12-10T03:06:01",Price:1292},{DateTime:"2015-05-31T04:19:33",Price:1347},{DateTime:"2014-10-08T17:26:41",Price:1041},{DateTime:"2015-01-13T10:43:21",Price:1089},{DateTime:"2015-04-14T04:05:10",Price:999},{DateTime:"2015-10-05T11:47:54",Price:1520},{DateTime:"2015-06-26T00:22:00",Price:1342},{DateTime:"2015-05-13T14:32:54",Price:976},{DateTime:"2015-07-13T19:13:18",Price:1576},{DateTime:"2014-05-17T21:59:02",Price:1220},{DateTime:"2015-03-15T07:15:00",Price:1230},{DateTime:"2015-02-22T22:04:01",Price:1510},{DateTime:"2015-11-26T06:03:07",Price:816},{DateTime:"2014-07-02T20:20:52",Price:1343},{DateTime:"2015-07-14T13:10:03",Price:1285},{DateTime:"2015-11-01T03:18:14",Price:1424},{DateTime:"2015-03-17T12:04:38",Price:1109},{DateTime:"2015-11-19T05:47:16",Price:1278},{DateTime:"2015-11-12T09:03:53",Price:841},{DateTime:"2014-10-17T18:37:00",Price:1425},{DateTime:"2015-09-27T04:37:49",Price:1555},{DateTime:"2015-07-30T04:01:21",Price:1222},{DateTime:"2015-02-11T17:59:08",Price:1464},{DateTime:"2014-09-13T19:57:59",Price:1271},{DateTime:"2015-03-25T10:55:59",Price:1397},{DateTime:"2014-07-13T09:36:47",Price:915},{DateTime:"2015-02-15T10:49:48",Price:1015},{DateTime:"2014-10-24T08:50:59",Price:835},{DateTime:"2016-01-14T18:23:43",Price:1088},{DateTime:"2016-03-05T04:11:37",Price:1573},{DateTime:"2014-08-09T06:02:06",Price:1504},{DateTime:"2015-05-25T07:47:41",Price:1326},{DateTime:"2016-02-11T06:53:58",Price:1525}];return e.sort(function(e,t){return e.DateTime>t.DateTime?1:e.DateTime<t.DateTime?-1:0}),this.xAxisType("time").xAxisTypeTimePattern("%Y-%m-%dT%H:%M:%S").yAxisType("linear").columns(["Date","Price1","Price2","Price3"]).data(e.map(function(e,t){switch(t%3){case 0:return[e.DateTime,e.Price,null,null];case 1:return[e.DateTime,null,e.Price,null];case 2:return[e.DateTime,null,null,e.Price]}}))},n.prototype.testDataTimeY=function(){return this.xAxisType("ordinal").yAxisType("time").yAxisTypeTimePattern("%Y-%m-%d").columns(["Subject","Year 1"]).data([["Geography","2010-07-09"],["English","2010-07-12"],["Math",null],["Science","2010-07-21"]])};var r=n.prototype.xAxisTypeTimePattern;n.prototype.xAxisTypeTimePattern=function(t){var n=r.apply(this,arguments);return arguments.length&&(this._dateParserData=e.time.format(t).parse),n};var i=n.prototype.yAxisTypeTimePattern;return n.prototype.yAxisTypeTimePattern=function(t){var n=i.apply(this,arguments);return arguments.length&&(this._dateParserValue=e.time.format(t).parse),n},n.prototype.columns=function(e){return t.prototype.columns.apply(this,arguments)},n.prototype.formatData=function(e){switch(this.xAxisType()){case"time":return this._dateParserData(e);default:return e}},n.prototype.formatValue=function(e){if(!e)return e;if(e instanceof Array)return e.map(function(e){return this.formatValue(e)},this);switch(this.yAxisType()){case"time":return this._dateParserValue(e);default:if(typeof e=="string")return+e;return e}},n.prototype.formattedData=function(){return this.data().map(function(e){return e.map(function(e,t){return t===0?this.formatData(e):t>=this._columns.length?e:this.formatValue(e)},this)},this)},n.prototype.enter=function(t,n){this.dataAxis=e.svg.axis().orient("bottom"),this.valueAxis=e.svg.axis().orient("left"),this.svg=n.append("g"),this.svgRegions=n.append("g"),this.svgData=this.svg.append("g"),this.svgXAxis=this.svg.append("g"),this.svgXAxisText=this.svgXAxis.append("text").attr("y",-2).style("text-anchor","end"),this.svgYAxis=this.svg.append("g"),this.svgYAxisText=this.svgYAxis.append("text").attr("transform","rotate(-90)").attr("x",-2).attr("y",2).attr("dy",".71em").style("text-anchor","end"),this.svgBrush=n.append("g").attr("class","brush");var r=this;this.xBrush=e.svg.brush().on("brush",function(){return r.brushMoved.apply(r,arguments)}),this.yBrush=e.svg.brush().on("brush",function(){return r.brushMoved.apply(r,arguments)})},n.prototype.resizeBrushHandle=function(e,t,n){var r,i,s;return e==="e"||e==="w"?(r=+(e==="e"),i=r?1:-1,s=n/3,"M"+.5*i+","+s+"A6,6 0 0 "+r+" "+6.5*i+","+(s+6)+"V"+(2*s-6)+"A6,6 0 0 "+r+" "+.5*i+","+2*s+"Z"+"M"+2.5*i+","+(s+8)+"V"+(2*s-8)+"M"+4.5*i+","+(s+8)+"V"+(2*s-8)):(r=+(e==="s"),s=r?1:-1,i=t/3,"M"+i+", "+.5*s+"A6,6 0 0 "+(r+1)%2+" "+(i+6)+","+6.5*s+"H"+(2*i-6)+"A6,6 0 0 "+(r+1)%2+" "+2*i+","+.5*s+"Z"+"M"+(i+8)+","+2.5*s+"H"+(2*i-8)+"M"+(i+8)+","+4.5*s+"H"+(2*i-8))},n.prototype.brushMoved=t.prototype.debounce(function(){var t=this.formattedData().filter(function(e){var t;switch(this.xAxisType()){case"ordinal":return t=this.dataScale(e[0])+(this.dataScale.rangeBand?this.dataScale.rangeBand()/2:0),this.orientation()==="horizontal"?t>=this.xBrush.extent()[0]&&t<=this.xBrush.extent()[1]:t>=this.yBrush.extent()[0]&&t<=this.yBrush.extent()[1];default:return t=e[0],this.orientation()==="horizontal"?t>=this.xBrush.extent()[0]&&t<=this.xBrush.extent()[1]:t>=this.yBrush.extent()[0]&&t<=this.yBrush.extent()[1]}},this);this.selection(t)},250),n.prototype.dataPos=function(e){var t=this.dataScale(this.formatData(e));return this.xAxisType()==="ordinal"&&(t+=this.dataScale.rangeBand()/2),t},n.prototype.valuePos=function(e){return this.valueScale(this.formatValue(e))},n.prototype.calcMargin=function(e,t){var n={top:this.selectionMode()?10:2,right:this.selectionMode()?10:2,bottom:this.selectionMode()?10:2,left:this.selectionMode()?10:2},r=this.height()-n.top-n.bottom,i=t.append("g"),s=i.append("g").attr("class",this.orientation()==="horizontal"?"x axis":"y axis").attr("transform","translate(0,"+r+")").call(this.currAxis),o=s.node().getBBox();n.right-=this.width()-o.width-o.x,n.bottom=o.height;if(this.yAxisType()!=="none"){var u=i.append("g").attr("class",this.orientation()==="horizontal"?"y axis":"x axis").call(this.otherAxis),a=u.node().getBBox();n.left=a.width,n.top-=a.y}return i.remove(),n},n.prototype.update=function(t,n){var r=this,i=this.svgRegions.selectAll(".region").data(this.regions());i.enter().append("rect").attr("class","region"),this.orientation()==="horizontal"?i.attr("x",function(e){return r.dataPos(e.x0)}).attr("y",0).attr("width",function(e){return r.dataPos(e.x1)-r.dataPos(e.x0)}).attr("height",this.height()).style("stroke",function(e){return r._palette(e.colorID)}).style("fill",function(t){return e.hsl(r._palette(t.colorID)).brighter()}):i.attr("x",0).attr("y",function(e){return r.dataPos(e.x0)}).attr("width",this.width()).attr("height",function(e){return r.dataPos(e.x0)-r.dataPos(e.x1)}).style("stroke",function(e){return r._palette(e.colorID)}).style("fill",function(t){return e.hsl(r._palette(t.colorID)).brighter()}),i.exit().remove();if(this._prevXAxisType!==this.xAxisType()){this._prevXAxisType=this.xAxisType(),this._prevBrush=null;switch(this.xAxisType()){case"linear":this.dataScale=e.scale.linear();break;case"time":this.dataScale=e.time.scale();break;case"ordinal":default:this.dataScale=e.scale.ordinal()}this.dataAxis.scale(this.dataScale),this.xBrush.x(this.dataScale),this.yBrush.y(this.dataScale)}switch(this.yAxisType()){case"pow":this.valueScale=e.scale.pow().exponent(this.yAxisTypePowExponent());break;case"log":this.valueScale=e.scale.log().base(this.yAxisTypeLogBase());break;case"time":this.valueScale=e.time.scale();break;case"linear":default:this.valueScale=e.scale.linear()}this.valueAxis.scale(this.valueScale).ticks(this.yAxisTickCount(),this.yAxisTickFormat());var s=this.orientation()==="horizontal";this.dataAxis.orient(s?"bottom":"left"),this.valueAxis.orient(s?"left":"bottom"),this.currAxis=s?this.dataAxis:this.valueAxis,this.otherAxis=s?this.valueAxis:this.dataAxis;var o=s?this.xBrush:this.yBrush,u=s?this.yBrush:this.xBrush,a=u.extent();switch(this.xAxisType()){case"ordinal":this.dataScale.domain(this.data().map(function(e){return e[0]}));break;default:var f=this.xAxisDomainLow()?this.formatData(this.xAxisDomainLow()):e.min(this.formattedData(),function(e){return e[0]}),l=this.xAxisDomainHigh()?this.formatData(this.xAxisDomainHigh()):e.max(this.formattedData(),function(e){return e[0]});this.dataScale.domain([f,l])}var c=this.yAxisDomainLow()?this.formatValue(this.yAxisDomainLow()):e.min(this.formattedData(),function(t){return e.min(t.filter(function(e,t){return t>0&&r._columns[t]&&r._columns[t].indexOf("__")!==0&&e!==null}),function(e){return e instanceof Array?e[0]:e})}),h=this.yAxisDomainHigh()?this.formatValue(this.yAxisDomainHigh()):e.max(this.formattedData(),function(t){return e.max(t.filter(function(e,t){return t>0&&r._columns[t]&&r._columns[t].indexOf("__")!==0&&e!==null}),function(e){return e instanceof Array?e[1]:e})});switch(this.yAxisType()){case"time":break;default:if(this.yAxisDomainLow()===""&&this.yAxisDomainHigh()===""){var p=(h-c)*this.yAxisDomainPadding()/100,d=c-p;if(c>=0&&d<0||c===h)d=0;c=d,h+=p}}this.valueScale.domain([c,h]),this.dataScale.rangeRoundBands?this.dataScale.rangeRoundBands([s?0:this.height(),s?this.width():0],.1):this.dataScale.rangeRound&&this.dataScale.range([s?0:this.height(),s?this.width():0]),this.valueScale.range([s?this.height():0,s?0:this.width()]);var v=this.calcMargin(t,n);this.margin=v;var m=this.width()-v.left-v.right,g=this.height()-v.top-v.bottom,y=s?m:g,b=s?g:m;this.dataScale.rangeRoundBands?this.dataScale.rangeRoundBands([s?0:y,s?y:0],.1):this.dataScale.rangeRound&&this.dataScale.range([s?0:y,s?y:0]),this.valueScale.range([s?b:0,s?0:b]),this.svg.transition().attr("transform","translate("+v.left+","+v.top+")"),this.svgXAxis.transition().attr("class",s?"x axis":"y axis").attr("transform","translate(0,"+g+")").call(this.currAxis),this.svgXAxisText.attr("x",m-2).text(s?this.columns()[0]:this.yAxisTitle()),this.svgYAxis.transition().style("visibility",this.yAxisType()==="none"?"hidden":null).attr("class",s?"y axis":"x axis").call(this.otherAxis),this.svgYAxisText.text(s?this.yAxisTitle():this.columns()[0]);if(this.selectionMode()){if(!this._prevBrush)switch(this.xAxisType()){case"ordinal":o.extent([0,y]);break;default:o.extent(this.dataScale.domain())}else if(this._prevBrush&&this._prevBrush.orientation!==this.orientation())switch(this.xAxisType()){case"ordinal":o.extent([y-a[0]*y/this._prevBrush.maxExtent,y-a[1]*y/this._prevBrush.maxExtent]);break;default:o.extent(a)}this._prevBrush={orientation:this.orientation(),maxExtent:y}}this.svgBrush.attr("transform","translate("+v.left+", "+v.top+")").style("display",this.selectionMode()?null:"none").call(o).selectAll(".background").transition().attr("width",m).attr("height",g),this.svgBrush.selectAll(".extent, .resize rect").transition().attr(s?"y":"x",0).attr(s?"height":"width",b);var w=this.svgBrush.selectAll(".resize").selectAll("path").data(function(e){return e});w.enter().append("path"),w.transition().attr("d",function(e){return r.resizeBrushHandle(e,m,g)}),this.updateChart(t,n,v,m,g)},n.prototype.updateChart=function(e,t,n,r,i){},n.prototype.selection=function(e){console.log(e)},n}),define("css!src/chart/Scatter",[],function(){}),function(e,t){typeof define=="function"&&define.amd?define("src/chart/Scatter",["d3","../common/SVGWidget","./XYAxis","../api/INDChart","css!./Scatter"],t):e.chart_Column=t(e.d3,e.common_SVGWidget,e.chart_XYAxis,e.api_INDChart)}(this,function(e,t,n,r){function i(e){n.call(this),r.call(this)}return i.prototype=Object.create(n.prototype),i.prototype._class+=" chart_Scatter",i.prototype.implements(r.prototype),i.prototype.publish("paletteID","default","set","Palette ID",i.prototype._palette.switch(),{tags:["Basic","Shared"]}),i.prototype.publish("pointShape","cross","set","Shape of the data points",["circle","rectangle","cross"]),i.prototype.publish("pointSize",6,"number","Point Size"),i.prototype.publish("interpolate","","set","Interpolate Data",["","linear","step","step-before","step-after","basis","bundle","cardinal","monotone"]),i.prototype.publish("interpolateFill",!1,"boolean","Fill Interpolation"),i.prototype.publish("interpolateFillOpacity",.66,"number","Fill Interpolation Opacity"),i.prototype.xPos=function(e){return this.orientation()==="horizontal"?this.dataPos(e.label):this.valuePos(e.value)},i.prototype.yPos=function(e){return this.orientation()==="horizontal"?this.valuePos(e.value):this.dataPos(e.label)},i.prototype.updateChart=function(t,n,r,i,s){function u(e){switch(e){case"rectangle":return"rect";case"circle":return"circle";case"cross":return"path"}}var o=this;this._palette=this._palette.switch(this.paletteID()),this._prevPointShape!==this.pointShape()&&(this.svgData.selectAll(".data").remove(),this._prevPointShape=this.pointShape());var a=this.flattenData().map(function(e){return e.shape=u(o.pointShape()),e}),f=this.svgData.selectAll(".point").data(a,function(e,t){return e.shape+"_"+t});f.enter().append("g").attr("class","point").on("click",function(e,t){o.click(o.rowToObj(o.data()[e.rowIdx]),o._columns[e.colIdx])}).each(function(t){var n=e.select(this);n.append(t.shape).append("title")}),f.each(function(t){var n=e.select(this).select(t.shape);switch(t.shape){case"rect":n.attr("x",function(e){return o.xPos(e)-o.pointSize()/2}).attr("y",function(e){return o.yPos(e)-o.pointSize()/2}).attr("width",o.pointSize()).attr("height",o.pointSize()).style("fill",function(e,t){return o._palette(o._columns[e.colIdx])});break;case"circle":n.attr("cx",function(e){return o.xPos(e)}).attr("cy",function(e){return o.yPos(e)}).attr("r",o.pointSize()/2).style("fill",function(e,t){return o._palette(o._columns[e.colIdx])});break;case"path":n.attr("d",function(e){return"M"+(o.xPos(e)-o.pointSize()/2)+" "+(o.yPos(e)-o.pointSize()/2)+" "+"L"+(o.xPos(e)+o.pointSize()/2)+" "+(o.yPos(e)+o.pointSize()/2)+" "+"M"+(o.xPos(e)-o.pointSize()/2)+" "+(o.yPos(e)+o.pointSize()/2)+" "+"L"+(o.xPos(e)+o.pointSize()/2)+" "+(o.yPos(e)-o.pointSize()/2)}).style("stroke",function(e,t){return o._palette(o._columns[e.colIdx])})}n.select("title").text(function(e,t){return o.data()[e.rowIdx][0]+" ("+o.columns()[e.colIdx]+")"+": "+e.value})}),f.exit().remove();var l=this.svgData.selectAll(".area").data(this.columns().filter(function(e,t){return o.interpolate()&&o.interpolateFill()&&t>0}));l.enter().append("path").attr("class","area");var c=e.svg.area().interpolate(this.interpolate());switch(this.orientation()){case"horizontal":c.x(function(e){return o.xPos(e)}).y0(function(e){return s}).y1(function(e){return o.yPos(e)});break;default:c.y(function(e){return o.yPos(e)}).x0(function(e){return 0}).x1(function(e){return o.xPos(e)})}l.each(function(t,n){var r=e.select(this);r.attr("d",c(a.filter(function(e){return e.colIdx===n+1}))).style("opacity",o.interpolateFillOpacity()).style("stroke","none").style("fill",function(t,r){return e.hsl(o._palette(o._columns[n+1])).brighter()})}),l.exit().remove();var h=this.svgData.selectAll(".line").data(this.columns().filter(function(e,t){return o.interpolate()&&t>0}));h.enter().append("path").attr("class","line");var p=e.svg.line().x(function(e){return o.xPos(e)}).y(function(e){return o.yPos(e)}).interpolate(this.interpolate());h.each(function(t,n){var r=e.select(this),i=a.filter(function(e){return e.colIdx===n+1});r.attr("d",p(i)).style("stroke",function(e,t){return o._palette(o._columns[n+1])}).style("fill","none")}),h.exit().remove()},i.prototype.exit=function(e,n){t.prototype.exit.apply(this,arguments)},i}),function(e,t){typeof define=="function"&&define.amd?define("src/chart/Area",["d3","./Scatter"],t):e.chart_Area=t(e.d3,e.chart_Scatter)}(this,function(e,t){function n(e){t.call(this),this.interpolate("linear"),this.interpolateFill(!0)}return n.prototype=Object.create(t.prototype),n.prototype._class+=" chart_Area",n}),define("css!src/chart/Bubble",[],function(){}),function(e,t){typeof define=="function"&&define.amd?define("src/chart/Bubble",["d3","../common/SVGWidget","../api/I2DChart","../common/Text","../common/FAChar","css!./Bubble"],t):e.chart_Bubble=t(e.d3,e.common_SVGWidget,e.api_I2DChart,e.common_Text,e.common_FAChar)}(this,function(e,t,n,r,i){function s(r){t.call(this),n.call(this),this._drawStartPos="origin",this.labelWidgets={},this.d3Pack=e.layout.pack().sort(function(e,t){return e<t?-1:e>t?1:0}).size([this.width(),this.height()]).value(function(e){return e[1]})}return s.prototype=Object.create(t.prototype),s.prototype._class+=" chart_Bubble",s.prototype.implements(n.prototype),s.prototype.publish("paletteID","default","set","Palette ID",s.prototype._palette.switch(),{tags:["Basic","Shared"]}),s.prototype.size=function(e){var n=t.prototype.size.apply(this,arguments);return arguments.length&&this.d3Pack.size([this.width(),this.height()]),n},s.prototype.update=function(t,n){var s=this;this._palette=this._palette.switch(this.paletteID());var o=n.selectAll(".node").data(this._data.length?this.d3Pack.nodes({children:this.cloneData()}).filter(function(e){return!e.children}):[],function(e){return e[0]});o.enter().append("g").attr("class","node").attr("opacity",0).on("click",function(e){s.click(s.rowToObj(e),s._columns[1])}).each(function(t){var n=e.select(this);n.append("circle").attr("r",function(e){return e.r}).append("title"),t.__viz_faChar?s.labelWidgets[t[0]]=(new i).char(t.__viz_faChar).target(this).render():s.labelWidgets[t[0]]=(new r).text(t[0]).target(this).render()}),o.transition().attr("opacity",1).each(function(t){var n=e.select(this),r={x:t.x,y:t.y};n.select("circle").transition().attr("transform",function(e){return"translate("+r.x+","+r.y+")"}).style("fill",function(e){return s._palette(e[0])}).attr("r",function(e){return e.r}).select("title").text(function(e){return e[0]+" ("+e[1]+")"});if(t.__viz_faChar)s.labelWidgets[t[0]].pos(r).render();else{var i=t[0],o=s.labelWidgets[t[0]].getBBox().width;t.r*2<16?i="":t.r*2<o&&(i=i[0]+"..."),s.labelWidgets[t[0]].pos(r).text(i).render()}}),o.exit().transition().style("opacity",0).remove()},s}),define("css!src/chart/Column",[],function(){}),function(e,t){typeof define=="function"&&define.amd?define("src/chart/Column",["d3","./XYAxis","../api/INDChart","css!./Column"],t):e.chart_Column=t(e.d3,e.chart_XYAxis,e.api_INDChart)}(this,function(e,t,n){function r(e){t.call(this),n.call(this),this._linearGap=25}return r.prototype=Object.create(t.prototype),r.prototype._class+=" chart_Column",r.prototype.implements(n.prototype),r.prototype.publish("paletteID","default","set","Palette ID",r.prototype._palette.switch(),{tags:["Basic","Shared"]}),r.prototype.publish("stacked",!1,"boolean","Stacked Bars"),r.prototype.updateChart=function(t,n,r,i,s){var o=this;this._palette=this._palette.switch(this.paletteID());var u=10,a=0;switch(this.xAxisType()){case"ordinal":u=this.dataScale.rangeBand(),a=0;break;case"linear":case"time":u=Math.max(Math.abs(this.dataScale(2)-this.dataScale(1))*(100-this._linearGap)/100,u),a=-u/2}var f=e.scale.ordinal().domain(o._columns.filter(function(e,t){return t>0})).rangeRoundBands([0,u]),l=this.svgData.selectAll(".dataRow").data(this.formattedData());l.enter().append("g").attr("class","dataRow"),l.each(function(t,n){var r=e.select(this),i=r.selectAll("rect").data(t.filter(function(e,t){return t>0}));i.enter().append("rect").attr("class","columnRect").on("click",function(e,n){o.click(o.rowToObj(t),o._columns[n+1])}).append("title"),o.orientation()==="horizontal"?i.transition().attr("class","columnRect").attr("x",function(e,n){return o.dataScale(t[0])+(o.stacked()?0:f(o._columns[n+1]))+a}).attr("width",o.stacked()?u:f.rangeBand()).attr("y",function(e){return e instanceof Array?o.valueScale(e[1]):o.valueScale(e)}).attr("height",function(e){return e instanceof Array?o.valueScale(e[0])-o.valueScale(e[1]):s-o.valueScale(e)}).style("fill",function(e,t){return o._palette(o._columns[t+1])}):i.transition().attr("class","columnRect").attr("y",function(e,n){return o.dataScale(t[0])+(o.stacked()?0:f(o._columns[n+1]))+a}).attr("height",o.stacked()?u:f.rangeBand()).attr("x",function(e){return e instanceof Array?o.valueScale(e[0]):0}).attr("width",function(e){return e instanceof Array?o.valueScale(e[1])-o.valueScale(e[0]):o.valueScale(e)}).style("fill",function(e,t){return o._palette(o._columns[t+1])}),i.select("title").text(function(e,n){return t[0]+" ("+e+","+" "+o._columns[n+1]+")"}),o.stacked()&&i.sort(function(e,t){return t-e}),i.exit().transition().remove()}),l.exit().transition().remove()},r}),function(e,t){typeof define=="function"&&define.amd?define("src/chart/Line",["d3","./Scatter"],t):e.chart_Line=t(e.d3,e.chart_Scatter)}(this,function(e,t){function n(e){t.call(this),this.interpolate("linear")}return n.prototype=Object.create(t.prototype),n.prototype._class+=" chart_Line",n}),function(e,t){typeof define=="function"&&define.amd?define("src/chart/MultiChart",["d3","../common/SVGWidget","../api/INDChart","require"],t):e.chart_MultiChart=t(e.d3,e.common_SVGWidget,e.api_INDChart,e.require)}(this,function(e,t,n,r){function a(){t.call(this),n.call(this),this.chart(null),this._2dChartTypes=i,this._multiChartTypes=s,this._anyChartTypes=o,this._allChartTypes=u,this._allCharts={},this._allChartTypes.forEach(function(e){var t=JSON.parse(JSON.stringify(e));t.widget=null,this._allCharts[e.id]=t,this._allCharts[e.display]=t,this._allCharts[e.widgetClass]=t},this),this._allCharts.BAR=this._allCharts.COLUMN}var i=[{id:"BUBBLE",display:"Bubble",widgetClass:"chart_Bubble"},{id:"PIE",display:"Pie",widgetClass:"chart_Pie"},{id:"GOOGLE_PIE",display:"Pie (Google)",widgetClass:"google_Pie"},{id:"C3_DONUT",display:"Donut (C3)",widgetClass:"c3chart_Donut"},{id:"C3_PIE",display:"Pie (C3)",widgetClass:"c3chart_Pie"},{id:"AM_FUNNEL",display:"Area (amCharts)",widgetClass:"amchart_Funnel"},{id:"AM_PIE",display:"Pie (amCharts)",widgetClass:"amchart_Pie"},{id:"AM_PYRAMID",display:"Area (amCharts)",widgetClass:"amchart_Pyramid"},{id:"WORD_CLOUD",display:"Word Cloud",widgetClass:"other_WordCloud"}],s=[{id:"COLUMN",display:"Column",widgetClass:"chart_Column"},{id:"LINE",display:"Line",widgetClass:"chart_Line"},{id:"AREA",display:"Area",widgetClass:"chart_Area"},{id:"STEP",display:"Step",widgetClass:"chart_Step"},{id:"GOOGLE_BAR",display:"Bar (Google)",widgetClass:"google_Bar"},{id:"GOOGLE_COLUMN",display:"Column (Google)",widgetClass:"google_Column"},{id:"GOOGLE_LINE",display:"Line (Google)",widgetClass:"google_Line"},{id:"C3_AREA",display:"Area (C3)",widgetClass:"c3chart_Area"},{id:"C3_BAR",display:"Bar (C3)",widgetClass:"c3chart_Bar"},{id:"C3_COLUMN",display:"Column (C3)",widgetClass:"c3chart_Column"},{id:"C3_LINE",display:"Line (C3)",widgetClass:"c3chart_Line"},{id:"C3_SCATTER",display:"Scatter (C3)",widgetClass:"c3chart_Scatter"},{id:"C3_STEP",display:"Step (C3)",widgetClass:"c3chart_Step"},{id:"AM_AREA",display:"Area (amCharts)",widgetClass:"amchart_Area"},{id:"AM_BAR",display:"Bar (amCharts)",widgetClass:"amchart_Bar"},{id:"AM_LINE",display:"Line (amCharts)",widgetClass:"amchart_Line"}],o=[{id:"TABLE",display:"Table",widgetClass:"other_Table"}],u=i.concat(s.concat(o));return a.prototype=Object.create(t.prototype),a.prototype._class+=" chart_MultiChart",a.prototype.implements(n.prototype),a.prototype.publish("chartType","BUBBLE","set","Chart Type",u.map(function(e){return e.id}),{tags:["Basic"]}),a.prototype.publish("chart",null,"widget","Chart",null,{tags:["Basic"]}),a.prototype.columns=function(e){var n=t.prototype.columns.apply(this,arguments);return arguments.length&&this.chart()&&this.chart().columns(e),n},a.prototype.data=function(e){var n=t.prototype.data.apply(this,arguments);return arguments.length&&this.chart()&&this.chart().data(e),n},a.prototype.hasOverlay=function(){return this.chart()&&this.chart().hasOverlay()},a.prototype.visible=function(e){return arguments.length?(this.chart()&&this.chart().visible(e),this):this.chart()&&this.chart().visible()},a.prototype.requireContent=function(e,t){var n=this._allCharts[e].widget;if(n){t(n);return}var i=this,s="src/"+this._allCharts[e].widgetClass.split("_").join("/");r([s],function(r){n=new r,i._allCharts[e].widget=n,t(n)})},a.prototype.switchChart=function(e){var t=this.chart(),n=this;this.requireContent(this.chartType(),function(r){if(r!==t){var i=n.size();r.columns(n._columns).data(n._data).size(i),n.chart(r),r.click=function(e,t){n.click(e,t)},t&&t.data([]).size({width:1,height:1}).render()}e&&e(this)})},a.prototype.update=function(e,n){t.prototype.update.apply(this,arguments);var r=n.selectAll(".multiChart").data(this.chart()?[this.chart()]:[],function(e){return e._id});r.enter().append("g").attr("class","multiChart").each(function(e){e.target(this)});var i=this.size();r.each(function(e){e.size(i).render()}),r.exit().transition().each(function(e){e.target(null)}).remove()},a.prototype.exit=function(e,n){this.chart()&&this.chart().target(null),t.prototype.exit.apply(this,arguments)},a.prototype.render=function(e){if(this.chartType()&&(!this.chart()||this.chart().classID()!==this._allCharts[this.chartType()].widgetClass)){var n=this,r=arguments;return this.switchChart(function(){t.prototype.render.apply(n,r)}),this}return t.prototype.render.apply(this,arguments)},a}),function(e,t){typeof define=="function"&&define.amd?define("src/chart/MultiChartSurface",["d3","../common/ResizeSurface","./MultiChart","../api/INDChart"],t):e.chart_MultiChartSurface=t(e.d3,e.common_ResizeSurface,e.chart_MultiChart,e.api_INDChart)}(this,function(e,t,n,r){function i(){t.call(this),r.call(this),this._title="MultiChartSurface",this._content=new n,this._content.click=function(t,n){e.click(t,n)};var e=this;this._menu.click=function(t){e._content.chartType(t).render()},this.content(this._content),this.mode("all")}return i.prototype=Object.create(t.prototype),i.prototype._class+=" chart_MultiChartSurface",i.prototype.implements(r.prototype),i.prototype.testData=r.prototype.testData,i.prototype.publishProxy("chartType","_content"),i.prototype.columns=function(e){return arguments.length?(this.content().columns(e),this):this.content().columns()},i.prototype.data=function(e){return arguments.length?(this.content().data(e),this):this.content().data()},i.prototype.mode=function(e){if(!arguments.length)return this._mode;this._mode=e;switch(this._mode){case"2d":this.menu(this.content()._2dChartTypes.concat(this.content()._anyChartTypes).map(function(e){return e.display}).sort());break;case"multi":this.menu(this.content()._multiChartTypes.concat(this.content()._anyChartTypes).map(function(e){return e.display}).sort());break;case"all":default:this.menu(this.content()._allChartTypes.map(function(e){return e.display}).sort())}return this},i}),define("css!src/chart/Pie",[],function(){}),function(e,t){typeof define=="function"&&define.amd?define("src/chart/Pie",["d3","../common/SVGWidget","../api/I2DChart","../common/Text","../common/FAChar","css!./Pie"],t):e.chart_Pie=t(e.d3,e.common_SVGWidget,e.api_I2DChart,e.common_Text,e.common_FAChar)}(this,function(e,t,n,r,i){function s(r){t.call(this),n.call(this),this._outerText=!1,this._radius=100,this._innerRadius=0,this.labelWidgets={},this.d3Pie=e.layout.pie().sort(function(e,t){return e<t?-1:e>t?1:0}).value(function(e){return e[1]}),this.d3Arc=e.svg.arc().outerRadius(this._radius).innerRadius(this._innerRadius)}return s.prototype=Object.create(t.prototype),s.prototype._class+=" chart_Pie",s.prototype.implements(n.prototype),s.prototype.publish("paletteID","default","set","Palette ID",s.prototype._palette.switch(),{tags:["Basic","Shared"]}),s.prototype.size=function(e){var n=t.prototype.size.apply(this,arguments);return arguments.length&&this.radius(Math.min(this._size.width,this._size.height)/2),n},s.prototype.radius=function(e){return arguments.length?(this.d3Arc.outerRadius(e),this._radius=e,this):this._radius},s.prototype.innerRadius=function(e){return arguments.length?(this.d3Arc.innerRadius(e),this._innerRadius=e,this):this._innerRadius},s.prototype.outerText=function(e){return arguments.length?(this._outerText=e,this):this._outerText},s.prototype.intersection=function(e,t){return this.intersectCircle(e,t)},s.prototype.update=function(t,n){var s=this;this._palette=this._palette.switch(this.paletteID());var o=n.selectAll(".arc").data(this.d3Pie(this._data),function(e){return e.data[0]});o.enter().append("g").attr("class","arc").attr("opacity",0).on("click",function(e){s.click(s.rowToObj(e.data),s._columns[1])}).each(function(t){var n=e.select(this);n.append("path").attr("d",s.d3Arc).append("title"),t.data.__viz_faChar?s.labelWidgets[t.data[0]]=(new i).char(t.data.__viz_faChar).target(this).render():s.labelWidgets[t.data[0]]=(new r).text(t.data[0]).target(this).render()}),o.transition().attr("opacity",1).each(function(t){var n={x:0,y:1};if(s._outerText){var r=Math.cos((t.startAngle+t.endAngle-Math.PI)/2),i=Math.sin((t.startAngle+t.endAngle-Math.PI)/2),o=s.labelWidgets[t.data[0]].getBBox(),u=Math.abs(r)>Math.abs(i)?o.width:o.height;n.x=r*(s._radius+u),n.y=i*(s._radius+u)}else{var a=s.d3Arc.centroid(t);n={x:a[0],y:a[1]}}var f=e.select(this);f.select("path").transition().attr("d",s.d3Arc).style("fill",function(e){return s._palette(e.data[0])}).select("title").text(function(e){return e.data[0]+" ("+e.data[1]+")"}),s.labelWidgets[t.data[0]].pos(n).render().element().classed("innerLabel",!s._outerText).classed("outerLabel",s._outerText)}),o.exit().transition().style("opacity",0).remove();if(s._outerText){var u=n.selectAll("line").data(this.d3Pie(this._data),function(e){return e.data[0]});u.enter().append("line").attr("x1",0).attr("x2",0).attr("y1",-this._radius-3).attr("y2",-this._radius-8).attr("stroke","gray").attr("transform",function(e){return"rotate("+(e.startAngle+e.endAngle)/2*(180/Math.PI)+")"}),u.transition().attr("transform",function(e){return"rotate("+(e.startAngle+e.endAngle)/2*(180/Math.PI)+")"}),u.exit().remove()}},s}),function(e,t){typeof define=="function"&&define.amd?define("src/chart/Step",["d3","./Scatter"],t):e.chart_Step=t(e.d3,e.chart_Scatter)}(this,function(e,t){function n(e){t.call(this),this.interpolate("step")}return n.prototype=Object.create(t.prototype),n.prototype._class+=" chart_Step",n}),function(e){var t=document,n="appendChild",r="styleSheet",i=t.createElement("style");i.type="text/css",t.getElementsByTagName("head")[0][n](i),i[r]?i[r].cssText=e:i[n](t.createTextNode(e))}(".chart_XYAxis .axis path,.chart_XYAxis .axis line{fill:none;stroke:#000;shape-rendering:crispEdges}.chart_XYAxis .region{opacity:.33}.chart_XYAxis .brush rect.background{z-index:-999}.chart_XYAxis .brush .extent{stroke:none;fill:steelblue;fill-opacity:.125;shape-rendering:crispEdges}.chart_XYAxis .brush .resize path{fill:#eee;stroke:#666}.chart_Scatter .axis path,.chart_Scatter .axis line{fill:none;stroke:#000;shape-rendering:crispEdges}line.point,line.point1{stroke-width:2}.chart_Bubble circle{cursor:pointer}.chart_Bubble .common_FAChar{fill:#fff;pointer-events:none}.chart_Bubble .common_Text{pointer-events:none}.chart_Column .columnRect{fill:steelblue;cursor:pointer}.chart_Column .columnRect:hover{fill:#ff7f0e}.chart_Column .axis{fill:#000;font:10px sans-serif}.chart_Column .axis path,.chart_Column .axis line{fill:none;stroke:#000;shape-rendering:crispEdges}.chart_Column .data.axis path{display:none}.chart_Pie path{cursor:pointer}.chart_Pie .common_FAChar,.chart_Pie .common_Text{pointer-events:none}.chart_Pie .innerLabel.common_FAChar{fill:#fff}.chart_Pie .outerLabel.common_FAChar{fill:#000}.chart_Pie .innerLabel.common_Text{fill:#fff}.chart_Pie .outerLabel.common_Text{fill:#000}"),define("hpcc-viz-chart",function(){});