import{j as e,u as t,a as m,r as u,b as F,e as E,d as O}from"./index-81b9eae3.js";import{r as b,i as v}from"./createSvgIcon-b9c2f462.js";import{d as H}from"./Edit-d54ed0b2.js";import{g as q}from"./api-f8f40387.js";import"./createSvgIcon-5f74b268.js";var j={},G=v;Object.defineProperty(j,"__esModule",{value:!0});var S=j.default=void 0,T=G(b()),W=e,J=(0,T.default)((0,W.jsx)("path",{d:"M17.77 3.77 16 2 6 12l10 10 1.77-1.77L9.54 12z"}),"ArrowBackIosNew");S=j.default=J;var w={},X=v;Object.defineProperty(w,"__esModule",{value:!0});var f=w.default=void 0,Y=X(b()),Q=e,Z=(0,Y.default)((0,Q.jsx)("path",{d:"M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"}),"ArrowForwardIos");f=w.default=Z;var y={},K=v;Object.defineProperty(y,"__esModule",{value:!0});var U=y.default=void 0,ee=K(b()),I=e,te=(0,ee.default)([(0,I.jsx)("circle",{cx:"12",cy:"12",r:"3.2"},"0"),(0,I.jsx)("path",{d:"M9 2 7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"},"1")],"PhotoCamera");U=y.default=te;const oe=t.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-top: 20px;
`,ne=t.h1`
  font-size: 24px;
  color: #333;
`,re=t.p`
  font-size: 16px;
  color: #666;
`,ie=t.label`
  margin: 20px 0;
  padding: 10px 20px;
  width: 50%;
  background-color: rgba(0, 123, 255, 0);
  color: #000000;
  border: 1px solid #ccc;
  cursor: pointer;
  display: inline-block;

  &:hover {
    background-color: rgba(1, 119, 193, 0.25);
  }
`,ae=t.input`
  display: none;
`,se=t.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`,_=t.span`
  position: absolute;
  top: 5px;
  right: 5px;
  color: white;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 2px 6px;
  border-radius: 50%;
  cursor: pointer;
  user-select: none;
`,le=t.div`
  position: relative;
  width: 150px;
  height: 150px;

  &:hover ${_} {
    display: block;
  }
`,ce=t.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 5px;
`,de=()=>{const{t:o}=m(),[d,n]=u.useState([]),c=i=>{n(a=>a.filter((l,r)=>r!==i))},p=i=>{if(i.target.files){const a=Array.from(i.target.files).map(l=>URL.createObjectURL(l));n(l=>[...l,...a])}};return e.jsxs(oe,{children:[e.jsx(ne,{children:o("Gallery")}),e.jsx(re,{children:o("ImageUploadCount")}),e.jsx(ie,{htmlFor:"image-upload",children:o("ImageUploadSize")}),e.jsx(ae,{id:"image-upload",type:"file",multiple:!0,accept:".jpg, .png, .gif",onChange:p}),e.jsx(se,{children:d.map((i,a)=>e.jsxs(le,{children:[e.jsx(ce,{src:i,alt:`Uploaded ${a+1}`}),e.jsx(_,{onClick:()=>c(a),children:"X"})]},a))})]})},pe=t.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`,xe=t.h1`
  font-size: 24px;
  color: #333;
`,ue=t.p`
  font-size: 16px;
  color: #666;
`,he=t.label`
  margin: 20px 0;
  padding: 10px 20px;
  width: 50%;
  background-color: rgba(0, 123, 255, 0);
  color: #000000;
  border: 1px solid #ccc;
  cursor: pointer;
  display: inline-block;

  &:hover {
    background-color: rgba(1, 119, 193, 0.25);
  }
`,ge=t.input`
  display: none;
`,fe=t.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`,$=t.span`
  position: absolute;
  top: 5px;
  right: 5px;
  color: white;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 2px 6px;
  border-radius: 50%;
  cursor: pointer;
  user-select: none;
`,me=t.div`
  position: relative;
  width: 250px;
  height: 150px;

  &:hover ${$} {
    display: block;
  }
