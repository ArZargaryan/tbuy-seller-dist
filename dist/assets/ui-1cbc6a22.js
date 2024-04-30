import{n as e,m as t,r as o,j as a,F as p,o as l,t as r}from"./index-c419738b.js";const h=e.div`
  margin-top: var(--space-5);
  display: flex;
  width: 100%;
  gap: var(--space-5);
`,x=e.div`
  width: 75%;
  background-color: var(--colors-whiteA12);
  padding: var(--space-5);
`,f=e.div`
  width: 28%;

  //background-color: var(--colors-whiteA12);
  //height: 500px;
`,m=e.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-5);
  justify-content: center;
`,w=e.div`
  width: 48%;
`,z=e.span`
  font-size: var(--fontSizes-7);
  font-weight: 600;
`;e.div`
  width: 100%;
`;const y=e.div`
  width: 100%;
  display: flex;
  gap: var(--sizes-4);
  padding-top: var(--sizes-8);
  flex-wrap: wrap;
`,j=e.div`
  width: 49%;
`,b=e.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: var(--sizes-8);
  gap: var(--sizes-7);
`,W=e.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: self-start;
  padding-top: var(--sizes-8);
  gap: var(--sizes-7);
`,A=e.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: self-start;
  padding-top: var(--sizes-8);
  gap: var(--sizes-7);
`,P=e.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: self-start;
  padding-top: var(--sizes-8);
  gap: var(--sizes-7);
`,C=e.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: self-start;
  padding-top: var(--sizes-8);
  gap: var(--sizes-7);
`,S=e.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: self-start;
  padding-top: var(--sizes-8);
  gap: var(--sizes-7);
`;e.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: self-start;
  padding-top: var(--sizes-8);
  gap: var(--sizes-7);
`;e.div`
  background-color: var(--colors-grayA7);
  padding: 0, var(--space-1);
`;const n=e(t.Trigger)`
  height: var(--sizes-6);
  background-color: lightgray;
  &[data-state="active"] {
    background-color: var(--colors-whiteA12);
    box-shadow: var(--colors-shadowLight);
    color: var(--colors-sky11);
    border: 1px solid var(--colors-grayA8);
  }
`,v=e.div`
  position: relative;
  margin-top: var(--sizes-8);
`,g=e.div`
  position: absolute;
  top: -15px;
  padding-right: var(--sizes-3);
  z-index: var(--zIndices-1);
  width: 100%;
`,D=({onChangeText:c})=>{const[s,d]=o.useState({arm:"",eng:"",rus:""});return o.useEffect(()=>{c(s)},[s]),a.jsx(o.Fragment,{children:a.jsx(v,{children:a.jsxs(t.Wrapper,{defaultValue:"arm",children:[a.jsx(g,{children:a.jsx(t.List,{children:a.jsxs(p,{justify:"flex-end",width:"100%",children:[a.jsx(n,{value:"arm",children:"arm"}),a.jsx(n,{value:"eng",children:"eng"}),a.jsx(n,{value:"rus",children:"rus"})]})})}),a.jsx(t.Content,{value:"arm",children:a.jsx(l,{label:r("ProductDesc"),placeholder:r("ProductDescARM"),stretched:!0,value:s.arm,onChange:i=>d({...s,arm:i.target.value})})}),a.jsx(t.Content,{value:"eng",children:a.jsx(l,{label:r("ProductDesc"),placeholder:r("ProductDescENG"),stretched:!0,value:s.eng,onChange:i=>d({...s,eng:i.target.value})})}),a.jsx(t.Content,{value:"rus",children:a.jsx(l,{label:r("ProductDesc"),placeholder:r("ProductDescRUS"),stretched:!0,value:s.rus,onChange:i=>d({...s,rus:i.target.value})})})]})})})};export{x as A,y as B,m as C,C as D,j as H,P as M,h as P,b as S,z as T,w as W,W as a,A as b,S as c,D as d,f as e};
