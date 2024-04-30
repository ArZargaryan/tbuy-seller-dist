import{n as i,j as e,P as s,h as l,I as r,i as c,e as o,a8 as d}from"./index-81b9eae3.js";import{S as p}from"./ui-22763c4a.js";import{S as t}from"./slide-1-af77e0ec.js";import{V as n}from"./visa-and-mastercard-abe51875.js";const m=i.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  padding: var(--space-4);
  gap: var(--space-4);
  border: 1px solid var(--colors-gray4);

  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
  }
`,x=i.div`
  display: flex;
  align-items: center;
  background: var(--colors-gray5);
  border-radius: 3px;
  position: absolute;
  right: 15px;
  top: 20px;
  left: 0;
  bottom: 0;
`,h=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
`,g=i.span`
  font-weight: bold;
`,v=i.span`
  font-weight: bold;
`,j=({service:a})=>e.jsxs(m,{children:[e.jsx("img",{src:a.image,alt:a.name}),e.jsx(x,{children:e.jsxs(s.Wrapper,{children:[e.jsx(s.Trigger,{children:e.jsx(l,{variant:"cleared",appearance:"black",children:e.jsx(r.DotsHorizontal,{width:20,height:20})})}),e.jsx(s.Portal,{children:e.jsxs(s.Content,{children:[e.jsxs(l,{variant:"cleared",appearance:"white",large:"S",children:[e.jsx(r.Trash,{width:20,height:20}),"Удалить"]}),e.jsxs(l,{variant:"cleared",appearance:"white",large:"S",children:[e.jsx(r.Image,{width:20,height:20}),"Картинку крупным планом"]})]})})]})}),e.jsxs(h,{children:[e.jsx(g,{children:a.name}),e.jsxs("span",{children:["Цена сервиса ",e.jsxs(v,{children:[a.price," AMD"]})]})]})]}),f=i.div`
  display: flex;
  flex-direction: column;
  padding: var(--space-4);
  background: var(--colors-whiteA12);
  gap: var(--space-4);
`,u=i.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  gap: var(--space-4);

  @media (max-width: 600px) {
    align-items: start;
    flex-direction: column;
  }
`,w=i.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-1);

  label {
    font-weight: bold;
  }
`,b=i.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-4);

  @media (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`,y=[{id:1,image:t,name:"lorem",price:25e3},{id:2,image:n,name:"lorem",price:25e3},{id:3,image:t,name:"lorem",price:25e3},{id:4,image:t,name:"lorem",price:25e3},{id:5,image:n,name:"lorem",price:25e3},{id:6,image:n,name:"lorem",price:25e3},{id:7,image:n,name:"lorem",price:25e3},{id:8,image:t,name:"lorem",price:25e3}],S=()=>e.jsxs(f,{children:[e.jsxs(u,{children:[e.jsxs(w,{children:[e.jsx("label",{children:"Категории"}),e.jsx(p,{items:[{value:"Active"},{value:"Passive"}]})]}),e.jsx(c,{icon:{position:"right",self:e.jsx(r.Search,{width:20,height:20})},placeholder:"Enter a service name..."})]}),e.jsx(b,{children:y.map(a=>e.jsx(j,{service:a},a.id))})]}),I=i.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  margin: var(--space-4) 0;
`,P=i.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 600px) {
    align-items: start;
    flex-direction: column;
  }
`;i.div`
  display: flex;
  flex-direction: column;
  padding: var(--space-4);
  background: var(--colors-whiteA12);
  gap: var(--space-4);
`;const D=()=>{const a=o();return e.jsxs(I,{children:[e.jsxs(P,{children:[e.jsx("h2",{children:"Услуги"}),e.jsxs(l,{variant:"primary",appearance:"white",onClick:()=>a(d.NEW_SERVICES_PAGE),children:[e.jsx(r.Plus,{width:20,height:20,fill:"colors-mauve1"}),"Добавить услугу"]})]}),e.jsx(S,{})]})};export{D as Services};
