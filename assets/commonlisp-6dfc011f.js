import{A as y}from"./index.c97f8d86.entry.js";function k(f,d){for(var i=0;i<d.length;i++){const l=d[i];if(typeof l!="string"&&!Array.isArray(l)){for(const c in l)if(c!=="default"&&!(c in f)){const u=Object.getOwnPropertyDescriptor(l,c);u&&Object.defineProperty(f,c,u.get?u:{enumerable:!0,get:()=>l[c]})}}}return Object.freeze(Object.defineProperty(f,Symbol.toStringTag,{value:"Module"}))}var x={};(function(f,d){(function(i){i(y())})(function(i){i.defineMode("commonlisp",function(l){var c=/^(block|let*|return-from|catch|load-time-value|setq|eval-when|locally|symbol-macrolet|flet|macrolet|tagbody|function|multiple-value-call|the|go|multiple-value-prog1|throw|if|progn|unwind-protect|labels|progv|let|quote)$/,u=/^with|^def|^do|^prog|case$|^cond$|bind$|when$|unless$/,a=/^(?:[+\-]?(?:\d+|\d*\.\d+)(?:[efd][+\-]?\d+)?|[+\-]?\d+(?:\/[+\-]?\d+)?|#b[+\-]?[01]+|#o[+\-]?[0-7]+|#x[+\-]?[\da-f]+)/,b=/[^\s'`,@()\[\]";]/,o;function p(e){for(var n;n=e.next();)if(n=="\\")e.next();else if(!b.test(n)){e.backUp(1);break}return e.current()}function s(e,n){if(e.eatSpace())return o="ws",null;if(e.match(a))return"number";var t=e.next();if(t=="\\"&&(t=e.next()),t=='"')return(n.tokenize=v)(e,n);if(t=="(")return o="open","bracket";if(t==")"||t=="]")return o="close","bracket";if(t==";")return e.skipToEnd(),o="ws","comment";if(/['`,@]/.test(t))return null;if(t=="|")return e.skipTo("|")?(e.next(),"symbol"):(e.skipToEnd(),"error");if(t=="#"){var t=e.next();return t=="("?(o="open","bracket"):/[+\-=\.']/.test(t)||/\d/.test(t)&&e.match(/^\d*#/)?null:t=="|"?(n.tokenize=m)(e,n):t==":"?(p(e),"meta"):t=="\\"?(e.next(),p(e),"string-2"):"error"}else{var r=p(e);return r=="."?null:(o="symbol",r=="nil"||r=="t"||r.charAt(0)==":"?"atom":n.lastType=="open"&&(c.test(r)||u.test(r))?"keyword":r.charAt(0)=="&"?"variable-2":"variable")}}function v(e,n){for(var t=!1,r;r=e.next();){if(r=='"'&&!t){n.tokenize=s;break}t=!t&&r=="\\"}return"string"}function m(e,n){for(var t,r;t=e.next();){if(t=="#"&&r=="|"){n.tokenize=s;break}r=t}return o="ws","comment"}return{startState:function(){return{ctx:{prev:null,start:0,indentTo:0},lastType:null,tokenize:s}},token:function(e,n){e.sol()&&typeof n.ctx.indentTo!="number"&&(n.ctx.indentTo=n.ctx.start+1),o=null;var t=n.tokenize(e,n);return o!="ws"&&(n.ctx.indentTo==null?o=="symbol"&&u.test(e.current())?n.ctx.indentTo=n.ctx.start+l.indentUnit:n.ctx.indentTo="next":n.ctx.indentTo=="next"&&(n.ctx.indentTo=e.column()),n.lastType=o),o=="open"?n.ctx={prev:n.ctx,start:e.column(),indentTo:null}:o=="close"&&(n.ctx=n.ctx.prev||n.ctx),t},indent:function(e,n){var t=e.ctx.indentTo;return typeof t=="number"?t:e.ctx.start+1},closeBrackets:{pairs:'()[]{}""'},lineComment:";;",fold:"brace-paren",blockCommentStart:"#|",blockCommentEnd:"|#"}}),i.defineMIME("text/x-common-lisp","commonlisp")})})();const h=k({__proto__:null,default:x},[x]);export{h as c};