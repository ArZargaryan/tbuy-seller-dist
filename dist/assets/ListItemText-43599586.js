import{s as P,_ as n,r as h,z as j,A as v,T as p,j as d,D as C,E as N}from"./index-c419738b.js";import{a as R}from"./Menu-8b625b44.js";import{l as f,g as _}from"./listItemTextClasses-70310b0d.js";const E=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],$=e=>{const{classes:s,inset:r,primary:a,secondary:c,dense:y}=e;return N({root:["root",r&&"inset",y&&"dense",a&&c&&"multiline"],primary:["primary"],secondary:["secondary"]},_,s)},k=P("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(e,s)=>{const{ownerState:r}=e;return[{[`& .${f.primary}`]:s.primary},{[`& .${f.secondary}`]:s.secondary},s.root,r.inset&&s.inset,r.primary&&r.secondary&&s.multiline,r.dense&&s.dense]}})(({ownerState:e})=>n({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},e.primary&&e.secondary&&{marginTop:6,marginBottom:6},e.inset&&{paddingLeft:56})),w=h.forwardRef(function(s,r){const a=j({props:s,name:"MuiListItemText"}),{children:c,className:y,disableTypography:i=!1,inset:g=!1,primary:x,primaryTypographyProps:m,secondary:L,secondaryTypographyProps:b}=a,I=v(a,E),{dense:u}=h.useContext(R);let o=x??c,t=L;const T=n({},a,{disableTypography:i,inset:g,primary:!!o,secondary:!!t,dense:u}),l=$(T);return o!=null&&o.type!==p&&!i&&(o=d.jsx(p,n({variant:u?"body2":"body1",className:l.primary,component:m!=null&&m.variant?void 0:"span",display:"block"},m,{children:o}))),t!=null&&t.type!==p&&!i&&(t=d.jsx(p,n({variant:"body2",className:l.secondary,color:"text.secondary",display:"block"},b,{children:t}))),d.jsxs(k,n({className:C(l.root,y),ownerState:T,ref:r},I,{children:[o,t]}))}),W=w;export{W as L};
