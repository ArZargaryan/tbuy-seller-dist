import{e as C,a as R,r as l,a7 as D,j as e,aa as a,T as p,bk as B,i as c,I as h,h as x,a8 as A}from"./index-2bc117be.js";import{B as w}from"./Box-2aeb85a8.js";function T(s){return s.split(" ").map(t=>t.toUpperCase()).join(" ")}function N(){const s=C(),{t}=R(),[o,u]=l.useState(!1),[n,m]=l.useState(!1),{watch:i,register:d,formState:{isValid:g,isDirty:S},handleSubmit:f}=D({mode:"all",reValidateMode:"onChange",defaultValues:{newPassword:"",repeatPassword:""}}),b=i("newPassword"),j=i("repeatPassword"),P=!(g&&S),k=()=>{},y=()=>s(A.FORGOT_PASSWORD_PAGE);return e.jsx(a,{sx:{width:"100%",minHeight:"100vh"},alignItems:"center",justifyContent:"center",children:e.jsx(a,{flexDirection:"column",sx:{padding:"56px 50px",maxWidth:"600px",width:"100%",boxShadow:"0px 16px 20px #C8D4D499",backgroundColor:"white"},children:e.jsxs("form",{style:{width:"inherit"},onSubmit:f(k),children:[e.jsxs(p,{align:"center",sx:{color:B.PRIMARY,fontSize:"34px",marginBottom:"16px",fontWeight:"bold"},children:[T(t("ThankYou")),"!"]}),e.jsx(p,{align:"center",sx:{fontSize:"16px",color:"#1D1D1D",marginBottom:"40px"},children:t("PasswordChangedSuccessfully")}),e.jsx(w,{sx:{marginBottom:"20px"},children:e.jsx(c,{large:"S",type:o?"text":"password",placeholder:`${t("Type here")}..`,...d("newPassword",{required:!0,min:4,max:256}),icon:{position:"right",self:e.jsx(h.Show,{width:24,height:24,fill:o?"colors-blackA12":"colors-blackA6",onClick:()=>u(r=>!r)})}})}),e.jsx(w,{sx:{marginBottom:"30px"},children:e.jsx(c,{large:"S",type:n?"text":"password",placeholder:`${t("Type here")}..`,...d("repeatPassword",{required:!0,min:4,max:256}),icon:{position:"right",self:e.jsx(h.Show,{width:24,height:24,fill:n?"colors-blackA12":"colors-blackA6",onClick:()=>m(r=>!r)})}})}),e.jsxs(a,{flexDirection:"row",gap:"0 24px",children:[e.jsx(x,{type:"button",large:"S",variant:"bordered",onClick:y,stretched:!0,appearance:"white",sx:{width:"100%",padding:"0px 50px",border:"1px solid #0177C1 !important",background:"transparent !important",cursor:"pointer"},children:t("Return")}),e.jsx(x,{type:"submit",large:"S",stretched:!0,appearance:"white",variant:"primary",disabled:b!==j&&P,sx:{width:"100%",padding:"0px 50px",border:"none"},children:t("Submit")})]})]})})})}export{N as NewPasswordPage};
