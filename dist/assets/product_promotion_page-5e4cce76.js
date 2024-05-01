import{j as e,u as t,r as b,f as n,i as v,t as s}from"./index-2bc117be.js";import{d as y,B as w,a as k}from"./button_promote_percent-6ee2c778.js";import{d as P}from"./DeleteOutline-a5b1a835.js";import{d as l}from"./HelpOutline-f82d2c5a.js";import{r as S,i as C}from"./createSvgIcon-5f6a3721.js";import{B}from"./button_date-91de3f19.js";import{R as D}from"./radio-group-fd87d7b3.js";import"./Close-1b971a6a.js";import"./TaskAlt-09bcffb0.js";import"./createSvgIcon-bae563fb.js";var i={},W=C;Object.defineProperty(i,"__esModule",{value:!0});var m=i.default=void 0,O=W(S()),I=e,M=(0,O.default)((0,I.jsx)("path",{d:"M7.5 11C9.43 11 11 9.43 11 7.5S9.43 4 7.5 4 4 5.57 4 7.5 5.57 11 7.5 11zm0-5C8.33 6 9 6.67 9 7.5S8.33 9 7.5 9 6 8.33 6 7.5 6.67 6 7.5 6zM4.0025 18.5832 18.59 3.9955l1.4142 1.4143L5.4167 19.9974zM16.5 13c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zm0 5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"}),"Percent");m=i.default=M;const z=t.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  border: 1px solid rgb(204, 204, 204);
  width: 220px;
  height: 45px;
`,H=t.input`
  border: 1px solid #ccc;
  width: 80px;
`,R=t.span`
  font-weight: bold;
`,A=()=>e.jsx("div",{children:e.jsxs(z,{children:[e.jsx(R,{children:"Percent"}),e.jsx(H,{type:"number",min:"1",max:"99",step:"0.1"})]})}),_=t.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  border: 1px solid rgb(204, 204, 204);
  width: 300px;
  height: 45px;
`,N=t.input`
  border: 1px solid #ccc;
  width: 80px;
`,T=t.span`
  font-weight: bold;
`,$=t.span``,F=()=>e.jsx("div",{children:e.jsxs(_,{children:[e.jsx(T,{children:"Discounted price"}),e.jsx(N,{type:"number"}),e.jsx($,{children:"*USD*"})]})}),L=[{value:"10 days",label:"10 days"},{value:"20 days",label:"20 days"}],U=[{value:"Moscow",label:"Moscow"},{value:"New York",label:"New York"}],a=[{value:"10",label:"10"},{value:"20",label:"20"}],d=["Male","Female","Both"],G=t.div`
  width: 100%;
  position: relative;
`,q=t.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`,E=t.div`
  margin-left: 20px;
  margin-bottom: 15px;
  margin-top: 45px;
  font-size: 18pt;
  font-weight: bolder;
`,V=t.div`
  margin-left: 20px;
  margin-bottom: 30px;
  font-size: 18pt;
  font-weight: normal;
`,Y=t.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-left: 20px;
  width: 100%;
  height: 250px;
  background-color: #ffffff;
`,J=t.div`
  display: flex;
  align-items: center;
  //background-color: gray;
  width: 90%;
  height: 33%;
`,K=t.div`
  //background-color: rgba(255, 0, 0, 0.45);
  display: flex;
  width: 90%;
  height: 33%;
`,Q=t.div`
  //background-color: rgba(25, 0, 255, 0.45);
  display: flex;
  width: 90%;
  height: 33%;
`,X=t.div`
  //background-color: rgba(255, 0, 0, 0.54);
  display: flex;
  justify-content: space-around;
  align-items: center;
`,Z=t.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 20px;
`,ee=t.div`
  background-color: #f5f5f5;
  color: #00d900;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`,p=t.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 10px;
`,x=t.div`
  font-weight: bold;
`,h=t.div``,r=t.div`
  position: absolute;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  display: none;
  z-index: 2;
`,f=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,te=`
  position: relative;
  &:hover ${r} {
    display: block;
  }
`,u=t.div`
  color: gray;
  margin-left: 5px;
  cursor: pointer;
  ${te}
`,g=t.div`
  /* Стили для текста внутри всплывающего окна */
`,ne=t.div`
  background-color: #f5f5f5;
  color: #000000;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`,oe=t.div`
  color: gray;
  position: absolute;
  right: 20px;
  cursor: pointer;
`,re=t.div`
  width: 220px;
  margin-left: 30px;
  margin-top: 2px;
`,ie=t.div`
  margin-left: 30px;
`,ce=t.div`
  margin-left: 30px;
`,se=t.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-left: 20px;
  width: 100%;
  height: 250px;
  background-color: #ffffff;
  margin-top: 20px;
`,le=t.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: 20px;
  width: 50%;
  height: 160px;
  background-color: #ffffff;
  margin-top: 20px;
`,ae=t.div`
  display: flex;
  flex-wrap: wrap;
  //background-color: gray;
  width: 90%;
`,de=t.div`
  //background-color: rgba(255, 0, 0, 0.45);
  display: flex;
  width: 90%;
  height: 20%;
  margin-top: 20px;
