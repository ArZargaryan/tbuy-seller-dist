import{q as tt,p as et,s as T,_ as o,r as d,z as nt,A as it,j as C,D as ot,E as rt,a3 as st}from"./index-2bc117be.js";import{T as at,g as A}from"./Menu-6b8c360a.js";import{u as lt}from"./useSlotProps-97c8360a.js";import{a as pt}from"./createSvgIcon-bae563fb.js";function dt(n){return tt("MuiCollapse",n)}et("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);const ct=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],ut=n=>{const{orientation:e,classes:r}=n,c={root:["root",`${e}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${e}`],wrapperInner:["wrapperInner",`${e}`]};return rt(c,dt,r)},ht=T("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:r}=n;return[e.root,e[r.orientation],r.state==="entered"&&e.entered,r.state==="exited"&&!r.in&&r.collapsedSize==="0px"&&e.hidden]}})(({theme:n,ownerState:e})=>o({height:0,overflow:"hidden",transition:n.transitions.create("height")},e.orientation==="horizontal"&&{height:"auto",width:0,transition:n.transitions.create("width")},e.state==="entered"&&o({height:"auto",overflow:"visible"},e.orientation==="horizontal"&&{width:"auto"}),e.state==="exited"&&!e.in&&e.collapsedSize==="0px"&&{visibility:"hidden"})),mt=T("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(n,e)=>e.wrapper})(({ownerState:n})=>o({display:"flex",width:"100%"},n.orientation==="horizontal"&&{width:"auto",height:"100%"})),ft=T("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(n,e)=>e.wrapperInner})(({ownerState:n})=>o({width:"100%"},n.orientation==="horizontal"&&{width:"auto",height:"100%"})),U=d.forwardRef(function(e,r){const c=nt({props:e,name:"MuiCollapse"}),{addEndListener:S,children:_,className:b,collapsedSize:g="0px",component:q,easing:$,in:D,onEnter:W,onEntered:j,onEntering:I,onExit:M,onExited:k,onExiting:F,orientation:H="vertical",style:z,timeout:a=st.standard,TransitionComponent:B=at}=c,G=it(c,ct),x=o({},c,{orientation:H,collapsedSize:g}),u=ut(x),L=lt(),N=d.useRef(),l=d.useRef(null),R=d.useRef(),E=typeof g=="number"?`${g}px`:g,h=H==="horizontal",m=h?"width":"height";d.useEffect(()=>()=>{clearTimeout(N.current)},[]);const w=d.useRef(null),J=pt(r,w),p=t=>i=>{if(t){const s=w.current;i===void 0?t(s):t(s,i)}},v=()=>l.current?l.current[h?"clientWidth":"clientHeight"]:0,K=p((t,i)=>{l.current&&h&&(l.current.style.position="absolute"),t.style[m]=E,W&&W(t,i)}),O=p((t,i)=>{const s=v();l.current&&h&&(l.current.style.position="");const{duration:f,easing:y}=A({style:z,timeout:a,easing:$},{mode:"enter"});if(a==="auto"){const P=L.transitions.getAutoHeightDuration(s);t.style.transitionDuration=`${P}ms`,R.current=P}else t.style.transitionDuration=typeof f=="string"?f:`${f}ms`;t.style[m]=`${s}px`,t.style.transitionTimingFunction=y,I&&I(t,i)}),Q=p((t,i)=>{t.style[m]="auto",j&&j(t,i)}),V=p(t=>{t.style[m]=`${v()}px`,M&&M(t)}),X=p(k),Y=p(t=>{const i=v(),{duration:s,easing:f}=A({style:z,timeout:a,easing:$},{mode:"exit"});if(a==="auto"){const y=L.transitions.getAutoHeightDuration(i);t.style.transitionDuration=`${y}ms`,R.current=y}else t.style.transitionDuration=typeof s=="string"?s:`${s}ms`;t.style[m]=E,t.style.transitionTimingFunction=f,F&&F(t)}),Z=t=>{a==="auto"&&(N.current=setTimeout(t,R.current||0)),S&&S(w.current,t)};return C.jsx(B,o({in:D,onEnter:K,onEntered:Q,onEntering:O,onExit:V,onExited:X,onExiting:Y,addEndListener:Z,nodeRef:w,timeout:a==="auto"?null:a},G,{children:(t,i)=>C.jsx(ht,o({as:q,className:ot(u.root,b,{entered:u.entered,exited:!D&&E==="0px"&&u.hidden}[t]),style:o({[h?"minWidth":"minHeight"]:E},z),ownerState:o({},x,{state:t}),ref:J},i,{children:C.jsx(mt,{ownerState:o({},x,{state:t}),className:u.wrapper,ref:l,children:C.jsx(ft,{ownerState:o({},x,{state:t}),className:u.wrapperInner,children:_})})}))}))});U.muiSupportAuto=!0;const yt=U;export{yt as C};
