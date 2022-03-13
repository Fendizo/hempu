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
function e(e){function t(e){e.target!==a&&(l.className="")}function n(e){l.classList.contains("active")?l.classList.remove("active"):l.childNodes.length&&l.classList.add("active"),e.preventDefault()}function o(){var e,t,n,o=i.firstElementChild.getBoundingClientRect().top;for(e=i.childNodes.length-1;e>=0;e--)Node.ELEMENT_NODE!==i.childNodes[e].nodeType&&i.removeChild(i.childNodes[e]);for(e=0;e<i.childNodes.length&&o===i.childNodes[e].getBoundingClientRect().top;e++);for(;i.childNodes.length-e>l.childNodes.length;)t=i.childNodes.length-l.childNodes.length,n=i.childNodes[t-1].cloneNode(!0),i.insertBefore(n,i.childNodes[t-1]),l.childNodes.length?l.insertBefore(i.childNodes[t],l.firstElementChild):l.appendChild(i.childNodes[t]);for(;i.childNodes.length-e<l.childNodes.length;)t=i.childNodes.length-l.childNodes.length,i.insertBefore(l.firstChild,i.childNodes[t]),i.removeChild(i.childNodes[t+1]);l.childNodes.length?a.parentNode.classList.add("active"):(l.classList.remove("active"),a.parentNode.classList.remove("active"))}var i=document.querySelector(e),a=i.querySelector(".moreButton > a"),l=i.nextElementSibling;a.addEventListener("click",n),document.body.addEventListener("click",t),window.addEventListener("resize",o),o()}function t(e,t){function n(e){var t;a.focus(),a.setSelectionRange(0,a.value.length);try{t=document.execCommand("copy")}catch(e){t=!1}return t&&"clipboardData"in window&&window.clipboardData.getData("Text")!==a.value&&(t=!1),t&&(o("✔"),setTimeout(o.bind(null,"📋"),1e3)),e.preventDefault(),!1}function o(e){i.firstChild?i.firstChild.textContent=e:i.value&&(i.value=e)}var i=document.querySelector(e),a=document.querySelector(t);i&&a&&i.addEventListener("click",n)}function n(e){return"ga"in window&&ga("send","exception",{exDescription:e}),!0}function o(e){var t="["+e.lineno+":"+e.colno+"] => "+e.message;return n(t)}function i(e){var t=e.target,n=(e.target.getAttribute("data-message")||"Press {KEY} to add this page to your bookmarks.").replace("{KEY}",/Mac/i.test(navigator.userAgent)?"Cmd+D":"Ctrl+D");if(window.sidebar&&window.sidebar.addPanel)window.sidebar.addPanel(document.title,window.location.href,"");else if(window.external&&"AddFavorite"in window.external)window.external.AddFavorite(location.href,document.title);else{if(window.opera&&window.print||window.sidebar&&!(window.sidebar instanceof Node)){for(;"a"!==t.tagName.toLowerCase();)t=t.parentElement;return t.rel="sidebar",t.title=document.title,!0}alert(n)}return e.preventDefault(),!1}function a(e,t){function n(){return d.getBoundingClientRect().top-(document.location.href.indexOf("emoji-keyboard.html")>=0?4.5:2)*c.offsetHeight+(t||0)}function o(e,t,n,o){return e/=o/2,e<1?n/2*e*e+t:(e--,-n/2*(e*(e-2)-1)+t)}var i,a,l,r,d,c=document.getElementById("menu"),s=window.pageYOffset,u=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,20)};e instanceof Event?(e.preventDefault(),d=document.getElementById(this.href.split("#")[1])||document.body):d="string"==typeof e?document.getElementById(e.split("#")[1]):e,d&&("ga"in window&&ga("send","event","scroll",d.getAttribute("id")||d.tagName),i=n(),r=50*Math.pow(Math.abs(i),1/3),u(function h(e){a=a||e,l=e-a,l<r?(window.scrollTo(0,o(l,s,i,r)),u(h)):window.scrollTo(0,window.pageYOffset+n())}))}function l(){function e(){var e=window.pageYOffset,o=document.getElementById("menu").getBoundingClientRect();e>0?n.classList.add("active"):n.classList.remove("active"),t.classList.contains("float")?e<parseInt(document.body.style.paddingTop)-t.offsetHeight&&(t.classList.remove("float"),document.body.style.paddingTop="0"):o.top<0&&(document.body.style.paddingTop=t.offsetHeight+"px",t.classList.add("float"))}var t=document.getElementById("header"),n=document.getElementById("scroll-up");window.addEventListener("scroll",e)}function r(e){var t,n=/http.?:\/\/.*?(\w+)\.\w+\//;e.currentTarget.href&&(t=n.exec(e.currentTarget.href),"ga"in window&&ga("send","event",t?t[1]:"hotemoji",theme,document.location.href))}function d(e){var t,n=document.title.trim(),o=document.querySelectorAll(e);for(t=0;t<o.length;t++)o[t].href.indexOf("#")>=0||(o[t].addEventListener("click",r),"/"===o[t].getAttribute("href")?o[t].addEventListener("click",i):o[t].href=o[t].href.replace(/\b(u|url)=/,"$1="+encodeURIComponent(document.location.href)).replace(/\b(t|text)=/,"$1="+encodeURIComponent(n)))}function c(){var e,t=document.querySelectorAll("#themes li");for(e=0;e<t.length;e++)t[e].addEventListener("click",function(e){var t,n="th"+e;document.body.className=n,"localStorage"in window&&localStorage.setItem("theme",n),"th1"==n?t="cornflowerblue":"th2"==n?t="#6e3667":"th3"==n?t="#68cac2":"th4"==n&&(t="#a239ca"),document.querySelector('meta[name="theme-color"]').setAttribute("content",t)}.bind(this,e+1))}function s(){var e,t,n=500,o=$.querySelectorAll("i"),i=document.getElementById("say"),a=document.getElementById("header").getBoundingClientRect().bottom;if(!Q){do e=Math.floor(Math.random()*o.length),t=o[e].getBoundingClientRect();while((t.top<a||t.bottom>window.innerHeight)&&n-- >0);B(i,o[e])}}function u(e,t){if(e.selectionStart||"0"==e.selectionStart){var n=e.selectionStart,o=e.selectionEnd;e.value=e.value.substring(0,n)+t+e.value.substring(o,e.value.length),e.setSelectionRange(o+t.length,o+t.length)}else e.value+=t}function h(e){var t,n,o,i=document.querySelector("#intro textarea");if(t=document.createRange(),t.selectNodeContents(e.target),window.getSelection().removeAllRanges(),window.getSelection().addRange(t),o=window.getSelection().toString(),_)i.focus(),u(i,o),"ga"in window&&ga("send","event","clipboard","typed",o);else{try{n=document.execCommand("copy")}catch(e){n=!1}n&&"clipboardData"in window&&window.clipboardData.getData("Text")!==o&&(n=!1),n&&window.getSelection().removeAllRanges(),"ga"in window&&ga("send","event","clipboard",n?"auto":"manual",o),Q||g(n,o)}Q||(Q=!0,window.localStorage&&localStorage.setItem("stopMessages",Q))}function f(e){var t=document.getElementById("shadow");t.className="visible "+e}function g(e,t){var n,o=document.querySelector("#shadow > div");n=o.getAttribute(e?"data-auto":"data-manual"),n=n.replace(/{SYMBOL}/g,t).replace(/{KEY}/g,/Mac/i.test(navigator.userAgent)?"Cmd":"Ctrl"),o.firstChild?o.firstChild.textContent=n:o.appendChild(document.createTextNode(n)),f("copy-tip")}function m(e){var t=document.getElementById("shadow");e.target!==t&&e.target.parentElement!==t||(t.className="")}function p(){var e,t,n,o=arguments[0]instanceof Array?arguments[0]:arguments,i=[];for(e=0;e<o.length;e++)t=o[e]-65536,n=o[e]>65535?[55296+(t>>10),56320+(1023&t)]:[o[e]],i.push(String.fromCharCode.apply(null,n));return i.join("")}function v(e){for(var t,n,o=[],i=0;i<e.length;i++)t=e.charCodeAt(i),t>=55296&&t<56320&&i+1<e.length&&(n=e.charCodeAt(i+1),n>=56320&&n<57344)?(o.push(65536+(t-55296<<10)+(n-56320)),i++):o.push(t);return o.join(" ")}function w(e,t){var n,o,i=" "+t,a=0;for(n=0;n<e.length;n++)o=i.indexOf(" "+e[n]),o>=0&&(a+=e[n].length);return a}function y(e){var t,n,o=0;for(t=0;t<e.length;t++)o*=62,n=e.charCodeAt(t),n>47&&n<58?o+=n-48:n>96&&n<123?o+=n-97+10:n>64&&n<91&&(o+=n-65+36);return o}function C(e){var t,n=e.match(/.{1,3}/g);for(t=0;t<n.length;t++)n[t]=y(n[t]);return n}function S(e){var t,n,o,i,a,l,r,d,c,s=18,u="",h=z.split(""),f=Math.floor(h.length/s),g=[],m={},v=document.location.href.indexOf("new-emoji")<0,S=/\uFE0F|\u200D/g,E=/\uD83C[\uDFFB-\uDFFF]/,b=["🏻","🏼","🏽","🏾","🏿"],x=e.split(/\W+/).filter(function(e){return e.length});for(n=0;n<f;n++)for(t=0;t<s;t++)u+=h[t*f+n];for(d=u.indexOf("\t"),l=u.substr(0,d).split("`"),u=u.substr(d+1).split("`"),t=0;t<u.length;t+=2)a=p(C(u[t])).replace(S,""),g[a]=u[t+1].replace(/.{1,2}/g,function(e){return" "+l[y(e)]});for(o=$.querySelectorAll("i"),e=e.replace(S,""),t=0;t<o.length;t++){if(a=o[t].firstChild.textContent.replace(S,""),c=o[t].parentElement===$?o[t]:o[t].parentElement,(d=e.indexOf(a))>=0)(!m[d]||m[d][0]<5*a.length)&&(m[d]=[5*a.length,c]);else if(v&&a.match(E))for(n=0;n<b.length;n++)if(a=a.replace(E,b[n]),(d=e.indexOf(a))>=0){c=c.cloneNode(!0),P(c,b[n]),m[d]=[5*a.length,c];break}(i=o[t].getAttribute("data-name"))||(i=o[t].nextElementSibling,3!=i.firstChild.nodeType&&(i=i.firstElementChild),i=i.firstChild.textContent),(r=w(x,i.toLowerCase()+(g[a]||"")))>0&&(m[o[t].firstChild.textContent]=[r,o[t].parentElement===$?o[t]:o[t].parentElement])}return Object.keys(m).map(function(e){return m[e]})}function E(){var e,t,n=0,o=85,i=[];if(V!==U.value){for(V=U.value;1!==$.firstChild.nodeType||"h2"!=$.firstChild.tagName.toLowerCase();)$.removeChild($.firstChild);if(!(U.value.length<1)){for(i=S(U.value.toLocaleLowerCase()),e=0;e<i.length;e++)n=i[e][0]>n?i[e][0]:n;if(i.length>19&&(i=i.filter(function(e){return e[0]>n/2})),!(U.value.length<3&&i.length>o/2)){for(i=i.sort(function(e,t){return t[0]-e[0]}),e=i.length>o?o-1:i.length-1;e>=0;e--)t=i[e][1].cloneNode(!0),T(i[e][1].childElementCount?t.firstElementChild:t),$.insertBefore(t,$.firstChild);W(!0),$.getBoundingClientRect().top<0&&a($,1)}}}}function b(e){var t,n=$.querySelectorAll("i");for(t=0;t<n.length;t++)if(e===n[t].firstChild.textContent)return n[t];return!1}function x(){for(var e=[],t=$.querySelector("h2 ~ div:not([id])")||$.querySelector("h2 ~ i[class]");t&&"H2"!==t.tagName&&"INS"!==t.tagName;)e.push(t.tagName.length>1?t.firstChild.firstChild.textContent:t.textContent),t=t.nextElementSibling;return e}function L(e){if("localStorage"in window){var t,o=localStorage.getItem("top");try{t=e.target.firstChild.textContent}catch(e){n("err: "+e.target)}o=o?o.split(","):[],o.indexOf(t)<0&&(o.unshift(t),o.length>46&&o.pop(),localStorage.setItem("top",o.join(","))),x().indexOf(t)<0&&N(t)}}function N(e){var t,o=e.trim(),i=b(o),a=$.querySelector("h2 ~ div:not([id])")||$.querySelector("h2 ~ i[class]"),l=($.querySelector("div + h2:nth-of-type(2)")||$.querySelector("div + ins:nth-of-type(2)")||$.querySelector("i + h2:nth-of-type(2)")).previousElementSibling;return i?(t=$===i.parentElement?i.cloneNode(!0):i.parentElement.cloneNode(!0),T(t),$.insertBefore(t,a),void $.removeChild(l)):void n("snf "+o+" "+v(o))}function I(){var e,t=x(),n=localStorage.getItem("top");if(n)for(n=n.split(","),e=n.length-1;e>=0;e--)t.indexOf(n[e])<0&&(N(n[e]),t.pop())}function A(){var e={};return location.search.length>=0&&(e=document.location.search.replace(/(^\?)/,"").split("&").map(function(e){return e=e.split("="),e[1]?this[e[0]]=e[1]:this.search=e[0],this}.bind({}))[0]),e}function k(e){var t=document.getElementById("copied"),n=e.target.getBoundingClientRect(),o=window.pageYOffset;t.className="",t.style.top=o+n.top+(e.target.offsetHeight-t.offsetHeight)/2+"px",t.style.left=n.left-(t.offsetWidth-e.target.offsetWidth)/2+"px",t.offsetWidth=t.offsetWidth,t.className="visible"}function B(e,t){var n,o,i=window.getComputedStyle(e).opacity,a=t.getBoundingClientRect(),l=(a.left+a.right)/2,r=window.pageYOffset;e.lastChild.style.margin="0 auto",l-e.offsetWidth/2<0?(n=0,e.lastChild.style.marginLeft=l-7+"px"):l+e.offsetWidth/2>document.body.offsetWidth?(n=document.body.offsetWidth-e.offsetWidth,e.lastChild.style.marginRight=document.body.offsetWidth-l-7+"px"):n=l-e.offsetWidth/2,o=Math.round(r+a.top-e.offsetHeight)+"px",n=Math.round(n)+"px",e.style.left==n&&e.style.top==o&&0!=i||(e.style.left=n,e.style.top=o,e.classList.remove("visible"),e.offsetWidth=e.offsetWidth,e.classList.add("visible"))}function q(){var e,t,n=this.getAttribute("data-name").split(/\s+/),o=n[n.length-1],i=document.getElementById("title-tip");/^\d{3,}$/.test(o)||o.charAt(0).toLowerCase()==o.charAt(0)?n.pop():o=null,t=n.join(" "),i.firstChild&&i.removeChild(i.firstChild),o?(e=document.createElement("a"),e.href=o+"-emoji.html"):e=document.createElement("div"),e.appendChild(document.createTextNode(t)),i.insertBefore(e,i.firstChild),B(i,this)}function T(e){e.addEventListener("click",h),e.addEventListener("copy",k),e.addEventListener("copy",D),document.getElementById("title-tip")&&(e.addEventListener("copy",q),e.addEventListener("mouseover",q)),G&&e.addEventListener("click",L)}function D(){4===++J&&window.localStorage&&null===localStorage.getItem("stopAskingForShare")&&(localStorage.setItem("stopAskingForShare",!0),"ga"in window&&ga("send","event","ask4share",theme),(!1!==F()||window.localStorage&&localStorage.getItem("appInstalled"))&&(document.getElementById("chrome-btn").style.visibility="hidden"),setTimeout(f.bind(null,"share-tip"),1e3))}function F(){return"chrome"in window&&"app"in window.chrome?window.chrome.app.isInstalled:null}function R(){window.chrome.webstore.install("https://chrome.google.com/webstore/detail/lgjbaachamhagpgomohkehddpbipfilg",function(){"ga"in window&&ga("send","event","install","success"),window.localStorage&&localStorage.setItem("appInstalled","true")},function(){"ga"in window&&ga("send","event","install","failure"),window.localStorage&&F()!==!1&&localStorage.setItem("appInstalled","true")})}function O(){var e,t=11,n=new Array,o=localStorage.getItem("emojiStyle");if(o&&"native-emoji"!==o||!o&&!/\b(iPad|iPhone|Android)\b/.test(window.navigator.userAgent))for(e=0;e<3;e++)n[e]=new Image,n[e].addEventListener("load",M),n[e].src="/images/s"+(e+1)+"-v"+t+".svg"}function M(){var e=localStorage.getItem("emojiStyle")||"twitter-emoji",t={color:"twitter-emoji","system-font":"native-emoji"};e=t[e]||e,++X>1&&Z(e)}function j(e,t){function n(t){var n,o=a.indexOf(t)<0?a[0]:t,l=e.className.split(/\s+/);for(W(),n=0;n<l.length&&a.indexOf(l[n])<0;n++);e.classList.remove(l[n]),e.classList.add(o),i.className=o,window.localStorage&&o&&localStorage.setItem("emojiStyle",o)}function o(){var e=a.indexOf(this.className),t=a[(e+1)%a.length];n(t),"ga"in window&&ga("send","event","style",t)}var i=document.querySelector(t),a=i.getAttribute("data-styles").split(/,\s*/);return i.addEventListener("click",o),n}function W(e){function t(e,t){for(var n=0,o=1;n<e.length;n++)o=a(o+e.charCodeAt(n)|0,265435761);return((o^o>>>17)>>>0&(t||4294967295)).toString(36)}function n(e,t){var n=e>>>16&65535,o=65535&e,i=t>>>16&65535,a=65535&t;return o*a+(n*a+o*i<<16>>>0)|0}var o,i,a=Math.imul||n,l=document.querySelectorAll("#content i");if(e||!l[0].className)for(o=0;o<l.length;o++)i=l[o].firstChild.textContent.split(" ")[0],l[o].className="i"+t(i.replace(/\uFE0F|\u200D/g,""),4194303)}function H(){var e=document.querySelectorAll("input[type=checkbox]#compact");e=e[e.length-1],e!==this&&(e.addEventListener("click",H),window.localStorage&&localStorage.getItem("compactView")&&(e.checked=!0)),e.checked?$.classList.add("compact"):$.classList.remove("compact"),window.localStorage&&(e.checked?localStorage.setItem("compactView",!0):localStorage.removeItem("compactView")),e===this&&"ga"in window&&ga("send","event","compact",e.checked?"on":"off")}function Y(e){function t(e){var t,n=/\uD83C[\uDFFB-\uDFFF]/,o=e.target?e.target.firstChild.textContent:e,a=i[0].parentElement.nextElementSibling;if(n.test(o)){"localStorage"in window&&localStorage.setItem("skinColor",o);for(t=0;t<i.length;t++)i[t].firstChild.textContent==o?i[t].className="active":i[t].className="";for(;a&&"H2"!==a.tagName;)P(a,o),a=a.nextElementSibling;W(!0)}}var n,o,i=document.querySelectorAll(e);if(0!=i.length){for(n=0;n<i.length;n++)i[n].addEventListener("click",t);"localStorage"in window&&(o=localStorage.getItem("skinColor"))&&t(o)}}function P(e,t){var n,o,i=["Light","Medium-Light","Medium","Medium-Dark","Dark"],a=/\uD83C[\uDFFB-\uDFFF]/,l=t.charCodeAt(1)-57339,r=l+1+"-"+i[l].toLowerCase()+"-skin-tone";"I"==e.tagName?(n=e.firstChild.textContent,e.firstChild.textContent=n.replace(a,t),n=e.getAttribute("data-name"),n=n.replace(/\S+ Skin Tone/,i[l]+" Skin Tone"),n=n.replace(/ \d-/," "+(l+1)+"-"),n=n.replace(/ \d-.+?-skin-tone/," "+r),e.setAttribute("data-name",n)):(o=e.firstChild.firstChild,n=o.textContent,o.textContent=n.replace(a,t),o=e.lastChild.firstChild,n=o.firstChild.textContent,n=n.replace(/\S+ Skin Tone/,i[l]+" Skin Tone"),o.firstChild.textContent=n,n=o.getAttribute("href"),n=n.replace(/^\d-/,l+1+"-"),n=n.replace(/^\d-.+?-skin-tone/,r),o.setAttribute("href",n))}function K(e){var t,n=document.querySelectorAll(e),o=document.querySelectorAll('a[href^="#skin-tones-"]');for(t=0;t<o.length;t++)o[t].addEventListener("click",function(e){n[e].click()}.bind(this,4-t)),o[t].addEventListener("click",a),document.location.hash==o[t].getAttribute("href")&&setTimeout(function(e){e.click()}.bind(this,o[t]),50),o[t].setAttribute("href","#skin-tones")}!function(){var e=document.querySelector("#privacy-notice> div");e&&"localStorage"in window&&!localStorage.getItem("privacyAccepted")&&(e.parentElement.style="display: block",e.addEventListener("click",function(){localStorage.setItem("privacyAccepted",!0),e.parentElement.style="display: none"}))}(),window.addEventListener("error",o),function(){var t,n,o=document.querySelectorAll('a[href^="#"]');for(t=0;t<o.length;t++)n=document.getElementById(o[t].href.split("#")[1]),("#"===o[t].href.charAt(o[t].href.length-1)||n)&&o[t].addEventListener("click",a);d("#share a, #share-buttons a, #share-tip a, .share-panel a"),c(),e("#menu"),e("#submenu"),l()}();var U,V="",$,z,G=!0,X=0,_=document.getElementById("header").classList.contains("keyboard"),J=0,Q,Z;!function(){var e,n=new XMLHttpRequest,o=A(),i=document.querySelectorAll("#content i");$=document.getElementById("content"),U=document.querySelector("#submenu form input"),document.getElementById("shadow").addEventListener("click",m),!1===F()&&document.getElementById("chrome-btn").addEventListener("click",R),$.querySelectorAll("h2").length>=10&&(G=!1),Z=j($,"#style"),O(),n.onreadystatechange=function(){4==n.readyState&&200==n.status&&(z=n.responseText,"search"in o&&(U.value=decodeURI(o.search.replace(/\+/g,"%20")),E()))},n.open("GET","/images/e.svg",!0),n.send(),Y("#content h2 > span"),K("#content h2 > span");for(e=0;e<i.length;e++)T(i[e]);Q=null!==localStorage.getItem("stopMessages"),Q||(setTimeout(s,4e3),setInterval(s,1e4)),"localStorage"in window&&("reset"in o&&localStorage.removeItem("top"),G&&I()),U.addEventListener("keyup",E),U.addEventListener("change",E),U.addEventListener("paste",function(){setTimeout(E,20)}),H(),t("#intro #copy-button span","#intro textarea"),location.hash&&setTimeout(function(){a(location.hash)},1e3),_&&document.querySelector("#intro textarea").focus()}();