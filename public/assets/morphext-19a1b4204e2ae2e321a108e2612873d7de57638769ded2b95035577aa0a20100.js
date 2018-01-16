/*!
 * Morphext - Text Rotating Plugin for jQuery
 * https://github.com/MrSaints/Morphext
 *
 * Built on jQuery Boilerplate
 * http://jqueryboilerplate.com/
 *
 * Copyright 2014 Ian Lai and other contributors
 * Released under the MIT license
 * http://ian.mit-license.org/
 */
!function(t){"use strict";function i(i,s){this.element=t(i),this.settings=t.extend({},e,s),this._defaults=e,this._init()}var s="Morphext",e={animation:"bounceIn",separator:",",speed:2e3,complete:t.noop};i.prototype={_init:function(){var i=this;this.phrases=[],this.element.addClass("morphext"),t.each(this.element.text().split(this.settings.separator),function(s,e){i.phrases.push(t.trim(e))}),this.index=-1,this.animate(),this.start()},animate:function(){this.index=++this.index%this.phrases.length,this.element[0].innerHTML='<span class="animated '+this.settings.animation+'">'+this.phrases[this.index]+"</span>",t.isFunction(this.settings.complete)&&this.settings.complete.call(this)},start:function(){var t=this;this._interval=setInterval(function(){t.animate()},this.settings.speed)},stop:function(){this._interval=clearInterval(this._interval)}},t.fn[s]=function(e){return this.each(function(){t.data(this,"plugin_"+s)||t.data(this,"plugin_"+s,new i(this,e))})}}(jQuery);