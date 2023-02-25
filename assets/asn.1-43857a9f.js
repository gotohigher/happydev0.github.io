import{A as h}from"./index.c97f8d86.entry.js";function v(S,f){for(var I=0;I<f.length;I++){const o=f[I];if(typeof o!="string"&&!Array.isArray(o)){for(const E in o)if(E!=="default"&&!(E in S)){const i=Object.getOwnPropertyDescriptor(o,E);i&&Object.defineProperty(S,E,i.get?i:{enumerable:!0,get:()=>o[E]})}}}return Object.freeze(Object.defineProperty(S,Symbol.toStringTag,{value:"Module"}))}var N={};(function(S,f){(function(I){I(h())})(function(I){I.defineMode("asn.1",function(E,i){var a=E.indentUnit,l=i.keywords||{},m=i.cmipVerbs||{},y=i.compareTypes||{},C=i.status||{},R=i.tags||{},g=i.storage||{},D=i.modifier||{},b=i.accessTypes||{},L=i.multiLineStrings,P=i.indentStatements!==!1,A=/[\|\^]/,u;function M(e,n){var t=e.next();if(t=='"'||t=="'")return n.tokenize=U(t),n.tokenize(e,n);if(/[\[\]\(\){}:=,;]/.test(t))return u=t,"punctuation";if(t=="-"&&e.eat("-"))return e.skipToEnd(),"comment";if(/\d/.test(t))return e.eatWhile(/[\w\.]/),"number";if(A.test(t))return e.eatWhile(A),"operator";e.eatWhile(/[\w\-]/);var r=e.current();return l.propertyIsEnumerable(r)?"keyword":m.propertyIsEnumerable(r)?"variable cmipVerbs":y.propertyIsEnumerable(r)?"atom compareTypes":C.propertyIsEnumerable(r)?"comment status":R.propertyIsEnumerable(r)?"variable-3 tags":g.propertyIsEnumerable(r)?"builtin storage":D.propertyIsEnumerable(r)?"string-2 modifier":b.propertyIsEnumerable(r)?"atom accessTypes":"variable"}function U(e){return function(n,t){for(var r=!1,c,O=!1;(c=n.next())!=null;){if(c==e&&!r){var T=n.peek();T&&(T=T.toLowerCase(),(T=="b"||T=="h"||T=="o")&&n.next()),O=!0;break}r=!r&&c=="\\"}return(O||!(r||L))&&(t.tokenize=null),"string"}}function d(e,n,t,r,c){this.indented=e,this.column=n,this.type=t,this.align=r,this.prev=c}function p(e,n,t){var r=e.indented;return e.context&&e.context.type=="statement"&&(r=e.context.indented),e.context=new d(r,n,t,null,e.context)}function s(e){var n=e.context.type;return(n==")"||n=="]"||n=="}")&&(e.indented=e.context.indented),e.context=e.context.prev}return{startState:function(e){return{tokenize:null,context:new d((e||0)-a,0,"top",!1),indented:0,startOfLine:!0}},token:function(e,n){var t=n.context;if(e.sol()&&(t.align==null&&(t.align=!1),n.indented=e.indentation(),n.startOfLine=!0),e.eatSpace())return null;u=null;var r=(n.tokenize||M)(e,n);if(r=="comment")return r;if(t.align==null&&(t.align=!0),(u==";"||u==":"||u==",")&&t.type=="statement")s(n);else if(u=="{")p(n,e.column(),"}");else if(u=="[")p(n,e.column(),"]");else if(u=="(")p(n,e.column(),")");else if(u=="}"){for(;t.type=="statement";)t=s(n);for(t.type=="}"&&(t=s(n));t.type=="statement";)t=s(n)}else u==t.type?s(n):P&&((t.type=="}"||t.type=="top")&&u!=";"||t.type=="statement"&&u=="newstatement")&&p(n,e.column(),"statement");return n.startOfLine=!1,r},electricChars:"{}",lineComment:"--",fold:"brace"}});function o(E){for(var i={},a=E.split(" "),l=0;l<a.length;++l)i[a[l]]=!0;return i}I.defineMIME("text/x-ttcn-asn",{name:"asn.1",keywords:o("DEFINITIONS OBJECTS IF DERIVED INFORMATION ACTION REPLY ANY NAMED CHARACTERIZED BEHAVIOUR REGISTERED WITH AS IDENTIFIED CONSTRAINED BY PRESENT BEGIN IMPORTS FROM UNITS SYNTAX MIN-ACCESS MAX-ACCESS MINACCESS MAXACCESS REVISION STATUS DESCRIPTION SEQUENCE SET COMPONENTS OF CHOICE DistinguishedName ENUMERATED SIZE MODULE END INDEX AUGMENTS EXTENSIBILITY IMPLIED EXPORTS"),cmipVerbs:o("ACTIONS ADD GET NOTIFICATIONS REPLACE REMOVE"),compareTypes:o("OPTIONAL DEFAULT MANAGED MODULE-TYPE MODULE_IDENTITY MODULE-COMPLIANCE OBJECT-TYPE OBJECT-IDENTITY OBJECT-COMPLIANCE MODE CONFIRMED CONDITIONAL SUBORDINATE SUPERIOR CLASS TRUE FALSE NULL TEXTUAL-CONVENTION"),status:o("current deprecated mandatory obsolete"),tags:o("APPLICATION AUTOMATIC EXPLICIT IMPLICIT PRIVATE TAGS UNIVERSAL"),storage:o("BOOLEAN INTEGER OBJECT IDENTIFIER BIT OCTET STRING UTCTime InterfaceIndex IANAifType CMIP-Attribute REAL PACKAGE PACKAGES IpAddress PhysAddress NetworkAddress BITS BMPString TimeStamp TimeTicks TruthValue RowStatus DisplayString GeneralString GraphicString IA5String NumericString PrintableString SnmpAdminString TeletexString UTF8String VideotexString VisibleString StringStore ISO646String T61String UniversalString Unsigned32 Integer32 Gauge Gauge32 Counter Counter32 Counter64"),modifier:o("ATTRIBUTE ATTRIBUTES MANDATORY-GROUP MANDATORY-GROUPS GROUP GROUPS ELEMENTS EQUALITY ORDERING SUBSTRINGS DEFINED"),accessTypes:o("not-accessible accessible-for-notify read-only read-create read-write"),multiLineStrings:!0})})})();const G=v({__proto__:null,default:N},[N]);export{G as a};