!function(e){var s={};function a(i){if(s[i])return s[i].exports;var t=s[i]={i:i,l:!1,exports:{}};return e[i].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=s,a.d=function(e,s,i){a.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:i})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,s){if(1&s&&(e=a(e)),8&s)return e;if(4&s&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var t in e)a.d(i,t,function(s){return e[s]}.bind(null,t));return i},a.n=function(e){var s=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(s,"a",s),s},a.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},a.p="",a(a.s=0)}([function(e,s,a){"use strict";a.r(s);const i=["client/36284e378963afa2a94c/certificados.0.js","client/36284e378963afa2a94c/habilidades.1.js","client/36284e378963afa2a94c/index.2.js","client/36284e378963afa2a94c/main.js","client/36284e378963afa2a94c/proyectos.4.js","client/36284e378963afa2a94c/proyectos_$slug.5.js","client/36284e378963afa2a94c/sobre$45mi.6.js"].concat(["service-worker-index.html","favicon.png","global.css","images/Leonardo.jpg","images/covid-19-venezuela-1.png","images/covid-19-venezuela-2.png","images/css3.svg","images/diploma-animaciones-web.svg","images/diploma-arquitecto.svg","images/diploma-backend-js.svg","images/diploma-css-grid-layout.svg","images/diploma-ecmascript-6.svg","images/diploma-fundamentos-javascript.svg","images/diploma-git-github.svg","images/diploma-graphql.svg","images/diploma-hablar-en-publico.svg","images/diploma-html5-css3.svg","images/diploma-ingles-basico.svg","images/diploma-javascript-navegador.svg","images/diploma-javascript-profesional.svg","images/diploma-marca-personal.svg","images/diploma-next-js.svg","images/diploma-optimizacion-web.svg","images/diploma-postcss.svg","images/diploma-prework.svg","images/diploma-programacion-basica.svg","images/diploma-react-router-redux.svg","images/diploma-react.svg","images/diploma-responsive-design.svg","images/diploma-spa-javascript.svg","images/diploma-storytelling.svg","images/diploma-tailwind-css.svg","images/diploma-webpack.svg","images/express-icon.svg","images/facebook.svg","images/git.svg","images/github-white.svg","images/github.svg","images/graphql.svg","images/html5.svg","images/instagram.svg","images/javascript.svg","images/link.svg","images/menu-arrow.svg","images/mongodb-icon.svg","images/nodejs-icon.svg","images/nodejs.svg","images/postcss.svg","images/project-arrow.svg","images/react-icon.svg","images/react.svg","images/rock-paper-and-scissors-1.png","images/rock-paper-scissors.png","images/sapper.svg","images/svelte.svg","images/twitter.svg","images/webpack.svg","logo-192.png","logo-512.png","logo.svg","manifest.json"]),t=new Set(i);self.addEventListener("install",e=>{e.waitUntil(caches.open("cache1603743191837").then(e=>e.addAll(i)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const s of e)"cache1603743191837"!==s&&await caches.delete(s);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&t.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1603743191837").then(async s=>{try{const a=await fetch(e.request);return s.put(e.request,a.clone()),a}catch(a){const i=await s.match(e.request);if(i)return i;throw a}}))))})}]);