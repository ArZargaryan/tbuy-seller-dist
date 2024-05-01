import{p as N,q as U,s as G,_ as o,r as d,z as _,A as R,j as l,D as I,E as D,w as x}from"./index-786c574d.js";import{a as L}from"./Menu-0bae6528.js";import{f as Z,i as tt,a as et}from"./createSvgIcon-ccd3771d.js";import{B as st}from"./ButtonBase-c77f3e05.js";import{i as E}from"./useSlotProps-0bf0a99e.js";function ot(t){return U("MuiListItem",t)}const at=N("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]),b=at,nt=N("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]),it=nt;function rt(t){return U("MuiListItemSecondaryAction",t)}N("MuiListItemSecondaryAction",["root","disableGutters"]);const ct=["className"],lt=t=>{const{disableGutters:e,classes:s}=t;return D({root:["root",e&&"disableGutters"]},rt,s)},dt=G("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:s}=t;return[e.root,s.disableGutters&&e.disableGutters]}})(({ownerState:t})=>o({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})),T=d.forwardRef(function(e,s){const a=_({props:e,name:"MuiListItemSecondaryAction"}),{className:n}=a,i=R(a,ct),p=d.useContext(L),u=o({},a,{disableGutters:p.disableGutters}),f=lt(u);return l.jsx(dt,o({className:I(f.root,n),ownerState:u,ref:s},i))});T.muiName="ListItemSecondaryAction";const pt=T,ut=["className"],mt=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],bt=(t,e)=>{const{ownerState:s}=t;return[e.root,s.dense&&e.dense,s.alignItems==="flex-start"&&e.alignItemsFlexStart,s.divider&&e.divider,!s.disableGutters&&e.gutters,!s.disablePadding&&e.padding,s.button&&e.button,s.hasSecondaryAction&&e.secondaryAction]},ft=t=>{const{alignItems:e,button:s,classes:a,dense:n,disabled:i,disableGutters:p,disablePadding:u,divider:f,hasSecondaryAction:g,selected:A}=t;return D({root:["root",n&&"dense",!p&&"gutters",!u&&"padding",f&&"divider",i&&"disabled",s&&"button",e==="flex-start"&&"alignItemsFlexStart",g&&"secondaryAction",A&&"selected"],container:["container"]},ot,a)},gt=G("div",{name:"MuiListItem",slot:"Root",overridesResolver:bt})(({theme:t,ownerState:e})=>o({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!e.disablePadding&&o({paddingTop:8,paddingBottom:8},e.dense&&{paddingTop:4,paddingBottom:4},!e.disableGutters&&{paddingLeft:16,paddingRight:16},!!e.secondaryAction&&{paddingRight:48}),!!e.secondaryAction&&{[`& > .${it.root}`]:{paddingRight:48}},{[`&.${b.focusVisible}`]:{backgroundColor:(t.vars||t).palette.action.focus},[`&.${b.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:x(t.palette.primary.main,t.palette.action.selectedOpacity),[`&.${b.focusVisible}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.focusOpacity}))`:x(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},[`&.${b.disabled}`]:{opacity:(t.vars||t).palette.action.disabledOpacity}},e.alignItems==="flex-start"&&{alignItems:"flex-start"},e.divider&&{borderBottom:`1px solid ${(t.vars||t).palette.divider}`,backgroundClip:"padding-box"},e.button&&{transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${b.selected}:hover`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:x(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:x(t.palette.primary.main,t.palette.action.selectedOpacity)}}},e.hasSecondaryAction&&{paddingRight:48})),vt=G("li",{name:"MuiListItem",slot:"Container",overridesResolver:(t,e)=>e.container})({position:"relative"}),Ct=d.forwardRef(function(e,s){const a=_({props:e,name:"MuiListItem"}),{alignItems:n="center",autoFocus:i=!1,button:p=!1,children:u,className:f,component:g,components:A={},componentsProps:O={},ContainerComponent:M="li",ContainerProps:{className:z}={},dense:h=!1,disabled:j=!1,disableGutters:$=!1,disablePadding:q=!1,divider:H=!1,focusVisibleClassName:W,secondaryAction:k,selected:Y=!1,slotProps:J={},slots:K={}}=a,Q=R(a.ContainerProps,ut),X=R(a,mt),B=d.useContext(L),S=d.useMemo(()=>({dense:h||B.dense||!1,alignItems:n,disableGutters:$}),[n,B.dense,h,$]),P=d.useRef(null);Z(()=>{i&&P.current&&P.current.focus()},[i]);const m=d.Children.toArray(u),V=m.length&&tt(m[m.length-1],["ListItemSecondaryAction"]),C=o({},a,{alignItems:n,autoFocus:i,button:p,dense:S.dense,disabled:j,disableGutters:$,disablePadding:q,divider:H,hasSecondaryAction:V,selected:Y}),F=ft(C),w=et(P,s),y=K.root||A.Root||gt,v=J.root||O.root||{},r=o({className:I(F.root,v.className,f),disabled:j},X);let c=g||"li";return p&&(r.component=g||"div",r.focusVisibleClassName=I(b.focusVisible,W),c=st),V?(c=!r.component&&!g?"div":c,M==="li"&&(c==="li"?c="div":r.component==="li"&&(r.component="div")),l.jsx(L.Provider,{value:S,children:l.jsxs(vt,o({as:M,className:I(F.container,z),ref:w,ownerState:C},Q,{children:[l.jsx(y,o({},v,!E(y)&&{as:c,ownerState:o({},C,v.ownerState)},r,{children:m})),m.pop()]}))})):l.jsx(L.Provider,{value:S,children:l.jsxs(y,o({},v,{as:c,ref:w},!E(y)&&{ownerState:o({},C,v.ownerState)},r,{children:[m,k&&l.jsx(pt,{children:k})]}))})}),$t=Ct;export{$t as L};