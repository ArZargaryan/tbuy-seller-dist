import{u as t,r as i,j as e,f as h,i as m,t as l,h as D,e as le}from"./index-786c574d.js";import{d as ae,a as re,b as de,c as ce,e as pe}from"./Wallpaper-9c9150d8.js";import{R as xe,a as he,d as ge,b as fe,c as ue,e as me,f as je}from"./index-52c75269.js";import{R as be}from"./radio-group-fa4f9c0f.js";import{S as P,T as Ce}from"./table_pricelist_banners-19d78b3a.js";import"./createSvgIcon-767dd3f6.js";import"./createSvgIcon-ccd3771d.js";import"./index-a605fed4.js";import"./Box-90e91437.js";import"./useSlotProps-0bf0a99e.js";const ve=t.div`
  width: 800px;
  height: 150px;
  background-color: ${o=>o.backgroundColor};
  position: relative;
  overflow: hidden;
`,Se=t.div`
  position: absolute;
  cursor: move;
  display: flex;
  align-items: center;
  border: 1px solid #ffffff;
`,ye=t.div`
  resize: both;
  overflow: auto;
  font-size: 24px;
  background-color: rgba(255, 255, 255, 0);
  padding: 10px;
  min-width: 50px;
  min-height: 50px;
`,d=t.button`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #f4f6f8;
  border: none;
  color: #0177c1;
  gap: 5px;
  margin-bottom: 20px;
  padding: 5px;
  cursor: pointer;
`,we=t.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`,j=t.div`
  position: relative;
  display: inline-block;
`,b=t.div`
  position: absolute;
  background-color: white;
  padding: 20px;
  z-index: 999;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  display: ${o=>o.hidden?"none":"block"};
  top: ${o=>o.top};
  left: ${o=>o.left};
`,Te=t.div`
  display: flex;
  flex-wrap: wrap;
`,ke=t.div`
  width: 30px;
  height: 30px;
  background-color: ${o=>o.color};
  cursor: pointer;
  margin: 5px;
  border-radius: 4px;
`,Re=t.img`
  max-width: 100%;
  max-height: 100%;
