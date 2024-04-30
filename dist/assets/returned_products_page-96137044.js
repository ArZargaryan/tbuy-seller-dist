import{u as i,j as e,r as h,T as p}from"./index-c419738b.js";import{T as m}from"./TableContainer-81f43054.js";import{P as j}from"./Paper-fe9a4639.js";import{T as u,a as g,b as o,c as r,d as y}from"./TableRow-9490eb28.js";import{C as f}from"./Checkbox-852bbcec.js";import{B as a}from"./Button-125100b5.js";import{C as v}from"./Collapse-6313f30b.js";import{B as b}from"./Box-cab087b7.js";import{T}from"./TextField-c48a1c0c.js";import"./SwitchBase-2ecde832.js";import"./useFormControl-f31c04cb.js";import"./ButtonBase-249fdcdb.js";import"./createSvgIcon-31eb99b3.js";import"./Menu-8b625b44.js";import"./react-is.production.min-a192e302.js";import"./useSlotProps-33460e79.js";const C=[{id:2,photo:"Фото товара 2",brand:"Бренд 2",quantityAndPrice:"2 шт | 299 980 AMD",sale:"28.10.2020 | 17:50",delivery:"Стандартная доставка",customerName:"Иван Иванов",customerCode:"#123456",paymentMethod:"Безналичные",deliveryAddress:"Адрес 2",store:"Магазин 2",deliveryProvider:"Доставщик 2",customerStatus:"Не подтверждено",comment:"Комментарий к заказу 2"}],P=i.div`
  //background-color: white;
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
  margin-top: 20px;
`,c=i(T)`
  margin-right: 10px;
`,l=i(a)`
  margin-left: 10px;
`,B=i.div`
  display: flex;
  gap: 20px;
`,d=i.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  padding: 8px;
  border-bottom: 1px solid #ccc;
`,t=i.div`
  &:last-child {
    margin-right: 0;
  }
`,R=i(p)`
  font-size: 24px;
  margin-bottom: 16px;
`,S=({row:s})=>{const[n,x]=h.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs(o,{children:[e.jsx(r,{children:e.jsx(f,{})}),e.jsx(r,{component:"th",scope:"row",children:s.photo}),e.jsx(r,{children:s.brand}),e.jsx(r,{children:s.quantityAndPrice}),e.jsx(r,{children:s.sale}),e.jsx(r,{children:s.delivery}),e.jsx(r,{children:e.jsx(a,{onClick:()=>x(!n),children:n?"Скрыть":"Узнать больше"})})]}),e.jsx(o,{children:e.jsx(r,{style:{paddingBottom:0,paddingTop:0},colSpan:7,children:e.jsx(v,{in:n,timeout:"auto",unmountOnExit:!0,children:e.jsxs(b,{margin:1,children:[e.jsxs(d,{children:[e.jsxs(t,{children:[e.jsx("strong",{children:"Покупатель:"})," ",s.customerName]}),e.jsxs(t,{children:[e.jsx("strong",{children:"Код покупателя:"})," ",s.customerCode]}),e.jsxs(t,{children:[e.jsx("strong",{children:"Метод оплаты:"})," ",s.paymentMethod]}),e.jsxs(t,{children:[e.jsx("strong",{children:"Адрес доставки:"})," ",s.deliveryAddress]})]}),e.jsxs(d,{children:[e.jsxs(t,{children:[e.jsx("strong",{children:"Магазин:"})," ",s.store]}),e.jsxs(t,{children:[e.jsx("strong",{children:"Доставщик:"})," ",s.deliveryProvider]}),e.jsxs(t,{children:[e.jsx("strong",{children:"Статус покупателя:"})," ",s.customerStatus]}),e.jsx(t,{})," "]}),e.jsx(d,{children:e.jsxs(t,{style:{width:"100%"},children:[e.jsx("strong",{children:"Комментарий:"})," ",s.comment]})})]})})})})]})},L=()=>e.jsxs("div",{children:[e.jsxs(P,{children:[e.jsx(c,{type:"date"}),e.jsx(c,{type:"date"}),e.jsxs(B,{children:[e.jsx(l,{variant:"contained",color:"primary",children:"Искать"}),e.jsx(l,{variant:"contained",color:"secondary",children:"Экспорт"})]})]}),e.jsx(R,{variant:"h6",children:"Returned Products"}),e.jsx(m,{component:j,children:e.jsxs(u,{children:[e.jsx(g,{children:e.jsxs(o,{children:[e.jsx(r,{children:"Фото"}),e.jsx(r,{children:"Бренд"}),e.jsx(r,{children:"Количество и цена"}),e.jsx(r,{children:"Продажа"}),e.jsx(r,{children:"Доставка"}),e.jsx(r,{children:"Действие"})]})}),e.jsx(y,{children:C.map(s=>e.jsx(S,{row:s},s.id))})]})})]});export{L as default};