`,be=t.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`,ve=()=>{const{t:o}=m(),[d,n]=u.useState([]),c=i=>{n(a=>a.filter((l,r)=>r!==i))},p=i=>{if(i.target.files){const a=Array.from(i.target.files).map(l=>URL.createObjectURL(l));n(l=>[...l,...a])}};return e.jsxs(pe,{children:[e.jsx(xe,{children:o("Video library")}),e.jsx(ue,{children:o("You can add up to 15 videos")}),e.jsx(he,{htmlFor:"video-upload",children:o("Upload a video clip up to 20mb, format: .mp4")}),e.jsx(ge,{id:"video-upload",type:"file",multiple:!0,accept:".mp4",onChange:p}),e.jsx(fe,{children:d.map((i,a)=>e.jsxs(me,{children:[e.jsx(be,{src:i,controls:!0}),e.jsx($,{onClick:()=>c(a),children:"X"})]},a))})]})},je=({width:o=24,height:d=24})=>e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:o,height:d,fill:"none",viewBox:"0 0 24 24",children:[e.jsx("path",{stroke:"white",strokeWidth:"1.5",d:"M6 11c0-2.828 0-4.243.879-5.121C7.757 5 9.172 5 12 5h3c2.828 0 4.243 0 5.121.879C21 6.757 21 8.172 21 11v5c0 2.828 0 4.243-.879 5.121C19.243 22 17.828 22 15 22h-3c-2.828 0-4.243 0-5.121-.879C6 20.243 6 18.828 6 16v-5z"}),e.jsx("path",{stroke:"white",strokeWidth:"1.5",d:"M6 19a3 3 0 01-3-3v-6c0-3.771 0-5.657 1.172-6.828C5.343 2 7.229 2 11 2h4a3 3 0 013 3"})]}),we=t.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`,ye=t.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  width: 800px;
  max-width: 1000px;
  min-height: 500px;
  max-height: 700px;
  position: relative;
`,ke=t.div`
  font-weight: bold;
  font-size: 25px;
`,Ce=t.div`
  margin-top: 10px;
`,Ie=t.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`,Be=t.div`
  flex-grow: 1;
  overflow-y: auto;
  padding: 20px 0;
`,Se=t.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px 0;
`,D=t.div`
  min-width: 200px;
  height: 120px;
  background-color: rgba(1, 119, 193, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`,Ue=t.img`
  width: 100%;
  height: 120px;
  max-width: 200px;
  border-radius: 10px;
`,_e=t(D)`
  border: 2px dashed #0177c1;
  justify-content: center;
  align-items: center;
`,$e=t.div`
  font-size: 3rem;
  color: #0177c1;
`,De=t.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
`,ze=({banners:o,onClose:d,onAddBanner:n})=>e.jsx(we,{children:e.jsxs(ye,{children:[e.jsx(ke,{children:"Баннеры"}),e.jsx(Ce,{children:"Вы можете добавить до 15 баннеров для вашего сайта"}),e.jsx(Ie,{onClick:d,children:"×"}),e.jsx(Be,{children:e.jsx(Se,{children:o.map(c=>e.jsx(D,{children:e.jsx(Ue,{src:c.imageUrl,alt:`Banner ${c.id}`})},c.id))})}),e.jsx(De,{children:e.jsxs(_e,{children:[e.jsx("label",{htmlFor:"bannerUpload",children:e.jsx($e,{children:"+"})}),e.jsx("input",{id:"bannerUpload",type:"file",accept:"image/*",style:{display:"none"},onChange:n})]})})]})}),Ve={DomainName:"DomainName"};function Le({getKey:o,initialValue:d,storageType:n=localStorage}){const[c,p]=u.useState(()=>{try{const r=n.getItem(o);return r?JSON.parse(r):d}catch{return d}}),i=u.useCallback(r=>{try{const s=r instanceof Function?r(c):r;p(s),n.setItem(String(o),JSON.stringify(s))}catch(s){console.error(s)}},[n,c]),a=u.useCallback(r=>{try{n.removeItem(r),p(null)}catch(s){console.error(s)}},[n]),l=r=>{if(r.key===o)try{const s=r.newValue?JSON.parse(r.newValue):null;p(s)}catch(s){console.error(s)}};return u.useEffect(()=>(window.addEventListener("storage",l),()=>{window.removeEventListener("storage",l)}),[o]),{storedValue:c,setValue:i,removeValue:a}}function Re(o){return navigator.clipboard.writeText(o).then(()=>!0).catch(()=>!1)}const Ae=t.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 100%;
  margin-top: 20px;
  padding: 30px;
`,Pe=t.div`
  font-weight: bold;
  font-size: 23px;
`,Me=t.div`
  margin-top: 20px;
`,Ne=t.div`
  position: relative;
  display: flex;
  width: 600px;
  height: 400px;
  align-items: center;
  background: #a6a6a6;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s;
`,Fe=t.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
`,Ee=t.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  left: 10px;
  bottom: 10px;
`,Oe=t.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  left: 40px;
  bottom: 10px;
