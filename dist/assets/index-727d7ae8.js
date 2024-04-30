import{s as G,_ as j,w as Ne,r as m,z as Y,A as L,j as e,D as Q,E as X,q as Ce,p as _e,H as qe,J as E,K as ee,u as c,T as y,n as h,e as $e}from"./index-c419738b.js";import{r as M,i as k}from"./createSvgIcon-11e80f9b.js";import{d as Me}from"./Close-f4e82267.js";import{d as Ue}from"./ExpandMore-da86438f.js";import{B as Ke}from"./button_date-d339f235.js";import{T as Je}from"./TableContainer-81f43054.js";import{T as Ye,a as Qe,b as O,c as S,d as Xe}from"./TableRow-9490eb28.js";import{g as et}from"./dividerClasses-372366bd.js";import{f as tt,F,b as W,T as rt}from"./TextField-c48a1c0c.js";import{a as nt,R as V}from"./Radio-69edeb53.js";import{u as at,a as it,b as ot,c as ke}from"./createSvgIcon-31eb99b3.js";import{u as st}from"./useFormControl-f31c04cb.js";import{F as T}from"./FormControlLabel-acb0a2ca.js";import{I as J}from"./IconButton-0b600968.js";import{C as N}from"./Checkbox-852bbcec.js";import{B as Z}from"./Button-125100b5.js";import{P as Se}from"./Paper-fe9a4639.js";import{L as lt,d as ct}from"./SignalCellularAlt-e9ee3138.js";import{d as dt}from"./AddCircleOutline-53a10acb.js";import{d as pt}from"./BorderColor-1e56181a.js";import{d as ut}from"./DeleteForever-2ef328f9.js";import{B as Pe}from"./Box-cab087b7.js";import{u as ft}from"./useSlotProps-33460e79.js";import"./react-is.production.min-a192e302.js";import"./Menu-8b625b44.js";import"./ButtonBase-249fdcdb.js";import"./SwitchBase-2ecde832.js";import"./listItemIconClasses-07873b54.js";const xt=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],ht=t=>{const{absolute:r,children:n,classes:a,flexItem:i,light:o,orientation:d,textAlign:u,variant:x}=t;return X({root:["root",r&&"absolute",x,o&&"light",d==="vertical"&&"vertical",i&&"flexItem",n&&"withChildren",n&&d==="vertical"&&"withChildrenVertical",u==="right"&&d!=="vertical"&&"textAlignRight",u==="left"&&d!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",d==="vertical"&&"wrapperVertical"]},et,a)},mt=G("div",{name:"MuiDivider",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:n}=t;return[r.root,n.absolute&&r.absolute,r[n.variant],n.light&&r.light,n.orientation==="vertical"&&r.vertical,n.flexItem&&r.flexItem,n.children&&r.withChildren,n.children&&n.orientation==="vertical"&&r.withChildrenVertical,n.textAlign==="right"&&n.orientation!=="vertical"&&r.textAlignRight,n.textAlign==="left"&&n.orientation!=="vertical"&&r.textAlignLeft]}})(({theme:t,ownerState:r})=>j({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin"},r.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},r.light&&{borderColor:t.vars?`rgba(${t.vars.palette.dividerChannel} / 0.08)`:Ne(t.palette.divider,.08)},r.variant==="inset"&&{marginLeft:72},r.variant==="middle"&&r.orientation==="horizontal"&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},r.variant==="middle"&&r.orientation==="vertical"&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},r.orientation==="vertical"&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},r.flexItem&&{alignSelf:"stretch",height:"auto"}),({ownerState:t})=>j({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}}),({theme:t,ownerState:r})=>j({},r.children&&r.orientation!=="vertical"&&{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(t.vars||t).palette.divider}`}}),({theme:t,ownerState:r})=>j({},r.children&&r.orientation==="vertical"&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(t.vars||t).palette.divider}`}}),({ownerState:t})=>j({},t.textAlign==="right"&&t.orientation!=="vertical"&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},t.textAlign==="left"&&t.orientation!=="vertical"&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),gt=G("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(t,r)=>{const{ownerState:n}=t;return[r.wrapper,n.orientation==="vertical"&&r.wrapperVertical]}})(({theme:t,ownerState:r})=>j({display:"inline-block",paddingLeft:`calc(${t.spacing(1)} * 1.2)`,paddingRight:`calc(${t.spacing(1)} * 1.2)`},r.orientation==="vertical"&&{paddingTop:`calc(${t.spacing(1)} * 1.2)`,paddingBottom:`calc(${t.spacing(1)} * 1.2)`})),Ae=m.forwardRef(function(r,n){const a=Y({props:r,name:"MuiDivider"}),{absolute:i=!1,children:o,className:d,component:u=o?"div":"hr",flexItem:x=!1,light:f=!1,orientation:p="horizontal",role:v=u!=="hr"?"separator":void 0,textAlign:w="center",variant:C="fullWidth"}=a,_=L(a,xt),$=j({},a,{absolute:i,component:u,flexItem:x,light:f,orientation:p,role:v,textAlign:w,variant:C}),b=ht($);return e.jsx(mt,j({as:u,className:Q(b.root,d),role:v,ref:n,ownerState:$},_,{children:o?e.jsx(gt,{className:b.wrapper,ownerState:$,children:o}):null}))});Ae.muiSkipListHighlight=!0;const H=Ae;function vt(t){return Ce("MuiFormGroup",t)}_e("MuiFormGroup",["root","row","error"]);const jt=["className","row"],bt=t=>{const{classes:r,row:n,error:a}=t;return X({root:["root",n&&"row",a&&"error"]},vt,r)},yt=G("div",{name:"MuiFormGroup",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:n}=t;return[r.root,n.row&&r.row]}})(({ownerState:t})=>j({display:"flex",flexDirection:"column",flexWrap:"wrap"},t.row&&{flexDirection:"row"})),wt=m.forwardRef(function(r,n){const a=Y({props:r,name:"MuiFormGroup"}),{className:i,row:o=!1}=a,d=L(a,jt),u=st(),x=tt({props:a,muiFormControl:u,states:["error"]}),f=j({},a,{row:o,error:x.error}),p=bt(f);return e.jsx(yt,j({className:Q(p.root,i),ownerState:f,ref:n},d))}),Re=wt,Ct=m.createContext(),xe=Ct;function _t(t){return Ce("MuiGrid",t)}const $t=[0,1,2,3,4,5,6,7,8,9,10],Mt=["column-reverse","column","row-reverse","row"],kt=["nowrap","wrap-reverse","wrap"],B=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],St=_e("MuiGrid",["root","container","item","zeroMinWidth",...$t.map(t=>`spacing-xs-${t}`),...Mt.map(t=>`direction-xs-${t}`),...kt.map(t=>`wrap-xs-${t}`),...B.map(t=>`grid-xs-${t}`),...B.map(t=>`grid-sm-${t}`),...B.map(t=>`grid-md-${t}`),...B.map(t=>`grid-lg-${t}`),...B.map(t=>`grid-xl-${t}`)]),I=St,Pt=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function R(t){const r=parseFloat(t);return`${r}${String(t).replace(String(r),"")||"px"}`}function At({theme:t,ownerState:r}){let n;return t.breakpoints.keys.reduce((a,i)=>{let o={};if(r[i]&&(n=r[i]),!n)return a;if(n===!0)o={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(n==="auto")o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const d=E({values:r.columns,breakpoints:t.breakpoints.values}),u=typeof d=="object"?d[i]:d;if(u==null)return a;const x=`${Math.round(n/u*1e8)/1e6}%`;let f={};if(r.container&&r.item&&r.columnSpacing!==0){const p=t.spacing(r.columnSpacing);if(p!=="0px"){const v=`calc(${x} + ${R(p)})`;f={flexBasis:v,maxWidth:v}}}o=j({flexBasis:x,flexGrow:0,maxWidth:x},f)}return t.breakpoints.values[i]===0?Object.assign(a,o):a[t.breakpoints.up(i)]=o,a},{})}function Rt({theme:t,ownerState:r}){const n=E({values:r.direction,breakpoints:t.breakpoints.values});return ee({theme:t},n,a=>{const i={flexDirection:a};return a.indexOf("column")===0&&(i[`& > .${I.item}`]={maxWidth:"none"}),i})}function ze({breakpoints:t,values:r}){let n="";Object.keys(r).forEach(i=>{n===""&&r[i]!==0&&(n=i)});const a=Object.keys(t).sort((i,o)=>t[i]-t[o]);return a.slice(0,a.indexOf(n))}function zt({theme:t,ownerState:r}){const{container:n,rowSpacing:a}=r;let i={};if(n&&a!==0){const o=E({values:a,breakpoints:t.breakpoints.values});let d;typeof o=="object"&&(d=ze({breakpoints:t.breakpoints.values,values:o})),i=ee({theme:t},o,(u,x)=>{var f;const p=t.spacing(u);return p!=="0px"?{marginTop:`-${R(p)}`,[`& > .${I.item}`]:{paddingTop:R(p)}}:(f=d)!=null&&f.includes(x)?{}:{marginTop:0,[`& > .${I.item}`]:{paddingTop:0}}})}return i}function Bt({theme:t,ownerState:r}){const{container:n,columnSpacing:a}=r;let i={};if(n&&a!==0){const o=E({values:a,breakpoints:t.breakpoints.values});let d;typeof o=="object"&&(d=ze({breakpoints:t.breakpoints.values,values:o})),i=ee({theme:t},o,(u,x)=>{var f;const p=t.spacing(u);return p!=="0px"?{width:`calc(100% + ${R(p)})`,marginLeft:`-${R(p)}`,[`& > .${I.item}`]:{paddingLeft:R(p)}}:(f=d)!=null&&f.includes(x)?{}:{width:"100%",marginLeft:0,[`& > .${I.item}`]:{paddingLeft:0}}})}return i}function It(t,r,n={}){if(!t||t<=0)return[];if(typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number")return[n[`spacing-xs-${String(t)}`]];const a=[];return r.forEach(i=>{const o=t[i];Number(o)>0&&a.push(n[`spacing-${i}-${String(o)}`])}),a}const Dt=G("div",{name:"MuiGrid",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:n}=t,{container:a,direction:i,item:o,spacing:d,wrap:u,zeroMinWidth:x,breakpoints:f}=n;let p=[];a&&(p=It(d,f,r));const v=[];return f.forEach(w=>{const C=n[w];C&&v.push(r[`grid-${w}-${String(C)}`])}),[r.root,a&&r.container,o&&r.item,x&&r.zeroMinWidth,...p,i!=="row"&&r[`direction-xs-${String(i)}`],u!=="wrap"&&r[`wrap-xs-${String(u)}`],...v]}})(({ownerState:t})=>j({boxSizing:"border-box"},t.container&&{display:"flex",flexWrap:"wrap",width:"100%"},t.item&&{margin:0},t.zeroMinWidth&&{minWidth:0},t.wrap!=="wrap"&&{flexWrap:t.wrap}),Rt,zt,Bt,At);function Ot(t,r){if(!t||t<=0)return[];if(typeof t=="string"&&!Number.isNaN(Number(t))||typeof t=="number")return[`spacing-xs-${String(t)}`];const n=[];return r.forEach(a=>{const i=t[a];if(Number(i)>0){const o=`spacing-${a}-${String(i)}`;n.push(o)}}),n}const Ft=t=>{const{classes:r,container:n,direction:a,item:i,spacing:o,wrap:d,zeroMinWidth:u,breakpoints:x}=t;let f=[];n&&(f=Ot(o,x));const p=[];x.forEach(w=>{const C=t[w];C&&p.push(`grid-${w}-${String(C)}`)});const v={root:["root",n&&"container",i&&"item",u&&"zeroMinWidth",...f,a!=="row"&&`direction-xs-${String(a)}`,d!=="wrap"&&`wrap-xs-${String(d)}`,...p]};return X(v,_t,r)},Wt=m.forwardRef(function(r,n){const a=Y({props:r,name:"MuiGrid"}),{breakpoints:i}=ft(),o=qe(a),{className:d,columns:u,columnSpacing:x,component:f="div",container:p=!1,direction:v="row",item:w=!1,rowSpacing:C,spacing:_=0,wrap:$="wrap",zeroMinWidth:b=!1}=o,z=L(o,Pt),s=C||_,l=x||_,g=m.useContext(xe),de=p?u||12:g,pe={},ue=j({},z);i.keys.forEach(D=>{z[D]!=null&&(pe[D]=z[D],delete ue[D])});const fe=j({},o,{columns:de,container:p,direction:v,item:w,rowSpacing:s,columnSpacing:l,wrap:$,zeroMinWidth:b,spacing:_},pe,{breakpoints:i.keys}),Ee=Ft(fe);return e.jsx(xe.Provider,{value:de,children:e.jsx(Dt,j({ownerState:fe,className:Q(Ee.root,d),as:f,ref:n},ue))})}),he=Wt,Vt=["actions","children","defaultValue","name","onChange","value"],Tt=m.forwardRef(function(r,n){const{actions:a,children:i,defaultValue:o,name:d,onChange:u,value:x}=r,f=L(r,Vt),p=m.useRef(null),[v,w]=at({controlled:x,default:o,name:"RadioGroup"});m.useImperativeHandle(a,()=>({focus:()=>{let b=p.current.querySelector("input:not(:disabled):checked");b||(b=p.current.querySelector("input:not(:disabled)")),b&&b.focus()}}),[]);const C=it(n,p),_=ot(d),$=m.useMemo(()=>({name:_,onChange(b){w(b.target.value),u&&u(b,b.target.value)},value:v}),[_,u,w,v]);return e.jsx(nt.Provider,{value:$,children:e.jsx(Re,j({role:"radiogroup",ref:C},f,{children:i}))})}),me=Tt;var te={},Ht=k;Object.defineProperty(te,"__esModule",{value:!0});var Be=te.default=void 0,Zt=Ht(M()),q=e,Gt=(0,Zt.default)([(0,q.jsx)("path",{d:"m12 2-5.5 9h11z"},"0"),(0,q.jsx)("circle",{cx:"17.5",cy:"17.5",r:"4.5"},"1"),(0,q.jsx)("path",{d:"M3 13.5h8v8H3z"},"2")],"Category");Be=te.default=Gt;const Lt=()=>e.jsx(Je,{children:e.jsxs(Ye,{children:[e.jsx(Qe,{children:e.jsxs(O,{children:[e.jsx(S,{children:"Количество товаров"}),e.jsx(S,{children:"Стоимость"})]})}),e.jsxs(Xe,{children:[e.jsxs(O,{children:[e.jsx(S,{children:"1 - 10"}),e.jsx(S,{children:"$10/1h"})]}),e.jsxs(O,{children:[e.jsx(S,{children:"11 - 50"}),e.jsx(S,{children:"$20/1h"})]}),e.jsxs(O,{children:[e.jsx(S,{children:"51 - 100"}),e.jsx(S,{children:"$30/1h"})]})]})]})}),Et=[{name:"Электроника",subcategories:["Ноутбуки","Смартфоны","Часы"]},{name:"Одежда",subcategories:["Мужская","Женская","Детская"]}],Nt=["Бренд 1","Бренд 2","Бренд 3"],ge=[{name:"Товар 1",quantity:5,price:100,condition:"Новый"},{name:"Товар 2",quantity:3,price:50,condition:"Б/у"}],qt=c.div`
  display: flex;
  flex-direction: column;
  //background-color: #ff0000;
  gap: 10px;
  margin-bottom: 20px;
`,Ut=c.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  margin-right: 20px;
`,Kt=c.div`
  display: flex;
  flex-direction: column;
