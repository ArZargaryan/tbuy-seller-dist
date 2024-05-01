import{j as e,q as _,p as L,s as y,_ as x,r as d,z as U,A as z,D as F,E as N,u as a,R as $}from"./index-2bc117be.js";import{r as I,i as A}from"./createSvgIcon-5f6a3721.js";import{d as B}from"./TaskAlt-09bcffb0.js";import{D as E,a as q}from"./DialogTitle-faaf543f.js";import{L as O}from"./Menu-6b8c360a.js";import{L as H}from"./ListItem-d6872693.js";import{L as J}from"./ListItemText-c9403779.js";import{c as K}from"./createSvgIcon-bae563fb.js";import{T as V}from"./TextField-2c028d2c.js";import{I as W}from"./IconButton-0e32ca7d.js";import{P as Y}from"./Paper-85fb9fba.js";import{a as G,T as v}from"./Tabs-2b72eadc.js";import"./useSlotProps-97c8360a.js";import"./react-is.production.min-a192e302.js";import"./ButtonBase-8fbd39f9.js";import"./listItemTextClasses-13e85d27.js";import"./useFormControl-6d476b15.js";const Q=K(e.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function X(t){return _("MuiAvatar",t)}L("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const Z=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],ee=t=>{const{classes:o,variant:s,colorDefault:n}=t;return N({root:["root",s,n&&"colorDefault"],img:["img"],fallback:["fallback"]},X,o)},te=y("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:s}=t;return[o.root,o[s.variant],s.colorDefault&&o.colorDefault]}})(({theme:t,ownerState:o})=>x({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},o.variant==="rounded"&&{borderRadius:(t.vars||t).shape.borderRadius},o.variant==="square"&&{borderRadius:0},o.colorDefault&&x({color:(t.vars||t).palette.background.default},t.vars?{backgroundColor:t.vars.palette.Avatar.defaultBg}:{backgroundColor:t.palette.mode==="light"?t.palette.grey[400]:t.palette.grey[600]}))),oe=y("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(t,o)=>o.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),re=y(Q,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(t,o)=>o.fallback})({width:"75%",height:"75%"});function ae({crossOrigin:t,referrerPolicy:o,src:s,srcSet:n}){const[c,l]=d.useState(!1);return d.useEffect(()=>{if(!s&&!n)return;l(!1);let u=!0;const i=new Image;return i.onload=()=>{u&&l("loaded")},i.onerror=()=>{u&&l("error")},i.crossOrigin=t,i.referrerPolicy=o,i.src=s,n&&(i.srcset=n),()=>{u=!1}},[t,o,s,n]),c}const se=d.forwardRef(function(o,s){const n=U({props:o,name:"MuiAvatar"}),{alt:c,children:l,className:u,component:i="div",imgProps:f,sizes:g,src:r,srcSet:p,variant:m="circular"}=n,C=z(n,Z);let h=null;const D=ae(x({},f,{src:r,srcSet:p})),M=r||p,k=M&&D!=="error",b=x({},n,{colorDefault:!k,component:i,variant:m}),j=ee(b);return k?h=e.jsx(oe,x({alt:c,srcSet:p,src:r,sizes:g,ownerState:b,className:j.img},f)):l!=null?h=l:M&&c?h=c[0]:h=e.jsx(re,{ownerState:b,className:j.fallback}),e.jsx(te,x({as:i,ownerState:b,className:F(j.root,u),ref:s},C,{children:h}))}),ne=se;var S={},ie=A;Object.defineProperty(S,"__esModule",{value:!0});var R=S.default=void 0,le=ie(I()),ce=e,de=(0,le.default)((0,ce.jsx)("path",{d:"M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"}),"ChatBubble");R=S.default=de;var w={},ue=A;Object.defineProperty(w,"__esModule",{value:!0});var T=w.default=void 0,pe=ue(I()),fe=e,xe=(0,pe.default)((0,fe.jsx)("path",{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"}),"Send");T=w.default=xe;const ge=a(E)`
  .MuiPaper-root {
    position: fixed;
    top: ${({position:t})=>t.top}px;
    left: ${({position:t})=>t.left}px;
    transform: translate(-110%, -100%);
  }
`,me=a(q)`
  background-color: #f5f5f5;
  padding: 16px;
`,he=a(O)`
  padding: 0;
  max-height: 300px;
  width: 300px;
  height: 300px;
  overflow-y: auto;
`,ve=a(H)`
  display: flex;
  align-items: flex-end;
  &:not(:last-child) {
    border-bottom: 1px solid #e0e0e0;
  }
`,be=a.div`
  background-color: ${({owner:t})=>t?"#e0f7fa":"#ffffff"};
  border-radius: 10px;
  padding: 10px;
  max-width: 80%;
  margin-left: ${({owner:t})=>t?"auto":"none"};
`,je=a(J)`
  .MuiListItemText-primary {
    font-weight: bold;
  }
  .MuiListItemText-secondary {
    color: grey;
  }
`,ye=a(ne)`
  margin-right: 10px;
`,Se=a.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #f5f5f5;
`,we=a(V)`
  flex-grow: 1;
  margin-right: 10px;
