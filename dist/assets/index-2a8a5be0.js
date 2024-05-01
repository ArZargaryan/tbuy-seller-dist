import{aF as R,k as S,X as y,d as C,r as f,j as e,a4 as F,a5 as A,a6 as M,a as E,h as $,n as x,a7 as P,i as w,F as t,C as n,I as l}from"./index-2bc117be.js";import{T as B}from"./styles-668b8af3.js";import{C as G}from"./ui-d2db2b81.js";import{e as L}from"./api-7d36bb3f.js";import{R as c}from"./ui-f6bcc7a4.js";import"./slide-1-af77e0ec.js";const O=R({name:"gallery-images",handler:async({company_id:a})=>S.get(`/client/company/${a}/gallery`,{params:{type:"photo"}}).then(s=>s.data)}),N={align:"start",slidesToScroll:1,containScroll:"trimSnaps"},W=5,Q=Array.from(Array(W).keys()),U=()=>{const a=y(C),{data:s,start:i}=y(O),[j,g]=f.useState([]);return f.useEffect(()=>{i({company_id:a.id})},[i]),f.useEffect(()=>{g(s==null?void 0:s.data.map(p=>p.src))},[s]),e.jsx(G,{content:j,slides:Q,options:N})},k=F({handler:async a=>S.post("/client/employee",{...a}).then(s=>s.data)});k.finished.success.watch(({result:a})=>{A("Success",{description:a.message,className:"success-toast"})});k.finished.failure.watch(({error:a})=>{const s=a.response.data;A("Error",{description:s.message,className:"error-toast"})});M(L,{on:k,by:{success:({mutation:a})=>({result:a.result,refetch:!0})}});const _=({email:a,username:s,company_id:i,disabled:j})=>{const{t:g}=E(),{start:p,pending:m}=y(k),b=()=>{p({email:a,username:s,company_id:i})};return e.jsx($,{type:"submit",onClick:b,large:"S",appearance:"white",stretched:!0,variant:"primary",disabled:j||m,children:g("Submit")})},q=x.form`
  background: var(--colors-whiteA12);
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
`,z=x.span`
  font-size: var(--fontSizes-7);
  font-weight: 600;
`,D=x.div`
  display: flex;
  flex-direction: row;
  gap: var(--space-4);
  width: 100%;
`,o=x.label`
  margin-left: var(--space-2);
`,d=x.div`
  display: ${a=>a.active?"block":"none"};
  margin: var(--space-2) 33px;
`,h=[{value:"view",label:"Только просмотр"},{value:"edit",label:"Просмотр и редактирование"},{value:"all",label:"Всё"}],V=({...a})=>{const{t:s}=E(),[i,j]=f.useState(new Set),{handleSubmit:g,register:p,watch:m}=P({defaultValues:{email:"",username:""}}),b=y(C),T=()=>!!m("email")&&!!m("username"),I=u=>console.log(u),r=u=>()=>{const v=new Set(i);v.has(u)?v.delete(u):v.add(u),j(v)};return e.jsxs(q,{onSubmit:g(I),...a,children:[e.jsxs(D,{children:[e.jsx(w,{large:"S",type:"text",label:s("Username"),stretched:!0,placeholder:`${s("Type here")}..`,...p("username",{required:!0,min:4,max:256})}),e.jsx(w,{large:"S",type:"text",label:s("Email"),stretched:!0,placeholder:`${s("Type here")}..`,...p("email",{required:!0,min:4,max:256})})]}),e.jsx(z,{children:s("AvailabilityOfSections")}),e.jsxs(t,{wrap:"wrap",gap:"space-8",children:[e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsxs(t,{align:"center",margin:"10px 0",children:[e.jsx(n,{value:"",onClick:r("personalPage")}),e.jsx(l.User,{width:24,height:24,fill:"colors-blackA8"}),e.jsx(o,{children:s("Personal page")})]}),e.jsx(d,{active:i.has("personalPage"),children:e.jsx(c,{orientation:"vertical",items:h})})]}),e.jsxs("div",{children:[e.jsxs(t,{align:"center",margin:"10px 0",children:[e.jsx(n,{value:"",onClick:r("marketingBlock")}),e.jsx(l.Megaphone,{width:24,height:24,fill:"colors-blackA8"}),e.jsxs(o,{children:[" ",s("Marketing block")]})]}),e.jsx(d,{active:i.has("marketingBlock"),children:e.jsx(c,{orientation:"vertical",items:h})})]}),e.jsxs("div",{children:[e.jsxs(t,{align:"center",margin:"10px 0",children:[e.jsx(n,{value:"",onClick:r("sales")}),e.jsx(l.Chart,{width:24,height:24,fill:"colors-blackA8"}),e.jsx(o,{children:s("Sales")})]}),e.jsx(d,{active:i.has("sales"),children:e.jsx(c,{orientation:"vertical",items:h})})]}),e.jsxs("div",{children:[e.jsxs(t,{align:"center",margin:"10px 0",children:[e.jsx(n,{value:"",onClick:r("tariffPlan")}),e.jsx(l.MoneyWithdraw,{width:24,height:24,fill:"colors-blackA8"}),e.jsx(o,{children:s("Tariff plan")})]}),e.jsx(d,{active:i.has("tariffPlan"),children:e.jsx(c,{orientation:"vertical",items:h})})]}),e.jsxs("div",{children:[e.jsxs(t,{align:"center",margin:"10px 0",children:[e.jsx(n,{value:"",onClick:r("shipping")}),e.jsx(l.Truck,{width:24,height:24,fill:"colors-blackA8"}),e.jsx(o,{children:s("Own shipping block")})]}),e.jsx(d,{active:i.has("shipping"),children:e.jsx(c,{orientation:"vertical",items:h})})]})]}),e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsxs(t,{align:"center",margin:"10px 0",children:[e.jsx(n,{value:"",onClick:r("report")}),e.jsx(l.Report,{width:24,height:24,fill:"colors-blackA8"}),e.jsx(o,{children:s("Report")})]}),e.jsx(d,{active:i.has("report"),children:e.jsx(c,{orientation:"vertical",items:h})})]}),e.jsxs("div",{children:[e.jsxs(t,{align:"center",margin:"10px 0",children:[e.jsx(n,{value:"",onClick:r("vacancies")}),e.jsx(l.Briefcase,{width:24,height:24,fill:"colors-blackA8"}),e.jsx(o,{children:s("Vacancies")})]}),e.jsx(d,{active:i.has("vacancies"),children:e.jsx(c,{orientation:"vertical",items:h})})]}),e.jsxs("div",{children:[e.jsxs(t,{align:"center",margin:"10px 0",children:[e.jsx(n,{value:"",onClick:r("services")}),e.jsx(l.Medal,{width:24,height:24,fill:"colors-blackA8"}),e.jsx(o,{children:s("Services")})]}),e.jsx(d,{active:i.has("services"),children:e.jsx(c,{orientation:"vertical",items:h})})]}),e.jsxs("div",{children:[e.jsxs(t,{align:"center",margin:"10px 0",children:[e.jsx(n,{value:"",onClick:r("gift")}),e.jsx(l.Gift,{width:24,height:24,fill:"colors-blackA8"}),e.jsx(o,{children:s("Gift card")})]}),e.jsx(d,{active:i.has("gift"),children:e.jsx(c,{orientation:"vertical",items:h})})]})]})]}),e.jsx(_,{email:m("email"),company_id:b.id,username:m("username"),disabled:!T()})]})},X=x.div`
  display: grid;
  grid-template-columns: auto 400px;
  margin-top: var(--space-4);
  gap: var(--space-4);

  @media (max-width: 1200.98px) {
    display: flex;
    flex-direction: column;
  }
`,H=x.div`
  background: var(--colors-whiteA12);
  padding: var(--space-4);
  gap: var(--space-4);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,J=x(V)`
  height: 100%;
`,ie=()=>e.jsxs(X,{children:[e.jsxs(H,{children:[e.jsx(B,{children:"Adding an employee to a company"}),e.jsx(J,{})]}),e.jsx(U,{})]});export{ie as AddingEmployee};
