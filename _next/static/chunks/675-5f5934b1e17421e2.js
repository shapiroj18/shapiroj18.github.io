(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[675],{8045:function(t,n,e){"use strict";function r(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=[],r=!0,i=!1,o=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(e.push(a.value),!n||e.length!==n);r=!0);}catch(u){i=!0,o=u}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return e}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function i(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var o=l(e(7294)),a=l(e(5443)),c=e(6978),u=e(5809),s=e(7190);function f(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function l(t){return t&&t.__esModule?t:{default:t}}function d(t){for(var n=arguments,e=function(e){var r=null!=n[e]?n[e]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable})))),i.forEach((function(n){f(t,n,r[n])}))},r=1;r<arguments.length;r++)e(r);return t}var m=new Set,w=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var g=new Map([["default",function(t){var n=t.root,e=t.src,r=t.width,i=t.quality;0;return"".concat(n,"?url=").concat(encodeURIComponent(e),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(t){var n=t.root,e=t.src,r=t.width,i=t.quality,o=new URL("".concat(n).concat(k(e))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),i&&a.set("q",i.toString());return o.href}],["cloudinary",function(t){var n=t.root,e=t.src,r=t.width,i=t.quality,o=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(n).concat(o).concat(k(e))}],["akamai",function(t){var n=t.root,e=t.src,r=t.width;return"".concat(n).concat(k(e),"?imwidth=").concat(r)}],["custom",function(t){var n=t.src;throw new Error('Image with src "'.concat(n,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function p(t){return void 0!==t.default}var h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"https://noop/",loader:"imgix"}||u.imageConfigDefault,A=h.deviceSizes,v=h.imageSizes,y=h.loader,b=h.path,S=(h.domains,i(A).concat(i(v)));function _(t){var n=t.src,e=t.unoptimized,r=t.layout,o=t.width,a=t.quality,c=t.sizes,u=t.loader;if(e)return{src:n,srcSet:void 0,sizes:void 0};var s=function(t,n,e){if(e&&("fill"===n||"responsive"===n)){for(var r,o=/(^|\s)(1?\d?\d)vw/g,a=[];r=o.exec(e);r)a.push(parseInt(r[2]));if(a.length){var c,u=.01*(c=Math).min.apply(c,i(a));return{widths:S.filter((function(t){return t>=A[0]*u})),kind:"w"}}return{widths:S,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:A,kind:"w"}:{widths:i(new Set([t,2*t].map((function(t){return S.find((function(n){return n>=t}))||S[S.length-1]})))),kind:"x"}}(o,r,c),f=s.widths,l=s.kind,d=f.length-1;return{sizes:c||"w"!==l?c:"100vw",srcSet:f.map((function(t,e){return"".concat(u({src:n,quality:a,width:t})," ").concat("w"===l?t:e+1).concat(l)})).join(", "),src:u({src:n,quality:a,width:f[d]})}}function O(t){return"number"===typeof t?t:"string"===typeof t?parseInt(t,10):void 0}function j(t){var n=g.get(y);if(n)return n(d({root:b},t));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(u.VALID_LOADERS.join(", "),". Received: ").concat(y))}function k(t){return"/"===t[0]?t.slice(1):t}A.sort((function(t,n){return t-n})),S.sort((function(t,n){return t-n}))},6978:function(t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.toBase64=function(t){return window.btoa(t)}},5809:function(t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.imageConfigDefault=n.VALID_LOADERS=void 0;n.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];n.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"]}},5675:function(t,n,e){e(8045)}}]);