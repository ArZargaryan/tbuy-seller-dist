import{j as e,u as t,r as i,h as S,t as B}from"./index-81b9eae3.js";import{a as D,d as M}from"./KeyboardArrowDown-fd9378f6.js";import{R as I}from"./radio-group-6982dd5b.js";import{r as G,i as $}from"./createSvgIcon-b9c2f462.js";import"./createSvgIcon-5f74b268.js";var y={},V=$;Object.defineProperty(y,"__esModule",{value:!0});var H=y.default=void 0,W=V(G()),q=e,T=(0,W.default)((0,q.jsx)("path",{d:"M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"}),"KeyboardArrowUp");H=y.default=T;var w={},E=$;Object.defineProperty(w,"__esModule",{value:!0});var F=w.default=void 0,L=E(G()),O=e,K=(0,L.default)((0,O.jsx)("path",{d:"M15 9H9v6h6V9zm-2 4h-2v-2h2v2zm8-2V9h-2V7c0-1.1-.9-2-2-2h-2V3h-2v2h-2V3H9v2H7c-1.1 0-2 .9-2 2v2H3v2h2v2H3v2h2v2c0 1.1.9 2 2 2h2v2h2v-2h2v2h2v-2h2c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2zm-4 6H7V7h10v10z"}),"Memory");F=w.default=K;const U=[{name:"Электроника",checked:!1,subcategories:[{name:"Смартфоны",checked:!1},{name:"Ноутбуки",checked:!1},{name:"Аксессуары",checked:!1}]},{name:"Мебель",checked:!1,subcategories:[{name:"Стулья",checked:!1},{name:"Столы",checked:!1},{name:"Диваны",checked:!1}]},{name:"Строительство и ремонт",checked:!1,subcategories:[{name:"Стройматериалы",checked:!1},{name:"Инструменты",checked:!1},{name:"Окна и двери",checked:!1}]},{name:"Дом и интерьер",checked:!1,subcategories:[{name:"Декор",checked:!1},{name:"Освещение",checked:!1},{name:"Мебель",checked:!1}]},{name:"Красота и уход",checked:!1,subcategories:[{name:"Косметика",checked:!1},{name:"Уход за кожей",checked:!1},{name:"Парфюмерия",checked:!1}]}],N=()=>{const[r,x]=i.useState(null),[s,j]=i.useState(null),d=o=>{x(o===r?null:o),j(null)},b=o=>{j(o===s?null:o)},a=t.input`
    margin-right: 10px;
  `,v=t.div`
    margin-right: 10px;
  `;return e.jsxs(J,{children:[e.jsx(Q,{children:"Categories"}),U.map(o=>e.jsxs(X,{children:[e.jsxs(P,{onClick:()=>d(o.name),children:[e.jsx(a,{type:"checkbox",checked:o.name===r,onChange:()=>{}}),e.jsx(v,{children:e.jsx(F,{})}),e.jsx(R,{children:o.name}),e.jsx(Y,{children:o.name===r?e.jsx(H,{}):e.jsx(D,{})})]}),o.name===r&&e.jsx(Z,{children:o.subcategories.map(l=>e.jsx(ee,{children:e.jsxs(P,{onClick:()=>b(l.name),children:[e.jsx(a,{type:"checkbox",checked:l.name===s,onChange:()=>{}}),e.jsx(R,{children:l.name})]})},l.name))})]},o.name))]})},J=t.div`
  display: flex;
  flex-direction: column;
`,Q=t.div`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
`,X=t.div`
  width: 350px;
  background-color: white;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
`,P=t.div`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  color: #2463bf;
  font-weight: bold;
`;t.div`
  margin-right: 10px;
`;const R=t.span`
  flex-grow: 1;
  color: inherit;
`,Y=t.div`
  font-size: 16px;
  color: inherit;
`,Z=t.div`
  display: flex;
  flex-direction: column;
`,ee=t.div`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  background-color: white;
  color: black;
  border-bottom: 1px solid #ccc;
`,_=[{name:"Бренд 1",checked:!1},{name:"Бренд 2",checked:!0},{name:"Бренд 3",checked:!1},{name:"Бренд 4",checked:!1},{name:"Бренд 5",checked:!1},{name:"Бренд 6",checked:!1},{name:"Бренд 7",checked:!1},{name:"Бренд 8",checked:!1},{name:"Бренд 9",checked:!1},{name:"Бренд 10",checked:!1},{name:"Бренд 11",checked:!1},{name:"Бренд 12",checked:!1},{name:"Бренд 13",checked:!1}],te=["Armenia","Another"],oe=[{color:"red"},{color:"blue"},{color:"aquamarine"},{color:"violet"},{color:"orange"},{color:"green"}],ne=t.div`
  display: flex;
  align-items: center;
  //background-color: green;
  width: 350px;
`,ce=t.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background-color: rgba(157, 11, 11, 0);
  overflow-y: auto; /* Добавляем вертикальную прокрутку */
  max-height: 200px; /* Максимальная высота контейнера перед появлением полосы прокрутки */
  margin-top: 20px;
