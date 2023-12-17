/*!
   JW Player version 8.18.4
   Copyright (c) 2021, JW Player, All Rights Reserved
   This source code and its use and distribution is subject to the terms
   and conditions of the applicable license agreement.
   https://www.jwplayer.com/tos/
   This product includes portions of other software. For the full text of licenses, see
   https://cdn.jsdelivr.net/gh/swartie800/rplayer/player/v/8.18.4/notice.txt
*/
(window.webpackJsonpjwplayer=window.webpackJsonpjwplayer||[]).push([[13],{122:function(e,t,n){"use strict";function r(e){return{bitrate:e.bitrate,label:e.label,width:e.width,height:e.height}}n.d(t,"a",(function(){return r}))},158:function(e,t,n){"use strict";function r(e,t,n){if(!e)return"";var r=e.bitrate||e.bandwidth;return function(e,t){var n=null;if(t&&e){var r=Object.keys(e);if(r.length){var i=function(e,t){var n,r=null,a=1/0;return e.forEach((function(e){(n=Math.abs(parseFloat(e)-t))<a&&(r=e,a=n)})),r}(r,a(t));i&&(n=e[i])}}return n}(t,r)||e.label||function(e,t,n){if(!e&&!t)return"";var r="",i="";t&&(i=a(t)+" kbps",r=i);e&&(r=e+"p",t&&n&&(r+=" ("+i+")"));return r}(e.height,r,n)}function a(e){return Math.floor(e/1e3)}function i(e){return!!Array.isArray(e)&&u(e,["height","bitrate","bandwidth"])}function s(e){return!!Array.isArray(e)&&u(e,["label"])}function u(e,t){return e.some((function(e){for(var n,r=0;r<t.length&&!(n=e[t[r]]);r++);if(!n)return!1;var a=this[n]||!1;return this[n]=!0,a}),{})}n.d(t,"a",(function(){return r})),n.d(t,"d",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return s}))},182:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(122),i=n(158),s=n(4),u=n(3),c=n(9);function o(e,t,n){var r=document.createElement("param");r.setAttribute("name",t),r.setAttribute("value",n),e.appendChild(r)}function d(e,t,n){Object.defineProperty(e,t,{get:function(){return n}})}function l(e,t,n){e instanceof window.HTMLElement&&delete n[t]}var h=n(57),f=n(96),T=n(1),v=0;function g(e,t){var n,g,m,k=null,b=-1,p=-1,y=null,_=-1,x=null,C=!1,w=this,j=function(){return g&&g.__ready},O=function(){g&&g.triggerFlash.apply(g,arguments)};function B(){b=setTimeout((function(){c.a.trigger.call(w,"flashBlocked",{value:!0})}),4e3),g.once("embedded",(function(){S(),c.a.trigger.call(w,"flashBlocked",{value:!1})}),w)}function E(){S(),B()}function S(){clearTimeout(b),window.removeEventListener("focus",E)}function I(e,t){for(var n=0;n<e.length;n++)if(e[n].index===t)return n}Object(r.j)(this,c.a,f.a,{preload:function(e){e.preload&&"none"!==e.preload&&!t.autostart&&(k=e)},load:function(e){k=e,this.setState(u.ob),O("load",e),e.sources.length&&"hls"!==e.sources[0].type&&this.sendMediaType(e.sources)},play:function(){O("play")},pause:function(){O("pause"),this.setState(u.pb)},stop:function(){O("stop"),p=-1,k=null,this.clearTracks(),this.setState(u.nb)},seek:function(e){O("seek",e)},volume:function(e){if(!C&&Object(r.v)(e)){var t=Math.min(Math.max(0,e),100);j()&&O("volume",t)}},mute:function(e){C=e,j()&&O("mute",e)},setState:function(){return h.a.setState.apply(this,arguments)},getSwfObject:function(n){var r=n.querySelector("object");return r?(r.off(null,null,this),r):function(e,t,n,r){var a,i=!0;r=r||"opaque",(a=document.createElement("object")).setAttribute("type","application/x-shockwave-flash"),a.setAttribute("data",e),a.setAttribute("width","100%"),a.setAttribute("height","100%"),a.setAttribute("bgcolor","#000000"),a.setAttribute("id",n),a.setAttribute("name",n),o(a,"allowfullscreen","true"),o(a,"allowscriptaccess","always"),o(a,"wmode",r),o(a,"menu","false"),t.appendChild(a,t),a.className="jw-swf jw-reset",a.style.display="block",a.style.position="absolute",a.style.left=0,a.style.right=0,a.style.top=0,a.style.bottom=0,s.Browser.ie&&"PointerEvent"in window&&(a.style.pointerEvents="none");var u=-1;d(a,"on",c.a.on),d(a,"once",c.a.once),d(a,"_eventQueue",[]),d(a,"off",(function(){var e=Array.prototype.slice.call(arguments);return e.length||(a._eventQueue.length=0,clearTimeout(u)),e.length?c.a.off.apply(a,e):(h={},this._events=h,this)})),d(a,"trigger",(function(e,t){var n=a._eventQueue;n.push({type:e,json:t}),u>-1||(u=setTimeout((function(){var e=n.length;for(u=-1;e--;){var t=n.shift();if(t.json){var r=JSON.parse(decodeURIComponent(t.json));c.a.trigger.call(a,t.type,r)}else c.a.trigger.call(a,t.type)}})))}));var h={};return Object.defineProperty(a,"_events",{get:function(){return h},set:function(e){h=e}}),d(a,"triggerFlash",(function(e){if("setupCommandQueue"===e&&(i=!1),"setup"!==e&&i||!a.__externalCall){for(var t=a.__commandQueue,n=t.length;n--;)t[n][0]===e&&t.splice(n,1);return t.push(Array.prototype.slice.call(arguments)),a}var r=Array.prototype.slice.call(arguments,1);try{if(r.length){r.forEach((function(e){e&&"object"==typeof e&&Object.keys(e).forEach((function(t){l(e[t],t,e)}))}));var s=JSON.stringify(r);a.__externalCall(e,s)}else a.__externalCall(e)}catch(t){if(console.error(e,t),"setup"===e)return t.name="Failed to setup flash",t}return a})),d(a,"__commandQueue",[]),a}(t.flashplayer,n,e+"_swf_"+v++,t.wmode)},getContainer:function(){return n},setContainer:function(e){if(n!==e){n=e,g=this.getSwfObject(e),document.hasFocus()?B():window.addEventListener("focus",E),g.once("ready",(function(){S();var e=Object(r.j)({},t),n=g.triggerFlash("setup",e);n===g?g.__ready=!0:this.trigger(u.G,new T.t(T.o,T.l,n)),k&&O("init",k),O("setupCommandQueue",g.__commandQueue),g.__commandQueue.length=0}),this);var a=[u.Q,u.R,"subtitlesTrackChanged","mediaType"],o=[u.D,u.S],d=[u.E];g.on([u.I,u.J].join(" "),(function(e){!function(e){for(var n=e.levels,r=0;r<n.length;r++){var a=n[r];a.index=r,"Auto"!==a.label&&(a.label=Object(i.a)(a,t.qualityLabels))}e.levels=y=function(e){return e.sort((function(e,t){return e.height&&t.height?t.height-e.height:t.bitrate-e.bitrate}))}(e.levels),e.currentQuality=p=I(y,e.currentQuality)}(e),this.trigger(e.type,e)}),this),g.on(u.f,(function(e){_=e.currentTrack,x=e.tracks,this.trigger(e.type,e)}),this),g.on(u.g,(function(e){_=e.currentTrack,x=e.tracks,this.trigger(e.type,e)}),this),g.on(u.bb,(function(e){var t=e.newstate;t!==u.nb&&this.setState(t)}),this),g.on(o.join(" "),(function(e){e.seekRange=e.seekRange||{start:0,end:0},"Infinity"===e.duration?e.duration=1/0:e.seekRange.end=e.seekRange.end||Math.abs(e.duration),e.currentTime=e.currentTime||e.position,this.trigger(e.type,e)}),this),g.on(a.join(" "),(function(e){this.trigger(e.type,e)}),this),g.on(d.join(" "),(function(e){this.trigger(e.type)}),this),g.on(u.B,(function(){this.trigger(u.F)}),this),g.on(u.U,(function(e){var t=0;y.length>1&&(t=I(y,e.level.index+1)),e.level=Object(r.j)(e.level,{index:t}),"initial choice"!==e.reason&&(e.reason=e.reason?"auto":"api"),this.trigger(u.U,e),this.trigger("providerFirstFrame",{})}),this),g.on(u.fb,(function(e){m=e.message,this.trigger(u.fb,e)}),this),g.on(u.w,(function(e){this.trigger(u.G,new T.t(T.p,T.j,e))}),this),g.on(u.G,(function(e){this.trigger(u.G,new T.t(T.p,T.k,e))}),this),g.on("subtitlesTracks",(function(e){this.addTextTracks(e.tracks)}),this),g.on("subtitlesTrackData",(function(e){this.addCuesToTrack(e)}),this),g.on(u.K,(function(e){e&&(e.metadata&&"textdata"===e.metadata.type?this.addCaptionsCue(e.metadata):this.trigger(e.type,e))}),this),function(e){var t=document.createElement("a");t.href=e.flashplayer;var n=t.host===window.location.host;return s.Browser.chrome&&!n}(t)&&g.on("throttle",(function(e){S();var t="resume"!==e.state;"resume"===e.state?(c.a.trigger.call(w,"flashThrottle",{value:t}),c.a.trigger.call(w,"flashBlocked",{value:t})):b=setTimeout((function(){c.a.trigger.call(w,"flashThrottle",{value:t}),c.a.trigger.call(w,"flashBlocked",{value:t})}),250)}),this)}},remove:function(){var e;p=-1,y=null,(e=g)&&e.parentNode&&(e.style.display="none",e.parentNode.removeChild(e),e=null)},setVisibility:function(e){e=!!e,n.style.opacity=e?1:0},resize:function(e,t,n){n&&O("stretch",n)},setControls:function(e){O("setControls",e)},setCurrentQuality:function(e){O("setCurrentQuality",y[e].index)},getCurrentQuality:function(){return p},setSubtitlesTrack:function(e){O("setSubtitlesTrack",e)},getName:function(){return m?{name:"flash_"+m}:{name:"flash"}},getQualityLevels:function(){return(y||k&&k.sources||[]).map((function(e){return Object(a.a)(e)}))},getAudioTracks:function(){return x},getCurrentAudioTrack:function(){return _},setCurrentAudioTrack:function(e){O("setCurrentAudioTrack",e)},detachMedia:function(){this.pause()},destroy:function(){S(),this.remove(),g&&(g.off(),g=null),n=null,k=null,this.off()}})}var m=function(){};m.prototype=h.a,g.prototype=new m,g.getName=function(){return{name:"flash"}};t.default=g},77:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(2);function a(e){var t=[],n=(e=Object(r.i)(e)).split("\r\n\r\n");1===n.length&&(n=e.split("\n\n"));for(var a=0;a<n.length;a++)if("WEBVTT"!==n[a]){var s=i(n[a]);s.text&&t.push(s)}return t}function i(e){var t={},n=e.split("\r\n");1===n.length&&(n=e.split("\n"));var a=1;if(n[0].indexOf(" --\x3e ")>0&&(a=0),n.length>a+1&&n[a+1]){var i=n[a],s=i.indexOf(" --\x3e ");s>0&&(t.begin=Object(r.g)(i.substr(0,s)),t.end=Object(r.g)(i.substr(s+5)),t.text=n.slice(a+1).join("\r\n"))}return t}},78:function(e,t,n){"use strict";var r=window.VTTCue;function a(e){if("string"!=typeof e)return!1;return!!{start:!0,middle:!0,end:!0,left:!0,right:!0}[e.toLowerCase()]&&e.toLowerCase()}if(!r){(r=function(e,t,n){var r=this;r.hasBeenReset=!1;var i="",s=!1,u=e,c=t,o=n,d=null,l="",h=!0,f="auto",T="start",v="auto",g=100,m="middle";Object.defineProperty(r,"id",{enumerable:!0,get:function(){return i},set:function(e){i=""+e}}),Object.defineProperty(r,"pauseOnExit",{enumerable:!0,get:function(){return s},set:function(e){s=!!e}}),Object.defineProperty(r,"startTime",{enumerable:!0,get:function(){return u},set:function(e){if("number"!=typeof e)throw new TypeError("Start time must be set to a number.");u=e,this.hasBeenReset=!0}}),Object.defineProperty(r,"endTime",{enumerable:!0,get:function(){return c},set:function(e){if("number"!=typeof e)throw new TypeError("End time must be set to a number.");c=e,this.hasBeenReset=!0}}),Object.defineProperty(r,"text",{enumerable:!0,get:function(){return o},set:function(e){o=""+e,this.hasBeenReset=!0}}),Object.defineProperty(r,"region",{enumerable:!0,get:function(){return d},set:function(e){d=e,this.hasBeenReset=!0}}),Object.defineProperty(r,"vertical",{enumerable:!0,get:function(){return l},set:function(e){var t=function(e){return"string"==typeof e&&(!!{"":!0,lr:!0,rl:!0}[e.toLowerCase()]&&e.toLowerCase())}(e);if(!1===t)throw new SyntaxError("An invalid or illegal string was specified.");l=t,this.hasBeenReset=!0}}),Object.defineProperty(r,"snapToLines",{enumerable:!0,get:function(){return h},set:function(e){h=!!e,this.hasBeenReset=!0}}),Object.defineProperty(r,"line",{enumerable:!0,get:function(){return f},set:function(e){if("number"!=typeof e&&"auto"!==e)throw new SyntaxError("An invalid number or illegal string was specified.");f=e,this.hasBeenReset=!0}}),Object.defineProperty(r,"lineAlign",{enumerable:!0,get:function(){return T},set:function(e){var t=a(e);if(!t)throw new SyntaxError("An invalid or illegal string was specified.");T=t,this.hasBeenReset=!0}}),Object.defineProperty(r,"position",{enumerable:!0,get:function(){return v},set:function(e){if(e<0||e>100)throw new Error("Position must be between 0 and 100.");v=e,this.hasBeenReset=!0}}),Object.defineProperty(r,"size",{enumerable:!0,get:function(){return g},set:function(e){if(e<0||e>100)throw new Error("Size must be between 0 and 100.");g=e,this.hasBeenReset=!0}}),Object.defineProperty(r,"align",{enumerable:!0,get:function(){return m},set:function(e){var t=a(e);if(!t)throw new SyntaxError("An invalid or illegal string was specified.");m=t,this.hasBeenReset=!0}}),r.displayState=void 0}).prototype.getCueAsHTML=function(){return window.WebVTT.convertCueToDOMTree(window,this.text)}}t.a=r},82:function(e,t,n){"use strict";function r(e,t){var n=e.kind||"cc";return e.default||e.defaulttrack?"default":e._id||e.file||n+t}function a(e,t){var n=e.label||e.name||e.language;return n||(n="Unknown CC",(t+=1)>1&&(n+=" ["+t+"]")),{label:n,unknownCount:t}}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}))},83:function(e,t,n){"use strict";var r=n(78),a=n(6),i=n(27),s=n(5),u=n(77),c=n(2),o=n(1);function d(e){throw new o.t(null,e)}function l(e,t,r){e.xhr=Object(i.b)(e.file,(function(i){!function(e,t,r,i){var l,h,T=e.responseXML?e.responseXML.firstChild:null;if(T)for("xml"===Object(s.b)(T)&&(T=T.nextSibling);T&&T.nodeType===T.COMMENT_NODE;)T=T.nextSibling;try{if(T&&"tt"===Object(s.b)(T)){if(!e.responseXML)throw new Error("Empty XML response");l=function(e){e||d(306007);var t=[],n=e.getElementsByTagName("p"),r=30,a=e.getElementsByTagName("tt");if(a&&a[0]){var i=parseFloat(a[0].getAttribute("ttp:frameRate")||"");isNaN(i)||(r=i)}n||d(306005),n.length||(n=e.getElementsByTagName("tt:p")).length||(n=e.getElementsByTagName("tts:p"));for(var s=0;s<n.length;s++){for(var u=n[s],o=u.getElementsByTagName("br"),l=0;l<o.length;l++){var h=o[l];h&&h.parentNode&&h.parentNode.replaceChild(e.createTextNode("\r\n"),h)}var f=u.innerHTML||u.textContent||u.text||"",T=Object(c.i)(f).replace(/>\s+</g,"><").replace(/(<\/?)tts?:/g,"$1").replace(/<br.*?\/>/g,"\r\n");if(T){var v=u.getAttribute("begin")||"",g=u.getAttribute("dur")||"",m=u.getAttribute("end")||"",k={begin:Object(c.g)(v,r),text:T};m?k.end=Object(c.g)(m,r):g&&(k.end=(k.begin||0)+Object(c.g)(g,r)),t.push(k)}}return t.length||d(306005),t}(e.responseXML),h=f(l),delete t.xhr,r(h)}else{var v=e.responseText;v.indexOf("WEBVTT")>=0?n.e(19).then(function(e){return n(163).default}.bind(null,n)).catch(Object(a.c)(301131)).then((function(e){var n=new e(window);h=[],n.oncue=function(e){h.push(e)},n.onflush=function(){delete t.xhr,r(h)},n.parse(v)})).catch((function(e){delete t.xhr,i(Object(o.C)(null,o.c,e))})):(l=Object(u.a)(v),h=f(l),delete t.xhr,r(h))}}catch(e){delete t.xhr,i(Object(o.C)(null,o.c,e))}}(i,e,t,r)}),(function(e,t,n,a){r(Object(o.B)(a,o.c))}))}function h(e){e&&e.forEach((function(e){var t=e.xhr;t&&(t.onload=null,t.onreadystatechange=null,t.onerror=null,"abort"in t&&t.abort()),delete e.xhr}))}function f(e){return e.map((function(e){return new r.a(e.begin,e.end,e.text)}))}n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return h}))},96:function(e,t,n){"use strict";var r=n(83),a=n(82),i={TIT2:"title",TT2:"title",WXXX:"url",TPE1:"artist",TP1:"artist",TALB:"album",TAL:"album"};function s(e,t){for(var n,r,a,i=e.length,s="",u=t||0;u<i;)if(0!==(n=e[u++])&&3!==n)switch(n>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:s+=String.fromCharCode(n);break;case 12:case 13:r=e[u++],s+=String.fromCharCode((31&n)<<6|63&r);break;case 14:r=e[u++],a=e[u++],s+=String.fromCharCode((15&n)<<12|(63&r)<<6|(63&a)<<0)}return s}function u(e){var t=function(e){for(var t="0x",n=0;n<e.length;n++)e[n]<16&&(t+="0"),t+=e[n].toString(16);return parseInt(t)}(e);return 127&t|(32512&t)>>1|(8323072&t)>>2|(2130706432&t)>>3}function c(e){return void 0===e&&(e=[]),e.reduce((function(e,t){if(!("value"in t)&&"data"in t&&t.data instanceof ArrayBuffer){var n=new Uint8Array(t.data),r=n.length;t={value:{key:"",data:""}};for(var a=10;a<14&&a<n.length&&0!==n[a];)t.value.key+=String.fromCharCode(n[a]),a++;var c=19,o=n[c];3!==o&&0!==o||(o=n[++c],r--);var d=0;if(1!==o&&2!==o)for(var l=c+1;l<r;l++)if(0===n[l]){d=l-c;break}if(d>0){var h=s(n.subarray(c,c+=d),0);if("PRIV"===t.value.key){if("com.apple.streaming.transportStreamTimestamp"===h){var f=1&u(n.subarray(c,c+=4)),T=u(n.subarray(c,c+=4))+(f?4294967296:0);t.value.data=T}else t.value.data=s(n,c+1);t.value.info=h}else t.value.info=h,t.value.data=s(n,c+1)}else{var v=n[c];t.value.data=1===v||2===v?function(e,t){for(var n=e.length-1,r="",a=t||0;a<n;)254===e[a]&&255===e[a+1]||(r+=String.fromCharCode((e[a]<<8)+e[a+1])),a+=2;return r}(n,c+1):s(n,c+1)}}if(i.hasOwnProperty(t.value.key)&&(e[i[t.value.key]]=t.value.data),t.value.info){var g=e[t.value.key];g!==Object(g)&&(g={},e[t.value.key]=g),g[t.value.info]=t.value.data}else e[t.value.key]=t.value.data;return e}),{})}var o=n(4),d=n(3),l=n(0),h={_itemTracks:null,_textTracks:null,_currentTextTrackIndex:-1,_tracksById:null,_cuesByTrackId:null,_cachedVTTCues:null,_metaCuesByTextTime:null,_unknownCount:0,_activeCues:null,_cues:null,textTrackChangeHandler:null,addTrackHandler:null,cueChangeHandler:null,renderNatively:!1,_initTextTracks:function(){this._textTracks=[],this._tracksById={},this._metaCuesByTextTime={},this._cuesByTrackId={},this._cachedVTTCues={},this._cues={},this._activeCues={},this._unknownCount=0},addTracksListener:function(e,t,n){e&&(this.removeTracksListener(e,t,n),this.instreamMode||(e.addEventListener?e.addEventListener(t,n):e["on"+t]=n))},removeTracksListener:function(e,t,n){e&&(e.removeEventListener&&n?e.removeEventListener(t,n):e["on"+t]=null)},clearTracks:function(){var e=this;Object(r.a)(this._itemTracks);var t=this._tracksById;if(t&&Object.keys(t).forEach((function(n){if(0===n.indexOf("nativemetadata")){var r=t[n];e.cueChangeHandler&&r.removeEventListener("cuechange",e.cueChangeHandler),k(e.renderNatively,[r],!0)}})),this._itemTracks=null,this._textTracks=null,this._tracksById=null,this._cuesByTrackId=null,this._metaCuesByTextTime=null,this._unknownCount=0,this._currentTextTrackIndex=-1,this._activeCues={},this._cues={},this.renderNatively){var n=this.video.textTracks;this.textTrackChangeHandler&&this.removeTracksListener(n,"change",this.textTrackChangeHandler),k(this.renderNatively,n,!0)}},clearMetaCues:function(){var e=this,t=this._tracksById,n=this._cachedVTTCues;t&&n&&Object.keys(t).forEach((function(r){if(0===r.indexOf("nativemetadata")){var a=t[r];k(e.renderNatively,[a],!1),a.mode="hidden",a.inuse=!0,a._id&&(n[a._id]={})}}))},clearCueData:function(e){var t=this._cachedVTTCues;t&&t[e]&&(t[e]={},this._tracksById&&(this._tracksById[e].data=[]))},disableTextTrack:function(){var e=this.getCurrentTextTrack();if(e){e.mode="disabled";var t=e._id;(t&&p(t)||this.renderNatively&&o.OS.iOS)&&(e.mode="hidden")}},enableTextTrack:function(){var e=this.getCurrentTextTrack();e&&(e.mode="showing")},getCurrentTextTrack:function(){if(this._textTracks)return this._textTracks[this._currentTextTrackIndex]},getSubtitlesTrack:function(){return this._currentTextTrackIndex},addTextTracks:function(e){var t=this,n=[];return e?(this._textTracks||this._initTextTracks(),e.forEach((function(e){if(!(e.includedInManifest||e.kind&&!b(e.kind))){var a=t._createTrack(e);t._addTrackToList(a),n.push(a),e.file&&(e.data=[],Object(r.b)(e,(function(e){a.sideloaded=!0,t.addVTTCuesToTrack(a,e)}),(function(e){t.trigger(d.wb,e)})))}})),this._textTracks&&this._textTracks.length&&this.trigger(d.sb,{tracks:this._textTracks}),n):n},setTextTracks:function(e){var t=this;if(this._currentTextTrackIndex=-1,e){if(this._textTracks){var n=this._tracksById;this._activeCues={},this._cues={},this._unknownCount=0,this._textTracks=this._textTracks.filter((function(e){var r=e._id;return t.renderNatively&&r&&p(r)?(delete n[r],!1):(e.name&&0===e.name.indexOf("Unknown")&&t._unknownCount++,0===r.indexOf("nativemetadata")&&"com.apple.streaming"===e.inBandMetadataTrackDispatchType&&delete n[r],!0)}),this)}else this._initTextTracks();if(e.length)for(var r=0,i=e.length,s=this._tracksById,u=this._cuesByTrackId;r<i;r++){var c=e[r],o=c._id||"";if(!o){if(!1===c.inuse&&b(c.kind)&&this.renderNatively){c._id="native"+c.kind+r;continue}if(b(c.kind)||"metadata"===c.kind){if(o=c._id="native"+c.kind+r,!c.label&&"captions"===c.kind){var l=Object(a.b)(c,this._unknownCount);c.name=l.label,this._unknownCount=l.unknownCount}}else o=c._id=Object(a.a)(c,this._textTracks?this._textTracks.length:0);if(s[o])continue;c.inuse=!0}if(c.inuse&&!s[o])if("metadata"===c.kind){c.mode="hidden";var h=this.cueChangeHandler=this.cueChangeHandler||g.bind(this);c.removeEventListener("cuechange",h),c.addEventListener("cuechange",h),s[o]=c}else if(b(c.kind)){var f=c.mode,T=void 0;if(c.mode="hidden",!c.cues.length&&c.embedded)continue;if(("disabled"!==f||p(o))&&(c.mode=f),u[o]&&!u[o].loaded){for(var v=u[o].cues;T=v.shift();)m(this.renderNatively,c,T);c.mode=f,u[o].loaded=!0}this._addTrackToList(c)}}this.renderNatively&&this.addTrackListeners(e),this._textTracks&&this._textTracks.length&&this.trigger(d.sb,{tracks:this._textTracks})}},addTrackListeners:function(e){var t=this.textTrackChangeHandler=this.textTrackChangeHandler||f.bind(this);this.removeTracksListener(e,"change",t),this.addTracksListener(e,"change",t),(o.Browser.edge||o.Browser.firefox)&&(t=this.addTrackHandler=this.addTrackHandler||v.bind(this),this.removeTracksListener(e,"addtrack",t),this.addTracksListener(e,"addtrack",t))},setupSideloadedTracks:function(e){if(this.renderNatively){var t=(e=e||null)===this._itemTracks;t||Object(r.a)(this._itemTracks),this._itemTracks=e,e&&(t||(this.disableTextTrack(),this._clearSideloadedTextTracks(),this.addTextTracks(e)))}},setSubtitlesTrack:function(e){if(this.renderNatively){if(this._textTracks&&(0===e&&this._textTracks.forEach((function(e){e.mode=e.embedded?"hidden":"disabled"})),this._currentTextTrackIndex!==e-1)){this.disableTextTrack(),this._currentTextTrackIndex=e-1;var t=this.getCurrentTextTrack();t&&(t.mode="showing"),this.trigger(d.tb,{currentTrack:this._currentTextTrackIndex+1,tracks:this._textTracks})}}else this.setCurrentSubtitleTrack&&this.setCurrentSubtitleTrack(e-1)},addCuesToTrack:function(e){var t=this._tracksById[e.name];if(t&&this._metaCuesByTextTime){t.source=e.source;for(var n=e.captions||[],r=[],a=!1,i=0;i<n.length;i++){var s=n[i],u=e.name+"_"+s.begin+"_"+s.end;if(!this._metaCuesByTextTime[u]){var c=this.createCue(s.begin,s.end,s.text);this._metaCuesByTextTime[u]=c,r.push(c),a=!0}}a&&r.sort((function(e,t){return e.start-t.start})),t.data=t.data||[],Array.prototype.push.apply(t.data,r)}},addCaptionsCue:function(e){if(e.text&&e.begin&&e.end&&this._metaCuesByTextTime){var t,n=e.trackid.toString(),r=this._tracksById&&this._tracksById[n];if(r||(r={kind:"captions",_id:n,data:[],default:!1},this.addTextTracks([r]),this.trigger(d.sb,{tracks:this._textTracks})),e.useDTS&&(r.source||(r.source=e.source||"mpegts")),t=e.begin+"_"+e.text,!this._metaCuesByTextTime[t]){var a=this.createCue(e.begin,e.end,e.text);this._metaCuesByTextTime[t]=a,r.data=r.data||[],r.data.push(a)}}},createCue:function(e,t,n){return new(window.VTTCue||window.TextTrackCue)(e,Math.max(t||0,e+.25),n)},addVTTCue:function(e,t){this._tracksById||this._initTextTracks();var n=e.track?e.track:"native"+e.type,r=this._tracksById[n],a="captions"===e.type?"Unknown CC":"ID3 Metadata",i=e.cue;if(!r){var s={kind:e.type,_id:n,label:a,default:!1};this.renderNatively||"metadata"===s.kind?((r=this._createTrack(s)).embedded=!0,this.setTextTracks(this.video.textTracks)):r=this.addTextTracks([s])[0]}if(this._cacheVTTCue(r,i,t)){var u=this.renderNatively||"metadata"===r.kind;return u?m(u,r,i):r.data.push(i),i}return null},addVTTCuesToTrack:function(e,t){if(this.renderNatively){var n,r=e._id,a=this._tracksById,i=this._cuesByTrackId,s=a[r];if(!s)return i||(i=this._cuesByTrackId={}),void(i[r]={cues:t,loaded:!1});if(!i[r]||!i[r].loaded)for(i[r]={cues:t,loaded:!0};n=t.shift();)m(this.renderNatively,s,n)}},parseNativeID3Cues:function(e,t){var n=e[e.length-1];if(!t||t.length!==e.length||!n._parsed&&!_(t[t.length-1],n)){for(var r=[],a=[],i=-1,s=-1,u=-1,c=0;c<e.length;c++){var o=e[c];if(!o._extended&&(o.data||o.value)){if(o.startTime!==s||null===o.endTime){u=s,s=o.startTime;var l=r[i];if(r[++i]=[],a[i]=[],l&&s-u>0)for(var h=0;h<l.length;h++){var f=l[h];f.endTime=s,f._extended=!0}}r[i].push(o),o._parsed||(a[i].push(o),o.endTime-s<.25&&(o.endTime=s+.25),o._parsed=!0)}}for(var T=0;T<a.length;T++)if(a[T].length){var v=y(a[T]);this.trigger(d.L,v)}}},triggerActiveCues:function(e,t){var n=this,r=e.filter((function(e){if(t&&t.some((function(t){return _(e,t)})))return!1;if(e.data)return!0;var r=e.text?function(e){var t;try{t=JSON.parse(e.text)}catch(e){return null}var n={metadataType:t.metadataType,metadataTime:e.startTime,metadata:t};t.programDateTime&&(n.programDateTime=t.programDateTime);return n}(e):null;if(r)"emsg"===r.metadataType&&(r.metadata=r.metadata||{},r.metadata.messageData=e.value),n.trigger(d.K,r);else if(e.value)return!0;return!1}));if(r.length){var a=y(r);this.trigger(d.K,a)}},ensureMetaTracksActive:function(){for(var e=this.video.textTracks,t=e.length,n=0;n<t;n++){var r=e[n];"metadata"===r.kind&&"disabled"===r.mode&&(r.mode="hidden")}},_cacheVTTCue:function(e,t,n){var r=e.kind,a=e._id,i=this._cachedVTTCues;i[a]||(i[a]={});var s,u=i[a];switch(r){case"captions":case"subtitles":s=n||Math.floor(20*t.startTime);var c="_"+(t.line||"auto"),o=Math.floor(20*t.endTime),d=u[s+c]||u[s+1+c]||u[s-1+c];return!(d&&Math.abs(d-o)<=1)&&(u[s+c]=o,!0);case"metadata":var l=t.data?new Uint8Array(t.data).join(""):t.text;return!u[s=n||t.startTime+l]&&(u[s]=t.endTime,!0);default:return!1}},_addTrackToList:function(e){this._textTracks.push(e),this._tracksById[e._id]=e},_createTrack:function(e){var t,n=Object(a.b)(e,this._unknownCount),r=n.label;if(this._unknownCount=n.unknownCount,this.renderNatively||"metadata"===e.kind){var i=this.video.textTracks;(t=Object(l.m)(i,{label:r}))||(t=this.video.addTextTrack(e.kind,r,e.language||"")),t.default=e.default,t.mode="disabled",t.inuse=!0}else(t=e).data=t.data||[];return t._id||(t._id=Object(a.a)(e,this._textTracks?this._textTracks.length:0)),t},_clearSideloadedTextTracks:function(){if(this._textTracks){var e=this._textTracks.filter((function(e){return e.embedded||"subs"===e.groupid}));this._initTextTracks();var t=this._tracksById;e.forEach((function(e){t[e._id]=e})),this._textTracks=e}}};function f(){var e=this.video.textTracks,t=Object(l.k)(e,(function(e){return(e.inuse||!e._id)&&b(e.kind)}));if(this._textTracks&&!T.call(this,t)){for(var n=-1,r=0;r<this._textTracks.length;r++)if("showing"===this._textTracks[r].mode){n=r;break}n!==this._currentTextTrackIndex&&this.setSubtitlesTrack(n+1)}else this.setTextTracks(e)}function T(e){var t=this._textTracks,n=this._tracksById;if(e.length>t.length)return!0;for(var r=0;r<e.length;r++){var a=e[r];if(!a._id||!n[a._id])return!0}return!1}function v(e){var t=e.track;t&&t._id||this.setTextTracks(this.video.textTracks)}function g(e){var t=e.target,n=t.activeCues,r=t.cues,a=t._id,i=this._cues,s=this._activeCues;if(r&&r.length){var u=i[a];i[a]=Array.prototype.slice.call(r),this.parseNativeID3Cues(r,u)}else delete i[a];if(n&&n.length){var c=s[a],o=s[a]=Array.prototype.slice.call(n);this.triggerActiveCues(o,c)}else delete s[a]}function m(e,t,n){if(o.Browser.ie){var r=n;(e||"metadata"===t.kind)&&(r=new window.TextTrackCue(n.startTime,n.endTime,n.text),n.value&&(r.value=n.value)),function(e,t){var n=[],r=e.mode;e.mode="hidden";for(var a=e.cues,i=a.length-1;i>=0&&a[i].startTime>t.startTime;i--)n.unshift(a[i]),e.removeCue(a[i]);try{e.addCue(t),n.forEach((function(t){return e.addCue(t)}))}catch(e){console.error(e)}e.mode=r}(t,r)}else try{t.addCue(n)}catch(e){console.error(e)}}function k(e,t,n){t&&t.length&&Object(l.i)(t,(function(t){var r=t._id||"";if(n&&(t._id=void 0),!o.Browser.ie&&!o.Browser.safari||!e||!/^(native|subtitle|cc)/.test(r)){o.Browser.ie&&"disabled"===t.mode||(t.mode="disabled",t.mode="hidden");for(var a=t.cues.length;a--;)t.removeCue(t.cues[a]);t.embedded||(t.mode="disabled"),t.inuse=!1}}))}function b(e){return"captions"===e||"subtitles"===e}function p(e){return/^native(?:captions|subtitles)/.test(e)}function y(e){var t=c(e);return{metadataType:"id3",metadataTime:e[0].startTime,metadata:t}}function _(e,t){return e.startTime===t.startTime&&e.endTime===t.endTime&&e.text===t.text&&e.data===t.data&&JSON.stringify(e.value)===JSON.stringify(t.value)}t.a=h}}]);