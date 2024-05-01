import{j as e,n as a,I as C,T as c,aa as d,r as u,bj as M,bk as A,bl as B,a as z,a7 as H,F as P,i as h,h as _,a2 as L,b8 as T,b9 as N,ba as V,L as W,a8 as $}from"./index-2bc117be.js";import{S as U}from"./ui-fb63835f.js";import{g as q}from"./date-utils-e9a3739c.js";import{S as E}from"./ui-fbcd4ff0.js";import{d as R}from"./Close-1b971a6a.js";import{B as k}from"./Box-2aeb85a8.js";import{B as m}from"./Button-86535438.js";import"./ui-f6bcc7a4.js";import"./createSvgIcon-5f6a3721.js";import"./createSvgIcon-bae563fb.js";import"./ButtonBase-8fbd39f9.js";function G(){return e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 64 64",id:"attach",children:e.jsx("path",{fill:"currentColor",d:"M16.7 54c-2.4 0-4.6-.9-6.3-2.6-1.7-1.7-2.6-3.9-2.6-6.3s.9-4.6 2.6-6.3l25.4-25.4c4.6-4.6 12.2-4.6 16.8 0 2.2 2.2 3.5 5.2 3.5 8.4s-1.2 6.1-3.5 8.4l-19 19-2-2 19-19c3.5-3.5 3.5-9.3 0-12.8s-9.3-3.5-12.8 0L12.4 40.8c-1.2 1.1-1.8 2.7-1.8 4.3 0 1.6.6 3.2 1.8 4.3 2.4 2.4 6.2 2.4 8.6 0l19-19c1.2-1.2 1.2-3.2 0-4.4-1.2-1.2-3.2-1.2-4.4 0L22.9 38.7l-2-2L33.6 24c2.3-2.3 6-2.3 8.3 0 2.3 2.3 2.3 6 0 8.3l-19 19c-1.6 1.8-3.8 2.7-6.2 2.7"})})}const Y=a.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  label {
    font-size: var(--fontSizes-3);
    color: var(--colors-blue11);
    text-decoration: underline;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--space-2);
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`,O=a.span`
  font-size: var(--fontSizes-3);
  color: var(--colors-grassA9);
  text-decoration: underline;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: 200px;
  &:hover {
    cursor: pointer;
    color: var(--colors-grassA11);
  }
`;a.span`
  font-size: var(--fontSizes-3);
  color: var(--colors-blue11);
  text-decoration: underline;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: 200px;
`;const X=a.div`
  display: flex;
  align-items: center;
  gap: var(--sizes-2);
`,J=a.div`
  &:hover {
    cursor: pointer;
    color: var(--colors-grassA11);
  }
`,K=a.button`
  background-color: transparent;
  text-decoration: underline;
  border: none;
  color: #0683d2;
  &:hover {
    cursor: pointer;
  }
