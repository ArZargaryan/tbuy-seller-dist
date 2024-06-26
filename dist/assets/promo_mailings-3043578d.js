import{u as n,r as s,e as E,j as e,f as c}from"./index-2bc117be.js";import{R as W}from"./radio-group-fd87d7b3.js";import{u as z,A as O,I as U}from"./index-83dad4b4.js";import{B as o}from"./Box-2aeb85a8.js";import{B as r}from"./Button-86535438.js";import{T as u,I as G,S as H,F as K}from"./TextField-2c028d2c.js";import{M as N}from"./MenuItem-6ff64f5c.js";import{L as V}from"./ListItemText-c9403779.js";import{F as $}from"./FormControlLabel-8c69b93b.js";import{C as q}from"./Checkbox-efcf2a66.js";import{P as g}from"./Paper-85fb9fba.js";import{a as b,b as l,c as i,d as f,T as J}from"./TableRow-d38be5a9.js";import"./useFormControl-6d476b15.js";import"./createSvgIcon-bae563fb.js";import"./index-681411ec.js";import"./ButtonBase-8fbd39f9.js";import"./react-is.production.min-a192e302.js";import"./Menu-6b8c360a.js";import"./useSlotProps-97c8360a.js";import"./listItemIconClasses-6ef0ce2d.js";import"./dividerClasses-63301548.js";import"./listItemTextClasses-13e85d27.js";import"./SwitchBase-f0861c78.js";const Q=[{value:"Бессрочный",label:"Бессрочный"},{value:"Limited",label:"Limited"}],v=[{value:"0-20",label:"0-20"},{value:"20-40",label:"20-40"},{value:"40-60",label:"40-60"}],X=n(o)`
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
`,C=n(J)`
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
`,ne=n(K)`
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
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 30px;
`,oe=n.div`
  width: 300px;
`,y=n.div`
  width: 150px;
`,se=n.div``,le=n.div``,Te=()=>{const[p,S]=s.useState(null),[w,I]=s.useState([]),k=E(),[x,P]=s.useState(!1),h=["Male","Female","All"],[R,L]=s.useState(h[0]),{getRootProps:B,getInputProps:T,open:m}=z({onDrop:t=>{S(URL.createObjectURL(t[0]))},accept:{"image/*":[]},noClick:!0,noKeyboard:!0}),D=[{count:100,cost:"1000 руб."},{count:200,cost:"1800 руб."},{count:500,cost:"4000 руб."}],A=[{parameter:"Регион",count:50,selected:"Москва"},{parameter:"Возраст",count:100,selected:"18-24"},{parameter:"Интересы",count:150,selected:"Технологии"}],F=["Получатель 1","Получатель 2","Получатель 3","Получатель 4"],j=()=>{k(-1)},M=t=>{L(t)};return e.jsxs("div",{children:[e.jsx(ie,{children:e.jsx(o,{display:"flex",alignItems:"center",mb:2,children:e.jsx(r,{startIcon:e.jsx(O,{}),onClick:j,children:"Назад"})})}),e.jsxs(X,{children:[e.jsxs(Y,{children:[e.jsx("h1",{children:"Promo"}),e.jsx("p",{children:"Lorem Ipsum is simply dummy text..."}),e.jsxs(_,{...B(),children:[e.jsx("input",{...T()}),p?e.jsx(te,{src:p,alt:"Preview"}):e.jsx("h2",{children:"Загрузите ваше изображение"}),e.jsxs(ee,{children:[e.jsx(r,{variant:"contained",onClick:m,children:"Import image"}),e.jsx(r,{variant:"contained",onClick:m,children:"Browse file"})]})]}),e.jsx(re,{children:"1 piece - 1.5 USD$"}),e.jsx(u,{fullWidth:!0,label:"Message",variant:"outlined",margin:"normal"}),e.jsx(u,{fullWidth:!0,label:"Description",variant:"outlined",margin:"normal",InputProps:{endAdornment:e.jsx(U,{position:"end",children:"64 characters, 1 SMS"}),style:{height:"100px",padding:"0 14px"}},sx:{"& .MuiOutlinedInput-root":{height:"80px"}}}),e.jsxs(ne,{fullWidth:!0,children:[e.jsx(G,{id:"recipients-select-label",children:"Recipients"}),e.jsx(H,{labelId:"recipients-select-label",id:"recipients-select",multiple:!0,value:w,onChange:t=>I(t.target.value),renderValue:t=>t.join(", "),children:F.map(t=>e.jsx(N,{value:t,children:e.jsx(V,{primary:t})},t))})]}),e.jsx($,{control:e.jsx(q,{checked:x,onChange:t=>P(t.target.checked)}),label:"Таргетинг"}),x&&e.jsxs("div",{children:[e.jsx(d,{children:e.jsx(oe,{children:e.jsx(c,{label:"Регион",options:Q,placeholder:"Empty",onChange:()=>{}})})}),e.jsxs(d,{children:[e.jsx(y,{children:e.jsx(c,{label:"Возраст",options:v,placeholder:"Empty",onChange:()=>{}})}),e.jsx(le,{children:" — "}),e.jsx(y,{children:e.jsx(c,{label:"",options:v,placeholder:"Empty",onChange:()=>{}})})]}),e.jsx(d,{children:e.jsx(se,{children:e.jsx(W,{options:h,selectedOption:R,onChange:M})})})]}),e.jsxs(o,{display:"flex",justifyContent:"space-between",mt:2,children:[e.jsx(r,{variant:"contained",color:"primary",onClick:j,children:"Cancel"}),e.jsx(r,{variant:"contained",color:"secondary",children:"Submit"})]})]}),e.jsxs(Z,{children:[e.jsx("h2",{children:"Стоимость"}),e.jsxs(C,{component:g,children:[e.jsx(b,{children:e.jsxs(l,{children:[e.jsx(i,{children:"Количество"}),e.jsx(i,{align:"right",children:"Стоимость"})]})}),e.jsx(f,{children:D.map((t,a)=>e.jsxs(l,{children:[e.jsx(i,{children:t.count}),e.jsx(i,{align:"right",children:t.cost})]},a))})]}),e.jsx("h2",{children:"Получатели"}),e.jsxs(C,{component:g,children:[e.jsx(b,{children:e.jsxs(l,{children:[e.jsx(i,{children:"Параметр"}),e.jsx(i,{align:"right",children:"Количество"}),e.jsx(i,{align:"right",children:"Выбранный"})]})}),e.jsx(f,{children:A.map((t,a)=>e.jsxs(l,{children:[e.jsx(i,{children:t.parameter}),e.jsx(i,{align:"right",children:t.count}),e.jsx(i,{align:"right",children:t.selected})]},a))})]})]})]})]})};export{Te as default};
