(function(e,t){typeof define=="function"&&define.amd?define(["d3","../common/HTMLWidget","css!./Paginator"],t):e.other_Paginator=t(e.d3,e.common_HTMLWidget)})(this,function(e,t){function n(){t.call(this),this._tag="div",this._tNumPages=1,this._numList=[]}return n.prototype=Object.create(t.prototype),n.prototype._class+=" other_Paginator",n.prototype.publish("itemsPerPage",2,"number","Pagination items per page",null,{tags:["Private"]}),n.prototype.publish("numItems",10,"number","Pagination total number of items",null,{tags:["Private"]}),n.prototype.publish("pageNumber",1,"number","Pagination set or get the page number",null,{tags:["Private"]}),n.prototype.enter=function(e,n){t.prototype.enter.apply(this,arguments),this.paginator=n.append("ul").attr("class","paginator pagination pagination-sm")},n.prototype.update=function(t,n){var r=this;this._tNumPages=Math.ceil(this.numItems()/this.itemsPerPage())||1,this.pageNumber()>this._tNumPages&&this.pageNumber(1),this._numList=[];if(this.numItems()){this._numList.push("previous");for(var i=0;i<this._tNumPages;i++)this._numList.push(i+1);this._numList.push("next")}var s=this.paginator.selectAll("li").data(this._numList,function(e){return e});s.enter().append("li").append("a").attr("href","#").on("click",function(t,n){e.event.preventDefault();if(t==="next"){if(r.pageNumber()+1<=r._tNumPages){var i=r.pageNumber()+1;r.pageNumber(i),r._onSelect(i,"next")}}else if(t==="previous"){if(r.pageNumber()-1>=1){var s=r.pageNumber()-1;r.pageNumber(s),r._onSelect(s,"previous")}}else r.pageNumber(t),r._onSelect(t)}),s.classed("active",function(e,t){return t===r.pageNumber()}).select("a").text(function(e){return e}),s.exit().remove(),s.order(),this.numItems()===0&&e.select(t).remove()},n.prototype.exit=function(e,n){t.prototype.exit.apply(this,arguments)},n});