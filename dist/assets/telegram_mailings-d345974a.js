import{u as n,r as s,e as W,j as e,f as c}from"./index-2bc117be.js";import{R as z}from"./radio-group-fd87d7b3.js";import{u as O,A as U,I as G}from"./index-83dad4b4.js";import{B as o}from"./Box-2aeb85a8.js";import{B as r}from"./Button-86535438.js";import{T as u,I as H,S as K,F as N}from"./TextField-2c028d2c.js";import{M as V}from"./MenuItem-6ff64f5c.js";import{L as $}from"./ListItemText-c9403779.js";import{F as q}from"./FormControlLabel-8c69b93b.js";import{C as J}from"./Checkbox-efcf2a66.js";import{P as b}from"./Paper-85fb9fba.js";import{a as f,b as l,c as i,d as v,T as Q}from"./TableRow-d38be5a9.js";import"./useFormControl-6d476b15.js";import"./createSvgIcon-bae563fb.js";import"./index-681411ec.js";import"./ButtonBase-8fbd39f9.js";import"./react-is.production.min-a192e302.js";import"./Menu-6b8c360a.js";import"./useSlotProps-97c8360a.js";import"./listItemIconClasses-6ef0ce2d.js";import"./dividerClasses-63301548.js";import"./listItemTextClasses-13e85d27.js";import"./SwitchBase-f0861c78.js";const X=n(o)`
  display: flex;
  margin: 20px;
  gap: 20px;
`,Y=n(o)`
  flex: 1;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
`,Z=n(o)`
  width: 300px;
`,C=n(Q)`
  margin-bottom: 20px;
`,_=n.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 2px dashed #0077c1;
  border-radius: 5px;
  padding: 20px;
  text-align: center;
  margin-bottom: 20px;
`,ee=n.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 40px;
`,te=n.img`
  width: 100%;
  max-height: 250px;
  margin-top: 20px;
  border-radius: 5px;
  object-fit: cover;
`,ne=n(N)`
  margin-top: 20px;
`,ie=n.div`
  margin-top: 15px;
`,re=n.div`
  color: #0177c1;
  background-color: #f6fcff;
  padding: 10px;
  font-weight: bold;
`,d=n.div`
  display: flex;
  //gap: 20px;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 30px;
`,oe=n.div`
  width: 300px;
`,y=n.div`
  width: 150px;
`,se=n.div``,le=n.div``,Le=()=>{const[p,S]=s.useState(null),[w,k]=s.useState([]),I=W(),[x,R]=s.useState(!1),h=["Male","Female","All"],[T,P]=s.useState(h[0]),{getRootProps:B,getInputProps:L,open:m}=O({onDrop:t=>{S(URL.createObjectURL(t[0]))},accept:{"image/*":[]},noClick:!0,noKeyboard:!0}),M=[{count:100,cost:"1000 руб."},{count:200,cost:"1800 руб."},{count:500,cost:"4000 руб."}],A=[{parameter:"Регион",count:50,selected:"Москва"},{parameter:"Возраст",count:100,selected:"18-24"},{parameter:"Интересы",count:150,selected:"Технологии"}],j=[{value:"0-20",label:"0-20"},{value:"20-40",label:"20-40"},{value:"40-60",label:"40-60"}],D=[{value:"Бессрочный",label:"Бессрочный"},{value:"Limited",label:"Limited"}],F=["Получатель 1","Получатель 2","Получатель 3","Получатель 4"],g=()=>{I(-1)},E=t=>{P(t)};return e.jsxs("div",{children:[e.jsx(ie,{children:e.jsx(o,{display:"flex",alignItems:"center",mb:2,children:e.jsx(r,{startIcon:e.jsx(U,{}),onClick:g,children:"Назад"})})}),e.jsxs(X,{children:[e.jsxs(Y,{children:[e.jsx("h1",{children:"Telegram"}),e.jsxs(_,{...B(),children:[e.jsx("input",{...L()}),p?e.jsx(te,{src:p,alt:"Preview"}):e.jsx("h2",{children:"Загрузите ваше изображение"}),e.jsxs(ee,{children:[e.jsx(r,{variant:"contained",onClick:m,children:"Import image"}),e.jsx(r,{variant:"contained",onClick:m,children:"Browse file"})]})]}),e.jsx(re,{children:"1 piece - 1.5 USD$"}),e.jsx(u,{fullWidth:!0,label:"Message from",variant:"outlined",margin:"normal"}),e.jsx(u,{fullWidth:!0,label:"Message text",variant:"outlined",margin:"normal",InputProps:{endAdornment:e.jsx(G,{position:"end",children:"64 characters, 1 SMS"}),style:{height:"100px",padding:"0 14px"}},sx:{"& .MuiOutlinedInput-root":{height:"80px"}}}),e.jsxs(ne,{fullWidth:!0,children:[e.jsx(H,{id:"recipients-select-label",children:"Recipients"}),e.jsx(K,{labelId:"recipients-select-label",id:"recipients-select",multiple:!0,value:w,onChange:t=>k(t.target.value),renderValue:t=>t.join(", "),children:F.map(t=>e.jsx(V,{value:t,children:e.jsx($,{primary:t})},t))})]}),e.jsx(q,{control:e.jsx(J,{checked:x,onChange:t=>R(t.target.checked)}),label:"Таргетинг"}),x&&e.jsxs("div",{children:[e.jsx(d,{children:e.jsx(oe,{children:e.jsx(c,{label:"Регион",options:D,placeholder:"Empty",onChange:()=>{}})})}),e.jsxs(d,{children:[e.jsx(y,{children:e.jsx(c,{label:"Возраст",options:j,placeholder:"Empty",onChange:()=>{}})}),e.jsx(le,{children:" — "}),e.jsx(y,{children:e.jsx(c,{label:"",options:j,placeholder:"Empty",onChange:()=>{}})})]}),e.jsx(d,{children:e.jsx(se,{children:e.jsx(z,{options:h,selectedOption:T,onChange:E})})})]}),e.jsxs(o,{display:"flex",justifyContent:"space-between",mt:2,children:[e.jsx(r,{variant:"contained",color:"primary",onClick:g,children:"Cancel"}),e.jsx(r,{variant:"contained",color:"secondary",children:"Submit"})]})]}),e.jsxs(Z,{children:[e.jsx("h2",{children:"Стоимость"}),e.jsxs(C,{component:b,children:[e.jsx(f,{children:e.jsxs(l,{children:[e.jsx(i,{children:"Количество"}),e.jsx(i,{align:"right",children:"Стоимость"})]})}),e.jsx(v,{children:M.map((t,a)=>e.jsxs(l,{children:[e.jsx(i,{children:t.count}),e.jsx(i,{align:"right",children:t.cost})]},a))})]}),e.jsx("h2",{children:"Получатели"}),e.jsxs(C,{component:b,children:[e.jsx(f,{children:e.jsxs(l,{children:[e.jsx(i,{children:"Параметр"}),e.jsx(i,{align:"right",children:"Количество"}),e.jsx(i,{align:"right",children:"Выбранный"})]})}),e.jsx(v,{children:A.map((t,a)=>e.jsxs(l,{children:[e.jsx(i,{children:t.parameter}),e.jsx(i,{align:"right",children:t.count}),e.jsx(i,{align:"right",children:t.selected})]},a))})]})]})]})]})};export{Le as default};
