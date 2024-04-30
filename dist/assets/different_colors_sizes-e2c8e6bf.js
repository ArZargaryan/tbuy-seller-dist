import{n as D,j as e,G as E,u as n,r as x,h as _,t as M}from"./index-81b9eae3.js";import{d as u}from"./Check-988bab75.js";import{r as T,i as H}from"./createSvgIcon-b9c2f462.js";import{d as O}from"./AddCircleOutline-484e3eb2.js";const V=D.div`
  position: relative;
`,U={control:(t,o)=>({...t,borderRadius:0,height:"24px",border:0}),dropdownIndicator:(t,o)=>({...t,transform:o.isFocused?"rotate(180deg)":"none",transition:"transform 0.2s ease",color:"#000"}),menu:(t,o)=>({...t,zIndex:2}),option:(t,{data:o,isDisabled:r,isFocused:h,isSelected:s})=>({...t,backgroundColor:r?void 0:s?"#007BFF":h?"#E5E5E5":void 0,color:r?"#ccc":s?"white":o.value,cursor:r?"not-allowed":"default",":active":{...t[":active"],backgroundColor:r?void 0:s?"#007BFF":"#E5E5E5"}})},W=t=>e.jsx(V,{children:e.jsx(E,{defaultValue:t.options[0],closeMenuOnSelect:!1,options:t.options,styles:U})}),A=n.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
  width: 484px;
  transform: scale(0.8);
`,g=n.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
`,j=n.span`
  width: 30%;
  font-size: 14pt;
`,B=n.span`
  margin-right: 10px;
  font-weight: bold;
  font-size: 14pt;
  width: 30%;
`,I=n.span`
  margin-right: 5px;
  margin-left: 5px;
  font-weight: normal;
`,m=n.div`
  //background-color: rgba(152, 56, 56, 0.55);
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1; /* Расширяет InputContainer на всю доступную ширину */
  margin-left: 10px;
`,N=n.div`
  margin-left: 148px;
`,G=n.div`
  margin-left: 9px;
`,L=n.div`
  margin-left: 35px;
`,J=n.div`
  margin-left: 35px;
`,f=n.input`
  width: 100px;
  padding: 5px;
  border: 1px solid #ccc;
  font-weight: bold;
  margin-right: 10px;
  //margin-left: 10px;
`,b=n.div`
  border: 1px solid rgba(128, 128, 128, 0.5); /* Обводка серого цвета */
  cursor: pointer;
  width: 50px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;
`,K=n.div`
  width: 130px;
  height: 35px;
  font-size: 19px;
  font-weight: bold;
`,Q=[{label:"USD",value:"USD"},{label:"RUB",value:"RUB"},{label:"DRM",value:"DRM"}],Be=()=>{const[t,o]=x.useState(""),[r,h]=x.useState(""),[s,i]=x.useState(""),[w,k]=x.useState(""),q=c=>{o(c.target.value)},z=c=>{h(c.target.value)},$=c=>{i(c.target.value)},F=c=>{k(c.target.value)};return e.jsx("div",{children:e.jsxs(A,{children:[e.jsxs(g,{children:[e.jsx(j,{children:"Баланс"}),e.jsx(N,{children:e.jsxs(m,{children:[e.jsx(f,{type:"text",placeholder:"",value:t,onChange:q}),e.jsx(b,{children:e.jsx(u,{})})]})})]}),e.jsxs(g,{children:[e.jsx(j,{children:"Себестоимость"}),e.jsx(I,{children:"|"}),e.jsx(K,{children:e.jsx(W,{label:"",options:Q,placeholder:"",onChange:()=>{}})}),e.jsx(G,{children:e.jsxs(m,{children:[e.jsx(f,{type:"text",placeholder:"",value:r,onChange:z}),e.jsx(b,{children:e.jsx(u,{})})]})})]}),e.jsxs(g,{children:[e.jsx(j,{children:"Оптовая цена"}),e.jsx(I,{children:"|"}),e.jsx(B,{children:"10000 DRM"}),e.jsx(L,{children:e.jsxs(m,{children:[e.jsx(f,{type:"text",placeholder:"",value:s,onChange:$}),e.jsx(b,{children:e.jsx(u,{})})]})})]}),e.jsxs(g,{children:[e.jsx(j,{children:"Продажная цена"}),e.jsx(I,{children:"|"}),e.jsx(B,{children:"10000 DRM"}),e.jsx(J,{children:e.jsxs(m,{children:[e.jsx(f,{type:"text",placeholder:"",value:w,onChange:F}),e.jsx(b,{children:e.jsx(u,{})})]})})]})]})})};var P={},X=H;Object.defineProperty(P,"__esModule",{value:!0});var Y=P.default=void 0,Z=X(T()),ee=e,ne=(0,Z.default)((0,ee.jsx)("path",{d:"M20 2H4c-1 0-2 .9-2 2v3.01c0 .72.43 1.34 1 1.69V20c0 1.1 1.1 2 2 2h14c.9 0 2-.9 2-2V8.7c.57-.35 1-.97 1-1.69V4c0-1.1-1-2-2-2zm-5 12H9v-2h6v2zm5-7H4V4l16-.02V7z"}),"Inventory");Y=P.default=ne;const te=n.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
`,oe=n.div`
  background: white;
  padding: 40px;
  min-width: 600px;
  border-radius: 8px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,re=n.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 10px;
  font-size: 40px;
  border: none;
  background: none;
  cursor: pointer;
`,ie=n.h2`
  margin-top: 0;
  color: #333;
`,se=n.div`
  padding: 20px 0;
`,ce=n.div`
  padding-top: 20px;
  display: flex;
  justify-content: flex-end;
