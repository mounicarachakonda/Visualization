(function(e,t){typeof define=="function"&&define.amd?define(["d3","../common/HTMLWidget","./Cell","../common/Text","../chart/Pie","../chart/MultiChart","../c3chart/Line","css!./Grid"],t):e.layout_Grid=t(e.d3,e.common_HTMLWidget,e.layout_Cell,e.common_Text,e.chart_Pie,e.chart_MultiChart,e.c3chart_Line)})(this,function(e,t,n,r,i,s,o){function u(){t.call(this),this._tag="div",this._colCount=0,this._rowCount=0,this._colSize=0,this._rowSize=0,this.content([])}return u.prototype=Object.create(t.prototype),u.prototype._class+=" layout_Grid",u.prototype.publish("designMode",!1,"boolean","Design Mode",null,{tags:["Private"]}),u.prototype.publish("gutter",4,"number","Gap Between Widgets",null,{tags:["Private"]}),u.prototype.publish("fitTo","all","set","Sizing Strategy",["all","width"],{tags:["Private"]}),u.prototype.publish("cellPadding",null,"string","Cell Padding (px)",null,{tags:["Intermediate"]}),u.prototype.publish("content",[],"widgetArray","widgets",null,{tags:["Private"]}),u.prototype.testData=function(){return this.setContent(0,0,(new i).testData()).setContent(0,1,(new i).testData()).setContent(1,0,(new i).testData()).setContent(1,1,(new i).testData()).setContent(0,2,(new s).testData(),"Title AAA",2,2).setContent(2,0,(new o).testData(),"Title BBB",2,4),this},u.prototype.getDimensions=function(){var e={width:0,height:0};return this.content().forEach(function(t){e.width<t.gridCol()+t.gridColSpan()&&(e.width=t.gridCol()+t.gridColSpan()),e.height<t.gridRow()+t.gridRowSpan()&&(e.height=t.gridRow()+t.gridRowSpan())},this),e},u.prototype.clearContent=function(){this.content(this.content().filter(function(e){return e.target(null),!1}))},u.prototype.setContent=function(e,t,r,i,s,o){s=s||1,o=o||1,i=i||"",this.content(this.content().filter(function(n){return n.gridRow()===e&&n.gridCol()===t?(n.target(null),!1):!0}));if(r){var u=(new n).gridRow(e).gridCol(t).widget(r).title(i).gridRowSpan(s).gridColSpan(o);this.content().push(u)}return this},u.prototype.getCell=function(e,t){var n=null;return this.content().some(function(r){return e>=r.gridRow()&&e<r.gridRow()+r.gridRowSpan()&&t>=r.gridCol()&&t<r.gridCol()+r.gridColSpan()?(n=r,!0):!1}),n},u.prototype.getContent=function(e){var t=null;return this.content().some(function(n){return n.widget()._id===e?(t=n.widget(),!0):!1}),t},u.prototype.childMoved=u.prototype.debounce(function(e,t){this.render()},250),u.prototype.enter=function(e,n){t.prototype.enter.apply(this,arguments),n.style("position","relative"),this.dropDiv=n.append("div"),this.contentDiv=n.append("div"),this._scrollBarWidth=this.getScrollbarWidth()},u.prototype.findCurrentLocation=function(e){this._currLoc=[Math.floor((e.clientX-this._offsetX)/this._colSize),Math.floor((e.clientY-this._offsetY)/this._rowSize)]},u.prototype.overHandle=function(e){var t="",n=this._dragCell.handleSize(),r=this._dragCell.gridRowSpan()===this._currLoc[1]-this._dragCell.gridRow()+1,i=this._dragCell.gridRow()===this._currLoc[1],s=this._dragCell.gridColSpan()===this._currLoc[0]-this._dragCell.gridCol()+1,o=this._dragCell.gridCol()===this._currLoc[0],u=this._offsetY+this._currLoc[1]*this._rowSize,a=this._offsetX+this._currLoc[0]*this._colSize,f=this._colSize-this.gutter(),l=this._rowSize-this.gutter();return Math.ceil(u+l)>=e.clientY&&Math.floor(u+l-n)<=e.clientY&&r?t="s":Math.floor(u)<=e.clientY&&Math.ceil(u+n)>=e.clientY&&i&&(t="n"),Math.ceil(a+f)>=e.clientX&&Math.floor(a+f-n)<=e.clientX&&s?t+="e":Math.floor(a)<=e.clientX&&Math.ceil(a+n)>=e.clientX&&o&&(t+="w"),t},u.prototype.createDropTarget=function(e){var t=e[0]-this._dragCellOffsetX,n=e[1]-this._dragCellOffsetY,r=this._dragCell.gridColSpan(),i=this._dragCell.gridRowSpan(),s=document.createElement("div");s.id="grid-drop-target"+this.id(),s.className="grid-drop-target",this._element.node().appendChild(s),this.updateDropTarget(t,n,r,i)},u.prototype.setGridOffsets=function(){this._offsetX=this._element.node().getBoundingClientRect().left+this.gutter()/2,this._offsetY=this._element.node().getBoundingClientRect().top+this.gutter()/2},u.prototype.updateDropTarget=function(e,t,n,r){var i,s,o,u;i=this._offsetY+t*this._rowSize,s=this._offsetX+e*this._colSize,o=n*this._colSize-this.gutter(),u=r*this._rowSize-this.gutter();var a=document.getElementById("grid-drop-target"+this.id());a.style.top=i+"px",a.style.left=s+"px",a.style.width=o+"px",a.style.height=u+"px"},u.prototype.moveDropTarget=function(e){if(this._handle){var t=[];switch(this._handle){case"nw":t=[this._dragCell.gridCol()+this._dragCell.gridColSpan()-1,this._dragCell.gridRow()+this._dragCell.gridRowSpan()-1];break;case"n":case"ne":t=[this._dragCell.gridCol(),this._dragCell.gridRow()+this._dragCell.gridRowSpan()-1];break;case"e":case"se":case"s":t=[this._dragCell.gridCol(),this._dragCell.gridRow()];break;case"sw":case"w":t=[this._dragCell.gridCol()+this._dragCell.gridColSpan()-1,this._dragCell.gridRow()]}switch(this._handle){case"e":case"w":this._locY=t[1];break;default:this._locY=e[1]<=t[1]?e[1]:t[1]}switch(this._handle){case"n":case"s":this._locX=t[0];break;default:this._locX=e[0]<=t[0]?e[0]:t[0]}switch(this._handle){case"n":case"s":this._sizeX=this._dragCell.gridColSpan();break;default:this._sizeX=Math.abs(e[0]-t[0])+1}switch(this._handle){case"e":case"w":this._sizeY=this._dragCell.gridRowSpan();break;default:this._sizeY=Math.abs(e[1]-t[1])+1}}else if(document.getElementById("grid-drop-target"+this.id())!==null){var n=this.getCell(e[1],e[0]);n!==null&&this._dragCell._id!==n._id?(document.getElementById("grid-drop-target"+this.id()).className="grid-drop-target drop-target-over",this._locX=n.gridCol(),this._locY=n.gridRow(),this._sizeX=n.gridColSpan(),this._sizeY=n.gridRowSpan()):(document.getElementById("grid-drop-target"+this.id()).className="grid-drop-target",this._locX=e[0]-this._dragCellOffsetX,this._locY=e[1]-this._dragCellOffsetY,this._sizeX=this._dragCell.gridColSpan(),this._sizeY=this._dragCell.gridRowSpan())}this.updateDropTarget(this._locX,this._locY,this._sizeX,this._sizeY)},u.prototype.updateCells=function(t,n){var r=this,i=this.contentDiv.selectAll(".cell_"+this._id).data(this.content(),function(e){return e._id});i.enter().append("div").attr("class","cell_"+this._id).style("position","absolute").each(function(e){e.target(this),e.__grid_watch=e.watch(function(e,t,n){r._renderCount&&e.indexOf("grid")===0&&t!==n&&r.childMoved()})});var s=e.behavior.drag().on("dragstart",function(t){e.event.sourceEvent.stopPropagation(),r._dragCell=t,r.setGridOffsets(),r.findCurrentLocation(e.event.sourceEvent),r._element.selectAll(".dragHandle").style("visibility","hidden"),r._handle=r.overHandle(e.event.sourceEvent),r._dragCell._dragHandles.indexOf(r._handle)===-1&&(r._handle=undefined),r._dragCellOffsetX=r._currLoc[0]-t.gridCol(),r._dragCellOffsetY=r._currLoc[1]-t.gridRow(),r.createDropTarget(r._currLoc),setTimeout(function(){r.contentDiv.selectAll(".cell_"+r._id).classed("dragItem",function(e){return t._id===e._id}).classed("notDragItem",function(e){return t._id!==e._id})},0)}).on("drag",function(t){r._dragCell=t,r.findCurrentLocation(e.event.sourceEvent);if(typeof r._currLocation=="undefined"||r._currLocation[0]!==r._currLoc[0]||r._currLocation[1]!==r._currLoc[1])r._currLocation=r._currLoc,r.moveDropTarget(r._currLoc)}).on("dragend",function(){e.event.sourceEvent.stopPropagation(),r._element.selectAll(".dragHandle").style("visibility",null);if(r._handle)r._dragCell.gridRow(r._locY),r._dragCell.gridRowSpan(r._sizeY),r._dragCell.gridCol(r._locX),r._dragCell.gridColSpan(r._sizeX);else{var t=r._currLoc[1],n=r._currLoc[0],i=r._dragCell.gridRowSpan(),s=r._dragCell.gridColSpan(),o=r.getCell(r._currLoc[1],r._currLoc[0]);o===r._dragCell&&(i=o.gridRowSpan(),s=o.gridColSpan(),o=null);var u,a;o?(t=o.gridRow(),n=o.gridCol(),i=o.gridRowSpan(),s=o.gridColSpan(),o.gridCol(r._dragCell.gridCol()).gridColSpan(r._dragCell.gridColSpan()).gridRow(r._dragCell.gridRow()).gridRowSpan(r._dragCell.gridRowSpan()),u=n,a=t):(u=n-r._dragCellOffsetX,a=t-r._dragCellOffsetY),r._dragCell.gridCol(u).gridRow(a).gridColSpan(s).gridRowSpan(i)}var f=document.getElementById("grid-drop-target"+r.id());f.parentNode.removeChild(f),setTimeout(function(){r.contentDiv.selectAll(".cell_"+r._id).classed("dragItem",!1).classed("notDragItem",!1)},0),r._dragCell=null});this.designMode()?this.contentDiv.selectAll(".cell_"+this._id).call(s):this.contentDiv.selectAll(".cell_"+this._id).on(".drag",null),i.style("left",function(e){return e.gridCol()*t+r.gutter()/2+"px"}).style("top",function(e){return e.gridRow()*n+r.gutter()/2+"px"}).style("width",function(e){return e.gridColSpan()*t-r.gutter()+"px"}).style("height",function(e){return e.gridRowSpan()*n-r.gutter()+"px"}).each(function(e){e._parentElement.attr("draggable",r.designMode()).selectAll(".dragHandle").attr("draggable",r.designMode()),e.surfacePadding(r.cellPadding()).resize()}),i.exit().each(function(e){e.target(null),e.__grid_watch&&e.__grid_watch.remove()}).remove()},u.prototype.updateDropCells=function(e,t,n){var r=[];if(this.designMode())for(var i=0;i<e.height;++i)for(var s=0;s<e.width;++s)r.push({x:s,y:i});var o=this.dropDiv.selectAll(".dropCell_"+this._id).data(r);o.enter().append("div").attr("class","dropCell dropCell_"+this._id);var u=this;o.style("position","absolute").style("left",function(e){return e.x*t+u.gutter()/2+"px"}).style("top",function(e){return e.y*n+u.gutter()/2+"px"}).style("width",function(e){return 1*t-u.gutter()+"px"}).style("height",function(e){return 1*n-u.gutter()+"px"}),o.exit().remove()},u.prototype.update=function(e,n){t.prototype.update.apply(this,arguments),this._parentElement.style("overflow-x",this.fitTo()==="width"?"hidden":null),this._parentElement.style("overflow-y",this.fitTo()==="width"?"scroll":null);var r=this.getDimensions();this.designMode()&&(r.width++,r.height++);var i=(this.width()-(this.fitTo()==="width"?this._scrollBarWidth:0))/r.width,s=this.fitTo()==="all"?this.height()/r.height:i;this._colCount=r.width,this._rowCount=r.height,this._colSize=i,this._rowSize=s,this.updateCells(i,s),this.updateDropCells(r,i,s)},u.prototype.exit=function(e,n){t.prototype.exit.apply(this,arguments)},u.prototype.render=function(e){var n=this;return t.prototype.render.call(this,function(t){if(n.content().length){var r=n.content().length;n.content().forEach(function(n,i){setTimeout(function(){n.render(function(){--r===0&&e&&e(t)})},0)})}else e&&e(t)}),this},u});