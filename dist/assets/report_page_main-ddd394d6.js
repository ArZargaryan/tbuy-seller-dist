import{u as n,r as d,j as t,R as c,T as a}from"./index-2bc117be.js";import{T as x}from"./TextField-2c028d2c.js";import{B as p}from"./Button-86535438.js";import{T as g}from"./TableContainer-d3acd75e.js";import{P as u}from"./Paper-85fb9fba.js";import{T as y,a as b,b as r,c as i,d as T}from"./TableRow-d38be5a9.js";import{C}from"./Collapse-3f7b9164.js";import{B as o}from"./Box-2aeb85a8.js";import"./useFormControl-6d476b15.js";import"./createSvgIcon-bae563fb.js";import"./react-is.production.min-a192e302.js";import"./Menu-6b8c360a.js";import"./useSlotProps-97c8360a.js";import"./ButtonBase-8fbd39f9.js";const P=n.div`
  background: white;
  padding: 20px;
  margin-top: 20px;
`,v=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`,D=n(a)`
  font-size: 24px;
`,R=n(o)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  padding: 10px;
  border-radius: 4px;
  background: #f9f9f9;
`;n(o)`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-basis: calc(33.333% - 20px); // Вычитаем gap
`;const A=n.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: 10px;
`,B=n(o)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: left;

  & > * {
    margin-right: 16px;
  }
`,W=()=>{const[m,S]=d.useState([{id:1,date:"19.01.2021",orderNumber:"#124589",tariffPlan:{name:"План А",color:"blue"},totalAmount:"500 000 AMD",status:"Ожидает",statusColor:"red",details:[{photo:"Фото товара",name:"SHIVAKI 32SH90G SMART",price:"144 990 AMD",quantity:"1 штука"}]}]),[l,h]=d.useState({}),j=e=>{h(s=>({...s,[e]:!s[e]}))};return t.jsxs(P,{children:[t.jsxs(v,{children:[t.jsx(D,{children:"Reports"}),t.jsxs("div",{children:[t.jsx(x,{type:"date"}),t.jsx(x,{type:"date",style:{marginLeft:"10px"}}),t.jsx(p,{variant:"contained",color:"primary",style:{marginLeft:"10px",marginTop:"10px"},children:"Экспорт"})]})]}),t.jsx(g,{component:u,children:t.jsxs(y,{children:[t.jsx(b,{children:t.jsxs(r,{children:[t.jsx(i,{children:"Дата"}),t.jsx(i,{children:"№ Заказа"}),t.jsx(i,{children:"Тарифный план"}),t.jsx(i,{children:"Общая сумма"}),t.jsx(i,{children:"Статус"}),t.jsx(i,{children:"Действие"})]})}),t.jsx(T,{children:m.map(e=>t.jsxs(c.Fragment,{children:[t.jsxs(r,{children:[t.jsx(i,{children:e.date}),t.jsx(i,{children:e.orderNumber}),t.jsx(i,{style:{color:e.tariffPlan.color},children:e.tariffPlan.name}),t.jsx(i,{style:{fontWeight:"bold"},children:e.totalAmount}),t.jsx(i,{style:{color:e.statusColor},children:e.status}),t.jsx(i,{children:t.jsx(p,{onClick:()=>j(e.id),children:l[e.id]?"Скрыть":"Узнать больше"})})]}),t.jsx(r,{children:t.jsx(i,{style:{paddingBottom:0,paddingTop:0},colSpan:6,children:t.jsx(C,{in:l[e.id],timeout:"auto",unmountOnExit:!0,children:t.jsx(R,{children:e.details.map((s,f)=>t.jsxs(c.Fragment,{children:[t.jsx(A,{src:s.photo,alt:s.name}),t.jsxs(B,{children:[t.jsx(a,{variant:"body2",children:s.name}),t.jsx(a,{variant:"body2",children:s.price}),t.jsx(a,{variant:"body2",children:s.quantity})]})]},f))})})})})]},e.id))})]})})]})};export{W as default};