`,Me=a(W)`
  color: #0177c1;
`,ke=({isOpen:t,onClose:o,position:s})=>{const[n,c]=d.useState(""),[l,u]=d.useState([]),i=()=>{n.trim()&&(u(r=>[...r,{text:n,timestamp:new Date().toLocaleTimeString(),owner:!0}]),c(""))},f=r=>{c(r.target.value)},g=r=>{r.key==="Enter"&&i()};return e.jsxs(ge,{position:s,onClose:o,open:t,children:[e.jsx(me,{children:"Chat with @Username"}),e.jsx(he,{children:l.map((r,p)=>e.jsxs(ve,{children:[!r.owner&&e.jsx(ye,{}),e.jsx(be,{owner:r.owner,children:e.jsx(je,{primary:r.text,secondary:r.timestamp})})]},p))}),e.jsxs(Se,{children:[e.jsx(we,{placeholder:"Введите сообщение...",variant:"outlined",value:n,onChange:f,onKeyPress:g}),e.jsx(Me,{onClick:i,children:e.jsx(T,{})})]})]})},P=({children:t,value:o,index:s})=>o===s?e.jsx("div",{children:t}):null,Pe=({idStatus:t})=>{const[o,s]=d.useState(0),n=(c,l)=>{s(l)};return e.jsxs("div",{children:[e.jsx(Y,{square:!0,children:e.jsxs(G,{value:o,onChange:n,children:[e.jsx(v,{label:"Messages"}),e.jsx(v,{label:"Questions and answers"}),e.jsx(v,{label:"Contact TBUY"}),e.jsx(v,{label:"Left comments"}),e.jsx(v,{label:"All chats"})]})}),e.jsx(P,{value:o,index:0}),e.jsx(P,{value:o,index:1})]})},Ie=a.div`
  font-weight: bold;
  font-size: 25px;
  margin-top: 20px;
  margin-bottom: 20px;
`,Ae=a.div`
  display: flex;
  background-color: white;
  flex-direction: column;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-top: 10px;
`,Re=a.div`
  display: flex;
  align-items: center;
`,Te=a.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`,Ce=a.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,De=a.span`
  font-weight: bold;
`,_e=a.span`
  color: grey;
  font-size: 12px;
`,Le=a.span`
  font-weight: bold;
  font-size: 13pt;
`,Ue=a.span`
  display: block;
  margin-top: 20px;
`,ze=a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Fe=a.div`
  flex: 1;
  min-width: 0;
`,Ne=a.img`
  width: 100px;
  height: 100px;
  //margin-left: 10px;
`,$e=a.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  color: #0177c1;
  border: none;
  border-radius: 50px;
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  overflow: hidden;

  &:hover {
    background-color: #e0e0e0;
  }
`,Be=a.button`
  background-color: rgba(255, 255, 255, 0);
  border: none;
  color: #a6a6a6;
  cursor: pointer;
  margin-left: auto;

  &:hover {
    color: #0177c1;
  }

  ${({isRead:t})=>t&&`
    color: #0177c1;
  `}
`,at=()=>{const[t,o]=d.useState(!1),s=d.useRef(null),[n,c]=d.useState({top:0,left:0}),[l,u]=$.useState([{id:"1",read:!1,username:"@John Doe",date:"2023-11-27",productName:"Electrolux EF-9552LOW",messageText:"lorem ipsum dollar euro never more you get the color",userAvatarUrl:"/public/no_photo.png",productImageUrl:"/public/mikrovolnovka.jpg"},{id:"2",read:!1,username:"@Jane Smith ElevenTwentyOne",date:"2023-11-26",productName:"Samsung Galaxy S22",messageText:"Your payment was received.",userAvatarUrl:"/public/no_photo.png",productImageUrl:"/public/mikrovolnovka.jpg"}]),i=r=>{const p=l.map(m=>m.id===r?{...m,read:!0}:m);u(p)},f=()=>{o(!0)},g=()=>{o(!1)};return d.useEffect(()=>{if(s.current){const r=s.current.getBoundingClientRect();c({top:r.top,left:r.left})}},[t]),e.jsxs("div",{children:[e.jsx(Ie,{children:"Messages"}),e.jsx(Pe,{idStatus:0}),l.map(r=>e.jsxs(Ae,{children:[e.jsxs(Re,{children:[e.jsx(Te,{src:r.userAvatarUrl,alt:"User Avatar"}),e.jsxs(Ce,{children:[e.jsx(De,{children:r.username}),e.jsx(_e,{children:r.date})]}),e.jsx(Be,{onClick:()=>i(r.id),"aria-label":"mark as read",isRead:r.read,children:e.jsx(B,{})})]}),e.jsxs(ze,{children:[e.jsxs(Fe,{children:[e.jsx(Le,{children:r.productName}),e.jsx(Ue,{children:r.messageText})]}),e.jsx(Ne,{src:r.productImageUrl,alt:"Product"})]})]},r.id)),e.jsx($e,{ref:s,onClick:f,children:e.jsx(R,{})}),e.jsx(ke,{isOpen:t,onClose:g,position:n})]})};export{at as default};