`,R=n.button`
  padding: 10px 20px;
  margin-left: 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:first-child {
    background-color: #f5f5f5;
    color: #333;
  }

  &:last-child {
    background-color: #0177c1;
    color: white;
  }
`,le=n.div`
  //border: 1px solid rgba(98, 98, 98, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,ae=n.img`
  width: 150px;
  height: 150px;
  //border: 1px solid rgba(98, 98, 98, 0.25);
`,de=n.div`
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
`,pe=n.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`,v=n.td`
  padding: 8px;
  //border: 1px solid #ddd;
`,y=n.th`
  padding: 8px;
  //border: 1px solid #ddd;
  background-color: #f2f2f2;
`;n.button`
  padding: 5px 10px;
  margin: 0;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 3px;
  cursor: pointer;
`;const S=n.input`
  padding: 5px;
  margin: 0 5px;
  border: 1px solid #ddd;
`,C=()=>e.jsxs("tr",{children:[e.jsx(v,{children:"..."}),e.jsx(v,{children:e.jsx(S,{type:"text"})}),e.jsx(v,{children:"..."}),e.jsx(v,{children:e.jsx(S,{type:"text"})})]}),xe=({onClose:t})=>e.jsx("div",{children:e.jsx(te,{children:e.jsxs(oe,{children:[e.jsx(re,{onClick:t,children:"×"}),e.jsx(ie,{children:"Balance request"}),e.jsxs(se,{children:[e.jsxs(le,{children:[e.jsx(ae,{src:"public/mikrovolnovka.jpg"}),e.jsx(de,{children:"Item name, maybe very long item name"})]}),e.jsxs(pe,{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx(y,{children:"Размер"}),e.jsx(y,{children:"Баланс"}),e.jsx(y,{children:"Размер"}),e.jsx(y,{children:"Баланс"})]})}),e.jsxs("tbody",{children:[e.jsx(C,{}),e.jsx(C,{}),e.jsx(C,{}),e.jsx(C,{})]})]})]}),e.jsxs(ce,{children:[e.jsx(R,{onClick:t,children:"Cancel"}),e.jsx(R,{children:"Confirm"})]})]})})}),he=n.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 11;
`,ue=n.div`
  background: white;
  padding: 40px;
  min-width: 600px;
  height: 700px;
  max-height: 1200px;
  overflow-y: scroll;
  border-radius: 8px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,ge=n.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 5px 10px;
  font-size: 40px;
  border: none;
  background: none;
  cursor: pointer;
`,je=n.h2`
  margin-top: 0;
  color: #333;
`,me=n.div`
  padding: 20px 0;
  // Define more styles for your body content here
`,fe=n.div`
  padding-top: 20px;
  display: flex;
  justify-content: flex-end;
`,be=n.button`
  padding: 10px 20px;
  margin-left: 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:first-child {
    background-color: #f5f5f5;
    color: #333;
  }

  &:last-child {
    background-color: #0177c1;
    color: white;
  }
`,ve=n.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
`,ye=n.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
`,l=n.div`
  width: 400px;
  height: 250px;
  border: 1px solid rgba(98, 98, 98, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,a=n.img`
  width: 150px;
  height: 150px;
  //border: 1px solid rgba(98, 98, 98, 0.25);
`,d=n.div`
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
`,p=n.div`
  color: #0177c1;
  font-weight: bold;
  text-decoration: underline;
  margin-top: 10px;
  cursor: pointer;
`,Ce=n.div`
  margin-left: 40px;
`,Re=({onClose:t})=>{const[o,r]=x.useState(!1),[h,s]=x.useState(!1),i=()=>{r(!0)},w=()=>{r(!1)},k=()=>{s(!0)};return e.jsxs(he,{children:[e.jsxs(ue,{children:[e.jsx(ge,{onClick:t,children:"×"}),e.jsx(je,{children:"A product containing different colors and sizes"}),e.jsxs(me,{children:[e.jsxs(ve,{children:[e.jsxs(l,{children:[e.jsx(a,{src:"public/mikrovolnovka.jpg"}),e.jsx(d,{children:"Item name"}),e.jsx(p,{onClick:i,children:"Balance Request"})]}),e.jsxs(l,{children:[e.jsx(a,{src:"public/mikrovolnovka.jpg"}),e.jsx(d,{children:"Item name"}),e.jsx(p,{onClick:i,children:"Balance Request"})]}),e.jsxs(l,{children:[e.jsx(a,{src:"public/mikrovolnovka.jpg"}),e.jsx(d,{children:"Item name"}),e.jsx(p,{onClick:i,children:"Balance Request"})]})]}),e.jsxs(ye,{children:[e.jsxs(l,{children:[e.jsx(a,{src:"public/mikrovolnovka.jpg"}),e.jsx(d,{children:"Item name"}),e.jsx(p,{onClick:i,children:"Balance Request"})]}),e.jsxs(l,{children:[e.jsx(a,{src:"public/mikrovolnovka.jpg"}),e.jsx(d,{children:"Item name"}),e.jsx(p,{onClick:i,children:"Balance Request"})]}),e.jsxs(l,{children:[e.jsx(a,{src:"public/mikrovolnovka.jpg"}),e.jsx(d,{children:"Item name"}),e.jsx(p,{onClick:i,children:"Balance Request"})]})]})]}),e.jsxs(fe,{children:[e.jsx(be,{onClick:t,children:"Cancel"}),e.jsx(Ce,{children:e.jsxs(_,{style:{width:300},type:"submit",onClick:k,large:"S",appearance:"white",stretched:!0,variant:"bordered",children:[e.jsx(O,{}),M("Add another color")]})})]})]}),o&&e.jsx(xe,{onClose:w})]})};export{Re as D,Be as P,xe as a,Y as d};
