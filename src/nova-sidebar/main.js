(function(){(function(){(function(e,t){if(typeof exports=="object")module.exports=t();else if(typeof define=="function"&&define.amd)define("src/nova-sidebar/main",[],t);else{var n="__0",r=n.split("."),i=e;for(var s=0;s<r.length-1;s++)i[r[s]]===undefined&&(i[r[s]]={}),i=i[r[s]];i[r[r.length-1]]=t()}})(this,function(){function e(e){return{}[e]}function r(){var e=window.getComputedStyle(document.documentElement,""),t=(Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/)||e.OLink===""&&["","o"])[1],n="WebKit|Moz|MS|O".match(new RegExp("("+t+")","i"))[1];return{dom:n,lowercase:t,css:"-"+t+"-",js:t[0].toUpperCase()+t.substr(1)}}var t=undefined;NovaExports.__fixedUglify="script>",NovaExports.exports={stylesheet:":host{display:block;position:absolute;height:100%;top:0;box-sizing:border-box}.sidebar-mask{position:absolute;top:0;height:100%;width:100%;z-index:5}:host.sidebar-overlay{z-index:4}:host.sidebar-left{left:0}:host.sidebar-right{right:0}.sidebar-mask.sidebar-left{right:0;left:auto}.sidebar-mask.sidebar-right{left:0;right:auto}",template:'\n        <div class="sidebar-mask sidebar"></div>\n    '};var n=r();return Nova.Components.NovaSidebar=NovaExports({is:"nova-sidebar",props:{durationMs:{type:Number,value:200},display:{type:String,value:"push"},position:{type:String,value:"left"},contentSelector:{type:String},classNames:{type:Object,value:function(){return{left:"sidebar-left",right:"sidebar-right",push:"sidebar-push",overlay:"sidebar-overlay",reveal:"sidebar-reveal",mask:"sidebar-mask"}}},status:{type:Number,value:0}},createdHandler:function(){this.$element=$(this);var e=this.$element,t=this;this.defaultDisplay=this.display,this.defaultPosition=this.position,this.content=this.contentSelector?$(this.contentSelector):e.next(),this.mask=e.children(".sidebar-mask"),this.mask.appendTo(e.parent()).hide(),this.mask.on("tap",function(){t.hide()}),$(window).on("resize",function(){t.mask.width(e.parent().width()-e.width())}),this.on("_statusChanged",this._onChangeStatus),this.on("_displayChanged",this._onChangeDisplay),this.on("_positionChanged",this._onChangePosition),this._onChangePosition(null,undefined,this.position),this._onChangeDisplay(null,undefined,this.display),this._initDisplayFun();var n=this._getDisplayPos();e.css(this._getXCssObj(n.sidebar[0])),this.content.css(this._getXCssObj(n.cont[0]))},toggle:function(e,t){var n=this.status;n==0?(e=e||this.defaultDisplay,t=t||this.defaultPosition,this.show(e,t)):this.hide()},show:function(e,t){this.set("display",e),this.set("position",t),this.set("status",1)},hide:function(){this.set("status",0)},_initDisplayFun:function(){var e=this,t=["push","overlay","reveal"];$.each(t,function(t,n){e[n]=function(t){e.toggle(n,t)}})},_onChangeStatus:function(e,t,n){n==1?this._show():this._hide()},_onChangeDisplay:function(e,t,n){var r=this.$element,i=this.classNames;i[t]&&r.removeClass(i[t]),i[n]&&r.addClass(i[n])},_onChangePosition:function(e,t,n){var r=this.$element,i=this.classNames;i[t]&&r.removeClass(i[t])&&this.mask.removeClass(i[t]),i[n]&&r.addClass(i[n])&&this.mask.addClass(i[n])},_show:function(){var e=this.$element,t=this._getDisplayPos(),r=this.durationMs;e.css(n.css+"transition","none"),this.content.css(n.css+"transition","none"),e.css(this._getXCssObj(t.sidebar[0])),this.content.css(this._getXCssObj(t.cont[0])),e.animate(this._getXCssObj(t.sidebar[1]),r,"ease"),this.content.animate(this._getXCssObj(t.cont[1]),r,"ease"),this.mask.width(e.parent().width()-e.width()),this.mask.show()},_hide:function(){var e=this.$element,t=this._getDisplayPos(),n=this.durationMs;e.animate(this._getXCssObj(t.sidebar[0]),n,"ease"),this.content.animate(this._getXCssObj(t.cont[0]),n,"ease"),this.mask.hide()},_getDisplayPos:function(){var e=this.$element.width(),t=this.position=="left"?1:-1,n=this.display,r={push:{sidebar:[-t*e,0],cont:[0,t*e]},overlay:{sidebar:[-t*e,0],cont:[0,0]},reveal:{sidebar:[0,0],cont:[0,t*e]}};return r[n]},_getXCssObj:function(e){var t={};return t[n.css+"transform"]="translate3d("+e+"px, 0, 0)",t}}),t})}).call(window)})();