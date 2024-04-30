import{u as n,r as i,j as e,f as ee,i as h,t as s,h as R,e as te}from"./index-81b9eae3.js";import{d as ne,a as oe,b as ie,c as se,e as ae}from"./Wallpaper-9dd8c63e.js";import{R as le,a as re,d as de,b as ce,c as pe,e as xe,f as he}from"./index-f58a6611.js";import"./createSvgIcon-b9c2f462.js";import"./createSvgIcon-5f74b268.js";import"./index-c2b4add3.js";const fe=n.div`
  width: 650px;
  height: 400px;
  background-color: ${o=>o.backgroundColor};
  position: relative;
  overflow: hidden;
`,ge=n.div`
  position: absolute;
  cursor: move;
  display: flex;
  align-items: center;
  border: 1px solid #ffffff;
`,ue=n.div`
  resize: both;
  overflow: auto;
  font-size: 24px;
  background-color: rgba(255, 255, 255, 0);
  padding: 10px;
  min-width: 50px;
  min-height: 50px;
`,d=n.button`
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
`,me=n.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`,f=n.div`
  position: relative;
  display: inline-block;
`,g=n.div`
  position: absolute;
  background-color: white;
  padding: 20px;
  z-index: 999;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  display: ${o=>o.hidden?"none":"block"};
  top: ${o=>o.top};
  left: ${o=>o.left};
`,je=n.div`
  display: flex;
  flex-wrap: wrap;
`,be=n.div`
  width: 30px;
  height: 30px;
  background-color: ${o=>o.color};
  cursor: pointer;
  margin: 5px;
  border-radius: 4px;
`,Ce=n.img`
  max-width: 100%;
  max-height: 100%;
`,ye=()=>{const[o,l]=i.useState("#2463BF"),[a,E]=i.useState(null),[B,D]=i.useState(""),[u,z]=i.useState(""),[m,U]=i.useState(!1),[j,P]=i.useState(!1),[b,C]=i.useState(!1),[y,G]=i.useState(!1),_=["#FFC0CB","#ADD8E6","#90EE90","#FFFACD","#D3D3D3","#FFB6C1","#E6E6FA","#FFEFD5","#FFE4B5","#F5DEB3"],[S,A]=i.useState(1),[T,O]=i.useState(0),[v,L]=i.useState({x:50,y:50}),[I,W]=i.useState(0),H=t=>{l(t),C(!1)},w=t=>{D(t)},N=t=>{E(t)},X=()=>{G(!y)},Y=()=>{const t=document.createElement("input");t.type="file",t.accept="image/*",t.onchange=c=>{const r=c.target,p=r.files?r.files[0]:null;if(p){const x=new FileReader;x.onload=Z=>{var F;z((F=Z.target)==null?void 0:F.result)},x.readAsDataURL(p)}},t.click()},M=()=>U(!m),q=()=>P(!j),J=()=>C(!b),k=t=>A(S+t),$=t=>O(T+t),K=t=>{},Q=t=>{W(t)},V=t=>{t.currentTarget;const c=document.getElementById("banner-container");if(t.clientX!==0&&t.clientY!==0&&c){const r=c.getBoundingClientRect(),p=t.clientX-r.left,x=t.clientY-r.top;L({x:p,y:x})}};return e.jsxs("div",{children:[e.jsxs(me,{children:[e.jsxs(f,{children:[e.jsxs(d,{onClick:M,children:[e.jsx(ne,{style:{fontSize:"20px"}}),"Шаблон"]}),e.jsxs(g,{hidden:!m,top:"40px",left:"10px",children:[e.jsx("h2",{children:"Выберите шаблон"}),e.jsx("p",{children:a==null?void 0:a.name}),e.jsx("p",{children:a==null?void 0:a.content}),e.jsx("button",{onClick:()=>N({name:"Template 2",content:"Template content 2"}),children:"Template 2"})]})]}),e.jsxs(d,{onClick:J,children:[e.jsx(oe,{style:{fontSize:"20px"}}),"Фон"]}),e.jsxs(g,{hidden:!b,top:"243px",left:"330px",children:[e.jsx("h2",{children:"Выберите цвет фона"}),e.jsx(je,{children:_.map(t=>e.jsx(be,{color:t,onClick:()=>H(t)},t))})]}),e.jsxs(f,{children:[e.jsxs(d,{onClick:q,children:[e.jsx(ie,{style:{fontSize:"20px"}}),"Текст"]}),e.jsxs(g,{hidden:!j,top:"40px",left:"10px",children:[e.jsx("h2",{children:"Выберите текст"}),e.jsx("button",{onClick:()=>w("Default Text"),children:"Default Text"}),e.jsx("button",{onClick:()=>w("Header Text"),children:"Header Text"}),e.jsx(f,{children:e.jsx(d,{onClick:X,children:y?"Закрепить":"Редактировать"})})]})]}),e.jsxs(d,{onClick:Y,children:[e.jsx(se,{style:{fontSize:"20px"}}),"Загрузить"]})]}),e.jsxs(fe,{id:"banner-container",backgroundColor:o,children:[u&&e.jsx(le,{defaultSize:{width:320,height:200},children:e.jsx(re,{angle:I,onRotate:Q,children:e.jsx(Ce,{src:u,alt:"Uploaded"})})}),e.jsxs(ge,{style:{left:`${v.x}px`,top:`${v.y}px`},draggable:!0,onDrag:V,children:[e.jsx(ue,{contentEditable:!0,style:{transform:`scale(${S}) rotate(${T}deg)`},onResize:K,children:B}),e.jsx(de,{}),e.jsx(ce,{onClick:()=>$(-15)}),e.jsx(pe,{onClick:()=>$(15)}),e.jsx(xe,{onClick:()=>k(.1)}),e.jsx(he,{onClick:()=>k(-.1)})]})]})]})},Se=[{value:"Бессрочный",label:"Бессрочный"},{value:"Limited",label:"Limited"}],Te=n.section`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  width: 100%;
`,ve=n.header`
  display: flex;
  justify-content: left;
  height: 30px;
  font-size: 25pt;
  font-weight: bolder;
  margin-bottom: 20px;