`,He=t.div`
  position: absolute;
  display: flex;
  justify-content: space-around;
  align-items: center;
  right: 10px;
  top: 10px;
  color: #000000;
  background-color: #ffffff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  font-size: 15px;
  font-weight: bold;
  padding: 5px;
  width: 100px;
`,qe=t.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 180px;
  bottom: 10px;
  width: 30px;
  height: 30px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  margin-left: 5px;
`,Ge=t.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  right: 10px;
  bottom: 10px;
  width: 160px;
  height: 30px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  margin-left: 5px;
`,Te=t.div``,We=t.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
`,Je=t.div`
  display: flex;
  align-items: start;
  margin-left: 50px;
`,Xe=t.label`
  font-size: 16px;
  font-weight: bold;
  margin-right: 10px;
  margin-top: 10px;
`,Ye=t.input`
  border: 1px solid #ccc;
  padding: 10px;
  min-width: 200px;
  height: 40px;
  &:disabled {
    background-color: #f5f5f5;
    color: #999;
    cursor: not-allowed;
  }
`,B=t.button`
  background-color: #0177c1;
  color: white;
  padding: 6px 6px;
  cursor: pointer;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;

  &:hover {
    background-color: #015b8f;
  }
  &:active {
    background-color: #00416b;
  }
`,ot=()=>{const{t:o}=m(),d=F(O),[n,c]=u.useState([]),[p,i]=u.useState(0),[a,l]=u.useState(!1),r=E(),{storedValue:s,setValue:k}=Le({getKey:Ve.DomainName,initialValue:"",storageType:sessionStorage});u.useEffect(()=>{(async()=>{const h=d.id.toString(),g=await q(h);k(g.link_site)})()},[]);const z=()=>{i(x=>(x-1+n.length)%n.length)},V=()=>{i(x=>(x+1)%n.length)},L=()=>{r("/main-banner-add")},R=x=>{if(x.target.files&&x.target.files[0]){const h=new FileReader;h.onload=g=>{var C;const M={id:`banner_${Date.now()}`,imageUrl:(C=g.target)==null?void 0:C.result};c(N=>[...N,M])},h.readAsDataURL(x.target.files[0])}},A=x=>{const{value:h}=x.target;k(h)},P=async()=>{s&&await Re(s)};return e.jsxs("div",{children:[e.jsxs(Ae,{children:[e.jsx(Pe,{children:o("Set up a website")}),e.jsxs(Me,{children:["*",o("StoreInfoDescription"),"*"]}),e.jsxs(We,{children:[e.jsxs(Ne,{children:[n.length>0&&e.jsx(Fe,{src:n[p].imageUrl,alt:`Banner ${p}`}),e.jsx(Ee,{onClick:z,children:e.jsx(S,{})}),e.jsx(Oe,{onClick:V,children:e.jsx(f,{})}),e.jsxs(He,{children:[p+1,"/",n.length]}),e.jsxs(qe,{onClick:()=>l(!0),children:[e.jsx(H,{}),"-"]}),e.jsxs(Ge,{onClick:L,children:[e.jsx(U,{}),e.jsx(Te,{children:"Add banner"})]})]}),e.jsxs("div",{style:{position:"relative"},children:[e.jsxs(Je,{children:[e.jsx(Xe,{children:o("TbuyPageLink")}),e.jsx(Ye,{type:"text",placeholder:"Your domain...",value:s??"",disabled:!!s,onChange:A}),e.jsx(B,{onClick:P,children:s?e.jsx(je,{width:24,height:24}):e.jsx(f,{})})]}),e.jsx(B,{style:{position:"absolute",bottom:0,right:0},children:"Preview"})]})]})]}),a&&e.jsx(ze,{banners:n,onClose:()=>l(!1),onAddBanner:R}),e.jsx(de,{}),e.jsx(ve,{})]})};export{ot as default};
