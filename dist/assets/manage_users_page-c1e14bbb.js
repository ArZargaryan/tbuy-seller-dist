import{r as T,q as rr,p as or,A as it,j as u,_ as A,E as nr,s as at,a9 as kr,z as ir,v as ar,w as sr,D as Qe,u as Me,e as Sr,a2 as Br}from"./index-786c574d.js";import{d as Lr}from"./MoreVert-b6d1ce42.js";import{r as lr,i as pr}from"./createSvgIcon-767dd3f6.js";import{T as Wr}from"./TableContainer-e57ec9fe.js";import{P as Nr}from"./Paper-0d57e966.js";import{T as Ir,a as _r,b as Ut,c as B,d as Hr}from"./TableRow-b6737e80.js";import{a as Ur,u as Fr,b as Ze}from"./useSlotProps-0bf0a99e.js";import{o as Ft,a as mt,f as Vt,u as Vr,b as zr,g as qr,e as Xr}from"./createSvgIcon-ccd3771d.js";import{b as Yr,G as zt,c as Gr}from"./Menu-0bae6528.js";import{I as ce}from"./IconButton-993b12e6.js";import{M as qt}from"./MenuItem-4e8fe90f.js";import"./react-is.production.min-a192e302.js";import"./ButtonBase-c77f3e05.js";import"./listItemIconClasses-0096aaac.js";import"./dividerClasses-a72384a6.js";import"./listItemTextClasses-4324c96d.js";const Kr={disableDefaultClasses:!1},Jr=T.createContext(Kr);function Qr(e){const{disableDefaultClasses:t}=T.useContext(Jr);return r=>t?"":e(r)}var N="top",F="bottom",V="right",I="left",yt="auto",Fe=[N,F,V,I],Ee="start",He="end",Zr="clippingParents",cr="viewport",We="popper",eo="reference",Xt=Fe.reduce(function(e,t){return e.concat([t+"-"+Ee,t+"-"+He])},[]),ur=[].concat(Fe,[yt]).reduce(function(e,t){return e.concat([t,t+"-"+Ee,t+"-"+He])},[]),to="beforeRead",ro="read",oo="afterRead",no="beforeMain",io="main",ao="afterMain",so="beforeWrite",lo="write",po="afterWrite",co=[to,ro,oo,no,io,ao,so,lo,po];function oe(e){return e?(e.nodeName||"").toLowerCase():null}function H(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function xe(e){var t=H(e).Element;return e instanceof t||e instanceof Element}function U(e){var t=H(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function xt(e){if(typeof ShadowRoot>"u")return!1;var t=H(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function uo(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var o=t.styles[r]||{},n=t.attributes[r]||{},i=t.elements[r];!U(i)||!oe(i)||(Object.assign(i.style,o),Object.keys(n).forEach(function(p){var s=n[p];s===!1?i.removeAttribute(p):i.setAttribute(p,s===!0?"":s)}))})}function fo(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(o){var n=t.elements[o],i=t.attributes[o]||{},p=Object.keys(t.styles.hasOwnProperty(o)?t.styles[o]:r[o]),s=p.reduce(function(a,f){return a[f]="",a},{});!U(n)||!oe(n)||(Object.assign(n.style,s),Object.keys(i).forEach(function(a){n.removeAttribute(a)}))})}}const vo={name:"applyStyles",enabled:!0,phase:"write",fn:uo,effect:fo,requires:["computeStyles"]};function re(e){return e.split("-")[0]}var ye=Math.max,nt=Math.min,Ce=Math.round;function ht(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function fr(){return!/^((?!chrome|android).)*safari/i.test(ht())}function Ae(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var o=e.getBoundingClientRect(),n=1,i=1;t&&U(e)&&(n=e.offsetWidth>0&&Ce(o.width)/e.offsetWidth||1,i=e.offsetHeight>0&&Ce(o.height)/e.offsetHeight||1);var p=xe(e)?H(e):window,s=p.visualViewport,a=!fr()&&r,f=(o.left+(a&&s?s.offsetLeft:0))/n,l=(o.top+(a&&s?s.offsetTop:0))/i,m=o.width/n,y=o.height/i;return{width:m,height:y,top:l,right:f+m,bottom:l+y,left:f,x:f,y:l}}function wt(e){var t=Ae(e),r=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:o}}function dr(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&xt(r)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function ae(e){return H(e).getComputedStyle(e)}function mo(e){return["table","td","th"].indexOf(oe(e))>=0}function de(e){return((xe(e)?e.ownerDocument:e.document)||window.document).documentElement}function st(e){return oe(e)==="html"?e:e.assignedSlot||e.parentNode||(xt(e)?e.host:null)||de(e)}function Yt(e){return!U(e)||ae(e).position==="fixed"?null:e.offsetParent}function ho(e){var t=/firefox/i.test(ht()),r=/Trident/i.test(ht());if(r&&U(e)){var o=ae(e);if(o.position==="fixed")return null}var n=st(e);for(xt(n)&&(n=n.host);U(n)&&["html","body"].indexOf(oe(n))<0;){var i=ae(n);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||t&&i.willChange==="filter"||t&&i.filter&&i.filter!=="none")return n;n=n.parentNode}return null}function Ve(e){for(var t=H(e),r=Yt(e);r&&mo(r)&&ae(r).position==="static";)r=Yt(r);return r&&(oe(r)==="html"||oe(r)==="body"&&ae(r).position==="static")?t:r||ho(e)||t}function Pt(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Ie(e,t,r){return ye(e,nt(t,r))}function go(e,t,r){var o=Ie(e,t,r);return o>r?r:o}function vr(){return{top:0,right:0,bottom:0,left:0}}function mr(e){return Object.assign({},vr(),e)}function hr(e,t){return t.reduce(function(r,o){return r[o]=e,r},{})}var bo=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,mr(typeof t!="number"?t:hr(t,Fe))};function yo(e){var t,r=e.state,o=e.name,n=e.options,i=r.elements.arrow,p=r.modifiersData.popperOffsets,s=re(r.placement),a=Pt(s),f=[I,V].indexOf(s)>=0,l=f?"height":"width";if(!(!i||!p)){var m=bo(n.padding,r),y=wt(i),c=a==="y"?N:I,x=a==="y"?F:V,v=r.rects.reference[l]+r.rects.reference[a]-p[a]-r.rects.popper[l],h=p[a]-r.rects.reference[a],O=Ve(i),E=O?a==="y"?O.clientHeight||0:O.clientWidth||0:0,w=v/2-h/2,d=m[c],b=E-y[l]-m[x],g=E/2-y[l]/2+w,R=Ie(d,g,b),$=a;r.modifiersData[o]=(t={},t[$]=R,t.centerOffset=R-g,t)}}function xo(e){var t=e.state,r=e.options,o=r.element,n=o===void 0?"[data-popper-arrow]":o;n!=null&&(typeof n=="string"&&(n=t.elements.popper.querySelector(n),!n)||dr(t.elements.popper,n)&&(t.elements.arrow=n))}const wo={name:"arrow",enabled:!0,phase:"main",fn:yo,effect:xo,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function $e(e){return e.split("-")[1]}var Po={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Oo(e,t){var r=e.x,o=e.y,n=t.devicePixelRatio||1;return{x:Ce(r*n)/n||0,y:Ce(o*n)/n||0}}function Gt(e){var t,r=e.popper,o=e.popperRect,n=e.placement,i=e.variation,p=e.offsets,s=e.position,a=e.gpuAcceleration,f=e.adaptive,l=e.roundOffsets,m=e.isFixed,y=p.x,c=y===void 0?0:y,x=p.y,v=x===void 0?0:x,h=typeof l=="function"?l({x:c,y:v}):{x:c,y:v};c=h.x,v=h.y;var O=p.hasOwnProperty("x"),E=p.hasOwnProperty("y"),w=I,d=N,b=window;if(f){var g=Ve(r),R="clientHeight",$="clientWidth";if(g===H(r)&&(g=de(r),ae(g).position!=="static"&&s==="absolute"&&(R="scrollHeight",$="scrollWidth")),g=g,n===N||(n===I||n===V)&&i===He){d=F;var C=m&&g===b&&b.visualViewport?b.visualViewport.height:g[R];v-=C-o.height,v*=a?1:-1}if(n===I||(n===N||n===F)&&i===He){w=V;var j=m&&g===b&&b.visualViewport?b.visualViewport.width:g[$];c-=j-o.width,c*=a?1:-1}}var D=Object.assign({position:s},f&&Po),L=l===!0?Oo({x:c,y:v},H(r)):{x:c,y:v};if(c=L.x,v=L.y,a){var k;return Object.assign({},D,(k={},k[d]=E?"0":"",k[w]=O?"0":"",k.transform=(b.devicePixelRatio||1)<=1?"translate("+c+"px, "+v+"px)":"translate3d("+c+"px, "+v+"px, 0)",k))}return Object.assign({},D,(t={},t[d]=E?v+"px":"",t[w]=O?c+"px":"",t.transform="",t))}function To(e){var t=e.state,r=e.options,o=r.gpuAcceleration,n=o===void 0?!0:o,i=r.adaptive,p=i===void 0?!0:i,s=r.roundOffsets,a=s===void 0?!0:s,f={placement:re(t.placement),variation:$e(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:n,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Gt(Object.assign({},f,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:p,roundOffsets:a})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Gt(Object.assign({},f,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:a})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const Ro={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:To,data:{}};var et={passive:!0};function jo(e){var t=e.state,r=e.instance,o=e.options,n=o.scroll,i=n===void 0?!0:n,p=o.resize,s=p===void 0?!0:p,a=H(t.elements.popper),f=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&f.forEach(function(l){l.addEventListener("scroll",r.update,et)}),s&&a.addEventListener("resize",r.update,et),function(){i&&f.forEach(function(l){l.removeEventListener("scroll",r.update,et)}),s&&a.removeEventListener("resize",r.update,et)}}const Eo={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:jo,data:{}};var Co={left:"right",right:"left",bottom:"top",top:"bottom"};function ot(e){return e.replace(/left|right|bottom|top/g,function(t){return Co[t]})}var Ao={start:"end",end:"start"};function Kt(e){return e.replace(/start|end/g,function(t){return Ao[t]})}function Ot(e){var t=H(e),r=t.pageXOffset,o=t.pageYOffset;return{scrollLeft:r,scrollTop:o}}function Tt(e){return Ae(de(e)).left+Ot(e).scrollLeft}function $o(e,t){var r=H(e),o=de(e),n=r.visualViewport,i=o.clientWidth,p=o.clientHeight,s=0,a=0;if(n){i=n.width,p=n.height;var f=fr();(f||!f&&t==="fixed")&&(s=n.offsetLeft,a=n.offsetTop)}return{width:i,height:p,x:s+Tt(e),y:a}}function Mo(e){var t,r=de(e),o=Ot(e),n=(t=e.ownerDocument)==null?void 0:t.body,i=ye(r.scrollWidth,r.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),p=ye(r.scrollHeight,r.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),s=-o.scrollLeft+Tt(e),a=-o.scrollTop;return ae(n||r).direction==="rtl"&&(s+=ye(r.clientWidth,n?n.clientWidth:0)-i),{width:i,height:p,x:s,y:a}}function Rt(e){var t=ae(e),r=t.overflow,o=t.overflowX,n=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+n+o)}function gr(e){return["html","body","#document"].indexOf(oe(e))>=0?e.ownerDocument.body:U(e)&&Rt(e)?e:gr(st(e))}function _e(e,t){var r;t===void 0&&(t=[]);var o=gr(e),n=o===((r=e.ownerDocument)==null?void 0:r.body),i=H(o),p=n?[i].concat(i.visualViewport||[],Rt(o)?o:[]):o,s=t.concat(p);return n?s:s.concat(_e(st(p)))}function gt(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Do(e,t){var r=Ae(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function Jt(e,t,r){return t===cr?gt($o(e,r)):xe(t)?Do(t,r):gt(Mo(de(e)))}function ko(e){var t=_e(st(e)),r=["absolute","fixed"].indexOf(ae(e).position)>=0,o=r&&U(e)?Ve(e):e;return xe(o)?t.filter(function(n){return xe(n)&&dr(n,o)&&oe(n)!=="body"}):[]}function So(e,t,r,o){var n=t==="clippingParents"?ko(e):[].concat(t),i=[].concat(n,[r]),p=i[0],s=i.reduce(function(a,f){var l=Jt(e,f,o);return a.top=ye(l.top,a.top),a.right=nt(l.right,a.right),a.bottom=nt(l.bottom,a.bottom),a.left=ye(l.left,a.left),a},Jt(e,p,o));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function br(e){var t=e.reference,r=e.element,o=e.placement,n=o?re(o):null,i=o?$e(o):null,p=t.x+t.width/2-r.width/2,s=t.y+t.height/2-r.height/2,a;switch(n){case N:a={x:p,y:t.y-r.height};break;case F:a={x:p,y:t.y+t.height};break;case V:a={x:t.x+t.width,y:s};break;case I:a={x:t.x-r.width,y:s};break;default:a={x:t.x,y:t.y}}var f=n?Pt(n):null;if(f!=null){var l=f==="y"?"height":"width";switch(i){case Ee:a[f]=a[f]-(t[l]/2-r[l]/2);break;case He:a[f]=a[f]+(t[l]/2-r[l]/2);break}}return a}function Ue(e,t){t===void 0&&(t={});var r=t,o=r.placement,n=o===void 0?e.placement:o,i=r.strategy,p=i===void 0?e.strategy:i,s=r.boundary,a=s===void 0?Zr:s,f=r.rootBoundary,l=f===void 0?cr:f,m=r.elementContext,y=m===void 0?We:m,c=r.altBoundary,x=c===void 0?!1:c,v=r.padding,h=v===void 0?0:v,O=mr(typeof h!="number"?h:hr(h,Fe)),E=y===We?eo:We,w=e.rects.popper,d=e.elements[x?E:y],b=So(xe(d)?d:d.contextElement||de(e.elements.popper),a,l,p),g=Ae(e.elements.reference),R=br({reference:g,element:w,strategy:"absolute",placement:n}),$=gt(Object.assign({},w,R)),C=y===We?$:g,j={top:b.top-C.top+O.top,bottom:C.bottom-b.bottom+O.bottom,left:b.left-C.left+O.left,right:C.right-b.right+O.right},D=e.modifiersData.offset;if(y===We&&D){var L=D[n];Object.keys(j).forEach(function(k){var z=[V,F].indexOf(k)>=0?1:-1,q=[N,F].indexOf(k)>=0?"y":"x";j[k]+=L[q]*z})}return j}function Bo(e,t){t===void 0&&(t={});var r=t,o=r.placement,n=r.boundary,i=r.rootBoundary,p=r.padding,s=r.flipVariations,a=r.allowedAutoPlacements,f=a===void 0?ur:a,l=$e(o),m=l?s?Xt:Xt.filter(function(x){return $e(x)===l}):Fe,y=m.filter(function(x){return f.indexOf(x)>=0});y.length===0&&(y=m);var c=y.reduce(function(x,v){return x[v]=Ue(e,{placement:v,boundary:n,rootBoundary:i,padding:p})[re(v)],x},{});return Object.keys(c).sort(function(x,v){return c[x]-c[v]})}function Lo(e){if(re(e)===yt)return[];var t=ot(e);return[Kt(e),t,Kt(t)]}function Wo(e){var t=e.state,r=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var n=r.mainAxis,i=n===void 0?!0:n,p=r.altAxis,s=p===void 0?!0:p,a=r.fallbackPlacements,f=r.padding,l=r.boundary,m=r.rootBoundary,y=r.altBoundary,c=r.flipVariations,x=c===void 0?!0:c,v=r.allowedAutoPlacements,h=t.options.placement,O=re(h),E=O===h,w=a||(E||!x?[ot(h)]:Lo(h)),d=[h].concat(w).reduce(function(ne,Q){return ne.concat(re(Q)===yt?Bo(t,{placement:Q,boundary:l,rootBoundary:m,padding:f,flipVariations:x,allowedAutoPlacements:v}):Q)},[]),b=t.rects.reference,g=t.rects.popper,R=new Map,$=!0,C=d[0],j=0;j<d.length;j++){var D=d[j],L=re(D),k=$e(D)===Ee,z=[N,F].indexOf(L)>=0,q=z?"width":"height",M=Ue(t,{placement:D,boundary:l,rootBoundary:m,altBoundary:y,padding:f}),S=z?k?V:I:k?F:N;b[q]>g[q]&&(S=ot(S));var J=ot(S),X=[];if(i&&X.push(M[L]<=0),s&&X.push(M[S]<=0,M[J]<=0),X.every(function(ne){return ne})){C=D,$=!1;break}R.set(D,X)}if($)for(var we=x?3:1,Pe=function(Q){var se=d.find(function(le){var W=R.get(le);if(W)return W.slice(0,Q).every(function(Y){return Y})});if(se)return C=se,"break"},ve=we;ve>0;ve--){var me=Pe(ve);if(me==="break")break}t.placement!==C&&(t.modifiersData[o]._skip=!0,t.placement=C,t.reset=!0)}}const No={name:"flip",enabled:!0,phase:"main",fn:Wo,requiresIfExists:["offset"],data:{_skip:!1}};function Qt(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function Zt(e){return[N,V,F,I].some(function(t){return e[t]>=0})}function Io(e){var t=e.state,r=e.name,o=t.rects.reference,n=t.rects.popper,i=t.modifiersData.preventOverflow,p=Ue(t,{elementContext:"reference"}),s=Ue(t,{altBoundary:!0}),a=Qt(p,o),f=Qt(s,n,i),l=Zt(a),m=Zt(f);t.modifiersData[r]={referenceClippingOffsets:a,popperEscapeOffsets:f,isReferenceHidden:l,hasPopperEscaped:m},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":m})}const _o={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Io};function Ho(e,t,r){var o=re(e),n=[I,N].indexOf(o)>=0?-1:1,i=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,p=i[0],s=i[1];return p=p||0,s=(s||0)*n,[I,V].indexOf(o)>=0?{x:s,y:p}:{x:p,y:s}}function Uo(e){var t=e.state,r=e.options,o=e.name,n=r.offset,i=n===void 0?[0,0]:n,p=ur.reduce(function(l,m){return l[m]=Ho(m,t.rects,i),l},{}),s=p[t.placement],a=s.x,f=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=a,t.modifiersData.popperOffsets.y+=f),t.modifiersData[o]=p}const Fo={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Uo};function Vo(e){var t=e.state,r=e.name;t.modifiersData[r]=br({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const zo={name:"popperOffsets",enabled:!0,phase:"read",fn:Vo,data:{}};function qo(e){return e==="x"?"y":"x"}function Xo(e){var t=e.state,r=e.options,o=e.name,n=r.mainAxis,i=n===void 0?!0:n,p=r.altAxis,s=p===void 0?!1:p,a=r.boundary,f=r.rootBoundary,l=r.altBoundary,m=r.padding,y=r.tether,c=y===void 0?!0:y,x=r.tetherOffset,v=x===void 0?0:x,h=Ue(t,{boundary:a,rootBoundary:f,padding:m,altBoundary:l}),O=re(t.placement),E=$e(t.placement),w=!E,d=Pt(O),b=qo(d),g=t.modifiersData.popperOffsets,R=t.rects.reference,$=t.rects.popper,C=typeof v=="function"?v(Object.assign({},t.rects,{placement:t.placement})):v,j=typeof C=="number"?{mainAxis:C,altAxis:C}:Object.assign({mainAxis:0,altAxis:0},C),D=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,L={x:0,y:0};if(g){if(i){var k,z=d==="y"?N:I,q=d==="y"?F:V,M=d==="y"?"height":"width",S=g[d],J=S+h[z],X=S-h[q],we=c?-$[M]/2:0,Pe=E===Ee?R[M]:$[M],ve=E===Ee?-$[M]:-R[M],me=t.elements.arrow,ne=c&&me?wt(me):{width:0,height:0},Q=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:vr(),se=Q[z],le=Q[q],W=Ie(0,R[M],ne[M]),Y=w?R[M]/2-we-W-se-j.mainAxis:Pe-W-se-j.mainAxis,Oe=w?-R[M]/2+we+W+le+j.mainAxis:ve+W+le+j.mainAxis,Z=t.elements.arrow&&Ve(t.elements.arrow),lt=Z?d==="y"?Z.clientTop||0:Z.clientLeft||0:0,ze=(k=D==null?void 0:D[d])!=null?k:0,qe=S+Y-ze-lt,ee=S+Oe-ze,Te=Ie(c?nt(J,qe):J,S,c?ye(X,ee):X);g[d]=Te,L[d]=Te-S}if(s){var Xe,he=d==="x"?N:I,Ye=d==="x"?F:V,G=g[b],Re=b==="y"?"height":"width",ge=G+h[he],je=G-h[Ye],pe=[N,I].indexOf(O)!==-1,be=(Xe=D==null?void 0:D[b])!=null?Xe:0,te=pe?ge:G-R[Re]-$[Re]-be+j.altAxis,De=pe?G+R[Re]+$[Re]-be-j.altAxis:je,Ge=c&&pe?go(te,G,De):Ie(c?te:ge,G,c?De:je);g[b]=Ge,L[b]=Ge-G}t.modifiersData[o]=L}}const Yo={name:"preventOverflow",enabled:!0,phase:"main",fn:Xo,requiresIfExists:["offset"]};function Go(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Ko(e){return e===H(e)||!U(e)?Ot(e):Go(e)}function Jo(e){var t=e.getBoundingClientRect(),r=Ce(t.width)/e.offsetWidth||1,o=Ce(t.height)/e.offsetHeight||1;return r!==1||o!==1}function Qo(e,t,r){r===void 0&&(r=!1);var o=U(t),n=U(t)&&Jo(t),i=de(t),p=Ae(e,n,r),s={scrollLeft:0,scrollTop:0},a={x:0,y:0};return(o||!o&&!r)&&((oe(t)!=="body"||Rt(i))&&(s=Ko(t)),U(t)?(a=Ae(t,!0),a.x+=t.clientLeft,a.y+=t.clientTop):i&&(a.x=Tt(i))),{x:p.left+s.scrollLeft-a.x,y:p.top+s.scrollTop-a.y,width:p.width,height:p.height}}function Zo(e){var t=new Map,r=new Set,o=[];e.forEach(function(i){t.set(i.name,i)});function n(i){r.add(i.name);var p=[].concat(i.requires||[],i.requiresIfExists||[]);p.forEach(function(s){if(!r.has(s)){var a=t.get(s);a&&n(a)}}),o.push(i)}return e.forEach(function(i){r.has(i.name)||n(i)}),o}function en(e){var t=Zo(e);return co.reduce(function(r,o){return r.concat(t.filter(function(n){return n.phase===o}))},[])}function tn(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function rn(e){var t=e.reduce(function(r,o){var n=r[o.name];return r[o.name]=n?Object.assign({},n,o,{options:Object.assign({},n.options,o.options),data:Object.assign({},n.data,o.data)}):o,r},{});return Object.keys(t).map(function(r){return t[r]})}var er={placement:"bottom",modifiers:[],strategy:"absolute"};function tr(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(o){return!(o&&typeof o.getBoundingClientRect=="function")})}function on(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,o=r===void 0?[]:r,n=t.defaultOptions,i=n===void 0?er:n;return function(s,a,f){f===void 0&&(f=i);var l={placement:"bottom",orderedModifiers:[],options:Object.assign({},er,i),modifiersData:{},elements:{reference:s,popper:a},attributes:{},styles:{}},m=[],y=!1,c={state:l,setOptions:function(O){var E=typeof O=="function"?O(l.options):O;v(),l.options=Object.assign({},i,l.options,E),l.scrollParents={reference:xe(s)?_e(s):s.contextElement?_e(s.contextElement):[],popper:_e(a)};var w=en(rn([].concat(o,l.options.modifiers)));return l.orderedModifiers=w.filter(function(d){return d.enabled}),x(),c.update()},forceUpdate:function(){if(!y){var O=l.elements,E=O.reference,w=O.popper;if(tr(E,w)){l.rects={reference:Qo(E,Ve(w),l.options.strategy==="fixed"),popper:wt(w)},l.reset=!1,l.placement=l.options.placement,l.orderedModifiers.forEach(function(j){return l.modifiersData[j.name]=Object.assign({},j.data)});for(var d=0;d<l.orderedModifiers.length;d++){if(l.reset===!0){l.reset=!1,d=-1;continue}var b=l.orderedModifiers[d],g=b.fn,R=b.options,$=R===void 0?{}:R,C=b.name;typeof g=="function"&&(l=g({state:l,options:$,name:C,instance:c})||l)}}}},update:tn(function(){return new Promise(function(h){c.forceUpdate(),h(l)})}),destroy:function(){v(),y=!0}};if(!tr(s,a))return c;c.setOptions(f).then(function(h){!y&&f.onFirstUpdate&&f.onFirstUpdate(h)});function x(){l.orderedModifiers.forEach(function(h){var O=h.name,E=h.options,w=E===void 0?{}:E,d=h.effect;if(typeof d=="function"){var b=d({state:l,name:O,instance:c,options:w}),g=function(){};m.push(b||g)}})}function v(){m.forEach(function(h){return h()}),m=[]}return c}}var nn=[Eo,zo,Ro,vo,Fo,No,Yo,wo,_o],an=on({defaultModifiers:nn});function sn(e){return rr("MuiPopper",e)}or("MuiPopper",["root"]);const ln=["anchorEl","children","direction","disablePortal","modifiers","open","placement","popperOptions","popperRef","slotProps","slots","TransitionProps","ownerState"],pn=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition","slotProps","slots"];function cn(e,t){if(t==="ltr")return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}function bt(e){return typeof e=="function"?e():e}function un(e){return e.nodeType!==void 0}const fn=()=>nr({root:["root"]},Qr(sn)),dn={},vn=T.forwardRef(function(t,r){var o;const{anchorEl:n,children:i,direction:p,disablePortal:s,modifiers:a,open:f,placement:l,popperOptions:m,popperRef:y,slotProps:c={},slots:x={},TransitionProps:v}=t,h=it(t,ln),O=T.useRef(null),E=mt(O,r),w=T.useRef(null),d=mt(w,y),b=T.useRef(d);Vt(()=>{b.current=d},[d]),T.useImperativeHandle(y,()=>w.current,[]);const g=cn(l,p),[R,$]=T.useState(g),[C,j]=T.useState(bt(n));T.useEffect(()=>{w.current&&w.current.forceUpdate()}),T.useEffect(()=>{n&&j(bt(n))},[n]),Vt(()=>{if(!C||!f)return;const q=J=>{$(J.placement)};let M=[{name:"preventOverflow",options:{altBoundary:s}},{name:"flip",options:{altBoundary:s}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:J})=>{q(J)}}];a!=null&&(M=M.concat(a)),m&&m.modifiers!=null&&(M=M.concat(m.modifiers));const S=an(C,O.current,A({placement:g},m,{modifiers:M}));return b.current(S),()=>{S.destroy(),b.current(null)}},[C,s,a,f,m,g]);const D={placement:R};v!==null&&(D.TransitionProps=v);const L=fn(),k=(o=x.root)!=null?o:"div",z=Ur({elementType:k,externalSlotProps:c.root,externalForwardedProps:h,additionalProps:{role:"tooltip",ref:E},ownerState:t,className:L.root});return u.jsx(k,A({},z,{children:typeof i=="function"?i(D):i}))}),mn=T.forwardRef(function(t,r){const{anchorEl:o,children:n,container:i,direction:p="ltr",disablePortal:s=!1,keepMounted:a=!1,modifiers:f,open:l,placement:m="bottom",popperOptions:y=dn,popperRef:c,style:x,transition:v=!1,slotProps:h={},slots:O={}}=t,E=it(t,pn),[w,d]=T.useState(!0),b=()=>{d(!1)},g=()=>{d(!0)};if(!a&&!l&&(!v||w))return null;let R;if(i)R=i;else if(o){const j=bt(o);R=j&&un(j)?Ft(j).body:Ft(null).body}const $=!l&&a&&(!v||w)?"none":void 0,C=v?{in:l,onEnter:b,onExited:g}:void 0;return u.jsx(Yr,{disablePortal:s,container:R,children:u.jsx(vn,A({anchorEl:o,direction:p,disablePortal:s,modifiers:f,ref:r,open:v?!w:l,placement:m,popperOptions:y,popperRef:c,slotProps:h,slots:O},E,{style:A({position:"fixed",top:0,left:0,display:$},x),TransitionProps:C,children:n}))})}),hn=["anchorEl","component","components","componentsProps","container","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","transition","slots","slotProps"],gn=at(mn,{name:"MuiPopper",slot:"Root",overridesResolver:(e,t)=>t.root})({}),bn=T.forwardRef(function(t,r){var o;const n=kr(),i=ir({props:t,name:"MuiPopper"}),{anchorEl:p,component:s,components:a,componentsProps:f,container:l,disablePortal:m,keepMounted:y,modifiers:c,open:x,placement:v,popperOptions:h,popperRef:O,transition:E,slots:w,slotProps:d}=i,b=it(i,hn),g=(o=w==null?void 0:w.root)!=null?o:a==null?void 0:a.Root,R=A({anchorEl:p,container:l,disablePortal:m,keepMounted:y,modifiers:c,open:x,placement:v,popperOptions:h,popperRef:O,transition:E},b);return u.jsx(gn,A({as:s,direction:n==null?void 0:n.direction,slots:{root:g},slotProps:d??f},R,{ref:r}))}),yr=bn;function yn(e){return rr("MuiTooltip",e)}const xn=or("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]),fe=xn,wn=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","slotProps","slots","title","TransitionComponent","TransitionProps"];function Pn(e){return Math.round(e*1e5)/1e5}const On=e=>{const{classes:t,disableInteractive:r,arrow:o,touch:n,placement:i}=e,p={popper:["popper",!r&&"popperInteractive",o&&"popperArrow"],tooltip:["tooltip",o&&"tooltipArrow",n&&"touch",`tooltipPlacement${ar(i.split("-")[0])}`],arrow:["arrow"]};return nr(p,yn,t)},Tn=at(yr,{name:"MuiTooltip",slot:"Popper",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.popper,!r.disableInteractive&&t.popperInteractive,r.arrow&&t.popperArrow,!r.open&&t.popperClose]}})(({theme:e,ownerState:t,open:r})=>A({zIndex:(e.vars||e).zIndex.tooltip,pointerEvents:"none"},!t.disableInteractive&&{pointerEvents:"auto"},!r&&{pointerEvents:"none"},t.arrow&&{[`&[data-popper-placement*="bottom"] .${fe.arrow}`]:{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}},[`&[data-popper-placement*="top"] .${fe.arrow}`]:{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}},[`&[data-popper-placement*="right"] .${fe.arrow}`]:A({},t.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}}),[`&[data-popper-placement*="left"] .${fe.arrow}`]:A({},t.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})})),Rn=at("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.tooltip,r.touch&&t.touch,r.arrow&&t.tooltipArrow,t[`tooltipPlacement${ar(r.placement.split("-")[0])}`]]}})(({theme:e,ownerState:t})=>A({backgroundColor:e.vars?e.vars.palette.Tooltip.bg:sr(e.palette.grey[700],.92),borderRadius:(e.vars||e).shape.borderRadius,color:(e.vars||e).palette.common.white,fontFamily:e.typography.fontFamily,padding:"4px 8px",fontSize:e.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:e.typography.fontWeightMedium},t.arrow&&{position:"relative",margin:0},t.touch&&{padding:"8px 16px",fontSize:e.typography.pxToRem(14),lineHeight:`${Pn(16/14)}em`,fontWeight:e.typography.fontWeightRegular},{[`.${fe.popper}[data-popper-placement*="left"] &`]:A({transformOrigin:"right center"},t.isRtl?A({marginLeft:"14px"},t.touch&&{marginLeft:"24px"}):A({marginRight:"14px"},t.touch&&{marginRight:"24px"})),[`.${fe.popper}[data-popper-placement*="right"] &`]:A({transformOrigin:"left center"},t.isRtl?A({marginRight:"14px"},t.touch&&{marginRight:"24px"}):A({marginLeft:"14px"},t.touch&&{marginLeft:"24px"})),[`.${fe.popper}[data-popper-placement*="top"] &`]:A({transformOrigin:"center bottom",marginBottom:"14px"},t.touch&&{marginBottom:"24px"}),[`.${fe.popper}[data-popper-placement*="bottom"] &`]:A({transformOrigin:"center top",marginTop:"14px"},t.touch&&{marginTop:"24px"})})),jn=at("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:(e,t)=>t.arrow})(({theme:e})=>({overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:e.vars?e.vars.palette.Tooltip.bg:sr(e.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}));let tt=!1,vt=null,Ne={x:0,y:0};function rt(e,t){return r=>{t&&t(r),e(r)}}const En=T.forwardRef(function(t,r){var o,n,i,p,s,a,f,l,m,y,c,x,v,h,O,E,w,d,b;const g=ir({props:t,name:"MuiTooltip"}),{arrow:R=!1,children:$,components:C={},componentsProps:j={},describeChild:D=!1,disableFocusListener:L=!1,disableHoverListener:k=!1,disableInteractive:z=!1,disableTouchListener:q=!1,enterDelay:M=100,enterNextDelay:S=0,enterTouchDelay:J=700,followCursor:X=!1,id:we,leaveDelay:Pe=0,leaveTouchDelay:ve=1500,onClose:me,onOpen:ne,open:Q,placement:se="bottom",PopperComponent:le,PopperProps:W={},slotProps:Y={},slots:Oe={},title:Z,TransitionComponent:lt=zt,TransitionProps:ze}=g,qe=it(g,wn),ee=T.isValidElement($)?$:u.jsx("span",{children:$}),Te=Fr(),Xe=Te.direction==="rtl",[he,Ye]=T.useState(),[G,Re]=T.useState(null),ge=T.useRef(!1),je=z||X,pe=T.useRef(),be=T.useRef(),te=T.useRef(),De=T.useRef(),[Ge,Ct]=Vr({controlled:Q,default:!1,name:"Tooltip",state:"open"});let ie=Ge;const pt=zr(we),ke=T.useRef(),Ke=T.useCallback(()=>{ke.current!==void 0&&(document.body.style.WebkitUserSelect=ke.current,ke.current=void 0),clearTimeout(De.current)},[]);T.useEffect(()=>()=>{clearTimeout(pe.current),clearTimeout(be.current),clearTimeout(te.current),Ke()},[Ke]);const At=P=>{clearTimeout(vt),tt=!0,Ct(!0),ne&&!ie&&ne(P)},Je=qr(P=>{clearTimeout(vt),vt=setTimeout(()=>{tt=!1},800+Pe),Ct(!1),me&&ie&&me(P),clearTimeout(pe.current),pe.current=setTimeout(()=>{ge.current=!1},Te.transitions.duration.shortest)}),ct=P=>{ge.current&&P.type!=="touchstart"||(he&&he.removeAttribute("title"),clearTimeout(be.current),clearTimeout(te.current),M||tt&&S?be.current=setTimeout(()=>{At(P)},tt?S:M):At(P))},$t=P=>{clearTimeout(be.current),clearTimeout(te.current),te.current=setTimeout(()=>{Je(P)},Pe)},{isFocusVisibleRef:Mt,onBlur:wr,onFocus:Pr,ref:Or}=Xr(),[,Dt]=T.useState(!1),kt=P=>{wr(P),Mt.current===!1&&(Dt(!1),$t(P))},St=P=>{he||Ye(P.currentTarget),Pr(P),Mt.current===!0&&(Dt(!0),ct(P))},Bt=P=>{ge.current=!0;const _=ee.props;_.onTouchStart&&_.onTouchStart(P)},Lt=ct,Wt=$t,Tr=P=>{Bt(P),clearTimeout(te.current),clearTimeout(pe.current),Ke(),ke.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",De.current=setTimeout(()=>{document.body.style.WebkitUserSelect=ke.current,ct(P)},J)},Rr=P=>{ee.props.onTouchEnd&&ee.props.onTouchEnd(P),Ke(),clearTimeout(te.current),te.current=setTimeout(()=>{Je(P)},ve)};T.useEffect(()=>{if(!ie)return;function P(_){(_.key==="Escape"||_.key==="Esc")&&Je(_)}return document.addEventListener("keydown",P),()=>{document.removeEventListener("keydown",P)}},[Je,ie]);const jr=mt(ee.ref,Or,Ye,r);!Z&&Z!==0&&(ie=!1);const ut=T.useRef(),Er=P=>{const _=ee.props;_.onMouseMove&&_.onMouseMove(P),Ne={x:P.clientX,y:P.clientY},ut.current&&ut.current.update()},Se={},ft=typeof Z=="string";D?(Se.title=!ie&&ft&&!k?Z:null,Se["aria-describedby"]=ie?pt:null):(Se["aria-label"]=ft?Z:null,Se["aria-labelledby"]=ie&&!ft?pt:null);const K=A({},Se,qe,ee.props,{className:Qe(qe.className,ee.props.className),onTouchStart:Bt,ref:jr},X?{onMouseMove:Er}:{}),Be={};q||(K.onTouchStart=Tr,K.onTouchEnd=Rr),k||(K.onMouseOver=rt(Lt,K.onMouseOver),K.onMouseLeave=rt(Wt,K.onMouseLeave),je||(Be.onMouseOver=Lt,Be.onMouseLeave=Wt)),L||(K.onFocus=rt(St,K.onFocus),K.onBlur=rt(kt,K.onBlur),je||(Be.onFocus=St,Be.onBlur=kt));const Cr=T.useMemo(()=>{var P;let _=[{name:"arrow",enabled:!!G,options:{element:G,padding:4}}];return(P=W.popperOptions)!=null&&P.modifiers&&(_=_.concat(W.popperOptions.modifiers)),A({},W.popperOptions,{modifiers:_})},[G,W]),Le=A({},g,{isRtl:Xe,arrow:R,disableInteractive:je,placement:se,PopperComponentProp:le,touch:ge.current}),dt=On(Le),Nt=(o=(n=Oe.popper)!=null?n:C.Popper)!=null?o:Tn,It=(i=(p=(s=Oe.transition)!=null?s:C.Transition)!=null?p:lt)!=null?i:zt,_t=(a=(f=Oe.tooltip)!=null?f:C.Tooltip)!=null?a:Rn,Ht=(l=(m=Oe.arrow)!=null?m:C.Arrow)!=null?l:jn,Ar=Ze(Nt,A({},W,(y=Y.popper)!=null?y:j.popper,{className:Qe(dt.popper,W==null?void 0:W.className,(c=(x=Y.popper)!=null?x:j.popper)==null?void 0:c.className)}),Le),$r=Ze(It,A({},ze,(v=Y.transition)!=null?v:j.transition),Le),Mr=Ze(_t,A({},(h=Y.tooltip)!=null?h:j.tooltip,{className:Qe(dt.tooltip,(O=(E=Y.tooltip)!=null?E:j.tooltip)==null?void 0:O.className)}),Le),Dr=Ze(Ht,A({},(w=Y.arrow)!=null?w:j.arrow,{className:Qe(dt.arrow,(d=(b=Y.arrow)!=null?b:j.arrow)==null?void 0:d.className)}),Le);return u.jsxs(T.Fragment,{children:[T.cloneElement(ee,K),u.jsx(Nt,A({as:le??yr,placement:se,anchorEl:X?{getBoundingClientRect:()=>({top:Ne.y,left:Ne.x,right:Ne.x,bottom:Ne.y,width:0,height:0})}:he,popperRef:ut,open:he?ie:!1,id:pt,transition:!0},Be,Ar,{popperOptions:Cr,children:({TransitionProps:P})=>u.jsx(It,A({timeout:Te.transitions.duration.shorter},P,$r,{children:u.jsxs(_t,A({},Mr,{children:[Z,R?u.jsx(Ht,A({},Dr,{ref:Re})):null]}))}))}))]})}),Cn=En;var jt={},An=pr;Object.defineProperty(jt,"__esModule",{value:!0});var xr=jt.default=void 0,$n=An(lr()),Mn=u,Dn=(0,$n.default)((0,Mn.jsx)("path",{d:"M12 6.5c3.79 0 7.17 2.13 8.82 5.5-1.65 3.37-5.02 5.5-8.82 5.5S4.83 15.37 3.18 12C4.83 8.63 8.21 6.5 12 6.5m0-2C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5m0-2c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5z"}),"RemoveRedEyeOutlined");xr=jt.default=Dn;var Et={},kn=pr;Object.defineProperty(Et,"__esModule",{value:!0});var ue=Et.default=void 0,Sn=kn(lr()),Bn=u,Ln=(0,Sn.default)((0,Bn.jsx)("path",{d:"M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"}),"Sort");ue=Et.default=Ln;const Wn=Me.img`
  width: 50px;
  height: auto;
  border-radius: 50%;
`,Nn=()=>{const[e,t]=T.useState([{id:1,login:"Lorem_user1",email:"user1@example.com",phone:"123-456-7890",password:"password1",date:"01-01-2023",position:"Manager"},{id:2,login:"Lorem_user2",email:"user2@example.com",phone:"098-765-4321",password:"password2",date:"02-02-2023",position:"Developer"}]),[r,o]=T.useState({}),[n,i]=T.useState(null),p=!!n,s=Sr(),a=()=>{s("/user/:id")},f=c=>{o(x=>({...x,[c]:!x[c]}))},l=c=>{i(c.currentTarget)},m=()=>{i(null)},y=c=>{const x=e.filter(v=>v.id!==c);t(x),m()};return u.jsx(Wr,{component:Nr,children:u.jsxs(Ir,{children:[u.jsx(_r,{children:u.jsxs(Ut,{children:[u.jsx(B,{children:u.jsx(Cn,{title:"Sort",children:u.jsx(ue,{})})}),u.jsxs(B,{children:["Login",u.jsx(ce,{children:u.jsx(ue,{})})]}),u.jsxs(B,{children:["Email",u.jsx(ce,{children:u.jsx(ue,{})})]}),u.jsxs(B,{children:["Phone",u.jsx(ce,{children:u.jsx(ue,{})})]}),u.jsxs(B,{children:["Password",u.jsx(ce,{children:u.jsx(ue,{})})]}),u.jsxs(B,{children:["Position",u.jsx(ce,{children:u.jsx(ue,{})})]}),u.jsxs(B,{children:["Date",u.jsx(ce,{children:u.jsx(ue,{})})]}),u.jsx(B,{children:"Action"})]})}),u.jsx(Hr,{children:e.map(c=>u.jsxs(Ut,{children:[u.jsx(B,{children:u.jsx(Wn,{src:"/public/logo-alpine.jpg",alt:"User"})}),u.jsx(B,{children:c.login}),u.jsx(B,{children:c.email}),u.jsx(B,{children:c.phone}),u.jsxs(B,{children:[u.jsx("span",{children:r[c.id]?c.password:"*************"}),u.jsx(ce,{onClick:()=>f(c.id),children:u.jsx(xr,{})})]}),u.jsx(B,{children:c.position}),u.jsx(B,{children:c.date}),u.jsxs(B,{children:[u.jsx(ce,{onClick:l,children:u.jsx(Lr,{})}),u.jsxs(Gr,{id:"action-menu",anchorEl:n,keepMounted:!0,open:p,onClose:m,children:[u.jsx(qt,{onClick:a,children:"Edit"}),u.jsx(qt,{onClick:()=>y(c.id),children:"Delete"})]})]})]},c.id))})]})})},In=Me.div`
  display: flex;
  flex-direction: column;
  //background-color: white;
  width: 100%;
  height: 1000px;
  padding: 40px;
`,_n=Me.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`,Hn=Me.div`
  font-weight: bold;
  font-size: 30px;
  color: #53565b;
`,Un=Me.div`
  //background-color: red;
  display: flex;
  justify-content: center;
  margin-top: 40px;
  border-radius: 10px;
`,Fn=Me.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 40px;
  background: linear-gradient(to right, #0479c3, rgba(0, 119, 255, 0.5));
  color: white;
  border: 0 solid #0177c1;
  cursor: pointer;
  text-decoration: none;
`,ai=()=>u.jsx("div",{children:u.jsxs(In,{children:[u.jsxs(_n,{children:[u.jsx(Hn,{children:"Store managers"}),u.jsx(Fn,{as:Br,to:"/add-employee",children:"Add user"})]}),u.jsx(Un,{children:u.jsx(Nn,{})})]})});export{ai as default};
