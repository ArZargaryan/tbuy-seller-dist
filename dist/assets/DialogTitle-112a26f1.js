import{p as M,q as S,r as n,s as u,v as p,_ as t,z as B,A as w,j as l,D as g,E as R,T as V}from"./index-c419738b.js";import{u as G}from"./useSlotProps-33460e79.js";import{B as J,M as O,F as Q}from"./Menu-8b625b44.js";import{P as j}from"./Paper-fe9a4639.js";import{b as Z}from"./createSvgIcon-31eb99b3.js";function oo(e){return S("MuiDialog",e)}const eo=M("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),k=eo,ao=n.createContext({}),F=ao,ro=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],to=u(J,{name:"MuiDialog",slot:"Backdrop",overrides:(e,o)=>o.backdrop})({zIndex:-1}),io=e=>{const{classes:o,scroll:a,maxWidth:r,fullWidth:s,fullScreen:i}=e,c={root:["root"],container:["container",`scroll${p(a)}`],paper:["paper",`paperScroll${p(a)}`,`paperWidth${p(String(r))}`,s&&"paperFullWidth",i&&"paperFullScreen"]};return R(c,oo,o)},so=u(O,{name:"MuiDialog",slot:"Root",overridesResolver:(e,o)=>o.root})({"@media print":{position:"absolute !important"}}),lo=u("div",{name:"MuiDialog",slot:"Container",overridesResolver:(e,o)=>{const{ownerState:a}=e;return[o.container,o[`scroll${p(a.scroll)}`]]}})(({ownerState:e})=>t({height:"100%","@media print":{height:"auto"},outline:0},e.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},e.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&::after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),no=u(j,{name:"MuiDialog",slot:"Paper",overridesResolver:(e,o)=>{const{ownerState:a}=e;return[o.paper,o[`scrollPaper${p(a.scroll)}`],o[`paperWidth${p(String(a.maxWidth))}`],a.fullWidth&&o.paperFullWidth,a.fullScreen&&o.paperFullScreen]}})(({theme:e,ownerState:o})=>t({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},o.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},o.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!o.maxWidth&&{maxWidth:"calc(100% - 64px)"},o.maxWidth==="xs"&&{maxWidth:e.breakpoints.unit==="px"?Math.max(e.breakpoints.values.xs,444):`max(${e.breakpoints.values.xs}${e.breakpoints.unit}, 444px)`,[`&.${k.paperScrollBody}`]:{[e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},o.maxWidth&&o.maxWidth!=="xs"&&{maxWidth:`${e.breakpoints.values[o.maxWidth]}${e.breakpoints.unit}`,[`&.${k.paperScrollBody}`]:{[e.breakpoints.down(e.breakpoints.values[o.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},o.fullWidth&&{width:"calc(100% - 64px)"},o.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${k.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),po=n.forwardRef(function(o,a){const r=B({props:o,name:"MuiDialog"}),s=G(),i={enter:s.transitions.duration.enteringScreen,exit:s.transitions.duration.leavingScreen},{"aria-describedby":c,"aria-labelledby":m,BackdropComponent:h,BackdropProps:b,children:N,className:A,disableEscapeKeyDown:y=!1,fullScreen:E=!1,fullWidth:U=!1,maxWidth:I="sm",onBackdropClick:v,onClose:f,open:P,PaperComponent:_=j,PaperProps:T={},scroll:L="paper",TransitionComponent:z=Q,transitionDuration:$=i,TransitionProps:K}=r,X=w(r,ro),x=t({},r,{disableEscapeKeyDown:y,fullScreen:E,fullWidth:U,maxWidth:I,scroll:L}),D=io(x),C=n.useRef(),Y=d=>{C.current=d.target===d.currentTarget},H=d=>{C.current&&(C.current=null,v&&v(d),f&&f(d,"backdropClick"))},W=Z(m),q=n.useMemo(()=>({titleId:W}),[W]);return l.jsx(so,t({className:g(D.root,A),closeAfterTransition:!0,components:{Backdrop:to},componentsProps:{backdrop:t({transitionDuration:$,as:h},b)},disableEscapeKeyDown:y,onClose:f,open:P,ref:a,onClick:H,ownerState:x},X,{children:l.jsx(z,t({appear:!0,in:P,timeout:$,role:"presentation"},K,{children:l.jsx(lo,{className:g(D.container),onMouseDown:Y,ownerState:x,children:l.jsx(no,t({as:_,elevation:24,role:"dialog","aria-describedby":c,"aria-labelledby":W},T,{className:g(D.paper,T.className),ownerState:x,children:l.jsx(F.Provider,{value:q,children:N})}))})}))}))}),ko=po;function co(e){return S("MuiDialogTitle",e)}const uo=M("MuiDialogTitle",["root"]),yo=uo,mo=["className","id"],xo=e=>{const{classes:o}=e;return R({root:["root"]},co,o)},go=u(V,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(e,o)=>o.root})({padding:"16px 24px",flex:"0 0 auto"}),ho=n.forwardRef(function(o,a){const r=B({props:o,name:"MuiDialogTitle"}),{className:s,id:i}=r,c=w(r,mo),m=r,h=xo(m),{titleId:b=i}=n.useContext(F);return l.jsx(go,t({component:"h2",className:g(h.root,s),ownerState:m,ref:a,variant:"h6",id:i??b},c))}),vo=ho;export{ko as D,vo as a,yo as d};
