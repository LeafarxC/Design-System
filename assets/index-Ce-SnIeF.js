import{R as h,r as p}from"./index-CBqU2yxZ.js";import{_,$ as Ue,a as Ee}from"./index-CDqOuThg.js";import{r as Ve}from"./index-BtM5VmRH.js";import{j as R}from"./jsx-runtime-CKrituN3.js";var x="colors",E="sizes",f="space",we={gap:f,gridGap:f,columnGap:f,gridColumnGap:f,rowGap:f,gridRowGap:f,inset:f,insetBlock:f,insetBlockEnd:f,insetBlockStart:f,insetInline:f,insetInlineEnd:f,insetInlineStart:f,margin:f,marginTop:f,marginRight:f,marginBottom:f,marginLeft:f,marginBlock:f,marginBlockEnd:f,marginBlockStart:f,marginInline:f,marginInlineEnd:f,marginInlineStart:f,padding:f,paddingTop:f,paddingRight:f,paddingBottom:f,paddingLeft:f,paddingBlock:f,paddingBlockEnd:f,paddingBlockStart:f,paddingInline:f,paddingInlineEnd:f,paddingInlineStart:f,top:f,right:f,bottom:f,left:f,scrollMargin:f,scrollMarginTop:f,scrollMarginRight:f,scrollMarginBottom:f,scrollMarginLeft:f,scrollMarginX:f,scrollMarginY:f,scrollMarginBlock:f,scrollMarginBlockEnd:f,scrollMarginBlockStart:f,scrollMarginInline:f,scrollMarginInlineEnd:f,scrollMarginInlineStart:f,scrollPadding:f,scrollPaddingTop:f,scrollPaddingRight:f,scrollPaddingBottom:f,scrollPaddingLeft:f,scrollPaddingX:f,scrollPaddingY:f,scrollPaddingBlock:f,scrollPaddingBlockEnd:f,scrollPaddingBlockStart:f,scrollPaddingInline:f,scrollPaddingInlineEnd:f,scrollPaddingInlineStart:f,fontSize:"fontSizes",background:x,backgroundColor:x,backgroundImage:x,borderImage:x,border:x,borderBlock:x,borderBlockEnd:x,borderBlockStart:x,borderBottom:x,borderBottomColor:x,borderColor:x,borderInline:x,borderInlineEnd:x,borderInlineStart:x,borderLeft:x,borderLeftColor:x,borderRight:x,borderRightColor:x,borderTop:x,borderTopColor:x,caretColor:x,color:x,columnRuleColor:x,fill:x,outline:x,outlineColor:x,stroke:x,textDecorationColor:x,fontFamily:"fonts",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",blockSize:E,minBlockSize:E,maxBlockSize:E,inlineSize:E,minInlineSize:E,maxInlineSize:E,width:E,minWidth:E,maxWidth:E,height:E,minHeight:E,maxHeight:E,flexBasis:E,gridTemplateColumns:E,gridTemplateRows:E,borderWidth:"borderWidths",borderTopWidth:"borderWidths",borderRightWidth:"borderWidths",borderBottomWidth:"borderWidths",borderLeftWidth:"borderWidths",borderStyle:"borderStyles",borderTopStyle:"borderStyles",borderRightStyle:"borderStyles",borderBottomStyle:"borderStyles",borderLeftStyle:"borderStyles",borderRadius:"radii",borderTopLeftRadius:"radii",borderTopRightRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",boxShadow:"shadows",textShadow:"shadows",transition:"transitions",zIndex:"zIndices"},Ge=(e,t)=>typeof t=="function"?{"()":Function.prototype.toString.call(t)}:t,D=()=>{const e=Object.create(null);return(t,r,...n)=>{const a=(o=>JSON.stringify(o,Ge))(t);return a in e?e[a]:e[a]=r(t,...n)}},O=Symbol.for("sxs.internal"),oe=(e,t)=>Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)),ce=e=>{for(const t in e)return!0;return!1},{hasOwnProperty:Ye}=Object.prototype,ne=e=>e.includes("-")?e:e.replace(/[A-Z]/g,t=>"-"+t.toLowerCase()),qe=/\s+(?![^()]*\))/,L=e=>t=>e(...typeof t=="string"?String(t).split(qe):[t]),de={appearance:e=>({WebkitAppearance:e,appearance:e}),backfaceVisibility:e=>({WebkitBackfaceVisibility:e,backfaceVisibility:e}),backdropFilter:e=>({WebkitBackdropFilter:e,backdropFilter:e}),backgroundClip:e=>({WebkitBackgroundClip:e,backgroundClip:e}),boxDecorationBreak:e=>({WebkitBoxDecorationBreak:e,boxDecorationBreak:e}),clipPath:e=>({WebkitClipPath:e,clipPath:e}),content:e=>({content:e.includes('"')||e.includes("'")||/^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e)?e:`"${e}"`}),hyphens:e=>({WebkitHyphens:e,hyphens:e}),maskImage:e=>({WebkitMaskImage:e,maskImage:e}),maskSize:e=>({WebkitMaskSize:e,maskSize:e}),tabSize:e=>({MozTabSize:e,tabSize:e}),textSizeAdjust:e=>({WebkitTextSizeAdjust:e,textSizeAdjust:e}),userSelect:e=>({WebkitUserSelect:e,userSelect:e}),marginBlock:L((e,t)=>({marginBlockStart:e,marginBlockEnd:t||e})),marginInline:L((e,t)=>({marginInlineStart:e,marginInlineEnd:t||e})),maxSize:L((e,t)=>({maxBlockSize:e,maxInlineSize:t||e})),minSize:L((e,t)=>({minBlockSize:e,minInlineSize:t||e})),paddingBlock:L((e,t)=>({paddingBlockStart:e,paddingBlockEnd:t||e})),paddingInline:L((e,t)=>({paddingInlineStart:e,paddingInlineEnd:t||e}))},re=/([\d.]+)([^]*)/,Ke=(e,t)=>e.length?e.reduce((r,n)=>(r.push(...t.map(a=>a.includes("&")?a.replace(/&/g,/[ +>|~]/.test(n)&&/&.*&/.test(a)?`:is(${n})`:n):n+" "+a)),r),[]):t,Xe=(e,t)=>e in Je&&typeof t=="string"?t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,(r,n,a,o)=>n+(a==="stretch"?`-moz-available${o};${ne(e)}:${n}-webkit-fill-available`:`-moz-fit-content${o};${ne(e)}:${n}fit-content`)+o):String(t),Je={blockSize:1,height:1,inlineSize:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,width:1},M=e=>e?e+"-":"",Re=(e,t,r)=>e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,(n,a,o,l,s)=>l=="$"==!!o?n:(a||l=="--"?"calc(":"")+"var(--"+(l==="$"?M(t)+(s.includes("$")?"":M(r))+s.replace(/\$/g,"-"):s)+")"+(a||l=="--"?"*"+(a||"")+(o||"1")+")":"")),Qe=/\s*,\s*(?![^()]*\))/,et=Object.prototype.toString,F=(e,t,r,n,a)=>{let o,l,s;const i=(c,m,u)=>{let d,g;const b=y=>{for(d in y){const S=d.charCodeAt(0)===64,C=S&&Array.isArray(y[d])?y[d]:[y[d]];for(g of C){const k=/[A-Z]/.test($=d)?$:$.replace(/-[^]/g,w=>w[1].toUpperCase()),H=typeof g=="object"&&g&&g.toString===et&&(!n.utils[k]||!m.length);if(k in n.utils&&!H){const w=n.utils[k];if(w!==l){l=w,b(w(g)),l=null;continue}}else if(k in de){const w=de[k];if(w!==s){s=w,b(w(g)),s=null;continue}}if(S&&(v=d.slice(1)in n.media?"@media "+n.media[d.slice(1)]:d,d=v.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,(w,z,P,j,B,A)=>{const W=re.test(z),Y=.0625*(W?-1:1),[q,le]=W?[j,z]:[z,j];return"("+(P[0]==="="?"":P[0]===">"===W?"max-":"min-")+q+":"+(P[0]!=="="&&P.length===1?le.replace(re,(Ze,ee,te)=>Number(ee)+Y*(P===">"?1:-1)+te):le)+(B?") and ("+(B[0]===">"?"min-":"max-")+q+":"+(B.length===1?A.replace(re,(Ze,ee,te)=>Number(ee)+Y*(B===">"?-1:1)+te):A):"")+")"})),H){const w=S?u.concat(d):[...u],z=S?[...m]:Ke(m,d.split(Qe));o!==void 0&&a(ue(...o)),o=void 0,i(g,z,w)}else o===void 0&&(o=[[],m,u]),d=S||d.charCodeAt(0)!==36?d:`--${M(n.prefix)}${d.slice(1).replace(/\$/g,"-")}`,g=H?g:typeof g=="number"?g&&k in tt?String(g)+"px":String(g):Re(Xe(k,g??""),n.prefix,n.themeMap[k]),o[0].push(`${S?`${d} `:`${ne(d)}:`}${g}`)}}var v,$};b(c),o!==void 0&&a(ue(...o)),o=void 0};i(e,t,r)},ue=(e,t,r)=>`${r.map(n=>`${n}{`).join("")}${t.length?`${t.join(",")}{`:""}${e.join(";")}${t.length?"}":""}${Array(r.length?r.length+1:0).join("}")}`,tt={animationDelay:1,animationDuration:1,backgroundSize:1,blockSize:1,border:1,borderBlock:1,borderBlockEnd:1,borderBlockEndWidth:1,borderBlockStart:1,borderBlockStartWidth:1,borderBlockWidth:1,borderBottom:1,borderBottomLeftRadius:1,borderBottomRightRadius:1,borderBottomWidth:1,borderEndEndRadius:1,borderEndStartRadius:1,borderInlineEnd:1,borderInlineEndWidth:1,borderInlineStart:1,borderInlineStartWidth:1,borderInlineWidth:1,borderLeft:1,borderLeftWidth:1,borderRadius:1,borderRight:1,borderRightWidth:1,borderSpacing:1,borderStartEndRadius:1,borderStartStartRadius:1,borderTop:1,borderTopLeftRadius:1,borderTopRightRadius:1,borderTopWidth:1,borderWidth:1,bottom:1,columnGap:1,columnRule:1,columnRuleWidth:1,columnWidth:1,containIntrinsicSize:1,flexBasis:1,fontSize:1,gap:1,gridAutoColumns:1,gridAutoRows:1,gridTemplateColumns:1,gridTemplateRows:1,height:1,inlineSize:1,inset:1,insetBlock:1,insetBlockEnd:1,insetBlockStart:1,insetInline:1,insetInlineEnd:1,insetInlineStart:1,left:1,letterSpacing:1,margin:1,marginBlock:1,marginBlockEnd:1,marginBlockStart:1,marginBottom:1,marginInline:1,marginInlineEnd:1,marginInlineStart:1,marginLeft:1,marginRight:1,marginTop:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,offsetDistance:1,offsetRotate:1,outline:1,outlineOffset:1,outlineWidth:1,overflowClipMargin:1,padding:1,paddingBlock:1,paddingBlockEnd:1,paddingBlockStart:1,paddingBottom:1,paddingInline:1,paddingInlineEnd:1,paddingInlineStart:1,paddingLeft:1,paddingRight:1,paddingTop:1,perspective:1,right:1,rowGap:1,scrollMargin:1,scrollMarginBlock:1,scrollMarginBlockEnd:1,scrollMarginBlockStart:1,scrollMarginBottom:1,scrollMarginInline:1,scrollMarginInlineEnd:1,scrollMarginInlineStart:1,scrollMarginLeft:1,scrollMarginRight:1,scrollMarginTop:1,scrollPadding:1,scrollPaddingBlock:1,scrollPaddingBlockEnd:1,scrollPaddingBlockStart:1,scrollPaddingBottom:1,scrollPaddingInline:1,scrollPaddingInlineEnd:1,scrollPaddingInlineStart:1,scrollPaddingLeft:1,scrollPaddingRight:1,scrollPaddingTop:1,shapeMargin:1,textDecoration:1,textDecorationThickness:1,textIndent:1,textUnderlineOffset:1,top:1,transitionDelay:1,transitionDuration:1,verticalAlign:1,width:1,wordSpacing:1},fe=e=>String.fromCharCode(e+(e>25?39:97)),N=e=>(t=>{let r,n="";for(r=Math.abs(t);r>52;r=r/52|0)n=fe(r%52)+n;return fe(r%52)+n})(((t,r)=>{let n=r.length;for(;n;)t=33*t^r.charCodeAt(--n);return t})(5381,JSON.stringify(e))>>>0),U=["themed","global","styled","onevar","resonevar","allvar","inline"],rt=e=>{if(e.href&&!e.href.startsWith(location.origin))return!1;try{return!!e.cssRules}catch{return!1}},nt=e=>{let t;const r=()=>{const{cssRules:a}=t.sheet;return[].map.call(a,(o,l)=>{const{cssText:s}=o;let i="";if(s.startsWith("--sxs"))return"";if(a[l-1]&&(i=a[l-1].cssText).startsWith("--sxs")){if(!o.cssRules.length)return"";for(const c in t.rules)if(t.rules[c].group===o)return`--sxs{--sxs:${[...t.rules[c].cache].join(" ")}}${s}`;return o.cssRules.length?`${i}${s}`:""}return s}).join("")},n=()=>{if(t){const{rules:s,sheet:i}=t;if(!i.deleteRule){for(;Object(Object(i.cssRules)[0]).type===3;)i.cssRules.splice(0,1);i.cssRules=[]}for(const c in s)delete s[c]}const a=Object(e).styleSheets||[];for(const s of a)if(rt(s)){for(let i=0,c=s.cssRules;c[i];++i){const m=Object(c[i]);if(m.type!==1)continue;const u=Object(c[i+1]);if(u.type!==4)continue;++i;const{cssText:d}=m;if(!d.startsWith("--sxs"))continue;const g=d.slice(14,-3).trim().split(/\s+/),b=U[g[0]];b&&(t||(t={sheet:s,reset:n,rules:{},toString:r}),t.rules[b]={group:u,index:i,cache:new Set(g)})}if(t)break}if(!t){const s=(i,c)=>({type:c,cssRules:[],insertRule(m,u){this.cssRules.splice(u,0,s(m,{import:3,undefined:1}[(m.toLowerCase().match(/^@([a-z]+)/)||[])[1]]||4))},get cssText(){return i==="@media{}"?`@media{${[].map.call(this.cssRules,m=>m.cssText).join("")}}`:i}});t={sheet:e?(e.head||e).appendChild(document.createElement("style")).sheet:s("","text/css"),rules:{},reset:n,toString:r}}const{sheet:o,rules:l}=t;for(let s=U.length-1;s>=0;--s){const i=U[s];if(!l[i]){const c=U[s+1],m=l[c]?l[c].index:o.cssRules.length;o.insertRule("@media{}",m),o.insertRule(`--sxs{--sxs:${s}}`,m),l[i]={group:o.cssRules[m+1],index:m,cache:new Set([s])}}ot(l[i])}};return n(),t},ot=e=>{const t=e.group;let r=t.cssRules.length;e.apply=n=>{try{t.insertRule(n,r),++r}catch{}}},Z=Symbol(),at=D(),pe=(e,t)=>at(e,()=>(...r)=>{let n={type:null,composers:new Set};for(const a of r)if(a!=null)if(a[O]){n.type==null&&(n.type=a[O].type);for(const o of a[O].composers)n.composers.add(o)}else a.constructor!==Object||a.$$typeof?n.type==null&&(n.type=a):n.composers.add(it(a,e));return n.type==null&&(n.type="span"),n.composers.size||n.composers.add(["PJLV",{},[],[],{},[]]),st(e,n,t)}),it=({variants:e,compoundVariants:t,defaultVariants:r,...n},a)=>{const o=`${M(a.prefix)}c-${N(n)}`,l=[],s=[],i=Object.create(null),c=[];for(const d in r)i[d]=String(r[d]);if(typeof e=="object"&&e)for(const d in e){m=i,u=d,Ye.call(m,u)||(i[d]="undefined");const g=e[d];for(const b in g){const y={[d]:String(b)};String(b)==="undefined"&&c.push(d);const v=g[b],$=[y,v,!ce(v)];l.push($)}}var m,u;if(typeof t=="object"&&t)for(const d of t){let{css:g,...b}=d;g=typeof g=="object"&&g||{};for(const v in b)b[v]=String(b[v]);const y=[b,g,!ce(g)];s.push(y)}return[o,n,l,s,i,c]},st=(e,t,r)=>{const[n,a,o,l]=lt(t.composers),s=typeof t.type=="function"||t.type.$$typeof?(u=>{function d(){for(let g=0;g<d[Z].length;g++){const[b,y]=d[Z][g];u.rules[b].apply(y)}return d[Z]=[],null}return d[Z]=[],d.rules={},U.forEach(g=>d.rules[g]={apply:b=>d[Z].push([g,b])}),d})(r):null,i=(s||r).rules,c=`.${n}${a.length>1?`:where(.${a.slice(1).join(".")})`:""}`,m=u=>{u=typeof u=="object"&&u||ct;const{css:d,...g}=u,b={};for(const $ in o)if(delete g[$],$ in u){let S=u[$];typeof S=="object"&&S?b[$]={"@initial":o[$],...S}:(S=String(S),b[$]=S!=="undefined"||l.has($)?S:o[$])}else b[$]=o[$];const y=new Set([...a]);for(const[$,S,C,k]of t.composers){r.rules.styled.cache.has($)||(r.rules.styled.cache.add($),F(S,[`.${$}`],[],e,z=>{i.styled.apply(z)}));const H=ge(C,b,e.media),w=ge(k,b,e.media,!0);for(const z of H)if(z!==void 0)for(const[P,j,B]of z){const A=`${$}-${N(j)}-${P}`;y.add(A);const W=(B?r.rules.resonevar:r.rules.onevar).cache,Y=B?i.resonevar:i.onevar;W.has(A)||(W.add(A),F(j,[`.${A}`],[],e,q=>{Y.apply(q)}))}for(const z of w)if(z!==void 0)for(const[P,j]of z){const B=`${$}-${N(j)}-${P}`;y.add(B),r.rules.allvar.cache.has(B)||(r.rules.allvar.cache.add(B),F(j,[`.${B}`],[],e,A=>{i.allvar.apply(A)}))}}if(typeof d=="object"&&d){const $=`${n}-i${N(d)}-css`;y.add($),r.rules.inline.cache.has($)||(r.rules.inline.cache.add($),F(d,[`.${$}`],[],e,S=>{i.inline.apply(S)}))}for(const $ of String(u.className||"").trim().split(/\s+/))$&&y.add($);const v=g.className=[...y].join(" ");return{type:t.type,className:v,selector:c,props:g,toString:()=>v,deferredInjector:s}};return oe(m,{className:n,selector:c,[O]:t,toString:()=>(r.rules.styled.cache.has(n)||m(),n)})},lt=e=>{let t="";const r=[],n={},a=[];for(const[o,,,,l,s]of e){t===""&&(t=o),r.push(o),a.push(...s);for(const i in l){const c=l[i];(n[i]===void 0||c!=="undefined"||s.includes(c))&&(n[i]=c)}}return[t,r,n,new Set(a)]},ge=(e,t,r,n)=>{const a=[];e:for(let[o,l,s]of e){if(s)continue;let i,c=0,m=!1;for(i in o){const u=o[i];let d=t[i];if(d!==u){if(typeof d!="object"||!d)continue e;{let g,b,y=0;for(const v in d){if(u===String(d[v])){if(v!=="@initial"){const $=v.slice(1);(b=b||[]).push($ in r?r[$]:v.replace(/^@media ?/,"")),m=!0}c+=y,g=!0}++y}if(b&&b.length&&(l={["@media "+b.join(", ")]:l}),!g)continue e}}}(a[c]=a[c]||[]).push([n?"cv":`${i}-${o[i]}`,l,m])}return a},ct={},dt=D(),ut=(e,t)=>dt(e,()=>(...r)=>{const n=()=>{for(let a of r){a=typeof a=="object"&&a||{};let o=N(a);if(!t.rules.global.cache.has(o)){if(t.rules.global.cache.add(o),"@import"in a){let l=[].indexOf.call(t.sheet.cssRules,t.rules.themed.group)-1;for(let s of[].concat(a["@import"]))s=s.includes('"')||s.includes("'")?s:`"${s}"`,t.sheet.insertRule(`@import ${s};`,l++);delete a["@import"]}F(a,[],[],e,l=>{t.rules.global.apply(l)})}}return""};return oe(n,{toString:n})}),ft=D(),pt=(e,t)=>ft(e,()=>r=>{const n=`${M(e.prefix)}k-${N(r)}`,a=()=>{if(!t.rules.global.cache.has(n)){t.rules.global.cache.add(n);const o=[];F(r,[],[],e,s=>o.push(s));const l=`@keyframes ${n}{${o.join("")}}`;t.rules.global.apply(l)}return n};return oe(a,{get name(){return a()},toString:a})}),gt=class{constructor(e,t,r,n){this.token=e==null?"":String(e),this.value=t==null?"":String(t),this.scale=r==null?"":String(r),this.prefix=n==null?"":String(n)}get computedValue(){return"var("+this.variable+")"}get variable(){return"--"+M(this.prefix)+M(this.scale)+this.token}toString(){return this.computedValue}},mt=D(),ht=(e,t)=>mt(e,()=>(r,n)=>{n=typeof r=="object"&&r||Object(n);const a=`.${r=(r=typeof r=="string"?r:"")||`${M(e.prefix)}t-${N(n)}`}`,o={},l=[];for(const i in n){o[i]={};for(const c in n[i]){const m=`--${M(e.prefix)}${i}-${c}`,u=Re(String(n[i][c]),e.prefix,i);o[i][c]=new gt(c,u,i,e.prefix),l.push(`${m}:${u}`)}}const s=()=>{if(l.length&&!t.rules.themed.cache.has(r)){t.rules.themed.cache.add(r);const i=`${n===e.theme?":root,":""}.${r}{${l.join(";")}}`;t.rules.themed.apply(i)}return r};return{...o,get className(){return s()},selector:a,toString:s}}),bt=D(),me,$t=D(),Ie=e=>{const t=(r=>{let n=!1;const a=bt(r,o=>{n=!0;const l="prefix"in(o=typeof o=="object"&&o||{})?String(o.prefix):"",s=typeof o.media=="object"&&o.media||{},i=typeof o.root=="object"?o.root||null:globalThis.document||null,c=typeof o.theme=="object"&&o.theme||{},m={prefix:l,media:s,theme:c,themeMap:typeof o.themeMap=="object"&&o.themeMap||{...we},utils:typeof o.utils=="object"&&o.utils||{}},u=nt(i),d={css:pe(m,u),globalCss:ut(m,u),keyframes:pt(m,u),createTheme:ht(m,u),reset(){u.reset(),d.theme.toString()},theme:{},sheet:u,config:m,prefix:l,getCssText:u.toString,toString:u.toString};return String(d.theme=d.createTheme(c)),d});return n||a.reset(),a})(e);return t.styled=(({config:r,sheet:n})=>$t(r,()=>{const a=pe(r,n);return(...o)=>{const l=a(...o),s=l[O].type,i=h.forwardRef((c,m)=>{const u=c&&c.as||s,{props:d,deferredInjector:g}=l(c);return delete d.as,d.ref=m,g?h.createElement(h.Fragment,null,h.createElement(u,d),h.createElement(g,null)):h.createElement(u,d)});return i.className=l.className,i.displayName=`Styled.${s.displayName||s.name||s}`,i.selector=l.selector,i.toString=()=>l.selector,i[O]=l[O],i}}))(t),t},xt=()=>me||(me=Ie()),ae=(...e)=>xt().styled(...e);function ze(e,t=[]){let r=[];function n(o,l){const s=p.createContext(l),i=r.length;r=[...r,l];function c(u){const{scope:d,children:g,...b}=u,y=(d==null?void 0:d[e][i])||s,v=p.useMemo(()=>b,Object.values(b));return p.createElement(y.Provider,{value:v},g)}function m(u,d){const g=(d==null?void 0:d[e][i])||s,b=p.useContext(g);if(b)return b;if(l!==void 0)return l;throw new Error(`\`${u}\` must be used within \`${o}\``)}return c.displayName=o+"Provider",[c,m]}const a=()=>{const o=r.map(l=>p.createContext(l));return function(s){const i=(s==null?void 0:s[e])||o;return p.useMemo(()=>({[`__scope${e}`]:{...s,[e]:i}}),[s,i])}};return a.scopeName=e,[n,vt(a,...t)]}function vt(...e){const t=e[0];if(e.length===1)return t;const r=()=>{const n=e.map(a=>({useScope:a(),scopeName:a.scopeName}));return function(o){const l=n.reduce((s,{useScope:i,scopeName:c})=>{const u=i(o)[`__scope${c}`];return{...s,...u}},{});return p.useMemo(()=>({[`__scope${t.scopeName}`]:l}),[l])}};return r.scopeName=t.scopeName,r}function ie(e){const t=p.useRef(e);return p.useEffect(()=>{t.current=e}),p.useMemo(()=>(...r)=>{var n;return(n=t.current)===null||n===void 0?void 0:n.call(t,...r)},[])}const V=globalThis!=null&&globalThis.document?p.useLayoutEffect:()=>{},yt=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],G=yt.reduce((e,t)=>{const r=p.forwardRef((n,a)=>{const{asChild:o,...l}=n,s=o?Ue:t;return p.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),p.createElement(s,_({},l,{ref:a}))});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{}),Be="Avatar",[St,Yr]=ze(Be),[kt,Pe]=St(Be),Ct=p.forwardRef((e,t)=>{const{__scopeAvatar:r,...n}=e,[a,o]=p.useState("idle");return p.createElement(kt,{scope:r,imageLoadingStatus:a,onImageLoadingStatusChange:o},p.createElement(G.span,_({},n,{ref:t})))}),Et="AvatarImage",wt=p.forwardRef((e,t)=>{const{__scopeAvatar:r,src:n,onLoadingStatusChange:a=()=>{},...o}=e,l=Pe(Et,r),s=zt(n),i=ie(c=>{a(c),l.onImageLoadingStatusChange(c)});return V(()=>{s!=="idle"&&i(s)},[s,i]),s==="loaded"?p.createElement(G.img,_({},o,{ref:t,src:n})):null}),Rt="AvatarFallback",It=p.forwardRef((e,t)=>{const{__scopeAvatar:r,delayMs:n,...a}=e,o=Pe(Rt,r),[l,s]=p.useState(n===void 0);return p.useEffect(()=>{if(n!==void 0){const i=window.setTimeout(()=>s(!0),n);return()=>window.clearTimeout(i)}},[n]),l&&o.imageLoadingStatus!=="loaded"?p.createElement(G.span,_({},a,{ref:t})):null});function zt(e){const[t,r]=p.useState("idle");return V(()=>{if(!e){r("error");return}let n=!0;const a=new window.Image,o=l=>()=>{n&&r(l)};return r("loading"),a.onload=o("loaded"),a.onerror=o("error"),a.src=e,()=>{n=!1}},[e]),t}const Bt=Ct,Pt=wt,At=It,Mt=p.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1});var jt=Object.defineProperty,X=Object.getOwnPropertySymbols,Ae=Object.prototype.hasOwnProperty,Me=Object.prototype.propertyIsEnumerable,he=(e,t,r)=>t in e?jt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,be=(e,t)=>{for(var r in t||(t={}))Ae.call(t,r)&&he(e,r,t[r]);if(X)for(var r of X(t))Me.call(t,r)&&he(e,r,t[r]);return e},$e=(e,t)=>{var r={};for(var n in e)Ae.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&X)for(var n of X(e))t.indexOf(n)<0&&Me.call(e,n)&&(r[n]=e[n]);return r};const se=p.forwardRef((e,t)=>{const r=e,{alt:n,color:a,size:o,weight:l,mirrored:s,children:i,weights:c}=r,m=$e(r,["alt","color","size","weight","mirrored","children","weights"]),u=p.useContext(Mt),{color:d="currentColor",size:g,weight:b="regular",mirrored:y=!1}=u,v=$e(u,["color","size","weight","mirrored"]);return h.createElement("svg",be(be({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o??g,height:o??g,fill:a??d,viewBox:"0 0 256 256",transform:s||y?"scale(-1, 1)":void 0},v),m),!!n&&h.createElement("title",null,n),i,c.get(l??b))});se.displayName="IconBase";const Ot=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Z",opacity:"0.2"}),h.createElement("path",{d:"M205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M228.24,76.24l-128,128a6,6,0,0,1-8.48,0l-56-56a6,6,0,0,1,8.48-8.48L96,191.51,219.76,67.76a6,6,0,0,1,8.48,8.48Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M226.83,74.83l-128,128a4,4,0,0,1-5.66,0l-56-56a4,4,0,0,1,5.66-5.66L96,194.34,221.17,69.17a4,4,0,1,1,5.66,5.66Z"}))]]),Nt=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M234.38,210a123.36,123.36,0,0,0-60.78-53.23,76,76,0,1,0-91.2,0A123.36,123.36,0,0,0,21.62,210a12,12,0,1,0,20.77,12c18.12-31.32,50.12-50,85.61-50s67.49,18.69,85.61,50a12,12,0,0,0,20.77-12ZM76,96a52,52,0,1,1,52,52A52.06,52.06,0,0,1,76,96Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M192,96a64,64,0,1,1-64-64A64,64,0,0,1,192,96Z",opacity:"0.2"}),h.createElement("path",{d:"M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M230.93,220a8,8,0,0,1-6.93,4H32a8,8,0,0,1-6.92-12c15.23-26.33,38.7-45.21,66.09-54.16a72,72,0,1,1,73.66,0c27.39,8.95,50.86,27.83,66.09,54.16A8,8,0,0,1,230.93,220Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M229.19,213c-15.81-27.32-40.63-46.49-69.47-54.62a70,70,0,1,0-63.44,0C67.44,166.5,42.62,185.67,26.81,213a6,6,0,1,0,10.38,6C56.4,185.81,90.34,166,128,166s71.6,19.81,90.81,53a6,6,0,1,0,10.38-6ZM70,96a58,58,0,1,1,58,58A58.07,58.07,0,0,1,70,96Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M227.46,214c-16.52-28.56-43-48.06-73.68-55.09a68,68,0,1,0-51.56,0c-30.64,7-57.16,26.53-73.68,55.09a4,4,0,0,0,6.92,4C55,184.19,89.62,164,128,164s73,20.19,92.54,54a4,4,0,0,0,3.46,2,3.93,3.93,0,0,0,2-.54A4,4,0,0,0,227.46,214ZM68,96a60,60,0,1,1,60,60A60.07,60.07,0,0,1,68,96Z"}))]]);var Tt=Object.defineProperty,_t=Object.defineProperties,Wt=Object.getOwnPropertyDescriptors,xe=Object.getOwnPropertySymbols,Lt=Object.prototype.hasOwnProperty,Ft=Object.prototype.propertyIsEnumerable,ve=(e,t,r)=>t in e?Tt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Dt=(e,t)=>{for(var r in t||(t={}))Lt.call(t,r)&&ve(e,r,t[r]);if(xe)for(var r of xe(t))Ft.call(t,r)&&ve(e,r,t[r]);return e},Ht=(e,t)=>_t(e,Wt(t));const je=p.forwardRef((e,t)=>h.createElement(se,Ht(Dt({ref:t},e),{weights:Ot})));je.displayName="Check";var Zt=Object.defineProperty,Ut=Object.defineProperties,Vt=Object.getOwnPropertyDescriptors,ye=Object.getOwnPropertySymbols,Gt=Object.prototype.hasOwnProperty,Yt=Object.prototype.propertyIsEnumerable,Se=(e,t,r)=>t in e?Zt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,qt=(e,t)=>{for(var r in t||(t={}))Gt.call(t,r)&&Se(e,r,t[r]);if(ye)for(var r of ye(t))Yt.call(t,r)&&Se(e,r,t[r]);return e},Kt=(e,t)=>Ut(e,Vt(t));const Oe=p.forwardRef((e,t)=>h.createElement(se,Kt(qt({ref:t},e),{weights:Nt})));Oe.displayName="User";function ke(e,t,{checkForDefaultPrevented:r=!0}={}){return function(a){if(e==null||e(a),r===!1||!a.defaultPrevented)return t==null?void 0:t(a)}}function Xt({prop:e,defaultProp:t,onChange:r=()=>{}}){const[n,a]=Jt({defaultProp:t,onChange:r}),o=e!==void 0,l=o?e:n,s=ie(r),i=p.useCallback(c=>{if(o){const u=typeof c=="function"?c(e):c;u!==e&&s(u)}else a(c)},[o,e,a,s]);return[l,i]}function Jt({defaultProp:e,onChange:t}){const r=p.useState(e),[n]=r,a=p.useRef(n),o=ie(t);return p.useEffect(()=>{a.current!==n&&(o(n),a.current=n)},[n,a,o]),r}function Qt(e){const t=p.useRef({value:e,previous:e});return p.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}function er(e){const[t,r]=p.useState(void 0);return V(()=>{if(e){r({width:e.offsetWidth,height:e.offsetHeight});const n=new ResizeObserver(a=>{if(!Array.isArray(a)||!a.length)return;const o=a[0];let l,s;if("borderBoxSize"in o){const i=o.borderBoxSize,c=Array.isArray(i)?i[0]:i;l=c.inlineSize,s=c.blockSize}else l=e.offsetWidth,s=e.offsetHeight;r({width:l,height:s})});return n.observe(e,{box:"border-box"}),()=>n.unobserve(e)}else r(void 0)},[e]),t}function tr(e,t){return p.useReducer((r,n)=>{const a=t[r][n];return a??r},e)}const Ne=e=>{const{present:t,children:r}=e,n=rr(t),a=typeof r=="function"?r({present:n.isPresent}):p.Children.only(r),o=Ee(n.ref,a.ref);return typeof r=="function"||n.isPresent?p.cloneElement(a,{ref:o}):null};Ne.displayName="Presence";function rr(e){const[t,r]=p.useState(),n=p.useRef({}),a=p.useRef(e),o=p.useRef("none"),l=e?"mounted":"unmounted",[s,i]=tr(l,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return p.useEffect(()=>{const c=K(n.current);o.current=s==="mounted"?c:"none"},[s]),V(()=>{const c=n.current,m=a.current;if(m!==e){const d=o.current,g=K(c);e?i("MOUNT"):g==="none"||(c==null?void 0:c.display)==="none"?i("UNMOUNT"):i(m&&d!==g?"ANIMATION_OUT":"UNMOUNT"),a.current=e}},[e,i]),V(()=>{if(t){const c=u=>{const g=K(n.current).includes(u.animationName);u.target===t&&g&&Ve.flushSync(()=>i("ANIMATION_END"))},m=u=>{u.target===t&&(o.current=K(n.current))};return t.addEventListener("animationstart",m),t.addEventListener("animationcancel",c),t.addEventListener("animationend",c),()=>{t.removeEventListener("animationstart",m),t.removeEventListener("animationcancel",c),t.removeEventListener("animationend",c)}}else i("ANIMATION_END")},[t,i]),{isPresent:["mounted","unmountSuspended"].includes(s),ref:p.useCallback(c=>{c&&(n.current=getComputedStyle(c)),r(c)},[])}}function K(e){return(e==null?void 0:e.animationName)||"none"}const Te="Checkbox",[nr,qr]=ze(Te),[or,ar]=nr(Te),ir=p.forwardRef((e,t)=>{const{__scopeCheckbox:r,name:n,checked:a,defaultChecked:o,required:l,disabled:s,value:i="on",onCheckedChange:c,...m}=e,[u,d]=p.useState(null),g=Ee(t,C=>d(C)),b=p.useRef(!1),y=u?!!u.closest("form"):!0,[v=!1,$]=Xt({prop:a,defaultProp:o,onChange:c}),S=p.useRef(v);return p.useEffect(()=>{const C=u==null?void 0:u.form;if(C){const k=()=>$(S.current);return C.addEventListener("reset",k),()=>C.removeEventListener("reset",k)}},[u,$]),p.createElement(or,{scope:r,state:v,disabled:s},p.createElement(G.button,_({type:"button",role:"checkbox","aria-checked":T(v)?"mixed":v,"aria-required":l,"data-state":_e(v),"data-disabled":s?"":void 0,disabled:s,value:i},m,{ref:g,onKeyDown:ke(e.onKeyDown,C=>{C.key==="Enter"&&C.preventDefault()}),onClick:ke(e.onClick,C=>{$(k=>T(k)?!0:!k),y&&(b.current=C.isPropagationStopped(),b.current||C.stopPropagation())})})),y&&p.createElement(cr,{control:u,bubbles:!b.current,name:n,value:i,checked:v,required:l,disabled:s,style:{transform:"translateX(-100%)"}}))}),sr="CheckboxIndicator",lr=p.forwardRef((e,t)=>{const{__scopeCheckbox:r,forceMount:n,...a}=e,o=ar(sr,r);return p.createElement(Ne,{present:n||T(o.state)||o.state===!0},p.createElement(G.span,_({"data-state":_e(o.state),"data-disabled":o.disabled?"":void 0},a,{ref:t,style:{pointerEvents:"none",...e.style}})))}),cr=e=>{const{control:t,checked:r,bubbles:n=!0,...a}=e,o=p.useRef(null),l=Qt(r),s=er(t);return p.useEffect(()=>{const i=o.current,c=window.HTMLInputElement.prototype,u=Object.getOwnPropertyDescriptor(c,"checked").set;if(l!==r&&u){const d=new Event("click",{bubbles:n});i.indeterminate=T(r),u.call(i,T(r)?!1:r),i.dispatchEvent(d)}},[l,r,n]),p.createElement("input",_({type:"checkbox","aria-hidden":!0,defaultChecked:T(r)?!1:r},a,{tabIndex:-1,ref:o,style:{...e.style,...s,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function T(e){return e==="indeterminate"}function _e(e){return T(e)?"indeterminate":e?"checked":"unchecked"}const dr=ir,ur=lr;var fr=Object.defineProperty,pr=Object.defineProperties,gr=Object.getOwnPropertyDescriptors,J=Object.getOwnPropertySymbols,We=Object.prototype.hasOwnProperty,Le=Object.prototype.propertyIsEnumerable,Ce=(e,t,r)=>t in e?fr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Q=(e,t)=>{for(var r in t||(t={}))We.call(t,r)&&Ce(e,r,t[r]);if(J)for(var r of J(t))Le.call(t,r)&&Ce(e,r,t[r]);return e},Fe=(e,t)=>pr(e,gr(t)),mr=(e,t)=>{var r={};for(var n in e)We.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&J)for(var n of J(e))t.indexOf(n)<0&&Le.call(e,n)&&(r[n]=e[n]);return r},hr={white:"#FFF",black:"#000",gray100:"#E1E1E6",gray200:"#A9A9B2",gray400:"#7C7C8A",gray500:"#505059",gray600:"#323238",gray700:"#29292E",gray800:"#202024",gray900:"#121214",ignite300:"#00B37E",ignite500:"#00875F",ignite700:"#015F43",ignite900:"#00291D"},br={1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",10:"2.5rem",12:"3rem",16:"4rem",20:"5rem",40:"10rem",64:"16rem",80:"20rem"},$r={px:"1px",xs:"4px",sm:"6px",md:"8px",lg:"16px",full:"99999px"},xr={default:"Roboto, sans-serif",code:"monospace"},vr={xxs:"0.625rem",xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","4xl":"2rem","5xl":"2.25rem","6xl":"3rem","7xl":"4rem","8xl":"4.5rem","9xl":"6rem"},yr={regular:"400",medium:"500",bold:"700"},Sr={shorter:"125%",short:"140%",base:"160%",tall:"180%"},{styled:I,css:Kr,globalCss:Xr,keyframes:De,getCssText:Jr,theme:Qr,createTheme:en,config:tn}=Ie({themeMap:Fe(Q({},we),{height:"space",width:"space"}),theme:{colors:hr,fontSizes:vr,fontWeights:yr,fonts:xr,lineHeights:Sr,radii:$r,space:br}}),kr=I("div",{padding:"$4",borderRadius:"$md",backgroundColor:"$gray800",border:"1px solid $gray600"});kr.displayName="Box";var He=I("p",{fontFamily:"$default",lineHeight:"$base",margin:0,color:"$gray100",variants:{size:{xxs:{fontSize:"$xxs"},xs:{fontSize:"$xs"},sm:{fontSize:"$sm"},md:{fontSize:"$md"},lg:{fontSize:"$lg"},xl:{fontSize:"$xl"},"2xl":{fontSize:"$2xl"},"4xl":{fontSize:"$4xl"},"5xl":{fontSize:"$5xl"},"6xl":{fontSize:"$6xl"},"7xl":{fontSize:"$7xl"},"8xl":{fontSize:"$8xl"},"9xl":{fontSize:"$9xl"}}},defaultVariants:{size:"md"}});He.displayName="Text";var Cr=I("h2",{fontFamily:"$default",lineHeight:"$shorter",margin:0,color:"$gray100",variants:{size:{sm:{fontSize:"$xl"},md:{fontSize:"$2xl"},lg:{fontSize:"$4xl"},"2xl":{fontSize:"$5xl"},"3xl":{fontSize:"$6xl"},"4xl":{fontSize:"$7xl"},"5xl":{fontSize:"$8xl"},"6xl":{fontSize:"$9xl"}}},defaultVariants:{size:"md"}});Cr.displayName="Heading";var Er=I(Bt,{borderRadius:"$full",display:"inline-block",width:"$16",height:"$16",overflow:"hidden"}),wr=I(Pt,{width:"100%",height:"100%",objectFit:"cover",borderRadius:"inherit"}),Rr=I(At,{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"$gray600",color:"$gray800",svg:{width:"$6",height:"$6"}});function Ir(e){return R.jsxs(Er,{children:[R.jsx(wr,Q({},e)),R.jsx(Rr,{delayMs:600,children:R.jsx(Oe,{})})]})}Ir.displayName="Avatar";var zr=I("button",{all:"unset",borderRadius:"$sm",fontSize:"$sm",fontWeight:"$medium",fontFamily:"$default",textAlign:"center",minWidth:120,boxSizing:"border-box",padding:"0 $4",display:"flex",alignItems:"center",justifyContent:"center",gap:"$2",cursor:"pointer",svg:{width:"$4",height:"$4"},"&:disabled":{cursor:"not-allowed"},variants:{variant:{primary:{color:"$white",background:"$ignite500","&:not(:disabled):hover":{background:"$ignite300"},"&:disabled":{backgroundColor:"$gray200"}},secondary:{color:"$ignite300",border:"2px solid $ignite500","&:not(:disabled):hover":{background:"$ignite500",color:"$white"},"&:disabled":{color:"$gray200",borderColor:"$gray200"}},tertiary:{color:"$gray100",border:"2px solid $gray700","&:not(:disabled):hover":{color:"$white"},"&:disabled":{color:"$gray900"}}},size:{sm:{height:38},md:{height:46}}},defaultVariants:{variant:"primary",size:"md"}});zr.displayName="Button";var Br=ae("div",{backgroundColor:"$gray900",padding:"$3 $4",borderRadius:"$sm",boxSizing:"border-box",border:"2px solid $gray900",display:"flex",alignItems:"baseline","&:has(input:focus)":{borderColor:"$ignite300"},"&:has(input:disabled)":{opacity:.5,cursor:"not-allowed"}}),Pr=ae("span",{fontFamily:"$default",fontSize:"$sm",color:"$gray400",fontWeight:"regular"}),Ar=ae("input",{fontFamily:"$default",fontSize:"$sm",color:"$white",fontWeight:"regular",background:"transparent",border:0,width:"100%","&:focus":{outline:0},"&:disabled":{cursor:"not-allowed"},"&:placeholder":{color:"$gray400"}});function Mr(e){var t=e,{prefix:r}=t,n=mr(t,["prefix"]);return R.jsxs(Br,{children:[!!r&&R.jsx(Pr,{children:r}),R.jsx(Ar,Q({},n))]})}Mr.displayName="TextInput";var jr=I("textarea",{backgroundColor:"$gray900",padding:"$3 $4",borderRadius:"$sm",boxSizing:"border-box",border:"2px solid $gray900",fontFamily:"$default",fontSize:"$sm",color:"$white",fontWeight:"$regular",resize:"vertical",minHeight:80,"&:focus":{outline:0,borderColor:"$ignite300"},"&:disabled":{opacity:.5,cursor:"not-allowed"},"&:placeholder":{color:"$gray400"}});jr.displayName="TextArea";var Or=I(dr,{all:"unset",width:"$6",height:"$6",backgroundColor:"$gray900",borderRadius:"$xs",lineHeight:0,cursor:"pointer",overflow:"hidden",boxSizing:"border-box",display:"flex",justifyContent:"center",alignItems:"center",border:"2px solid $gray900",'&[data-state="checked"]':{backgroundColor:"$ignite300"},"&:focus":{border:"2px solid $ignite300"}}),Nr=De({from:{transform:"translateY(-100%)"},to:{transform:"translateY(0)"}}),Tr=De({from:{transform:"translateY(0)"},to:{transform:"translateY(-100%)"}}),_r=I(ur,{color:"$white",width:"$4",height:"$4",'&[data-state="checked"]':{animation:`${Nr} 200ms ease-out`},'&[data-state="unchecked"]':{animation:`${Tr} 200ms ease-out`}});function Wr(e){return R.jsx(Or,Fe(Q({},e),{children:R.jsx(_r,{asChild:!0,children:R.jsx(je,{weight:"bold"})})}))}Wr.displayName="Checkbox";var Lr=I("div",{}),Fr=I(He,{color:"$gray200",defaultVariants:{size:"xs"}}),Dr=I("div",{display:"grid",gridTemplateColumns:"repeat(var(--steps-size), 1fr)",gap:"$2",marginTop:"$1"}),Hr=I("div",{height:"$1",borderRadius:"$px",backgroundColor:"$gray600",variants:{active:{true:{backgroundColor:"$gray100"}}}});function rn({size:e,currentStep:t=1}){return R.jsxs(Lr,{children:[R.jsxs(Fr,{children:["Passo ",t," de ",e]}),R.jsx(Dr,{css:{"--steps-size":e},children:Array.from({length:e},(r,n)=>n+1).map(r=>R.jsx(Hr,{active:t>=r},r))})]})}export{Ir as A,kr as B,Wr as C,Cr as H,rn as M,se as P,He as T,jr as a,Mr as b,zr as c};