`,pe=t.div`
  //background-color: rgba(25, 0, 255, 0.45);
  display: flex;
  flex-direction: row;
  width: 90%;
  height: 20%;
`,xe=t.div`
  //background-color: rgba(16, 229, 64, 0.45);
  display: flex;
  width: 90%;
  height: 30%;
  margin-bottom: 10px;
`,he=t.span`
  font-weight: bold;
  font-size: 22px;
`,fe=t.div`
  width: 500px;
`,ue=t.div`
  width: 500px;
  margin-left: 30px;
`,ge=t.div`
  margin-top: 2px;
  width: 220px;
`,me=t.div`
  //background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  margin-right: 5px;
  margin-left: 5px;
`,je=t.div`
  margin-top: 2px;
  //margin-left: 20px;
  width: 220px;
`,be=t.div`
  //background-color: red;
  margin-left: 30px;
  //margin-top: 10px;
`,ve=t.span`
  font-weight: bold;
`,ye=t.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  //background-color: rgba(126, 20, 20, 0.51);
  width: 90%;
  height: 20px;
  margin-top: 20px;
`,we=t.div`
  font-weight: bold;
`,ke=t.div``,Pe=t.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  //background-color: rgba(126, 20, 20, 0.51);
  border-bottom: 2px solid #a6a6a6;
  width: 90%;
  height: 50px;
`,Se=t.div`
  font-weight: bold;
`,Ce=t.div``,Be=t.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  //background-color: rgba(126, 20, 20, 0.51);
  width: 90%;
  height: 50px;
`,De=t.div`
  font-weight: bold;
`,We=t.div`
  font-weight: bold;
`,Oe=t.div`
  margin-top: 20px;
  margin-left: -35px;
`,Fe=()=>{const[o,j]=b.useState(!1),c=()=>{j(!o)};return e.jsxs("div",{children:[e.jsxs(G,{children:[e.jsx(E,{children:"Promote the product"}),e.jsx(V,{children:"Name of Product"}),e.jsxs(q,{children:[e.jsxs(Y,{children:[e.jsxs(J,{children:[e.jsxs(X,{children:[e.jsx(ee,{children:e.jsx(m,{style:{fontSize:"45px"}})}),e.jsxs(p,{children:[e.jsxs(f,{children:[e.jsx(x,{children:"Discounted Product"}),e.jsxs(u,{onClick:c,children:[e.jsx(l,{}),o&&e.jsx(r,{children:e.jsx(g,{children:"LoremIpsum"})})]})]}),e.jsx(h,{children:"3 days "})]})]}),e.jsxs(Z,{children:[e.jsx(ne,{children:e.jsx(y,{})}),e.jsxs(p,{children:[e.jsxs(f,{children:[e.jsx(x,{children:"Share price"}),e.jsxs(u,{onClick:c,children:[e.jsx(l,{}),o&&e.jsx(r,{children:e.jsx(g,{children:"LoremIpsum"})})]})]}),e.jsx(h,{children:"5000 AMD"})]})]}),e.jsx(oe,{children:e.jsx(P,{style:{fontSize:"40px"}})})]}),e.jsxs(K,{children:[e.jsx(B,{}),e.jsx(re,{children:e.jsx(n,{label:"",options:L,placeholder:"Duration",onChange:()=>{}})}),e.jsx(ie,{children:e.jsx(w,{})}),e.jsx(ce,{children:e.jsx(A,{})})]}),e.jsx(Q,{children:e.jsx(F,{})})]}),e.jsx(se,{children:e.jsxs(ae,{children:[e.jsx(de,{children:e.jsx(he,{children:"Audience"})}),e.jsxs(pe,{children:[e.jsx(fe,{children:e.jsx(v,{large:"S",type:"text",label:s("Audience Name"),placeholder:`${s("Type here")}...`})}),e.jsx(ue,{children:e.jsx(n,{label:"Region",options:U,placeholder:"Type here...",onChange:()=>{}})})]}),e.jsxs(xe,{children:[e.jsx(ge,{children:e.jsx(n,{label:"Age",options:a,placeholder:"Select age",onChange:()=>{}})}),e.jsx(me,{children:"—"}),e.jsx(je,{children:e.jsx(n,{label:"",options:a,placeholder:"Select age",onChange:()=>{}})}),e.jsxs(be,{children:[e.jsx(ve,{children:"Gender"}),e.jsx(D,{options:d,selectedOption:d[0],onChange:()=>{}})]})]})]})}),e.jsxs(le,{children:[e.jsxs(ye,{children:[e.jsx(we,{children:"Share price"}),e.jsx(ke,{children:"5000 AMD"})]}),e.jsxs(Pe,{children:[e.jsx(Se,{children:"Duration of the promotion"}),e.jsx(Ce,{children:"3 days"})]}),e.jsxs(Be,{children:[e.jsx(De,{children:"Summary"}),e.jsx(We,{children:"10.000 AMD"})]})]})]})]}),e.jsx(Oe,{children:e.jsx(k,{})})]})};export{Fe as default};