`,re=t.div`
  font-size: 20px;
  font-weight: bold;
  margin-top: 40px;
`,ie=t.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 10px;
`,se=t.input`
  width: 20px;
  height: 20px;
`,de=t.div`
  font-size: 16px;
  margin-left: 10px;
`,ae=t.div`
  font-size: 20px;
  font-weight: bold;
  margin-top: 40px;
`,le=t.div`
  margin-top: 20px;
`,xe=t.div`
  display: flex;
  flex-direction: row;
  background-color: rgba(157, 11, 11, 0);
  overflow-y: auto;
  max-height: 200px;
  margin-top: 20px;
`,he=t.div`
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
`,A=t.div`
  background-color: ${r=>r.color};
  width: 40px;
  height: 40px;
  margin: 5px;
  border: 1px solid #3a3a3a;
  cursor: pointer;
  transition: all 0.2s;

  &:active {
    border: 2px solid blue;
    transform: scale(0.5);
  }
`,pe=({onAddGrayButton:r,onBrandChange:x,selectedColors:s,selectedBrands:j,selectedRegion:d,onChangeColor:b})=>{i.useState("");const[a,v]=i.useState("");i.useState(_);const o=n=>{r(n),b(n)},l=n=>{v(n),x(n)};return e.jsxs("div",{children:[e.jsx(ne,{children:e.jsx(N,{})}),e.jsx(re,{children:"Brand"}),e.jsx(ce,{children:_.map((n,k)=>e.jsxs(ie,{children:[e.jsx(se,{type:"checkbox",checked:n.name===a,onChange:()=>l(n.name)}),e.jsx(de,{children:n.name})]},k))}),e.jsx(ae,{children:"Country of issue"}),e.jsx(le,{children:e.jsx(I,{options:te,selectedOption:d,onChange:n=>{}})}),e.jsx(he,{children:"Цвета"}),e.jsx(xe,{children:oe.map((n,k)=>e.jsx(A,{onClick:()=>o(n.color),color:n.color},k))})]})},ue=t.div`
  display: flex;
  //justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  margin-top: 40px;
  border-radius: 10px;
  padding: 20px;
`,fe=t.div`
  width: 100%;
  //background-color: red;
`,me=t.div`
  //background-color: dodgerblue;
  display: flex;
  flex-direction: row;
`,ge=t.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  //background-color: #00a6ff;
  margin-top: 20px;
`,je=t.div`
  //background-color: red;
  font-size: 18pt;
  font-weight: bolder;
`,be=t.button`
  background-color: #ffffff;
  border: 1px solid #ccc;
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`,ke=t.div`
  //background-color: mediumpurple;
  font-weight: normal;
  font-size: 12pt;
  margin-top: 5px;
`,ve=t.div`
  margin-top: 40px;
  width: 350px;
  //background-color: green;
`,Ce=t.div`
  margin-top: 40px;
  width: 100%;
  //background-color: #791177;
  overflow-y: scroll;
  overflow-x: hidden;
  max-height: 1000px;
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track:hover {
    background-color: #ddd;
  }
`,ye=t.div`
  display: flex;
  flex-direction: row;
`,z=t.button`
  background-color: #afafaf;
  border: 1px solid #ccc;
  width: 80px;
  height: 40px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`,we=t.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  width: 100%;
`,Se=t.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
`,Be=t.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 250px;
  height: 250px;
  border: 1px solid #ccc;
  margin-left: 10px;
  margin-top: 35px;
`,Pe=t.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 250px;
  height: 250px;
  border: 1px solid #ccc;
  margin-left: 10px;
  margin-top: 35px;
`,Re=t.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 250px;
  height: 250px;
  border: 1px solid #ccc;
  margin-left: 10px;
  margin-top: 35px;
`,_e=t.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 250px;
  height: 250px;
  border: 1px solid #ccc;
  margin-left: 10px;
  margin-top: 35px;
`,ze=t.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 250px;
  height: 250px;
  border: 1px solid #ccc;
  margin-left: 10px;
  margin-top: 35px;
`,Ge=t.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 250px;
  height: 250px;
  border: 1px solid #ccc;
  margin-left: 10px;
  margin-top: 35px;
`,h=t.div`
  //background-color: green;
  width: 100%;
`,p=t.div`
  width: 100%;
  height: 20px;
  display: flex;
  align-items: center;
  margin-left: 10px;
`,u=t.input`
  display: none;

  & + label::before {
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 1px solid #ccc;
    background-color: #fff;
  }

  &:checked + label::before {
    background-color: #007bff;
  }
