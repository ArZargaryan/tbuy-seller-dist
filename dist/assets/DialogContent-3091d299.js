import{q as d,p,s as g,_ as i,r as u,z as f,A as v,j as x,D,E as C}from"./index-2bc117be.js";import{d as m}from"./DialogTitle-faaf543f.js";function S(o){return d("MuiDialogActions",o)}p("MuiDialogActions",["root","spacing"]);const w=["className","disableSpacing"],A=o=>{const{classes:s,disableSpacing:t}=o;return C({root:["root",!t&&"spacing"]},S,s)},b=g("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(o,s)=>{const{ownerState:t}=o;return[s.root,!t.disableSpacing&&s.spacing]}})(({ownerState:o})=>i({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!o.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})),y=u.forwardRef(function(s,t){const e=f({props:s,name:"MuiDialogActions"}),{className:a,disableSpacing:r=!1}=e,l=v(e,w),n=i({},e,{disableSpacing:r}),c=A(n);return x.jsx(b,i({className:D(c.root,a),ownerState:n,ref:t},l))}),T=y;function R(o){return d("MuiDialogContent",o)}p("MuiDialogContent",["root","dividers"]);const M=["className","dividers"],$=o=>{const{classes:s,dividers:t}=o;return C({root:["root",t&&"dividers"]},R,s)},j=g("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(o,s)=>{const{ownerState:t}=o;return[s.root,t.dividers&&s.dividers]}})(({theme:o,ownerState:s})=>i({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},s.dividers?{padding:"16px 24px",borderTop:`1px solid ${(o.vars||o).palette.divider}`,borderBottom:`1px solid ${(o.vars||o).palette.divider}`}:{[`.${m.root} + &`]:{paddingTop:0}})),N=u.forwardRef(function(s,t){const e=f({props:s,name:"MuiDialogContent"}),{className:a,dividers:r=!1}=e,l=v(e,M),n=i({},e,{dividers:r}),c=$(n);return x.jsx(j,i({className:D(c.root,a),ownerState:n,ref:t},l))}),E=N;export{T as D,E as a};
