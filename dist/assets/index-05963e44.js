import{a4 as B,a5 as E,a6 as I,k as L,a as w,X as P,j as e,h as O,n as x,u as k,e as F,r as y,a7 as G,d as _,i as S,F as r,C as n,I as l,a8 as C}from"./index-2bc117be.js";import{T as $}from"./styles-668b8af3.js";import{C as N}from"./ui-d2db2b81.js";import{e as U}from"./api-7d36bb3f.js";import{R as o}from"./ui-f6bcc7a4.js";import"./slide-1-af77e0ec.js";const v=B({handler:async i=>L.post("/client/employee/reset-password",{...i}).then(s=>s.data)});v.finished.success.watch(({result:i})=>{E("Success",{description:i.message,className:"success-toast"})});v.finished.failure.watch(({error:i})=>{const s=i.response.data;E("Error",{description:s.message,className:"error-toast"})});I(U,{on:v,by:{success:({mutation:i})=>({result:i.result,refetch:!0})}});const D=({email:i,username:s,company_id:j,disabled:a})=>{const{t:f}=w(),{start:b,pending:u}=P(v),p=()=>{b({email:i,username:s,company_id:j})};return e.jsx(O,{onClick:p,large:"S",appearance:"white",stretched:!1,variant:"bordered",disabled:a||u,children:f("Создать и отправить")})},W=x.form`
  background: var(--colors-whiteA12);
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
`,A=x.span`
  font-size: var(--fontSizes-7);
  font-weight: 600;
`,q=x.div`
  display: flex;
  flex-direction: row;
  gap: var(--space-4);
  width: 100%;
`,c=x.label`
  margin-left: var(--space-2);
`,d=x.div`
  display: ${i=>i.active?"block":"none"};
  margin: var(--space-2) 33px;
`,h=[{value:"view",label:"Только просмотр"},{value:"edit",label:"Просмотр и редактирование"},{value:"all",label:"Всё"}],z=k.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
`,H=k.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 12px;
  width: 222px;
  color: #0177c1;
  border: 1px solid #67adda;

  &:hover {
    background-color: rgb(246, 246, 246);
    cursor: pointer;
  }
`,V=k.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #0479c3, rgba(0, 119, 255, 0.5));
  padding: 12px;
  width: 222px;
  color: #ffffff;
  border: 1px solid #67adda;

  &:hover {
    background-color: rgb(246, 246, 246);
    cursor: pointer;
  }
