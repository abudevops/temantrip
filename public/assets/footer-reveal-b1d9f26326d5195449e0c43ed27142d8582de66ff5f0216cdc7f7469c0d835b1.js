/**
 * footer-reveal.js
 * 
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014 Iain Andrew
 * https://github.com/IainAndrew
 */
!function(o){o.fn.footerReveal=function(t){var e=o(this),i=e.prev(),s=o(window),a=o.extend({shadow:!0,shadowOpacity:.8,zIndex:-100},t);o.extend(!0,{},a,t);return e.outerHeight()<=s.outerHeight()&&(e.css({"z-index":a.zIndex,position:"fixed",bottom:0}),a.shadow&&i.css({"-moz-box-shadow":"0 20px 30px -20px rgba(0,0,0,"+a.shadowOpacity+")","-webkit-box-shadow":"0 20px 30px -20px rgba(0,0,0,"+a.shadowOpacity+")","box-shadow":"0 20px 30px -20px rgba(0,0,0,"+a.shadowOpacity+")"}),s.on("load resize",function(){e.css({width:i.outerWidth()}),i.css({"margin-bottom":e.outerHeight()})})),this}}(jQuery);