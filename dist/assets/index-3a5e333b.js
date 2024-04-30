import{n as e,a as o,j as a,i as s,o as r,F as p,h as c,aG as d}from"./index-81b9eae3.js";import{S as i}from"./ui-22763c4a.js";const x=e.span`
  font-size: var(--fontSizes-7);
  font-weight: 600;
`,j=e.div`
  display: flex;
  flex-direction: column;
  padding: var(--space-4);
  gap: var(--space-5);
  background: var(--colors-whiteA12);
`;e.div`
  display: flex;
  flex-direction: row;
  gap: var(--space-4);
  width: 100%;
`;const n=e.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-5);
`,t=[{value:"1",label:"1"},{value:"2",label:"2"}],b=()=>{const{t:l}=o();return a.jsxs(j,{children:[a.jsx(x,{children:l("Создать вакансию")}),a.jsxs(n,{children:[a.jsx(i,{items:t}),a.jsx(s,{large:"M",label:"Mockup label"})]}),a.jsxs(n,{children:[a.jsx(i,{items:t}),a.jsx(s,{large:"M",label:"Mockup label"})]}),a.jsxs(n,{children:[a.jsx(s,{large:"M",label:"Mockup label"}),a.jsx(s,{large:"M",label:"Mockup label"})]}),a.jsx(r,{label:"Mockup label"}),a.jsx(r,{label:"Mockup label"}),a.jsx(r,{label:"Mockup label"}),a.jsx(s,{large:"M",label:"Mockup label"}),a.jsx(r,{label:"Mockup label"}),a.jsxs(p,{justify:"flex-end",gap:"space-2",children:[a.jsx(c,{variant:"primary",appearance:"white",children:l("Добавить новую вакансию")}),a.jsx(c,{variant:"bordered",appearance:"white",children:l("Добавить новую вакансию")})]})]})},u=e.div`
  padding: var(--space-5);
  margin: var(--space-4) 0;
  gap: var(--space-4);

  @media (max-width: 1400.98px) {
    display: flex;
    flex-direction: column;
  }
`,v=e(d)`
  font-size: var(--fontSizes-3);
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  color: var(--colors-black);
  padding: var(--space-3) 0;
  display: inline-block;
`,f=()=>{const{t:l}=o();return a.jsxs(u,{children:[a.jsx(v,{to:"/vacancies",children:` ← ${l("Back")}`}),a.jsx(b,{})]})};export{f as NewVacancyPage};
