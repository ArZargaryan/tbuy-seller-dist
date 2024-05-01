import{u as s,r as i,j as e,e as ie,f as B,h as re,t as r,b as Fe,i as P,T as Be,d as De}from"./index-786c574d.js";import{d as ae}from"./Close-dc0f1023.js";import{d as ce}from"./ExpandMore-173a63b7.js";import{d as Me}from"./KeyboardArrowDown-73c84a61.js";import{d as Re,T as We,B as Ae,F as Le,M as G,P as le,a as Ne}from"./preview-page-b4130fd4.js";import{d as Ue}from"./Check-96177e91.js";import{D as Ee,a as He}from"./DialogContent-3e6d5a95.js";import{B as D}from"./Button-bff4ffb1.js";import{D as Xe}from"./DialogTitle-1688b05e.js";import{L as _e}from"./Menu-0bae6528.js";import{L as Ge}from"./ListItem-cd0ef9f9.js";import{L as Oe}from"./ListItemText-4684d023.js";import{I as Ye}from"./IconButton-993b12e6.js";import{F as I}from"./FormControlLabel-49484eca.js";import{C as O}from"./Checkbox-26065688.js";import{R as Y}from"./Radio-c1837ad2.js";import{T as M}from"./TextField-6d876023.js";import{T as q,a as qe}from"./Tabs-a6434c6e.js";import"./createSvgIcon-767dd3f6.js";import"./createSvgIcon-ccd3771d.js";import"./Cancel-6c953d9d.js";import"./SwitchBase-4200c929.js";import"./useFormControl-9fe0975f.js";import"./ButtonBase-c77f3e05.js";import"./DeleteOutline-95eecca3.js";import"./MenuItem-4e8fe90f.js";import"./listItemIconClasses-0096aaac.js";import"./dividerClasses-a72384a6.js";import"./listItemTextClasses-4324c96d.js";import"./CardGiftcard-781359c6.js";import"./HelpOutline-b84870db.js";import"./useSlotProps-0bf0a99e.js";import"./Paper-0d57e966.js";import"./react-is.production.min-a192e302.js";const Je=s(Xe)`
  & .MuiDialog-paper {
    margin: 0;
    width: calc(100% - 64px);
    max-width: none;
    height: 500px;
    max-height: 900px;
  }
`,Ke=s(He)`
  padding: 20px;
  display: flex;
  flex-direction: row;
`,Qe=s.div`
  min-width: 200px;
  padding: 10px;
  border-right: 1px solid #e0e0e0;
`,Ze=s(_e)`
  width: 100%;
`,Ve=s(Ge)`
  cursor: pointer;

  &:hover {
    background-color: #f4f4f4;
  }

  &.selected {
    background-color: #e6f7ff;
  }
`,et=s(Oe)`
  flex-grow: 1;
  color: ${T=>T.isType?"#1976d2":"inherit"};
`,tt=s(Ye)`
  margin: 0;
  padding: 10px;
  color: black;
  position: absolute;
  top: 10px;
  right: 10px;
`,st=({open:T,handleClose:w})=>{const[F]=i.useState([{name:"Электроника",subcategories:[{name:"Компьютеры и аксессуары",subcategories:[{name:"Ноутбуки"},{name:"Клавиатуры"}]},{name:"Телефоны и гаджеты",subcategories:[{name:"Смартфоны"},{name:"Чехлы"}]}]},{name:"Бытовая техника",subcategories:[{name:"Крупная техника",subcategories:[{name:"Холодильники"},{name:"Стиральные машины"}]},{name:"Мелкая техника для кухни",subcategories:[{name:"Тостеры"},{name:"Блендеры"}]}]}]),[j,$]=i.useState([]),R=(m,u)=>{const x=j.slice(0,u),k=x[x.length-1];(k==null?void 0:k.name)===m.name?$(x.slice(0,u-1)):(x.push(m),$(x))},W=(m,u)=>e.jsx(Qe,{children:e.jsx(Ze,{children:m.map((x,k)=>{var L,H;return e.jsxs(Ve,{onClick:()=>R(x,u+1),className:((L=j[u])==null?void 0:L.name)===x.name?"selected":"",children:[e.jsx(et,{primary:x.name,isType:u>1&&!x.subcategories}),x.subcategories&&(((H=j[u])==null?void 0:H.name)===x.name?e.jsx(Re,{}):e.jsx(ce,{}))]},k)})})}),A=()=>{console.log("Выбранные категории:",j),w()};return e.jsxs(Je,{open:T,onClose:w,children:[e.jsx(tt,{onClick:w,children:e.jsx(ae,{})}),e.jsxs(Ke,{children:[W(F,0),j.map((m,u)=>m.subcategories?W(m.subcategories,u+1):null)]}),e.jsx(Ee,{children:e.jsxs(D,{onClick:A,color:"primary",children:["Confirm ",e.jsx(Ue,{})]})})]})},rt=s.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`,lt=s.div`
  width: 850px;
  height: 600px;
  background-color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  flex-direction: column;
