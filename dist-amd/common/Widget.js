(function(e,t){typeof define=="function"&&define.amd?define(["d3"],t):(e.require=e.require||function(t,n){typeof t=="function"&&(n=t,t=[]);var r=t.map(function(t){if(t==="d3-cloud/d3.layout.cloud")return e.d3.layout.cloud;var n=t.substring("src/".length).split("/").join("_");return e[n]});n.apply(null,r)},e.common_Widget=t(e.d3))})(this,function(e){function n(){this._class=Object.getPrototypeOf(this)._class,this._id="_w"+t++,this._columns=[],this._data=[],this._pos={x:0,y:0},this._size={width:0,height:0},this._scale=1,this._target=null,this._parentElement=null,this._parentWidget=null,this._element=e.select(),this._watchArr=[],this._renderCount=0}var t=0;return n.prototype._class=" common_Widget",n.prototype.ieVersion=function(){var e=navigator.userAgent,t,n=e.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[];return/trident/i.test(n[1])?(t=/\brv[ :]+(\d+)/g.exec(e)||[],parseFloat(t[1])):/msie/i.test(n[1])?parseFloat(n[2]):null}(),n.prototype.isIE=n.prototype.ieVersion!==null,n.prototype.svgMarkerGlitch=n.prototype.isIE&&n.prototype.ieVersion<=12,n.prototype.MutationObserver=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver||function(e){this.callback=e,this.listeners=[];var t=function(e,t,n){this.callback=e,this.domNode=t,this.type=n};t.prototype={handleEvent:function(e){var t={type:this.type,target:this.domNode,addedNodes:[],removedNodes:[],previousSibling:e.target.previousSibling,nextSibling:e.target.nextSibling,attributeName:null,attributeNamespace:null,oldValue:null};this.callback([t])}},this.observe=function(e,n){var r=null;n.attributes&&(r=new t(this.callback,e,"attributes"),this.listeners.push(r),e.addEventListener("DOMAttrModified",r,!0)),n.characterData&&(r=new t(this.callback,e,"characterData"),this.listeners.push(r),e.addEventListener("DOMCharacterDataModified",r,!0)),n.childList&&(r=new t(this.callback,e,"childList"),this.listeners.push(r),e.addEventListener("DOMNodeInserted",r,!0),e.addEventListener("DOMNodeRemoved",r,!0))},this.disconnect=function(){this.listeners.forEach(function(e){switch(e.type){case"attributes":e.domNode.removeEventListener("DOMAttrModified",e,!0);break;case"characterData":e.domNode.removeEventListener("DOMCharacterDataModified",e,!0);break;case"childList":e.domNode.removeEventListener("DOMNodeRemoved",e,!0),e.domNode.removeEventListener("DOMNodeInserted",e,!0)}}),this.listeners=[]}},window.MutationObserver||(window.MutationObserver=n.prototype.MutationObserver),n.prototype.implements=function(e){for(var t in e)this[t]===undefined&&e.hasOwnProperty(t)&&(this[t]=e[t])},n.prototype.publish=function(e,t,n,r,i,s){if(this["__meta_"+e]!==undefined)throw e+" is already published.";this["__meta_"+e]={id:e,type:n,defaultValue:t,description:r,set:i,ext:s||{}},this[e]=function(t){var r=this._id===undefined;if(!arguments.length)return!r&&this["__prop_"+e]!==undefined?this["__prop_"+e]:this["__meta_"+e].defaultValue;switch(n){case"set":(!i||i.indexOf(t)<0)&&console.log("Invalid value for '"+e+"':  "+t);break;case"html-color":var s="red",o=document.createElement("div");o.style.color=s,o.style.color=t,t!==s&&(o.style.color===s||o.style.color==="")&&console.log("Invalid value for '"+e+"':  "+t);break;case"boolean":t=Boolean(t);break;case"number":t=Number(t);break;case"string":t=String(t);break;case"array":t instanceof Array||console.log("Invalid value for '"+e)}return r?this["__meta_"+e].defaultValue=t:(this.broadcast(e,t,this["__prop_"+e]),this["__prop_"+e]=t),this},this[e+"_modified"]=function(){var n=this._id===undefined;return n?this["__meta_"+e].defaultValue!==t:this["__prop_"+e]!==undefined},this[e+"_reset"]=function(){this["__prop_"+e]=undefined},this["__prop_"+e]=undefined},n.prototype.publishWidget=function(e,t,n){for(var r in t.prototype)if(r.indexOf("__meta")===0){var i=t.prototype[r];this.publishProxy(e+"__prop_"+i.id,n,i.method||i.id)}},n.prototype.publishProxy=function(e,t,n,r){n=n||e;if(this["__meta_"+e]!==undefined)throw e+" is already published.";this["__meta_"+e]={id:e,type:"proxy",proxy:t,method:n,defaultValue:r},this[e]=function(i){var s=this._id===undefined;if(s)throw"Setting default value of proxied properties is not supported.";return arguments.length?(r&&i===r?this[t][n+"_reset"]():this[t][n](i),this):!r||this[e+"_modified"]()?this[t][n]():r},this[e+"_modified"]=function(){var e=this._id===undefined;if(e)throw"Setting default values of proxied properties is not supported.";return this[t][n+"_modified"]()&&(!r||this[t][n]()!==r)},this[e+"_reset"]=function(){var e=this._id===undefined;if(e)throw"Setting default values of proxied properties is not supported.";this[t][n+"_reset"]()}},n.prototype.watch=function(e){var t=this,n=this._watchArr.push(e)-1;return{remove:function(){delete t._watchArr[n]}}},n.prototype.broadcast=function(e,t,n){this._watchArr&&this._watchArr.forEach(function(r){r&&setTimeout(function(){r(e,t,n)},0)})},n.prototype.on=function(t,n,r){if(this[t]===undefined)throw"Method:  "+t+" does not exist.";var i=this[t];return this[t]=function(){r?e.event.stopPropagation():i.apply(this,arguments),n.apply(this,arguments)},this},n.prototype.id=function(e){return arguments.length?(this._id=e,this):this._id},n.prototype.class=function(e){return arguments.length?(this._class=e,this):this._class},n.prototype.classID=function(){return this._class.split(" ").pop()},n.prototype.columns=function(e){return arguments.length?(this._columns=e,this):this._columns},n.prototype.data=function(e){return arguments.length?(this._data=e,this):this._data},n.prototype.cloneData=function(){return this._data.map(function(e){return e.slice(0)})},n.prototype.flattenData=function(){var e=[];return this.data().forEach(function(t,n){this.columns().filter(function(e,t){return t>0}).forEach(function(r,i){var s=t[i+1];if(s){var o={rowIdx:n,colIdx:i+1,label:t[0],value:s};e.push(o)}},this)},this),e},n.prototype.rowToObj=function(e){var t={};return this._columns.forEach(function(n,r){t[n]=e[r]}),e.length===this._columns.length+1&&(t.__lparam=e[this._columns.length]),t},n.prototype.pos=function(e){return arguments.length?(this._pos=e,this._overlayElement&&this._overlayElement.attr("transform","translate("+e.x+","+e.y+")scale("+this._scale+")"),this):this._pos},n.prototype.x=function(e){return arguments.length?(this.pos({x:e,y:this._pos.y}),this):this._pos.x},n.prototype.y=function(e){return arguments.length?(this.pos({x:this._pos.x,y:e}),this):this._pos.y},n.prototype.size=function(e){return arguments.length?(this._size=e,this._overlayElement&&this._overlayElement.attr("width",e.width).attr("height",e.height),this):this._size},n.prototype.width=function(e){return arguments.length?(this.size({width:e,height:this._size.height}),this):this._size.width},n.prototype.height=function(e){return arguments.length?(this.size({width:this._size.width,height:e}),this):this._size.height},n.prototype.resize=function(e,t){t=t||{width:0,height:0};var n,r;if(e&&e.width&&e.height)n=e.width,r=e.height;else{var i=window.getComputedStyle(this._target,null);n=parseFloat(i.getPropertyValue("width"))-t.width,r=parseFloat(i.getPropertyValue("height"))-t.height}return this.size({width:n,height:r}),this},n.prototype._scrollBarWidth=null,n.prototype.getScrollbarWidth=function(){if(n.prototype._scrollBarWidth===null){var e=document.createElement("div");e.style.visibility="hidden",e.style.width="100px",e.style.msOverflowStyle="scrollbar",document.body.appendChild(e);var t=e.offsetWidth;e.style.overflow="scroll";var r=document.createElement("div");r.style.width="100%",e.appendChild(r);var i=r.offsetWidth;e.parentNode.removeChild(e),n.prototype._scrollBarWidth=t-i}return n.prototype._scrollBarWidth},n.prototype.scale=function(e){return arguments.length?(this._scale=e,this._overlayElement&&this._overlayElement.attr("transform","translate("+e.x+","+e.y+")scale("+this._scale+")"),this):this._scale},n.prototype.visible=function(e){return arguments.length?(this._visible=e,this._parentElement&&this._parentElement.style("visibility",this._visible?null:"hidden"),this):this._visible},n.prototype.display=function(e){return arguments.length?(this._display=e,this._element&&this._element.style("display",this._display?null:"none"),this):this._display},n.prototype.calcSnap=function(e){function t(e,t){function n(e,t){var n=e%t;return Math.abs(n)>t-Math.abs(n)&&(n=(t-Math.abs(n))*(n<0?1:-1)),n}return e-n(e,t)}var n=t(this._pos.x-this._size.width/2,e),r=t(this._pos.y-this._size.height/2,e),i=t(this._pos.x+this._size.width/2,e),s=t(this._pos.y+this._size.height/2,e),o=i-n,u=s-r;return[{x:n+o/2,y:r+u/2},{width:o,height:u}]},n.prototype.toWidget=function(t){if(!t)return null;var n=e.select(t);if(n){var r=n.datum();if(r)return r}return null},n.prototype.locateParentWidget=function(e){if(!e)return null;var t=this.toWidget(e);return t?t:this.locateParentWidget(e.parentNode)},n.prototype.locateSVGNode=function(e){return e?e.tagName==="svg"?e:this.locateSVGNode(e.parentNode):null},n.prototype.locateOverlayNode=function(){var e=this.locateParentWidget(this._target);while(e){if(e._parentOverlay)return e._parentOverlay;e=this.locateParentWidget(e._target.parentNode)}return null},n.prototype.getAbsolutePos=function(e,t,n){var r=this.locateSVGNode(e);if(!r)return null;var i=r.createSVGPoint(),s=e.getCTM();i=i.matrixTransform(s);var o={x:i.x,y:i.y};if(t!==undefined&&n!==undefined){var u=r.createSVGPoint();u.x=t,u.y=n,u=u.matrixTransform(s),o.width=u.x-i.x,o.height=u.y-i.y}return o},n.prototype.hasOverlay=function(){return this._overlayElement},n.prototype.syncOverlay=function(){if(this._size.width&&this._size.height){var e=this.getAbsolutePos(this._overlayElement.node(),this._size.width,this._size.height);if(e&&(this.oldPos===null||this.oldPos===undefined||e.x!==this.oldPos.x||e.y!==this.oldPos.y||e.width!==this.oldPos.width||e.height!==this.oldPos.height)){var t=e.width/this._size.width,n=e.height/this._size.height;this._parentElement.style({left:e.x-e.width/t/2+"px",top:e.y-e.height/n/2+"px",width:e.width/t+"px",height:e.height/n+"px"});var r="scale("+t+","+n+")";this._parentElement.style("transform",r).style("-moz-transform",r).style("-ms-transform",r).style("-webkit-transform",r).style("-o-transform",r)}this.oldPos=e}},n.prototype.element=function(){return this._element},n.prototype.node=function(){return this._element.node()},n.prototype.render=function(t){if(!this._parentElement)return this;if(!this._tag)throw"No DOM tag specified";var n=this._parentElement.selectAll("#"+this._id).data([this],function(e){return e._id});return n.enter().append(this._tag).classed(this._class,!0).attr("id",this._id).each(function(t){t._element=e.select(this),t.enter(this,t._element)}),n.each(function(e){e.update(this,e._element),e._drawStartPos==="origin"&&e._target instanceof SVGElement?e._element.attr("transform",function(t){return"translate("+(e._pos.x-e._size.width/2)+","+(e._pos.y-e._size.height/2)+")scale("+e._scale+")"}):e._element.attr("transform",function(t){return"translate("+e._pos.x+","+e._pos.y+")scale("+e._scale+")"})}),n.exit().each(function(t){t.exit(this,t._element)}).remove(),this._renderCount++,t&&t(this),this},n.prototype.enter=function(e,t,n){},n.prototype.update=function(e,t,n){},n.prototype.exit=function(e,t,n){},n.prototype.debounce=function(e,t,n){return function(){function o(){n||e.apply(i,s),i.timeout=null}var i=this||{},s=arguments;i.timeout?clearTimeout(i.timeout):n&&e.apply(i,s),i.timeout=setTimeout(o,t||100)}},n});