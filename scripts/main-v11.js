/*!
 *
 *  HotEmoji.com
 *  Copyright 2016-2018 HotEmoji.com. All rights reserved.
 *
 *  Unless required by applicable law or agreed to in writing, this software provided on "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * ALL PROGRAMS AND INFORMATION ON THIS SITE ARE PROTECTED BY COPYRIGHT. NO PORTION OF THIS WEB SITE
 * MAY BE REPRODUCED IN ANY FORM, OR BY ANY MEANS, WITHOUT PRIOR WRITTEN PERMISSION FROM THE AUTHOR.
 * VISITORS OR USERS ARE NOT PERMITTED TO MODIFY, DISTRIBUTE, PUBLISH, TRANSMIT OR CREATE DERIVATIVE
 * WORKS OF ANY MATERIAL FOUND ON THIS SITE FOR ANY PUBLIC OR COMMERCIAL PURPOSES.
 *
 */
function e(e){function t(e){e.target!==d&&(r.className="")}function n(e){r.classList.contains("active")?r.classList.remove("active"):r.childNodes.length&&r.classList.add("active"),e.preventDefault()}function o(){var e,t,n,o=i.firstElementChild.getBoundingClientRect().top;for(e=i.childNodes.length-1;e>=0;e--)Node.ELEMENT_NODE!==i.childNodes[e].nodeType&&i.removeChild(i.childNodes[e]);for(e=0;e<i.childNodes.length&&o===i.childNodes[e].getBoundingClientRect().top;e++);for(;i.childNodes.length-e>r.childNodes.length;)t=i.childNodes.length-r.childNodes.length,n=i.childNodes[t-1].cloneNode(!0),i.insertBefore(n,i.childNodes[t-1]),r.childNodes.length?r.insertBefore(i.childNodes[t],r.firstElementChild):r.appendChild(i.childNodes[t]);for(;i.childNodes.length-e<r.childNodes.length;)t=i.childNodes.length-r.childNodes.length,i.insertBefore(r.firstChild,i.childNodes[t]),i.removeChild(i.childNodes[t+1]);r.childNodes.length?d.parentNode.classList.add("active"):(r.classList.remove("active"),d.parentNode.classList.remove("active"))}var i=document.querySelector(e),d=i.querySelector(".moreButton > a"),r=i.nextElementSibling;d.addEventListener("click",n),document.body.addEventListener("click",t),window.addEventListener("resize",o),o()}function t(e){return"ga"in window&&ga("send","exception",{exDescription:e}),!0}function n(e){var n="["+e.lineno+":"+e.colno+"] => "+e.message;return t(n)}function o(e){var t=e.target,n=(e.target.getAttribute("data-message")||"Press {KEY} to add this page to your bookmarks.").replace("{KEY}",/Mac/i.test(navigator.userAgent)?"Cmd+D":"Ctrl+D");if(window.sidebar&&window.sidebar.addPanel)window.sidebar.addPanel(document.title,window.location.href,"");else if(window.external&&"AddFavorite"in window.external)window.external.AddFavorite(location.href,document.title);else{if(window.opera&&window.print||window.sidebar&&!(window.sidebar instanceof Node)){for(;"a"!==t.tagName.toLowerCase();)t=t.parentElement;return t.rel="sidebar",t.title=document.title,!0}alert(n)}return e.preventDefault(),!1}function i(e,t){function n(){return l.getBoundingClientRect().top-(document.location.href.indexOf("emoji-keyboard.html")>=0?4.5:2)*c.offsetHeight+(t||0)}function o(e,t,n,o){return e/=o/2,e<1?n/2*e*e+t:(e--,-n/2*(e*(e-2)-1)+t)}var i,d,r,a,l,c=document.getElementById("menu"),s=window.pageYOffset,u=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,20)};e instanceof Event?(e.preventDefault(),l=document.getElementById(this.href.split("#")[1])||document.body):l="string"==typeof e?document.getElementById(e.split("#")[1]):e,l&&("ga"in window&&ga("send","event","scroll",l.getAttribute("id")||l.tagName),i=n(),a=50*Math.pow(Math.abs(i),1/3),u(function h(e){d=d||e,r=e-d,r<a?(window.scrollTo(0,o(r,s,i,a)),u(h)):window.scrollTo(0,window.pageYOffset+n())}))}function d(){function e(){var e=window.pageYOffset,o=document.getElementById("menu").getBoundingClientRect();e>0?n.classList.add("active"):n.classList.remove("active"),t.classList.contains("float")?e<parseInt(document.body.style.paddingTop)-t.offsetHeight&&(t.classList.remove("float"),document.body.style.paddingTop="0"):o.top<0&&(document.body.style.paddingTop=t.offsetHeight+"px",t.classList.add("float"))}var t=document.getElementById("header"),n=document.getElementById("scroll-up");window.addEventListener("scroll",e)}function r(e){var t,n=/http.?:\/\/.*?(\w+)\.\w+\//;e.currentTarget.href&&(t=n.exec(e.currentTarget.href),"ga"in window&&ga("send","event",t?t[1]:"hotemoji",theme,document.location.href))}function a(e){var t,n=document.title.trim(),i=document.querySelectorAll(e);for(t=0;t<i.length;t++)i[t].href.indexOf("#")>=0||(i[t].addEventListener("click",r),"/"===i[t].getAttribute("href")?i[t].addEventListener("click",o):i[t].href=i[t].href.replace(/\b(u|url)=/,"$1="+encodeURIComponent(document.location.href)).replace(/\b(t|text)=/,"$1="+encodeURIComponent(n)))}function l(){var e,t=document.querySelectorAll("#themes li");for(e=0;e<t.length;e++)t[e].addEventListener("click",function(e){var t,n="th"+e;document.body.className=n,"localStorage"in window&&localStorage.setItem("theme",n),"th1"==n?t="cornflowerblue":"th2"==n?t="#6e3667":"th3"==n?t="#68cac2":"th4"==n&&(t="#a239ca"),document.querySelector('meta[name="theme-color"]').setAttribute("content",t)}.bind(this,e+1))}!function(){var e=document.querySelector("#privacy-notice> div");e&&"localStorage"in window&&!localStorage.getItem("privacyAccepted")&&(e.parentElement.style="display: block",e.addEventListener("click",function(){localStorage.setItem("privacyAccepted",!0),e.parentElement.style="display: none"}))}(),window.addEventListener("error",n),function(){var t,n,o=document.querySelectorAll('a[href^="#"]');for(t=0;t<o.length;t++)n=document.getElementById(o[t].href.split("#")[1]),("#"===o[t].href.charAt(o[t].href.length-1)||n)&&o[t].addEventListener("click",i);a("#share a, #share-buttons a, #share-tip a, .share-panel a"),l(),e("#menu"),e("#submenu"),d()}();