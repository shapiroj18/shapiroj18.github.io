(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1780:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(4250)}])},8418:function(e,n,r){"use strict";function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],t=!0,o=!1,a=void 0;try{for(var c,i=e[Symbol.iterator]();!(t=(c=i.next()).done)&&(r.push(c.value),!n||r.length!==n);t=!0);}catch(u){o=!0,a=u}finally{try{t||null==i.return||i.return()}finally{if(o)throw a}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=void 0;var o,a=(o=r(7294))&&o.__esModule?o:{default:o},c=r(6273),i=r(387),u=r(7190);var l={};function f(e,n,r,t){if(e&&c.isLocalURL(n)){e.prefetch(n,r,t).catch((function(e){0}));var o=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;l[n+"%"+r+(o?"%"+o:"")]=!0}}var s=function(e){var n,r=!1!==e.prefetch,o=i.useRouter(),s=a.default.useMemo((function(){var n=t(c.resolveHref(o,e.href,!0),2),r=n[0],a=n[1];return{href:r,as:e.as?c.resolveHref(o,e.as):a||r}}),[o,e.href,e.as]),d=s.href,p=s.as,h=e.children,v=e.replace,_=e.shallow,y=e.scroll,m=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var b=(n=a.default.Children.only(h))&&"object"===typeof n&&n.ref,g=t(u.useIntersection({rootMargin:"200px"}),2),j=g[0],w=g[1],x=a.default.useCallback((function(e){j(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,j]);a.default.useEffect((function(){var e=w&&r&&c.isLocalURL(d),n="undefined"!==typeof m?m:o&&o.locale,t=l[d+"%"+p+(n?"%"+n:"")];e&&!t&&f(o,d,p,{locale:n})}),[p,d,w,m,r,o]);var E={ref:x,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,r,t,o,a,i,u){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(r))&&(e.preventDefault(),null==i&&t.indexOf("#")>=0&&(i=!1),n[o?"replace":"push"](r,t,{shallow:a,locale:u,scroll:i}))}(e,o,d,p,v,_,y,m)},onMouseEnter:function(e){c.isLocalURL(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),f(o,d,p,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var L="undefined"!==typeof m?m:o&&o.locale,O=o&&o.isLocaleDomain&&c.getDomainLocale(p,L,o&&o.locales,o&&o.domainLocales);E.href=O||c.addBasePath(c.addLocale(p,L,o&&o.defaultLocale))}return a.default.cloneElement(n,E)};n.default=s},7190:function(e,n,r){"use strict";function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=[],t=!0,o=!1,a=void 0;try{for(var c,i=e[Symbol.iterator]();!(t=(c=i.next()).done)&&(r.push(c.value),!n||r.length!==n);t=!0);}catch(u){o=!0,a=u}finally{try{t||null==i.return||i.return()}finally{if(o)throw a}}return r}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,r=e.disabled||!c,u=o.useRef(),l=t(o.useState(!1),2),f=l[0],s=l[1],d=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),r||f||e&&e.tagName&&(u.current=function(e,n,r){var t=function(e){var n=e.rootMargin||"",r=i.get(n);if(r)return r;var t=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=t.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return i.set(n,r={id:n,observer:o,elements:t}),r}(r),o=t.id,a=t.observer,c=t.elements;return c.set(e,n),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&s(e)}),{rootMargin:n}))}),[r,n,f]);return o.useEffect((function(){if(!c&&!f){var e=a.requestIdleCallback((function(){return s(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),[d,f]};var o=r(7294),a=r(9311),c="undefined"!==typeof IntersectionObserver;var i=new Map},4250:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return d}});var t=r(5893),o=r(9008),a=r(1664),c=r(7852),i=r.n(c);function u(e){var n=e.children;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.default,{children:(0,t.jsx)("title",{children:"Page Layout"})}),(0,t.jsxs)("p",{className:i().grid,children:[(0,t.jsx)(a.default,{href:"/",children:(0,t.jsx)("a",{children:"main"})}),"\xa0\xa0","/","\xa0\xa0",(0,t.jsx)(a.default,{href:"/project-scratch",children:(0,t.jsx)("a",{children:"project scratch"})}),"\xa0\xa0","/","\xa0\xa0",(0,t.jsx)(a.default,{href:"/contact",children:(0,t.jsx)("a",{children:"contact"})})]}),n]})}function l(e){var n=e.children;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u,{}),(0,t.jsx)("main",{children:n})]})}r(355);function f(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){f(e,n,r[n])}))}return e}var d=function(e){var n=e.Component,r=e.pageProps;return(0,t.jsx)(l,{children:(0,t.jsx)(n,s({},r))})}},7852:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},355:function(){},9008:function(e,n,r){e.exports=r(5443)},1664:function(e,n,r){e.exports=r(8418)}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[774,179],(function(){return n(1780),n(387)}));var r=e.O();_N_E=r}]);