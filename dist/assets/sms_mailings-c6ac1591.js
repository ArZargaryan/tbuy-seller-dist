import{u as n,r as o,e as A,j as e,f as a}from"./index-c419738b.js";import{R as E}from"./radio-group-70a5f151.js";import{u as P,A as D,I as O}from"./index-7ad0da00.js";import{B as r}from"./Box-cab087b7.js";import{B as c}from"./Button-125100b5.js";import{T as d,I as U,S as W,F as G}from"./TextField-c48a1c0c.js";import{M as z}from"./MenuItem-7e8f15a2.js";import{L as H}from"./ListItemText-43599586.js";import{F as K}from"./FormControlLabel-acb0a2ca.js";import{C as N}from"./Checkbox-852bbcec.js";import{P as u}from"./Paper-fe9a4639.js";import{a as g,b as s,c as i,d as b,T as V}from"./TableRow-9490eb28.js";import"./useFormControl-f31c04cb.js";import"./createSvgIcon-31eb99b3.js";import"./index-588125b0.js";import"./ButtonBase-249fdcdb.js";import"./react-is.production.min-a192e302.js";import"./Menu-8b625b44.js";import"./useSlotProps-33460e79.js";import"./listItemIconClasses-07873b54.js";import"./dividerClasses-372366bd.js";import"./listItemTextClasses-70310b0d.js";import"./SwitchBase-2ecde832.js";const $=n(r)`
  display: flex;
  margin: 20px;
  gap: 20px;
`,q=n(r)`
  flex: 1;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
`,J=n(r)`
  width: 300px;
`,f=n(V)`
  margin-bottom: 20px;
`;n.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 2px dashed #0077c1;
  border-radius: 5px;
  padding: 20px;
  text-align: center;
  margin-bottom: 20px;
`;n.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 40px;
`;n.img`
  width: 100%;
  max-height: 250px;
  margin-top: 20px;
  border-radius: 5px;
  object-fit: cover;
`;const Q=n(G)`
  margin-top: 20px;
`,X=n.div`
  margin-top: 15px;
`,Y=n.div`
  color: #0177c1;
  background-color: #f6fcff;
  padding: 10px;
  font-weight: bold;
`,p=n.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 30px;
`,Z=n.div`
  width: 300px;
`,v=n.div`
  width: 150px;
`,_=n.div``,ee=n.div``,ke=()=>{const[te,S]=o.useState(null),[C,y]=o.useState([]),w=A(),[x,k]=o.useState(!1),h=["Male","Female","All"],[R,T]=o.useState(h[0]);P({onDrop:t=>{S(URL.createObjectURL(t[0]))},accept:{"image/*":[]},noClick:!0,noKeyboard:!0});const I=[{count:100,cost:"1000 руб."},{count:200,cost:"1800 руб."},{count:500,cost:"4000 руб."}],L=[{parameter:"Регион",count:50,selected:"Москва"},{parameter:"Возраст",count:100,selected:"18-24"},{parameter:"Интересы",count:150,selected:"Технологии"}],m=[{value:"0-20",label:"0-20"},{value:"20-40",label:"20-40"},{value:"40-60",label:"40-60"}],M=[{value:"Бессрочный",label:"Бессрочный"},{value:"Limited",label:"Limited"}],B=["Получатель 1","Получатель 2","Получатель 3","Получатель 4"],j=()=>{w(-1)},F=t=>{T(t)};return e.jsxs("div",{children:[e.jsx(X,{children:e.jsx(r,{display:"flex",alignItems:"center",mb:2,children:e.jsx(c,{startIcon:e.jsx(D,{}),onClick:j,children:"Назад"})})}),e.jsxs($,{children:[e.jsxs(q,{children:[e.jsx("h1",{children:"Новое СМС"}),e.jsx(Y,{children:"1 SMS - 1.5 USD$"}),e.jsx(d,{fullWidth:!0,label:"SMS From",variant:"outlined",margin:"normal"}),e.jsx(d,{fullWidth:!0,label:"SMS Text",variant:"outlined",margin:"normal",InputProps:{endAdornment:e.jsx(O,{position:"end",children:"64 characters, 1 SMS"}),style:{height:"100px",padding:"0 14px"}},sx:{"& .MuiOutlinedInput-root":{height:"80px"}}}),e.jsxs(Q,{fullWidth:!0,children:[e.jsx(U,{id:"recipients-select-label",children:"Recipients"}),e.jsx(W,{labelId:"recipients-select-label",id:"recipients-select",multiple:!0,value:C,onChange:t=>y(t.target.value),renderValue:t=>t.join(", "),children:B.map(t=>e.jsx(z,{value:t,children:e.jsx(H,{primary:t})},t))})]}),e.jsx(r,{display:"flex",justifyContent:"space-between",children:e.jsx(d,{label:"Sender's address",variant:"outlined",margin:"normal"})}),e.jsx(K,{control:e.jsx(N,{checked:x,onChange:t=>k(t.target.checked)}),label:"Таргетинг"}),x&&e.jsxs("div",{children:[e.jsx(p,{children:e.jsx(Z,{children:e.jsx(a,{label:"Регион",options:M,placeholder:"Empty",onChange:()=>{}})})}),e.jsxs(p,{children:[e.jsx(v,{children:e.jsx(a,{label:"Возраст",options:m,placeholder:"Empty",onChange:()=>{}})}),e.jsx(ee,{children:" — "}),e.jsx(v,{children:e.jsx(a,{label:"",options:m,placeholder:"Empty",onChange:()=>{}})})]}),e.jsx(p,{children:e.jsx(_,{children:e.jsx(E,{options:h,selectedOption:R,onChange:F})})})]}),e.jsxs(r,{display:"flex",justifyContent:"space-between",mt:2,children:[e.jsx(c,{variant:"contained",color:"primary",onClick:j,children:"Cancel"}),e.jsx(c,{variant:"contained",color:"secondary",children:"Submit"})]})]}),e.jsxs(J,{children:[e.jsx("h2",{children:"Стоимость"}),e.jsxs(f,{component:u,children:[e.jsx(g,{children:e.jsxs(s,{children:[e.jsx(i,{children:"Количество"}),e.jsx(i,{align:"right",children:"Стоимость"})]})}),e.jsx(b,{children:I.map((t,l)=>e.jsxs(s,{children:[e.jsx(i,{children:t.count}),e.jsx(i,{align:"right",children:t.cost})]},l))})]}),e.jsx("h2",{children:"Получатели"}),e.jsxs(f,{component:u,children:[e.jsx(g,{children:e.jsxs(s,{children:[e.jsx(i,{children:"Параметр"}),e.jsx(i,{align:"right",children:"Количество"}),e.jsx(i,{align:"right",children:"Выбранный"})]})}),e.jsx(b,{children:L.map((t,l)=>e.jsxs(s,{children:[e.jsx(i,{children:t.parameter}),e.jsx(i,{align:"right",children:t.count}),e.jsx(i,{align:"right",children:t.selected})]},l))})]})]})]})]})};export{ke as default};
