(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1780:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(4250)}])},8418:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a=[],c=!0,i=!1;try{for(t=t.call(e);!(c=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);c=!0);}catch(u){i=!0,o=u}finally{try{c||null==t.return||t.return()}finally{if(i)throw o}}return a}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.default=void 0;var a,c=(a=t(7294))&&a.__esModule?a:{default:a},i=t(6273),u=t(387),l=t(7190);var f={};function s(e,r,t,n){if(e&&i.isLocalURL(r)){e.prefetch(r,t,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;f[r+"%"+t+(o?"%"+o:"")]=!0}}var d=function(e){var r,t=!1!==e.prefetch,n=u.useRouter(),a=c.default.useMemo((function(){var r=o(i.resolveHref(n,e.href,!0),2),t=r[0],a=r[1];return{href:t,as:e.as?i.resolveHref(n,e.as):a||t}}),[n,e.href,e.as]),d=a.href,p=a.as,h=e.children,v=e.replace,y=e.shallow,m=e.scroll,_=e.locale;"string"===typeof h&&(h=c.default.createElement("a",null,h));var b=(r=c.default.Children.only(h))&&"object"===typeof r&&r.ref,g=o(l.useIntersection({rootMargin:"200px"}),2),j=g[0],w=g[1],x=c.default.useCallback((function(e){j(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,j]);c.default.useEffect((function(){var e=w&&t&&i.isLocalURL(d),r="undefined"!==typeof _?_:n&&n.locale,o=f[d+"%"+p+(r?"%"+r:"")];e&&!o&&s(n,d,p,{locale:r})}),[p,d,w,_,t,n]);var E={ref:x,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,t,n,o,a,c,u){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(t))&&(e.preventDefault(),r[o?"replace":"push"](t,n,{shallow:a,locale:u,scroll:c}))}(e,n,d,p,v,y,m,_)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),i.isLocalURL(d)&&s(n,d,p,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var L="undefined"!==typeof _?_:n&&n.locale,O=n&&n.isLocaleDomain&&i.getDomainLocale(p,L,n&&n.locales,n&&n.domainLocales);E.href=O||i.addBasePath(i.addLocale(p,L,n&&n.defaultLocale))}return c.default.cloneElement(r,E)};r.default=d},7190:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,o,a=[],c=!0,i=!1;try{for(t=t.call(e);!(c=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);c=!0);}catch(u){i=!0,o=u}finally{try{c||null==t.return||t.return()}finally{if(i)throw o}}return a}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootRef,t=e.rootMargin,n=e.disabled||!i,f=a.useRef(),s=o(a.useState(!1),2),d=s[0],p=s[1],h=o(a.useState(r?r.current:null),2),v=h[0],y=h[1],m=a.useCallback((function(e){f.current&&(f.current(),f.current=void 0),n||d||e&&e.tagName&&(f.current=function(e,r,t){var n=function(e){var r,t={root:e.root||null,margin:e.rootMargin||""},n=l.find((function(e){return e.root===t.root&&e.margin===t.margin}));n?r=u.get(n):(r=u.get(t),l.push(t));if(r)return r;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var r=o.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;r&&t&&r(t)}))}),e);return u.set(t,r={id:t,observer:a,elements:o}),r}(t),o=n.id,a=n.observer,c=n.elements;return c.set(e,r),a.observe(e),function(){if(c.delete(e),a.unobserve(e),0===c.size){a.disconnect(),u.delete(o);var r=l.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));r>-1&&l.splice(r,1)}}}(e,(function(e){return e&&p(e)}),{root:v,rootMargin:t}))}),[n,v,t,d]);return a.useEffect((function(){if(!i&&!d){var e=c.requestIdleCallback((function(){return p(!0)}));return function(){return c.cancelIdleCallback(e)}}}),[d]),a.useEffect((function(){r&&y(r.current)}),[r]),[m,d]};var a=t(7294),c=t(9311),i="undefined"!==typeof IntersectionObserver;var u=new Map,l=[]},4250:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return d}});var n=t(5893),o=t(9008),a=t(1664),c=t(214),i=t.n(c);function u(e){var r=e.children;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.default,{children:(0,n.jsx)("title",{children:"Page Layout"})}),(0,n.jsxs)("p",{className:i().grid,children:[(0,n.jsx)(a.default,{href:"/",children:(0,n.jsx)("a",{children:"main"})}),"\xa0\xa0","/","\xa0\xa0",(0,n.jsx)(a.default,{href:"/project-scratch",children:(0,n.jsx)("a",{children:"project scratch"})}),"\xa0\xa0","/","\xa0\xa0",(0,n.jsx)(a.default,{href:"/contact",children:(0,n.jsx)("a",{children:"contact"})})]}),r]})}function l(e){var r=e.children;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u,{}),(0,n.jsx)("main",{children:r})]})}t(906);function f(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){f(e,r,t[r])}))}return e}var d=function(e){var r=e.Component,t=e.pageProps;return(0,n.jsx)(l,{children:(0,n.jsx)(r,s({},t))})}},214:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb",scratch:"Home_scratch__CcLZ7",photoprofile:"Home_photoprofile__YedMl",contactlinks:"Home_contactlinks__s3fLr"}},906:function(){},9008:function(e,r,t){e.exports=t(5443)},1664:function(e,r,t){e.exports=t(8418)}},function(e){var r=function(r){return e(e.s=r)};e.O(0,[774,179],(function(){return r(1780),r(387)}));var t=e.O();_N_E=t}]);