`,Jt=c.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 20px;
`,Yt=c.div`
  flex: 3;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  max-height: 800px;
  overflow: auto;
`,Qt=c.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  border-top: 2px solid rgb(190, 190, 190);
  padding-top: 20px;
`,Xt=c.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 50px;
`,e1=c(y)`
  font-weight: bold;
`,t1=c.div`
  background-color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
`,r1=c(y)`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`,ve=c.div`
  margin-bottom: 10px;
`,n1=c(Ue)`
  transition: transform 0.3s;
  transform: ${({isOpen:t})=>t?"rotate(180deg)":"rotate(0)"};
`,a1=c.div`
  margin-left: 20px;
`,i1=c.div`
  background-color: #f0f0f0;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 10px;
`,o1=c(y)`
  font-size: 14px;
`,s1=c(Z)`
  background-color: #f00;
  color: #fff;
  margin-left: auto; /* Выравнивание кнопки справа */
`,l1=c.div`
  display: flex;
  align-items: center;
  background-color: #f0f0f0;
  padding: 5px;
  border-radius: 5px;
`,c1=c(y)`
  font-size: 14px;
  margin-left: 5px;
`,d1=c.div`
  position: absolute;
  top: 0;
  right: 0;
`,p1=c(Se)`
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  position: relative;
  width: 200px;
  height: 200px;
`,u1=c.img`
  max-width: 100px;
  margin-bottom: 5px;
`,f1=c(Re)`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  max-width: 300px;
`,x1=c(Z)`
  width: 25px;
  height: 40px;
  margin: 5px;
  padding: 0;
`,h1=c(J)`
  width: 100%;
  height: 100%;
  padding: 0;
`,m1=c.div`
  margin-top: 20px;
`,g1=c.div`
  margin-top: 20px;
`,v1=c.div`
  display: flex;
  gap: 20px;
`,j1=()=>{const[t,r]=m.useState(null),[n,a]=m.useState([]),[i,o]=m.useState([]);m.useState([]);const[d,u]=m.useState([]),x=["#FFC0CB","#ADD8E6","#90EE90","#FFFACD","#D3D3D3","#FFB6C1","#E6E6FA","#FFEFD5","#FFE4B5","#F5DEB3"],f=s=>{r(l=>l===s?null:s)},p=s=>{a(l=>[...l,s])},v=s=>{a(l=>l.filter(g=>g!==s))},w=s=>{d.includes(s)?(u(l=>l.filter(g=>g!==s)),a(l=>l.filter(g=>g!==s))):(u(l=>[...l,s]),a(l=>[...l,s]))},C=s=>{i.includes(s)?(o(l=>l.filter(g=>g!==s)),a(l=>l.filter(g=>g!==s))):(o(l=>[...l,s]),a(l=>[...l,s]))},_=s=>{n.includes(s)?a(l=>l.filter(g=>g!==s)):a(l=>[...l,s])},$=()=>ge.filter(l=>(!n.includes("Новый")||l.condition==="Новый")&&(!n.includes("Б/у")||l.condition==="Б/у")).reduce((l,g)=>l+g.quantity,0),b=()=>ge.filter(l=>(!n.includes("Новый")||l.condition==="Новый")&&(!n.includes("Б/у")||l.condition==="Б/у")).reduce((l,g)=>l+g.price*g.quantity,0),z=()=>e.jsxs("div",{children:[e.jsx(r1,{children:"Категории"}),Et.map(s=>e.jsxs(ve,{children:[e.jsxs(y,{variant:"subtitle1",onClick:()=>f(s.name),children:[e.jsx(lt,{children:e.jsx(Be,{})}),s.name,e.jsx(J,{size:"small",onClick:l=>{l.stopPropagation(),f(s.name)},children:e.jsx(n1,{isOpen:t===s.name})})]}),t===s.name&&e.jsx(a1,{children:s.subcategories.map(l=>e.jsxs(y,{variant:"body2",children:[e.jsx(N,{checked:d.includes(l),onChange:()=>w(l)}),l]},l))})]},s.name)),e.jsx(H,{}),e.jsx(W,{component:"legend",children:"Бренды"}),Nt.map(s=>e.jsx(ve,{children:e.jsxs(y,{variant:"subtitle1",children:[e.jsx(N,{checked:i.includes(s),onChange:()=>C(s)}),s]})},s))]});return e.jsxs(t1,{children:[e.jsxs(qt,{children:[e.jsx(e1,{variant:"h4",children:"Добавить скидку"}),e.jsx(y,{variant:"subtitle1",children:"В данном разделе можете добавить скидку на определённую категорию товаров"})]}),e.jsxs("div",{style:{display:"flex"},children:[e.jsxs(Ut,{children:[z(),e.jsx(H,{}),e.jsxs(F,{component:"fieldset",children:[e.jsx(W,{component:"legend",children:"Состояние"}),e.jsxs(me,{"aria-label":"state",name:"state",children:[e.jsx(T,{value:"new",control:e.jsx(V,{}),label:"Новый",onChange:()=>p("Новый")}),e.jsx(T,{value:"used",control:e.jsx(V,{}),label:"Б/у",onChange:()=>p("Б/у")})]})]}),e.jsx(H,{}),e.jsxs(F,{component:"fieldset",children:[e.jsx(W,{component:"legend",children:"Страна"}),e.jsxs(me,{"aria-label":"country",name:"country",children:[e.jsx(T,{value:"usa",control:e.jsx(V,{}),label:"США",onChange:()=>p("США")}),e.jsx(T,{value:"china",control:e.jsx(V,{}),label:"Китай",onChange:()=>p("Китай")})]})]}),e.jsx(H,{}),e.jsxs(F,{component:"fieldset",children:[e.jsx(W,{component:"legend",children:"Цвета"}),e.jsx(f1,{children:x.map((s,l)=>e.jsx(x1,{variant:n.includes(s)?"contained":"outlined",style:{backgroundColor:s},onClick:()=>_(s),startIcon:e.jsx(h1,{style:{backgroundColor:s},disableRipple:!0})},l))})]}),e.jsx(m1,{children:e.jsx(F,{component:"fieldset",children:e.jsx(rt,{label:"Скидка",variant:"outlined",type:"number",fullWidth:!0,InputProps:{endAdornment:"%"}})})}),e.jsx(g1,{children:e.jsx(Ke,{})}),e.jsx(Lt,{})]}),e.jsxs(Kt,{children:[e.jsx(Jt,{children:e.jsxs(i1,{children:[e.jsx(o1,{children:"Выбранные фильтры:"}),n.map(s=>e.jsxs(l1,{children:[e.jsx(c1,{children:s}),e.jsx(J,{size:"small",onClick:()=>v(s),children:e.jsx(Me,{})})]},s)),e.jsx(s1,{variant:"contained",onClick:()=>a([]),children:"Очистить"})]})}),e.jsx(Yt,{children:[1,2,3,4,5,6,7,8].map(s=>e.jsxs(p1,{children:[e.jsx(d1,{children:e.jsx(N,{})}),e.jsx(u1,{src:"image-url",alt:"Product"}),e.jsx(y,{variant:"body2",children:"Название товара"})]},s))})]})]}),e.jsxs(Qt,{children:[e.jsxs(Xt,{children:[e.jsxs(y,{children:["Итого: ",$()," товаров"]}),e.jsxs(y,{children:["Стоимость: ",b()," руб."]})]}),e.jsxs(v1,{children:[e.jsx(Z,{variant:"contained",children:"Отменить"}),e.jsx(Z,{variant:"contained",children:"Подтвердить"})]})]})]})},b1=()=>e.jsx("svg",{id:"Компонент_127_2","data-name":"Компонент 127 – 2",xmlns:"http://www.w3.org/2000/svg",width:"104",height:"83",viewBox:"0 0 104 83",children:e.jsxs("g",{id:"advertising_2",transform:"translate(0 -50.988)",children:[e.jsx("path",{id:"Контур_11587","data-name":"Контур 11587",d:"M99.428,50.988H4.572A4.569,4.569,0,0,0,0,55.544v73.888a4.569,4.569,0,0,0,4.572,4.556H69.377a1.521,1.521,0,1,0,0-3.042H4.572a1.518,1.518,0,0,1-1.519-1.514V69.2H86.945a1.521,1.521,0,1,0,0-3.042H3.053V55.544A1.518,1.518,0,0,1,4.572,54.03H99.428a1.518,1.518,0,0,1,1.519,1.514V66.155h-16.9a1.521,1.521,0,1,0,0,3.042h16.9v60.235a1.518,1.518,0,0,1-1.519,1.514H66.483a1.521,1.521,0,1,0,0,3.042H99.428A4.569,4.569,0,0,0,104,129.432V55.544a4.569,4.569,0,0,0-4.572-4.556Z",transform:"translate(0 0)",fill:"#a1a1a1"}),e.jsx("path",{id:"Контур_11588","data-name":"Контур 11588",d:"M40.462,85.206a2.553,2.553,0,1,0,2.553-2.553A2.556,2.556,0,0,0,40.462,85.206Z",transform:"translate(-32.254 -25.241)",fill:"#a1a1a1"}),e.jsx("path",{id:"Контур_11589","data-name":"Контур 11589",d:"M78.057,85.206a2.553,2.553,0,1,0,2.553-2.553A2.556,2.556,0,0,0,78.057,85.206Z",transform:"translate(-62.201 -25.241)",fill:"#a1a1a1"}),e.jsx("path",{id:"Контур_11590","data-name":"Контур 11590",d:"M115.653,85.206a2.553,2.553,0,1,0,2.553-2.553A2.556,2.556,0,0,0,115.653,85.206Z",transform:"translate(-92.159 -25.241)",fill:"#a1a1a1"}),e.jsxs("g",{id:"Сгруппировать_12511","data-name":"Сгруппировать 12511",transform:"translate(36.318 109.544)",children:[e.jsx("path",{id:"Контур_11591","data-name":"Контур 11591",d:"M145.851,250.747a.918.918,0,0,0,1.718-.648l-3.563-9.443-.01-.025a1.131,1.131,0,0,0-1.05-.7h0a1.131,1.131,0,0,0-1.049.705l-.008.021-3.6,9.442a.918.918,0,0,0,1.716.653l.67-1.76h4.511Zm-4.475-3.594,1.566-4.113,1.552,4.113Z",transform:"translate(-137.92 -239.628)",fill:"#a1a1a1"}),e.jsx("path",{id:"Path_11591_-_Outline","data-name":"Path 11591 - Outline",d:"M139.2,251.628a1.342,1.342,0,0,1-1.087-.564,1.128,1.128,0,0,1-.1-1.079l3.595-9.438.012-.031a1.435,1.435,0,0,1,2.654,0l.015.037,3.562,9.439a1.124,1.124,0,0,1-.1,1.072,1.345,1.345,0,0,1-1.088.562h0a1.125,1.125,0,0,1-1.089-.778l-.589-1.56h-4.1l-.6,1.567A1.129,1.129,0,0,1,139.2,251.628Zm3.746-11.4a.832.832,0,0,0-.773.519l-.006.015-3.6,9.442a.534.534,0,0,0,.038.525.737.737,0,0,0,.591.3.53.53,0,0,0,.525-.382l.745-1.957h4.925l.737,1.952a.528.528,0,0,0,.526.386h0a.74.74,0,0,0,.592-.3.53.53,0,0,0,.039-.519l-3.565-9.447-.007-.017A.832.832,0,0,0,142.946,240.228Zm1.983,7.226h-3.988l2-5.259Zm-3.117-.6h2.249l-1.12-2.967Z",transform:"translate(-137.92 -239.628)",fill:"#a1a1a1"}),e.jsx("path",{id:"Контур_11592","data-name":"Контур 11592",d:"M230.5,252.307a.977.977,0,0,0,.94,1.069c.08,0,1.955-.008,2.7-.021,2.653-.046,4.578-2.378,4.578-5.544,0-3.329-1.877-5.565-4.671-5.565h-2.632a.924.924,0,0,0-.918.928Zm3.55-8.225c2.09,0,2.835,1.926,2.835,3.729,0,1.763-.868,3.675-2.774,3.709-.4.007-1.154.012-1.759.016,0-1.094-.009-2.88-.009-3.735,0-.717,0-2.584-.005-3.719Z",transform:"translate(-217.93 -241.662)",fill:"#a1a1a1"}),e.jsx("path",{id:"Path_11592_-_Outline","data-name":"Path 11592 - Outline",d:"M231.42,253.676a1.156,1.156,0,0,1-.841-.365,1.406,1.406,0,0,1-.375-1.011v-9.123a1.224,1.224,0,0,1,1.2-1.232h2.649a4.566,4.566,0,0,1,3.613,1.641,6.463,6.463,0,0,1,1.358,4.224c0,3.337-2.049,5.795-4.873,5.844-.745.013-2.613.02-2.7.021Zm-.015-11.13a.625.625,0,0,0-.6.619v9.156a.8.8,0,0,0,.209.577.556.556,0,0,0,.407.179h.023c.018,0,1.942-.007,2.7-.021,2.482-.043,4.283-2.249,4.283-5.244,0-3.149-1.757-5.265-4.371-5.265Zm.651,9.291v-.3c-.006-1.838-.009-3.095-.009-3.736,0-.679,0-2.427-.005-3.718v-.3h2.013a2.772,2.772,0,0,1,2.455,1.328,5.124,5.124,0,0,1,.68,2.7c0,1.9-.96,3.972-3.069,4.009-.41.007-1.185.013-1.763.016Zm.586-7.455c0,1.249,0,2.791,0,3.419,0,.6,0,1.759.008,3.433.522,0,1.116-.008,1.455-.014,1.7-.03,2.479-1.788,2.479-3.409a4.526,4.526,0,0,0-.587-2.38,2.171,2.171,0,0,0-1.948-1.049Z",transform:"translate(-217.93 -241.662)",fill:"#a1a1a1"}),e.jsx("path",{id:"Контур_11593","data-name":"Контур 11593",d:"M312.019,249.5a3.617,3.617,0,0,1-2.657-1.118.918.918,0,1,0-1.36,1.233,5.48,5.48,0,0,0,4.018,1.721,3.719,3.719,0,0,0,3.755-2.832c.219-1.224-.351-2.828-2.606-3.66-1.222-.451-2.356-.942-2.654-1.073a.936.936,0,0,1-.368-.905,1.264,1.264,0,0,1,.958-.995,3.474,3.474,0,0,1,2.893.661.918.918,0,0,0,1.178-1.409,5.288,5.288,0,0,0-4.6-1.01,3.093,3.093,0,0,0-2.245,2.492,2.767,2.767,0,0,0,1.234,2.74.932.932,0,0,0,.127.069c.055.025,1.366.608,2.842,1.153,1.027.379,1.55.967,1.434,1.615A1.9,1.9,0,0,1,312.019,249.5Z",transform:"translate(-284.752 -239.625)",fill:"#a1a1a1"}),e.jsx("path",{id:"Path_11593_-_Outline","data-name":"Path 11593 - Outline",d:"M312.019,251.639a5.784,5.784,0,0,1-4.24-1.82,1.218,1.218,0,1,1,1.805-1.636,3.313,3.313,0,0,0,2.435,1.02,1.617,1.617,0,0,0,1.652-1.072c.124-.7-.827-1.128-1.242-1.281-1.518-.56-2.848-1.154-2.861-1.16a1.236,1.236,0,0,1-.168-.092,3.065,3.065,0,0,1-1.367-3.034,3.389,3.389,0,0,1,2.456-2.737,4.763,4.763,0,0,1,1.374-.2,5.85,5.85,0,0,1,3.505,1.27,1.218,1.218,0,0,1-1.562,1.869,3.51,3.51,0,0,0-1.947-.7,2.316,2.316,0,0,0-.668.1.974.974,0,0,0-.747.75.639.639,0,0,0,.225.6c.354.155,1.436.621,2.6,1.052,2.428.9,3.037,2.651,2.8,3.994A4.021,4.021,0,0,1,312.019,251.639Zm-3.337-3.256a.618.618,0,0,0-.458,1.033,5.175,5.175,0,0,0,3.8,1.623,3.417,3.417,0,0,0,3.46-2.585c.2-1.1-.333-2.558-2.414-3.326-1.223-.451-2.353-.941-2.671-1.08l-.031-.014-.027-.02a1.238,1.238,0,0,1-.486-1.188,1.555,1.555,0,0,1,1.168-1.24,2.915,2.915,0,0,1,.841-.123,4.1,4.1,0,0,1,2.327.837.618.618,0,1,0,.8-.945,5.307,5.307,0,0,0-3.119-1.13,4.163,4.163,0,0,0-1.2.177,2.8,2.8,0,0,0-2.035,2.247,2.47,2.47,0,0,0,1.1,2.446.634.634,0,0,0,.086.047c.013.006,1.324.592,2.824,1.145,1.177.434,1.769,1.144,1.625,1.949a2.2,2.2,0,0,1-2.243,1.566,3.921,3.921,0,0,1-2.879-1.217A.619.619,0,0,0,308.681,248.383Z",transform:"translate(-284.752 -239.625)",fill:"#a1a1a1"})]}),e.jsx("path",{id:"Контур_11594","data-name":"Контур 11594",d:"M109.882,225.6h43.446a4.575,4.575,0,0,0,4.575-4.566V208.678a4.575,4.575,0,0,0-4.575-4.566H95.278a4.575,4.575,0,0,0-4.575,4.566v12.353a4.575,4.575,0,0,0,4.575,4.566h17.495a1.525,1.525,0,1,0,0-3.049H95.278a1.52,1.52,0,0,1-1.52-1.517V208.678a1.52,1.52,0,0,1,1.52-1.517h58.051a1.52,1.52,0,0,1,1.52,1.517v12.353a1.52,1.52,0,0,1-1.52,1.517H109.882a1.524,1.524,0,1,0,0,3.049Z",transform:"translate(-72.303 -99.304)",fill:"#a1a1a1"})]})}),y1=()=>e.jsx("svg",{id:"Компонент_127_3","data-name":"Компонент 127 – 3",xmlns:"http://www.w3.org/2000/svg",width:"104",height:"83",viewBox:"0 0 104 83",children:e.jsxs("g",{id:"advertising_2",transform:"translate(0 -50.988)",children:[e.jsx("path",{id:"Контур_11587","data-name":"Контур 11587",d:"M99.428,50.988H4.572A4.569,4.569,0,0,0,0,55.544v73.888a4.569,4.569,0,0,0,4.572,4.556H73.377a1.521,1.521,0,1,0,0-3.042H4.572a1.518,1.518,0,0,1-1.519-1.514V69.2H86.945a1.521,1.521,0,1,0,0-3.042H3.053V55.544A1.518,1.518,0,0,1,4.572,54.03H99.428a1.518,1.518,0,0,1,1.519,1.514V66.155h-16.9a1.521,1.521,0,1,0,0,3.042h16.9v60.235a1.518,1.518,0,0,1-1.519,1.514H66.483a1.521,1.521,0,1,0,0,3.042H99.428A4.569,4.569,0,0,0,104,129.432V55.544a4.569,4.569,0,0,0-4.572-4.556Z",fill:"#a1a1a1"}),e.jsx("path",{id:"Контур_11588","data-name":"Контур 11588",d:"M40.462,85.206a2.553,2.553,0,1,0,2.553-2.553A2.556,2.556,0,0,0,40.462,85.206Z",transform:"translate(-32.254 -25.241)",fill:"#a1a1a1"}),e.jsx("path",{id:"Контур_11589","data-name":"Контур 11589",d:"M78.057,85.206a2.553,2.553,0,1,0,2.553-2.553A2.556,2.556,0,0,0,78.057,85.206Z",transform:"translate(-62.201 -25.241)",fill:"#a1a1a1"}),e.jsx("path",{id:"Контур_11590","data-name":"Контур 11590",d:"M115.653,85.206a2.553,2.553,0,1,0,2.553-2.553A2.556,2.556,0,0,0,115.653,85.206Z",transform:"translate(-92.159 -25.241)",fill:"#a1a1a1"}),e.jsxs("g",{id:"Сгруппировать_12512","data-name":"Сгруппировать 12512",transform:"translate(49.067 84.898)",children:[e.jsx("path",{id:"Контур_11591","data-name":"Контур 11591",d:"M148.754,254.863a1.268,1.268,0,0,0,2.371-.895l-4.919-13.035-.014-.035a1.561,1.561,0,0,0-1.449-.971h0a1.561,1.561,0,0,0-1.449.974l-.011.029-4.964,13.035a1.268,1.268,0,0,0,2.368.9l.925-2.43h6.227Zm-6.177-4.961,2.162-5.678,2.143,5.678Z",transform:"translate(-138.22 -239.927)",fill:"#a1a1a1"}),e.jsx("path",{id:"Path_11591_-_Outline","data-name":"Path 11591 - Outline",d:"M139.572,255.815a1.582,1.582,0,0,1-1.282-.662,1.3,1.3,0,0,1-.112-1.244l4.964-13.033.013-.034a1.717,1.717,0,0,1,3.176,0c.006.014.011.027.016.041l4.918,13.033a1.3,1.3,0,0,1-.114,1.238,1.586,1.586,0,0,1-1.284.66h0a1.3,1.3,0,0,1-1.255-.9l-.878-2.327h-6.02l-.889,2.334A1.3,1.3,0,0,1,139.572,255.815Zm5.172-15.737a1.412,1.412,0,0,0-1.311.88l-.01.025-4.965,13.036a.991.991,0,0,0,.08.966,1.275,1.275,0,0,0,1.034.531,1,1,0,0,0,.973-.7l.963-2.528h6.434l.952,2.524a1,1,0,0,0,.973.7h0a1.278,1.278,0,0,0,1.036-.529.988.988,0,0,0,.082-.961l-4.92-13.037-.012-.031A1.412,1.412,0,0,0,144.744,240.078Zm2.355,9.974h-4.74l2.381-6.251Zm-4.3-.3h3.871l-1.926-5.1Z",transform:"translate(-138.22 -239.927)",fill:"#a1a1a1"}),e.jsx("path",{id:"Контур_11592","data-name":"Контур 11592",d:"M230.5,256.134a1.349,1.349,0,0,0,1.3,1.476c.11,0,2.7-.01,3.731-.029,3.662-.064,6.32-3.283,6.32-7.654,0-4.595-2.591-7.682-6.448-7.682h-3.634a1.275,1.275,0,0,0-1.267,1.281Zm4.9-11.354c2.886,0,3.914,2.659,3.914,5.148,0,2.433-1.2,5.074-3.83,5.12-.553.01-1.592.017-2.429.022,0-1.51-.012-3.976-.012-5.156,0-.99,0-3.567-.007-5.133Z",transform:"translate(-214.941 -241.854)",fill:"#a1a1a1"}),e.jsx("path",{id:"Path_11592_-_Outline","data-name":"Path 11592 - Outline",d:"M231.769,257.76a1.333,1.333,0,0,1-.97-.422,1.672,1.672,0,0,1-.445-1.208v-12.6a1.425,1.425,0,0,1,1.42-1.431h3.631c3.947,0,6.6,3.147,6.6,7.832,0,4.456-2.72,7.738-6.467,7.8-1.056.018-3.708.028-3.733.029Zm-.02-15.365a1.126,1.126,0,0,0-1.095,1.126v12.619a1.367,1.367,0,0,0,.362.991,1.033,1.033,0,0,0,.782.328c.029,0,2.679-.01,3.732-.029,3.577-.063,6.173-3.218,6.173-7.5,0-4.505-2.531-7.532-6.3-7.532Zm1.162,12.825v-.15c-.006-1.735-.012-4.038-.012-5.156,0-.929,0-3.346-.007-5.133v-.15h2.514c3,0,4.064,2.737,4.064,5.3,0,2.5-1.245,5.222-3.977,5.269-.564.01-1.633.017-2.43.022Zm.28-10.29c0,1.77.007,4.08.007,4.983,0,1.085.006,3.289.012,5,.776,0,1.748-.012,2.276-.021,2.53-.044,3.682-2.607,3.682-4.97,0-2.416-.989-5-3.764-5Z",transform:"translate(-214.941 -241.854)",fill:"#a1a1a1"}),e.jsx("path",{id:"Контур_11593","data-name":"Контур 11593",d:"M313.638,253.146a4.993,4.993,0,0,1-3.668-1.544,1.267,1.267,0,1,0-1.878,1.7,7.566,7.566,0,0,0,5.546,2.376,5.134,5.134,0,0,0,5.184-3.91c.3-1.69-.485-3.9-3.6-5.053-1.686-.622-3.252-1.3-3.664-1.482a1.292,1.292,0,0,1-.508-1.249,1.744,1.744,0,0,1,1.322-1.373,4.8,4.8,0,0,1,3.994.912,1.267,1.267,0,0,0,1.626-1.944,7.3,7.3,0,0,0-6.351-1.395,4.269,4.269,0,0,0-3.1,3.44,3.82,3.82,0,0,0,1.7,3.782,1.288,1.288,0,0,0,.176.1c.076.034,1.885.839,3.924,1.591,1.418.523,2.139,1.335,1.979,2.229A2.616,2.616,0,0,1,313.638,253.146Z",transform:"translate(-279.172 -239.925)",fill:"#a1a1a1"}),e.jsx("path",{id:"Path_11593_-_Outline","data-name":"Path 11593 - Outline",d:"M313.638,255.831a7.717,7.717,0,0,1-5.657-2.425,1.417,1.417,0,0,1,2.1-1.9A4.841,4.841,0,0,0,313.638,253a2.465,2.465,0,0,0,2.541-1.7c.146-.815-.541-1.567-1.884-2.062-2.08-.767-3.915-1.587-3.933-1.6a1.444,1.444,0,0,1-.2-.107,3.969,3.969,0,0,1-1.77-3.929,4.418,4.418,0,0,1,3.2-3.562,6.31,6.31,0,0,1,1.821-.268,7.945,7.945,0,0,1,4.669,1.692,1.417,1.417,0,0,1-1.818,2.175,5.043,5.043,0,0,0-2.856-1.029,3.461,3.461,0,0,0-1,.145,1.6,1.6,0,0,0-1.217,1.251,1.138,1.138,0,0,0,.436,1.1c.455.2,1.984.861,3.639,1.471,3.2,1.18,4.006,3.47,3.693,5.22A5.284,5.284,0,0,1,313.638,255.831Zm-4.607-4.494a1.117,1.117,0,0,0-.828,1.868,7.413,7.413,0,0,0,5.435,2.327,4.982,4.982,0,0,0,5.036-3.786c.291-1.63-.476-3.769-3.5-4.885-1.683-.621-3.236-1.294-3.672-1.485l-.016-.007-.014-.01a1.448,1.448,0,0,1-.567-1.391,1.89,1.89,0,0,1,1.427-1.5,3.761,3.761,0,0,1,1.085-.158,5.372,5.372,0,0,1,3.046,1.1A1.117,1.117,0,0,0,317.9,241.7a7.617,7.617,0,0,0-4.476-1.621,6.01,6.01,0,0,0-1.735.256,4.121,4.121,0,0,0-2.995,3.318,3.672,3.672,0,0,0,1.637,3.635,1.142,1.142,0,0,0,.155.085c.018.008,1.844.824,3.914,1.587,1.493.55,2.249,1.424,2.075,2.4a2.767,2.767,0,0,1-2.836,1.944,5.145,5.145,0,0,1-3.779-1.593A1.12,1.12,0,0,0,309.031,251.337Z",transform:"translate(-279.172 -239.925)",fill:"#a1a1a1"})]}),e.jsx("path",{id:"Контур_11594","data-name":"Контур 11594",d:"M109.844,237.6H141.2a4.571,4.571,0,0,0,4.566-4.566V208.678a4.571,4.571,0,0,0-4.566-4.566H97.269a4.571,4.571,0,0,0-4.566,4.566v24.353a4.571,4.571,0,0,0,4.566,4.566h19.478a1.525,1.525,0,0,0,0-3.049H97.269a1.518,1.518,0,0,1-1.517-1.517V208.678a1.518,1.518,0,0,1,1.517-1.517H141.2a1.519,1.519,0,0,1,1.517,1.517v24.353a1.518,1.518,0,0,1-1.517,1.517h-31.36a1.524,1.524,0,1,0,0,3.049Z",transform:"translate(-49.636 -128.214)",fill:"#a1a1a1"}),e.jsx("path",{id:"Контур_11595","data-name":"Контур 11595",d:"M109.844,219.6h9.36a4.571,4.571,0,0,0,4.566-4.566v-6.353a4.571,4.571,0,0,0-4.566-4.566H97.269a4.571,4.571,0,0,0-4.566,4.566v6.353a4.571,4.571,0,0,0,4.566,4.566h14.478a1.525,1.525,0,0,0,0-3.049H97.269a1.518,1.518,0,0,1-1.517-1.517v-6.353a1.518,1.518,0,0,1,1.517-1.517H119.2a1.519,1.519,0,0,1,1.517,1.517v6.353a1.518,1.518,0,0,1-1.517,1.517h-9.36a1.524,1.524,0,1,0,0,3.049Z",transform:"translate(-84.495 -128.19)",fill:"#a1a1a1"}),e.jsx("path",{id:"Контур_11596","data-name":"Контур 11596",d:"M109.844,219.6h9.36a4.571,4.571,0,0,0,4.566-4.566v-6.353a4.571,4.571,0,0,0-4.566-4.566H97.269a4.571,4.571,0,0,0-4.566,4.566v6.353a4.571,4.571,0,0,0,4.566,4.566h19.478a1.525,1.525,0,0,0,0-3.049H97.269a1.518,1.518,0,0,1-1.517-1.517v-6.353a1.518,1.518,0,0,1,1.517-1.517H119.2a1.519,1.519,0,0,1,1.517,1.517v6.353a1.518,1.518,0,0,1-1.517,1.517h-9.36a1.524,1.524,0,1,0,0,3.049Z",transform:"translate(-84.495 -110.238)",fill:"#a1a1a1"})]})}),w1=h.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`,C1=h.div`
  background-color: #fff;
  width: 900px;
  height: 450px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
