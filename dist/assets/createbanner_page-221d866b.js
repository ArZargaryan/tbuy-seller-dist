import{a0 as ft,u as l,a as xt,r as u,R as H,j as o,b as mt,d as bt,f as O,i as ee,t as S,h as Se,k as wt,e as yt}from"./index-2bc117be.js";import{d as St,a as vt,b as jt,c as Ct,e as Rt}from"./Wallpaper-8c86bacf.js";import{d as Et}from"./BorderColor-b67074f9.js";import{a as kt}from"./api-cba92c15.js";import{R as Pt}from"./radio-group-fd87d7b3.js";import{S as ve,T as $t}from"./table_pricelist_banners-a1876412.js";import"./createSvgIcon-5f6a3721.js";import"./createSvgIcon-bae563fb.js";import"./Box-2aeb85a8.js";import"./useSlotProps-97c8360a.js";function Tt(e,t){if(e.match(/^[a-z]+:\/\//i))return e;if(e.match(/^\/\//))return window.location.protocol+e;if(e.match(/^[a-z]+:/i))return e;const i=document.implementation.createHTMLDocument(),n=i.createElement("base"),r=i.createElement("a");return i.head.appendChild(n),i.body.appendChild(r),t&&(n.href=t),r.href=e,r.href}const Lt=(()=>{let e=0;const t=()=>`0000${(Math.random()*36**4<<0).toString(36)}`.slice(-4);return()=>(e+=1,`u${t()}${e}`)})();function v(e){const t=[];for(let i=0,n=e.length;i<n;i++)t.push(e[i]);return t}function X(e,t){const n=(e.ownerDocument.defaultView||window).getComputedStyle(e).getPropertyValue(t);return n?parseFloat(n.replace("px","")):0}function It(e){const t=X(e,"border-left-width"),i=X(e,"border-right-width");return e.clientWidth+t+i}function Bt(e){const t=X(e,"border-top-width"),i=X(e,"border-bottom-width");return e.clientHeight+t+i}function _e(e,t={}){const i=t.width||It(e),n=t.height||Bt(e);return{width:i,height:n}}function zt(){let e,t;try{t=process}catch{}const i=t&&t.env?t.env.devicePixelRatio:null;return i&&(e=parseInt(i,10),Number.isNaN(e)&&(e=1)),e||window.devicePixelRatio||1}const b=16384;function Dt(e){(e.width>b||e.height>b)&&(e.width>b&&e.height>b?e.width>e.height?(e.height*=b/e.width,e.width=b):(e.width*=b/e.height,e.height=b):e.width>b?(e.height*=b/e.width,e.width=b):(e.width*=b/e.height,e.height=b))}function G(e){return new Promise((t,i)=>{const n=new Image;n.decode=()=>t(n),n.onload=()=>t(n),n.onerror=i,n.crossOrigin="anonymous",n.decoding="async",n.src=e})}async function _t(e){return Promise.resolve().then(()=>new XMLSerializer().serializeToString(e)).then(encodeURIComponent).then(t=>`data:image/svg+xml;charset=utf-8,${t}`)}async function Ft(e,t,i){const n="http://www.w3.org/2000/svg",r=document.createElementNS(n,"svg"),s=document.createElementNS(n,"foreignObject");return r.setAttribute("width",`${t}`),r.setAttribute("height",`${i}`),r.setAttribute("viewBox",`0 0 ${t} ${i}`),s.setAttribute("width","100%"),s.setAttribute("height","100%"),s.setAttribute("x","0"),s.setAttribute("y","0"),s.setAttribute("externalResourcesRequired","true"),r.appendChild(s),s.appendChild(e),_t(r)}const m=(e,t)=>{if(e instanceof t)return!0;const i=Object.getPrototypeOf(e);return i===null?!1:i.constructor.name===t.name||m(i,t)};function At(e){const t=e.getPropertyValue("content");return`${e.cssText} content: '${t.replace(/'|"/g,"")}';`}function Ut(e){return v(e).map(t=>{const i=e.getPropertyValue(t),n=e.getPropertyPriority(t);return`${t}: ${i}${n?" !important":""};`}).join(" ")}function Mt(e,t,i){const n=`.${e}:${t}`,r=i.cssText?At(i):Ut(i);return document.createTextNode(`${n}{${r}}`)}function je(e,t,i){const n=window.getComputedStyle(e,i),r=n.getPropertyValue("content");if(r===""||r==="none")return;const s=Lt();try{t.className=`${t.className} ${s}`}catch{return}const a=document.createElement("style");a.appendChild(Mt(s,i,n)),t.appendChild(a)}function Ht(e,t){je(e,t,":before"),je(e,t,":after")}const Ce="application/font-woff",Re="image/jpeg",Ot={woff:Ce,woff2:Ce,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:Re,jpeg:Re,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function Wt(e){const t=/\.([^./]*?)$/g.exec(e);return t?t[1]:""}function re(e){const t=Wt(e).toLowerCase();return Ot[t]||""}function Vt(e){return e.split(/,/)[1]}function oe(e){return e.search(/^(data:)/)!==-1}function Fe(e,t){return`data:${t};base64,${e}`}async function Ae(e,t,i){const n=await fetch(e,t);if(n.status===404)throw new Error(`Resource "${n.url}" not found`);const r=await n.blob();return new Promise((s,a)=>{const c=new FileReader;c.onerror=a,c.onloadend=()=>{try{s(i({res:n,result:c.result}))}catch(h){a(h)}},c.readAsDataURL(r)})}const te={};function Xt(e,t,i){let n=e.replace(/\?.*/,"");return i&&(n=e),/ttf|otf|eot|woff2?/i.test(n)&&(n=n.replace(/.*\//,"")),t?`[${t}]${n}`:n}async function se(e,t,i){const n=Xt(e,t,i.includeQueryParams);if(te[n]!=null)return te[n];i.cacheBust&&(e+=(/\?/.test(e)?"&":"?")+new Date().getTime());let r;try{const s=await Ae(e,i.fetchRequestInit,({res:a,result:c})=>(t||(t=a.headers.get("Content-Type")||""),Vt(c)));r=Fe(s,t)}catch(s){r=i.imagePlaceholder||"";let a=`Failed to fetch resource: ${e}`;s&&(a=typeof s=="string"?s:s.message),a&&console.warn(a)}return te[n]=r,r}async function Gt(e){const t=e.toDataURL();return t==="data:,"?e.cloneNode(!1):G(t)}async function qt(e,t){if(e.currentSrc){const s=document.createElement("canvas"),a=s.getContext("2d");s.width=e.clientWidth,s.height=e.clientHeight,a==null||a.drawImage(e,0,0,s.width,s.height);const c=s.toDataURL();return G(c)}const i=e.poster,n=re(i),r=await se(i,n,t);return G(r)}async function Yt(e){var t;try{if(!((t=e==null?void 0:e.contentDocument)===null||t===void 0)&&t.body)return await q(e.contentDocument.body,{},!0)}catch{}return e.cloneNode(!1)}async function Jt(e,t){return m(e,HTMLCanvasElement)?Gt(e):m(e,HTMLVideoElement)?qt(e,t):m(e,HTMLIFrameElement)?Yt(e):e.cloneNode(!1)}const Kt=e=>e.tagName!=null&&e.tagName.toUpperCase()==="SLOT";async function Qt(e,t,i){var n,r;let s=[];return Kt(e)&&e.assignedNodes?s=v(e.assignedNodes()):m(e,HTMLIFrameElement)&&(!((n=e.contentDocument)===null||n===void 0)&&n.body)?s=v(e.contentDocument.body.childNodes):s=v(((r=e.shadowRoot)!==null&&r!==void 0?r:e).childNodes),s.length===0||m(e,HTMLVideoElement)||await s.reduce((a,c)=>a.then(()=>q(c,i)).then(h=>{h&&t.appendChild(h)}),Promise.resolve()),t}function Zt(e,t){const i=t.style;if(!i)return;const n=window.getComputedStyle(e);n.cssText?(i.cssText=n.cssText,i.transformOrigin=n.transformOrigin):v(n).forEach(r=>{let s=n.getPropertyValue(r);r==="font-size"&&s.endsWith("px")&&(s=`${Math.floor(parseFloat(s.substring(0,s.length-2)))-.1}px`),m(e,HTMLIFrameElement)&&r==="display"&&s==="inline"&&(s="block"),r==="d"&&t.getAttribute("d")&&(s=`path(${t.getAttribute("d")})`),i.setProperty(r,s,n.getPropertyPriority(r))})}function Nt(e,t){m(e,HTMLTextAreaElement)&&(t.innerHTML=e.value),m(e,HTMLInputElement)&&t.setAttribute("value",e.value)}function en(e,t){if(m(e,HTMLSelectElement)){const i=t,n=Array.from(i.children).find(r=>e.value===r.getAttribute("value"));n&&n.setAttribute("selected","")}}function tn(e,t){return m(t,Element)&&(Zt(e,t),Ht(e,t),Nt(e,t),en(e,t)),t}async function nn(e,t){const i=e.querySelectorAll?e.querySelectorAll("use"):[];if(i.length===0)return e;const n={};for(let s=0;s<i.length;s++){const c=i[s].getAttribute("xlink:href");if(c){const h=e.querySelector(c),w=document.querySelector(c);!h&&w&&!n[c]&&(n[c]=await q(w,t,!0))}}const r=Object.values(n);if(r.length){const s="http://www.w3.org/1999/xhtml",a=document.createElementNS(s,"svg");a.setAttribute("xmlns",s),a.style.position="absolute",a.style.width="0",a.style.height="0",a.style.overflow="hidden",a.style.display="none";const c=document.createElementNS(s,"defs");a.appendChild(c);for(let h=0;h<r.length;h++)c.appendChild(r[h]);e.appendChild(a)}return e}async function q(e,t,i){return!i&&t.filter&&!t.filter(e)?null:Promise.resolve(e).then(n=>Jt(n,t)).then(n=>Qt(e,n,t)).then(n=>tn(e,n)).then(n=>nn(n,t))}const Ue=/url\((['"]?)([^'"]+?)\1\)/g,on=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,rn=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function sn(e){const t=e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return new RegExp(`(url\\(['"]?)(${t})(['"]?\\))`,"g")}function an(e){const t=[];return e.replace(Ue,(i,n,r)=>(t.push(r),i)),t.filter(i=>!oe(i))}async function cn(e,t,i,n,r){try{const s=i?Tt(t,i):t,a=re(t);let c;if(r){const h=await r(s);c=Fe(h,a)}else c=await se(s,a,n);return e.replace(sn(t),`$1${c}$3`)}catch{}return e}function ln(e,{preferredFontFormat:t}){return t?e.replace(rn,i=>{for(;;){const[n,,r]=on.exec(i)||[];if(!r)return"";if(r===t)return`src: ${n};`}}):e}function Me(e){return e.search(Ue)!==-1}async function He(e,t,i){if(!Me(e))return e;const n=ln(e,i);return an(n).reduce((s,a)=>s.then(c=>cn(c,a,t,i)),Promise.resolve(n))}async function W(e,t,i){var n;const r=(n=t.style)===null||n===void 0?void 0:n.getPropertyValue(e);if(r){const s=await He(r,null,i);return t.style.setProperty(e,s,t.style.getPropertyPriority(e)),!0}return!1}async function dn(e,t){await W("background",e,t)||await W("background-image",e,t),await W("mask",e,t)||await W("mask-image",e,t)}async function un(e,t){const i=m(e,HTMLImageElement);if(!(i&&!oe(e.src))&&!(m(e,SVGImageElement)&&!oe(e.href.baseVal)))return;const n=i?e.src:e.href.baseVal,r=await se(n,re(n),t);await new Promise((s,a)=>{e.onload=s,e.onerror=a;const c=e;c.decode&&(c.decode=s),c.loading==="lazy"&&(c.loading="eager"),i?(e.srcset="",e.src=r):e.href.baseVal=r})}async function hn(e,t){const n=v(e.childNodes).map(r=>Oe(r,t));await Promise.all(n).then(()=>e)}async function Oe(e,t){m(e,Element)&&(await dn(e,t),await un(e,t),await hn(e,t))}function pn(e,t){const{style:i}=e;t.backgroundColor&&(i.backgroundColor=t.backgroundColor),t.width&&(i.width=`${t.width}px`),t.height&&(i.height=`${t.height}px`);const n=t.style;return n!=null&&Object.keys(n).forEach(r=>{i[r]=n[r]}),e}const Ee={};async function ke(e){let t=Ee[e];if(t!=null)return t;const n=await(await fetch(e)).text();return t={url:e,cssText:n},Ee[e]=t,t}async function Pe(e,t){let i=e.cssText;const n=/url\(["']?([^"')]+)["']?\)/g,s=(i.match(/url\([^)]+\)/g)||[]).map(async a=>{let c=a.replace(n,"$1");return c.startsWith("https://")||(c=new URL(c,e.url).href),Ae(c,t.fetchRequestInit,({result:h})=>(i=i.replace(a,`url(${h})`),[a,h]))});return Promise.all(s).then(()=>i)}function $e(e){if(e==null)return[];const t=[],i=/(\/\*[\s\S]*?\*\/)/gi;let n=e.replace(i,"");const r=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){const h=r.exec(n);if(h===null)break;t.push(h[0])}n=n.replace(r,"");const s=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,a="((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})",c=new RegExp(a,"gi");for(;;){let h=s.exec(n);if(h===null){if(h=c.exec(n),h===null)break;s.lastIndex=c.lastIndex}else c.lastIndex=s.lastIndex;t.push(h[0])}return t}async function gn(e,t){const i=[],n=[];return e.forEach(r=>{if("cssRules"in r)try{v(r.cssRules||[]).forEach((s,a)=>{if(s.type===CSSRule.IMPORT_RULE){let c=a+1;const h=s.href,w=ke(h).then(x=>Pe(x,t)).then(x=>$e(x).forEach(j=>{try{r.insertRule(j,j.startsWith("@import")?c+=1:r.cssRules.length)}catch($){console.error("Error inserting rule from remote css",{rule:j,error:$})}})).catch(x=>{console.error("Error loading remote css",x.toString())});n.push(w)}})}catch(s){const a=e.find(c=>c.href==null)||document.styleSheets[0];r.href!=null&&n.push(ke(r.href).then(c=>Pe(c,t)).then(c=>$e(c).forEach(h=>{a.insertRule(h,r.cssRules.length)})).catch(c=>{console.error("Error loading remote stylesheet",c)})),console.error("Error inlining remote css file",s)}}),Promise.all(n).then(()=>(e.forEach(r=>{if("cssRules"in r)try{v(r.cssRules||[]).forEach(s=>{i.push(s)})}catch(s){console.error(`Error while reading CSS rules from ${r.href}`,s)}}),i))}function fn(e){return e.filter(t=>t.type===CSSRule.FONT_FACE_RULE).filter(t=>Me(t.style.getPropertyValue("src")))}async function xn(e,t){if(e.ownerDocument==null)throw new Error("Provided element is not within a Document");const i=v(e.ownerDocument.styleSheets),n=await gn(i,t);return fn(n)}async function mn(e,t){const i=await xn(e,t);return(await Promise.all(i.map(r=>{const s=r.parentStyleSheet?r.parentStyleSheet.href:null;return He(r.cssText,s,t)}))).join(`
`)}async function bn(e,t){const i=t.fontEmbedCSS!=null?t.fontEmbedCSS:t.skipFonts?null:await mn(e,t);if(i){const n=document.createElement("style"),r=document.createTextNode(i);n.appendChild(r),e.firstChild?e.insertBefore(n,e.firstChild):e.appendChild(n)}}async function wn(e,t={}){const{width:i,height:n}=_e(e,t),r=await q(e,t,!0);return await bn(r,t),await Oe(r,t),pn(r,t),await Ft(r,i,n)}async function yn(e,t={}){const{width:i,height:n}=_e(e,t),r=await wn(e,t),s=await G(r),a=document.createElement("canvas"),c=a.getContext("2d"),h=t.pixelRatio||zt(),w=t.canvasWidth||i,x=t.canvasHeight||n;return a.width=w*h,a.height=x*h,t.skipAutoScale||Dt(a),a.style.width=`${w}`,a.style.height=`${x}`,t.backgroundColor&&(c.fillStyle=t.backgroundColor,c.fillRect(0,0,a.width,a.height)),c.drawImage(s,0,0,a.width,a.height),a}async function Sn(e,t={}){return(await yn(e,t)).toDataURL("image/jpeg",t.quality||1)}const vn=ft`
  to {
    background-position: -20px 0, 20px 0, 0 20px, 0 -20px;
  }
`,We=l.div`
  display: none;
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  border: 2px dashed #8d8d8d;
  animation: ${vn} 2s linear infinite;
`,jn=l.div`
  position: relative;
  display: inline-block;
  padding: 5px;
  cursor: move;

  onMouseDown

= {
  handleResizeMouseDown
}

  &:hover ${We} {
    display: block;
  }
`,R=l.div`
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: #8d8d8d;
  z-index: 10;
  cursor: ${e=>e.isRotateMode?"cell":"default"};

  &.top {
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
  }

  &.right {
    top: 50%;
    right: -5px;
    transform: translateY(-50%);
  }

  &.bottom {
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
  }

  &.left {
    top: 50%;
    left: -5px;
    transform: translateY(-50%);
  }

  &.top-left {
    top: -5px;
    left: -5px;
  }

  &.top-right {
    top: -5px;
    right: -5px;
  }

  &.bottom-right {
    bottom: -5px;
    right: -5px;
  }

  &.bottom-left {
    bottom: -5px;
    left: -5px;
  }

  &.top,
  &.bottom {
    cursor: ns-resize;
  }

  &.right,
  &.left {
    cursor: ew-resize;
  }

  &.top-left,
  &.bottom-right {
    cursor: nwse-resize;
  }

  &.top-right,
  &.bottom-left {
    cursor: nesw-resize;
  }
`;l.div`
  width: 800px;
  height: 150px;
  background-color: ${e=>e.backgroundColor};
  position: relative;
  overflow: hidden;
`;l.input`
  width: ${e=>e.width?e.width:"200px"};
  height: ${e=>e.height?e.height:"30px"};
  font-size: ${e=>e.fontSize?e.fontSize:"14pt"};
  padding: 10px;
`;const Cn=l.div`
  width: ${e=>e.width?e.width:"fit-content"};
  height: ${e=>e.height?e.height:"30px"};
  font-size: ${e=>e.fontSize?e.fontSize:"14pt"};
  padding: 5px;
  border: 1px solid transparent;
  cursor: text;
  position: relative;
  z-index: 1;
  transform: ${e=>`rotate(${e.rotationAngle}deg)`};
  transform-origin: center;
  color: ${e=>e.textColor?e.textColor:"#ededed"};

  &:focus {
    outline: none;
    border: 1px solid #8d8d8d;
  }
`;l.div`
  position: absolute;
  cursor: move;
  display: flex;
  align-items: center;
  border: 1px solid #ffffff;
`;l.div`
  resize: both;
  overflow: auto;
  font-size: 24px;
  background-color: rgba(255, 255, 255, 0);
  padding: 10px;
  min-width: 50px;
  min-height: 50px;
`;const Rn=l.div`
  margin: 15px 0;
`,En=l.img`
  width: 463px;
  border: 2px dashed #ffffff;
  &:hover {
    border: 2px dashed #0177c1;
  }
`,P=l.button`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #f4f6f8;
  border: none;
  color: #0177c1;
  gap: 5px;
  margin-bottom: 20px;
  padding: 5px;
  cursor: pointer;
`,kn=l.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`,ne=l.div`
  position: relative;
  display: inline-block;
`,V=l.div`
  position: absolute;
  background-color: white;
  padding: 20px;
  z-index: 999;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  display: ${e=>e.hidden?"none":"block"};
  width: ${e=>e.width?e.width:"fit-content"};
  top: ${e=>e.top};
  left: ${e=>e.left};
`,Pn=l.div`
  display: flex;
  flex-wrap: wrap;
`,$n=l.div`
  width: 30px;
  height: 30px;
  background-color: ${e=>e.color};
  cursor: pointer;
  margin: 5px;
  border-radius: 4px;
`,Tn=l.div`
  position: relative;
  width: ${e=>e.width?e.width:"800px"};
  height: ${e=>e.height?e.height:"150px"};
  background-color: ${e=>e.backgroundColor?e.backgroundColor:""};
  background-image: url(${e=>e.backgroundImage?e.backgroundImage:""});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
`,Ve=l.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s linear;
`,Te=l.div`
  position: absolute;
  width: ${e=>e.width?e.width:"120px"};
  height: ${e=>e.height?e.height:"120px"};
  left: ${e=>e.position_x?e.position_x:"20px"};
  top: ${e=>e.position_y?e.position_y:"15px"};
  background-color: ${e=>e.backgroundColor?e.backgroundColor:""};
  background-image: url(${e=>e.backgroundImage?e.backgroundImage:""});
  border-radius: ${e=>e.radius?e.radius:"5px"};
  overflow: hidden;

  &:hover ${Ve} {
    visibility: visible;
    opacity: 1;
  }
`,Le=l.img`
  max-width: 100%;
  max-height: 100%;
`,Ln=l.div`
  position: relative;
`,Ie=l.div`
  text-align: center;
  font-weight: bold;
  font-size: 14pt;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #d2d2d2;
`,ie=l.div`
  cursor: pointer;
  color: #000000;
  //border-bottom: none;
  margin-bottom: 20px;
  &:hover {
    color: #0177c1;
    //border-bottom: 1px solid #0177c1;
    font-weight: bold;
  }
`,In={nameBanner:"",templateImageBanner:"",width:"",height:"",textHeader:{text:"",fontSize:0,textColor:"",width:"",height:"",position_x:"",position_y:""},textDescription:{text:"",fontSize:0,textColor:"",width:"",height:"",position_x:"",position_y:""},colorBackground:"",imageBackground:"",imageProduct:{image:"",position_x:"",position_y:"",width:"",height:"",radius:""},imageLogo:{image:"",position_x:"",position_y:"",width:"",height:"",radius:""}},Bn=l.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.53);
  backdrop-filter: blur(5px);
  z-index: 10;
`,zn=l.div`
  position: relative;
  width: 1000px;
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #ebedf5;
`,Dn=l.div`
  position: absolute;
  width: 25px;
  height: 25px;
  top: 10px;
  right: 10px;
  font-size: 25pt;
  cursor: pointer;

  &:hover {
    color: darkgrey;
  }
`,_n=["#FFC0CB","#ADD8E6","#90EE90","#FFFACD","#D3D3D3","#FFB6C1","#E6E6FA","#FFEFD5","#FFE4B5","#F5DEB3"],Fn=()=>{const{t:e}=xt(),[t,i]=u.useState("#2463BF"),[n,r]=u.useState("");u.useState(null);const[s,a]=u.useState(""),[c,h]=u.useState("");u.useState("");const[w,x]=u.useState(!1),[j,$]=u.useState(!1),[z,T]=u.useState(!1),[D,_]=u.useState(!1),[L,F]=u.useState(!1),[I,p]=u.useState(!1);u.useState(1),u.useState(0);const[C,A]=u.useState({x:0,y:0}),[ae,ce]=u.useState(!1),[li,Xe]=u.useState({x:0,y:0}),[Ge,di]=u.useState(0),[Y,qe]=u.useState(1),J=H.useRef(null),K=H.useRef(null),le=H.useRef(null),[f,B]=u.useState(In),[de,Ye]=u.useState([]),[ui,Je]=u.useState({top:0,left:0,right:0,bottom:0}),[ue,Ke]=u.useState({width:200,height:50}),Qe=H.useRef(null);u.useState(!1);const[k,Ze]=u.useState({mouseX:0,mouseY:0,width:0,height:0}),[Q,he]=u.useState(""),pe=u.useRef(null),Z=u.useRef(null),Ne=d=>{if(!Z.current)return;const g=Z.current.getContext("2d");if(!g)return;const y=new Image;y.onload=()=>{g.drawImage(y,0,0,800,150)},y.src=d},et=async()=>{const d=pe.current;if(d)try{const g=await Sn(d,{quality:.95});Ne(g)}catch(g){console.error("Ошибка при генерации изображения:",g)}};u.useEffect(()=>{(async()=>{const g=await kt("main_page_templates");Ye(g.templates),B(g.templates[0])})()},[]);const tt=()=>{et(),p(!I)},nt=(d,g)=>{d.stopPropagation(),Ze({mouseX:d.clientX,mouseY:d.clientY,width:ue.width,height:ue.height}),he(g),document.addEventListener("mousemove",ge),document.addEventListener("mouseup",fe)},ge=d=>{if(!Q)return;const g=d.clientX-k.mouseX;d.clientY-k.mouseY;let y=k.width;const U=k.height;Q.includes("right")?y=Math.max(50,k.width+g):Q.includes("left")&&(y=Math.max(50,k.width-g)),Ke({width:y,height:U})},fe=()=>{document.removeEventListener("mousemove",ge),document.removeEventListener("mouseup",fe),he("")},it=d=>{Xe({x:d.clientX-C.x,y:d.clientY-C.y}),ce(!0)},ot=d=>{},rt=()=>{ce(!1)};u.useEffect(()=>{if(Y){const d=document.getElementById("banner-container");if(d){const g=d.getBoundingClientRect();Je({top:g.top,left:g.left,right:g.right,bottom:g.bottom})}}},[Y]),u.useEffect(()=>(document.addEventListener("mousedown",xe),()=>{document.removeEventListener("mousedown",xe)}),[]);const xe=d=>{J.current&&!J.current.contains(d.target)&&x(!1),K.current&&!K.current.contains(d.target)&&$(!1),le.current&&!le.current.contains(d.target)&&T(!1)},st=d=>{qe(d);const g=de.find(y=>y.id===d);g&&(B(g),i(g.colorBackground)),x(!1)},at=d=>{r(""),i(d),T(!1)},me=d=>{h(d)},ct=()=>{F(!L)},N=d=>{const g=document.createElement("input");g.type="file",g.accept="image/*",g.onchange=y=>{const U=y.target,be=U.files?U.files[0]:null;if(be){const we=new FileReader;we.onload=gt=>{var ye;const M=(ye=gt.target)==null?void 0:ye.result;d==="background"?(r(M),i(""),B(E=>({...E,imageBackground:M}))):d==="product"?B(E=>({...E,imageProduct:{...E.imageProduct,image:M}})):d==="logo"&&B(E=>({...E,imageLogo:{...E.imageLogo,image:M}}))},we.readAsDataURL(be)}},g.click(),_(!1)},lt=()=>{F(!0)},dt=()=>x(!w),ut=()=>$(!j),ht=()=>T(!z),pt=()=>_(!D);return o.jsxs("div",{children:[o.jsxs(kn,{children:[o.jsxs(ne,{children:[o.jsxs(P,{onClick:dt,children:[o.jsx(St,{style:{fontSize:"20px"}}),"Шаблон"]}),o.jsxs(V,{width:"500px",hidden:!w,top:"40px",left:"10px",ref:J,children:[o.jsx(Ie,{children:"Выберите шаблон"}),de.map(d=>o.jsx(Rn,{onClick:()=>st(d.id),children:o.jsx(En,{src:d.templateImageBanner,alt:""})},d.id))]})]}),o.jsxs(P,{onClick:ht,children:[o.jsx(vt,{style:{fontSize:"20px"}}),"Фон"]}),o.jsxs(V,{hidden:!z,top:"243px",left:"330px",children:[o.jsx("h2",{children:"Выберите цвет фона"}),o.jsx(Pn,{children:_n.map(d=>o.jsx($n,{color:d,onClick:()=>at(d)},d))})]}),o.jsxs(ne,{children:[o.jsxs(P,{onClick:ut,children:[o.jsx(jt,{style:{fontSize:"20px"}}),"Текст"]}),o.jsxs(V,{hidden:!j,top:"40px",left:"10px",ref:K,children:[o.jsx("h2",{children:"Выберите текст"}),o.jsx("button",{onClick:()=>me("Default Text"),children:"Default Text"}),o.jsx("button",{onClick:()=>me("Header Text"),children:"Header Text"}),o.jsx(ne,{children:o.jsx(P,{onClick:ct,children:L?"Закрепить":"Редактировать"})})]})]}),o.jsxs(P,{onClick:pt,children:[o.jsx(Ct,{style:{fontSize:"20px"}}),"Загрузить"]}),o.jsx(Ln,{children:o.jsxs(V,{hidden:!D,width:"250px",top:"20px",left:"-130px",children:[o.jsx(Ie,{children:"Загрузка изображений"}),o.jsx(ie,{onClick:()=>N("background"),children:"Загрузить фон баннера"}),o.jsx(ie,{onClick:()=>N("product"),children:"Загрузить изображение баннера"}),o.jsx(ie,{onClick:()=>N("logo"),children:"Загрузить логотип"})]})}),o.jsx(P,{onClick:tt,children:e("Preview")})]}),Y&&o.jsx(Tn,{ref:pe,id:"banner-container",width:f.width,height:f.height,backgroundColor:t,backgroundImage:n,children:o.jsxs(o.Fragment,{children:[o.jsxs(Te,{width:f.imageProduct.width,height:f.imageProduct.height,position_x:f.imageProduct.position_x,position_y:f.imageProduct.position_y,radius:f.imageProduct.radius,children:[o.jsx(Le,{src:f.imageProduct.image}),o.jsx(Ve,{children:o.jsx(Et,{})})]}),o.jsx(Te,{width:f.imageLogo.width,height:f.imageLogo.height,position_x:f.imageLogo.position_x,position_y:f.imageLogo.position_y,radius:f.imageLogo.radius,children:o.jsx(Le,{src:f.imageLogo.image})}),o.jsxs(jn,{onMouseDown:it,onMouseMove:ot,onMouseUp:rt,style:{transform:`translate(${C.x}px, ${C.y}px)`},children:[o.jsx(Cn,{contentEditable:L,rotationAngle:Ge,onClick:lt,ref:Qe,suppressContentEditableWarning:!0,width:f.textHeader.width,height:f.textHeader.height,fontSize:f.textHeader.fontSize+"pt",textColor:f.textHeader.textColor,children:s||"Please type here..."}),o.jsxs(We,{children:[o.jsx(R,{className:"top-left",direction:"top-left",onMouseDown:d=>nt(d,"top-left")}),o.jsx(R,{className:"top"}),o.jsx(R,{className:"top-right"}),o.jsx(R,{className:"right"}),o.jsx(R,{className:"bottom-right"}),o.jsx(R,{className:"bottom"}),o.jsx(R,{className:"bottom-left"}),o.jsx(R,{className:"left"})]})]})]})}),I&&o.jsx(Bn,{children:o.jsxs(zn,{children:[o.jsx(Dn,{onClick:()=>{p(!I)},children:"×"}),o.jsx("canvas",{ref:Z,width:"800",height:"150",style:{border:"1px solid black"}})]})})]})},An=l.section`
  //background-color: gray;
  margin-top: 40px;
  width: 100%;
  //transform: scale(0.9);
`,Be=l.header`
  display: flex;
  justify-content: left;
  height: 30px;
  font-size: 17pt;
  font-weight: bolder;
  margin-bottom: 20px;
`,Un=[{value:"Бессрочный",label:"Бессрочный"},{value:"Limited",label:"Limited"}],Mn=l.div`
  width: 300px;
  margin-top: 90px;
  margin-left: 380px;
`,Hn=l.div`
  width: 300px;
  margin-top: -45px;
`,On=l.div`
  width: 300px;
  margin-top: 50px;
`,Wn=l.div`
  margin-left: 385px;
  margin-top: -55px;
`,ze=l.div`
  //background-color: black;
  width: 1px;
  padding-bottom: 10px;
  font-weight: bold;
  font-size: 10pt;
`,Vn=l.div`
  margin-top: 35px;
`,Xn=l.div`
  margin-top: 30px;
  width: 300px;
`,Gn=l.div`
  margin-top: -63px;
  margin-left: 380px;
  width: 300px;
`,qn=l.div`
  margin-top: 50px;
  width: 300px;
`,Yn=l.div`
  margin-left: 380px;
  margin-top: -30px;
`,Jn=l.div`
  display: flex;
  justify-content: space-between;
  background-color: #f4f6f8;
  width: 100%;
  height: 240px;
  margin-top: 20px;
`,Kn=l.div`
  font-size: 13pt;
  font-weight: bold;
  margin-left: 20px;
  margin-top: 20px;
`,Qn=l.div`
  padding-right: 300px;
`,Zn=l.div`
  display: block;
  background-color: #f4f6f8;
  width: 100%;
  height: 240px;
  margin-top: 20px;
`,De=l.div`
  font-size: 13pt;
  font-weight: bold;
  margin-left: 20px;
  padding-top: 20px;
  margin-bottom: 20px;
`,Nn=l.div`
  font-size: 13pt;
  font-weight: bold;
  margin-left: 20px;
  padding-top: 70px;
`,ei=l.div`
  margin-top: -190px;
  margin-left: 750px;
  font-weight: bold;
  font-size: 16px;
`,ti=l.div`
  margin-left: 750px;
  padding-top: 40px;
  font-weight: bold;
  font-size: 16px;
`,ni=l.div`
  padding-left: 750px;
  padding-top: 100px;
  font-weight: bolder;
  font-size: 20px;
`,ii=l.div`
  height: 100%;
  width: 201px;
  margin-top: 20px;
`,oi=l.div`
  margin-top: -43px;
  padding-left: 250px;
  padding-bottom: 20px;
`,ri=()=>{const e=mt(bt),t=["Male","Female","All"],[i,n]=u.useState(t[0]);u.useState(!1);const[r,s]=u.useState(),[a,c]=u.useState(),[h,w]=u.useState(""),[x,j]=u.useState("");u.useState(""),u.useState(""),u.useState({juniors:"",middles:"",olds:""});const[$,z]=u.useState(!1);u.useState(!1),u.useState(!1);const T=p=>{if((p==null?void 0:p.value)==="add_audience")z(!0);else{const C=r==null?void 0:r.audience.find(A=>A.name_audience===p.value);c(C)}},D=p=>p?p.flatMap(C=>Object.entries(C).map(([A,ae])=>({label:ae,value:A}))):[],_=()=>{wt.get(`/banners/?action=get_audience&id_seller=${e.id}`).then(p=>p.data).then(p=>{p.Message||s(p)})};u.useEffect(()=>{_()},[]);const L=p=>{n(p)};function F(){}const I=()=>{};return o.jsx("div",{children:o.jsxs(An,{children:[o.jsx(Be,{children:"Добавить баннер на главную страницу TBUY"}),o.jsx(Fn,{}),o.jsx(Mn,{children:o.jsx(O,{label:"Дата запуска",options:Un,placeholder:"Empty",onChange:()=>{}})}),o.jsx(Hn,{children:o.jsx(ee,{large:"S",type:"text",label:S("Название баннера"),placeholder:`${S("Type here")}...`})}),o.jsx(On,{children:o.jsx(ee,{large:"S",type:"text",label:S("Ссылка на сайт    "),placeholder:`${S("Type here")}...`})}),o.jsxs(Wn,{children:[o.jsx(ze,{children:"Срок"}),o.jsx(ve,{})]}),o.jsxs(Vn,{children:[o.jsx(ze,{children:"Бюджет"}),o.jsx(ve,{})]}),o.jsx(Be,{children:"Аудитория"}),o.jsx(Xn,{children:r&&r.audience.length>0?o.jsx(O,{label:S("Название аудитории"),options:[...r.audience.map(p=>({label:p.name_audience,value:p.name_audience})),{label:S("Добавить аудиторию"),value:"add_audience"}],placeholder:"",onChange:p=>{T(p)}}):o.jsx(ee,{large:"S",type:"text",label:S("Название аудитории"),placeholder:`${S("Type here")}...`})}),o.jsx(Gn,{children:o.jsx(O,{label:"Регион",options:(a==null?void 0:a.regions.map(p=>({label:p.name_region,value:p.name_region})))||[],value:h,placeholder:"Выберите регион",onChange:p=>w(p==null?void 0:p.value)})}),o.jsx(qn,{children:o.jsx(O,{label:"Возраст",options:D(a==null?void 0:a.ages),value:x,placeholder:"Выберите возраст",onChange:p=>j(p.value)})}),o.jsx(Yn,{children:o.jsx(Pt,{options:t,selectedOption:a==null?void 0:a.gender,onChange:L})}),o.jsxs(Jn,{children:[o.jsx(Kn,{children:"Цена"}),o.jsx(Qn,{children:o.jsx($t,{})})]}),o.jsxs(Zn,{children:[o.jsx(De,{children:"Бюджет"}),o.jsx(De,{children:"Продолжительность"}),o.jsx(Nn,{children:"Итого:"}),o.jsx(ei,{children:"2500USD в день"}),o.jsx(ti,{children:"4 дня"}),o.jsx(ni,{children:"10000USD"})]}),o.jsx(ii,{children:o.jsx(Se,{style:{width:200},type:"submit",onClick:F,large:"S",appearance:"white",stretched:!0,variant:"bordered",children:S("Cancel")})}),o.jsx(oi,{children:o.jsx(Se,{style:{width:450},type:"submit",large:"S",appearance:"white",stretched:!0,variant:"primary",onClick:I,children:S("Send")})})]})})},si=l.section`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  width: 1200px;
  background-color: #ffffff;
`,ai=l.div`
  position: absolute;
`,ci=l.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-left: 20px;
  padding-top: 20px;
  font-size: 13pt;
  font-weight: bolder;
  cursor: pointer;
`,vi=()=>{const e=yt(),t=()=>{e("/personal")};return o.jsx("div",{children:o.jsxs(ai,{children:[o.jsxs(ci,{onClick:t,children:[o.jsx(Rt,{style:{fontSize:"30px"}}),"TO RETURN"]}),o.jsx(si,{children:o.jsx(ri,{})})]})})};export{vi as default};
