import{r as s,i as d}from"./createSvgIcon-b9c2f462.js";import{j as e,u as t,e as l,r as a}from"./index-81b9eae3.js";import{d as p}from"./Close-a6672e5f.js";import{d as x}from"./TaskAlt-cc7b1c98.js";var n={},h=d;Object.defineProperty(n,"__esModule",{value:!0});var u=n.default=void 0,f=h(s()),g=e,m=(0,f.default)((0,g.jsx)("path",{d:"M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"}),"AccountBalanceWallet");u=n.default=m;const j=t.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  border: 1px solid rgb(204, 204, 204);
  width: 220px;
  height: 45px;
`,b=t.input`
  border: 0 solid rgba(98, 98, 98, 0);
`,v=t.span`
  font-weight: bold;
`,U=()=>e.jsx("div",{children:e.jsxs(j,{children:[e.jsx(v,{children:"Launch time"}),e.jsx(b,{type:"time"})]})}),w=t.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`,y=t.div`
  background-color: #fff;
  width: 700px;
  height: 500px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
`,P=t.h2`
  color: #000000;
  font-size: 30px;
  margin-top: 20px;
`,k=t.div`
  margin-left: 600px;
  padding-bottom: 20px;
`,C=t.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  margin-top: 100px;
`,T=t.button`
  background: linear-gradient(to right, #0479c3, rgba(0, 119, 255, 0.5));
  color: white;
  font-weight: bold;
  width: 200px;
  height: 50px;
  border: 0 solid rgba(0, 0, 0, 0);
  margin-left: 30px;
  cursor: pointer;
`,S=t.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 80%;
  margin-top: 20px;
`,A=t.div`
  font-weight: bold;
`,B=t.div``,R=t.div`
  font-weight: bold;
`,L=t.div``,O=t.div`
  font-weight: bold;
`,_=t.div``,z=t.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 80%;
  margin-top: 20px;
`,E=t.div`
  font-weight: bold;
`,I=t.div``,W=t.div`
  font-weight: bold;
`,D=t.div``,M=t.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 80%;
  margin-top: 20px;
`,N=t.div`
  font-weight: bold;
`,q=t.div`
  margin-left: 20px;
`,G=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  color: #1ecb40;
`,H=t.button`
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: rgba(235, 237, 245, 0);
  border: 2px solid rgba(1, 119, 193, 0.5);
  color: #047ac3;
  margin-right: 20px;
  font-weight: bold;
  cursor: pointer;
`,V=({onClose:i})=>(l(),e.jsx("div",{children:e.jsx(w,{children:e.jsxs(y,{children:[e.jsx(k,{children:e.jsx(p,{fontSize:"large",onClick:i})}),e.jsx(P,{children:"CONFIRM ACTION"}),e.jsxs(S,{children:[e.jsx(A,{children:"Region:"}),e.jsx(B,{children:"*Region Name*"}),e.jsx(R,{children:"Age:"}),e.jsx(L,{children:"18-65+"}),e.jsx(O,{children:"Gender:"}),e.jsx(_,{children:"All"})]}),e.jsxs(z,{children:[e.jsx(E,{children:"Stock:"}),e.jsx(I,{children:"*Date of stock*"}),e.jsx(W,{children:"Time:"}),e.jsx(D,{children:"*Time of stock*"})]}),e.jsxs(M,{children:[e.jsx(N,{children:"Price:"}),e.jsx(q,{children:"3000 AMD"})]}),e.jsx(G,{children:e.jsx(x,{style:{fontSize:"50px"}})}),e.jsxs(C,{children:[e.jsx(H,{children:"CLOSE"}),e.jsx(T,{children:"ACCEPT"})]})]})})})),$=t.button`
  background: linear-gradient(to right, #0479c3, rgba(0, 119, 255, 0.5));
  color: white;
  font-weight: inherit;
  width: 250px;
  height: 45px;
  border: 0 solid rgba(0, 0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-left: 55px;
  cursor: pointer;
`,X=()=>{const[i,o]=a.useState(!1),r=()=>{o(!0)},c=()=>{o(!1)};return e.jsxs("div",{children:[e.jsx($,{onClick:r,children:"PROMOTE"}),i&&e.jsx(V,{onClose:c})]})};export{U as B,X as a,u as d};
