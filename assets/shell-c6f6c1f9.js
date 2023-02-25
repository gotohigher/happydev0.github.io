import{A as S}from"./index.c97f8d86.entry.js";function E(k,d){for(var i=0;i<d.length;i++){const f=d[i];if(typeof f!="string"&&!Array.isArray(f)){for(const l in f)if(l!=="default"&&!(l in k)){const s=Object.getOwnPropertyDescriptor(f,l);s&&Object.defineProperty(k,l,s.get?s:{enumerable:!0,get:()=>f[l]})}}}return Object.freeze(Object.defineProperty(k,Symbol.toStringTag,{value:"Module"}))}var w={};(function(k,d){(function(i){i(S())})(function(i){i.defineMode("shell",function(){var f={};function l(e,n){for(var r=0;r<n.length;r++)f[n[r]]=e}var s=["true","false"],a=["if","then","do","else","elif","while","until","for","in","esac","fi","fin","fil","done","exit","set","unset","export","function"],g=["ab","awk","bash","beep","cat","cc","cd","chown","chmod","chroot","clear","cp","curl","cut","diff","echo","find","gawk","gcc","get","git","grep","hg","kill","killall","ln","ls","make","mkdir","openssl","mv","nc","nl","node","npm","ping","ps","restart","rm","rmdir","sed","service","sh","shopt","shred","source","sort","sleep","ssh","start","stop","su","sudo","svn","tee","telnet","top","touch","vi","vim","wall","wc","wget","who","write","yes","zsh"];i.registerHelper("hintWords","shell",s.concat(a,g)),l("atom",s),l("keyword",a),l("builtin",g);function b(e,n){if(e.eatSpace())return null;var r=e.sol(),t=e.next();if(t==="\\")return e.next(),null;if(t==="'"||t==='"'||t==="`")return n.tokens.unshift(p(t,t==="`"?"quote":"string")),h(e,n);if(t==="#")return r&&e.eat("!")?(e.skipToEnd(),"meta"):(e.skipToEnd(),"comment");if(t==="$")return n.tokens.unshift(v),h(e,n);if(t==="+"||t==="=")return"operator";if(t==="-")return e.eat("-"),e.eatWhile(/\w/),"attribute";if(t=="<"){if(e.match("<<"))return"operator";var u=e.match(/^<-?\s*['"]?([^'"]*)['"]?/);if(u)return n.tokens.unshift(y(u[1])),"string-2"}if(/\d/.test(t)&&(e.eatWhile(/\d/),e.eol()||!/\w/.test(e.peek())))return"number";e.eatWhile(/[\w-]/);var o=e.current();return e.peek()==="="&&/\w+/.test(o)?"def":f.hasOwnProperty(o)?f[o]:null}function p(e,n){var r=e=="("?")":e=="{"?"}":e;return function(t,u){for(var o,c=!1;(o=t.next())!=null;){if(o===r&&!c){u.tokens.shift();break}else if(o==="$"&&!c&&e!=="'"&&t.peek()!=r){c=!0,t.backUp(1),u.tokens.unshift(v);break}else{if(!c&&e!==r&&o===e)return u.tokens.unshift(p(e,n)),h(t,u);if(!c&&/['"]/.test(o)&&!/['"]/.test(e)){u.tokens.unshift(x(o,"string")),t.backUp(1);break}}c=!c&&o==="\\"}return n}}function x(e,n){return function(r,t){return t.tokens[0]=p(e,n),r.next(),h(r,t)}}var v=function(e,n){n.tokens.length>1&&e.eat("$");var r=e.next();return/['"({]/.test(r)?(n.tokens[0]=p(r,r=="("?"quote":r=="{"?"def":"string"),h(e,n)):(/\d/.test(r)||e.eatWhile(/\w/),n.tokens.shift(),"def")};function y(e){return function(n,r){return n.sol()&&n.string==e&&r.tokens.shift(),n.skipToEnd(),"string-2"}}function h(e,n){return(n.tokens[0]||b)(e,n)}return{startState:function(){return{tokens:[]}},token:function(e,n){return h(e,n)},closeBrackets:"()[]{}''\"\"``",lineComment:"#",fold:"brace"}}),i.defineMIME("text/x-sh","shell"),i.defineMIME("application/x-sh","shell")})})();const m=E({__proto__:null,default:w},[w]);export{m as s};