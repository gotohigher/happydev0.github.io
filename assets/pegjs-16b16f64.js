import{A as g}from"./index.c97f8d86.entry.js";import{a as h}from"./javascript-c7c709c6.js";function d(f,t){for(var i=0;i<t.length;i++){const l=t[i];if(typeof l!="string"&&!Array.isArray(l)){for(const r in l)if(r!=="default"&&!(r in f)){const o=Object.getOwnPropertyDescriptor(l,r);o&&Object.defineProperty(f,r,o.get?o:{enumerable:!0,get:()=>l[r]})}}}return Object.freeze(Object.defineProperty(f,Symbol.toStringTag,{value:"Module"}))}var a={};(function(f,t){(function(i){i(g(),h)})(function(i){i.defineMode("pegjs",function(l){var r=i.getMode(l,"javascript");function o(e){return e.match(/^[a-zA-Z_][a-zA-Z0-9_]*/)}return{startState:function(){return{inString:!1,stringType:null,inComment:!1,inCharacterClass:!1,braced:0,lhs:!0,localState:null}},token:function(e,n){if(!n.inString&&!n.inComment&&(e.peek()=='"'||e.peek()=="'")&&(n.stringType=e.peek(),e.next(),n.inString=!0),!n.inString&&!n.inComment&&e.match("/*")&&(n.inComment=!0),n.inString){for(;n.inString&&!e.eol();)e.peek()===n.stringType?(e.next(),n.inString=!1):e.peek()==="\\"?(e.next(),e.next()):e.match(/^.[^\\\"\']*/);return n.lhs?"property string":"string"}else if(n.inComment){for(;n.inComment&&!e.eol();)e.match("*/")?n.inComment=!1:e.match(/^.[^\*]*/);return"comment"}else if(n.inCharacterClass)for(;n.inCharacterClass&&!e.eol();)e.match(/^[^\]\\]+/)||e.match(/^\\./)||(n.inCharacterClass=!1);else{if(e.peek()==="[")return e.next(),n.inCharacterClass=!0,"bracket";if(e.match("//"))return e.skipToEnd(),"comment";if(n.braced||e.peek()==="{"){n.localState===null&&(n.localState=i.startState(r));var p=r.token(e,n.localState),u=e.current();if(!p)for(var c=0;c<u.length;c++)u[c]==="{"?n.braced++:u[c]==="}"&&n.braced--;return p}else{if(o(e))return e.peek()===":"?"variable":"variable-2";if(["[","]","(",")"].indexOf(e.peek())!=-1)return e.next(),"bracket";e.eatSpace()||e.next()}}return null}}},"javascript")})})();const b=d({__proto__:null,default:a},[a]);export{b as p};