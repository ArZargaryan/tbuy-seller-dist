import{u as n,r as o,e as W,j as e,f as d}from"./index-786c574d.js";import{R as z}from"./radio-group-fa4f9c0f.js";import{u as O,A as G,I as U}from"./index-437438bd.js";import{B as r}from"./Box-90e91437.js";import{B as s}from"./Button-bff4ffb1.js";import{T as l,I as H,S as K,F as N}from"./TextField-6d876023.js";import{M as V}from"./MenuItem-4e8fe90f.js";import{L as q}from"./ListItemText-4684d023.js";import{F as J}from"./FormControlLabel-49484eca.js";import{C as Q}from"./Checkbox-26065688.js";import{P as b}from"./Paper-0d57e966.js";import{a as f,b as a,c as i,d as v,T as X}from"./TableRow-b6737e80.js";import"./useFormControl-9fe0975f.js";import"./createSvgIcon-ccd3771d.js";import"./index-a605fed4.js";import"./ButtonBase-c77f3e05.js";import"./react-is.production.min-a192e302.js";import"./Menu-0bae6528.js";import"./useSlotProps-0bf0a99e.js";import"./listItemIconClasses-0096aaac.js";import"./dividerClasses-a72384a6.js";import"./listItemTextClasses-4324c96d.js";import"./SwitchBase-4200c929.js";const Y=n(r)`
  display: flex;
  margin: 20px;
  gap: 20px;
`,Z=n(r)`
  flex: 1;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
`,_=n(r)`
  width: 300px;
`,y=n(X)`
  margin-bottom: 20px;
`,$=n.div`
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
`,p=n.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 30px;
`,re=n.div`
  width: 300px;
`,C=n.div`
  width: 150px;
`,se=n.div``,oe=n.div``,Te=()=>{const[x,S]=o.useState(null),[w,I]=o.useState([]),k=W(),[m,R]=o.useState(!1),h=["Male","Female","All"],[L,B]=o.useState(h[0]),{getRootProps:T,getInputProps:P,open:j}=O({onDrop:t=>{S(URL.createObjectURL(t[0]))},accept:{"image/*":[]},noClick:!0,noKeyboard:!0}),A=[{count:100,cost:"1000 руб."},{count:200,cost:"1800 руб."},{count:500,cost:"4000 руб."}],D=[{parameter:"Регион",count:50,selected:"Москва"},{parameter:"Возраст",count:100,selected:"18-24"},{parameter:"Интересы",count:150,selected:"Технологии"}],u=[{value:"0-20",label:"0-20"},{value:"20-40",label:"20-40"},{value:"40-60",label:"40-60"}],F=[{value:"Бессрочный",label:"Бессрочный"},{value:"Limited",label:"Limited"}],M=["Получатель 1","Получатель 2","Получатель 3","Получатель 4"],g=()=>{k(-1)},E=t=>{B(t)};return e.jsxs("div",{children:[e.jsx(ie,{children:e.jsx(r,{display:"flex",alignItems:"center",mb:2,children:e.jsx(s,{startIcon:e.jsx(G,{}),onClick:g,children:"Назад"})})}),e.jsxs(Y,{children:[e.jsxs(Z,{children:[e.jsx("h1",{children:"Новая электронная рассылка"}),e.jsx("p",{children:"Lorem Ipsum is simply dummy text..."}),e.jsxs($,{...T(),children:[e.jsx("input",{...P()}),x?e.jsx(te,{src:x,alt:"Preview"}):e.jsx("p",{children:"Загрузите ваше изображение"}),e.jsxs(ee,{children:[e.jsx(s,{variant:"contained",onClick:j,children:"Import image"}),e.jsx(s,{variant:"contained",onClick:j,children:"Browse file"})]})]}),e.jsx(l,{fullWidth:!0,label:"Mail subject",variant:"outlined",margin:"normal"}),e.jsx(l,{fullWidth:!0,label:"Description",variant:"outlined",margin:"normal",InputProps:{endAdornment:e.jsx(U,{position:"end",children:"64 characters, 1 SMS"}),style:{height:"100px",padding:"0 14px"}},sx:{"& .MuiOutlinedInput-root":{height:"80px"}}}),e.jsxs(ne,{fullWidth:!0,children:[e.jsx(H,{id:"recipients-select-label",children:"Recipients"}),e.jsx(K,{labelId:"recipients-select-label",id:"recipients-select",multiple:!0,value:w,onChange:t=>I(t.target.value),renderValue:t=>t.join(", "),children:M.map(t=>e.jsx(V,{value:t,children:e.jsx(q,{primary:t})},t))})]}),e.jsxs(r,{display:"flex",justifyContent:"space-between",children:[e.jsx(l,{label:"Sender's address",variant:"outlined",margin:"normal"}),e.jsx(l,{label:"Sender's name",variant:"outlined",margin:"normal"})]}),e.jsx(J,{control:e.jsx(Q,{checked:m,onChange:t=>R(t.target.checked)}),label:"Таргетинг"}),m&&e.jsxs("div",{children:[e.jsx(p,{children:e.jsx(re,{children:e.jsx(d,{label:"Регион",options:F,placeholder:"Empty",onChange:()=>{}})})}),e.jsxs(p,{children:[e.jsx(C,{children:e.jsx(d,{label:"Возраст",options:u,placeholder:"Empty",onChange:()=>{}})}),e.jsx(oe,{children:" — "}),e.jsx(C,{children:e.jsx(d,{label:"",options:u,placeholder:"Empty",onChange:()=>{}})})]}),e.jsx(p,{children:e.jsx(se,{children:e.jsx(z,{options:h,selectedOption:L,onChange:E})})})]}),e.jsxs(r,{display:"flex",justifyContent:"space-between",mt:2,children:[e.jsx(s,{variant:"contained",color:"primary",onClick:g,children:"Cancel"}),e.jsx(s,{variant:"contained",color:"secondary",children:"Submit"})]})]}),e.jsxs(_,{children:[e.jsx("h2",{children:"Стоимость"}),e.jsxs(y,{component:b,children:[e.jsx(f,{children:e.jsxs(a,{children:[e.jsx(i,{children:"Количество"}),e.jsx(i,{align:"right",children:"Стоимость"})]})}),e.jsx(v,{children:A.map((t,c)=>e.jsxs(a,{children:[e.jsx(i,{children:t.count}),e.jsx(i,{align:"right",children:t.cost})]},c))})]}),e.jsx("h2",{children:"Получатели"}),e.jsxs(y,{component:b,children:[e.jsx(f,{children:e.jsxs(a,{children:[e.jsx(i,{children:"Параметр"}),e.jsx(i,{align:"right",children:"Количество"}),e.jsx(i,{align:"right",children:"Выбранный"})]})}),e.jsx(v,{children:D.map((t,c)=>e.jsxs(a,{children:[e.jsx(i,{children:t.parameter}),e.jsx(i,{align:"right",children:t.count}),e.jsx(i,{align:"right",children:t.selected})]},c))})]})]})]})]})};export{Te as default};