`,Q=({...i})=>{const{t:s}=w(),j=F(),[a,f]=y.useState(new Set),{handleSubmit:b,register:u,watch:p}=G({defaultValues:{email:"",username:""}});y.useState([{id:1,login:"Lorem_user1",email:"user1@example.com",phone:"123-456-7890",password:"password1",date:"01-01-2023",position:"Manager"},{id:2,login:"Lorem_user2",email:"user2@example.com",phone:"098-765-4321",password:"password2",date:"02-02-2023",position:"Developer"}]);const T=P(_),M=()=>!!p("email")&&!!p("username"),R=m=>console.log(m),t=m=>()=>{const g=new Set(a);g.has(m)?g.delete(m):g.add(m),f(g)};return e.jsxs(W,{onSubmit:b(R),...i,children:[e.jsxs(q,{children:[e.jsx(S,{large:"S",type:"text",label:s("Username"),stretched:!0,placeholder:`${s("Type here")}..`,...u("username",{required:!0,min:4,max:256})}),e.jsx(S,{large:"S",type:"text",label:s("Email"),stretched:!0,placeholder:`${s("Type here")}..`,...u("email",{required:!0,min:4,max:256})})]}),e.jsx(A,{children:s("Password")}),e.jsx("div",{children:e.jsx(D,{email:p("email"),company_id:T.id,username:p("username"),disabled:!M()})}),e.jsx(A,{children:s("AvailabilityOfSections")}),e.jsxs(r,{wrap:"wrap",children:[e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsxs(r,{align:"center",children:[e.jsx(n,{value:"",onClick:t("personalPage")}),e.jsx(l.User,{width:24,height:24,fill:"colors-blackA8"}),e.jsx(c,{children:s("Personal page")})]}),e.jsx(d,{active:a.has("personalPage"),children:e.jsx(o,{orientation:"vertical",items:h})})]}),e.jsxs("div",{children:[e.jsxs(r,{align:"center",margin:"10px 0",children:[e.jsx(n,{value:"",onClick:t("marketingBlock")}),e.jsx(l.Megaphone,{width:24,height:24,fill:"colors-blackA8"}),e.jsxs(c,{children:[" ",s("Marketing block")]})]}),e.jsx(d,{active:a.has("marketingBlock"),children:e.jsx(o,{orientation:"vertical",items:h})})]}),e.jsxs("div",{children:[e.jsxs(r,{align:"center",margin:"10px 0",children:[e.jsx(n,{value:"",onClick:t("sales")}),e.jsx(l.Chart,{width:24,height:24,fill:"colors-blackA8"}),e.jsx(c,{children:s("Sales")})]}),e.jsx(d,{active:a.has("sales"),children:e.jsx(o,{orientation:"vertical",items:h})})]}),e.jsxs("div",{children:[e.jsxs(r,{align:"center",margin:"10px 0",children:[e.jsx(n,{value:"",onClick:t("tariffPlan")}),e.jsx(l.MoneyWithdraw,{width:24,height:24,fill:"colors-blackA8"}),e.jsx(c,{children:s("Tariff plan")})]}),e.jsx(d,{active:a.has("tariffPlan"),children:e.jsx(o,{orientation:"vertical",items:h})})]}),e.jsxs("div",{children:[e.jsxs(r,{align:"center",margin:"10px 0",children:[e.jsx(n,{value:"",onClick:t("shipping")}),e.jsx(l.Truck,{width:24,height:24,fill:"colors-blackA8"}),e.jsx(c,{children:s("Own shipping block")})]}),e.jsx(d,{active:a.has("shipping"),children:e.jsx(o,{orientation:"vertical",items:h})})]})]}),e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsxs(r,{align:"center",margin:"10px 0",children:[e.jsx(n,{value:"",onClick:t("report")}),e.jsx(l.Report,{width:24,height:24,fill:"colors-blackA8"}),e.jsx(c,{children:s("Report")})]}),e.jsx(d,{active:a.has("report"),children:e.jsx(o,{orientation:"vertical",items:h})})]}),e.jsxs("div",{children:[e.jsxs(r,{align:"center",margin:"10px 0",children:[e.jsx(n,{value:"",onClick:t("vacancies")}),e.jsx(l.Briefcase,{width:24,height:24,fill:"colors-blackA8"}),e.jsx(c,{children:s("Vacancies")})]}),e.jsx(d,{active:a.has("vacancies"),children:e.jsx(o,{orientation:"vertical",items:h})})]}),e.jsxs("div",{children:[e.jsxs(r,{align:"center",margin:"10px 0",children:[e.jsx(n,{value:"",onClick:t("services")}),e.jsx(l.Medal,{width:24,height:24,fill:"colors-blackA8"}),e.jsx(c,{children:s("Services")})]}),e.jsx(d,{active:a.has("services"),children:e.jsx(o,{orientation:"vertical",items:h})})]}),e.jsxs("div",{children:[e.jsxs(r,{align:"center",margin:"10px 0",children:[e.jsx(n,{value:"",onClick:t("gift")}),e.jsx(l.Gift,{width:24,height:24,fill:"colors-blackA8"}),e.jsx(c,{children:s("Gift card")})]}),e.jsx(d,{active:a.has("gift"),children:e.jsx(o,{orientation:"vertical",items:h})})]})]})]}),e.jsxs(z,{children:[e.jsx(H,{onClick:()=>j(C.HOME_PAGE),children:s("Close")}),e.jsx(V,{onClick:()=>j(C.HOME_PAGE),children:s("Save")})]})]})},X=x.div`
  display: grid;
  grid-template-columns: auto 400px;
  margin-top: var(--space-4);
  gap: var(--space-4);

  @media (max-width: 1200.98px) {
    display: flex;
    flex-direction: column;
  }
`,J=x.div`
  background: var(--colors-whiteA12);
  padding: var(--space-4);
  gap: var(--space-4);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,K=x(Q)`
  height: 100%;
`,Y={align:"start",slidesToScroll:1,containScroll:"trimSnaps"},Z=5,ee=Array.from(Array(Z).keys()),le=()=>{const{t:i}=w();return e.jsxs(X,{children:[e.jsxs(J,{children:[e.jsx($,{children:i("EditingUser")}),e.jsx(K,{})]}),e.jsx(N,{slides:ee,options:Y})]})};export{le as User};
