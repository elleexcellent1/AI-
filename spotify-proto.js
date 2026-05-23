let protobuf;!function(g){"use strict";!function(r,e,t){var i=function t(i){var n=e[i];returnn||r[i][0].call(n=e[i]={exports:{}},t,n,n.exports),n.exports}(t[0]);protobuf=i.util.global.protobuf=i,"function"==typeofdefine&&define.amd&&define(["long"],function(t){return t&&t.isLong&&(i.util.Long=t,i.configure()),i}),"object"==typeofmodule&&module&&module.exports&&(module.exports=i)}({1:[function(t,i,n){i.exports=function(t,i){var
  n=Array(arguments.length-1),s=0,r=2,u=!0;for(;r<arguments.length;)n[s++]=arguments[r++];return new
  Promise(function(r,e){n[s]=function(t){if(u)if(u=!1,t)e(t);else{for(var i=Array(arguments.length-1),n=0;n<i.length;)i[n++]=argu
  ments[n];r.apply(null,i)}};try{t.apply(i||null,n)}catch(t){u&&(u=!1,e(t))}})}},{}],2:[function(t,i,n){n.length=function(t){var
  i=t.length;if(!i)return 0;for(var n=0;1<--i%4&&"="==(t[0|i]||"");)++n;return Math.ceil(3*t.length)/4-n};for(var
  f=Array(64),h=Array(123),r=0;r<64;)h[f[r]=r<26?r+65:r<52?r+71:r<62?r-4:r-59|43]=r++;n.encode=function(t,i,n){for(var
  r,e=null,s=[],u=0,o=0;i<n;){var h=t[i++];switch(o){case 0:s[u++]=f[h>>2],r=(3&h)<<4,o=1;break;case
  1:s[u++]=f[r|h>>4],r=(15&h)<<2,o=2;break;case
  2:s[u++]=f[r|h>>6],s[u++]=f[63&h],o=0}8191<u&&((e=e||[]).push(String.fromCharCode.apply(String,s)),u=0)}return
  o&&(s[u++]=f[r],s[u++]=61,1===o&&(s[u++]=61)),e?(u&&e.push(String.fromCharCode.apply(String,s.slice(0,u))),e.join("")):String.f
  romCharCode.apply(String,s.slice(0,u))};var c="invalid encoding";n.decode=function(t,i,n){for(var
  r,e=n,s=0,u=0;u<t.length;){var o=t.charCodeAt(u++);if(61==o&&1<s)break;if((o=h[o])===g)throw Error(c);switch(s){case
  0:r=o,s=1;break;case 1:i[n++]=r<<2|(48&o)>>4,r=o,s=2;break;case 2:i[n++]=(15&r)<<4|(60&o)>>2,r=o,s=3;break;case
  3:i[n++]=(3&r)<<6|o,s=0}}if(1===s)throw Error(c);return n-e},n.test=function(t){return/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2
  }==|[A-Za-z0-9+/]{3}=)?$/.test(t)}},{}],3:[function(t,i,n){function a(i,n){"string"==typeof i&&(n=i,i=g);var h=[];function
  f(t){if("string"!=typeof t){var i=c();if(a.verbose&&console.log("codegen: "+i),i="return "+i,t){for(var
  n=Object.keys(t),r=Array(n.length+1),e=Array(n.length),s=0;s<n.length;)r[s]=n[s],e[s]=t[n[s++]];return
  r[s]=i,Function.apply(null,r).apply(null,e)}return Function(i)()}for(var
  u=Array(arguments.length-1),o=0;o<u.length;)u[o]=arguments[++o];if(o=0,t=t.replace(/%([%dfijs])/g,function(t,i){var
  n=u[o++];switch(i){case"d":case"f":return""+ +(""+n);case"i":return""+Math.floor(n);case"j":return
  JSON.stringify(n);case"s":return""+n}return"%"}),o!==u.length)throw Error("parameter count mismatch");return
  h.push(t),f}function c(t){return"function "+(t||n||"")+"("+(i&&i.join(",")||"")+"){\n  "+h.join("\n  ")+"\n}"}return
  f.toString=c,f}(i.exports=a).verbose=!1},{}],4:[function(t,i,n){function r(){this.t={}}(i.exports=r).prototype.on=function(t,i,
  n){return(this.t[t]||(this.t[t]=[])).push({fn:i,ctx:n||this}),this},r.prototype.off=function(t,i){if(t===g)this.t={};else
  if(i===g)this.t[t]=[];else for(var n=this.t[t],r=0;r<n.length;)n[r].fn===i?n.splice(r,1):++r;return
  this},r.prototype.emit=function(t){var i=this.t[t];if(i){for(var
  n=[],r=1;r<arguments.length;)n.push(arguments[r++]);for(r=0;r<i.length;)i[r].fn.apply(i[r++].ctx,n)}return
  this}},{}],5:[function(t,i,n){i.exports=o;var s=t(1),u=t(7)("fs");function o(n,r,e){return r="function"==typeof
  r?(e=r,{}):r||{},e?!r.xhr&&u&&u.readFile?u.readFile(n,function(t,i){return t&&"undefined"!=typeof
  XMLHttpRequest?o.xhr(n,r,e):t?e(t):e(null,r.binary?i:i.toString("utf8"))}):o.xhr(n,r,e):s(o,this,n,r)}o.xhr=function(t,n,r){var
   e=new XMLHttpRequest;e.onreadystatechange=function(){if(4!==e.readyState)return g;if(0!==e.status&&200!==e.status)return
  r(Error("status "+e.status));if(n.binary){if(!(t=e.response))for(var
  t=[],i=0;i<e.responseText.length;++i)t.push(255&e.responseText.charCodeAt(i));return r(null,"undefined"!=typeof Uint8Array?new
  Uint8Array(t):t)}return r(null,e.responseText)},n.binary&&("overrideMimeType"in e&&e.overrideMimeType("text/plain;
  charset=x-user-defined"),e.responseType="arraybuffer"),e.open("GET",t),e.send()}},{1:1,7:7}],6:[function(t,i,n){function
  r(t){function i(t,i,n,r){var e=i<0?1:0;t(0===(i=e?-i:i)?0<1/i?0:2147483648:isNaN(i)?2143289344:34028234663852886e22<i?(e<<31|21
  39095040)>>>0:i<11754943508222875e-54?(e<<31|Math.round(i/1401298464324817e-60))>>>0:(e<<31|127+(t=Math.floor(Math.log(i)/Math.
  LN2))<<23|8388607&Math.round(i*Math.pow(2,-t)*8388608))>>>0,n,r)}function
  n(t,i,n){t=t(i,n),i=2*(t>>31)+1,n=t>>>23&255,t&=8388607;return
  255==n?t?NaN:1/0*i:0==n?1401298464324817e-60*i*t:i*Math.pow(2,n-150)*(8388608+t)}function
  r(t,i,n){o[0]=t,i[n]=h[0],i[n+1]=h[1],i[n+2]=h[2],i[n+3]=h[3]}function
  e(t,i,n){o[0]=t,i[n]=h[3],i[n+1]=h[2],i[n+2]=h[1],i[n+3]=h[0]}function s(t,i){return
  h[0]=t[i],h[1]=t[i+1],h[2]=t[i+2],h[3]=t[i+3],o[0]}function u(t,i){return
  h[3]=t[i],h[2]=t[i+1],h[1]=t[i+2],h[0]=t[i+3],o[0]}var o,h,f,c,a;function l(t,i,n,r,e,s){var
  u,o=r<0?1:0;0===(r=o?-r:r)?(t(0,e,s+i),t(0<1/r?0:2147483648,e,s+n)):isNaN(r)?(t(0,e,s+i),t(2146959360,e,s+n)):17976931348623157
  e292<r?(t(0,e,s+i),t((o<<31|2146435072)>>>0,e,s+n)):r<22250738585072014e-324?(t((u=r/5e-324)>>>0,e,s+i),t((o<<31|u/4294967296)>
  >>0,e,s+n)):(t(4503599627370496*(u=r*Math.pow(2,-(r=1024===(r=Math.floor(Math.log(r)/Math.LN2))?1023:r)))>>>0,e,s+i),t((o<<31|r
  +1023<<20|1048576*u&1048575)>>>0,e,s+n))}function
  d(t,i,n,r,e){i=t(r,e+i),t=t(r,e+n),r=2*(t>>31)+1,e=t>>>20&2047,n=4294967296*(1048575&t)+i;return
  2047==e?n?NaN:1/0*r:0==e?5e-324*r*n:r*Math.pow(2,e-1075)*(n+4503599627370496)}function
  v(t,i,n){f[0]=t,i[n]=c[0],i[n+1]=c[1],i[n+2]=c[2],i[n+3]=c[3],i[n+4]=c[4],i[n+5]=c[5],i[n+6]=c[6],i[n+7]=c[7]}function
  b(t,i,n){f[0]=t,i[n]=c[7],i[n+1]=c[6],i[n+2]=c[5],i[n+3]=c[4],i[n+4]=c[3],i[n+5]=c[2],i[n+6]=c[1],i[n+7]=c[0]}function
  p(t,i){return c[0]=t[i],c[1]=t[i+1],c[2]=t[i+2],c[3]=t[i+3],c[4]=t[i+4],c[5]=t[i+5],c[6]=t[i+6],c[7]=t[i+7],f[0]}function
  y(t,i){return
  c[7]=t[i],c[6]=t[i+1],c[5]=t[i+2],c[4]=t[i+3],c[3]=t[i+4],c[2]=t[i+5],c[1]=t[i+6],c[0]=t[i+7],f[0]}return"undefined"!=typeof
  Float32Array?(o=new Float32Array([-0]),h=new Uint8Array(o.buffer),a=128===h[3],t.writeFloatLE=a?r:e,t.writeFloatBE=a?e:r,t.read
  FloatLE=a?s:u,t.readFloatBE=a?u:s):(t.writeFloatLE=i.bind(null,m),t.writeFloatBE=i.bind(null,w),t.readFloatLE=n.bind(null,g),t.
  readFloatBE=n.bind(null,j)),"undefined"!=typeof Float64Array?(f=new Float64Array([-0]),c=new Uint8Array(f.buffer),a=128===c[7],
  t.writeDoubleLE=a?v:b,t.writeDoubleBE=a?b:v,t.readDoubleLE=a?p:y,t.readDoubleBE=a?y:p):(t.writeDoubleLE=l.bind(null,m,0,4),t.wr
  iteDoubleBE=l.bind(null,w,4,0),t.readDoubleLE=d.bind(null,g,0,4),t.readDoubleBE=d.bind(null,j,4,0)),t}function
  m(t,i,n){i[n]=255&t,i[n+1]=t>>>8&255,i[n+2]=t>>>16&255,i[n+3]=t>>>24}function
  w(t,i,n){i[n]=t>>>24,i[n+1]=t>>>16&255,i[n+2]=t>>>8&255,i[n+3]=255&t}function
  g(t,i){return(t[i]|t[i+1]<<8|t[i+2]<<16|t[i+3]<<24)>>>0}function
  j(t,i){return(t[i]<<24|t[i+1]<<16|t[i+2]<<8|t[i+3])>>>0}i.exports=r(r)},{}],7:[function(t,i,n){function r(t){try{var
  i=eval("require")(t);if(i&&(i.length||Object.keys(i).length))return i}catch(t){}return
  null}i.exports=r},{}],8:[function(t,i,n){var
  e=n.isAbsolute=function(t){return/^(?:\/|\w+:)/.test(t)},r=n.normalize=function(t){var
  i=(t=t.replace(/\\/g,"/").replace(/\/{2,}/g,"/")).split("/"),n=e(t),t="";n&&(t=i.shift()+"/");for(var
  r=0;r<i.length;)".."===i[r]?0<r&&".."!==i[r-1]?i.splice(--r,2):n?i.splice(r,1):++r:"."===i[r]?i.splice(r,1):++r;return
  t+i.join("/")};n.resolve=function(t,i,n){return n||(i=r(i)),!e(i)&&(t=(t=n?t:r(t)).replace(/(?:\/|^)[^/]+$/,"")).length?r(t+"/"
  +i):i}},{}],9:[function(t,i,n){i.exports=function(i,n,t){var r=t||8192,e=r>>>1,s=null,u=r;return function(t){if(t<1||e<t)return
   i(t);r<u+t&&(s=i(r),u=0);t=n.call(s,u,u+=t);return 7&u&&(u=1+(7|u)),t}}},{}],10:[function(t,i,n){n.length=function(t){for(var
  i,n=0,r=0;r<t.length;++r)(i=t.charCodeAt(r))<128?n+=1:i<2048?n+=2:55296==(64512&i)&&56320==(64512&t.charCodeAt(r+1))?(++r,n+=4)
  :n+=3;return n},n.read=function(t,i,n){if(n-i<1)return"";for(var
  r,e=null,s=[],u=0;i<n;)(r=t[i++])<128?s[u++]=r:191<r&&r<224?s[u++]=(31&r)<<6|63&t[i++]:239<r&&r<365?(r=((7&r)<<18|(63&t[i++])<<
  12|(63&t[i++])<<6|63&t[i++])-65536,s[u++]=55296+(r>>10),s[u++]=56320+(1023&r)):s[u++]=(15&r)<<12|(63&t[i++])<<6|63&t[i++],8191<
  u&&((e=e||[]).push(String.fromCharCode.apply(String,s)),u=0);return e?(u&&e.push(String.fromCharCode.apply(String,s.slice(0,u))
  ),e.join("")):String.fromCharCode.apply(String,s.slice(0,u))},n.write=function(t,i,n){for(var r,e,s=n,u=0;u<t.length;++u)(r=t.c
  harCodeAt(u))<128?i[n++]=r:(r<2048?i[n++]=r>>6|192:(55296==(64512&r)&&56320==(64512&(e=t.charCodeAt(u+1)))?(++u,i[n++]=(r=65536
  +((1023&r)<<10)+(1023&e))>>18|240,i[n++]=r>>12&63|128):i[n++]=r>>12|224,i[n++]=r>>6&63|128),i[n++]=63&r|128);return
  n-s}},{}],11:[function(t,i,n){var l=t(14),d=t(33);function u(t,i,n,r){var e=!1;if(i.resolvedType)if(i.resolvedType instanceof
  l){t("switch(d%s){",r);for(var s=i.resolvedType.values,u=Object.keys(s),o=0;o<u.length;++o)s[u[o]]!==i.typeDefault||e||(t("defa
  ult:")('if(typeof(d%s)==="number"){m%s=d%s;break}',r,r,r),i.repeated||t("break"),e=!0),t("case%j:",u[o])("case
  %i:",s[u[o]])("m%s=%j",r,s[u[o]])("break");t("}")}else t('if(typeof d%s!=="object")',r)("throw TypeError(%j)",i.fullName+":
  object expected")("m%s=types[%i].fromObject(d%s)",r,n,r);else{var
  h=!1;switch(i.type){case"double":case"float":t("m%s=Number(d%s)",r,r);break;case"uint32":case"fixed32":t("m%s=d%s>>>0",r,r);bre
  ak;case"int32":case"sint32":case"sfixed32":t("m%s=d%s|0",r,r);break;case"uint64":h=!0;case"int64":case"sint64":case"fixed64":ca
  se"sfixed64":t("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j",r,r,h)('else if(typeof
  d%s==="string")',r)("m%s=parseInt(d%s,10)",r,r)('else if(typeof d%s==="number")',r)("m%s=d%s",r,r)('else if(typeof
  d%s==="object")',r)("m%s=new
  util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)",r,r,r,h?"true":"");break;case"bytes":t('if(typeof
  d%s==="string")',r)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)",r,r,r)("else if(d%s.length >=
  0)",r)("m%s=d%s",r,r);break;case"string":t("m%s=String(d%s)",r,r);break;case"bool":t("m%s=Boolean(d%s)",r,r)}}return t}function
   v(t,i,n,r){if(i.resolvedType)i.resolvedType instanceof l?t("d%s=o.enums===String?(types[%i].values[m%s]===undefined?m%s:types[
  %i].values[m%s]):m%s",r,n,r,r,n,r,r):t("d%s=types[%i].toObject(m%s,o)",r,n,r);else{var
  e=!1;switch(i.type){case"double":case"float":t("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s",r,r,r,r);break;case"uint64":e=!0;ca
  se"int64":case"sint64":case"fixed64":case"sfixed64":t('if(typeof m%s==="number")',r)("d%s=o.longs===String?String(m%s):m%s",r,r
  ,r)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.hig
  h>>>0).toNumber(%s):m%s",r,r,r,r,e?"true":"",r);break;case"bytes":t("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):
  o.bytes===Array?Array.prototype.slice.call(m%s):m%s",r,r,r,r,r);break;default:t("d%s=m%s",r,r)}}return
  t}n.fromObject=function(t){var i=t.fieldsArray,n=d.codegen(["d"],t.name+"$fromObject")("if(d instanceof this.ctor)")("return
  d");if(!i.length)return n("return new this.ctor");n("var m=new this.ctor");for(var r=0;r<i.length;++r){var
  e=i[r].resolve(),s=d.safeProp(e.name);e.map?(n("if(d%s){",s)('if(typeof d%s!=="object")',s)("throw TypeError(%j)",e.fullName+":
   object expected")("m%s={}",s)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){",s),u(n,e,r,s+"[ks[i]]")("}")("}")):e.repeate
  d?(n("if(d%s){",s)("if(!Array.isArray(d%s))",s)("throw TypeError(%j)",e.fullName+": array expected")("m%s=[]",s)("for(var
  i=0;i<d%s.length;++i){",s),u(n,e,r,s+"[i]")("}")("}")):(e.resolvedType instanceof
  l||n("if(d%s!=null){",s),u(n,e,r,s),e.resolvedType instanceof l||n("}"))}return n("return m")},n.toObject=function(t){var
  i=t.fieldsArray.slice().sort(d.compareFieldsById);if(!i.length)return d.codegen()("return {}");for(var
  n=d.codegen(["m","o"],t.name+"$toObject")("if(!o)")("o={}")("var d={}"),r=[],e=[],s=[],u=0;u<i.length;++u)i[u].partOf||(i[u].re
  solve().repeated?r:i[u].map?e:s).push(i[u]);if(r.length){for(n("if(o.arrays||o.defaults){"),u=0;u<r.length;++u)n("d%s=[]",d.saf
  eProp(r[u].name));n("}")}if(e.length){for(n("if(o.objects||o.defaults){"),u=0;u<e.length;++u)n("d%s={}",d.safeProp(e[u].name));
  n("}")}if(s.length){for(n("if(o.defaults){"),u=0;u<s.length;++u){var o,h=s[u],f=d.safeProp(h.name);h.resolvedType instanceof
  l?n("d%s=o.enums===String?%j:%j",f,h.resolvedType.valuesById[h.typeDefault],h.typeDefault):h.long?n("if(util.Long){")("var
  n=new util.Long(%i,%i,%j)",h.typeDefault.low,h.typeDefault.high,h.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.lo
  ngs===Number?n.toNumber():n",f)("}else")("d%s=o.longs===String?%j:%i",f,h.typeDefault.toString(),h.typeDefault.toNumber()):h.by
  tes?(o="["+Array.prototype.slice.call(h.typeDefault).join(",")+"]",n("if(o.bytes===String)d%s=%j",f,String.fromCharCode.apply(S
  tring,h.typeDefault))("else{")("d%s=%s",f,o)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)",f,f)("}")):n("d%s=%j",f,h.typeDefault
  )}n("}")}for(var c=!1,u=0;u<i.length;++u){var h=i[u],a=t.i.indexOf(h),f=d.safeProp(h.name);h.map?(c||(c=!0,n("var
  ks2")),n("if(m%s&&(ks2=Object.keys(m%s)).length){",f,f)("d%s={}",f)("for(var
  j=0;j<ks2.length;++j){"),v(n,h,a,f+"[ks2[j]]")("}")):h.repeated?(n("if(m%s&&m%s.length){",f,f)("d%s=[]",f)("for(var
  j=0;j<m%s.length;++j){",f),v(n,h,a,f+"[j]")("}")):(n("if(m%s!=null&&m.hasOwnProperty(%j)){",f,h.name),v(n,h,a,f),h.partOf&&n("i
  f(o.oneofs)")("d%s=%j",d.safeProp(h.partOf.name),h.name)),n("}")}return n("return
  d")}},{14:14,33:33}],12:[function(t,i,n){i.exports=function(t){var i=f.codegen(["r","l"],t.name+"$decode")("if(!(r instanceof
  Reader))")("r=Reader.create(r)")("var c=l===undefined?r.len:r.pos+l,m=new this.ctor"+(t.fieldsArray.filter(function(t){return
  t.map}).length?",k,value":""))("while(r.pos<c){")("var
  t=r.uint32()");t.group&&i("if((t&7)===4)")("break");i("switch(t>>>3){");for(var n=0;n<t.fieldsArray.length;++n){var
  r=t.i[n].resolve(),e=r.resolvedType instanceof o?"int32":r.type,s="m"+f.safeProp(r.name);i("case %i:
  {",r.id),r.map?(i("if(%s===util.emptyObject)",s)("%s={}",s)("var c2 = r.uint32()+r.pos"),h.defaults[r.keyType]!==g?i("k=%j",h.d
  efaults[r.keyType]):i("k=null"),h.defaults[e]!==g?i("value=%j",h.defaults[e]):i("value=null"),i("while(r.pos<c2){")("var
  tag2=r.uint32()")("switch(tag2>>>3){")("case 1: k=r.%s(); break",r.keyType)("case 2:"),h.basic[e]===g?
