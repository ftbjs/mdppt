!function(M){function e(e){for(var t,i,n=e[0],c=e[1],a=e[2],s=0,l=[];s<n.length;s++)i=n[s],Object.prototype.hasOwnProperty.call(d,i)&&d[i]&&l.push(d[i][0]),d[i]=0;for(t in c)Object.prototype.hasOwnProperty.call(c,t)&&(M[t]=c[t]);for(u&&u(e);l.length;)l.shift()();return r.push.apply(r,a||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var i=r[t],n=!0,c=1;c<i.length;c++){var a=i[c];0!==d[a]&&(n=!1)}n&&(r.splice(t--,1),e=s(s.s=i[0]))}return e}var i={},d={0:0},r=[];function s(e){if(i[e])return i[e].exports;var t=i[e]={i:e,l:!1,exports:{}};return M[e].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=M,s.c=i,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var t=window.webpackJsonp=window.webpackJsonp||[],n=t.push.bind(t);t.push=e,t=t.slice();for(var c=0;c<t.length;c++)e(t[c]);var u=n;r.push(["gQiB",1]),o()}({VZ3O:function(e,t,i){},gQiB:function(e,t,i){"use strict";i.r(t);function u(){return document.createElement("ul")}var n=i("j5FW"),a=i.n(n),s=i("CQBJ"),c=i("1QJe"),l=i("RL+d"),M=(i("ooVK"),new(function(){function e(){Object(c.a)(this,e)}return Object(l.a)(e,[{key:"on",value:function(e,t,i){e.addEventListener(t,i,!1)}},{key:"select",value:function(e){return document.querySelector(e)}},{key:"selectAll",value:function(e){return Array.from(document.querySelectorAll(e))}},{key:"length",value:function(e){return e?this.selectAll(e).length:null}},{key:"getDirection",value:function(n){return new Promise(function(e,t){var i=n||window.event;if(i)switch(i.keyCode){case 39:case 40:e({direct:"next",isScope:!0});break;case 37:case 38:e({direct:"prev",isScope:!0});break;case 70:e({direct:"fullscreen",isScope:!0});break;case 189:e({direct:"-",isScope:!0});break;case 187:e({direct:"+",isScope:!0});break;case 69:e({direct:"expand",isScope:!0});break;default:e({direct:"",isScope:!1})}else e({direct:"",isScope:!1})})}}]),e}())),I="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTgwMjAxODMyMjIwIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIxMzgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNODkuMDg4IDU5LjM5Mmw2Mi40NjQgODAzLjg0YzEuMDI0IDEyLjI4OCA5LjIxNiAyMi41MjggMjAuNDggMjUuNkw1MDIuNzg0IDk5My4yOGM2LjE0NCAyLjA0OCAxMi4yODggMi4wNDggMTguNDMyIDBsMzMwLjc1Mi0xMDQuNDQ4YzExLjI2NC00LjA5NiAxOS40NTYtMTQuMzM2IDIwLjQ4LTI1LjZsNjIuNDY0LTgwMy44NGMxLjAyNC0xNy40MDgtMTIuMjg4LTMxLjc0NC0yOS42OTYtMzEuNzQ0SDExOC43ODRjLTE3LjQwOCAwLTMxLjc0NCAxNC4zMzYtMjkuNjk2IDMxLjc0NHoiIGZpbGw9IiNGQzQ5MEIiIHAtaWQ9IjIxMzkiIGRhdGEtc3BtLWFuY2hvci1pZD0iYTMxM3guNzc4MTA2OS4wLmkxIiBjbGFzcz0ic2VsZWN0ZWQiPjwvcGF0aD48cGF0aCBkPSJNNzc0LjE0NCAzMDkuMjQ4aC00MDkuNmwxMi4yODggMTEzLjY2NGgzODguMDk2bC0yNS42IDMyNS42MzItMjI3LjMyOCA3MS42OC0yMjcuMzI4LTcxLjY4LTEzLjMxMi0xNjkuOTg0aDExOC43ODR2ODIuOTQ0bDEyNC45MjggMzMuNzkyIDEyMy45MDQtMzMuNzkyIDEwLjI0LTEzMi4wOTZIMjY3LjI2NEwyNDEuNjY0IDIwNC44aDU0MC42NzJ6IiBmaWxsPSIjRkZGRkZGIiBwLWlkPSIyMTQwIiBkYXRhLXNwbS1hbmNob3ItaWQ9ImEzMTN4Ljc3ODEwNjkuMC5pMCIgY2xhc3M9InNlbGVjdGVkIj48L3BhdGg+PC9zdmc+",o=function(){var e=document.createElement("div");e.className="mdppt-navigation";var o=u();o.classList.add("mdppt-sidebar");function d(e){return i===e?'class="active"':""}var r=window.navigationFolder||{},t=window.location.pathname.match(/([^\/]+)\.html(#slide=\d+)?$/),i=t&&"index"!==t[1]&&"/"!==t[1]?t[1]:"index";Object.keys(r).forEach(function(e){var t,i,n,c,a=r[e],s=0<r[e].children.length,l=r[e].children,M=document.createElement("li");M.classList.add("mdppt-sidebar__item"),s?(t=u(),i=document.createElement("span"),n=l.map(function(e){var t=e.display||e.name;return'\n          <li class="mdppt-sidebar__sub-item">\n            <span class="html-item">\n              <img src="'.concat(I,'" class="html-svg">\n              <a ').concat(d(e.name),' title="').concat(t,'" href="').concat(e.name,'.html">').concat(t,"</a>\n            </span>\n          </li>")}),t.classList.add("mdppt-sidebar__sub"),t.innerHTML=n.join(""),i.innerHTML='\n        <img src="'.concat("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTgwMDQ3ODgwOTI0IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjUxMTUiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNOTQ4LjU2MDMzMiAyODEuMTc5OTg0Yy0xMy43NjU1MTUtMTMuODMzMDUzLTM2LjEyNzgyNS0xMy44MzMwNTMtNDkuODkzMzQgMEw1MTEuOTkxMzAyIDY2OC41OTE0MzEgMTI1LjMxMzU2NSAyODEuMTc5OTg0Yy0xMy43NjM0NjgtMTMuNzk4MjYxLTM2LjA5MzAzMy0xMy43OTgyNjEtNDkuODU2NTAxIDAtMTMuNzk5Mjg0IDEzLjc5ODI2MS0xMy43OTkyODQgMzYuMTYxNTk0IDAgNDkuOTkzNjI0bDQxMC44NTc0MzkgNDExLjY3NDAzN2M3LjA2Nzk3NiA3LjA4NTM3MiAxNi40MDI1NzUgMTAuNTIxNjM0IDI1LjY3NTc3NiAxMC4zMzEyOTkgOS4yNzQyMjQgMC4xOTEzNTggMTguNjA4ODIzLTMuMjQ1OTI3IDI1LjY3NzgyMi0xMC4zMzEyOTlsNDEwLjg5MTIwOC00MTEuNzA4ODI5YzYuODYzMzE1LTYuODk5MTMgMTAuMzMxMjk5LTE1Ljk0MDA0MSAxMC4zMzEyOTktMjQuOTc5OTI4Uzk1NS40MjM2NDcgMjg4LjA3ODA5MSA5NDguNTYwMzMyIDI4MS4xNzk5ODR6IiBwLWlkPSI1MTE2IiBmaWxsPSIjY2RjZGNkIj48L3BhdGg+PC9zdmc+",'" class="arrow-svg">\n        <img src="').concat("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTgwMDQ3MzI5NDkwIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjIxMzkiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNNDI2LjY2NjY2NyAxNzAuNjY2NjY3bC0yNTYgMGMtNDcuMTQ2NjY3IDAtODQuOTA2NjY3IDM4LjE4NjY2Ny04NC45MDY2NjcgODUuMzMzMzMzbC0wLjQyNjY2NyA1MTJjMCA0Ny4xNDY2NjcgMzguMTg2NjY3IDg1LjMzMzMzMyA4NS4zMzMzMzMgODUuMzMzMzMzbDY4Mi42NjY2NjcgMGM0Ny4xNDY2NjcgMCA4NS4zMzMzMzMtMzguMTg2NjY3IDg1LjMzMzMzMy04NS4zMzMzMzNsMC00MjYuNjY2NjY3YzAtNDcuMTQ2NjY3LTM4LjE4NjY2Ny04NS4zMzMzMzMtODUuMzMzMzMzLTg1LjMzMzMzM2wtMzQxLjMzMzMzMyAwLTg1LjMzMzMzMy04NS4zMzMzMzN6IiBwLWlkPSIyMTQwIiBmaWxsPSIjNmNiNWZlIj48L3BhdGg+PC9zdmc+",'" class="folder-svg">\n        ').concat(a.name,"\n      "),M.classList.add("mdppt-sidebar__folder"),M.appendChild(i),M.appendChild(t)):(c=a.display||a.name,M.innerHTML='\n        <span class="html-item">\n          <img src="'.concat(I,'" class="html-svg">\n          <a ').concat(d(a.name),' title="').concat(c,'" href="').concat(a.name,'.html">').concat(c,"</a>\n        </span>\n      ")),o.appendChild(M)}),e.appendChild(o),document.body.appendChild(e),M.selectAll(".mdppt-sidebar__item span").forEach(function(e){M.on(e,"click",function(){e.parentNode.classList.toggle("active")})})},d=(i("VZ3O"),function(){function e(){Object(c.a)(this,e),this.slideIndex=null,this.slideZoomModal=!1,this.slidePage=M.selectAll(".mdppt-slide"),this.slideLength=M.length(".mdppt-slide"),this.slideNextPage=M.select(".mdppt-action__next"),this.slidePrevPage=M.select(".mdppt-action__prev"),this.slideCount=M.select(".mdppt-action__count"),this.slideZoomInWrapper=M.select(".mdppt-zoom"),this.slideZoomItem=M.selectAll(".mdppt-zoom_item"),this.initSlideIndex(),this.setPageNumber(),o(),this.init(),this.navigation=M.select(".mdppt-navigation")}return Object(l.a)(e,[{key:"init",value:function(){var c=this;M.on(window,"hashchange",function(e){c.initSlideIndex(),c.resetAll(),c.goToPage(c.slideIndex)}),M.on(document,"keydown",function(){var t=Object(s.a)(a.a.mark(function e(t){var i,n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.getDirection(t);case 2:if(i=e.sent,n=i.direct,i.isScope){e.next=7;break}return e.abrupt("return");case 7:c.slideZoomModal||("next"===n&&c.goNext(),"prev"===n&&c.goPrev(),"fullscreen"===n&&c.toggleFullScreen()),"-"===n&&(c.slideZoomInWrapper.style.display="none",c.slideZoomModal=!1),"+"===n&&c.zoomIn(),window.navigationFolder&&"expand"===n&&c.navigation.classList.toggle("active");case 11:case"end":return e.stop()}},e)}));return function(e){return t.apply(this,arguments)}}()),M.on(this.slideNextPage,"click",function(){c.goNext()}),M.on(this.slidePrevPage,"click",function(){c.goPrev()}),M.on(this.slideCount,"click",function(){c.zoomIn()}),this.slideZoomItem.forEach(function(i){M.on(i,"click",function(e){var t=i.getAttribute("data-slide");c.setSlideIndex(t),c.slideZoomInWrapper.style.display="none",c.slideZoomModal=!1})}),this.slideIndex||this.setSlideIndex(1),this.goToPage(this.slideIndex)}},{key:"setSlideIndex",value:function(e){this.slideIndex=~~e,window.location.hash="slide=".concat(e)}},{key:"initSlideIndex",value:function(){var e=window.location.href.match(/slide=(\d+)+/);e&&0!=~~e[1]?~~e[1]>M.length(".mdppt-slide")?this.setSlideIndex(this.slideLength):this.setSlideIndex(e[1]):this.setSlideIndex(1)}},{key:"resetAll",value:function(){for(var e=0;e<this.slideLength;e++)this.slidePage[e].style.display="none",this.slidePage[e].style.opacity="0"}},{key:"goToPage",value:function(e){var t=this;this.slidePage[e-1].style.display="flex",setTimeout(function(){t.slidePage[e-1].style.opacity="1"},0),this.setPageNumber()}},{key:"goNext",value:function(){var e;this.slideIndex>=this.slideLength||(e=this.slideIndex+1,this.setSlideIndex(e),this.setPageNumber())}},{key:"goPrev",value:function(){var e;this.slideIndex<=1||(e=this.slideIndex-1,this.setSlideIndex(e),this.setPageNumber())}},{key:"setPageNumber",value:function(){this.slideCount.innerHTML="".concat(this.slideIndex,"/").concat(this.slideLength)}},{key:"toggleFullScreen",value:function(){document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():document.documentElement.requestFullscreen()}},{key:"zoomIn",value:function(){this.slideZoomInWrapper.style.display="block";for(var e=0;e<this.slideLength;e++){var t=this.slideZoomItem[e].className;this.slideZoomItem[e].className=t.replace(/\s?active/,"")}this.slideZoomModal=!0,this.slideZoomItem[this.slideIndex-1].className+=" active"}}]),e}());t.default=new d}});