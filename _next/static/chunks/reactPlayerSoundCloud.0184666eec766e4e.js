(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[125],{4860:function(e,t,n){var r,o,u=n(2932),a=n(8433),i=n(2844),l=n(8164),c=n(3883),f=n(6808),s=n(2664);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach(function(t){u(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var v=Object.create,h=Object.defineProperty,b=Object.getOwnPropertyDescriptor,m=Object.getOwnPropertyNames,O=Object.getPrototypeOf,g=Object.prototype.hasOwnProperty,P=function(e,t,n,r){if(t&&"object"==typeof t||"function"==typeof t){var o,u=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}}(e))){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,a=!0,i=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){i=!0,u=e},f:function(){try{a||null==n.return||n.return()}finally{if(i)throw u}}}}(m(t));try{for(u.s();!(o=u.n()).done;)!function(){var u=o.value;g.call(e,u)||u===n||h(e,u,{get:function(){return t[u]},enumerable:!(r=b(t,u))||r.enumerable})}()}catch(e){u.e(e)}finally{u.f()}}return e},j=function(e,t,n){var r;return(r="symbol"!=typeof t?t+"":t)in e?h(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,n},k={};!function(e,t){for(var n in t)h(e,n,{get:t[n],enumerable:!0})}(k,{default:function(){return R}}),e.exports=P(h({},"__esModule",{value:!0}),k);var w=(o=null!=(r=n(2265))?v(O(r)):{},P(r&&r.__esModule?o:h(o,"default",{value:r,enumerable:!0}),r)),S=n(1393),E=n(1739),R=function(e){"use strict";c(r,e);var t,n=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,n=s(r);if(t){var o=s(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return f(this,e)});function r(){var e;return a(this,r),e=n.apply(this,arguments),j(l(e),"callPlayer",S.callPlayer),j(l(e),"duration",null),j(l(e),"currentTime",null),j(l(e),"fractionLoaded",null),j(l(e),"mute",function(){e.setVolume(0)}),j(l(e),"unmute",function(){null!==e.props.volume&&e.setVolume(e.props.volume)}),j(l(e),"ref",function(t){e.iframe=t}),e}return i(r,[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"load",value:function(e,t){var n=this;(0,S.getSDK)("https://w.soundcloud.com/player/api.js","SC").then(function(r){if(n.iframe){var o=r.Widget.Events,u=o.PLAY,a=o.PLAY_PROGRESS,i=o.PAUSE,l=o.FINISH,c=o.ERROR;t||(n.player=r.Widget(n.iframe),n.player.bind(u,n.props.onPlay),n.player.bind(i,function(){n.duration-n.currentTime<.05||n.props.onPause()}),n.player.bind(a,function(e){n.currentTime=e.currentPosition/1e3,n.fractionLoaded=e.loadedProgress}),n.player.bind(l,function(){return n.props.onEnded()}),n.player.bind(c,function(e){return n.props.onError(e)})),n.player.load(e,y(y({},n.props.config.options),{},{callback:function(){n.player.getDuration(function(e){n.duration=e/1e3,n.props.onReady()})}}))}})}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){}},{key:"seekTo",value:function(e){var t=!(arguments.length>1)||void 0===arguments[1]||arguments[1];this.callPlayer("seekTo",1e3*e),t||this.pause()}},{key:"setVolume",value:function(e){this.callPlayer("setVolume",100*e)}},{key:"getDuration",value:function(){return this.duration}},{key:"getCurrentTime",value:function(){return this.currentTime}},{key:"getSecondsLoaded",value:function(){return this.fractionLoaded*this.duration}},{key:"render",value:function(){var e=this.props.display;return w.default.createElement("iframe",{ref:this.ref,src:"https://w.soundcloud.com/player/?url=".concat(encodeURIComponent(this.props.url)),style:{width:"100%",height:"100%",display:e},frameBorder:0,allow:"autoplay"})}}]),r}(w.Component);j(R,"displayName","SoundCloud"),j(R,"canPlay",E.canPlay.soundcloud),j(R,"loopOnEnded",!0)}}]);