import{u as t,j as e,r as h,T as p}from"./index-2bc117be.js";import{T as m}from"./TableContainer-d3acd75e.js";import{P as j}from"./Paper-85fb9fba.js";import{T as g,a as u,b as o,c as r,d as y}from"./TableRow-d38be5a9.js";import{C as v}from"./Checkbox-efcf2a66.js";import{B as a}from"./Button-86535438.js";import{C as b}from"./Collapse-3f7b9164.js";import{B as f}from"./Box-2aeb85a8.js";import{T}from"./TextField-2c028d2c.js";import"./SwitchBase-f0861c78.js";import"./useFormControl-6d476b15.js";import"./ButtonBase-8fbd39f9.js";import"./createSvgIcon-bae563fb.js";import"./Menu-6b8c360a.js";import"./react-is.production.min-a192e302.js";import"./useSlotProps-97c8360a.js";const C=[{id:2,photo:"Фото товара 2",brand:"Бренд 2",quantityAndPrice:"2 шт | 299 980 AMD",sale:"28.10.2020 | 17:50",delivery:"Стандартная доставка",customerName:"Иван Иванов",customerCode:"#123456",paymentMethod:"Безналичные",deliveryAddress:"Адрес 2",store:"Магазин 2",deliveryProvider:"Доставщик 2",customerStatus:"Не подтверждено",comment:"Комментарий к заказу 2"}],B=t.div`
  //background-color: white;
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
  margin-top: 20px;
`,l=t(T)``,c=t(a)``,S=t.div`
  display: flex;
  gap: 20px;
`,d=t.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  padding: 8px;
  border-bottom: 1px solid #ccc;
`,i=t.div`
  &:last-child {
    margin-right: 0;
  }
`,P=t(p)`
  font-size: 24px;
  margin-bottom: 16px;
`,A=({row:s})=>{const[n,x]=h.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{children:[e.jsx(r,{children:e.jsx(v,{})}),e.jsx(r,{component:"th",scope:"row",children:s.photo}),e.jsx(r,{children:s.brand}),e.jsx(r,{children:s.quantityAndPrice}),e.jsx(r,{children:s.sale}),e.jsx(r,{children:s.delivery}),e.jsx(r,{children:e.jsx(a,{onClick:()=>x(!n),children:n?"Скрыть":"Узнать больше"})})]}),e.jsx(o,{children:e.jsx(r,{style:{paddingBottom:0,paddingTop:0},colSpan:7,children:e.jsx(b,{in:n,timeout:"auto",unmountOnExit:!0,children:e.jsxs(f,{margin:1,children:[e.jsxs(d,{children:[e.jsxs(i,{children:[e.jsx("strong",{children:"Покупатель:"})," ",s.customerName]}),e.jsxs(i,{children:[e.jsx("strong",{children:"Код покупателя:"})," ",s.customerCode]}),e.jsxs(i,{children:[e.jsx("strong",{children:"Метод оплаты:"})," ",s.paymentMethod]}),e.jsxs(i,{children:[e.jsx("strong",{children:"Адрес доставки:"})," ",s.deliveryAddress]})]}),e.jsxs(d,{children:[e.jsxs(i,{children:[e.jsx("strong",{children:"Магазин:"})," ",s.store]}),e.jsxs(i,{children:[e.jsx("strong",{children:"Доставщик:"})," ",s.deliveryProvider]}),e.jsxs(i,{children:[e.jsx("strong",{children:"Статус покупателя:"})," ",s.customerStatus]}),e.jsx(i,{})," "]}),e.jsx(d,{children:e.jsxs(i,{style:{width:"100%"},children:[e.jsx("strong",{children:"Комментарий:"})," ",s.comment]})})]})})})})]})},L=()=>e.jsxs("div",{children:[e.jsxs(B,{children:[e.jsx(l,{type:"date"}),e.jsx(l,{type:"date"}),e.jsxs(S,{children:[e.jsx(c,{variant:"contained",color:"primary",children:"Искать"}),e.jsx(c,{variant:"contained",color:"secondary",children:"Экспорт"})]})]}),e.jsx(P,{variant:"h6",children:"Sales"}),e.jsx(m,{component:j,children:e.jsxs(g,{children:[e.jsx(u,{children:e.jsxs(o,{children:[e.jsx(r,{children:"Фото"}),e.jsx(r,{children:"Бренд"}),e.jsx(r,{children:"Количество и цена"}),e.jsx(r,{children:"Продажа"}),e.jsx(r,{children:"Доставка"}),e.jsx(r,{children:"Действие"})]})}),e.jsx(y,{children:C.map(s=>e.jsx(A,{row:s},s.id))})]})})]});export{L as default};
