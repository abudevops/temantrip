!function(t){var n=0;t.fn.mobileMenu=function(e){function o(t){return t.is("ul, ol")}function l(){return t(window).width()<h.switchWidth}function r(i){return i.attr("id")?t("#mobileMenu_"+i.attr("id")).length>0:(n++,i.attr("id","mm"+n),t("#mobileMenu_mm"+n).length>0)}function u(t){null!==t.val()&&(document.location.href=t.val())}function a(n){n.css("display","none"),t("#mobileMenu_"+n.attr("id")).show()}function c(n){n.css("display",""),t("#mobileMenu_"+n.attr("id")).hide()}function s(n){if(o(n)){var e='<div class="styled-select-cat"><select id="mobileMenu_'+n.attr("id")+'" class="mobileMenu">';e+='<option value="">'+h.topOptionText+"</option>",n.find("li").each(function(){var n="",o=t(this).parents("ul, ol").length;for(i=1;i<o;i++)n+=h.indentString;var l=t(this).find("a:first-child").attr("href"),r=n+t(this).clone().children("ul, ol").remove().end().text();e+='<option value="'+l+'">'+r+"</option>"}),e+="</select></div>",n.parent().append(e),t("#mobileMenu_"+n.attr("id")).change(function(){u(t(this))}),a(n)}else alert("mobileMenu will only work with UL or OL elements!")}function d(t){l()&&!r(t)?s(t):l()&&r(t)?a(t):!l()&&r(t)&&c(t)}var h={switchWidth:767,topOptionText:"Filter by category",indentString:"&nbsp;&nbsp;&nbsp;"};return this.each(function(){e&&t.extend(h,e);var n=t(this);t(window).resize(function(){d(n)}),d(n)})}}(jQuery);