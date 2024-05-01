import{a4 as w,bb as y,bc as j,bd as I,be as C,bf as k,a5 as c,a6 as A,k as E,bg as R,n as t,a2 as d,a as m,a7 as T,r as F,X as _,j as e,i as l,I as O,C as z,a8 as p,h as P,b8 as G,b9 as L,ba as B,L as M}from"./index-2bc117be.js";import{S as N}from"./ui-fb63835f.js";import{g as V}from"./date-utils-e9a3739c.js";import"./ui-f6bcc7a4.js";const n=w({handler:async a=>E.post("/client/login",a).then(s=>s.data)});n.finished.success.watch(({result:a})=>{y(!0),j(a.data.user),localStorage.setItem(I,a.data.access_token),localStorage.setItem(C,JSON.stringify(a.data.user)),k("Authorization",`Bearer ${a.data.access_token}`),c("Success",{description:a.message,className:"success-toast"})});n.finished.failure.watch(({error:a})=>{const s=a.response.data;c("Error",{description:s.message,className:"error-toast"})});A(R,{on:n,by:{success:({mutation:a})=>({result:a.result,refetch:!0})}});const $=t.form`
  background: var(--colors-whiteA12);
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
`,D=t.span`
  font-size: var(--fontSizes-7);
  text-transform: uppercase;
  color: var(--colors-blue11);
  font-weight: 600;
`,W=t.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  width: 100%;
`,q=t.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`,U=t(d)`
  color: var(--colors-blue11);
  font-size: var(--fontSizes-3);
`,Y={email:"",password:"",remember_me:!1},H=({...a})=>{const{t:s}=m(),{handleSubmit:u,register:r,setValue:h,formState:{isValid:g,isDirty:x}}=T({mode:"all",reValidateMode:"onChange",defaultValues:Y}),[i,f]=F.useState(!1),{start:b,pending:S}=_(n),v=!(g&&x)||S;return e.jsxs($,{onSubmit:u(b),...a,children:[e.jsx(D,{children:s("Entry")}),e.jsxs(W,{children:[e.jsx(l,{large:"S",type:"email",label:s("Email"),placeholder:`${s("Type here")}..`,...r("email",{required:!0,min:4,max:256})}),e.jsx(l,{large:"S",label:s("Password"),type:i?"text":"password",placeholder:`${s("Type here")}..`,...r("password",{required:!0,min:4,max:256}),icon:{position:"right",self:e.jsx(O.Show,{width:24,height:24,fill:i?"colors-blackA12":"colors-blackA6",onClick:()=>f(o=>!o)})}}),e.jsxs(q,{children:[e.jsx(z,{value:s("Remember me"),onCheckedChange:o=>h("remember_me",o)}),e.jsx(U,{to:p.FORGOT_PASSWORD_PAGE,children:s("I forgot my password")})]})]}),e.jsx(P,{type:"submit",large:"S",stretched:!0,appearance:"white",variant:"primary",disabled:v,style:{width:"auto",padding:"0px 50px",border:"none"},children:s("Submit")})]})},J=t.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  padding: 40px 0;
  gap: var(--space-6);
`,K=t(H)`
  align-items: center;
  width: 100%;
  padding: 30px 50px;
  margin-bottom: 24px;
`,Q=t(d)`
  display: flex;
  align-items: center;
  justify-content: center;
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    34px/18px var(--unnamed-font-family-roboto);
  text-transform: uppercase;
  color: var(--colors-blue11);
  font-weight: 600;
  background: var(--colors-whiteA12);
  text-decoration: none;
  width: 100%;
  padding: 38px 0;
  letter-spacing: 0;
`,X=t.div`
  max-width: 600px;
  width: 100%;
  margin: auto 0;
`,Z=t.div`
  color: var(--colors-blackA12);
  font: var(--unnamed-font-style-normal) normal
    var(--unnamed-font-weight-normal) 14px/18px Montserrat;
`,ee=t.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  align-items: center;
  margin-bottom: 40px;
`,ae=t.span`
  text-transform: uppercase;
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold)
    var(--unnamed-font-size-16) / var(--unnamed-line-spacing-36)
    var(--unnamed-font-family-roboto);
`,ie=()=>{const{t:a}=m();return e.jsx(G,{children:e.jsx(L,{children:e.jsx(B,{children:e.jsxs(J,{children:[e.jsx(M,{size:32,fill:"colors-blue11"}),e.jsxs(X,{children:[e.jsxs(ee,{children:[e.jsx(ae,{children:a("Select the language")}),e.jsx(N,{})]}),e.jsx(K,{}),e.jsx(Q,{to:p.REGISTRATION_PAGE,children:a("Registration")})]}),e.jsxs(Z,{children:["TBUY © ",V()]})]})})})})};export{ie as SignIn};