`,f=t.img`
  width: 120px;
  height: 120px;
`,m=t.h3`
  font-size: 18px;
  font-weight: normal;
  margin: 0;
`,g=t.p`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
  color: #000000;
`,$e=t.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 75px;
  background-color: rgba(255, 255, 255, 0); /* Set a background color */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.22); /* Add a box shadow */
  margin-top: 40px;
`,He=t.div`
  margin-right: 100px;
`,Ve=()=>{const[r,x]=i.useState([]),[s,j]=i.useState([]),[d,b]=i.useState([]),[a,v]=i.useState([]),[o,l]=i.useState(""),n=c=>{d.includes(c)||(x([c,...r]),b([...d,c]))},k=c=>{s.includes(c)||(x([c,...r]),j([...s,c]))};return e.jsx("div",{children:e.jsx(ue,{children:e.jsxs(fe,{children:[e.jsxs(je,{children:[e.jsxs(ge,{children:["Add a gift",e.jsx(be,{children:e.jsx(M,{})})]}),e.jsx(ke,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elite"})]}),e.jsxs(me,{children:[e.jsx(ve,{children:e.jsx(pe,{onAddGrayButton:n,onBrandChange:k,selectedColors:a,selectedBrands:s,selectedRegion:o,onChangeColor:c=>c})}),e.jsxs(Ce,{children:[e.jsxs(ye,{children:[d.map((c,C)=>e.jsxs(z,{children:[c,e.jsx(A,{color:a[0]})]},C)),s.map((c,C)=>e.jsx(z,{children:c},C))]}),e.jsxs(we,{children:[e.jsxs(Be,{children:[e.jsx(h,{children:e.jsxs(p,{children:[e.jsx(u,{type:"checkbox",id:"customCheckbox1"}),e.jsx("label",{htmlFor:"customCheckbox1"})]})}),e.jsx(f,{src:"public/mikrovolnovka.jpg"}),e.jsxs("div",{children:[e.jsx(m,{children:"Название товара"}),e.jsx(g,{children:"$99.99"})]})]}),e.jsxs(Pe,{children:[e.jsx(h,{children:e.jsxs(p,{children:[e.jsx(u,{type:"checkbox",id:"customCheckbox2"}),e.jsx("label",{htmlFor:"customCheckbox2"})]})}),e.jsx(f,{src:"public/mikrovolnovka.jpg"}),e.jsxs("div",{children:[e.jsx(m,{children:"Название товара"}),e.jsx(g,{children:"$99.99"})]})]}),e.jsxs(Re,{children:[e.jsx(h,{children:e.jsxs(p,{children:[e.jsx(u,{type:"checkbox",id:"customCheckbox3"}),e.jsx("label",{htmlFor:"customCheckbox3"})]})}),e.jsx(f,{src:"public/mikrovolnovka.jpg"}),e.jsxs("div",{children:[e.jsx(m,{children:"Название товара"}),e.jsx(g,{children:"$99.99"})]})]})]}),e.jsxs(Se,{children:[e.jsxs(_e,{children:[e.jsx(h,{children:e.jsxs(p,{children:[e.jsx(u,{type:"checkbox",id:"customCheckbox4"}),e.jsx("label",{htmlFor:"customCheckbox4"})]})}),e.jsx(f,{src:"public/mikrovolnovka.jpg"}),e.jsxs("div",{children:[e.jsx(m,{children:"Название товара"}),e.jsx(g,{children:"$99.99"})]})]}),e.jsxs(ze,{children:[e.jsx(h,{children:e.jsxs(p,{children:[e.jsx(u,{type:"checkbox",id:"customCheckbo5"}),e.jsx("label",{htmlFor:"customCheckbox5"})]})}),e.jsx(f,{src:"public/mikrovolnovka.jpg"}),e.jsxs("div",{children:[e.jsx(m,{children:"Название товара"}),e.jsx(g,{children:"$99.99"})]})]}),e.jsxs(Ge,{children:[e.jsx(h,{children:e.jsxs(p,{children:[e.jsx(u,{type:"checkbox",id:"customCheckbox6"}),e.jsx("label",{htmlFor:"customCheckbox6"})]})}),e.jsx(f,{src:"public/mikrovolnovka.jpg"}),e.jsxs("div",{children:[e.jsx(m,{children:"Название товара"}),e.jsx(g,{children:"$99.99"})]})]})]})]})]}),e.jsxs($e,{children:[e.jsx(He,{children:e.jsx(S,{style:{width:200},type:"submit",large:"S",appearance:"white",stretched:!0,variant:"bordered",children:B("Cancel")})}),e.jsx(S,{style:{width:450},type:"submit",large:"S",appearance:"white",stretched:!0,variant:"primary",children:B("Send")})]})]})})})};export{Ve as default};
