import{u as t,a as p,j as n}from"./index-786c574d.js";const d=t.div`
  display: flex;
`,x=t.label`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  cursor: pointer;
`,c=t.input`
  margin-right: 8px;
  width: 20px;
  height: 20px;
`,l=t.span`
  font-size: 18px;
  margin-right: 20px;
`,u=({options:i,selectedOption:s,onChange:e})=>{const{t:r}=p(),o=a=>{e(a)};return n.jsx(d,{children:i.map(a=>n.jsxs(x,{children:[n.jsx(c,{type:"radio",value:a,checked:s===a,onChange:()=>o(a)}),n.jsx(l,{children:r(a)})]},a))})};export{u as R};