`,_1=h.h2`
  color: #0177c1;
  font-size: 30px;
  margin-top: 20px;
`,je=h.div`
  width: 350px;
  height: 220px;
  padding: 10px;
  margin-right: 20px;
  border: 2px solid rgba(204, 204, 204, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgb(255, 255, 255);
    color: #0177c1;
    border: none;
    box-shadow: 0 0 10px rgba(1, 119, 193, 0.2);
    transform: scale(1.05);
  }
`,$1=h.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`,be=h.div`
  padding-bottom: 20px;
`,M1=h.div`
  margin-left: 800px;
  padding-bottom: 20px;
`,k1=({onClose:t})=>{const r=$e();return e.jsx(w1,{children:e.jsxs(C1,{children:[e.jsx(M1,{children:e.jsx(Me,{fontSize:"large",onClick:t})}),e.jsx(_1,{children:"ДОБАВИТЬ БАННЕР"}),e.jsxs($1,{children:[e.jsxs(je,{onClick:n=>{n.preventDefault(),r("/add-catfish-banner")},children:[e.jsx(be,{children:e.jsx(b1,{})}),"CatFish баннер"]}),e.jsxs(je,{onClick:n=>{n.preventDefault(),r("/add-catfish-banner")},children:[e.jsx(be,{children:e.jsx(y1,{})}),"Баннер на главной странице TBUY"]})]})]})})},S1=h.button`
  display: flex;
  color: rgba(1, 119, 193, 0.75);
  background-color: #ffffff;
  border: 2px solid rgba(1, 119, 193, 0.75);
  width: 200px;
  height: 45px;
  font-size: 12pt;
  font-weight: bold;
  padding-top: 4px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`,P1=h.span`
  color: rgba(1, 119, 193, 0.75);
  display: flex;
  align-content: center;
  margin-right: 10px;
  margin-bottom: 0;
`,A1=()=>{const[t,r]=m.useState(!1),n=()=>{r(!0)},a=()=>{r(!1)};return e.jsxs("div",{children:[e.jsxs(S1,{onClick:n,children:[e.jsx(P1,{children:e.jsx(dt,{style:{fontSize:"25px"}})}),"ADD AN ADVERT"]}),t&&e.jsx(k1,{onClose:a})]})},R1=ke(e.jsx("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreVert"),z1=ke(e.jsx("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"RemoveRedEye");var re={},B1=k;Object.defineProperty(re,"__esModule",{value:!0});var Ie=re.default=void 0,I1=B1(M()),D1=e,O1=(0,I1.default)((0,D1.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"}),"PauseCircle");Ie=re.default=O1;var ne={},F1=k;Object.defineProperty(ne,"__esModule",{value:!0});var De=ne.default=void 0,W1=F1(M()),V1=e,T1=(0,W1.default)((0,V1.jsx)("circle",{cx:"12",cy:"12",r:"8"}),"FiberManualRecord");De=ne.default=T1;const H1=h.button`
  background-color: ${t=>t.color==="green"?"#d1ffde":(t.color==="red","#ffdee2")};
  color: ${t=>t.color==="red"?"#ffdee2":"#29b551"};
  border: none;
  width: 150px;
  height: 25px;
  text-align: center;
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  border-radius: 4px;
`,Z1=h.div`
  color: ${t=>t.color==="red"?"#ec0020":"#29b551"};
  display: flex;
  justify-content: center;
  margin-right: 5px;
`,G1=h.span`
  color: ${t=>t.color==="red"?"#ec0020":"#29b551"};
  font-size: 12px;
  display: flex;
  justify-content: center;
  margin-right: 60px;
`,L1=t=>{const{reachedValue:r,color:n}=t;return e.jsx("div",{children:e.jsxs(H1,{reachedValue:r,color:n,children:[e.jsx(Z1,{reachedValue:!1,color:n,children:e.jsx(De,{style:{fontSize:"10px"}})}),e.jsx(G1,{reachedValue:!1,color:n,children:"Завершённый"})]})})},E1=c("table")({width:"100%",borderCollapse:"collapse",border:"0px solid #eaeaea",boxShadow:"0px 4px 8px rgba(0, 0, 0, 0.1)",marginTop:"20px"}),P=c("th")({backgroundColor:"#f1f1f1",color:"#333",padding:"15px 20px",fontWeight:"bold"}),ye=c("tr")({"&:nth-child(odd)":{backgroundColor:"#ffffff"},"&:nth-child(even)":{backgroundColor:"#f3f3f3"}}),A=c("td")({padding:"20px 20px",textAlign:"left",fontSize:"0.9rem",justifyContent:"center"}),N1=c.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  cursor: pointer;
`,q1=c.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  cursor: pointer;

  &:hover {
    color: #0177c1;
  }
`,U1=c.div`
  position: relative;
  display: flex;
  justify-content: space-around;
`,Oe=c.object`
  position: absolute;
  width: 150px;
  top: 100%;
  right: 0;
  background: rgb(255, 255, 255);
  border: 1px solid rgba(204, 204, 204, 0);
  border-radius: 10%;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  padding: 10px;
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 1;
`,K1=c.div`
  position: relative;

  &:hover ${Oe} {
    display: block;
  }
`,J1=c.div`
  //background-color: rgba(0, 0, 0, 0.25);
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  color: #1d1d1d;
  margin-left: 8px;
  padding-top: 5px;
`,U=c.span`
  position: relative;
  display: block;
  margin-top: 5px;
  margin-left: 15px;
  cursor: pointer;
`,K=c.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  cursor: pointer;
`,Y1=t=>{const[r,n]=m.useState(!1),a=()=>{n(!r)};return e.jsxs(E1,{children:[e.jsx("thead",{children:e.jsxs(ye,{children:[e.jsx(P,{children:"Тип баннера"}),e.jsx(P,{children:"Имя баннера"}),e.jsx(P,{children:"Дата публикации"}),e.jsx(P,{children:"Просмотры/клики"}),e.jsx(P,{children:"Статус"}),e.jsx(P,{children:"Действия"})]})}),e.jsx("tbody",{children:t.tableMarketingData.map((i,o)=>e.jsxs(ye,{children:[e.jsx(A,{children:i.bannerType}),e.jsx(A,{children:i.name}),e.jsx(A,{children:i.date}),e.jsx(A,{children:i.viewsClicks}),e.jsx(A,{children:e.jsx(L1,{reachedValue:!0,color:i.color})}),e.jsx(A,{children:e.jsxs(U1,{children:[e.jsx(N1,{onClick:a,children:e.jsx(z1,{})}),r&&e.jsx("div",{}),e.jsxs(K1,{children:[e.jsx(q1,{children:e.jsx(R1,{})}),e.jsx(Oe,{children:e.jsxs(J1,{children:[e.jsxs(K,{children:[e.jsx(pt,{style:{fontSize:"20px"}}),e.jsx(U,{children:"Change"})]}),e.jsxs(K,{children:[e.jsx(Ie,{style:{fontSize:"20px"}}),e.jsx(U,{children:"Pause"})]}),e.jsxs(K,{children:[e.jsx(ut,{style:{fontSize:"20px"}}),e.jsx(U,{children:"Delete"})]})]})})]})]})})]},o))})]})},Q1=h.section`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  width: 100%;
  padding: 20px;
  background-color: #ffffff;
