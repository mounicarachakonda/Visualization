(function(e,t){typeof define=="function"&&define.amd?define(["d3","../common/HTMLWidget","../layout/Surface","../common/TextBox","../common/Text","css!./Tabbed"],t):e.layout_Tabbed=t(e.d3,e.common_HTMLWidget,e.layout_Surface,e.common_TextBox,e.common_Text)})(this,function(e,t,n,r,i){function s(){t.call(this),this._tag="div"}return s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.prototype._class+=" layout_Tabbed",s.prototype.publish("showTabs",!0,"boolean","Show Tabs",null,{}),s.prototype.publish("surfacePadding",4,"number","Padding"),s.prototype.publish("activeTabIdx",0,"number","Index of active tab",null,{}),s.prototype.publish("labels",[],"array","Array of tab labels sharing an index with ",null,{tags:["Private"]}),s.prototype.publish("widgets",[],"widgetArray","widgets",null,{tags:["Private"]}),s.prototype.clearTabs=function(){return this.widgets([]),this},s.prototype.addTab=function(e,t,r,s){var o=e.size();o.width===0&&o.height===0&&e.size({width:"100%",height:"100%"});var u=this.labels(),a=this.widgets();r&&this.activeTabIdx(this.widgets().length),u.push(t);var f=(new n).widget(e?e:(new i).text("No widget defined for tab"));return a.push(f),this.labels(u),this.widgets(a),s&&s(f),this},s.prototype.widgetSize=function(e){var t=this.clientWidth(),n=this.clientHeight(),r=this._tabContainer.node().getBoundingClientRect();return typeof r.height!="undefined"&&(n-=r.height),{width:t,height:n}},s.prototype.enter=function(e,n){t.prototype.enter.apply(this,arguments),this._tabContainer=n.append("div"),this._contentContainer=n.append("div")},s.prototype.update=function(n,r){t.prototype.update.apply(this,arguments);var i=this;r.style("padding",this.surfacePadding()+"px");var s=this._tabContainer.selectAll(".tab-button.id"+this.id()).data(this.showTabs()?this.labels():[],function(e){return e});s.enter().append("span").attr("class","tab-button id"+this.id()).style("cursor","pointer").on("click",function(e,t){i.click(i.widgets()[t].widget(),e,t),i.activeTabIdx(t).render()}),s.classed("active",function(e,t){return i.activeTabIdx()===t}).text(function(e){return e}),s.exit().remove();var o=this._contentContainer.selectAll(".tab-content.id"+this.id()).data(this.widgets(),function(e){return e.id()});o.enter().append("div").attr("class","tab-content id"+this.id()).each(function(e,t){e.target(this)}),o.classed("active",function(e,t){return i.activeTabIdx()===t}).style("display",function(e,t){return i.activeTabIdx()===t?"block":"none"}).each(function(t,n){t.visible(i.activeTabIdx()===n);if(i.activeTabIdx()===n){var r=i.widgetSize(e.select(this));t.surfaceBorderWidth(i.showTabs()?null:0).surfacePadding(i.showTabs()?null:0).resize(r)}}),o.exit().each(function(e,t){e.target(null)}).remove()},s.prototype.click=function(e,t,n){},s});