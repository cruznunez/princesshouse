function cents(){return document.querySelector(".price").value.replace(/[^\d]/g,"").replace(/^0+/,"")}(function(){}).call(this),function(){var e;e=function(){var e;return e=function(){var e;return e=this.value.replace(/[^\d]/g,"").replace(/^0+/,""),e=function(){switch(e.length){case 1:return e.replace(/(\d+)/,"0.0$1");case 2:return e.replace(/(\d{2})/,"0.$1");default:return e.replace(/(\d+)(\d{2})/,"$1.$2")}}(),this.value=e},document.querySelector(".price").addEventListener("input",e)},document.addEventListener("DOMContentLoaded",e)}.call(this),function(){}.call(this),function(){var e,t,n,r,u,c,o;n=function(){return document.querySelectorAll("td").forEach(function(e){return e.addEventListener("mousedown",function(){if(screen.width>768)return c(this)})}),document.querySelectorAll("td").forEach(function(e){return e.addEventListener("touchstart",function(){if(screen.width<=768)return c(this)})}),document.querySelectorAll("body").forEach(function(e){if(screen.width>768)return e.addEventListener("mouseup",u)}),document.querySelectorAll("body").forEach(function(e){if(screen.width<=768)return e.addEventListener("touchend",u)}),document.querySelectorAll("td").forEach(function(e){return e.addEventListener("mousedown",function(){if(screen.width>768)return t(this)})}),document.querySelectorAll("td").forEach(function(e){return e.addEventListener("touchend",function(){if(screen.width<=768)return t(this)})})},t=function(t){var n;return n=t.innerText,n.match(/\d/)?o(t):"<"===n?e():"<<"===n?r():void 0},o=function(e){var t,n,r,u,c,o;if(r=document.querySelector(".price"),o=r.value,c=parseInt(e.innerHTML),u=o+c,t=0===c&&"0"===o,!t)return n=new Event("input"),r.value=u,r.dispatchEvent(n)},e=function(){var e,t,n,u,c;return t=document.querySelector(".price"),c=t.value,u=cents(),n=u.length>1?c.slice(0,-1):0,t.value=n,e=new Event("input"),u.length>1?t.dispatchEvent(e):r()},r=function(){var e;return e=document.querySelector(".price").value=0,document.querySelectorAll("#shipping,#tax,#total").forEach(function(e){return e.innerHTML="$0.00"})},c=function(){return function(e){return u(),e.classList.add("pressed")}}(this),u=function(){return document.querySelectorAll("td").forEach(function(e){return e.classList.remove("pressed")})},document.addEventListener("DOMContentLoaded",n)}.call(this),function(){}.call(this),function(){var e;e=function(){var e;return e=function(){return document.querySelector(".container").classList.remove("hidden"),setTimeout(function(){return document.querySelector(".welcome").remove()},1e3)},document.querySelector(".welcome").addEventListener("mouseup",e),document.querySelector(".welcome").addEventListener("touchend",e)},document.addEventListener("DOMContentLoaded",e)}.call(this),function(){}.call(this),function(){var e,t,n,r;r=function(){return document.querySelector("input").addEventListener("input",function(){var r,u,c,o;return r=parseInt(cents()),u=e(r),c=t(r,u),o=r+u+c,document.querySelector("#shipping").innerText=n(u),document.querySelector("#tax").innerText=n(c),document.querySelector("#total").innerText=n(o)})},e=function(e){switch(!1){case!(0<=e&&e<=5e3):return 350;case!(5001<=e&&e<=1e4):return 550;case!(10001<=e&&e<=2e4):return 1050;case!(20001<=e&&e<=3e4):return 1500;case!(30001<=e&&e<=5e4):return 2600;case!(50001<=e&&e<=75e3):return 3600;case!(75001<=e&&e<=1e5):return 4600;case!(100001<=e&&e<=15e4):return 5600;default:return 6600}},t=function(e,t){return 75*(e+t)/1e3},n=function(e){return"$"+(e/100).toFixed(2)},document.addEventListener("DOMContentLoaded",r)}.call(this);