`,nt=s.span`
  //background-color: rgba(255, 0, 0, 0.44);
  font-weight: bold;
  font-size: 25pt;
  margin-top: 80px;
`,ot=s.text`
  margin-top: 20px;
`,it=s.div`
  margin-top: 40px;
  width: 500px;
  height: 100px;
`,at=s.div`
  //background-color: rgba(255, 0, 0, 0.55);
  width: 700px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  margin-top: 220px;
  margin-left: 20px;
`,ct=({open:T,onClose:w})=>{if(!T)return null;const F=ie(),j=[{label:"param1",value:"data1"},{label:"param1",value:"data1"},{label:"param1",value:"data1"}],$=()=>{F(""),w()};return e.jsxs(rt,{children:[e.jsx("div",{children:e.jsxs(lt,{children:[e.jsx(nt,{children:"Искать категорию"}),e.jsx(ot,{children:"Here you can select the category of products that are available for selection"}),e.jsx(it,{children:e.jsx(B,{label:"",options:j,placeholder:"Type here...",onChange:()=>{}})}),e.jsxs(at,{children:[e.jsx(re,{style:{width:200},type:"submit",onClick:w,large:"S",appearance:"white",stretched:!0,variant:"bordered",children:r("Cancel")}),e.jsx(re,{style:{width:450},type:"submit",large:"S",appearance:"white",stretched:!0,variant:"primary",onClick:$,children:r("Select")})]})]})}),")"]})},dt=s.table`
  border-collapse: collapse;
  width: 100%;
`,U=s.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`,b=s.th`
  text-align: left;
  padding: 8px;
`,l=s.td`
  text-align: center;
  padding: 8px;
`,f=s.input.attrs({type:"checkbox"})`
  /* Стилизуй чекбокс здесь */
`,y=s.input.attrs({type:"text"})`
  width: 100px;
`,xt=()=>e.jsxs(dt,{children:[e.jsx("thead",{children:e.jsxs(U,{children:[e.jsx(b,{}),e.jsx(b,{}),e.jsx(b,{}),e.jsx(b,{}),e.jsx(b,{}),e.jsx(b,{}),e.jsx(b,{}),e.jsx(b,{}),e.jsx(b,{})]})}),e.jsxs("tbody",{children:[e.jsxs(U,{children:[e.jsx(l,{children:e.jsx(f,{})}),e.jsx(l,{children:"XS"}),e.jsx(l,{children:e.jsx(y,{})}),e.jsx(l,{children:e.jsx(f,{})}),e.jsx(l,{children:"XS"}),e.jsx(l,{children:e.jsx(y,{})}),e.jsx(l,{children:e.jsx(f,{})}),e.jsx(l,{children:"XS"}),e.jsx(l,{children:e.jsx(y,{})})]}),e.jsxs(U,{children:[e.jsx(l,{children:e.jsx(f,{})}),e.jsx(l,{children:"S"}),e.jsx(l,{children:e.jsx(y,{})}),e.jsx(l,{children:e.jsx(f,{})}),e.jsx(l,{children:"S"}),e.jsx(l,{children:e.jsx(y,{})}),e.jsx(l,{children:e.jsx(f,{})}),e.jsx(l,{children:"S"}),e.jsx(l,{children:e.jsx(y,{})})]}),e.jsxs(U,{children:[e.jsx(l,{children:e.jsx(f,{})}),e.jsx(l,{children:"M"}),e.jsx(l,{children:e.jsx(y,{})}),e.jsx(l,{children:e.jsx(f,{})}),e.jsx(l,{children:"M"}),e.jsx(l,{children:e.jsx(y,{})}),e.jsx(l,{children:e.jsx(f,{})}),e.jsx(l,{children:"M"}),e.jsx(l,{children:e.jsx(y,{})})]})]})]}),ht=s.table`
  border-collapse: collapse;
  width: 100%;
`,E=s.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`,v=s.th`
  text-align: left;
  padding: 8px;