`,X1=h.div`
  font-size: 15pt;
  font-weight: bolder;
`,er=h.div`
  width: 100%;
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,tr=[{bannerType:"Catfish",name:"Имя баннера 1",date:"23.04.2021 - 25.05.2021",viewsClicks:"50/5",color:"red"},{bannerType:"MainPage",name:"Имя баннера 2",date:"23.04.2021 - 25.05.2021",viewsClicks:"50/5",color:"green"},{bannerType:"Catfish",name:"Имя банера 3",date:"23.04.2021 - 25.05.2021",viewsClicks:"110/12",color:"red"},{bannerType:"Catfish",name:"Имя банера 4",date:"23.04.2021 - 25.05.2021",viewsClicks:"110/12",color:"green"},{bannerType:"MainPage",name:"Имя банера 5",date:"23.04.2021 - 25.05.2021",viewsClicks:"110/12",color:"green"}],rr=h.div`
  display: flex;
  flex-direction: row;
  background-color: rgb(244, 246, 248);
  color: rgb(29, 29, 29);
  width: 40px;
  height: 40px;
  cursor: pointer;

  &:hover {
    color: #0177c1;
  }
`,nr=h.div`
  display: flex;
  align-items: center;
  gap: 20px;
`,we=()=>e.jsx("div",{children:e.jsxs(Q1,{children:[e.jsxs(er,{children:[e.jsx(X1,{children:" CATFISH BANNER / MAINPAGE BANNER"}),e.jsxs(nr,{children:[e.jsx(rr,{children:e.jsx(ct,{style:{fontSize:"40px"}})}),e.jsx(A1,{})]})]}),e.jsx(Y1,{tableMarketingData:tr})]})});var ae={},ar=k;Object.defineProperty(ae,"__esModule",{value:!0});var Fe=ae.default=void 0,ir=ar(M()),or=e,sr=(0,ir.default)((0,or.jsx)("path",{d:"M18 11v2h4v-2h-4zm-2 6.61c.96.71 2.21 1.65 3.2 2.39.4-.53.8-1.07 1.2-1.6-.99-.74-2.24-1.68-3.2-2.4-.4.54-.8 1.08-1.2 1.61zM20.4 5.6c-.4-.53-.8-1.07-1.2-1.6-.99.74-2.24 1.68-3.2 2.4.4.53.8 1.07 1.2 1.6.96-.72 2.21-1.65 3.2-2.4zM4 9c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1v4h2v-4h1l5 3V6L8 9H4zm5.03 1.71L11 9.53v4.94l-1.97-1.18-.48-.29H4v-2h4.55l.48-.29zM15.5 12c0-1.33-.58-2.53-1.5-3.35v6.69c.92-.81 1.5-2.01 1.5-3.34z"}),"CampaignOutlined");Fe=ae.default=sr;var ie={},lr=k;Object.defineProperty(ie,"__esModule",{value:!0});var We=ie.default=void 0,cr=lr(M()),dr=e,pr=(0,cr.default)((0,dr.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"}),"MailOutline");We=ie.default=pr;var oe={},ur=k;Object.defineProperty(oe,"__esModule",{value:!0});var Ve=oe.default=void 0;hr(m);var fr=ur(M()),xr=e;function Te(t){if(typeof WeakMap!="function")return null;var r=new WeakMap,n=new WeakMap;return(Te=function(a){return a?n:r})(t)}function hr(t,r){if(!r&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var n=Te(r);if(n&&n.has(t))return n.get(t);var a={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(o!=="default"&&Object.prototype.hasOwnProperty.call(t,o)){var d=i?Object.getOwnPropertyDescriptor(t,o):null;d&&(d.get||d.set)?Object.defineProperty(a,o,d):a[o]=t[o]}return a.default=t,n&&n.set(t,a),a}var mr=(0,fr.default)((0,xr.jsx)("path",{d:"M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"}),"Telegram");Ve=oe.default=mr;var se={},gr=k;Object.defineProperty(se,"__esModule",{value:!0});var He=se.default=void 0,vr=gr(M()),jr=e,br=(0,vr.default)((0,jr.jsx)("path",{d:"M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12zM7 9h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"}),"TextsmsOutlined");He=se.default=br;var le={},yr=k;Object.defineProperty(le,"__esModule",{value:!0});var Ze=le.default=void 0,wr=yr(M()),Cr=e,_r=(0,wr.default)((0,Cr.jsx)("path",{d:"M22 19h-6v-4h-2.68c-1.14 2.42-3.6 4-6.32 4-3.86 0-7-3.14-7-7s3.14-7 7-7c2.72 0 5.17 1.58 6.32 4H24v6h-2v4zm-4-2h2v-4h2v-2H11.94l-.23-.67C11.01 8.34 9.11 7 7 7c-2.76 0-5 2.24-5 5s2.24 5 5 5c2.11 0 4.01-1.34 4.71-3.33l.23-.67H18v4zM7 15c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3zm0-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"}),"VpnKeyOutlined");Ze=le.default=_r;var ce={},$r=k;Object.defineProperty(ce,"__esModule",{value:!0});var Ge=ce.default=void 0;Sr(m);var Mr=$r(M()),kr=e;function Le(t){if(typeof WeakMap!="function")return null;var r=new WeakMap,n=new WeakMap;return(Le=function(a){return a?n:r})(t)}function Sr(t,r){if(!r&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var n=Le(r);if(n&&n.has(t))return n.get(t);var a={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(o!=="default"&&Object.prototype.hasOwnProperty.call(t,o)){var d=i?Object.getOwnPropertyDescriptor(t,o):null;d&&(d.get||d.set)?Object.defineProperty(a,o,d):a[o]=t[o]}return a.default=t,n&&n.set(t,a),a}var Pr=(0,Mr.default)((0,kr.jsx)("path",{d:"M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z"}),"WhatsApp");Ge=ce.default=Pr;const Ar=c.div`
  background-color: #ffffff; // Установлен белый цвет фона
  width: 100%;
  padding: 20px;
`,Rr=c(Se)`
  padding: 20px;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
  }
`,zr=c(Pe)`
  display: flex;
  align-items: center;
  //justify-content: center;
  margin-bottom: 8px;
  color: #0177c1;
`,Br=()=>{const t=$e(),r=[{icon:e.jsx(We,{}),title:"Mail Рассылки",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",path:"/mailing-lists"},{icon:e.jsx(He,{}),title:"SMS Рассылки",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",path:"/sms-mailings"},{icon:e.jsx(Fe,{}),title:"Promo Рассылки",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",path:"/promo-mailings"},{icon:e.jsx(Ge,{}),title:"WhatsApp Рассылки",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",path:"/whatsapp-mailings"},{icon:e.jsx(Ze,{}),title:"Viber Рассылки",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",path:"/viber-mailings"},{icon:e.jsx(Ve,{}),title:"Telegram Рассылки",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",path:"/telegram-mailings"}],n=a=>{t(a)};return e.jsx("div",{children:e.jsx(Ar,{children:e.jsxs(Pe,{sx:{flexGrow:1},children:[e.jsx(y,{variant:"h5",component:"h1",gutterBottom:!0,children:"Рекламные объявления"}),e.jsx(y,{paragraph:!0,children:"Description of page"}),e.jsx(he,{container:!0,spacing:3,children:r.map((a,i)=>e.jsx(he,{item:!0,xs:12,sm:6,md:4,children:e.jsxs(Rr,{elevation:3,onClick:()=>n(a.path),children:[e.jsx(zr,{children:a.icon}),e.jsx(y,{variant:"h6",component:"h2",children:a.title}),e.jsx(y,{children:a.description})]})},i))})]})})})},Ir=h.section`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  width: 250px;
  height: 180px;
  background-color: white;
`,Dr=h.button`
  background-color: ${t=>t.active?"#0177c1":"white"};
  color: ${t=>t.active?"white":"#000000"};
  width: 250px;
  height: 45px;
  font-size: 12pt;
  margin-top: 0;
  padding: 5px 10px;
  border: 0 solid rgba(255, 255, 255, 0);
  display: block;
  cursor: pointer;

  &:hover {
    background-color: rgb(225, 225, 225);
  }
`,Or=h.div`
  margin-left: 20px;
`,Fr=()=>{const[t,r]=m.useState("CatFish Banner"),n=a=>{r(a)};return e.jsxs("div",{style:{display:"flex"},children:[e.jsx(Ir,{children:["CatFish Banner","Banner MainPage","Discounts on the category","Promotional mailings"].map(a=>e.jsx(Dr,{active:t===a,onClick:()=>n(a),children:a},a))}),e.jsxs(Or,{children:[t==="CatFish Banner"&&e.jsx(we,{}),t==="Banner MainPage"&&e.jsx(we,{}),t==="Discounts on the category"&&e.jsx(j1,{}),t==="Promotional mailings"&&e.jsx(Br,{})]})]})},Wr=h.div`
  width: 100%;
  position: relative;
`,Vr=h.div`
  width: 100%;
  display: flex;
  gap: 20px;
`,Tr=h.div`
  margin-left: 20px;
  margin-bottom: 30px;
  margin-top: 45px;
  font-size: 25pt;
  font-weight: bolder;
`,mn=()=>e.jsxs(Wr,{children:[e.jsx(Tr,{children:"Маркетинговый блок"}),e.jsx(Vr,{children:e.jsx(Fr,{})})]});export{mn as default};
