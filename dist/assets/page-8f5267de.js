import{q as f,p as b,s as C,r as u,z as j,A as v,_ as x,j as e,D as y,E as w,u as t,T as d}from"./index-c419738b.js";import{d as M}from"./Cancel-8f25a0b0.js";import{r as P,i as I}from"./createSvgIcon-11e80f9b.js";import{R as B}from"./Radio-69edeb53.js";import{P as R}from"./Paper-fe9a4639.js";import"./createSvgIcon-31eb99b3.js";import"./SwitchBase-2ecde832.js";import"./useFormControl-f31c04cb.js";import"./ButtonBase-249fdcdb.js";function _(o){return f("MuiCard",o)}b("MuiCard",["root"]);const S=["className","raised"],D=o=>{const{classes:r}=o;return w({root:["root"]},_,r)},L=C(R,{name:"MuiCard",slot:"Root",overridesResolver:(o,r)=>r.root})(()=>({overflow:"hidden"})),A=u.forwardRef(function(r,i){const n=j({props:r,name:"MuiCard"}),{className:l,raised:s=!1}=n,p=v(n,S),a=x({},n,{raised:s}),c=D(a);return e.jsx(L,x({className:y(c.root,l),elevation:s?8:void 0,ref:i,ownerState:a},p))}),T=A;function N(o){return f("MuiCardContent",o)}b("MuiCardContent",["root"]);const U=["className","component"],$=o=>{const{classes:r}=o;return w({root:["root"]},N,r)},z=C("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(o,r)=>r.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),q=u.forwardRef(function(r,i){const n=j({props:r,name:"MuiCardContent"}),{className:l,component:s="div"}=n,p=v(n,U),a=x({},n,{component:s}),c=$(a);return e.jsx(z,x({as:s,className:y(c.root,l),ownerState:a,ref:i},p))}),E=q;var h={},V=I;Object.defineProperty(h,"__esModule",{value:!0});var k=h.default=void 0,O=V(P()),H=e,F=(0,O.default)((0,H.jsx)("path",{d:"M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"CheckCircleOutline");k=h.default=F;const W=t.button`
  padding: 5px 10px;
  background-color: #ffffff;
  width: 150px;
  height: 35px;
  color: #000000;
  border: 1px solid;
  border-radius: 5px;
  cursor: pointer;
  float: right; // Расположим кнопку справа от заголовка
`,G=t.div`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 201;
`,J=t.div`
  justify-content: space-around;
  background: white;
  padding: 20px;
  width: 800px;
  height: 500px;
  overflow-y: auto;
`,K=t.h2`
  margin-bottom: 20px;
`,Q=t.div`
  margin-bottom: 20px;
`,X=t.label`
  display: flex;
  align-items: center;
  margin-top: 100px;

  input {
    margin-right: 10px;
  }
`,Y=t.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 20px;
`,Z=t.button`
  width: 150px;
  height: 35px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 40px;

  &:disabled {
    background-color: #cccccc;
  }
`,ee=({onClose:o})=>{const[r,i]=u.useState(!1);return e.jsx(G,{children:e.jsxs(J,{children:[e.jsx(K,{children:"Договор"}),e.jsx(Q,{children:'Lorem Ipsum - это модельный текст для публикационной и типографической индустрии. Lorem Ipsum стал стандартным текстом в индустрии с 1960-х годов, когда некоторые компании начали использовать его для своих образцов. Важно, что этот текст не только выглядит достаточно убедительно, но и имеет более-менее стандартное распределение букв, что делает его полезным при вёрстке. Многие программы компьютерной печати и редакторы используют Lorem Ipsum в качестве стандартного текста, и поиск по "Lorem Ipsum" выявит множество веб-сайтов, которые все еще находятся в стадии разработки. Существует множество различных версий Lorem Ipsum, но многие из них подверглись изменениям, иногда случайным, иногда - намеренным, с введением юмора или слов, которые даже отдаленно не напоминают латынь. Lorem Ipsum - это модельный текст для публикационной и типографической индустрии. Lorem Ipsum стал стандартным текстом в индустрии с 1960-х годов, когда некоторые компании начали использовать его для своих образцов.'}),e.jsxs(X,{children:[e.jsx("input",{type:"checkbox",checked:r,onChange:n=>i(n.target.checked)}),"Я согласен с условиями"]}),e.jsxs(Y,{children:[e.jsx(Z,{disabled:!r,children:"Подтвердить"}),e.jsx(W,{onClick:o,children:"Закрыть"})]})]})})},te={Стандарт:"#3caff6",Классический:"#4e49ec",Бизнес:"#4caf50",Премиум:"#212121"},oe=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  margin-top: 20px;
  border-radius: 20px;
  height: 700px;
`,re=t(T)`
  width: 100%;
  height: 600px;
  margin: 16px;
  border: 1px solid #e0e0e0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
`,se=t.div`
  background-color: ${o=>te[o.header]};
  color: white;
  padding: 10px;
  text-align: center;
`,ne=t.div`
  margin-top: -10px;
  border-bottom: 1px solid #e0e0e0;
  padding: 16px;
`,ie=t.div`
  display: flex;
  align-items: center;
  padding: 5px;
  border-bottom: 1px solid #e0e0e0;
`,ae=t(E)`
  flex-grow: 1;
  overflow-y: auto;
`,ce=t.ul`
  list-style: none;
  padding: 0;
  margin: 16px;
`,g=t.li`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`,de=t(k)`
  color: #4caf50;
  margin-right: 8px;
`,le=t(M)`
  color: #9e9e9e;
  margin-right: 8px;
`,pe=t.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #0479c3, rgba(0, 119, 255, 0.5));
  color: white;
  font-weight: inherit;
  width: 240px;
  height: 40px;
  border: 0 solid rgba(0, 0, 0, 0);
  cursor: pointer;
  bottom: 20px;
  transition: all 0.3s ease;

  &:hover {
    width: 240px; /* Увеличиваем ширину */
    height: 45px; /* Увеличиваем высоту */
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.4); /* Добавляем box shadow */
  }
