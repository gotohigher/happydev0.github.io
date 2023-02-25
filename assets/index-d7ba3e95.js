import{f as k}from"./use-sync-525ebcb9.js";import{b as C,a as D,c as W,d as B}from"./index-c3455229.js";function O(e,a){for(var t=0;t<a.length;t++){const i=a[t];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in e)){const l=Object.getOwnPropertyDescriptor(i,r);l&&Object.defineProperty(e,r,l.get?l:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var g={},q={get exports(){return g},set exports(e){g=e}},y={},A={get exports(){return y},set exports(e){y=e}};(function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t={lessThanXSeconds:{one:"bir saniyədən az",other:"{{count}} bir saniyədən az"},xSeconds:{one:"1 saniyə",other:"{{count}} saniyə"},halfAMinute:"yarım dəqiqə",lessThanXMinutes:{one:"bir dəqiqədən az",other:"{{count}} bir dəqiqədən az"},xMinutes:{one:"bir dəqiqə",other:"{{count}} dəqiqə"},aboutXHours:{one:"təxminən 1 saat",other:"təxminən {{count}} saat"},xHours:{one:"1 saat",other:"{{count}} saat"},xDays:{one:"1 gün",other:"{{count}} gün"},aboutXWeeks:{one:"təxminən 1 həftə",other:"təxminən {{count}} həftə"},xWeeks:{one:"1 həftə",other:"{{count}} həftə"},aboutXMonths:{one:"təxminən 1 ay",other:"təxminən {{count}} ay"},xMonths:{one:"1 ay",other:"{{count}} ay"},aboutXYears:{one:"təxminən 1 il",other:"təxminən {{count}} il"},xYears:{one:"1 il",other:"{{count}} il"},overXYears:{one:"1 ildən çox",other:"{{count}} ildən çox"},almostXYears:{one:"demək olar ki 1 il",other:"demək olar ki {{count}} il"}},i=function(s,d,u){var n,o=t[s];return typeof o=="string"?n=o:d===1?n=o.one:n=o.other.replace("{{count}}",String(d)),u!=null&&u.addSuffix?u.comparison&&u.comparison>0?n+" sonra":n+" əvvəl":n},r=i;a.default=r,e.exports=a.default})(A,y);var $={},E={get exports(){return $},set exports(e){$=e}};(function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t=i(C);function i(n){return n&&n.__esModule?n:{default:n}}var r={full:"EEEE, do MMMM y 'il'",long:"do MMMM y 'il'",medium:"d MMM y 'il'",short:"dd.MM.yyyy"},l={full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},s={full:"{{date}} {{time}} - 'də'",long:"{{date}} {{time}} - 'də'",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},d={date:(0,t.default)({formats:r,defaultWidth:"full"}),time:(0,t.default)({formats:l,defaultWidth:"full"}),dateTime:(0,t.default)({formats:s,defaultWidth:"full"})},u=d;a.default=u,e.exports=a.default})(E,$);var b={},F={get exports(){return b},set exports(e){b=e}};(function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t={lastWeek:"'sonuncu' eeee p -'də'",yesterday:"'dünən' p -'də'",today:"'bugün' p -'də'",tomorrow:"'sabah' p -'də'",nextWeek:"eeee p -'də'",other:"P"},i=function(s,d,u,n){return t[s]},r=i;a.default=r,e.exports=a.default})(F,b);var p={},S={get exports(){return p},set exports(e){p=e}};(function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t=i(D);function i(c){return c&&c.__esModule?c:{default:c}}var r={narrow:["e.ə","b.e"],abbreviated:["e.ə","b.e"],wide:["eramızdan əvvəl","bizim era"]},l={narrow:["1","2","3","4"],abbreviated:["K1","K2","K3","K4"],wide:["1ci kvartal","2ci kvartal","3cü kvartal","4cü kvartal"]},s={narrow:["Y","F","M","A","M","İ","İ","A","S","O","N","D"],abbreviated:["Yan","Fev","Mar","Apr","May","İyun","İyul","Avq","Sen","Okt","Noy","Dek"],wide:["Yanvar","Fevral","Mart","Aprel","May","İyun","İyul","Avqust","Sentyabr","Oktyabr","Noyabr","Dekabr"]},d={narrow:["B.","B.e","Ç.a","Ç.","C.a","C.","Ş."],short:["B.","B.e","Ç.a","Ç.","C.a","C.","Ş."],abbreviated:["Baz","Baz.e","Çər.a","Çər","Cüm.a","Cüm","Şə"],wide:["Bazar","Bazar ertəsi","Çərşənbə axşamı","Çərşənbə","Cümə axşamı","Cümə","Şənbə"]},u={narrow:{am:"am",pm:"pm",midnight:"gecəyarı",noon:"gün",morning:"səhər",afternoon:"gündüz",evening:"axşam",night:"gecə"},abbreviated:{am:"AM",pm:"PM",midnight:"gecəyarı",noon:"gün",morning:"səhər",afternoon:"gündüz",evening:"axşam",night:"gecə"},wide:{am:"a.m.",pm:"p.m.",midnight:"gecəyarı",noon:"gün",morning:"səhər",afternoon:"gündüz",evening:"axşam",night:"gecə"}},n={narrow:{am:"a",pm:"p",midnight:"gecəyarı",noon:"gün",morning:"səhər",afternoon:"gündüz",evening:"axşam",night:"gecə"},abbreviated:{am:"AM",pm:"PM",midnight:"gecəyarı",noon:"gün",morning:"səhər",afternoon:"gündüz",evening:"axşam",night:"gecə"},wide:{am:"a.m.",pm:"p.m.",midnight:"gecəyarı",noon:"gün",morning:"səhər",afternoon:"gündüz",evening:"axşam",night:"gecə"}},o={1:"-inci",5:"-inci",8:"-inci",70:"-inci",80:"-inci",2:"-nci",7:"-nci",20:"-nci",50:"-nci",3:"-üncü",4:"-üncü",100:"-üncü",6:"-ncı",9:"-uncu",10:"-uncu",30:"-uncu",60:"-ıncı",90:"-ıncı"},M=function(f){if(f===0)return f+"-ıncı";var h=f%10,v=f%100-h,m=f>=100?100:null;return o[h]?o[h]:o[v]?o[v]:m!==null?o[m]:""},P=function(f,h){var v=Number(f),m=M(v);return v+m},_={ordinalNumber:P,era:(0,t.default)({values:r,defaultWidth:"wide"}),quarter:(0,t.default)({values:l,defaultWidth:"wide",argumentCallback:function(f){return f-1}}),month:(0,t.default)({values:s,defaultWidth:"wide"}),day:(0,t.default)({values:d,defaultWidth:"wide"}),dayPeriod:(0,t.default)({values:u,defaultWidth:"wide",formattingValues:n,defaultFormattingWidth:"wide"})},z=_;a.default=z,e.exports=a.default})(S,p);var x={},N={get exports(){return x},set exports(e){x=e}};(function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t=r(W),i=r(B);function r(m){return m&&m.__esModule?m:{default:m}}var l=/^(\d+)(-?(ci|inci|nci|uncu|üncü|ncı))?/i,s=/\d+/i,d={narrow:/^(b|a)$/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)$/i,wide:/^(bizim eradan əvvəl|bizim era)$/i},u={any:[/^b$/i,/^(a|c)$/i]},n={narrow:/^[1234]$/i,abbreviated:/^K[1234]$/i,wide:/^[1234](ci)? kvartal$/i},o={any:[/1/i,/2/i,/3/i,/4/i]},M={narrow:/^[(?-i)yfmaisond]$/i,abbreviated:/^(Yan|Fev|Mar|Apr|May|İyun|İyul|Avq|Sen|Okt|Noy|Dek)$/i,wide:/^(Yanvar|Fevral|Mart|Aprel|May|İyun|İyul|Avgust|Sentyabr|Oktyabr|Noyabr|Dekabr)$/i},P={narrow:[/^[(?-i)y]$/i,/^[(?-i)f]$/i,/^[(?-i)m]$/i,/^[(?-i)a]$/i,/^[(?-i)m]$/i,/^[(?-i)i]$/i,/^[(?-i)i]$/i,/^[(?-i)a]$/i,/^[(?-i)s]$/i,/^[(?-i)o]$/i,/^[(?-i)n]$/i,/^[(?-i)d]$/i],abbreviated:[/^Yan$/i,/^Fev$/i,/^Mar$/i,/^Apr$/i,/^May$/i,/^İyun$/i,/^İyul$/i,/^Avg$/i,/^Sen$/i,/^Okt$/i,/^Noy$/i,/^Dek$/i],wide:[/^Yanvar$/i,/^Fevral$/i,/^Mart$/i,/^Aprel$/i,/^May$/i,/^İyun$/i,/^İyul$/i,/^Avgust$/i,/^Sentyabr$/i,/^Oktyabr$/i,/^Noyabr$/i,/^Dekabr$/i]},_={narrow:/^(B\.|B\.e|Ç\.a|Ç\.|C\.a|C\.|Ş\.)$/i,short:/^(B\.|B\.e|Ç\.a|Ç\.|C\.a|C\.|Ş\.)$/i,abbreviated:/^(Baz\.e|Çər|Çər\.a|Cüm|Cüm\.a|Şə)$/i,wide:/^(Bazar|Bazar ertəsi|Çərşənbə axşamı|Çərşənbə|Cümə axşamı|Cümə|Şənbə)$/i},z={narrow:[/^B\.$/i,/^B\.e$/i,/^Ç\.a$/i,/^Ç\.$/i,/^C\.a$/i,/^C\.$/i,/^Ş\.$/i],abbreviated:[/^Baz$/i,/^Baz\.e$/i,/^Çər\.a$/i,/^Çər$/i,/^Cüm\.a$/i,/^Cüm$/i,/^Şə$/i],wide:[/^Bazar$/i,/^Bazar ertəsi$/i,/^Çərşənbə axşamı$/i,/^Çərşənbə$/i,/^Cümə axşamı$/i,/^Cümə$/i,/^Şənbə$/i],any:[/^B\.$/i,/^B\.e$/i,/^Ç\.a$/i,/^Ç\.$/i,/^C\.a$/i,/^C\.$/i,/^Ş\.$/i]},c={narrow:/^(a|p|gecəyarı|gün|səhər|gündüz|axşam|gecə)$/i,any:/^(am|pm|a\.m\.|p\.m\.|AM|PM|gecəyarı|gün|səhər|gündüz|axşam|gecə)$/i},f={any:{am:/^a$/i,pm:/^p$/i,midnight:/^gecəyarı$/i,noon:/^gün$/i,morning:/səhər$/i,afternoon:/gündüz$/i,evening:/axşam$/i,night:/gecə$/i}},h={ordinalNumber:(0,i.default)({matchPattern:l,parsePattern:s,valueCallback:function(w){return parseInt(w,10)}}),era:(0,t.default)({matchPatterns:d,defaultMatchWidth:"wide",parsePatterns:u,defaultParseWidth:"any"}),quarter:(0,t.default)({matchPatterns:n,defaultMatchWidth:"wide",parsePatterns:o,defaultParseWidth:"any",valueCallback:function(w){return w+1}}),month:(0,t.default)({matchPatterns:M,defaultMatchWidth:"wide",parsePatterns:P,defaultParseWidth:"narrow"}),day:(0,t.default)({matchPatterns:_,defaultMatchWidth:"wide",parsePatterns:z,defaultParseWidth:"any"}),dayPeriod:(0,t.default)({matchPatterns:c,defaultMatchWidth:"any",parsePatterns:f,defaultParseWidth:"any"})},v=h;a.default=v,e.exports=a.default})(N,x);(function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t=d(y),i=d($),r=d(b),l=d(p),s=d(x);function d(o){return o&&o.__esModule?o:{default:o}}var u={code:"az",formatDistance:t.default,formatLong:i.default,formatRelative:r.default,localize:l.default,match:s.default,options:{weekStartsOn:1,firstWeekContainsDate:1}},n=u;a.default=n,e.exports=a.default})(q,g);const Y=k(g),V=O({__proto__:null,default:Y},[g]);export{V as i};