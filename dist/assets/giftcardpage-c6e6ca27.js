import{j as e,u as t,e as A,R as G,r as h}from"./index-2bc117be.js";import{r as u,i as x}from"./createSvgIcon-5f6a3721.js";import{d as C}from"./Close-1b971a6a.js";import{D as w,a as S}from"./DialogTitle-faaf543f.js";import{a as D,D as z}from"./DialogContent-3091d299.js";import{T as P}from"./TextField-2c028d2c.js";import{I as _}from"./IconButton-0e32ca7d.js";import{B as $}from"./Button-86535438.js";import{D as O,d as H}from"./Delete-0ed33edd.js";import{P as V}from"./Paper-85fb9fba.js";import{a as W,T as c}from"./Tabs-2b72eadc.js";import{d as Q}from"./Edit-1f8d0a24.js";import{d as N}from"./MoreVert-169e3176.js";import"./createSvgIcon-bae563fb.js";import"./useSlotProps-97c8360a.js";import"./Menu-6b8c360a.js";import"./react-is.production.min-a192e302.js";import"./ButtonBase-8fbd39f9.js";import"./useFormControl-6d476b15.js";var m={},U=x;Object.defineProperty(m,"__esModule",{value:!0});var T=m.default=void 0,L=U(u()),J=e,Y=(0,L.default)((0,J.jsx)("path",{d:"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"ControlPoint");T=m.default=Y;const K=t.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0);
  width: 200px;
  height: 50px;
  border: 2px solid rgb(1, 119, 193);
  color: #0177c1;
  cursor: pointer;
  gap: 10px;
`,X=t.div`
  font-weight: bold;
`,Z=()=>{const i=A();return e.jsx("div",{children:e.jsxs(K,{onClick:o=>{o.preventDefault(),i("/add-gift-card")},children:[e.jsx(T,{}),e.jsx(X,{children:"GIFT CARD"})]})})};var g={},ee=x;Object.defineProperty(g,"__esModule",{value:!0});var k=g.default=void 0,te=ee(u()),ie=e,oe=(0,te.default)((0,ie.jsx)("path",{d:"M15 21h-2v-2h2v2zm-2-7h-2v5h2v-5zm8-2h-2v4h2v-4zm-2-2h-2v2h2v-2zM7 12H5v2h2v-2zm-2-2H3v2h2v-2zm7-5h2V3h-2v2zm-7.5-.5v3h3v-3h-3zM9 9H3V3h6v6zm-4.5 7.5v3h3v-3h-3zM9 21H3v-6h6v6zm7.5-16.5v3h3v-3h-3zM21 9h-6V3h6v6zm-2 10v-3h-4v2h2v3h4v-2h-2zm-2-7h-4v2h4v-2zm-4-2H7v2h2v2h2v-2h2v-2zm1-1V7h-2V5h-2v4h4zM6.75 5.25h-1.5v1.5h1.5v-1.5zm0 12h-1.5v1.5h1.5v-1.5zm12-12h-1.5v1.5h1.5v-1.5z"}),"QrCode2");k=g.default=oe;const re=t(w)`
  & .MuiPaper-root {
    width: 700px;
    height: 700px;
    max-width: 100%;
  }
`,ne=t(D)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
`,ae=t(S)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,se=t(P)`
  margin-top: 20px;
  width: 100%;
`,le=t.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 250px;
  margin-bottom: 20px; // Добавляем пространство под изображением
  box-shadow: 0 0 50px 10px rgba(134, 134, 134, 0.1);
`,de=t.div`
  margin-bottom: 20px;
`,ce=({open:i,onClose:o})=>e.jsxs(re,{open:i,onClose:o,"aria-labelledby":"giftcard-dialog-title",children:[e.jsxs(ae,{id:"giftcard-dialog-title",children:["Подарочная карта",e.jsx(_,{"aria-label":"close",onClick:o,children:e.jsx(C,{})})]}),e.jsxs(ne,{children:[e.jsx(le,{src:"/public/no_photo.png",alt:"Gift Card"}),e.jsxs(de,{children:[e.jsx("div",{children:"Имя получателя: John Doe"}),e.jsx("div",{children:"Номер получателя: +374 55 236589"})]}),e.jsx(se,{autoFocus:!0,margin:"dense",id:"qr-code",label:"Код QR",type:"text",fullWidth:!0})]}),e.jsx(z,{children:e.jsx($,{onClick:o,color:"primary",children:"ПОДТВЕРДИТЬ"})})]}),pe=t(w)`
  & .MuiPaper-root {
    width: 700px;
    height: 400px;
    max-width: 100%;
  }
`,he=t(S)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #0177c1;
  font-weight: bold;
`,ue=t(D)``,xe=t(O)``,me=t(P)`
  margin-top: 40px;
  width: 400px;
`,ge=t(z)``,ve=({open:i,onClose:o})=>{const[r,n]=G.useState(!1),d=()=>{n(!0)},a=()=>{n(!1),o()};return e.jsxs("div",{children:[e.jsxs(pe,{open:i,onClose:o,"aria-labelledby":"form-dialog-title",children:[e.jsxs(he,{id:"form-dialog-title",children:["Введите QR - идентификатор",e.jsx(_,{"aria-label":"close",onClick:o,children:e.jsx(C,{})})]}),e.jsxs(ue,{children:[e.jsx(xe,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, amet, assumenda blanditiis commodi cupiditate ea eaque laudantium molestiae quia recusandae sit suscipit vitae. Aliquam, architecto delectus dolore est impedit molestiae."}),e.jsx(me,{autoFocus:!0,margin:"dense",id:"qr-code",label:"QR Code",type:"text",fullWidth:!0})]}),e.jsx(ge,{children:e.jsx($,{onClick:d,color:"primary",children:"Продолжить"})})]}),r&&e.jsx(ce,{open:r,onClose:a})]})},fe=t.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, #0479c3, rgba(0, 119, 255, 0.72));
  width: 200px;
  height: 50px;
  border: 0 solid rgba(0, 0, 0, 0);
  color: white;
  cursor: pointer;
`,je=t.div``,be=t.div`
  margin-left: 5px;
`,ye=()=>{const[i,o]=h.useState(!1),r=()=>{o(!0)},n=()=>{o(!1)};return e.jsxs("div",{children:[e.jsxs(fe,{onClick:r,children:[e.jsx(je,{children:e.jsx(k,{style:{fontSize:"30px"}})}),e.jsx(be,{children:"СКАНИРОВАТЬ"})]}),e.jsx(ve,{open:i,onClose:n})]})},j=({children:i,value:o,index:r})=>o===r?e.jsx("div",{children:i}):null,Ce=({idStatus:i})=>{const[o,r]=h.useState(0),n=(d,a)=>{r(a)};return e.jsxs("div",{children:[e.jsx(V,{square:!0,children:e.jsxs(W,{value:o,onChange:n,children:[e.jsx(c,{label:"All"}),e.jsx(c,{label:"On hold"}),e.jsx(c,{label:"Approved"}),e.jsx(c,{label:"Sold"})]})}),e.jsx(j,{value:o,index:0}),e.jsx(j,{value:o,index:1})]})};var v={},we=x;Object.defineProperty(v,"__esModule",{value:!0});var R=v.default=void 0,Se=we(u()),De=e,ze=(0,Se.default)((0,De.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"RemoveRedEye");R=v.default=ze;const Pe=i=>{switch(i){case"green":return"#D1FFDE";case"yellow":return"#F9E7D5";case"red":return"#FFDEE2"}},M=i=>{switch(i){case"green":return"#29B551";case"yellow":return"#FF9E3D";case"red":return"#EE1B38"}},_e=i=>{switch(i){case"green":return"Принято";case"yellow":return"В ожидании";case"red":return"Используется"}},$e=t.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
`,s=t.th`
  background-color: #f0f0f0;
  padding: 10px;
`,l=t.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`,Te=t.div`
  width: 50px;
  height: 50px;
`,ke=t.img`
  width: 100%;
  height: auto;
`,b=t.span`
  position: relative;
  cursor: pointer;
  margin: 0 5px;

  &:hover {
    opacity: 0.7;
  }
`,Re=t.div`
  width: 150px;
  height: 25px;
  background-color: ${i=>Pe(i.statusColor)};
  color: ${i=>M(i.statusColor)};
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 5px;
  position: relative;
`,Me=t.div`
  height: 10px;
  width: 10px;
  background-color: ${i=>M(i.statusColor)};
  border-radius: 50%;
  position: absolute;
  left: 5px;
  top: 50%;
  transform: translateY(-50%);
`,qe=t.span`
  font-size: 14px;
`,Ie=t.div`
  display: ${i=>i.show?"block":"none"};
  width: fit-content;
  padding: 5px 10px;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  right: 110px;
  background-color: white;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 10px;
  font-size: 13px;
`,y=t.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  gap: 5px;
  width: 100%;
  height: 30px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`,Be=({image:i,name:o,quantity:r,price:n,saleDate:d,status:a,onView:q,onMore:I})=>{const[f,p]=h.useState(!1),B=()=>{p(!f),I()},E=()=>{p(!1)},F=()=>{p(!1)};return e.jsxs("tr",{children:[e.jsx(l,{children:e.jsx(Te,{children:e.jsx(ke,{src:i,alt:o})})}),e.jsx(l,{children:o}),e.jsx(l,{children:`${r} | $${n}`}),e.jsx(l,{children:d}),e.jsx(l,{children:e.jsxs(Re,{statusColor:a,children:[e.jsx(Me,{statusColor:a}),e.jsx(qe,{children:_e(a)})]})}),e.jsxs(l,{children:[e.jsx(b,{onClick:q,children:e.jsx(R,{})}),e.jsx(b,{onClick:B,children:e.jsx(N,{})}),e.jsxs(Ie,{show:f,children:[e.jsxs(y,{onClick:E,children:[e.jsx(Q,{style:{fontSize:"20px"}})," ","Редактировать"]}),e.jsxs(y,{onClick:F,children:[e.jsx(H,{style:{fontSize:"20px"}})," ","Удалить"]})]})]})]})},Ee=()=>{const i=[{image:"path-to-image",name:"Product Name",quantity:1,price:100,saleDate:"2023-01-01 | 10:00",status:"red"},{image:"path-to-image",name:"Product Name",quantity:1,price:100,saleDate:"2023-01-01 | 10:00",status:"green"},{image:"path-to-image",name:"Product Name",quantity:1,price:100,saleDate:"2023-01-01 | 10:00",status:"yellow"},{image:"path-to-image",name:"Product Name",quantity:1,price:100,saleDate:"2023-01-01 | 10:00",status:"red"}];return e.jsxs($e,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx(s,{children:"Изображение"}),e.jsx(s,{children:"Название"}),e.jsx(s,{children:"Количество и цена"}),e.jsx(s,{children:"Продажа"}),e.jsx(s,{children:"Статус"}),e.jsx(s,{children:"Действия"})]})}),e.jsx("tbody",{children:i.map((o,r)=>e.jsx(Be,{image:o.image,name:o.name,quantity:o.quantity,price:o.price,saleDate:o.saleDate,status:o.status,onView:()=>{},onMore:()=>{}},r))})]})},Fe=t.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 100%;
  height: 1000px;
  margin-top: 40px;
`,Ae=t.div`
  //background-color: #0177c1;
  height: 800px;
  margin-top: 40px;
  margin-left: 40px;
  margin-right: 40px;
`,Ge=t.div`
  //background-color: red;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`,Oe=t.div`
  margin-top: 40px;
`,He=t.div`
  font-weight: bold;
  font-size: 30px;
`,Ve=t.div`
  display: flex;
  justify-content: space-around;
  gap: 30px;
`,We=t.div``,Qe=t.div``,pt=()=>e.jsx("div",{children:e.jsx(Fe,{children:e.jsxs(Ae,{children:[e.jsxs(Ge,{children:[e.jsx(He,{children:"GIFT CARDS"}),e.jsxs(Ve,{children:[e.jsx(We,{children:e.jsx(ye,{})}),e.jsx(Qe,{children:e.jsx(Z,{})})]})]}),e.jsxs(Oe,{children:[e.jsx(Ce,{idStatus:0}),e.jsx(Ee,{})]})]})})});export{pt as default};