`,n=s.td`
  text-align: center;
  padding: 8px;
`,S=s.input.attrs({type:"checkbox"})``,C=s.input.attrs({type:"text"})`
  width: 100px;
`,pt=()=>e.jsxs(ht,{children:[e.jsx("thead",{children:e.jsxs(E,{children:[e.jsx(v,{}),e.jsx(v,{}),e.jsx(v,{}),e.jsx(v,{}),e.jsx(v,{}),e.jsx(v,{}),e.jsx(v,{}),e.jsx(v,{}),e.jsx(v,{})]})}),e.jsxs("tbody",{children:[e.jsxs(E,{children:[e.jsx(n,{children:e.jsx(S,{})}),e.jsx(n,{children:"XS"}),e.jsx(n,{children:e.jsx(C,{})}),e.jsx(n,{children:e.jsx(S,{})}),e.jsx(n,{children:"XS"}),e.jsx(n,{children:e.jsx(C,{})}),e.jsx(n,{children:e.jsx(S,{})}),e.jsx(n,{children:"XS"}),e.jsx(n,{children:e.jsx(C,{})})]}),e.jsxs(E,{children:[e.jsx(n,{children:e.jsx(S,{})}),e.jsx(n,{children:"S"}),e.jsx(n,{children:e.jsx(C,{})}),e.jsx(n,{children:e.jsx(S,{})}),e.jsx(n,{children:"S"}),e.jsx(n,{children:e.jsx(C,{})}),e.jsx(n,{children:e.jsx(S,{})}),e.jsx(n,{children:"S"}),e.jsx(n,{children:e.jsx(C,{})})]}),e.jsxs(E,{children:[e.jsx(n,{children:e.jsx(S,{})}),e.jsx(n,{children:"M"}),e.jsx(n,{children:e.jsx(C,{})}),e.jsx(n,{children:e.jsx(S,{})}),e.jsx(n,{children:"M"}),e.jsx(n,{children:e.jsx(C,{})}),e.jsx(n,{children:e.jsx(S,{})}),e.jsx(n,{children:"M"}),e.jsx(n,{children:e.jsx(C,{})})]})]})]}),ne=[{label:"Black",value:"black"},{label:"Red",value:"red"},{label:"Green",value:"green"},{label:"Blue",value:"blue"},{label:"Yellow",value:"#ffd200"},{label:"Grey",value:"grey"}];r("ProductSizesColors"),r("ProductSizesOnly");const jt=["ConditionNew","ConditionUsed","Restored"],ut=[{value:"1",label:"In stock"},{value:"2",label:"Under the order"},{value:"3",label:"Order from manufacturer"}],gt=[{value:"Small",label:"Small"},{value:"Medium",label:"Medium"},{value:"Large",label:"Large"}],mt=[{value:"AMD",label:"AMD"},{value:"RUB",label:"RUB"},{value:"USD",label:"USD"}],bt=[{id:"1",name:"Категория 1",children:[{id:"2",name:"Подкатегория 1-1"}]},{id:"3",name:"Категория 2"}],ft=s.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  padding: 20px;
  margin-top: 30px;
  width: 900px;
`,p=s.div`
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 10px;
`,yt=s.div`
  color: gray;
`,o=s.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`,oe=s.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  margin-bottom: 20px;
`,vt=s.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top: 5px solid #ebedf5;
`,J=s.div`
  margin-right: 20px;
  width: 400px;
`,K=s.div`
  display: flex;
  flex-direction: column;
  width: 400px;
