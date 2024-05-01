import{p as pe,q as xe,s as M,v as S,_ as C,w as U,x as ue,y as he,r as f,z as ge,A as fe,j as e,D as me,E as ve,u as r,n as g,G as be,I as B,t as Z,P as _,F as je,a as we,L as ye}from"./index-2bc117be.js";import{d as ke}from"./Cancel-824385e1.js";import{r as b,i as j}from"./createSvgIcon-5f6a3721.js";import{d as K}from"./Close-1b971a6a.js";import{d as Se}from"./ExpandMore-df349833.js";import{d as J,a as Ce}from"./KeyboardArrowDown-b9891770.js";import{F as _e}from"./FormControlLabel-8c69b93b.js";import{S as $e}from"./SwitchBase-f0861c78.js";import{d as Me}from"./DeleteOutline-a5b1a835.js";import{I as Ie}from"./IconButton-0e32ca7d.js";import{F as ze,I as Be,a as Fe,T as Pe,S as Re}from"./TextField-2c028d2c.js";import{M as E}from"./MenuItem-6ff64f5c.js";import{D as De,a as Le}from"./DialogContent-3091d299.js";import{B as q}from"./Button-86535438.js";import{D as Oe,a as We}from"./DialogTitle-faaf543f.js";import{d as Ae}from"./CardGiftcard-c883363a.js";import{d as He}from"./HelpOutline-f82d2c5a.js";function Te(t){return xe("MuiSwitch",t)}const Ve=pe("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),u=Ve,Ue=["className","color","edge","size","sx"],Ze=t=>{const{classes:i,edge:o,size:a,color:d,checked:n,disabled:s}=t,p={root:["root",o&&`edge${S(o)}`,`size${S(a)}`],switchBase:["switchBase",`color${S(d)}`,n&&"checked",s&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},c=ve(p,Te,i);return C({},i,c)},Ee=M("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(t,i)=>{const{ownerState:o}=t;return[i.root,o.edge&&i[`edge${S(o.edge)}`],i[`size${S(o.size)}`]]}})(({ownerState:t})=>C({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},t.edge==="start"&&{marginLeft:-8},t.edge==="end"&&{marginRight:-8},t.size==="small"&&{width:40,height:24,padding:7,[`& .${u.thumb}`]:{width:16,height:16},[`& .${u.switchBase}`]:{padding:4,[`&.${u.checked}`]:{transform:"translateX(16px)"}}})),qe=M($e,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(t,i)=>{const{ownerState:o}=t;return[i.switchBase,{[`& .${u.input}`]:i.input},o.color!=="default"&&i[`color${S(o.color)}`]]}})(({theme:t})=>({position:"absolute",top:0,left:0,zIndex:1,color:t.vars?t.vars.palette.Switch.defaultColor:`${t.palette.mode==="light"?t.palette.common.white:t.palette.grey[300]}`,transition:t.transitions.create(["left","transform"],{duration:t.transitions.duration.shortest}),[`&.${u.checked}`]:{transform:"translateX(20px)"},[`&.${u.disabled}`]:{color:t.vars?t.vars.palette.Switch.defaultDisabledColor:`${t.palette.mode==="light"?t.palette.grey[100]:t.palette.grey[600]}`},[`&.${u.checked} + .${u.track}`]:{opacity:.5},[`&.${u.disabled} + .${u.track}`]:{opacity:t.vars?t.vars.opacity.switchTrackDisabled:`${t.palette.mode==="light"?.12:.2}`},[`& .${u.input}`]:{left:"-100%",width:"300%"}}),({theme:t,ownerState:i})=>C({"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})`:U(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},i.color!=="default"&&{[`&.${u.checked}`]:{color:(t.vars||t).palette[i.color].main,"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette[i.color].mainChannel} / ${t.vars.palette.action.hoverOpacity})`:U(t.palette[i.color].main,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${u.disabled}`]:{color:t.vars?t.vars.palette.Switch[`${i.color}DisabledColor`]:`${t.palette.mode==="light"?ue(t.palette[i.color].main,.62):he(t.palette[i.color].main,.55)}`}},[`&.${u.checked} + .${u.track}`]:{backgroundColor:(t.vars||t).palette[i.color].main}})),Ne=M("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(t,i)=>i.track})(({theme:t})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:t.vars?t.vars.palette.common.onBackground:`${t.palette.mode==="light"?t.palette.common.black:t.palette.common.white}`,opacity:t.vars?t.vars.opacity.switchTrack:`${t.palette.mode==="light"?.38:.3}`})),Ge=M("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(t,i)=>i.thumb})(({theme:t})=>({boxShadow:(t.vars||t).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),Xe=f.forwardRef(function(i,o){const a=ge({props:i,name:"MuiSwitch"}),{className:d,color:n="primary",edge:s=!1,size:p="medium",sx:c}=a,x=fe(a,Ue),v=C({},a,{color:n,edge:s,size:p}),y=Ze(v),l=e.jsx(Ge,{className:y.thumb,ownerState:v});return e.jsxs(Ee,{className:me(y.root,d),sx:c,ownerState:v,children:[e.jsx(qe,C({type:"checkbox",icon:l,checkedIcon:l,ref:o,ownerState:v},x,{classes:C({},y,{root:y.switchBase})})),e.jsx(Ne,{className:y.track,ownerState:v})]})}),Ke=Xe,Je=r.button`
  background: linear-gradient(
    to right,
    rgba(0, 119, 255, 0.5),
    rgb(4, 121, 195)
  );
  color: white;
  font-weight: inherit;
  width: 180px;
  height: 44px;
  border: 0 solid rgba(0, 0, 0, 0);
  cursor: pointer;
  margin-top: 20px;
  margin-bottom: 20px;
`,zo=({openModal:t})=>e.jsx("div",{children:e.jsx(Je,{onClick:t,children:"Configure Filters"})});var F={},Qe=j;Object.defineProperty(F,"__esModule",{value:!0});var Q=F.default=void 0,Ye=Qe(b()),et=e,tt=(0,Ye.default)((0,et.jsx)("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess");Q=F.default=tt;var P={},rt=j;Object.defineProperty(P,"__esModule",{value:!0});var Y=P.default=void 0,it=rt(b()),ot=e,at=(0,it.default)((0,ot.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox");Y=P.default=at;const nt=[{name:"Категория",options:["Ноутбуки","Смартфоны","Планшеты"],switch:!1},{name:"Бренд",options:["Apple","Samsung","Xiaomi"],switch:!0},{name:"Цена",options:["0-10.000","10.000-50.000","50.000-100.000"],switch:!1},{name:"Бренд",options:["Apple","Samsung","Xiaomi"],switch:!0},{name:"Цена",options:["0-10.000","10.000-50.000","50.000-100.000"],switch:!1},{name:"Бренд",options:["Apple","Samsung","Xiaomi"],switch:!0},{name:"Цена",options:["0-10.000","10.000-50.000","50.000-100.000"],switch:!1},{name:"Бренд",options:["Apple","Samsung","Xiaomi"],switch:!0},{name:"Цена",options:["0-10.000","10.000-50.000","50.000-100.000"],switch:!1},{name:"Бренд",options:["Apple","Samsung","Xiaomi"],switch:!0},{name:"Цена",options:["0-10.000","10.000-50.000","50.000-100.000"],switch:!1}],st=r.div`
  display: ${t=>t.show?"block":"none"};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 999;
`,lt=r.div`
  display: ${t=>t.show?"flex":"none"};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  z-index: 50;
`,ct=r.div`
  margin-top: 20px;
`,dt=r.button`
  background: transparent;
  border: none;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`,pt=r.h2`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
`,xt=r.div`
  display: flex;
  align-items: center;
  background-color: #f1f1f1;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 20px;
`,ut=r.input`
  border: none;
  background-color: transparent;
  margin-left: 10px;
  outline: none;
  width: 100%;
`,ht=r.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 10px;
  overflow-y: auto;
  height: 50vh;
  width: 100%;
  box-shadow: 0 2px 0 rgb(241, 241, 241);
`,gt=r.div`
  flex: 0 0 calc(33.33% - 10px);
  min-width: 120px;
  background: #f7f7f7;
  padding: 10px;
  border-radius: 8px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  overflow-y: auto; /* Добавляем вертикальную прокрутку */
  max-height: 200px; /* Максимальная высота для прокрутки */
`,ft=r.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`,mt=r.div`
  display: none;
`,vt=r.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`,bt=r.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
  padding: 10px 0;
`,jt=r.div`
  display: flex;
  align-items: center;
  background-color: #000;
  color: #fff;
  border-radius: 15px;
  padding: 5px 10px;
`,wt=r.button`
  background-color: transparent;
  border: none;
  color: #fff;
  margin-left: 5px;
  cursor: pointer;
`,N=r.button`
  background-color: #f1f1f1;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  margin-right: 10px;
  cursor: pointer;

  &:last-child {
    background-color: #e31235;
    color: #fff;
  }
`,yt=r(Ke)`
  .MuiSwitch-switchBase.Mui-checked {
    color: #e31235;
  }

  .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track {
    background-color: #e31235;
  }
`,Bo=({showModal:t,closeModal:i})=>{const[o,a]=f.useState(""),[d,n]=f.useState([]),[s,p]=f.useState([]),c=nt.filter(l=>l.name.toLowerCase().includes(o.toLowerCase())),x=l=>{n(h=>h.includes(l)?h.filter(m=>m!==l):[...h,l])},v=l=>{p(h=>h.includes(l)?h.filter(m=>m!==l):[...h,l])},y=l=>{n(h=>h.filter(m=>m!==l))};return e.jsx(st,{show:t,children:e.jsx(lt,{show:t,children:e.jsxs(ct,{children:[e.jsx(dt,{onClick:i,children:e.jsx(K,{})}),e.jsx(pt,{children:"Все фильтры"}),e.jsxs(xt,{children:[e.jsx(J,{}),e.jsx(ut,{placeholder:"Поиск по фильтрам",value:o,onChange:l=>a(l.target.value)})]}),e.jsx(ht,{children:c.map((l,h)=>e.jsxs(gt,{children:[e.jsxs(ft,{onClick:()=>v(h),children:[e.jsx("span",{children:l.name}),s.includes(h)?e.jsx(Q,{}):e.jsx(Se,{})]}),e.jsx(mt,{style:{display:s.includes(h)?"block":"none"},children:l.options.map((m,de)=>e.jsx(vt,{children:l.switch?e.jsx(_e,{control:e.jsx(yt,{checked:d.includes(m),onChange:()=>x(m)}),label:m}):e.jsxs(e.Fragment,{children:[e.jsx(Y,{onClick:()=>x(m),style:{cursor:"pointer",marginRight:"10px"},color:d.includes(m)?"primary":"disabled"}),e.jsx("span",{children:m})]})},de))})]},h))}),e.jsx(bt,{children:d.map(l=>e.jsxs(jt,{children:[e.jsx("span",{children:l}),e.jsx(wt,{onClick:()=>y(l),children:e.jsx(ke,{})})]},l))}),e.jsx(N,{onClick:()=>n([]),children:"Отменить"}),e.jsx(N,{onClick:()=>{},children:"Применить"})]})})})},kt=r(Oe)``,St=r(We)`
  font-size: 1.5em;
  color: #0177c1;
  text-align: center;

  & .MuiTypography-root {
    color: #000000;
  }
`,Ct=r.p`
  color: #333;
  text-align: center;
  padding: 0 20px;
`,_t=r(Le)`
  display: flex;
  flex-direction: column;
  padding: 20px;
  & .MuiFormControl-root {
    margin-bottom: 20px;
  }
`,G=r(Pe)`
  & label.Mui-focused {
    color: #0177c1;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #0177c1;
    }
  }
`,$t=r(Re)`
  &
    .MuiSelect-select.MuiSelect-outlined.MuiOutlinedInput-input.MuiInputBase-input {
    padding-top: 12px;
    padding-bottom: 12px;
  }
`,Mt=r.label`
  height: 150px;
  background-color: #eceff1;
  border: dashed 2px #90a4ae;
  text-align: center;
  padding: 100px;
  position: relative;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`,It=r.div`
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`,zt=r.img`
  max-height: 110px;
  max-width: 100%;
  margin-right: 10px;
`,Bt=r.div`
  position: relative;
  display: inline-block;
`,Ft=r(Me)`
  cursor: pointer;
  position: absolute;
  top: -10px;
  right: -10px;
  color: #ff0000;
  background: #ffffff;
  border-radius: 50%;
  padding: 2px;
`,Fo=({open:t,onClose:i})=>{const[o,a]=f.useState([]),d=s=>{const p=s.target.files;p&&Array.from(p).forEach(c=>{const x=new FileReader;x.onloadend=()=>{a(v=>[...v,x.result])},x.readAsDataURL(c)})},n=s=>{a(o.filter((p,c)=>c!==s))};return e.jsxs(kt,{open:t,onClose:i,maxWidth:"sm",fullWidth:!0,children:[e.jsxs(St,{children:["Регистрация товарного знака",e.jsx(Ie,{"aria-label":"close",onClick:i,style:{position:"absolute",right:"10px",top:"10px"},children:e.jsx(K,{})})]}),e.jsx(Ct,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}),e.jsxs(_t,{children:[e.jsx(G,{label:"Название бренда",fullWidth:!0,variant:"outlined"}),e.jsxs(ze,{fullWidth:!0,children:[e.jsx(Be,{id:"country-of-origin-label",children:"Страна происхождения"}),e.jsxs($t,{labelId:"country-of-origin-label",label:"Страна происхождения",variant:"outlined",children:[e.jsx(E,{value:"country1",children:"Страна 1"}),e.jsx(E,{value:"country2",children:"Страна 2"})]})]}),e.jsxs(Mt,{htmlFor:"file-upload",children:[e.jsx("input",{type:"file",onChange:d,style:{display:"none"},id:"file-upload",multiple:!0}),o.length===0&&e.jsx(Fe,{children:"Перетащите изображение или кликните для загрузки"}),e.jsx(It,{children:o.map((s,p)=>e.jsxs(Bt,{children:[e.jsx(zt,{src:s,alt:`Preview ${p}`}),e.jsx(Ft,{onClick:()=>n(p)})]},p))})]}),e.jsx(G,{label:"О бренде",fullWidth:!0,multiline:!0,rows:4,variant:"outlined"})]}),e.jsxs(De,{children:[e.jsx(q,{onClick:i,children:"Отмена"}),e.jsx(q,{onClick:i,color:"primary",variant:"contained",children:"Подтвердить"})]})]})},Pt=g.div`
  position: relative;
`,Rt=g.label`
  position: absolute;
  top: -10px;
  left: 10px;
  padding: 0 4px;
  background-color: #fff;
  font-size: var(--fontSizes-2);
  font-weight: 600;
  z-index: 1;
  //transition: transform 0.3s ease;
`,Dt={control:(t,i)=>({...t,borderRadius:0,height:"44px"}),dropdownIndicator:(t,i)=>({...t,transform:i.isFocused?"rotate(180deg)":"none",transition:"transform 0.2s ease"}),menu:(t,i)=>({...t,zIndex:2}),option:(t,{data:i,isDisabled:o,isFocused:a,isSelected:d})=>({...t,backgroundColor:o?void 0:d?"#007BFF":a?"#E5E5E5":void 0,color:o?"#ccc":d?"white":i.value,cursor:o?"not-allowed":"default",":active":{...t[":active"],backgroundColor:o?void 0:d?"#007BFF":"#E5E5E5"}}),multiValue:t=>({...t,backgroundColor:"#E5E5E5"}),multiValueLabel:(t,{data:i})=>({...t,color:i.value}),multiValueRemove:t=>({...t,":hover":{backgroundColor:"#007BFF",color:"white"}})},Po=t=>e.jsxs(Pt,{children:[e.jsx(Rt,{htmlFor:"0",children:t.label}),e.jsx(be,{closeMenuOnSelect:!1,isMulti:!0,options:t.options,styles:Dt})]}),Lt=g.div`
  margin-top: 30px;
`,Ot=g.span`
  font-size: var(--fontSizes-7);
  font-weight: 600;
`,Wt=g.input`
  opacity: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 10;
  cursor: pointer;
`,At=g.div`
  margin-top: var(--sizes-2);
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 10px;
  border: 1px solid var(--colors-blackA6);
  width: 100%;
`,Ht=g.div`
  color: var(--colors-blackA10);
`,Tt=g.div`
  margin-top: var(--sizes-3);
  display: flex;
  flex-wrap: wrap;
  gap: var(--sizes-3);
  justify-content: center;
`,Vt=g.div`
  border: 1px solid var(--colors-blackA6);
  height: 225px;
  width: 340px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`,I=g.div`
  border: 1px solid var(--colors-blackA6);
  height: 225px;
  width: 340px;
  text-align: center;
  padding-top: var(--space-10);
`,Ut=g.div`
  cursor: pointer;
  position: absolute;
  top: 0;
  display: flex;
  width: 100%;
  justify-content: end;
  padding: var(--space-2);
`,Zt=g.img`
  //width: 80%;
  height: 70%;
`,Et=g.div`
  cursor: pointer;
`,qt=B.DotsHorizontal,Nt=B.Trash,Gt=g.div`
  margin-top: 20px;
  margin-bottom: 20px;
`,Ro=({placeholder:t,setImg:i})=>{const o=f.useRef(null),[a,d]=f.useState([]),n=[],s=c=>{if(c.target.files)for(let x=0;x<c.target.files.length;x++)n.push({file:c.target.files[x],url:URL.createObjectURL(c.target.files[x]),id:Math.floor(Math.random()*1e3)});d([...a,...n])};f.useEffect(()=>{i(a)},[a]);const p=c=>{const x=a.filter(v=>v.id!==c);d([...x])};return e.jsxs(Lt,{children:[e.jsx(Ot,{children:Z("Галерея и видеотека")}),e.jsx(Gt,{children:"Вы можете загрузить до 5 изображений"}),e.jsxs(At,{children:[e.jsx(Ht,{children:t}),e.jsx(B.Import,{width:30,height:30,fill:"green"}),e.jsx(Wt,{type:"file",ref:o,onChange:s,multiple:!0})]}),e.jsx(Tt,{children:a.length>0?a.map(c=>e.jsxs(Vt,{children:[e.jsx(Zt,{src:c.url},c.id),e.jsx(Ut,{children:e.jsxs(_.Wrapper,{children:[e.jsx(_.Trigger,{children:e.jsx(qt,{width:24,height:24})}),e.jsx(_.Portal,{children:e.jsx(_.Content,{onClick:()=>p(c.id),children:e.jsx(Et,{children:e.jsxs(je,{gap:"space-1",justify:"space-evenly",align:"center",children:[e.jsx(Nt,{width:24,height:24}),Z("Delete")]})})})})]})})]},c.id)):e.jsxs(f.Fragment,{children:[e.jsx(I,{children:t}),e.jsx(I,{children:t}),e.jsx(I,{children:t})]})})]})};var R={},Xt=j;Object.defineProperty(R,"__esModule",{value:!0});var ee=R.default=void 0,Kt=Xt(b()),Jt=e,Qt=(0,Kt.default)((0,Jt.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckCircle");ee=R.default=Qt;var D={},Yt=j;Object.defineProperty(D,"__esModule",{value:!0});var te=D.default=void 0;rr(f);var er=Yt(b()),tr=e;function re(t){if(typeof WeakMap!="function")return null;var i=new WeakMap,o=new WeakMap;return(re=function(a){return a?o:i})(t)}function rr(t,i){if(!i&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var o=re(i);if(o&&o.has(t))return o.get(t);var a={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in t)if(n!=="default"&&Object.prototype.hasOwnProperty.call(t,n)){var s=d?Object.getOwnPropertyDescriptor(t,n):null;s&&(s.get||s.set)?Object.defineProperty(a,n,s):a[n]=t[n]}return a.default=t,o&&o.set(t,a),a}var ir=(0,er.default)((0,tr.jsx)("path",{d:"M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"}),"Facebook");te=D.default=ir;var L={},or=j;Object.defineProperty(L,"__esModule",{value:!0});var ie=L.default=void 0,ar=or(b()),nr=e,sr=(0,ar.default)((0,nr.jsx)("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),"Menu");ie=L.default=sr;var O={},lr=j;Object.defineProperty(O,"__esModule",{value:!0});var w=O.default=void 0,cr=lr(b()),dr=e,pr=(0,cr.default)((0,dr.jsx)("path",{d:"M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star");w=O.default=pr;var W={},xr=j;Object.defineProperty(W,"__esModule",{value:!0});var oe=W.default=void 0,ur=xr(b()),hr=e,gr=(0,ur.default)((0,hr.jsx)("path",{d:"m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorder");oe=W.default=gr;var A={},fr=j;Object.defineProperty(A,"__esModule",{value:!0});var ae=A.default=void 0;br(f);var mr=fr(b()),vr=e;function ne(t){if(typeof WeakMap!="function")return null;var i=new WeakMap,o=new WeakMap;return(ne=function(a){return a?o:i})(t)}function br(t,i){if(!i&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var o=ne(i);if(o&&o.has(t))return o.get(t);var a={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in t)if(n!=="default"&&Object.prototype.hasOwnProperty.call(t,n)){var s=d?Object.getOwnPropertyDescriptor(t,n):null;s&&(s.get||s.set)?Object.defineProperty(a,n,s):a[n]=t[n]}return a.default=t,o&&o.set(t,a),a}var jr=(0,mr.default)((0,vr.jsx)("path",{d:"M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"}),"Twitter");ae=A.default=jr;var H={},wr=j;Object.defineProperty(H,"__esModule",{value:!0});var se=H.default=void 0,yr=wr(b()),kr=e,Sr=(0,yr.default)((0,kr.jsx)("path",{d:"M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"}),"ShoppingCart");se=H.default=Sr;const Cr=r.button`
  background-color: #d00000;
  border: 1px solid rgba(255, 255, 255, 0);
  width: 400px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`,_r=r.div`
  //background-color: rgba(0, 0, 0, 0.38);
  color: #ebedf5;
`,$r=r.div`
  color: white;
  margin-left: 20px;
`,Mr=()=>e.jsx("div",{children:e.jsxs(Cr,{children:[e.jsx(_r,{children:e.jsx(se,{})}),e.jsx($r,{children:"Add to Cart"})]})});var T={},Ir=j;Object.defineProperty(T,"__esModule",{value:!0});var le=T.default=void 0,zr=Ir(b()),Br=e,Fr=(0,zr.default)((0,Br.jsx)("path",{d:"M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"}),"Call");le=T.default=Fr;const Pr=r.button`
  width: 190px;
  height: 45px;
  background-color: rgba(255, 255, 255, 0);
  border: 2px solid rgba(255, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
`,Rr=r.div`
  color: rgba(255, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
`,Dr=r.div`
  padding-left: 5px;
  color: rgba(255, 0, 0, 0.75);
`,Lr=()=>e.jsx("div",{children:e.jsxs(Pr,{children:[e.jsx(Rr,{children:e.jsx(le,{})}),e.jsx(Dr,{children:"Call brand"})]})});var V={},Or=j;Object.defineProperty(V,"__esModule",{value:!0});var ce=V.default=void 0,Wr=Or(b()),Ar=e,Hr=(0,Wr.default)((0,Ar.jsx)("path",{d:"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"}),"Message");ce=V.default=Hr;const Tr=r.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 45px;
  background-color: rgba(255, 255, 255, 0);
  border: 2px solid rgba(255, 0, 0, 0.75);
`,Vr=r.div`
  color: rgba(255, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
`,Ur=r.div`
  padding-left: 5px;
  color: rgba(255, 0, 0, 0.75);
`,Zr=()=>e.jsx("div",{children:e.jsxs(Tr,{children:[e.jsx(Vr,{children:e.jsx(ce,{})}),e.jsx(Ur,{children:"Write message"})]})}),Er=r.button`
  width: 50px;
  height: 50px;
  cursor: pointer;
  transition: border 0.3s;
  background-color: #ffffff;
  color: #000000;
  border: 1px solid rgba(98, 98, 98, 0.5);

  &:hover {
    border: 2px solid #000000;
  }
`,$=()=>e.jsx("div",{children:e.jsx(Er,{children:"36"})}),qr=r.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #e3e3e3;
  padding: 5px;

  width: 180px;
  height: 50px;
`,X=r.button`
  background: transparent;
  border: none;
  font-size: 16px;
  cursor: pointer;
`,Nr=r.span`
  margin: 0 10px;
  font-size: 20px;
`,Gr=()=>{const[t,i]=f.useState(1),o=()=>{i(t-1)},a=()=>{i(t+1)};return e.jsx("div",{children:e.jsxs(qr,{children:[e.jsx(X,{onClick:o,children:"-"}),e.jsx(Nr,{children:t}),e.jsx(X,{onClick:a,children:"+"})]})})},Xr=r.button`
  width: 50px;
  height: 50px;
  cursor: pointer;
  transition: border 0.3s;
  background-color: ${t=>t.color};
  color: white;
  margin-top: 20px;
  margin-left: 15px;
  border: 1px solid #000000;

  &:hover {
    border: 4px solid #ff0000;
  }
`,Kr=()=>{const t=["#FF5733","#3366FF","#33FF33","#FF33FF"];return e.jsx("div",{children:t.map((i,o)=>e.jsx(Xr,{color:i},o))})},Jr=r.div`
  display: inline-block;
  cursor: pointer;
  padding-right: 10px;
`,Qr=r.input.attrs({type:"checkbox"})`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
`,Yr=r.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  background: ${t=>t.isChecked?"blue":"white"};
  border: 1px solid #ccc;
  border-radius: 3px;
  transition: all 0.2s;
`,ei=r.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`,ti=({onChange:t})=>{const[i,o]=f.useState(!1),a=()=>{o(!i),t(!i)};return e.jsx("div",{children:e.jsxs(Jr,{onClick:a,children:[e.jsx(Qr,{checked:i}),e.jsx(Yr,{isChecked:i,children:i&&e.jsx(ei,{viewBox:"0 0 24 24",children:e.jsx("polyline",{points:"20 6 9 17 4 12"})})})]})})},ri=r.div`
  background-color: #ffffff;
  padding: 20px;
  width: 600px;
  margin-top: 20px;
  margin-left: 12px;
`,ii=r.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-weight: bold;
`,z=({characteristics:t})=>e.jsx(ri,{children:t.map((i,o)=>e.jsxs(ii,{children:[e.jsxs("span",{children:[i.name,":"]}),e.jsx("span",{children:i.value})]},o))}),oi=()=>e.jsxs("svg",{id:"Сгруппировать_3759","data-name":"Сгруппировать 3759",xmlns:"http://www.w3.org/2000/svg",width:"32",height:"29",viewBox:"0 0 32 29",children:[e.jsx("g",{id:"basket",transform:"translate(0 5)",children:e.jsx("path",{id:"Контур_16","data-name":"Контур 16",d:"M268.286,249.29a.55.55,0,0,0-.447-.23H247.063l-.347-4.017a.583.583,0,0,0-.566-.543h-2.174a.6.6,0,0,0,0,1.2h1.648l.04.48c.02.157.03.3.04.438.01.073.01.146.02.23a.83.83,0,0,1,.01.156l.1,1.064c.159,1.951.486,5.708,1.062,12.49a3.823,3.823,0,0,0,1.35,2.557l.387.323-.308.407a2.959,2.959,0,0,0-.3,3.037,2.672,2.672,0,0,0,4.705.386,2.97,2.97,0,0,0,.328-2.63l-.238-.7h7.256l-.238.7a2.945,2.945,0,0,0,.337,2.63,2.649,2.649,0,0,0,2.233,1.231,2.883,2.883,0,0,0,0-5.76H250.488a2.471,2.471,0,0,1-2.273-1.586l-.278-.678,17.768-1.1a.581.581,0,0,0,.516-.449l2.174-9.13A.628.628,0,0,0,268.286,249.29Zm-5.876,14.65a1.683,1.683,0,1,1-1.588,1.68A1.64,1.64,0,0,1,262.409,263.94Zm-11.922,0a1.682,1.682,0,1,1-1.6,1.68A1.64,1.64,0,0,1,250.488,263.94Zm14.731-5.729-17.292,1.064-.764-9.016H267.1Z",transform:"translate(-243.41 -244.5)",fill:"#1d1d1d"})}),e.jsx("circle",{id:"Эллипс_35","data-name":"Эллипс 35",cx:"7",cy:"7",r:"7",transform:"translate(18)",fill:"#f21a27"}),e.jsx("text",{id:"_1","data-name":"1",transform:"translate(25 11)",fill:"#fff","font-size":"10","font-family":"SegoeUI-Semibold, Segoe UI","font-weight":"600",children:e.jsx("tspan",{x:"-2.012",y:"0",children:"1"})})]}),ai=()=>e.jsxs("svg",{id:"Компонент_153_1","data-name":"Компонент 153 – 1",xmlns:"http://www.w3.org/2000/svg",width:"27",height:"29",viewBox:"0 0 27 29",children:[e.jsx("defs",{children:e.jsx("clipPath",{id:"clip-path",children:e.jsx("rect",{id:"Прямоугольник_149838","data-name":"Прямоугольник 149838",width:"24",height:"24",fill:"#1d1d1d"})})}),e.jsx("g",{id:"notification",transform:"translate(0 5)","clip-path":"url(#clip-path)",children:e.jsx("g",{id:"notification-2","data-name":"notification",transform:"translate(2.358 0.379)",children:e.jsx("path",{id:"Контур_12503","data-name":"Контур 12503",d:"M47.284,11.933V9.76A7.01,7.01,0,0,0,42.57,3.027V2.043a1.932,1.932,0,1,0-3.857,0v.984A7.01,7.01,0,0,0,34,9.76v2.173a11.037,11.037,0,0,1-2.821,7.434.711.711,0,0,0-.127.738.643.643,0,0,0,.591.414h5.85a3.183,3.183,0,0,0,6.3,0h5.85a.643.643,0,0,0,.591-.414.711.711,0,0,0-.127-.738A11.037,11.037,0,0,1,47.284,11.933ZM40,2.043a.644.644,0,1,1,1.286,0v.714a6.268,6.268,0,0,0-1.286,0Zm.643,19.838a1.942,1.942,0,0,1-1.818-1.362h3.636A1.942,1.942,0,0,1,40.641,21.881Zm-7.614-2.724a12.519,12.519,0,0,0,2.257-7.224V9.76A5.366,5.366,0,1,1,46,9.76v2.173a12.519,12.519,0,0,0,2.257,7.224Z",transform:"translate(-30.999)",fill:"#1d1d1d"})})}),e.jsx("circle",{id:"Эллипс_684","data-name":"Эллипс 684",cx:"7",cy:"7",r:"7",transform:"translate(13)",fill:"#f21a27"}),e.jsx("text",{id:"_2","data-name":"2",transform:"translate(20 11)",fill:"#fff","font-size":"10","font-family":"SegoeUI-Semibold, Segoe UI","font-weight":"600",children:e.jsx("tspan",{x:"-2.776",y:"0",children:"2"})})]}),ni=()=>e.jsx("svg",{id:"favorite",xmlns:"http://www.w3.org/2000/svg",width:"27",height:"24",viewBox:"0 0 27 24",children:e.jsx("g",{id:"Сгруппировать_13","data-name":"Сгруппировать 13",children:e.jsx("g",{id:"Сгруппировать_12","data-name":"Сгруппировать 12",children:e.jsx("path",{id:"Контур_15","data-name":"Контур 15",d:"M267.6,246.478a6.695,6.695,0,0,0-10.748.789,9.55,9.55,0,0,0-.673,1.093l-.121.233-.121-.233a9.563,9.563,0,0,0-.673-1.093,6.695,6.695,0,0,0-10.748-.789,8.231,8.231,0,0,0-1.959,5.444,10.1,10.1,0,0,0,2.752,6.6,61.549,61.549,0,0,0,6.951,6.537l.231.2c.984.85,2.009,1.73,3.094,2.692l.04.03a.665.665,0,0,0,.864,0l.04-.03c1.095-.971,2.129-1.862,3.134-2.722l.171-.152a62.894,62.894,0,0,0,6.971-6.557,10.1,10.1,0,0,0,2.752-6.6A8.231,8.231,0,0,0,267.6,246.478Zm-8.618,17.587c-.9.789-1.838,1.589-2.833,2.449l-.09.091-.09-.091c-.994-.86-1.929-1.66-2.833-2.449-5.585-4.786-9.261-7.943-9.261-12.143a6.847,6.847,0,0,1,1.627-4.564,5.432,5.432,0,0,1,4.158-1.892,5.526,5.526,0,0,1,4.53,2.56,9.874,9.874,0,0,1,1.246,2.489.654.654,0,0,0,1.246,0,9.874,9.874,0,0,1,1.246-2.489,5.526,5.526,0,0,1,4.53-2.56,5.432,5.432,0,0,1,4.158,1.892,6.847,6.847,0,0,1,1.627,4.564C268.244,256.121,264.568,259.278,258.983,264.065Z",transform:"translate(-242.56 -244.14)",fill:"#1d1d1d"})})})}),si=()=>e.jsxs("svg",{id:"user",xmlns:"http://www.w3.org/2000/svg",width:"26",height:"24",viewBox:"0 0 26 24",children:[e.jsx("g",{id:"Сгруппировать_6","data-name":"Сгруппировать 6",transform:"translate(0 13.864)",children:e.jsx("g",{id:"Сгруппировать_5","data-name":"Сгруппировать 5",children:e.jsx("g",{id:"Сгруппировать_4","data-name":"Сгруппировать 4",children:e.jsx("path",{id:"Контур_12","data-name":"Контур 12",d:"M28.794,18.75c-7.1,0-11,3.379-11,9.508a.629.629,0,0,0,.622.628H39.168a.624.624,0,0,0,.622-.628C39.79,22.129,35.883,18.75,28.794,18.75Zm-9.746,8.88.015-.284c.363-4.874,3.633-7.34,9.731-7.34s9.368,2.467,9.724,7.34l.022.284Z",transform:"translate(-17.79 -18.75)",fill:"#1d1d1d"})})})}),e.jsx("g",{id:"Сгруппировать_9","data-name":"Сгруппировать 9",transform:"translate(5.36)",children:e.jsx("g",{id:"Сгруппировать_8","data-name":"Сгруппировать 8",children:e.jsx("g",{id:"Сгруппировать_7","data-name":"Сгруппировать 7",children:e.jsx("path",{id:"Контур_13","data-name":"Контур 13",d:"M30.754.35A5.581,5.581,0,0,0,25.11,6.121a5.914,5.914,0,0,0,5.644,6.144A5.919,5.919,0,0,0,36.4,6.121,5.585,5.585,0,0,0,30.754.35Zm0,10.667a4.673,4.673,0,0,1-4.4-4.9,4.393,4.393,0,1,1,8.783,0A4.667,4.667,0,0,1,30.754,11.017Z",transform:"translate(-25.11 -0.35)",fill:"#1d1d1d"})})})}),e.jsx("circle",{id:"Эллипс_397","data-name":"Эллипс 397",cx:"3",cy:"3",r:"3",transform:"translate(20)",fill:"#f21a27"})]}),li=()=>e.jsxs("svg",{id:"Сгруппировать_3758","data-name":"Сгруппировать 3758",xmlns:"http://www.w3.org/2000/svg",width:"31",height:"29",viewBox:"0 0 31 29",children:[e.jsx("g",{id:"compare",transform:"translate(0 5)",children:e.jsx("g",{id:"Сгруппировать_11","data-name":"Сгруппировать 11",children:e.jsx("path",{id:"Контур_14","data-name":"Контур 14",d:"M25.956,22.17l-.022.011L22.2,13.132h1.7a.539.539,0,1,0,0-1.077h-10.4V10.5a.553.553,0,0,0-1.105,0V12.05H2.006a.539.539,0,1,0,0,1.077H3.78L.044,22.17a.527.527,0,0,0-.044.2,4.538,4.538,0,0,0,4.595,4.478A4.538,4.538,0,0,0,9.19,22.369a.527.527,0,0,0-.044-.2l-3.73-9.048H12.4V29.775c-2.636.194-4.7,1.756-4.7,3.646a.546.546,0,0,0,.553.539H17.65a.546.546,0,0,0,.553-.539c0-1.89-2.061-3.452-4.7-3.646V13.122h7.057L16.854,22.17a.527.527,0,0,0-.044.2,4.6,4.6,0,0,0,9.19,0A.527.527,0,0,0,25.956,22.17ZM4.592,25.779a3.467,3.467,0,0,1-3.443-2.86H8.013A3.466,3.466,0,0,1,4.592,25.779Zm3.222-3.937H1.382L4.6,14.026ZM17,32.883H8.9c.409-1.158,2.094-2.052,4.045-2.052S16.589,31.725,17,32.883ZM21.38,14.032l3.211,7.81H18.159Zm0,11.747v.005a3.466,3.466,0,0,1-3.421-2.865h6.863A3.467,3.467,0,0,1,21.38,25.779Z",transform:"translate(0 -9.96)",fill:"#1d1d1d"})})}),e.jsx("circle",{id:"Эллипс_34","data-name":"Эллипс 34",cx:"7",cy:"7",r:"7",transform:"translate(17)",fill:"#f21a27"}),e.jsx("text",{id:"_1","data-name":"1",transform:"translate(24 11)",fill:"#fff","font-size":"10","font-family":"SegoeUI-Semibold, Segoe UI","font-weight":"600",children:e.jsx("tspan",{x:"-2.012",y:"0",children:"1"})})]}),ci=r.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #fdfdfd;
  z-index: 9;
  overflow-y: scroll;
  margin: 0;
  padding: 0;
`,di=r.div`
  width: 100%;
  height: 100px;
  background-color: #ffffff;
  color: #626262;
  border: 1px solid rgba(153, 153, 153, 0.25);
  padding-top: 40px;
  padding-left: 150px;
`,pi=r.div`
  //background-color: rgba(117, 105, 105, 0.32);
  margin-left: -50px;
  margin-top: -10px;
  width: 171px;
  //background-color: #0177c1;
`,xi=r.div`
  //background-color: rgba(0, 0, 0, 0.31);
  color: rgba(0, 0, 0, 0.75);
  width: 40px;
  height: 40px;
  margin-left: 170px;
  margin-top: -33px;
`,ui=r.div`
  //background-color: rgba(0, 0, 0, 0.27);
  width: 108px;
  height: 23px;
  font-size: 17px;
  font-weight: bold;
  margin-left: 39px;
  margin-top: -30px;
`,hi=r.div`
  display: flex;
  align-items: center;
  width: 450px;
  background-color: #ffffff;
  border: 1px solid rgba(153, 153, 153, 0.25);
  border-radius: 4px;
  padding: 8px;
  margin-left: 330px;
  margin-top: -40px;
`,gi=r.div`
  //background-color: rgba(0, 0, 0, 0.3);
  color: rgba(128, 128, 128, 0.75);
  height: 25px;
  margin-left: 310px;
  margin-top: -5px;
`,fi=r.div`
  //background-color: gray;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 250px;
  height: 40px;
  margin-left: 1100px;
  margin-top: -40px;
`,mi=r.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  width: 100%;
`,vi=r.div`
  //background-color: rgb(22, 47, 93);
  width: 50%;
  height: 100%;
`,bi=r.div`
  //background-color: rgba(236, 0, 0, 0.2);
  width: 50%;
`,ji=r.div`
  background-color: rgb(255, 255, 255);
  width: 100%;
  display: flex;
  justify-content: left;
  margin-top: 50px;
`,wi=r.div`
  //background-color: rgba(0, 0, 0, 0.32);
  width: 500px;
  font-size: 14px;
  color: gray;
  margin-top: 20px;
  margin-left: 100px;
`,yi=r.div`
  display: flex;
  margin-top: 20px;
  margin-left: 110px;
`,ki=r.img`
  background-color: rgba(128, 128, 128, 0.2);
  width: 550px;
  height: 500px;
`,Si=r.div`
  //background-color: rgba(0, 0, 255, 0.56);
  width: 90px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 10px;
`,Ci=r.img`
  background-color: rgba(0, 0, 255, 0.2);
  width: 100px;
  height: 100px;
  border: 1px solid rgba(153, 153, 153, 0.25);
  border-radius: 4px;
`,_i=r.img`
  background-color: rgba(0, 0, 255, 0.2);
  width: 100px;
  height: 100px;
  border: 1px solid rgba(153, 153, 153, 0.25);
  border-radius: 4px;
`,$i=r.img`
  background-color: rgba(0, 0, 255, 0.2);
  width: 100px;
  height: 100px;
  border: 1px solid rgba(153, 153, 153, 0.25);
  border-radius: 4px;
`,Mi=r.img`
  background-color: rgba(0, 0, 255, 0.2);
  width: 100px;
  height: 100px;
  border: 1px solid rgba(153, 153, 153, 0.25);
  border-radius: 4px;
`,Ii=r.div`
  //background-color: rgba(0, 0, 0, 0.29);
  display: flex;
  height: 40px;
  font-size: 20px;
  font-weight: bold;
  margin-top: 56px;
  margin-left: 20px;
`,zi=r.div`
  //background-color: rgba(0, 0, 0, 0.24);
  color: #2364bf;
  width: 35px;
  height: 35px;
  margin-left: 15px;
  margin-top: -5px;
`,Bi=r.div`
  display: flex;
  justify-content: space-around;
  //background-color: rgba(0, 0, 0, 0.52);
  width: 110px;
  margin-left: 15px;
  color: #2364bf;
`,Fi=r.div`
  //background-color: rgba(0, 0, 0, 0.49);
  width: 25px;
  display: flex;
  margin-left: 125px;
  margin-top: -25px;
`,Pi=r.div`
  //background-color: rgba(128, 128, 128, 0.44);
  display: flex;
  width: 150px;
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
  margin-left: 20px;
`,Ri=r.div`
  color: gray;
  margin-left: 23px;
`,Di=r.div`
  background-color: white;
  position: relative;
  height: 100px;
  width: 70%;
  margin-top: 20px;
  margin-left: 20px;

  ::before,
  ::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: 1.5px;
    background: rgba(98, 98, 98, 0.05);
  }

  ::before {
    top: 0;
  }

  ::after {
    bottom: 0;
  }
`,Li=r.div`
  //background-color: rgba(0, 0, 0, 0.47);
  width: 130px;
  margin-top: 20px;
  font-weight: bold;
  padding-top: 10px;
`,Oi=r.div`
  margin-top: -15px;
  padding-left: 140px;
`,Wi=r.div`
  padding-top: 10px;
  padding-left: 140px;
`,Ai=r.div`
  padding-top: 10px;
  padding-left: 140px;
`,Hi=r.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f6f6f6;
  margin-top: 20px;
  margin-left: 20px;
  width: 500px;
  height: 200px;
`,Ti=r.div`
  //background-color: rgba(0, 0, 0, 0.22);
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  margin-left: 130px;
`,Vi=r.img`
  width: 100px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 1px solid rgba(153, 153, 153, 0.25);
  margin-top: 20px;
  font-size: 15px;
`,Ui=r.div`
  margin-left: 20px;
  margin-top: 20px;
  font-weight: bold;
`,Zi=r.div`
  //background-color: rgba(75, 64, 64, 0.37);
  color: #2364bf;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  //width: 120px;
  margin-top: 10px;
`,Ei=r.div`
  //background-color: rgba(33, 40, 70, 0.21);
  width: 390px;
  margin-left: 30px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`,qi=r.div`
  margin-top: 20px;
  margin-left: 20px;
  font-weight: bold;
`,Ni=r.div`
  display: flex;
  //background-color: rgba(0, 0, 0, 0.38);
  width: 100px;
  justify-content: space-around;
  align-items: center;
  font-weight: bold;
  color: mediumpurple;
  margin-left: 10px;
  margin-top: 15px;
`,Gi=r.div`
  //background-color: rgba(0, 0, 0, 0.43);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 505px;
  margin-top: 10px;
  margin-left: 15px;
`,k=r.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border: 1px solid rgba(153, 153, 153, 0.75);
`,Xi=r.div`
  //background-color: rgba(0, 0, 0, 0.48);
  width: 250px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-left: 15px;
  margin-top: 10px;
  font-weight: bold;
`,Ki=r.div``,Ji=r.div``,Qi=r.div`
  margin-top: 20px;
  margin-left: 15px;
  font-weight: bold;
`,Yi=r.div`
  //background-color: rgba(0, 0, 0, 0.46);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 250px;
  height: 50px;
  margin-left: 15px;
  margin-top: 20px;
`,eo=r.div`
  //background-color: rgba(0, 0, 0, 0.36);
  display: flex;
  align-items: center;
  flex-direction: row;
  font-weight: bold;
  height: 30px;
  width: 300px;
  margin-left: 15px;
  margin-top: 20px;
`,to=r.div`
  width: 620px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  margin-top: 20px;
`,ro=r.div`
  //background-color: rgba(0, 0, 0, 0.47);
  width: 120px;
  font-weight: bold;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  margin-left: 15px;
`,io=r.div``,oo=r.div`
  width: 100%;
  margin-left: 200px;
`,ao=r.div`
  font-weight: bold;
  font-size: 30px;
`,no=r.div`
  width: 400px;
  margin-top: 20px;
`,so=r.div`
  font-size: 28px;
  font-weight: bold;
  color: #0077ff;
  margin-top: 20px;
`,lo=r.img`
  //position: absolute;
  margin-top: 100px;
  width: 100%;
`,co=t=>{};let po;console.log("Checkbox is checked:",po);const xo=()=>e.jsxs(hi,{children:[e.jsx("span",{children:"Type here..."}),e.jsxs(gi,{children:[e.jsx(J,{style:{fontSize:"30px"}}),e.jsx("i",{className:"fas fa-search"})]})]}),Do=()=>{const{t}=we(),i=[{name:"Характеристика 1",value:"Значение 1"},{name:"Характеристика 2",value:"Значение 2"},{name:"Характеристика 3",value:"Значение 3"}];return e.jsx("div",{children:e.jsxs(ci,{children:[e.jsxs(di,{children:[e.jsx(pi,{children:e.jsx(ye,{fill:"#0177C1",size:30})}),e.jsxs(xi,{children:[e.jsx(ie,{style:{fontSize:"33px"}}),e.jsx(ui,{children:t("Assortment")})]}),e.jsx(xo,{}),e.jsxs(fi,{children:[e.jsx(oi,{}),e.jsx(ai,{}),e.jsx(ni,{}),e.jsx(si,{}),e.jsx(li,{})]})]}),e.jsxs(mi,{children:[e.jsxs(vi,{children:[e.jsx(wi,{children:"Main > *Category name* > *Subcategory name* > *Product name*"}),e.jsxs(yi,{children:[e.jsxs(Si,{children:[e.jsx(Ci,{src:"public/logo-alpine.jpg"}),e.jsx(_i,{src:"public/logo-alpine.jpg"}),e.jsx($i,{src:"public/logo-alpine.jpg"}),e.jsx(Mi,{src:"public/logo-alpine.jpg"})]}),e.jsx(ki,{src:"public/logo-alpine.jpg"})]})]}),e.jsxs(bi,{children:[e.jsxs(Ii,{children:["Product Name",e.jsx(zi,{children:e.jsx(ee,{style:{fontSize:"30px"}})})]}),e.jsxs(Bi,{children:[e.jsx(w,{style:{fontSize:"25px"}}),e.jsx(w,{style:{fontSize:"25px"}}),e.jsx(w,{style:{fontSize:"25px"}}),e.jsx(w,{style:{fontSize:"25px"}})]}),e.jsx(Fi,{children:e.jsx(oe,{style:{fontSize:"25px"}})}),e.jsxs(Pi,{children:["123 456USD",e.jsx(Ce,{style:{fontSize:"30px"}})]}),e.jsx(Ri,{children:"36 months/4.647USD"}),e.jsxs(Di,{children:[e.jsx(Li,{children:"Wholesale price"}),e.jsx(Oi,{children:"90 000 USD (1-10 pieces)"}),e.jsx(Wi,{children:"80 000 USD (10-50 pieces)"}),e.jsx(Ai,{children:"70 000 USD (More than 50 pieces)"})]}),e.jsxs(Hi,{children:[e.jsxs(Ti,{children:[e.jsx(Vi,{src:"public/logo-alpine.jpg"}),e.jsx(Ui,{children:"Name of brand"})]}),e.jsxs(Zi,{children:[e.jsx(w,{}),e.jsx(w,{}),e.jsx(w,{}),e.jsx(w,{}),e.jsx(w,{})]}),e.jsxs(Ei,{children:[e.jsx(Zr,{}),e.jsx(Lr,{})]})]}),e.jsx(qi,{children:"Aviability: produced 1-10 days"}),e.jsxs(Ni,{children:[e.jsx(Ae,{}),"Get gift"]}),e.jsxs(Gi,{children:[e.jsx(k,{src:"public/logo-alpine.jpg"}),e.jsx(k,{src:"public/logo-alpine.jpg"}),e.jsx(k,{src:"public/logo-alpine.jpg"}),e.jsx(k,{src:"public/logo-alpine.jpg"}),e.jsx(k,{src:"public/logo-alpine.jpg"}),e.jsx(k,{src:"public/logo-alpine.jpg"}),e.jsx(k,{src:"public/logo-alpine.jpg"})]}),e.jsxs(Xi,{children:[e.jsx(Ki,{children:"Sold in: Country"}),e.jsx(Ji,{children:"Delivery: 1-3 days"})]}),e.jsx(Kr,{}),e.jsx(Qi,{children:"Sizes:"}),e.jsxs(Yi,{children:[e.jsx($,{}),e.jsx($,{}),e.jsx($,{}),e.jsx($,{})]}),e.jsxs(eo,{children:[e.jsx(ti,{onChange:co}),"Installation: 3000 USD",e.jsx(He,{})]}),e.jsxs(to,{children:[e.jsx(Gr,{}),e.jsx(Mr,{})]}),e.jsxs(ro,{children:["Share",e.jsx(te,{}),e.jsx(ae,{})]}),e.jsxs(io,{children:[e.jsx(z,{characteristics:i}),e.jsx("h1",{children:"Основные параметры"}),e.jsx(z,{characteristics:i}),e.jsx("h1",{children:"Особенности"}),e.jsx(z,{characteristics:i})]})]})]}),e.jsx(ji,{children:e.jsxs(oo,{children:[e.jsx(ao,{children:"Reviews"}),e.jsx(no,{children:"Here are the reviews of all your customers: Lorem Ipsum Lorem Ipsum Lorem Ipsum"}),e.jsx(so,{children:"View..."})]})}),e.jsx(lo,{src:"public/footertbuy.png"})]})})};export{zo as B,Bo as F,Po as M,Ro as P,Fo as T,Do as a,Q as d};