`,m=t(d)`
  margin-right: 8px;
  &.discounted {
    color: red;
    font-weight: 600;
  }
  &.original {
    text-decoration: line-through;
    color: grey;
  }
`,ue=t(d)`
  margin-left: auto;
  color: red;
  font-weight: 600;
`,xe=()=>{const[o,r]=u.useState(null),[i,n]=u.useState(!1),l=[{header:"Стандарт",description:"Базовый тарифный план с доступным набором услуг.",price:"Free / 1 месяц",benefits:["10% скидка на услуги","Бесплатный доступ к ресурсам","Круглосуточная поддержка"],disabledBenefits:["Премиальный доступ к новым услугам"]},{header:"Классический",description:"Расширенный пакет услуг для частных лиц и предпринимателей.",price:"60,000 AMD / 1 месяц",discountedPrice:"50,000 AMD / 1 месяц",discountPercentage:"-12%",benefits:["15% скидка на все услуги","Доступ к эксклюзивным материалам","Персональный менеджер"],disabledBenefits:["VIP обслуживание"]},{header:"Бизнес",description:"Комплексное предложение для бизнес-клиентов.",price:"80,000 AMD / 1 месяц",discountedPrice:"70,000 AMD / 1 месяц",discountPercentage:"-10%",benefits:["Бизнес-анализ и отчеты","Приоритетная поддержка"],disabledBenefits:["Круглосуточный доступ к персональному консультанту"]},{header:"Премиум",description:"Эксклюзивный набор услуг для наиболее требовательных клиентов.",price:"120,000 AMD / 1 месяц",discountedPrice:"100,000 AMD / 1 месяц",discountPercentage:"-15%",benefits:["Персональный подход","Круглосуточная VIP поддержка"],disabledBenefits:[]}];return e.jsxs(oe,{children:[l.map((s,p)=>e.jsxs(re,{children:[e.jsx(se,{header:s.header,children:e.jsx(d,{variant:"h5",component:"div",children:s.header})}),e.jsxs(ae,{children:[e.jsx(ne,{children:e.jsx(d,{variant:"body2",children:s.description})}),e.jsxs(ie,{children:[e.jsx(B,{checked:o===s.header,onChange:()=>r(s.header)}),e.jsx(m,{variant:"body1",className:"discounted",children:s.price}),e.jsx(m,{variant:"body2",className:"original",children:s.discountedPrice}),e.jsx(ue,{variant:"body2",children:s.discountPercentage})]}),e.jsxs(ce,{children:[s.benefits.map((a,c)=>e.jsxs(g,{children:[e.jsx(de,{}),e.jsx(d,{variant:"body2",children:a})]},c)),s.disabledBenefits.map((a,c)=>e.jsxs(g,{children:[e.jsx(le,{}),e.jsx(d,{variant:"body2",component:"span",children:e.jsx("s",{children:a})})]},c))]}),e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(pe,{onClick:()=>n(!0),children:"Активировать"})})]})]},p)),i&&e.jsx(ee,{onClose:()=>n(!1)})]})},we=()=>e.jsx("div",{children:e.jsx(xe,{})});export{we as default};