`,Be=()=>{const[o,a]=i.useState("#2463BF"),[s,g]=i.useState(null),[f,u]=i.useState(""),[v,_]=i.useState(""),[S,I]=i.useState(!1),[y,H]=i.useState(!1),[w,T]=i.useState(!1),[k,V]=i.useState(!1),W=["#FFC0CB","#ADD8E6","#90EE90","#FFFACD","#D3D3D3","#FFB6C1","#E6E6FA","#FFEFD5","#FFE4B5","#F5DEB3"],[R,N]=i.useState(1),[B,M]=i.useState(0),[E,G]=i.useState({x:50,y:50}),[X,Y]=i.useState(0),q=n=>{a(n),T(!1)},F=n=>{u(n)},J=n=>{g(n)},K=()=>{V(!k)},Q=()=>{const n=document.createElement("input");n.type="file",n.accept="image/*",n.onchange=c=>{const r=c.target,p=r.files?r.files[0]:null;if(p){const x=new FileReader;x.onload=se=>{var A;_((A=se.target)==null?void 0:A.result)},x.readAsDataURL(p)}},n.click()},Z=()=>I(!S),ee=()=>H(!y),te=()=>T(!w),$=n=>N(R+n),z=n=>M(B+n),ne=n=>{},oe=n=>{Y(n)},ie=n=>{n.currentTarget;const c=document.getElementById("banner-container");if(n.clientX!==0&&n.clientY!==0&&c){const r=c.getBoundingClientRect(),p=n.clientX-r.left,x=n.clientY-r.top;G({x:p,y:x})}};return e.jsxs("div",{children:[e.jsxs(we,{children:[e.jsxs(j,{children:[e.jsxs(d,{onClick:Z,children:[e.jsx(ae,{style:{fontSize:"20px"}}),"Шаблон"]}),e.jsxs(b,{hidden:!S,top:"40px",left:"10px",children:[e.jsx("h2",{children:"Выберите шаблон"}),e.jsx("p",{children:s==null?void 0:s.name}),e.jsx("p",{children:s==null?void 0:s.content}),e.jsx("button",{onClick:()=>J({name:"Template 2",content:"Template content 2"}),children:"Template 2"})]})]}),e.jsxs(d,{onClick:te,children:[e.jsx(re,{style:{fontSize:"20px"}}),"Фон"]}),e.jsxs(b,{hidden:!w,top:"243px",left:"330px",children:[e.jsx("h2",{children:"Выберите цвет фона"}),e.jsx(Te,{children:W.map(n=>e.jsx(ke,{color:n,onClick:()=>q(n)},n))})]}),e.jsxs(j,{children:[e.jsxs(d,{onClick:ee,children:[e.jsx(de,{style:{fontSize:"20px"}}),"Текст"]}),e.jsxs(b,{hidden:!y,top:"40px",left:"10px",children:[e.jsx("h2",{children:"Выберите текст"}),e.jsx("button",{onClick:()=>F("Default Text"),children:"Default Text"}),e.jsx("button",{onClick:()=>F("Header Text"),children:"Header Text"}),e.jsx(j,{children:e.jsx(d,{onClick:K,children:k?"Закрепить":"Редактировать"})})]})]}),e.jsxs(d,{onClick:Q,children:[e.jsx(ce,{style:{fontSize:"20px"}}),"Загрузить"]})]}),e.jsxs(ve,{id:"banner-container",backgroundColor:o,children:[v&&e.jsx(xe,{defaultSize:{width:320,height:200},children:e.jsx(he,{angle:X,onRotate:oe,children:e.jsx(Re,{src:v,alt:"Uploaded"})})}),e.jsxs(Se,{style:{left:`${E.x}px`,top:`${E.y}px`},draggable:!0,onDrag:ie,children:[e.jsx(ye,{contentEditable:!0,style:{transform:`scale(${R}) rotate(${B}deg)`},onResize:ne,children:f}),e.jsx(ge,{}),e.jsx(fe,{onClick:()=>z(-15)}),e.jsx(ue,{onClick:()=>z(15)}),e.jsx(me,{onClick:()=>$(.1)}),e.jsx(je,{onClick:()=>$(-.1)})]})]})]})},Ee=t.section`
  margin-top: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 100px;
`,U=t.header`
  display: flex;
  justify-content: left;
  height: 30px;
  font-size: 17pt;
  font-weight: bolder;
  margin-bottom: 20px;
`,C=[{value:"Бессрочный",label:"Бессрочный"},{value:"Limited",label:"Limited"}],Fe=[{value:"Teenagers",label:"Teenagers"},{value:"Old persons",label:"Old persons"}],$e=t.div`
  width: 300px;
  margin-top: 90px;
  margin-left: 380px;
`,ze=t.div`
  width: 300px;
  margin-top: -45px;
`,Ae=t.div`
  width: 300px;
  margin-top: 50px;
`,De=t.div`
  margin-left: 385px;
  margin-top: -55px;
`,O=t.div`
  //background-color: black;
  width: 1px;
  padding-bottom: 10px;
  font-weight: bold;
  font-size: 10pt;
`,Pe=t.div`
  margin-top: 35px;
`,Ue=t.div`
  margin-top: 30px;
  width: 300px;
`,Oe=t.div`
  margin-top: -43px;
  margin-left: 380px;
  width: 300px;
`,Le=t.div`
  margin-top: 50px;
  width: 300px;
`,_e=t.div`
  margin-left: 380px;
  margin-top: -30px;
`,Ie=t.div`
  display: flex;
  justify-content: space-between;
  background-color: #f4f6f8;
  width: 100%;
  height: 240px;
  margin-top: 20px;
`,He=t.div`
  font-size: 13pt;
  font-weight: bold;
  margin-left: 20px;
  margin-top: 20px;
`,Ve=t.div`
  padding-right: 300px;
`,We=t.div`
  display: block;
  background-color: #f4f6f8;
  width: 100%;
  height: 240px;
  margin-top: 20px;
`,L=t.div`
  font-size: 13pt;
  font-weight: bold;
  margin-left: 20px;
  padding-top: 20px;
  margin-bottom: 20px;
