$(function(){var e,n,s,i,o,t,r,a,d;return r=$(".icons .icon"),a=$(".icons"),e=$(".icons__btn"),o="red yellow green emerald blue purple",t=o.split(" "),i=8e3,s=1,$(".btn").on("mouseenter",function(){return $(this).addClass("is-hovered")}).on("mouseout",function(){return setTimeout(function(e){return function(){return $(e).removeClass("is-hovered")}}(this),250)}),e.on("click",function(){var n;return n=$(this).data("size"),r.removeClass("icon--s icon--m icon--l"),r.addClass("icon--"+n),a.removeClass("icons--s icons--m icons--l"),a.addClass("icons--"+n),e.removeClass("is-active"),$(this).addClass("is-active")}),n=function(){return $("body").removeClass(o).addClass(t[s]),++s===t.length?s=0:void 0},setInterval(n,i),window.devicePixelRatio&&devicePixelRatio>=2&&(d=$("<div>",{id:"testElem",css:{border:".5px solid transparent"}}),$("body").append(d),1===d[0].offsetHeight&&$("html").addClass("hairlines"),d.remove("#testElem")),-1!==navigator.userAgent.indexOf("MSIE")||navigator.appVersion.indexOf("Trident/")>0?$("body").addClass("ie"):void 0}),$(window).load(function(){var e,n,s,i,o,t,r;for(e="//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=858281727538787&version=v2.0",s="//platform.twitter.com/widgets.js",t=[e,s],r=[],i=0,o=t.length;o>i;i++)n=t[i],r.push($("<script>",{src:n}).appendTo("body"));return r});