import{r as e,aH as U,aI as tt,aJ as W,_ as I,aK as M,aL as ce,aM as nt,aN as Me,aO as ot,aP as rt,aQ as at,aR as st,aS as ct,aT as it,aU as lt,aV as dt,aW as ut,aX as ft,aY as oe,ak as pt,aZ as vt,a_ as ye,V as Le,a$ as ht,b0 as Pe,b1 as mt,b2 as $t,U as gt,b3 as bt,b4 as xt,n as L,F as wt,j as O,I as He,b5 as Te}from"./index-786c574d.js";function Oe(t,[o,n]){return Math.min(n,Math.max(o,t))}const we="dismissableLayer.update",Et="dismissableLayer.pointerDownOutside",yt="dismissableLayer.focusOutside";let Ie;const Ct=e.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),St=e.forwardRef((t,o)=>{var n;const{disableOutsidePointerEvents:r=!1,onEscapeKeyDown:s,onPointerDownOutside:i,onFocusOutside:c,onInteractOutside:a,onDismiss:d,...u}=t,v=e.useContext(Ct),[$,P]=e.useState(null),g=(n=$==null?void 0:$.ownerDocument)!==null&&n!==void 0?n:globalThis==null?void 0:globalThis.document,[,m]=e.useState({}),f=U(o,w=>P(w)),x=Array.from(v.layers),[p]=[...v.layersWithOutsidePointerEventsDisabled].slice(-1),l=x.indexOf(p),h=$?x.indexOf($):-1,E=v.layersWithOutsidePointerEventsDisabled.size>0,_=h>=l,G=Pt(w=>{const H=w.target,j=[...v.branches].some(A=>A.contains(H));!_||j||(i==null||i(w),a==null||a(w),w.defaultPrevented||d==null||d())},g),R=Tt(w=>{const H=w.target;[...v.branches].some(A=>A.contains(H))||(c==null||c(w),a==null||a(w),w.defaultPrevented||d==null||d())},g);return tt(w=>{h===v.layers.size-1&&(s==null||s(w),!w.defaultPrevented&&d&&(w.preventDefault(),d()))},g),e.useEffect(()=>{if($)return r&&(v.layersWithOutsidePointerEventsDisabled.size===0&&(Ie=g.body.style.pointerEvents,g.body.style.pointerEvents="none"),v.layersWithOutsidePointerEventsDisabled.add($)),v.layers.add($),_e(),()=>{r&&v.layersWithOutsidePointerEventsDisabled.size===1&&(g.body.style.pointerEvents=Ie)}},[$,g,r,v]),e.useEffect(()=>()=>{$&&(v.layers.delete($),v.layersWithOutsidePointerEventsDisabled.delete($),_e())},[$,v]),e.useEffect(()=>{const w=()=>m({});return document.addEventListener(we,w),()=>document.removeEventListener(we,w)},[]),e.createElement(W.div,I({},u,{ref:f,style:{pointerEvents:E?_?"auto":"none":void 0,...t.style},onFocusCapture:M(t.onFocusCapture,R.onFocusCapture),onBlurCapture:M(t.onBlurCapture,R.onBlurCapture),onPointerDownCapture:M(t.onPointerDownCapture,G.onPointerDownCapture)}))});function Pt(t,o=globalThis==null?void 0:globalThis.document){const n=ce(t),r=e.useRef(!1),s=e.useRef(()=>{});return e.useEffect(()=>{const i=a=>{if(a.target&&!r.current){let u=function(){We(Et,n,d,{discrete:!0})};const d={originalEvent:a};a.pointerType==="touch"?(o.removeEventListener("click",s.current),s.current=u,o.addEventListener("click",s.current,{once:!0})):u()}r.current=!1},c=window.setTimeout(()=>{o.addEventListener("pointerdown",i)},0);return()=>{window.clearTimeout(c),o.removeEventListener("pointerdown",i),o.removeEventListener("click",s.current)}},[o,n]),{onPointerDownCapture:()=>r.current=!0}}function Tt(t,o=globalThis==null?void 0:globalThis.document){const n=ce(t),r=e.useRef(!1);return e.useEffect(()=>{const s=i=>{i.target&&!r.current&&We(yt,n,{originalEvent:i},{discrete:!1})};return o.addEventListener("focusin",s),()=>o.removeEventListener("focusin",s)},[o,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function _e(){const t=new CustomEvent(we);document.dispatchEvent(t)}function We(t,o,n,{discrete:r}){const s=n.originalEvent.target,i=new CustomEvent(t,{bubbles:!1,cancelable:!0,detail:n});o&&s.addEventListener(t,o,{once:!0}),r?nt(s,i):s.dispatchEvent(i)}const be="focusScope.autoFocusOnMount",xe="focusScope.autoFocusOnUnmount",Re={bubbles:!1,cancelable:!0},Ot=e.forwardRef((t,o)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:s,onUnmountAutoFocus:i,...c}=t,[a,d]=e.useState(null),u=ce(s),v=ce(i),$=e.useRef(null),P=U(o,f=>d(f)),g=e.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;e.useEffect(()=>{if(r){let f=function(h){if(g.paused||!a)return;const E=h.target;a.contains(E)?$.current=E:te($.current,{select:!0})},x=function(h){if(g.paused||!a)return;const E=h.relatedTarget;E!==null&&(a.contains(E)||te($.current,{select:!0}))},p=function(h){const E=document.activeElement;for(const _ of h)_.removedNodes.length>0&&(a!=null&&a.contains(E)||te(a))};document.addEventListener("focusin",f),document.addEventListener("focusout",x);const l=new MutationObserver(p);return a&&l.observe(a,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",f),document.removeEventListener("focusout",x),l.disconnect()}}},[r,a,g.paused]),e.useEffect(()=>{if(a){Ae.add(g);const f=document.activeElement;if(!a.contains(f)){const p=new CustomEvent(be,Re);a.addEventListener(be,u),a.dispatchEvent(p),p.defaultPrevented||(It(Nt(Ve(a)),{select:!0}),document.activeElement===f&&te(a))}return()=>{a.removeEventListener(be,u),setTimeout(()=>{const p=new CustomEvent(xe,Re);a.addEventListener(xe,v),a.dispatchEvent(p),p.defaultPrevented||te(f??document.body,{select:!0}),a.removeEventListener(xe,v),Ae.remove(g)},0)}}},[a,u,v,g]);const m=e.useCallback(f=>{if(!n&&!r||g.paused)return;const x=f.key==="Tab"&&!f.altKey&&!f.ctrlKey&&!f.metaKey,p=document.activeElement;if(x&&p){const l=f.currentTarget,[h,E]=_t(l);h&&E?!f.shiftKey&&p===E?(f.preventDefault(),n&&te(h,{select:!0})):f.shiftKey&&p===h&&(f.preventDefault(),n&&te(E,{select:!0})):p===l&&f.preventDefault()}},[n,r,g.paused]);return e.createElement(W.div,I({tabIndex:-1},c,{ref:P,onKeyDown:m}))});function It(t,{select:o=!1}={}){const n=document.activeElement;for(const r of t)if(te(r,{select:o}),document.activeElement!==n)return}function _t(t){const o=Ve(t),n=De(o,t),r=De(o.reverse(),t);return[n,r]}function Ve(t){const o=[],n=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const s=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||s?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)o.push(n.currentNode);return o}function De(t,o){for(const n of t)if(!Rt(n,{upTo:o}))return n}function Rt(t,{upTo:o}){if(getComputedStyle(t).visibility==="hidden")return!0;for(;t;){if(o!==void 0&&t===o)return!1;if(getComputedStyle(t).display==="none")return!0;t=t.parentElement}return!1}function Dt(t){return t instanceof HTMLInputElement&&"select"in t}function te(t,{select:o=!1}={}){if(t&&t.focus){const n=document.activeElement;t.focus({preventScroll:!0}),t!==n&&Dt(t)&&o&&t.select()}}const Ae=At();function At(){let t=[];return{add(o){const n=t[0];o!==n&&(n==null||n.pause()),t=Ne(t,o),t.unshift(o)},remove(o){var n;t=Ne(t,o),(n=t[0])===null||n===void 0||n.resume()}}}function Ne(t,o){const n=[...t],r=n.indexOf(o);return r!==-1&&n.splice(r,1),n}function Nt(t){return t.filter(o=>o.tagName!=="A")}const Be="Popper",[Ke,Ue]=Me(Be),[kt,je]=Ke(Be),Ft=t=>{const{__scopePopper:o,children:n}=t,[r,s]=e.useState(null);return e.createElement(kt,{scope:o,anchor:r,onAnchorChange:s},n)},Mt="PopperAnchor",Lt=e.forwardRef((t,o)=>{const{__scopePopper:n,virtualRef:r,...s}=t,i=je(Mt,n),c=e.useRef(null),a=U(o,c);return e.useEffect(()=>{i.onAnchorChange((r==null?void 0:r.current)||c.current)}),r?null:e.createElement(W.div,I({},s,{ref:a}))}),ze="PopperContent",[Ht,jn]=Ke(ze),Wt=e.forwardRef((t,o)=>{var n,r,s,i,c,a,d,u;const{__scopePopper:v,side:$="bottom",sideOffset:P=0,align:g="center",alignOffset:m=0,arrowPadding:f=0,collisionBoundary:x=[],collisionPadding:p=0,sticky:l="partial",hideWhenDetached:h=!1,avoidCollisions:E=!0,onPlaced:_,...G}=t,R=je(ze,v),[w,H]=e.useState(null),j=U(o,F=>H(F)),[A,B]=e.useState(null),N=ot(A),q=(n=N==null?void 0:N.width)!==null&&n!==void 0?n:0,D=(r=N==null?void 0:N.height)!==null&&r!==void 0?r:0,K=$+(g!=="center"?"-"+g:""),z=typeof p=="number"?p:{top:0,right:0,bottom:0,left:0,...p},J=Array.isArray(x)?x:[x],Z=J.length>0,ne={padding:z,boundary:J.filter(Vt),altBoundary:Z},{refs:ae,floatingStyles:se,placement:de,isPositioned:Y,middlewareData:X}=rt({strategy:"fixed",placement:K,whileElementsMounted:at,elements:{reference:R.anchor},middleware:[st({mainAxis:P+D,alignmentAxis:m}),E&&ct({mainAxis:!0,crossAxis:!1,limiter:l==="partial"?it():void 0,...ne}),E&&lt({...ne}),dt({...ne,apply:({elements:F,rects:ue,availableWidth:fe,availableHeight:pe})=>{const{width:Qe,height:et}=ue.reference,ve=F.floating.style;ve.setProperty("--radix-popper-available-width",`${fe}px`),ve.setProperty("--radix-popper-available-height",`${pe}px`),ve.setProperty("--radix-popper-anchor-width",`${Qe}px`),ve.setProperty("--radix-popper-anchor-height",`${et}px`)}}),A&&ut({element:A,padding:f}),Bt({arrowWidth:q,arrowHeight:D}),h&&ft({strategy:"referenceHidden"})]}),[ee,b]=Ye(de),y=ce(_);oe(()=>{Y&&(y==null||y())},[Y,y]);const k=(s=X.arrow)===null||s===void 0?void 0:s.x,T=(i=X.arrow)===null||i===void 0?void 0:i.y,C=((c=X.arrow)===null||c===void 0?void 0:c.centerOffset)!==0,[S,V]=e.useState();return oe(()=>{w&&V(window.getComputedStyle(w).zIndex)},[w]),e.createElement("div",{ref:ae.setFloating,"data-radix-popper-content-wrapper":"",style:{...se,transform:Y?se.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:S,"--radix-popper-transform-origin":[(a=X.transformOrigin)===null||a===void 0?void 0:a.x,(d=X.transformOrigin)===null||d===void 0?void 0:d.y].join(" ")},dir:t.dir},e.createElement(Ht,{scope:v,placedSide:ee,onArrowChange:B,arrowX:k,arrowY:T,shouldHideArrow:C},e.createElement(W.div,I({"data-side":ee,"data-align":b},G,{ref:j,style:{...G.style,animation:Y?void 0:"none",opacity:(u=X.hide)!==null&&u!==void 0&&u.referenceHidden?0:void 0}}))))});function Vt(t){return t!==null}const Bt=t=>({name:"transformOrigin",options:t,fn(o){var n,r,s,i,c;const{placement:a,rects:d,middlewareData:u}=o,$=((n=u.arrow)===null||n===void 0?void 0:n.centerOffset)!==0,P=$?0:t.arrowWidth,g=$?0:t.arrowHeight,[m,f]=Ye(a),x={start:"0%",center:"50%",end:"100%"}[f],p=((r=(s=u.arrow)===null||s===void 0?void 0:s.x)!==null&&r!==void 0?r:0)+P/2,l=((i=(c=u.arrow)===null||c===void 0?void 0:c.y)!==null&&i!==void 0?i:0)+g/2;let h="",E="";return m==="bottom"?(h=$?x:`${p}px`,E=`${-g}px`):m==="top"?(h=$?x:`${p}px`,E=`${d.floating.height+g}px`):m==="right"?(h=`${-g}px`,E=$?x:`${l}px`):m==="left"&&(h=`${d.floating.width+g}px`,E=$?x:`${l}px`),{data:{x:h,y:E}}}});function Ye(t){const[o,n="center"]=t.split("-");return[o,n]}const Kt=Ft,Ut=Lt,jt=Wt,zt=e.forwardRef((t,o)=>{var n;const{container:r=globalThis==null||(n=globalThis.document)===null||n===void 0?void 0:n.body,...s}=t;return r?pt.createPortal(e.createElement(W.div,I({},s,{ref:o})),r):null}),Yt=e.forwardRef((t,o)=>e.createElement(W.span,I({},t,{ref:o,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...t.style}}))),Xt=[" ","Enter","ArrowUp","ArrowDown"],Gt=[" ","Enter"],me="Select",[$e,Ce,qt]=vt(me),[le,zn]=Me(me,[qt,Ue]),Se=Ue(),[Zt,re]=le(me),[Jt,Qt]=le(me),en=t=>{const{__scopeSelect:o,children:n,open:r,defaultOpen:s,onOpenChange:i,value:c,defaultValue:a,onValueChange:d,dir:u,name:v,autoComplete:$,disabled:P,required:g}=t,m=Se(o),[f,x]=e.useState(null),[p,l]=e.useState(null),[h,E]=e.useState(!1),_=ht(u),[G=!1,R]=Pe({prop:r,defaultProp:s,onChange:i}),[w,H]=Pe({prop:c,defaultProp:a,onChange:d}),j=e.useRef(null),A=f?!!f.closest("form"):!0,[B,N]=e.useState(new Set),q=Array.from(B).map(D=>D.props.value).join(";");return e.createElement(Kt,m,e.createElement(Zt,{required:g,scope:o,trigger:f,onTriggerChange:x,valueNode:p,onValueNodeChange:l,valueNodeHasChildren:h,onValueNodeHasChildrenChange:E,contentId:ye(),value:w,onValueChange:H,open:G,onOpenChange:R,dir:_,triggerPointerDownPosRef:j,disabled:P},e.createElement($e.Provider,{scope:o},e.createElement(Jt,{scope:t.__scopeSelect,onNativeOptionAdd:e.useCallback(D=>{N(K=>new Set(K).add(D))},[]),onNativeOptionRemove:e.useCallback(D=>{N(K=>{const z=new Set(K);return z.delete(D),z})},[])},n)),A?e.createElement(qe,{key:q,"aria-hidden":!0,required:g,tabIndex:-1,name:v,autoComplete:$,value:w,onChange:D=>H(D.target.value),disabled:P},w===void 0?e.createElement("option",{value:""}):null,Array.from(B)):null))},tn="SelectTrigger",nn=e.forwardRef((t,o)=>{const{__scopeSelect:n,disabled:r=!1,...s}=t,i=Se(n),c=re(tn,n),a=c.disabled||r,d=U(o,c.onTriggerChange),u=Ce(n),[v,$,P]=Ze(m=>{const f=u().filter(l=>!l.disabled),x=f.find(l=>l.value===c.value),p=Je(f,m,x);p!==void 0&&c.onValueChange(p.value)}),g=()=>{a||(c.onOpenChange(!0),P())};return e.createElement(Ut,I({asChild:!0},i),e.createElement(W.button,I({type:"button",role:"combobox","aria-controls":c.contentId,"aria-expanded":c.open,"aria-required":c.required,"aria-autocomplete":"none",dir:c.dir,"data-state":c.open?"open":"closed",disabled:a,"data-disabled":a?"":void 0,"data-placeholder":c.value===void 0?"":void 0},s,{ref:d,onClick:M(s.onClick,m=>{m.currentTarget.focus()}),onPointerDown:M(s.onPointerDown,m=>{const f=m.target;f.hasPointerCapture(m.pointerId)&&f.releasePointerCapture(m.pointerId),m.button===0&&m.ctrlKey===!1&&(g(),c.triggerPointerDownPosRef.current={x:Math.round(m.pageX),y:Math.round(m.pageY)},m.preventDefault())}),onKeyDown:M(s.onKeyDown,m=>{const f=v.current!=="";!(m.ctrlKey||m.altKey||m.metaKey)&&m.key.length===1&&$(m.key),!(f&&m.key===" ")&&Xt.includes(m.key)&&(g(),m.preventDefault())})})))}),on="SelectValue",rn=e.forwardRef((t,o)=>{const{__scopeSelect:n,className:r,style:s,children:i,placeholder:c,...a}=t,d=re(on,n),{onValueNodeHasChildrenChange:u}=d,v=i!==void 0,$=U(o,d.onValueNodeChange);return oe(()=>{u(v)},[u,v]),e.createElement(W.span,I({},a,{ref:$,style:{pointerEvents:"none"}}),d.value===void 0&&c!==void 0?c:i)}),an=t=>e.createElement(zt,I({asChild:!0},t)),ie="SelectContent",sn=e.forwardRef((t,o)=>{const n=re(ie,t.__scopeSelect),[r,s]=e.useState();if(oe(()=>{s(new DocumentFragment)},[]),!n.open){const i=r;return i?Le.createPortal(e.createElement(Xe,{scope:t.__scopeSelect},e.createElement($e.Slot,{scope:t.__scopeSelect},e.createElement("div",null,t.children))),i):null}return e.createElement(cn,I({},t,{ref:o}))}),Q=10,[Xe,ge]=le(ie),cn=e.forwardRef((t,o)=>{const{__scopeSelect:n,position:r="item-aligned",onCloseAutoFocus:s,onEscapeKeyDown:i,onPointerDownOutside:c,side:a,sideOffset:d,align:u,alignOffset:v,arrowPadding:$,collisionBoundary:P,collisionPadding:g,sticky:m,hideWhenDetached:f,avoidCollisions:x,...p}=t,l=re(ie,n),[h,E]=e.useState(null),[_,G]=e.useState(null),R=U(o,b=>E(b)),[w,H]=e.useState(null),[j,A]=e.useState(null),B=Ce(n),[N,q]=e.useState(!1),D=e.useRef(!1);e.useEffect(()=>{if(h)return mt(h)},[h]),$t();const K=e.useCallback(b=>{const[y,...k]=B().map(S=>S.ref.current),[T]=k.slice(-1),C=document.activeElement;for(const S of b)if(S===C||(S==null||S.scrollIntoView({block:"nearest"}),S===y&&_&&(_.scrollTop=0),S===T&&_&&(_.scrollTop=_.scrollHeight),S==null||S.focus(),document.activeElement!==C))return},[B,_]),z=e.useCallback(()=>K([w,h]),[K,w,h]);e.useEffect(()=>{N&&z()},[N,z]);const{onOpenChange:J,triggerPointerDownPosRef:Z}=l;e.useEffect(()=>{if(h){let b={x:0,y:0};const y=T=>{var C,S,V,F;b={x:Math.abs(Math.round(T.pageX)-((C=(S=Z.current)===null||S===void 0?void 0:S.x)!==null&&C!==void 0?C:0)),y:Math.abs(Math.round(T.pageY)-((V=(F=Z.current)===null||F===void 0?void 0:F.y)!==null&&V!==void 0?V:0))}},k=T=>{b.x<=10&&b.y<=10?T.preventDefault():h.contains(T.target)||J(!1),document.removeEventListener("pointermove",y),Z.current=null};return Z.current!==null&&(document.addEventListener("pointermove",y),document.addEventListener("pointerup",k,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",y),document.removeEventListener("pointerup",k,{capture:!0})}}},[h,J,Z]),e.useEffect(()=>{const b=()=>J(!1);return window.addEventListener("blur",b),window.addEventListener("resize",b),()=>{window.removeEventListener("blur",b),window.removeEventListener("resize",b)}},[J]);const[ne,ae]=Ze(b=>{const y=B().filter(C=>!C.disabled),k=y.find(C=>C.ref.current===document.activeElement),T=Je(y,b,k);T&&setTimeout(()=>T.ref.current.focus())}),se=e.useCallback((b,y,k)=>{const T=!D.current&&!k;(l.value!==void 0&&l.value===y||T)&&(H(b),T&&(D.current=!0))},[l.value]),de=e.useCallback(()=>h==null?void 0:h.focus(),[h]),Y=e.useCallback((b,y,k)=>{const T=!D.current&&!k;(l.value!==void 0&&l.value===y||T)&&A(b)},[l.value]),X=r==="popper"?ke:ln,ee=X===ke?{side:a,sideOffset:d,align:u,alignOffset:v,arrowPadding:$,collisionBoundary:P,collisionPadding:g,sticky:m,hideWhenDetached:f,avoidCollisions:x}:{};return e.createElement(Xe,{scope:n,content:h,viewport:_,onViewportChange:G,itemRefCallback:se,selectedItem:w,onItemLeave:de,itemTextRefCallback:Y,focusSelectedItem:z,selectedItemText:j,position:r,isPositioned:N,searchRef:ne},e.createElement(gt,{as:bt,allowPinchZoom:!0},e.createElement(Ot,{asChild:!0,trapped:l.open,onMountAutoFocus:b=>{b.preventDefault()},onUnmountAutoFocus:M(s,b=>{var y;(y=l.trigger)===null||y===void 0||y.focus({preventScroll:!0}),b.preventDefault()})},e.createElement(St,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:i,onPointerDownOutside:c,onFocusOutside:b=>b.preventDefault(),onDismiss:()=>l.onOpenChange(!1)},e.createElement(X,I({role:"listbox",id:l.contentId,"data-state":l.open?"open":"closed",dir:l.dir,onContextMenu:b=>b.preventDefault()},p,ee,{onPlaced:()=>q(!0),ref:R,style:{display:"flex",flexDirection:"column",outline:"none",...p.style},onKeyDown:M(p.onKeyDown,b=>{const y=b.ctrlKey||b.altKey||b.metaKey;if(b.key==="Tab"&&b.preventDefault(),!y&&b.key.length===1&&ae(b.key),["ArrowUp","ArrowDown","Home","End"].includes(b.key)){let T=B().filter(C=>!C.disabled).map(C=>C.ref.current);if(["ArrowUp","End"].includes(b.key)&&(T=T.slice().reverse()),["ArrowUp","ArrowDown"].includes(b.key)){const C=b.target,S=T.indexOf(C);T=T.slice(S+1)}setTimeout(()=>K(T)),b.preventDefault()}})}))))))}),ln=e.forwardRef((t,o)=>{const{__scopeSelect:n,onPlaced:r,...s}=t,i=re(ie,n),c=ge(ie,n),[a,d]=e.useState(null),[u,v]=e.useState(null),$=U(o,R=>v(R)),P=Ce(n),g=e.useRef(!1),m=e.useRef(!0),{viewport:f,selectedItem:x,selectedItemText:p,focusSelectedItem:l}=c,h=e.useCallback(()=>{if(i.trigger&&i.valueNode&&a&&u&&f&&x&&p){const R=i.trigger.getBoundingClientRect(),w=u.getBoundingClientRect(),H=i.valueNode.getBoundingClientRect(),j=p.getBoundingClientRect();if(i.dir!=="rtl"){const C=j.left-w.left,S=H.left-C,V=R.left-S,F=R.width+V,ue=Math.max(F,w.width),fe=window.innerWidth-Q,pe=Oe(S,[Q,fe-ue]);a.style.minWidth=F+"px",a.style.left=pe+"px"}else{const C=w.right-j.right,S=window.innerWidth-H.right-C,V=window.innerWidth-R.right-S,F=R.width+V,ue=Math.max(F,w.width),fe=window.innerWidth-Q,pe=Oe(S,[Q,fe-ue]);a.style.minWidth=F+"px",a.style.right=pe+"px"}const A=P(),B=window.innerHeight-Q*2,N=f.scrollHeight,q=window.getComputedStyle(u),D=parseInt(q.borderTopWidth,10),K=parseInt(q.paddingTop,10),z=parseInt(q.borderBottomWidth,10),J=parseInt(q.paddingBottom,10),Z=D+K+N+J+z,ne=Math.min(x.offsetHeight*5,Z),ae=window.getComputedStyle(f),se=parseInt(ae.paddingTop,10),de=parseInt(ae.paddingBottom,10),Y=R.top+R.height/2-Q,X=B-Y,ee=x.offsetHeight/2,b=x.offsetTop+ee,y=D+K+b,k=Z-y;if(y<=Y){const C=x===A[A.length-1].ref.current;a.style.bottom="0px";const S=u.clientHeight-f.offsetTop-f.offsetHeight,V=Math.max(X,ee+(C?de:0)+S+z),F=y+V;a.style.height=F+"px"}else{const C=x===A[0].ref.current;a.style.top="0px";const V=Math.max(Y,D+f.offsetTop+(C?se:0)+ee)+k;a.style.height=V+"px",f.scrollTop=y-Y+f.offsetTop}a.style.margin=`${Q}px 0`,a.style.minHeight=ne+"px",a.style.maxHeight=B+"px",r==null||r(),requestAnimationFrame(()=>g.current=!0)}},[P,i.trigger,i.valueNode,a,u,f,x,p,i.dir,r]);oe(()=>h(),[h]);const[E,_]=e.useState();oe(()=>{u&&_(window.getComputedStyle(u).zIndex)},[u]);const G=e.useCallback(R=>{R&&m.current===!0&&(h(),l==null||l(),m.current=!1)},[h,l]);return e.createElement(dn,{scope:n,contentWrapper:a,shouldExpandOnScrollRef:g,onScrollButtonChange:G},e.createElement("div",{ref:d,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:E}},e.createElement(W.div,I({},s,{ref:$,style:{boxSizing:"border-box",maxHeight:"100%",...s.style}}))))}),ke=e.forwardRef((t,o)=>{const{__scopeSelect:n,align:r="start",collisionPadding:s=Q,...i}=t,c=Se(n);return e.createElement(jt,I({},c,i,{ref:o,align:r,collisionPadding:s,style:{boxSizing:"border-box",...i.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}}))}),[dn,un]=le(ie,{}),Fe="SelectViewport",fn=e.forwardRef((t,o)=>{const{__scopeSelect:n,...r}=t,s=ge(Fe,n),i=un(Fe,n),c=U(o,s.onViewportChange),a=e.useRef(0);return e.createElement(e.Fragment,null,e.createElement("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"}}),e.createElement($e.Slot,{scope:n},e.createElement(W.div,I({"data-radix-select-viewport":"",role:"presentation"},r,{ref:c,style:{position:"relative",flex:1,overflow:"auto",...r.style},onScroll:M(r.onScroll,d=>{const u=d.currentTarget,{contentWrapper:v,shouldExpandOnScrollRef:$}=i;if($!=null&&$.current&&v){const P=Math.abs(a.current-u.scrollTop);if(P>0){const g=window.innerHeight-Q*2,m=parseFloat(v.style.minHeight),f=parseFloat(v.style.height),x=Math.max(m,f);if(x<g){const p=x+P,l=Math.min(g,p),h=p-l;v.style.height=l+"px",v.style.bottom==="0px"&&(u.scrollTop=h>0?h:0,v.style.justifyContent="flex-end")}}}a.current=u.scrollTop})}))))}),pn="SelectGroup",[vn,Yn]=le(pn),hn=e.forwardRef((t,o)=>{const{__scopeSelect:n,...r}=t,s=ye();return e.createElement(vn,{scope:n,id:s},e.createElement(W.div,I({role:"group","aria-labelledby":s},r,{ref:o})))}),Ee="SelectItem",[mn,Ge]=le(Ee),$n=e.forwardRef((t,o)=>{const{__scopeSelect:n,value:r,disabled:s=!1,textValue:i,...c}=t,a=re(Ee,n),d=ge(Ee,n),u=a.value===r,[v,$]=e.useState(i??""),[P,g]=e.useState(!1),m=U(o,p=>{var l;return(l=d.itemRefCallback)===null||l===void 0?void 0:l.call(d,p,r,s)}),f=ye(),x=()=>{s||(a.onValueChange(r),a.onOpenChange(!1))};return e.createElement(mn,{scope:n,value:r,disabled:s,textId:f,isSelected:u,onItemTextChange:e.useCallback(p=>{$(l=>{var h;return l||((h=p==null?void 0:p.textContent)!==null&&h!==void 0?h:"").trim()})},[])},e.createElement($e.ItemSlot,{scope:n,value:r,disabled:s,textValue:v},e.createElement(W.div,I({role:"option","aria-labelledby":f,"data-highlighted":P?"":void 0,"aria-selected":u&&P,"data-state":u?"checked":"unchecked","aria-disabled":s||void 0,"data-disabled":s?"":void 0,tabIndex:s?void 0:-1},c,{ref:m,onFocus:M(c.onFocus,()=>g(!0)),onBlur:M(c.onBlur,()=>g(!1)),onPointerUp:M(c.onPointerUp,x),onPointerMove:M(c.onPointerMove,p=>{if(s){var l;(l=d.onItemLeave)===null||l===void 0||l.call(d)}else p.currentTarget.focus({preventScroll:!0})}),onPointerLeave:M(c.onPointerLeave,p=>{if(p.currentTarget===document.activeElement){var l;(l=d.onItemLeave)===null||l===void 0||l.call(d)}}),onKeyDown:M(c.onKeyDown,p=>{var l;((l=d.searchRef)===null||l===void 0?void 0:l.current)!==""&&p.key===" "||(Gt.includes(p.key)&&x(),p.key===" "&&p.preventDefault())})}))))}),he="SelectItemText",gn=e.forwardRef((t,o)=>{const{__scopeSelect:n,className:r,style:s,...i}=t,c=re(he,n),a=ge(he,n),d=Ge(he,n),u=Qt(he,n),[v,$]=e.useState(null),P=U(o,p=>$(p),d.onItemTextChange,p=>{var l;return(l=a.itemTextRefCallback)===null||l===void 0?void 0:l.call(a,p,d.value,d.disabled)}),g=v==null?void 0:v.textContent,m=e.useMemo(()=>e.createElement("option",{key:d.value,value:d.value,disabled:d.disabled},g),[d.disabled,d.value,g]),{onNativeOptionAdd:f,onNativeOptionRemove:x}=u;return oe(()=>(f(m),()=>x(m)),[f,x,m]),e.createElement(e.Fragment,null,e.createElement(W.span,I({id:d.textId},i,{ref:P})),d.isSelected&&c.valueNode&&!c.valueNodeHasChildren?Le.createPortal(i.children,c.valueNode):null)}),bn="SelectItemIndicator",xn=e.forwardRef((t,o)=>{const{__scopeSelect:n,...r}=t;return Ge(bn,n).isSelected?e.createElement(W.span,I({"aria-hidden":!0},r,{ref:o})):null}),qe=e.forwardRef((t,o)=>{const{value:n,...r}=t,s=e.useRef(null),i=U(o,s),c=xt(n);return e.useEffect(()=>{const a=s.current,d=window.HTMLSelectElement.prototype,v=Object.getOwnPropertyDescriptor(d,"value").set;if(c!==n&&v){const $=new Event("change",{bubbles:!0});v.call(a,n),a.dispatchEvent($)}},[c,n]),e.createElement(Yt,{asChild:!0},e.createElement("select",I({},r,{ref:i,defaultValue:n})))});qe.displayName="BubbleSelect";function Ze(t){const o=ce(t),n=e.useRef(""),r=e.useRef(0),s=e.useCallback(c=>{const a=n.current+c;o(a),function d(u){n.current=u,window.clearTimeout(r.current),u!==""&&(r.current=window.setTimeout(()=>d(""),1e3))}(a)},[o]),i=e.useCallback(()=>{n.current="",window.clearTimeout(r.current)},[]);return e.useEffect(()=>()=>window.clearTimeout(r.current),[]),[n,s,i]}function Je(t,o,n){const s=o.length>1&&Array.from(o).every(u=>u===o[0])?o[0]:o,i=n?t.indexOf(n):-1;let c=wn(t,Math.max(i,0));s.length===1&&(c=c.filter(u=>u!==n));const d=c.find(u=>u.textValue.toLowerCase().startsWith(s.toLowerCase()));return d!==n?d:void 0}function wn(t,o){return t.map((n,r)=>t[(o+r)%t.length])}const En=en,yn=nn,Cn=sn,Sn=fn,Pn=$n,Tn=xn,On=L(wt)`
  position: relative;
`,In=L(En)``,_n=L(yn)`
  all: unset;
  border: 1px solid var(--colors-blackA6);
  padding: 0 var(--space-3);
  display: flex;
  z-index: 0;
  justify-content: space-between;
  background: var(--colors-whiteA4);
  height: 42px;
  flex-direction: row;
  align-items: center;
  gap: var(--space-3);
  position: relative;
  cursor: text;
  transition: var(--transition-15);

  &:hover {
    cursor: pointer;
    background-color: var(--colors-sandA3);
  }

  :focus-within {
    border: 1px solid var(--colors-blue11);
  }
`,Rn=L(Cn)`
  all: unset;
  overflow: hidden;
  background: var(--colors-whiteA12);
  width: var(--radix-select-trigger-width) !important;
`,Dn=L(Sn)`
  all: unset;
  background: var(--colors-whiteA12);
  border: 1px solid var(--colors-blackA6);
  border-top: none;
  transition: var(--transition-15);
`,An=L(Tn)`
  all: unset;
`,Nn=L(Pn)`
  all: unset;
  height: 36px;
  font-size: var(--fontSizes-3);
  line-height: 1;
  color: var(--colors-blackA11);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  user-select: none;
  padding: 0 var(--space-3);
  transition: var(--transition-15);
  cursor: pointer;

  &[data-disabled] {
    color: var(--colors-blackA5);
    pointer-events: none;
  }

  &[data-highlighted] {
    outline: none;
    color: var(--colors-blackA12);
  }
`,kn=L(gn)`
  all: unset;
`,Fn=L(rn)``,Mn=L(hn)`
  all: unset;
`,Ln=L(an)`
  z-index: 5;
`,Hn=L.label`
  all: unset;
  background: transparent;
  font-size: var(--fontSizes-2);
  color: var(--colors-blackA12);
  font-weight: 600;
`,Wn=L.label`
  background: transparent;
  font-size: var(--fontSizes-2);
  color: var(--colors-blackA10);
`,Vn=L.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  position: absolute;
  top: -10px;
  background: var(--colors-whiteA12) !important;
  z-index: 1;
  left: var(--space-2);
  padding: 0 var(--space-1);

  :empty {
    display: none;
  }