`,Ne=t.div`
  font-size: 13pt;
  font-weight: bold;
  margin-left: 20px;
  padding-top: 70px;
`,Me=t.div`
  margin-top: -190px;
  margin-left: 750px;
  font-weight: bold;
  font-size: 16px;
`,Ge=t.div`
  margin-left: 750px;
  padding-top: 40px;
  font-weight: bold;
  font-size: 16px;
`,Xe=t.div`
  padding-left: 750px;
  padding-top: 100px;
  font-weight: bolder;
  font-size: 20px;
`,Ye=t.div`
  height: 100%;
  width: 201px;
  margin-top: 20px;
`,qe=t.div`
  margin-top: -43px;
  padding-left: 250px;
  padding-bottom: 20px;
`,Je=t.div`
  width: 300px;
`,Ke=t.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 80px;
  margin-top: 20px;
`,Qe=()=>{const o=["Male","Female","All"],[a,s]=i.useState(o[0]);i.useState(!1);const g=u=>{s(u)};function f(){}return e.jsx("div",{children:e.jsxs(Ee,{children:[e.jsx(U,{children:"Добавить CATFISH BANNER"}),e.jsx(Be,{}),e.jsx($e,{children:e.jsx(h,{label:"Дата запуска",options:C,placeholder:"Empty",onChange:()=>{}})}),e.jsx(ze,{children:e.jsx(m,{large:"S",type:"text",label:l("Название баннера"),placeholder:`${l("Type here")}...`})}),e.jsx(Ae,{children:e.jsx(m,{large:"S",type:"text",label:l("Ссылка на сайт    "),placeholder:`${l("Type here")}...`})}),e.jsxs(De,{children:[e.jsx(O,{children:"Срок"}),e.jsx(P,{})]}),e.jsxs(Pe,{children:[e.jsx(O,{children:"Бюджет"}),e.jsx(P,{})]}),e.jsx(U,{children:"Аудитория"}),e.jsx(Ke,{children:e.jsx(Je,{children:e.jsx(h,{label:"Выбрать аудиторию",options:Fe,placeholder:"Empty",onChange:()=>{}})})}),e.jsx(Ue,{children:e.jsx(m,{large:"S",type:"text",label:l("Название аудитории"),placeholder:`${l("Type here")}...`})}),e.jsx(Oe,{children:e.jsx(h,{label:"Регион",options:C,placeholder:"Empty",onChange:()=>{}})}),e.jsx(Le,{children:e.jsx(h,{label:"Возраст",options:C,placeholder:"Empty",onChange:()=>{}})}),e.jsx(_e,{children:e.jsx(be,{options:o,selectedOption:a,onChange:g})}),e.jsxs(Ie,{children:[e.jsx(He,{children:"Цена"}),e.jsx(Ve,{children:e.jsx(Ce,{})})]}),e.jsxs(We,{children:[e.jsx(L,{children:"Бюджет"}),e.jsx(L,{children:"Продолжительность"}),e.jsx(Ne,{children:"Итого:"}),e.jsx(Me,{children:"2500USD в день"}),e.jsx(Ge,{children:"4 дня"}),e.jsx(Xe,{children:"10000USD"})]}),e.jsx(Ye,{children:e.jsx(D,{style:{width:200},type:"submit",onClick:f,large:"S",appearance:"white",stretched:!0,variant:"bordered",children:l("Cancel")})}),e.jsx(qe,{children:e.jsx(D,{style:{width:450},type:"submit",large:"S",appearance:"white",stretched:!0,variant:"primary",children:l("Send")})})]})})},Ze=t.section`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  width: 1200px;
  background-color: #ffffff;
`,et=t.div`
  position: absolute;
`,tt=t.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-left: 20px;
  padding-top: 20px;
  font-size: 13pt;
  font-weight: bolder;
  cursor: pointer;
`,xt=()=>{const o=le(),a=()=>{o("/marketing-block")};return e.jsxs(et,{children:[e.jsxs(tt,{onClick:a,children:[e.jsx(pe,{style:{fontSize:"30px"}}),"TO RETURN"]}),e.jsx(Ze,{children:e.jsx(Qe,{})})]})};export{xt as default};