`,St=s.button`
  background: linear-gradient(to right, #0479c3, rgba(0, 119, 255, 0.5));
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: unset;
  font-size: 15px;
  width: 180px;
  height: 44px;
  border: 0 solid rgba(0, 0, 0, 0);
  cursor: pointer;
`,Ct=s.div`
  display: flex;
  flex-direction: row;
  gap: 90px;
`,wt=s.div`
  display: flex;
  flex-direction: row;
  margin-top: -20px;
`,kt=s(qe)``,Pt=s.button`
  color: #626262;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  height: 50px;
  border: 1px solid rgba(0, 0, 0, 0.23);
  border-radius: 0;
  text-transform: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
`,Tt=s.button`
  display: flex;
  background-color: white;
  color: #626262;
  width: 400px;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  border: 1px solid rgba(0, 0, 0, 0.23);
  border-radius: 0;
  text-transform: none;

  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
`,g=s.div`
  width: 400px;
`,$t=s.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 20px;
  gap: 20px;
`,zt=s(M)`
  & .MuiInputBase-root {
    height: 150px;
    width: 860px;
    border-radius: 0;
  }
`,It=s.div`
  margin-left: 10px;
  margin-top: 20px;
  font-weight: bold;
  font-size: 28px;
`,Ft=s.div`
  margin-left: 10px;
  margin-top: 20px;
`;s.div`
  margin-top: 20px;
  margin-left: 10px;
  padding: 2px;
  display: flex;
  background-color: white;
  color: #0177c1;
  border: 2px solid #0177c1;
`;s.div`
  background: linear-gradient(to right, #0479c3, rgba(0, 119, 255, 0.5));
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-top: 20px;
  font-weight: unset;
  font-size: 15px;
  width: 300px;
  height: 40px;
  border: 0 solid rgba(0, 0, 0, 0);
  cursor: pointer;
`;const Bt=s.div`
  margin-top: 20px;
  margin-left: 10px;
  padding: 2px;
  display: flex;
  background-color: white;
  color: #0177c1;
  border: 2px solid #0177c1;
`,Dt=s.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  padding: 20px;
  margin-top: 30px;
  width: 900px;
`,Mt=s.div`
  margin-top: 20px;
`,gs=()=>{const[T,w]=i.useState("");Fe(De);const[F,j]=i.useState(!1),[$,R]=i.useState(!1),[W,A]=i.useState(!1),[m,u]=i.useState([]),[x,k]=i.useState(!1);i.useState(jt[0]),i.useState([]);const[L,H]=i.useState([]),[Rt,Q]=i.useState();i.useState();const[de,xe]=i.useState(!1),[he,pe]=i.useState(!1);ie();const[je,ue]=i.useState(!1),[X,Z]=i.useState([]);i.useState("");const[N,ge]=i.useState(!1),[V,me]=i.useState(!1),[ee,be]=i.useState(!1),fe=()=>R(!0),[a,h]=i.useState({fullNameProduct:"",selectedCategory:"",nameProduct:"",radioValue1:"",selectedBrand:"",modelProduct:"",colorProduct:[],selectedSize:[],condition:"",selectedAvailability:"",amountOfDaysProduct:"",selectedCountry:"",boxLength:"",boxWidth:"",boxHeight:"",boxWeight:"",remainderProduct:"",currency:"",costPrice:"",checkWholesalePrice:!1,priceWholesale:"",priceValid:"",priceSelling:"",descriptionText:{arm:"",eng:"",rus:""},productImages:[]}),_=()=>{pe(!0)},ye=()=>{A(!0)},ve=()=>{A(!1)},te=(t,c,d)=>{const z=`${t} ${c} ${d}`;h({...a,fullNameProduct:z}),w(z)},Se=()=>{j(!0)},Ce=()=>{j(!1)},we=()=>{k(!0)},ke=()=>{k(!1)},Pe=()=>{ue(!je),Z([...X,{}])},Te=t=>{Z(X.filter((c,d)=>d!==t))},$e=()=>R(!1),se=t=>{const{value:c,checked:d}=t.target;c==="size"?me(d):c==="colorSize"&&be(d)},ze=t=>{xe(t.target.checked),ge(!t.target.checked)};return e.jsxs(e.Fragment,{children:[e.jsxs(ft,{children:[e.jsxs(o,{children:[e.jsx(p,{children:"Добавить продукт"}),e.jsx(K,{children:e.jsx(P,{disabled:!0,large:"S",type:"text",label:r("Наименование товара"),value:T,placeholder:`${r("Товар")}...`})})]}),e.jsxs(o,{children:[e.jsxs("div",{children:[e.jsxs(Tt,{onClick:fe,children:[e.jsx(Be,{variant:"subtitle1",children:"Категория"}),e.jsx(ce,{})]}),e.jsx(st,{open:$,categories:bt,handleClose:$e})]}),e.jsx(K,{children:e.jsxs(Pt,{onClick:ye,children:["Искать категории",e.jsx(Me,{})]})}),e.jsx(ct,{open:W,onClose:ve})]}),e.jsx(o,{children:e.jsxs(Ct,{children:[e.jsx(I,{value:"colorSize",control:e.jsx(O,{}),label:"Товар содержит разные цвета и размеры",checked:ee,onChange:se}),e.jsx(I,{value:"size",control:e.jsx(O,{}),label:"Продукт содержит разные размеры",checked:V,onChange:se})]})}),e.jsxs(o,{children:[e.jsx(J,{children:e.jsx(B,{label:r("Бренд"),options:m,onChange:(t,c)=>{const d=(t==null?void 0:t.label)??"";te(d,a.nameProduct,a.modelProduct),h(z=>({...z,selectedBrand:d}))},placeholder:`${r("SelectorPlaceholder")}...`})}),e.jsx(St,{onClick:Se,children:r("TrademarkRegistration")}),e.jsx(We,{open:F,onClose:Ce}),e.jsx(Ae,{openModal:we}),x&&e.jsx(Le,{showModal:x,closeModal:ke})]}),e.jsxs(o,{children:[e.jsx(g,{children:e.jsx(P,{large:"S",type:"text",label:r("Модель"),placeholder:`${r("Type here")}...`,onChange:t=>{te(a.selectedBrand,a.nameProduct,t.target.value),h({...a,modelProduct:t.target.value})}})}),e.jsx(g,{children:e.jsx(G,{options:ne,label:r("Цвет"),placeholder:`${r("SelectorPlaceholder")}...`,onChange:t=>{const c=t==null?void 0:t.map(d=>d.label);h({...a,colorProduct:c})}})})]}),e.jsx(o,{children:e.jsx(p,{children:"Размер"})}),e.jsx(o,{children:e.jsx(g,{children:e.jsx(G,{options:gt,label:r("Размер"),placeholder:`${r("SelectorPlaceholder")}...`,onChange:t=>{const c=t==null?void 0:t.map(d=>d.label);h({...a,selectedSize:c})}})})}),e.jsx(o,{children:e.jsx(p,{children:"Состояние"})}),e.jsx(o,{children:e.jsxs(wt,{children:[e.jsx(I,{value:"new",control:e.jsx(Y,{}),label:"Новый"}),e.jsx(I,{value:"used",control:e.jsx(Y,{}),label:"Б/у"}),e.jsx(I,{value:"restored",control:e.jsx(Y,{}),label:"Восстановленный"})]})}),e.jsx(o,{children:e.jsx(p,{children:"Доступность"})}),e.jsxs(o,{children:[e.jsx(J,{children:e.jsx(B,{options:ut,label:r("Доступность"),onChange:t=>{const c=t!=null&&t.label?t.label:"";h({...a,selectedAvailability:c})},placeholder:`${r("SelectorPlaceholder")}...`})}),e.jsx(g,{children:e.jsx(P,{large:"S",type:"text",label:r("Количество дней"),placeholder:`${r("Type here")}...`,onChange:t=>{h({...a,amountOfDaysProduct:t.target.value})}})})]}),e.jsx(o,{children:e.jsx(p,{children:"Страна выпуска"})}),e.jsx(o,{children:e.jsx(J,{children:e.jsx(B,{label:"",options:L,onChange:t=>{const c=t!=null&&t.value?t.value:"";h({...a,selectedCountry:c})},placeholder:`${r("SelectorPlaceholder")}...`})})}),e.jsxs(o,{children:[e.jsx(p,{children:"Доставка"}),e.jsx(yt,{children:"Заполненные размеры и вес упаковки продукта доступные покупателю"})]}),e.jsxs($t,{children:[e.jsx(M,{id:"length",label:"Длина (см)",variant:"outlined",type:"number"}),e.jsx(M,{id:"width",label:"Ширина (см)",variant:"outlined",type:"number"}),e.jsx(M,{id:"height",label:"Высота (см)",variant:"outlined",type:"number"}),e.jsx(M,{id:"weight",label:"Вес (кг)",variant:"outlined",type:"number"})]}),e.jsx(o,{children:e.jsx(p,{children:"Выберите цену"})}),e.jsx(o,{children:e.jsx(g,{children:e.jsx(P,{large:"S",type:"number",label:r("Остаток"),placeholder:`${r("Type here")}...`,onChange:t=>{h({...a,remainderProduct:t.target.value})}})})}),e.jsxs(oe,{children:[e.jsx(g,{children:e.jsx(P,{large:"S",type:"number",label:r("Себестоимость"),placeholder:`${r("Type here")}...`,onChange:t=>{h({...a,costPrice:t.target.value})}})}),e.jsx(B,{label:"",options:mt,placeholder:`${r("SelectorPlaceholder")}...`,onChange:t=>{const c=t!=null&&t.value?t.value:"";h({...a,currency:c})}})]}),e.jsxs(oe,{children:[e.jsx(g,{children:e.jsx(P,{large:"S",type:"number",label:r("Оптовая цена"),placeholder:`${r("Type here")}...`,value:a.priceWholesale,onChange:t=>{h({...a,priceWholesale:t.target.value})},style:{opacity:N?.5:1},disabled:N})}),e.jsx(I,{control:e.jsx(O,{checked:de,onChange:ze}),label:"Добавить оптовую цену"})]}),e.jsx(o,{children:e.jsx(g,{children:e.jsx(P,{large:"S",type:"number",label:r("Оптовая цена действует от (за штуку)"),placeholder:`${r("Type here")}...`,value:a.priceValid,onChange:t=>{h({...a,priceValid:t.target.value})},style:{opacity:N?.5:1},disabled:N})})}),e.jsx(o,{children:e.jsx(g,{children:e.jsx(P,{large:"S",type:"number",label:r("Цена продажи"),placeholder:`${r("Type here")}...`,onChange:t=>{h({...a,priceSelling:t.target.value})}})})}),e.jsx(o,{children:e.jsxs(K,{children:[e.jsx(p,{children:"Описание"}),e.jsxs(kt,{value:0,onChange:()=>{},"aria-label":"Выбор языка описания",children:[e.jsx(q,{label:"Russian"}),e.jsx(q,{label:"English"}),e.jsx(q,{label:"Armenian"})]}),e.jsx(zt,{id:"description",label:"Описание",variant:"outlined",disabled:!0,fullWidth:!0})]})}),e.jsx(o,{children:e.jsx(le,{placeholder:r("UploadImages"),setImg:Q})}),V&&e.jsxs("div",{children:[e.jsx(p,{children:"Добавить доступные размеры этого товара"}),e.jsx(xt,{})]}),e.jsx(It,{children:"Предварительный просмотр"}),e.jsx(Ft,{children:'Here you can view how your product will look on the store page. To view it, click: "Preview" Note that this is only a demo version and the site itself may differ.'}),e.jsxs(o,{children:[e.jsx(D,{style:{width:300},type:"submit",onClick:_,size:"large",variant:"outlined",children:r("Предварительный просмотр")}),he&&e.jsx(Ne,{})]}),e.jsxs(vt,{children:[ee&&e.jsx(Bt,{children:e.jsx(D,{style:{width:200},type:"button",onClick:Pe,children:r("Добавить цвет товара")})}),e.jsx(D,{style:{width:300},type:"submit",onClick:_,size:"large",variant:"outlined",children:r("Отмена")}),e.jsx(D,{style:{width:300},type:"submit",onClick:_,size:"large",variant:"contained",children:r("Отправить на подтверждение")})]})]}),X.map((t,c)=>e.jsxs(Dt,{children:[e.jsxs(p,{children:["Добавить цвет продукта",e.jsx(ae,{style:{float:"right",cursor:"pointer"},onClick:()=>Te(c)})]}),e.jsx(o,{children:e.jsx(Mt,{children:e.jsx(g,{children:e.jsx(G,{options:ne,label:r("Цвет"),placeholder:`${r("SelectorPlaceholder")}...`,onChange:d=>{const z=d==null?void 0:d.map(Ie=>Ie.label);h({...a,colorProduct:z})}})})})}),e.jsx(o,{children:e.jsx(le,{placeholder:r("UploadImages"),setImg:Q})}),e.jsx(o,{children:e.jsx(p,{children:"Размер"})}),e.jsx(o,{children:e.jsx(pt,{})})]},c))]})};export{gs as default};
