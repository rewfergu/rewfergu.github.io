(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[596],{9657:function(e,t,n){var r,o,a=n(2932),i=n(2165),u=n(8433),l=n(2844),c=n(8164),f=n(3883),s=n(6808),p=n(2664);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var h=Object.create,v=Object.defineProperty,m=Object.getOwnPropertyDescriptor,b=Object.getOwnPropertyNames,g=Object.getPrototypeOf,O=Object.prototype.hasOwnProperty,P=function(e,t,n,r){if(t&&"object"==typeof t||"function"==typeof t){var o,a=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}}(e))){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){u=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(u)throw a}}}}(b(t));try{for(a.s();!(o=a.n()).done;)!function(){var a=o.value;O.call(e,a)||a===n||v(e,a,{get:function(){return t[a]},enumerable:!(r=m(t,a))||r.enumerable})}()}catch(e){a.e(e)}finally{a.f()}}return e},j=function(e,t,n){var r;return(r="symbol"!=typeof t?t+"":t)in e?v(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,n},w={};!function(e,t){for(var n in t)v(e,n,{get:t[n],enumerable:!0})}(w,{default:function(){return S}}),e.exports=P(v({},"__esModule",{value:!0}),w);var k=(o=null!=(r=n(2265))?h(g(r)):{},P(r&&r.__esModule?o:v(o,"default",{value:r,enumerable:!0}),r)),D=n(1393),M=n(1739),S=function(e){"use strict";f(r,e);var t,n=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,n=p(r);if(t){var o=p(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return s(this,e)});function r(){var e;return u(this,r),e=n.apply(this,arguments),j(c(e),"callPlayer",D.callPlayer),j(c(e),"onDurationChange",function(){var t=e.getDuration();e.props.onDuration(t)}),j(c(e),"mute",function(){e.callPlayer("setMuted",!0)}),j(c(e),"unmute",function(){e.callPlayer("setMuted",!1)}),j(c(e),"ref",function(t){e.container=t}),e}return l(r,[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"load",value:function(e){var t=this,n=this.props,r=n.controls,o=n.config,u=n.onError,l=n.playing,c=i(e.match(M.MATCH_URL_DAILYMOTION),2)[1];if(this.player){this.player.load(c,{start:(0,D.parseStartTime)(e),autoplay:l});return}(0,D.getSDK)("https://api.dmcdn.net/all.js","DM","dmAsyncInit",function(e){return e.player}).then(function(n){if(t.container){var i=n.player;t.player=new i(t.container,{width:"100%",height:"100%",video:c,params:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach(function(t){a(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({controls:r,autoplay:t.props.playing,mute:t.props.muted,start:(0,D.parseStartTime)(e),origin:window.location.origin},o.params),events:{apiready:t.props.onReady,seeked:function(){return t.props.onSeek(t.player.currentTime)},video_end:t.props.onEnded,durationchange:t.onDurationChange,pause:t.props.onPause,playing:t.props.onPlay,waiting:t.props.onBuffer,error:function(e){return u(e)}}})}},u)}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){}},{key:"seekTo",value:function(e){var t=!(arguments.length>1)||void 0===arguments[1]||arguments[1];this.callPlayer("seek",e),t||this.pause()}},{key:"setVolume",value:function(e){this.callPlayer("setVolume",e)}},{key:"getDuration",value:function(){return this.player.duration||null}},{key:"getCurrentTime",value:function(){return this.player.currentTime}},{key:"getSecondsLoaded",value:function(){return this.player.bufferedTime}},{key:"render",value:function(){var e=this.props.display;return k.default.createElement("div",{style:{width:"100%",height:"100%",display:e}},k.default.createElement("div",{ref:this.ref}))}}]),r}(k.Component);j(S,"displayName","DailyMotion"),j(S,"canPlay",M.canPlay.dailymotion),j(S,"loopOnEnded",!0)}}]);