`,F=({placeholder:r,selectedFileName:t,onClick:i,onDelete:n})=>e.jsxs(Y,{children:[t?e.jsx(C.File,{width:24,height:24,fill:"colors-grassA9"}):e.jsx(G,{}),t?e.jsxs(X,{children:[e.jsx(O,{children:t}),e.jsx(J,{children:e.jsx(C.X,{width:24,height:24,fill:"colors-grassA9",onClick:n})})]}):e.jsx(K,{onClick:i,children:r??"Select file"})]});function Q(){return e.jsxs("svg",{viewBox:"0 0 101 100",width:"80",height:"70",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("defs",{children:e.jsx("clipPath",{id:"clip-path",children:e.jsx("rect",{id:"Rectangle_149887","data-name":"Rectangle 149887",width:"101",height:"100",transform:"translate(-0.498 -0.257)",fill:"#0177c1"})})}),e.jsx("g",{id:"report:",transform:"matrix(1.2929400205612183, 0, 0, 1.2241039276123047, -15.26704216003418, -10.874027252197266)",clipPath:"url(#clip-path)",children:e.jsxs("g",{id:"file",transform:"translate(15.887 9.483)",children:[e.jsx("path",{id:"Path_12559","data-name":"Path 12559",d:"M68.869,16.8,52.449.675A2.355,2.355,0,0,0,50.8,0H9.285A8.8,8.8,0,0,0,.5,8.786v62.8a8.8,8.8,0,0,0,8.786,8.786h51.5a8.8,8.8,0,0,0,8.786-8.786V18.482a2.355,2.355,0,0,0-.7-1.68ZM53.153,7.968l8.308,8.159H53.9a.75.75,0,0,1-.749-.749Zm7.634,67.7H9.286a4.081,4.081,0,0,1-4.077-4.077V8.786A4.081,4.081,0,0,1,9.286,4.709H48.444V15.378A5.464,5.464,0,0,0,53.9,20.836H64.864V71.587a4.081,4.081,0,0,1-4.077,4.077Zm0,0",transform:"translate(-0.5 0)",fill:"#0177c1"}),e.jsx("path",{id:"Path_12560","data-name":"Path 12560",d:"M100.659,303.112h23.716a2.355,2.355,0,1,0,0-4.709H100.659a2.355,2.355,0,1,0,0,4.709Zm0,0",transform:"translate(-82.569 -253.267)",fill:"#0177c1"}),e.jsx("path",{id:"Path_12561","data-name":"Path 12561",d:"M134.226,358h-33.68a2.355,2.355,0,1,0,0,4.709h33.68a2.355,2.355,0,0,0,0-4.709Zm0,0",transform:"translate(-82.855 -300.179)",fill:"#0177c1"})]})})]})}function ee(){return e.jsxs("svg",{id:"camera",xmlns:"http://www.w3.org/2000/svg",width:"80.69",height:"70.813",viewBox:"0 0 80.69 70.813",children:[e.jsx("path",{id:"Контур_4121","data-name":"Контур 4121",d:"M191.563,218.233a11.4,11.4,0,1,1,8.061-3.339A11.325,11.325,0,0,1,191.563,218.233Zm0-17.84a6.44,6.44,0,1,0,4.554,1.886A6.4,6.4,0,0,0,191.563,200.393Z",transform:"translate(-151.219 -169.027)",fill:"#0177c1"}),e.jsx("path",{id:"Контур_4122","data-name":"Контур 4122",d:"M18.689,27.522H56l4.736,9.408h5.013A11.931,11.931,0,0,1,77.69,48.817v37.63A11.931,11.931,0,0,1,65.744,98.335H8.946A11.932,11.932,0,0,1-3,86.445l.025-37.618A11.939,11.939,0,0,1,8.951,36.946l5.005-.009Zm34.251,4.96H21.747l-4.73,9.409-8.057.014a6.971,6.971,0,0,0-6.975,6.925L1.96,86.446a6.966,6.966,0,0,0,6.987,6.928h56.8a6.965,6.965,0,0,0,6.987-6.928V48.817a6.965,6.965,0,0,0-6.987-6.928H57.675Zm-15.6,11.5A21.3,21.3,0,1,1,15.931,65.28,21.378,21.378,0,0,1,37.344,43.985Zm0,37.63A16.336,16.336,0,1,0,20.89,65.28,16.413,16.413,0,0,0,37.344,81.615Z",transform:"translate(3 -27.522)",fill:"#0177c1"})]})}const te=({onFileUpload:r})=>{const t=u.useRef(null),[i,n]=u.useState(null),[o,l]=u.useState(!1),[w,y]=u.useState(null),g=()=>{const s=document.createElement("canvas");if(t.current){s.width=t.current.videoWidth,s.height=t.current.videoHeight;const p=s.getContext("2d");p==null||p.drawImage(t.current,0,0,s.width,s.height);const S=s.toDataURL("image/jpeg");s.toBlob(j=>{if(j){const v=new File([j],"captured_image.jpg",{type:"image/jpeg"});y(v)}},"image/jpeg"),n(S)}},f=()=>{l(!1),n(null),t!=null&&t.current&&(t.current.srcObject=null)},b=async()=>{if(!o)try{l(!0);const s=await navigator.mediaDevices.getUserMedia({video:!0});t.current&&(t.current.srcObject=s)}catch{l(!1)}};return e.jsx("div",{children:e.jsx(m,{onClick:b,disableRipple:!0,sx:{width:"335px",height:"240px",border:"1px dashed #0177C1"},children:o?e.jsxs(d,{flexDirection:"column",gap:"20px 0",children:[e.jsxs(d,{flexDirection:"row",children:[e.jsx("video",{style:{width:"100%"},ref:t,autoPlay:!0,muted:!0,playsInline:!0}),e.jsx("img",{style:{width:"100%"},src:i??"",alt:"No image"})]}),e.jsxs(d,{flexDirection:"row",gap:"0 20px",justifyContent:"center",children:[i&&e.jsx(m,{onClick:()=>r(w),children:"Save"}),e.jsx(m,{onClick:g,children:"Shoot"}),e.jsx(m,{onClick:f,children:"Cancel"})]})]}):e.jsxs(d,{alignItems:"center",justifyContent:"center",gap:"40px 0",children:[e.jsx(ee,{}),e.jsx(c,{children:"ԼՈՒՍԱՆԿԱՐԵԼ"})]})})})},ae=({onFileUpload:r})=>{const t=u.useId();return e.jsx("div",{children:e.jsxs("label",{style:{width:"335px",height:"240px",border:"1px dashed #0177C1",display:"flex",alignItems:"center",justifyContent:"center",gap:"40px 0",flexDirection:"column",cursor:"pointer"},htmlFor:t,children:[e.jsx(Q,{}),e.jsx(c,{children:"ՆԵՐԲԵՌՆԵԼ ՀԱՄԱԿԱՐԳՉԻՑ"}),e.jsx("input",{id:t,style:{display:"none"},type:"file",onChange:i=>{var o,l;const n=(l=(o=i.target)==null?void 0:o.files)==null?void 0:l[0];n&&r(n)},accept:".pdf, image/jpeg, image/png"})]})})};function re({title:r,onFileUpload:t,onClose:i}){return e.jsxs(k,{sx:{position:"relative",background:"#FFFFFF 0% 0% no-repeat padding-box",boxShadow:"0px 16px 20px #C8D4D499",padding:"50px 100px 80px"},children:[e.jsx(k,{sx:{position:"absolute",right:"25px",top:"20px"},children:e.jsx(m,{sx:{background:"transparent",border:"none"},onClick:i,children:e.jsx(R,{})})}),e.jsx(c,{sx:{font:"var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) 34px/18px var(--unnamed-font-family-roboto)",letterSpacing:"var(--unnamed-character-spacing-0)",color:"#0177C1",textAlign:"center",marginBottom:"32px"},children:r}),e.jsxs(d,{gap:"0 24px",direction:"row",alignItems:"center",children:[e.jsx(te,{onFileUpload:t}),e.jsx(ae,{onFileUpload:t})]})]})}function ne(){return e.jsxs("svg",{id:"viber",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:[e.jsx("path",{id:"Path_4081","data-name":"Path 4081",d:"M691.661,370.021a.344.344,0,0,1-.362-.343,3.6,3.6,0,0,0-.067-.459,1.3,1.3,0,0,0-.477-.747,1.226,1.226,0,0,0-.392-.19c-.177-.049-.355-.037-.532-.08a.329.329,0,0,1-.269-.379.351.351,0,0,1,.342-.281h.025a1.969,1.969,0,0,1,2.02,1.97.844.844,0,0,1,0,.276.288.288,0,0,1-.233.233.107.107,0,0,0-.025.005C691.557,370.026,691.606,370.026,691.661,370.021Z",transform:"translate(-677.087 -359.937)",fill:"#4e49ec"}),e.jsx("path",{id:"Path_4082","data-name":"Path 4082",d:"M692.327,368.164a3.253,3.253,0,0,0-1.365-1.273,3.92,3.92,0,0,0-1.089-.337c-.159-.025-.325-.043-.49-.067a.311.311,0,0,1-.3-.325v-.025a.3.3,0,0,1,.313-.305h.031a4.461,4.461,0,0,1,1.885.489,3.812,3.812,0,0,1,2.074,2.962c.006.054.018.116.025.178.012.146.018.3.03.5a1.083,1.083,0,0,1-.03.2.324.324,0,0,1-.612.03,1.044,1.044,0,0,1-.037-.275A3.5,3.5,0,0,0,692.327,368.164Z",transform:"translate(-677.04 -359.777)",fill:"#4e49ec"}),e.jsx("path",{id:"Path_4083","data-name":"Path 4083",d:"M693.954,373.957a.773.773,0,0,1,.238.973,3.344,3.344,0,0,1-1.443,1.567,4.214,4.214,0,0,1-.631.2c-.244-.074-.475-.122-.694-.208a15.856,15.856,0,0,1-5.943-3.893,15.248,15.248,0,0,1-2.275-3.409c-.287-.581-.537-1.181-.788-1.781a1.541,1.541,0,0,1,.463-1.524,3.611,3.611,0,0,1,1.225-.9.793.793,0,0,1,.981.227,12.19,12.19,0,0,1,1.524,2.087.973.973,0,0,1-.288,1.34c-.112.08-.219.166-.325.251a1.256,1.256,0,0,0-.25.257.7.7,0,0,0-.043.613,5.577,5.577,0,0,0,3.181,3.452,1.647,1.647,0,0,0,.818.2c.494-.055.657-.594,1.007-.876a.982.982,0,0,1,1.149-.049c.363.233.725.477,1.076.722A11.4,11.4,0,0,1,693.954,373.957Z",transform:"translate(-676.651 -359.761)",fill:"#4e49ec"}),e.jsx("path",{id:"Path_4084","data-name":"Path 4084",d:"M694.766,368.991a14.761,14.761,0,0,1,.159,1.469.353.353,0,0,1-.325.409c-.233,0-.337-.19-.349-.4-.03-.41-.049-.82-.11-1.224a5.129,5.129,0,0,0-4.132-4.3c-.324-.055-.648-.068-.973-.1-.208-.025-.477-.037-.52-.288a.349.349,0,0,1,.342-.4h.2A5.83,5.83,0,0,1,694.766,368.991Z",transform:"translate(-676.984 -359.616)",fill:"#4e49ec"}),e.jsx("path",{id:"Path_4085","data-name":"Path 4085",d:"M699.616,364.833l-.007-.024a8.15,8.15,0,0,0-5.591-5.2l-.024-.006a31.92,31.92,0,0,0-11.681,0l-.032.006a8.152,8.152,0,0,0-5.583,5.2l-.007.024a21.387,21.387,0,0,0,0,9.533l.007.031a8.216,8.216,0,0,0,5.28,5.122v2.531a.98.98,0,0,0,.322.73,1.071,1.071,0,0,0,1.484-.03l2.647-2.663q.862.054,1.725.054a33.022,33.022,0,0,0,5.838-.539l.024-.006a8.162,8.162,0,0,0,5.591-5.2l.007-.031A21.387,21.387,0,0,0,699.616,364.833Zm-2.1,9.078a6.151,6.151,0,0,1-3.946,3.65,29.616,29.616,0,0,1-6.209.485.156.156,0,0,0-.11.048l-1.936,1.915-2.053,2.047a.253.253,0,0,1-.174.072.238.238,0,0,1-.241-.234V377.7a.144.144,0,0,0-.123-.143,6.151,6.151,0,0,1-3.94-3.65,19.492,19.492,0,0,1,0-8.618,6.15,6.15,0,0,1,3.94-3.65,29.78,29.78,0,0,1,10.852,0,6.154,6.154,0,0,1,3.939,3.65A19.492,19.492,0,0,1,697.519,373.911Z",transform:"translate(-676.154 -359.064)",fill:"#4e49ec"})]})}function se(){return e.jsxs("svg",{id:"whatsapp",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:[e.jsx("path",{id:"Path_4081","data-name":"Path 4081",d:"M628.455,374.4l-.008.077c-2.031-1.125-2.243-1.27-2.5-.834-.185.307-.712.986-.872,1.188s-.322.215-.6.077a7.4,7.4,0,0,1-2.216-1.518,9.162,9.162,0,0,1-1.532-2.116c-.271-.517.3-.591.811-1.671a.62.62,0,0,0-.023-.536c-.069-.153-.62-1.656-.851-2.255s-.45-.521-.62-.521a1.282,1.282,0,0,0-1.263.352c-1.49,1.814-1.114,3.68.161,5.674,2.506,3.631,3.841,4.3,6.278,5.228a3.454,3.454,0,0,0,1.736.124,2.867,2.867,0,0,0,1.865-1.458,2.784,2.784,0,0,0,.166-1.457c-.068-.138-.249-.215-.526-.353Z",transform:"translate(-611.363 -360.042)",fill:"#1ecb40"}),e.jsx("path",{id:"Path_4082","data-name":"Path 4082",d:"M632.353,363.367c-7.689-7.433-20.414-2.042-20.42,8.444a11.82,11.82,0,0,0,1.6,5.945l-1.7,6.162,6.335-1.652a11.971,11.971,0,0,0,17.665-10.448,11.8,11.8,0,0,0-3.495-8.411Zm1.48,8.417a9.956,9.956,0,0,1-15.01,8.5l-.36-.214-3.75.975,1.005-3.645-.239-.375a9.918,9.918,0,0,1,15.447-12.235A9.794,9.794,0,0,1,633.833,371.784Z",transform:"translate(-611.833 -359.917)",fill:"#1ecb40"})]})}function ie(){const{closeModal:r}=M();return e.jsxs(d,{flexDirection:"column",alignItems:"center",sx:{padding:"40px",backgroundColor:"white",width:"100%",boxShadow:"0px 16px 20px #C8D4D499",position:"relative"},children:[e.jsx(c,{sx:{color:A.PRIMARY,fontSize:"34px"},children:"ПОМОЩЬ"}),e.jsx(m,{sx:{background:"transparent",border:"none",position:"absolute",top:"40px",right:"40px",minWidth:"0",padding:"0",color:"#1d1d1d"},onClick:r,children:e.jsx(R,{})}),e.jsx(c,{sx:{color:"#1D1D1D",fontSize:"16px",lineHeight:"22px",marginTop:"30px"},children:"Կոմերցիոն բաժնի հեռախոսահամար"}),e.jsxs(d,{flexDirection:"row",alignItems:"center",gap:"0 14px",sx:{marginTop:"16px"},children:[e.jsx(c,{children:"+374 77 065 065"}),e.jsx(ne,{}),e.jsx(se,{})]}),e.jsx(c,{sx:{fontSize:"16px",marginTop:"32px",color:"#1D1D1D"},children:"Էլ. հասցե"}),e.jsx(c,{sx:{color:A.PRIMARY,fontWeight:"bold",marginTop:"14px"},children:"Commerce@tbay.am"})]})}const oe=a.form`
  background: var(--colors-whiteA12);
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  justify-content: space-between;
`,le=a.span`
  font-size: var(--fontSizes-7);
  text-transform: uppercase;
  color: var(--colors-blue11);
  font-weight: 600;
  text-align: center;
