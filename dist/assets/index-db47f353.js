import{a4 as u,a5 as l,k as x,a as d,X as g,j as e,h,n as t,e as f,a7 as v,i as w,a8 as b,a2 as y,b8 as j,b9 as S,ba as z,L as F}from"./index-786c574d.js";import{g as C}from"./date-utils-e9a3739c.js";const i=u({handler:async a=>x.post("/client/forgot-password",{...a}).then(s=>s.data)});i.finished.success.watch(({result:a})=>{l("Success",{description:a.message,className:"success-toast"})});i.finished.failure.watch(({error:a})=>{const s=a.response.data;l("Error",{description:s.message,className:"error-toast"})});const k=({email:a,disabled:s})=>{const{t:n}=d(),{start:c,pending:o}=g(i),r=()=>{};return e.jsx(h,{type:"submit",onClick:r,large:"S",stretched:!0,appearance:"white",variant:"primary",disabled:s||o,style:{width:"auto",padding:"0 50px"},children:n("Get password")})},P=t.form`
  background: var(--colors-whiteA12);
  display: flex;
  flex-direction: column;
  padding: 40px !important;
  max-width: 600px;
  width: 100%;
`,A=t.span`
  font-size: var(--fontSizes-7);
  text-transform: uppercase;
  color: var(--colors-blue11);
  font-weight: 600;
  text-align: center;
  margin-bottom: 16px;
`,E=t.span`
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) var(--unnamed-font-size-16) / 18px
    var(--unnamed-font-family-roboto);
  letter-spacing: var(--unnamed-character-spacing-0);
  text-align: center;
  margin-bottom: 30px;
  font-size: 16px;
`,B=t.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  width: 100%;
  margin-bottom: 30px;
`,L=({...a})=>{const s=f(),{t:n}=d(),{handleSubmit:c,register:o,watch:r}=v({defaultValues:{email:""}}),p=()=>!!r("email"),m=M=>{s(b.NEW_PASSWORD_PAGE)};return e.jsxs(P,{onSubmit:c(m),...a,children:[e.jsx(A,{children:n("I forgot my password")}),e.jsx(E,{children:n("Enter the email you registered with")}),e.jsx(B,{children:e.jsx(w,{large:"S",type:"email",placeholder:`${n("Type here")}..`,...o("email",{required:!0,min:4,max:256})})}),e.jsx(k,{email:r("email"),disabled:!p()})]})},N=t.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  padding: var(--space-5) 0;
  gap: var(--space-6);
`,T=t(L)`
  align-items: center;
  width: 100%;
  padding: var(--space-5);
`;t(y)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--fontSizes-7);
  text-transform: uppercase;
  color: var(--colors-blue11);
  font-weight: 600;
  background: var(--colors-whiteA12);
  text-decoration: none;
  width: 100%;
  padding: var(--space-5);
`;const W=t.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
  margin: auto 0;
  gap: var(--space-4);
`,I=t.div`
  color: var(--colors-blackA12);
  font-size: var(--fontSizes-3);
`,G=()=>e.jsx(j,{children:e.jsx(S,{children:e.jsx(z,{children:e.jsxs(N,{children:[e.jsx(F,{size:32,fill:"colors-blue11"}),e.jsx(W,{children:e.jsx(T,{})}),e.jsxs(I,{children:["TBUY © ",C()]})]})})})});export{G as ForgotPassword};
