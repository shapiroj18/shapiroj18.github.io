(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{3269:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return e(9144)}])},8045:function(t,n,e){"use strict";function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function i(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=[],r=!0,i=!1,o=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(e.push(a.value),!n||e.length!==n);r=!0);}catch(s){i=!0,o=s}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return e}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function o(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var a=d(e(7294)),c=d(e(5443)),s=e(6978),u=e(5809),l=e(7190);function f(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function d(t){return t&&t.__esModule?t:{default:t}}function m(t){for(var n=arguments,e=function(e){var r=null!=n[e]?n[e]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),i.forEach((function(n){f(t,n,r[n])}))},r=1;r<arguments.length;r++)e(r);return t}var h=new Set,p=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var w=new Map([["default",function(t){var n=t.root,e=t.src,r=t.width,i=t.quality;0;return"".concat(n,"?url=").concat(encodeURIComponent(e),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(t){var n=t.root,e=t.src,r=t.width,i=t.quality,o=new URL("".concat(n).concat(E(e))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),i&&a.set("q",i.toString());return o.href}],["cloudinary",function(t){var n=t.root,e=t.src,r=t.width,i=t.quality,o=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(n).concat(o).concat(E(e))}],["akamai",function(t){var n=t.root,e=t.src,r=t.width;return"".concat(n).concat(E(e),"?imwidth=").concat(r)}],["custom",function(t){var n=t.src;throw new Error('Image with src "'.concat(n,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function g(t){return void 0!==t.default}var v,A={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"https://noop/",loader:"imgix"}||u.imageConfigDefault,b=A.deviceSizes,y=A.imageSizes,j=A.loader,x=A.path,_=(A.domains,o(b).concat(o(y)));function S(t){var n=t.src,e=t.unoptimized,r=t.layout,i=t.width,a=t.quality,c=t.sizes,s=t.loader;if(e)return{src:n,srcSet:void 0,sizes:void 0};var u=function(t,n,e){if(e&&("fill"===n||"responsive"===n)){for(var r,i=/(^|\s)(1?\d?\d)vw/g,a=[];r=i.exec(e);r)a.push(parseInt(r[2]));if(a.length){var c,s=.01*(c=Math).min.apply(c,o(a));return{widths:_.filter((function(t){return t>=b[0]*s})),kind:"w"}}return{widths:_,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:b,kind:"w"}:{widths:o(new Set([t,2*t].map((function(t){return _.find((function(n){return n>=t}))||_[_.length-1]})))),kind:"x"}}(i,r,c),l=u.widths,f=u.kind,d=l.length-1;return{sizes:c||"w"!==f?c:"100vw",srcSet:l.map((function(t,e){return"".concat(s({src:n,quality:a,width:t})," ").concat("w"===f?t:e+1).concat(f)})).join(", "),src:s({src:n,quality:a,width:l[d]})}}function k(t){return"number"===typeof t?t:"string"===typeof t?parseInt(t,10):void 0}function O(t){var n=w.get(j);if(n)return n(m({root:x},t));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(u.VALID_LOADERS.join(", "),". Received: ").concat(j))}function E(t){return"/"===t[0]?t.slice(1):t}b.sort((function(t,n){return t-n})),_.sort((function(t,n){return t-n}))},6978:function(t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.toBase64=function(t){return window.btoa(t)}},9144:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return c}});var r=e(5893),i=e(9008),o=(e(5675),e(214)),a=e.n(o);function c(){return(0,r.jsxs)("div",{className:a().container,children:[(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:"Jonathan's Contact Info"}),(0,r.jsx)("meta",{name:"description",content:""})]}),(0,r.jsx)("main",{className:a().main,children:(0,r.jsxs)("p",{children:[(0,r.jsx)("img",{className:a().photoprofile,src:"https://avatars.githubusercontent.com/u/55108156?v=4",alt:"profile photo",width:"300"}),(0,r.jsx)("h2",{children:"Contact"}),(0,r.jsx)("br",{}),(0,r.jsxs)("a",{className:a().contactlinks,href:"https://github.com/shapiroj18",children:[(0,r.jsx)("img",{src:"/images/github.png",alt:"github",width:"25"}),"\xa0GitHub"]}),(0,r.jsx)("br",{}),(0,r.jsxs)("a",{className:a().contactlinks,href:"https://www.linkedin.com/in/jonathan-shapiro/",children:[(0,r.jsx)("img",{src:"/images/linkedin.png",alt:"linkedin",width:"25"}),"\xa0LinkedIn"]}),(0,r.jsx)("br",{}),(0,r.jsxs)("a",{className:a().contactlinks,href:"https://medium.com/@jonshapiro_53366",children:[(0,r.jsx)("img",{src:"/images/medium.png",alt:"medium",width:"25"}),"\xa0Medium"]})]})})]})}},5809:function(t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.imageConfigDefault=n.VALID_LOADERS=void 0;n.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];n.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"]}},5675:function(t,n,e){e(8045)}},function(t){t.O(0,[774,888,179],(function(){return n=3269,t(t.s=n);var n}));var n=t.O();_N_E=n}]);