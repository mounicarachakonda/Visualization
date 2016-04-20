!function(t,e){"function"==typeof define&&define.amd?define(["d3","../common/HTMLWidget","../common/TextBox","css!./Surface","css!font-awesome"],e):t.layout_Surface=e(t.d3,t.common_HTMLWidget,t.common_TextBox)}(this,function(t,e,i){function l(){e.call(this),this._tag="div",this._surfaceButtons=[]}return l.prototype=Object.create(e.prototype),l.prototype.constructor=l,l.prototype._class+=" layout_Surface",l.prototype.publish("title","","string","Title",null,{tags:["Intermediate"]}),l.prototype.publish("widget",null,"widget","Widget",null,{tags:["Basic"]}),l.prototype.publish("surfaceTitlePadding",null,"number","Title Padding (px)",null,{tags:["Advanced"]}),l.prototype.publish("surfaceTitleFontSize",null,"number","Title Font Size (px)",null,{tags:["Advanced"]}),l.prototype.publish("surfaceTitleFontColor",null,"html-color","Title Font Color",null,{tags:["Advanced"]}),l.prototype.publish("surfaceTitleFontFamily",null,"string","Title Font Family",null,{tags:["Advanced"]}),l.prototype.publish("surfaceTitleFontBold",!0,"boolean","Enable Bold Title Font",null,{tags:["Advanced"]}),l.prototype.publish("surfaceTitleBackgroundColor",null,"html-color","Title Background Color",null,{tags:["Advanced"]}),l.prototype.publish("surfacePadding",null,"string","Surface Padding (px)",null,{tags:["Intermediate"]}),l.prototype.publish("surfaceBackgroundColor",null,"html-color","Surface Background Color",null,{tags:["Advanced"]}),l.prototype.publish("surfaceBorderWidth",null,"number","Surface Border Width (px)",null,{tags:["Advanced"]}),l.prototype.publish("surfaceBorderColor",null,"html-color","Surface Border Color",null,{tags:["Advanced"]}),l.prototype.publish("surfaceBorderRadius",null,"number","Surface Border Radius (px)",null,{tags:["Advanced"]}),l.prototype.publish("surfaceTitleAlignment","center","set","Title Alignment",["left","right","center"],{tags:["Basic"]}),l.prototype.publish("buttonAnnotations",[],"array","Button Array",null,{tags:["Private"]}),l.prototype.widgetSize=function(t,e){var i=this.clientWidth(),l=this.clientHeight();return this.title()&&(l-=this.calcHeight(t)),l-=this.calcFrameHeight(e),i-=this.calcFrameWidth(e),{width:i,height:l}},l.prototype.enter=function(t,i){e.prototype.enter.apply(this,arguments)},l.prototype.update=function(i,l){e.prototype.update.apply(this,arguments);var o=this;l.style("border-width",this.surfaceBorderWidth_exists()?this.surfaceBorderWidth()+"px":null).style("border-color",this.surfaceBorderColor()).style("border-radius",this.surfaceBorderRadius_exists()?this.surfaceBorderRadius()+"px":null).style("background-color",this.surfaceBackgroundColor());var n=l.selectAll(".surfaceTitle").data(this.title()?[this.title()]:[]);n.enter().insert("h3","div").attr("class","surfaceTitle"),n.text(function(t){return t}).style("text-align",this.surfaceTitleAlignment()).style("color",this.surfaceTitleFontColor()).style("font-size",this.surfaceTitleFontSize_exists()?this.surfaceTitleFontSize()+"px":null).style("font-family",this.surfaceTitleFontFamily()).style("font-weight",this.surfaceTitleFontBold()?"bold":"normal").style("background-color",this.surfaceTitleBackgroundColor()).style("padding",this.surfaceTitlePadding_exists()?this.surfaceTitlePadding()+"px":null),n.exit().remove();var r=l.select(".surfaceTitle"),s=r.append("div").attr("class","html-button-container").selectAll(".surface-button").data(this.buttonAnnotations());s.enter().append("button").classed("surface-button",!0).each(function(e,i){var l=o._surfaceButtons[i]=t.select(this).attr("class","surface-button"+(e["class"]?" "+e["class"]:"")).attr("id",e.id).style("padding",e.padding).style("width",e.width).style("height",e.height).style("cursor","pointer");"FontAwesome"===e.font?l.style("background","transparent").style("border","none").on("click",function(t){o.click(t)}).append("i").attr("class","fa").text(function(t){return e.label}):l.text(function(t){return e.label}).on("click",function(t){o.click(t)})}),s.exit().each(function(e,i){var l=t.select(this);delete o._surfaceButtons[i],l.remove()});var a=l.selectAll("#"+this._id+" > .surfaceWidget").data(this.widget()?[this.widget()]:[],function(t){return t._id});a.enter().append("div").attr("class","surfaceWidget").each(function(e){t.select(o.element().node().parentElement).classed("content-icon content-icon-"+e.classID().split("_")[1],!0),e.target(this)}),a.style("padding",this.surfacePadding_exists()?this.surfacePadding()+"px":null).each(function(e){var i=o.widgetSize(l.select("h3"),t.select(this));i.width<0&&(i.width=0),i.height<0&&(i.height=0),e.resize({width:i.width,height:i.height})}),a.exit().each(function(t){t.target(null)}).remove()},l.prototype.exit=function(t,i){this.widget()&&(this.widget(null),this.render()),e.prototype.exit.apply(this,arguments)},l.prototype.click=function(t){console.log("Clicked: "+t.id)},l});