import{j as e,u as o,r as n,a2 as b}from"./index-2bc117be.js";import{d as m}from"./DeleteForever-46ab26cd.js";import{d as v}from"./Edit-1f8d0a24.js";import{r as C,i as k}from"./createSvgIcon-5f6a3721.js";import{P as z,a as O,d as $,D as M}from"./different_colors_sizes-b0ee7937.js";import{P as I}from"./Paper-85fb9fba.js";import{a as R,T as l}from"./Tabs-2b72eadc.js";import"./createSvgIcon-bae563fb.js";import"./Check-aa3b2f73.js";import"./AddCircleOutline-69190e10.js";import"./ButtonBase-8fbd39f9.js";import"./react-is.production.min-a192e302.js";import"./useSlotProps-97c8360a.js";var x={},q=k;Object.defineProperty(x,"__esModule",{value:!0});var u=x.default=void 0,_=q(C()),A=e,T=(0,_.default)((0,A.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz");u=x.default=T;const B=o.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-wrap: wrap;
  background-color: #ffffff;
  border: 1px solid rgba(98, 98, 98, 0.25);
  width: 400px;
  height: 450px;
  transform: scale(0.9);
`,F=o.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
`,H=o.div`
  //background-color: blueviolet;
  height: 30%;
  width: 20%;
`,D=o.div`
  //background-color: #d6e22b;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 30%;
  width: 60%;
`,L=o.div`
  //background-color: #bd188e;
  display: flex;
  flex-direction: column;
  height: 40%;
  width: 20%;
`,N=o.img`
  //background-color: rgba(131, 9, 9, 0.61);
  width: 130px;
  height: 130px;
`,E=o.div`
  //background-color: #eaeaea;
  color: #ff9e3d;
  font-size: 11pt;
`,W=o.div`
  margin-top: 10px;
  font-weight: bold;
`,V=o.div`
  //background-color: blue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 120px;
`,G=o.div`
  background-color: rgb(241, 241, 241);
  height: 35px;
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
`,J=o.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 10px;
  z-index: 1;
  display: ${t=>t.isOpen?"block":"none"};
`,f=o.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-top: 5px;
  &:hover {
    background-color: #f0f0f0;
  }
`,d=()=>{const[t,i]=n.useState(!1);n.useState(!1);const[r,s]=n.useState(!1);n.useState(!1);const a=()=>{s(p=>!p),t&&c()},c=()=>{i(!1)};return e.jsx("div",{children:e.jsxs(B,{children:[e.jsxs(F,{children:[e.jsx(H,{}),e.jsxs(D,{children:[e.jsx(N,{src:"public/mikrovolnovka.jpg"}),e.jsx(E,{children:"Approval is expected"}),e.jsx(W,{children:"*Name of Product*"})]}),e.jsx(L,{children:e.jsx(V,{children:e.jsxs(G,{children:[e.jsx(u,{onClick:a}),e.jsxs(J,{isOpen:r,children:[e.jsxs(f,{children:[e.jsx(m,{}),e.jsx("span",{children:"Удалить"})]}),e.jsxs(f,{as:b,to:"/change-product",children:[e.jsx(v,{}),e.jsx("span",{children:"Редактировать"})]})]})]})})})]}),e.jsx(z,{})]})})},K=o.div`
  display: flex;
  //justify-content: center;
  align-items: center;
  position: relative;
  flex-wrap: wrap;
  background-color: #ffffff;
  border: 1px solid rgba(98, 98, 98, 0.25);
  width: 350px;
  height: 406px;
  margin-top: 22px;
`,Q=o.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  margin-bottom: 30px;
`,U=o.div`
  //background-color: blueviolet;
  height: 30%;
  width: 20%;
`,X=o.div`
  //background-color: #d6e22b;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 30%;
  width: 60%;
`,Y=o.div`
  //background-color: #bd188e;
  display: flex;
  flex-direction: column;
  width: 20%;
  margin-bottom: 40px;
`,Z=o.img`
  background-color: rgba(131, 9, 9, 0.61);
  width: 130px;
  height: 130px;
`,ee=o.div`
  //background-color: #eaeaea;
  color: #ff9e3d;
  font-size: 11pt;
`,oe=o.div`
  margin-top: 10px;
  font-weight: bold;
`,te=o.div`
  color: #0177c1;
  font-weight: bold;
  text-decoration: underline;
  margin-top: 10px;
  cursor: pointer;
`,ne=o.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
`,ie=o.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &:hover {
    color: rgb(1, 119, 193);
  }
`,re=o.div`
  width: 100%;
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    color: rgb(1, 119, 193);
  }
`,se=o.div`
  //color: rgba(0, 0, 0, 0.3);
  cursor: pointer;

  &:hover {
    color: rgb(1, 119, 193);
  }
`,ce=o.div`
  //background-color: blue;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 120px;
  margin-bottom: 140px;
`,ae=o.div`
  position: relative;
  background-color: rgb(241, 241, 241);
  height: 35px;
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`,le=o.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 10px;
  z-index: 1;
  display: ${t=>t.isOpen?"block":"none"};
`,g=o.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-top: 5px;

  &:hover {
    background-color: #f0f0f0;
  }
`,h=()=>{n.useState(!1);const[t,i]=n.useState(!1);n.useState(!1);const[r,s]=n.useState(!1),[a,c]=n.useState(!1),p=()=>{c(!0)},w=()=>{c(!1)},P=()=>{s(!0)},y=()=>{s(!1)},S=()=>{i(!0)};return e.jsx("div",{children:e.jsx(K,{children:e.jsxs(Q,{children:[e.jsx(U,{}),e.jsxs(X,{children:[e.jsx(Z,{src:"public/mikrovolnovka.jpg"}),e.jsx(ee,{children:"Approval is expected"}),e.jsx(oe,{children:"*Name of Product*"}),e.jsx(te,{onClick:p,children:"Balance Request"}),a&&e.jsx(O,{onClose:w}),e.jsxs(ne,{children:[e.jsxs(ie,{onClick:P,children:[e.jsx(se,{children:e.jsx($,{style:{fontSize:"40px"}})}),e.jsx(re,{children:"Contains different colors and sizes"})]}),r&&e.jsx(M,{onClose:y})]})]}),e.jsx(Y,{children:e.jsx(ce,{children:e.jsxs(ae,{children:[e.jsx(u,{onClick:S}),e.jsxs(le,{isOpen:t,children:[e.jsxs(g,{children:[e.jsx(m,{}),e.jsx("span",{children:"Удалить"})]}),e.jsxs(g,{as:b,to:"/change-product",children:[e.jsx(v,{}),e.jsx("span",{children:"Редактировать"})]})]})]})})})]})})})},j=({children:t,value:i,index:r})=>i===r?e.jsx("div",{children:t}):null,de=({idStatus:t})=>{const[i,r]=n.useState(0),s=(a,c)=>{r(c)};return e.jsxs("div",{children:[e.jsx(I,{square:!0,children:e.jsxs(R,{value:i,onChange:s,children:[e.jsx(l,{label:"Products awaiting approval"}),e.jsx(l,{label:"Services"}),e.jsx(l,{label:"Photo&video personal page"}),e.jsx(l,{label:"New branded applications"})]})}),e.jsx(j,{value:i,index:0}),e.jsx(j,{value:i,index:1})]})},pe=o.div`
  font-weight: bold;
  font-size: 25px;
  margin-top: 20px;
`,xe=o.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #ffffff;
  margin-top: 10px;
  padding: 20px;
`,ue=o.div`
  margin-top: 20px;
`,fe=o.div`
  //background-color: red;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`,ge=o.div`
  //background-color: #00ff2c;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`,$e=()=>e.jsxs("div",{children:[e.jsx(pe,{children:"Awaiting approval"}),e.jsx(ue,{children:e.jsx(de,{idStatus:0})}),e.jsxs(xe,{children:[e.jsxs(fe,{children:[e.jsx(d,{}),e.jsx(d,{}),e.jsx(h,{})]}),e.jsxs(ge,{children:[e.jsx(d,{}),e.jsx(d,{}),e.jsx(h,{})]})]})]});export{$e as default};
