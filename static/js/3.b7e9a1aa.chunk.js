(this.webpackJsonpmonsters_rolodex=this.webpackJsonpmonsters_rolodex||[]).push([[3],{20:function(t,e,n){"use strict";n.r(e),n.d(e,"getCLS",(function(){return p})),n.d(e,"getFCP",(function(){return g})),n.d(e,"getFID",(function(){return F})),n.d(e,"getLCP",(function(){return k})),n.d(e,"getTTFB",(function(){return C}));var i,a,r,o,c=function(t,e){return{name:t,value:void 0===e?-1:e,delta:0,entries:[],id:"v1-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}},u=function(t,e){try{if(PerformanceObserver.supportedEntryTypes.includes(t)){var n=new PerformanceObserver((function(t){return t.getEntries().map(e)}));return n.observe({type:t,buffered:!0}),n}}catch(t){}},s=function(t,e){var n=function n(i){"pagehide"!==i.type&&"hidden"!==document.visibilityState||(t(i),e&&(removeEventListener("visibilitychange",n,!0),removeEventListener("pagehide",n,!0)))};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)},f=function(t){addEventListener("pageshow",(function(e){e.persisted&&t(e)}),!0)},d="function"==typeof WeakSet?new WeakSet:new Set,m=function(t,e,n){var i;return function(){e.value>=0&&(n||d.has(e)||"hidden"===document.visibilityState)&&(e.delta=e.value-(i||0),(e.delta||void 0===i)&&(i=e.value,t(e)))}},p=function(t,e){var n,i=c("CLS",0),a=function(t){t.hadRecentInput||(i.value+=t.value,i.entries.push(t),n())},r=u("layout-shift",a);r&&(n=m(t,i,e),s((function(){r.takeRecords().map(a),n()})),f((function(){i=c("CLS",0),n=m(t,i,e)})))},v=-1,l=function(){return"hidden"===document.visibilityState?0:1/0},h=function(){s((function(t){var e=t.timeStamp;v=e}),!0)},S=function(){return v<0&&(v=l(),h(),f((function(){setTimeout((function(){v=l(),h()}),0)}))),{get timeStamp(){return v}}},g=function(t,e){var n,i=S(),a=c("FCP"),r=u("paint",(function(t){"first-contentful-paint"===t.name&&(r&&r.disconnect(),t.startTime<i.timeStamp&&(a.value=t.startTime,a.entries.push(t),d.add(a),n()))}));r&&(n=m(t,a,e),f((function(i){a=c("FCP"),n=m(t,a,e),requestAnimationFrame((function(){requestAnimationFrame((function(){a.value=performance.now()-i.timeStamp,d.add(a),n()}))}))})))},y={passive:!0,capture:!0},w=new Date,E=function(t,e){i||(i=e,a=t,r=new Date,b(removeEventListener),L())},L=function(){if(a>=0&&a<r-w){var t={entryType:"first-input",name:i.type,target:i.target,cancelable:i.cancelable,startTime:i.timeStamp,processingStart:i.timeStamp+a};o.forEach((function(e){e(t)})),o=[]}},T=function(t){if(t.cancelable){var e=(t.timeStamp>1e12?new Date:performance.now())-t.timeStamp;"pointerdown"==t.type?function(t,e){var n=function(){E(t,e),a()},i=function(){a()},a=function(){removeEventListener("pointerup",n,y),removeEventListener("pointercancel",i,y)};addEventListener("pointerup",n,y),addEventListener("pointercancel",i,y)}(e,t):E(e,t)}},b=function(t){["mousedown","keydown","touchstart","pointerdown"].forEach((function(e){return t(e,T,y)}))},F=function(t,e){var n,r=S(),p=c("FID"),v=function(t){t.startTime<r.timeStamp&&(p.value=t.processingStart-t.startTime,p.entries.push(t),d.add(p),n())},l=u("first-input",v);n=m(t,p,e),l&&s((function(){l.takeRecords().map(v),l.disconnect()}),!0),l&&f((function(){var r;p=c("FID"),n=m(t,p,e),o=[],a=-1,i=null,b(addEventListener),r=v,o.push(r),L()}))},k=function(t,e){var n,i=S(),a=c("LCP"),r=function(t){var e=t.startTime;e<i.timeStamp&&(a.value=e,a.entries.push(t)),n()},o=u("largest-contentful-paint",r);if(o){n=m(t,a,e);var p=function(){d.has(a)||(o.takeRecords().map(r),o.disconnect(),d.add(a),n())};["keydown","click"].forEach((function(t){addEventListener(t,p,{once:!0,capture:!0})})),s(p,!0),f((function(i){a=c("LCP"),n=m(t,a,e),requestAnimationFrame((function(){requestAnimationFrame((function(){a.value=performance.now()-i.timeStamp,d.add(a),n()}))}))}))}},C=function(t){var e,n=c("TTFB");e=function(){try{var e=performance.getEntriesByType("navigation")[0]||function(){var t=performance.timing,e={entryType:"navigation",startTime:0};for(var n in t)"navigationStart"!==n&&"toJSON"!==n&&(e[n]=Math.max(t[n]-t.navigationStart,0));return e}();n.value=n.delta=e.responseStart,n.entries=[e],t(n)}catch(t){}},"complete"===document.readyState?setTimeout(e,0):addEventListener("pageshow",e)}}}]);
//# sourceMappingURL=3.b7e9a1aa.chunk.js.map