`,I=a.div`
  display: flex;
  width: 100%;
  gap: var(--space-4);
  flex-direction: column;
`,ce=a.button`
  color: var(--colors-blackA10);
  display: flex;
  align-items: center;
  gap: var(--space-1);
  border: none;
  background: transparent;
  cursor: pointer;
`,de={companyName:"",activityType:B.SALES,directorFirstName:"",directorLastName:"",directorPhone:"",email:"",inn:"",passportDocument:null,stateRegisterDocument:null},pe={passportDocument:"ПРИКРЕПИТЬ ПАСПОРТ ДИРЕКТОРА",stateRegisterDocument:"ПРИКРЕПИТЬ СВИДЕТЕЛЬСТВО О ГОСРЕЕСТРЕ"},xe=({...r})=>{var v,D;const{t}=z(),{handleSubmit:i,register:n,setValue:o,watch:l,formState:{isValid:w,isDirty:y}}=H({defaultValues:de}),{provideModalSettings:g,closeModal:f}=M(),b=[{value:"sales",title:"Sales"},{value:"services",title:"Services"}],s=!(w&&y),p=x=>()=>{g({styles:{center:!0,maxWidth:920},content:e.jsx(re,{onClose:f,title:pe[x],onFileUpload:Z=>{o(x,Z),f()}})})},S=x=>{console.log({data:x})},j=()=>{g({styles:{center:!0},content:e.jsx(ie,{})})};return e.jsxs(oe,{onSubmit:i(S),...r,children:[e.jsx(le,{children:t("OrganizationRegistration")}),e.jsxs(P,{gap:"space-3",width:"100%",children:[e.jsxs(I,{children:[e.jsx(h,{large:"S",type:"text",placeholder:`${t("DirectorFirstName")}`,...n("directorFirstName",{required:!0,min:1,max:256})}),e.jsx(h,{large:"S",type:"text",placeholder:`${t("DirectorLastName")}`,...n("directorLastName",{required:!0,min:1,max:256})}),e.jsx(h,{large:"S",type:"text",placeholder:`${t("PhoneNumber")}`,...n("directorPhone",{required:!0,min:4,max:256})}),e.jsx(h,{large:"S",type:"text",placeholder:`${t("ContactEmail")}`,...n("email",{required:!0,min:4,max:256})})]}),e.jsxs(I,{children:[e.jsx(E,{items:b,placeholder:t("ActivityType"),onValueChange:x=>o("activityType",x)}),e.jsx(h,{large:"S",type:"text",placeholder:`${t("name")}`,...n("companyName",{required:!0,min:4,max:256})}),e.jsx(h,{large:"S",type:"text",placeholder:`${t("INN")}`,...n("inn",{required:!0,min:4,max:256})})]})]}),e.jsxs(P,{direction:"column",gap:"space-3",margin:"10px 0 0 0",width:"100%",children:[e.jsx(F,{selectedFileName:(v=l("passportDocument"))==null?void 0:v.name,placeholder:t("PassportDocument"),onClick:p("passportDocument"),onDelete:()=>o("passportDocument",null)}),e.jsx(F,{selectedFileName:(D=l("stateRegisterDocument"))==null?void 0:D.name,placeholder:t("StateRegisterDocument"),onClick:p("stateRegisterDocument"),onDelete:()=>o("stateRegisterDocument",null)})]}),e.jsx(_,{type:"submit",large:"S",appearance:"white",stretched:!0,variant:"primary",disabled:s,style:{width:"auto",padding:"0 50px",border:"none",cursor:s?"not-allowed ":"default"},children:t("Submit")}),e.jsxs(ce,{onClick:j,children:[t("Help"),e.jsx(C.HelpGray,{width:24,height:24,fill:"colors-blackA9"})]})]})},he=a.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  padding: 40px 0;
  gap: var(--space-6);
`,me=a(xe)`
  align-items: center;
  width: 100%;
  padding: var(--space-5);
`,ue=a(L)`
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
`,ge=a.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  width: 100%;
  margin: auto 0;
  gap: var(--space-4);
`,fe=a.div`
  color: var(--colors-blackA12);
  font-size: var(--fontSizes-3);
`,je=a.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  align-items: center;
`,ve=a.span`
  font-size: var(--fontSizes-3);
  font-weight: 500;
  text-transform: uppercase;
`,Me=()=>{const{t:r}=z();return e.jsx(T,{children:e.jsx(N,{children:e.jsx(V,{children:e.jsxs(he,{children:[e.jsx(W,{size:32,fill:"colors-blue11"}),e.jsxs(ge,{children:[e.jsxs(je,{children:[e.jsx(ve,{children:r("Select the language")}),e.jsx(U,{})]}),e.jsx(me,{}),e.jsx(ue,{to:$.SIGN_IN_PAGE,children:r("SignIn")})]}),e.jsxs(fe,{children:["TBUY © ",q()]})]})})})})};export{Me as Registration};
