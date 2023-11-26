!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},l={},o=n.parcelRequire644c;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in l){var n=l[e];delete l[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){l[e]=n},n.parcelRequire644c=o);var i=o("l5bVx"),r=e(o("4bnfH")).template({1:function(n,t,l,o,r){var a,u=null!=t?t:n.nullContext||{},c=n.hooks.helperMissing,s="function",d=n.escapeExpression,f=n.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return"  <div class='news-card'>\n    <h2 class='title'>"+d((void 0===(a=null!=(a=f(l,"title")||(null!=t?f(t,"title"):t))?a:c)?"undefined":e(i)(a))===s?a.call(u,{name:"title",hash:{},data:r,loc:{start:{line:3,column:22},end:{line:3,column:31}}}):a)+"</h2>\n    <div class='thumb'>\n      <img src='"+d((void 0===(a=null!=(a=f(l,"urlToImage")||(null!=t?f(t,"urlToImage"):t))?a:c)?"undefined":e(i)(a))===s?a.call(u,{name:"urlToImage",hash:{},data:r,loc:{start:{line:5,column:16},end:{line:5,column:30}}}):a)+"' alt='"+d((void 0===(a=null!=(a=f(l,"title")||(null!=t?f(t,"title"):t))?a:c)?"undefined":e(i)(a))===s?a.call(u,{name:"title",hash:{},data:r,loc:{start:{line:5,column:37},end:{line:5,column:46}}}):a)+"' class='card-img' />\n      <p class='description'>"+d((void 0===(a=null!=(a=f(l,"description")||(null!=t?f(t,"description"):t))?a:c)?"undefined":e(i)(a))===s?a.call(u,{name:"description",hash:{},data:r,loc:{start:{line:6,column:29},end:{line:6,column:44}}}):a)+"</p>\n    </div>\n    <div class='content-box'>\n      <p class='text content'>"+d((void 0===(a=null!=(a=f(l,"content")||(null!=t?f(t,"content"):t))?a:c)?"undefined":e(i)(a))===s?a.call(u,{name:"content",hash:{},data:r,loc:{start:{line:9,column:30},end:{line:9,column:41}}}):a)+"</p>\n      <p class='text author'>Author: "+d((void 0===(a=null!=(a=f(l,"author")||(null!=t?f(t,"author"):t))?a:c)?"undefined":e(i)(a))===s?a.call(u,{name:"author",hash:{},data:r,loc:{start:{line:10,column:37},end:{line:10,column:47}}}):a)+"</p>\n    </div>\n\n  </div>\n"},compiler:[8,">= 4.3.0"],main:function(e,n,t,l,o){var i,r=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return null!=(i=r(t,"each").call(null!=n?n:e.nullContext||{},null!=n?r(n,"articles"):n,{name:"each",hash:{},fn:e.program(1,o,0),inverse:e.noop,data:o,loc:{start:{line:1,column:0},end:{line:14,column:9}}}))?i:""},useData:!0}),a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")};var u={};function c(e,n){for(var t=0;t<n.length;t++){var l=n[t];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e,n,t){n&&c(e.prototype,n);t&&c(e,t);return e};var s=function(){"use strict";function n(){e(a)(this,n),this.searchQuery="",this.page=1}return e(u)(n,[{key:"fetchArticles",value:function(){var e=this,n={Authorization:"2b94772380c74ad89e726abe36fb7410"},t="".concat("https://newsapi.org/v2/","/everything?q=").concat(this.searchQuery,"&language=en&pageSize=10&page=").concat(this.page,"&apiKey=").concat(n.Authorization);return fetch(t,n).then((function(e){return e.json()})).then((function(n){return e.incrementPage(),n}))}},{key:"incrementPage",value:function(){this.page+=1}},{key:"resetPage",value:function(){this.page=1}},{key:"query",get:function(){return this.searchQuery},set:function(e){this.searchQuery=e}}]),n}(),d=function(){"use strict";function n(t){var l=t.selector,o=t.hidden,i=void 0!==o&&o;e(a)(this,n),this.refs=this.getRefs(l),i&&this.hide()}return e(u)(n,[{key:"getRefs",value:function(e){var n={};return n.button=document.querySelector(e),n.label=document.querySelector(".label"),n.spinner=n.button.querySelector(".spinner"),n}},{key:"enable",value:function(){this.refs.button.disabled=!1,this.refs.label.textContent="Show More",this.refs.spinner.classList.add("is-hidden")}},{key:"disable",value:function(){this.refs.button.disabled=!0,this.refs.label.textContent="Loading...",this.refs.spinner.classList.remove("is-hidden")}},{key:"show",value:function(){this.refs.button.classList.remove("is-hidden")}},{key:"hide",value:function(){this.refs.button.classList.add("is-hidden")}}]),n}(),f={contentBox:document.querySelector(".content-box"),form:document.querySelector(".search-form")},h=new d({selector:'[data-action="load-more"]',hidden:!1});console.log(h);var p=new s;function v(){h.disable(),p.fetchArticles().then((function(e){var n;n=e,f.contentBox.insertAdjacentHTML("beforeend",r(n)),h.enable()}))}f.form.addEventListener("submit",(function(e){if(e.preventDefault(),function(){f.contentBox.innerHTML=""}(),p.query=e.currentTarget.elements.query.value,""===p.query)return alert("Введи что-то нормальное");p.resetPage(),h.show(),h.disable(),v()})),h.refs.button.addEventListener("click",v)}();
//# sourceMappingURL=pagination.af679470.js.map
