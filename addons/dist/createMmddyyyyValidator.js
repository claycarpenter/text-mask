!function(r,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.createMmddyyyyValidator=e():r.createMmddyyyyValidator=e()}(this,function(){return function(r){function e(n){if(t[n])return t[n].exports;var u=t[n]={exports:{},id:n,loaded:!1};return r[n].call(u.exports,u,u.exports,e),u.loaded=!0,u.exports}var t={};return e.m=r,e.c=t,e.p="",e(0)}([function(r,e){"use strict";function t(){var r=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=r.minimumDate,t=void 0===e?"":e,a=r.maximumDate,c=void 0===a?"":a;return function(r){for(var e=n(r[0]),a=n(r[1]),d=n(r[3]),v=n(r[4]),l=n(r[6]),m=n(r[7]),s=n(r[8]),p=n(r[9]),y=t.substr(6,4),b=c.substr(6,4),x=4===y.length?Number(y):-(1/0),g=4===b.length?Number(b):1/0,h=e!==!1&&a!==!1&&u([e,a]),D=d!==!1&&v!==!1&&u([d,v]),j=l!==!1&&m!==!1&&s!==!1&&p!==!1&&u([l,m,s,p]),N=[e,a,d,v,l,m,s,p],w=!1,M=0;M<N.length;M++){var V=N[M];if(V===!1&&(w=!0),V!==!1&&w===!0)return!1}if(e>1)return!1;if(h!==!1&&(1>h||h>12))return!1;if(d!==!1){var _=o[h-1];if(d>i(_,0))return!1}if(D!==!1){var O=o[h-1];if(1>D||D>31||D>O)return!1}if(l!==!1&&(l<i(x,0)||l>i(g,0)))return!1;if(m!==!1){var P=[l,m];if(u(P)<f(x,[0,1])||u(P)>f(g,[0,1]))return!1}if(s!==!1){var S=[l,m,s];if(u(S)<f(x,[0,1,2])||u(S)>f(g,[0,1,2]))return!1}if(j!==!1){var k=j%400===0||j%100!==0&&j%4===0;if(k===!1&&2===h&&D>28)return!1;if(x>j||j>g)return!1}if(r.length>9){var q=new Date(r);if(10===c.length){var z=new Date(c);if(q>z)return!1}if(10===t.length){var A=new Date(t);if(A>q)return!1}}return!0}}function n(r){var e=d.find(function(e){return e===r});return void 0===e?!1:Number(e)}function u(r){return Number(r.reduce(function(r,e){return r+=e},""))}function i(r,e){return String(r)[e]}function f(r,e){return u(e.map(function(e){return i(r,e)}))}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=t;var o=[31,29,31,30,31,30,31,31,30,31,30,31],a=[0,1,2,3,4,5,6,7,8,9],c=["0","1","2","3","4","5","6","7","8","9"],d=a.concat(c)}])});