`,we=n.div`
  margin-bottom: 20px;
`,ke=n.div`
  width: 300px;
  margin-top: 50px;
  margin-left: 380px;
`,$e=n.div`
  width: 300px;
  margin-top: -45px;
`,Fe=n.div`
  width: 300px;
  margin-top: 50px;
`,Re=n.div`
  width: 600px;
  margin-top: 50px;
`,Ee=n.div`
  height: 100%;
  width: 201px;
  margin-top: 20px;
`,Be=n.div`
  margin-top: -43px;
  padding-left: 250px;
  padding-bottom: 20px;
`,De=n.div`
  margin-top: 30px;
  font-weight: bold;
  font-size: 25px;
`;n.div`
  width: 300px;
`;n.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 80px;
  margin-top: 20px;
`;const ze=()=>{const o=["Male","Female","All"];i.useState(o[0]),i.useState(!1);function l(){}return e.jsx("div",{children:e.jsxs(Te,{children:[e.jsx(ve,{children:"Добавить подарочную карту"}),e.jsx(we,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}),e.jsx(ye,{}),e.jsx(De,{children:"Выбрать подарочный пакет"}),e.jsx(ke,{children:e.jsx(ee,{label:"Категории",options:Se,placeholder:"Empty",onChange:()=>{}})}),e.jsx($e,{children:e.jsx(h,{large:"S",type:"text",label:s("Имя"),placeholder:`${s("Type here")}...`})}),e.jsx(Fe,{children:e.jsx(h,{large:"S",type:"text",label:s("Стоимость"),placeholder:`${s("Type here")}...`})}),e.jsx(Re,{children:e.jsx(h,{large:"L",type:"text",label:s("Описание"),placeholder:`${s("Type here")}...`})}),e.jsx(Ee,{children:e.jsx(R,{style:{width:200},type:"submit",onClick:l,large:"S",appearance:"white",stretched:!0,variant:"bordered",children:s("Cancel")})}),e.jsx(Be,{children:e.jsx(R,{style:{width:450},type:"submit",large:"S",appearance:"white",stretched:!0,variant:"primary",children:s("Send")})})]})})},Ue=n.section`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  width: 1200px;
  background-color: #ffffff;
`,Pe=n.div`
  position: absolute;
`,Ge=n.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-left: 20px;
  padding-top: 20px;
  font-size: 13pt;
  font-weight: bolder;
  cursor: pointer;
`,He=()=>{const o=te(),l=()=>{o("/gift-card")};return e.jsx("div",{children:e.jsxs(Pe,{children:[e.jsxs(Ge,{onClick:l,children:[e.jsx(ae,{style:{fontSize:"30px"}}),"TO RETURN"]}),e.jsx(Ue,{children:e.jsx(ze,{})})]})})};export{He as default};
