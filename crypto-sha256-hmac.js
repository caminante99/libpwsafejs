/*
 * Crypto-JS v2.5.1
 * http://code.google.com/p/crypto-js/
 * (c) 2009-2011 by Jeff Mott. All rights reserved.
 * http://code.google.com/p/crypto-js/wiki/License
 */
(typeof Crypto=="undefined"||!Crypto.util)&&function(){var e=Crypto={},l=e.util={rotl:function(a,b){return a<<b|a>>>32-b},rotr:function(a,b){return a<<32-b|a>>>b},endian:function(a){if(a.constructor==Number)return l.rotl(a,8)&16711935|l.rotl(a,24)&4278255360;for(var b=0;b<a.length;b++)a[b]=l.endian(a[b]);return a},randomBytes:function(a){for(var b=[];a>0;a--)b.push(Math.floor(Math.random()*256));return b},bytesToWords:function(a){for(var b=[],c=0,f=0;c<a.length;c++,f+=8)b[f>>>5]|=a[c]<<24-
f%32;return b},wordsToBytes:function(a){for(var b=[],c=0;c<a.length*32;c+=8)b.push(a[c>>>5]>>>24-c%32&255);return b},bytesToHex:function(a){for(var b=[],c=0;c<a.length;c++)b.push((a[c]>>>4).toString(16)),b.push((a[c]&15).toString(16));return b.join("")},hexToBytes:function(a){for(var b=[],c=0;c<a.length;c+=2)b.push(parseInt(a.substr(c,2),16));return b},bytesToBase64:function(a){if(typeof btoa=="function")return btoa(g.bytesToString(a));for(var b=[],c=0;c<a.length;c+=3)for(var f=a[c]<<16|a[c+1]<<8|
a[c+2],d=0;d<4;d++)c*8+d*6<=a.length*8?b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(f>>>6*(3-d)&63)):b.push("=");return b.join("")},base64ToBytes:function(a){if(typeof atob=="function")return g.stringToBytes(atob(a));for(var a=a.replace(/[^A-Z0-9+\/]/ig,""),b=[],c=0,f=0;c<a.length;f=++c%4)f!=0&&b.push(("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(a.charAt(c-1))&Math.pow(2,-2*f+8)-1)<<f*2|"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(a.charAt(c))>>>
6-f*2);return b}},e=e.charenc={};e.UTF8={stringToBytes:function(a){return g.stringToBytes(unescape(encodeURIComponent(a)))},bytesToString:function(a){return decodeURIComponent(escape(g.bytesToString(a)))}};var g=e.Binary={stringToBytes:function(a){for(var b=[],c=0;c<a.length;c++)b.push(a.charCodeAt(c)&255);return b},bytesToString:function(a){for(var b=[],c=0;c<a.length;c++)b.push(String.fromCharCode(a[c]));return b.join("")}}}();
(function(){var e=Crypto,l=e.util,g=e.charenc,a=g.UTF8,b=g.Binary,c=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,
2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],f=e.SHA256=function(a,c){var e=c&&c.callback,h=function(a){a=l.wordsToBytes(a);a=c&&c.asBytes?a:c&&c.asString?b.bytesToString(a):l.bytesToHex(a);if(e)e(a);else return a};if(e)f._sha256(a,h);else return h(f._sha256(a))};f._sha256=function(b,f){b.constructor==
String&&(b=a.stringToBytes(b));var e=l.bytesToWords(b),h=b.length*8,g=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],k=[],i,m,n,q,j,o,p,r,t,v;e[h>>5]|=128<<24-h%32;e[(h+64>>9<<4)+15]=h;var u=function(a,b){for(;a<e.length;a+=16){i=b[0];m=b[1];n=b[2];q=b[3];j=b[4];o=b[5];p=b[6];r=b[7];for(var d=0;d<64;d++){if(d<16)k[d]=e[d+a];else{var g=k[d-15],h=k[d-2];k[d]=((g<<25|g>>>7)^(g<<14|g>>>18)^g>>>3)+(k[d-7]>>>0)+((h<<15|h>>>17)^(h<<13|h>>>19)^h>>>10)+(k[d-16]>>>
0)}g=i&m^i&n^m&n;h=(i<<30|i>>>2)^(i<<19|i>>>13)^(i<<10|i>>>22);t=(r>>>0)+((j<<26|j>>>6)^(j<<21|j>>>11)^(j<<7|j>>>25))+(j&o^~j&p)+c[d]+(k[d]>>>0);v=h+g;r=p;p=o;o=j;j=q+t;q=n;n=m;m=i;i=t+v}b[0]+=i;b[1]+=m;b[2]+=n;b[3]+=q;b[4]+=j;b[5]+=o;b[6]+=p;b[7]+=r;if(f&&a&&a%1600===0){setTimeout(function(){u(a+16,b)},1);return}}if(f)f(b);else return b};if(f)setTimeout(function(){u(0,g)},0);else return u(0,g)};f._blocksize=16;f._digestsize=32})();
(function(){var e=Crypto,l=e.util,g=e.charenc,a=g.UTF8,b=g.Binary;e.HMAC=function(c,f,d,e){f.constructor==String&&(f=a.stringToBytes(f));d.constructor==String&&(d=a.stringToBytes(d));d.length>c._blocksize*4&&(d=c(d,{asBytes:!0}));for(var g=d.slice(0),d=d.slice(0),h=0;h<c._blocksize*4;h++)g[h]^=92,d[h]^=54;var s=e?e.callback:void 0,k=function(a){a=e&&e.asBytes?a:e&&e.asString?b.bytesToString(a):l.bytesToHex(a);if(s)s(a);else return a};if(s)c(d.concat(f),{asBytes:!0,callback:function(a){c(g.concat(a),
{asBytes:!0,callback:k})}});else return k(c(g.concat(c(d.concat(f),{asBytes:!0})),{asBytes:!0}))}})();
