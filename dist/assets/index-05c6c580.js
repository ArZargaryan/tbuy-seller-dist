import{a4 as x,a5 as w,k as g,a as m,X as b,j as s,h as j,n as t,a7 as v,r as S,i as d,I as p,a2 as y,b8 as k,b9 as _,ba as C,L as A}from"./index-c419738b.js";import{g as z}from"./date-utils-e9a3739c.js";const h=x({handler:async a=>g.post("/client/change-password",{...a}).then(e=>e.data)});h.finished.success.watch(({result:a})=>{w("Success",{description:a.message,className:"success-toast"})});h.finished.failure.watch(({error:a})=>{const e=a.response.data;w("Error",{description:e.message,className:"error-toast"})});const T=({old_password:a,password:e,password_confirmation:c,disabled:n})=>{const{t:r}=m(),{start:o,pending:i}=b(h),l=()=>{o({old_password:a,password:e,password_confirmation:c})};return s.jsx(j,{type:"submit",onClick:l,large:"S",appearance:"white",stretched:!0,variant:"primary",disabled:n||i,children:r("Submit")})},P=t.form`
  background: var(--colors-whiteA12);
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
`,F=t.span`
  font-size: var(--fontSizes-7);
  text-transform: uppercase;
  color: var(--colors-blue11);
  font-weight: 600;
  text-align: center;
`,B=t.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  width: 100%;
`,I=({...a})=>{const{t:e}=m(),{handleSubmit:c,register:n,watch:r}=v({defaultValues:{old_password:"",password:"",password_confirmation:""}}),[o,i]=S.useState({old:!1,new:!1,new_confirmation:!1}),l=()=>!!r("old_password")&&!!r("password")&&!!r("password_confirmation"),f=u=>console.log(u);return s.jsxs(P,{onSubmit:c(f),...a,children:[s.jsx(F,{children:e("Thanks!")}),s.jsxs(B,{children:[s.jsx(d,{large:"S",type:o.old?"text":"password",label:e("Old password"),placeholder:`${e("Type here")}..`,icon:{position:"right",self:s.jsx(p.Show,{width:24,height:24,fill:o.old?"colors-blackA12":"colors-blackA6",onClick:()=>i({old:!o.old})})},...n("old_password",{required:!0,min:4,max:256})}),s.jsx(d,{large:"S",type:o.new?"text":"password",label:e("New password"),placeholder:`${e("Type here")}..`,icon:{position:"right",self:s.jsx(p.Show,{width:24,height:24,fill:o.new?"colors-blackA12":"colors-blackA6",onClick:()=>i({new:!o.new})})},...n("password",{required:!0,min:4,max:256})}),s.jsx(d,{large:"S",type:o.new_confirmation?"text":"password",label:e("New password confirmation"),placeholder:`${e("Type here")}..`,icon:{position:"right",self:s.jsx(p.Show,{width:24,height:24,fill:o.new_confirmation?"colors-blackA12":"colors-blackA6",onClick:()=>i({new_confirmation:!o.new_confirmation})})},...n("password_confirmation",{required:!0,min:4,max:256})})]}),s.jsx(T,{old_password:r("old_password"),password:r("password"),password_confirmation:r("password_confirmation"),disabled:!l()})]})},L=t.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  padding: var(--space-5) 0;
  gap: var(--space-6);
`,N=t(I)`
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
`;const $=t.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  margin: auto 0;
  gap: var(--space-4);
`,q=t.div`
  color: var(--colors-blackA12);
  font-size: var(--fontSizes-3);
`,W=()=>s.jsx(k,{children:s.jsx(_,{children:s.jsx(C,{children:s.jsxs(L,{children:[s.jsx(A,{size:32,fill:"colors-blue11"}),s.jsx($,{children:s.jsx(N,{})}),s.jsxs(q,{children:["TBUY © ",z()]})]})})})});export{W as ChangePassword};