`,Bn=L.div`
  color: var(--colors-blackA10);
`,Kn=e.forwardRef(({children:t,value:o,...n},r)=>O.jsxs(Nn,{value:o,...n,ref:r,children:[O.jsx(kn,{children:t}),O.jsx(An,{children:O.jsx(He.Check,{width:20,height:20,fill:"colors-blackA12"})})]})),Xn=({items:t,value:o,onValueChange:n,label:r,subLabel:s,stretched:i,placeholder:c})=>{const[a,d]=e.useState(!1);return O.jsx(On,{direction:"column",gap:"space-1",width:i?"100%":"auto",children:O.jsxs(In,{onValueChange:n,value:o,open:a,onOpenChange:d,children:[O.jsxs(Vn,{children:[r&&O.jsx(Hn,{children:r}),s&&O.jsx(Wn,{children:s})]}),O.jsxs(_n,{"aria-label":"Food",children:[O.jsx(Fn,{placeholder:c?O.jsx(Bn,{children:c}):""}),O.jsx(Te.div,{initial:!1,animate:a?"open":"closed",className:"menu",children:O.jsx(Te.div,{variants:{open:{rotate:180},closed:{rotate:0}},transition:{duration:.2},style:{originY:.55},children:O.jsx(He.ChevronDown,{width:20,height:20,fill:"colors-blackA8"})})})]}),O.jsx(Ln,{children:O.jsx(Rn,{position:"popper",children:O.jsx(Dn,{children:O.jsx(Mn,{children:t.map((u,v)=>O.jsx(Kn,{value:u.value,children:(u==null?void 0:u.title)??u.value},v))})})})})]})})};export{Xn as S};