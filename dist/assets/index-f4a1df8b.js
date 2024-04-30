import{n as o,r as p,j as t,U as w,M as u,N as $,O as b,Q as j}from"./index-c419738b.js";const C=o.input`
  position: absolute;
  z-index: -9999;
  width: 0;
  heidth: 0;
`,m=o.label`
  width: max-content;
  position: relative;
  display: flex;
  align-items: center;

  margin: ${({margin:e})=>e||"0"};
`,v=o.span`
  width: 18px;
  height: 18px;
  border: ${({border:e})=>e||"1.4px solid #6B718D"};
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: center;

  svg,
  img {
    display: none;
  }

  ${e=>e.checked?`
					background: var(--primary);
					border: 1px solid var(--primary);

					svg,
					img {
						display: block;
					}
				`:null};
`,h=o.span`
  font-size: 14px;
  padding-left: 4px;
`,k=o(h)`
  color: var(--error);
`,y=({text:e,margin:i,error:n,border:r,...l})=>{const[d,a]=p.useState(!1);return t.jsx(m,{margin:i,children:n?t.jsxs(t.Fragment,{children:[t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"17",viewBox:"0 0 16 17",fill:"none",children:[t.jsx("rect",{width:"16",height:"16",transform:"translate(0 0.5)",fill:"white"}),t.jsx("path",{d:"M8 6.5V9.83333",stroke:"#D85353","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),t.jsx("path",{d:"M7.99833 14.7735H3.95833C1.64499 14.7735 0.678328 13.1202 1.79833 11.1002L3.87833 7.35352L5.83833 3.83352C7.02499 1.69352 8.97166 1.69352 10.1583 3.83352L12.1183 7.36018L14.1983 11.1068C15.3183 13.1268 14.345 14.7802 12.0383 14.7802H7.99833V14.7735Z",stroke:"#D85353","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}),t.jsx("path",{d:"M7.99609 11.834H8.00208",stroke:"#D85353","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]}),t.jsx(k,{children:"Ցույց տալ էջում"})]}):t.jsxs(t.Fragment,{children:[t.jsx(C,{type:"checkbox",checked:d,onClick:()=>a(s=>!s),...l}),t.jsx(v,{checked:d,border:r,text:e,children:t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"9",viewBox:"0 0 12 9",fill:"none",children:t.jsx("path",{d:"M4.70711 8.69289C4.31658 9.08342 3.68342 9.08342 3.29289 8.69289L0.699999 6.1C0.3134 5.7134 0.313401 5.0866 0.7 4.7C1.0866 4.3134 1.7134 4.3134 2.1 4.7L4 6.6L9.9 0.700001C10.2866 0.313402 10.9134 0.313401 11.3 0.7C11.6866 1.0866 11.6866 1.7134 11.3 2.1L4.70711 8.69289Z",fill:"white"})})}),t.jsx(h,{children:e})]})})},L=o.div`
  display: flex;

  flex-direction: column;
  gap: 3px;
`,M=o.div`
  position: relative;
  border: 1px solid ${({error:e})=>e?"var(--error)":"var(--gray)"};
  transition: 0.2s;

  width: ${({width:e})=>e||"100%"};
  height: ${({height:e})=>e||"50px"};
  max-width: ${({max_width:e})=>e||"none"};

  :focus-within {
    border: 1px solid var(--primary);
  }

  display: flex;
  align-items: center;
`,B=o.input`
  outline: none;
  width: 100%;
  height: 100%;
  resize: none;
  line-height: 1.375;
  color: inherit;
  border: none;
  padding: ${({padding:e})=>e||"0 16px"};
  color: ${({color:e})=>e||"inherit"};
  font-weight: ${({font_weight:e})=>e||"inherit"};
  font-size: ${({font_size:e})=>e||"inherit"};

  &:placeholder {
    color: #989898;
  }
`,z=o.div`
  position: absolute;
  top: 0;
  left: 10px;
  transform: translateY(-50%);

  padding: 0 5px;

  font-size: 14px;
  font-weight: 700;
  background: ${e=>e.labelBackgroundColor};

  display: flex;
  align-items: center;
  gap: 8px;
`,D=o.span`
  color: var(--warning);
`,P=({label:e,required:i,labelBackgroundColor:n="white",checkbox:r,error:l,children:d,className:a,...s})=>t.jsxs(L,{className:a,...s,children:[t.jsxs(M,{error:l,...s,children:[t.jsx(B,{required:i,...s}),e?t.jsxs(z,{labelBackgroundColor:n,children:[e," ",i&&t.jsx(D,{children:"*"})]}):null,d]}),r&&t.jsx(y,{text:"Ցույց տալ էջում",error:l})]}),E=o.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #00000080;
  display: grid;
  place-items: center;
  overflow-y: auto;

  pointer-events: ${({isActive:e})=>e?"all":"none"};
  visibility: ${({isActive:e})=>e?"visible":"hidden"};
  opacity: ${({isActive:e})=>e?"1":"0"};
`,Z=o.div`
  transition: 0.25s;
  background: white;
  border: 1px solid var(--white);
  width: ${({width:e})=>e};
  max-width: ${({max_width:e})=>e};
  min-width: ${({min_width:e})=>e};
  height: ${({height:e})=>e};
  padding: ${({padding:e})=>e||"20px"};
  margin: 20px;
  position: relative;

  img {
    max-width: 90vw;
    max-height: 90vh;
  }
`,R=o.button`
  display: flex;
  position: absolute;
  top: ${e=>{var i;return(i=e.closePosition)==null?void 0:i.top}};
  right: ${e=>{var i;return(i=e.closePosition)==null?void 0:i.right}};
`,T=({children:e,className:i,setIsActive:n,isActive:r,trigger:l,catchFalseActive:d,closePosition:a={right:"24px",top:"24px"},...s})=>(p.useState(r),p.useEffect(()=>{d&&!r&&d(!1)},[r]),t.jsxs(t.Fragment,{children:[l?t.jsx("span",{onClick:c=>n(!0),children:l}):null,r&&t.jsx(w,{enabled:r,children:t.jsx(E,{className:i,isActive:r,onClick:c=>n(!1),...s,children:t.jsxs(Z,{...s,onClick:c=>c.stopPropagation(),children:[e,t.jsx(R,{onClick:()=>n(!1),closePosition:a,children:t.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",children:[t.jsx("path",{d:"M13.3751 11.9589C12.9846 11.5684 12.3514 11.5684 11.9609 11.9589C11.5703 12.3494 11.5703 12.9826 11.9609 13.3731L14.5871 15.9994L11.9609 18.6256C11.5704 19.016 11.5704 19.6492 11.9609 20.0398C12.3514 20.4303 12.9846 20.4303 13.3751 20.0398L16.0013 17.4136L18.6275 20.0398C19.018 20.4303 19.6512 20.4303 20.0417 20.0398C20.4323 19.6492 20.4323 19.016 20.0417 18.6255L17.4155 15.9994L20.0417 13.3731C20.4323 12.9826 20.4323 12.3495 20.0417 11.9589C19.6512 11.5684 19.018 11.5684 18.6275 11.9589L16.0013 14.5851L13.3751 11.9589Z",fill:"#6B718D"}),t.jsx("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M16.0013 1.66602C8.08522 1.66602 1.66797 8.08327 1.66797 15.9993C1.66797 23.9155 8.08522 30.3327 16.0013 30.3327C23.9174 30.3327 30.3346 23.9155 30.3346 15.9993C30.3346 8.08327 23.9174 1.66602 16.0013 1.66602ZM3.66797 15.9993C3.66797 9.18784 9.18979 3.66602 16.0013 3.66602C22.8128 3.66602 28.3346 9.18784 28.3346 15.9993C28.3346 22.8108 22.8128 28.3327 16.0013 28.3327C9.18979 28.3327 3.66797 22.8108 3.66797 15.9993Z",fill:"#6B718D"})]})})]})})})]})),S=o.div`
  position: relative;

  font-size: 14px;
  background: ${({background:e})=>e};
  color: white;
  border-radius: 4px;

  padding: ${({padding:e})=>e};

  width: ${({width:e})=>e};
  max-width: ${({max_width:e})=>e};
  min-width: ${({min_width:e})=>e};

  &::after {
    content: "";
    position: absolute;
    pointer-events: none;
    bottom: 1px;
    left: 50%;
    transform: translate(-50%, 100%);
    border: 10px solid transparent;
    border-top: 10px solid ${({background:e})=>e};
  }
`;var x;(e=>{e.Root=({children:i,...n})=>t.jsx(u,{...n,children:i}),e.Trigger=({children:i,...n})=>t.jsx($,{...n,children:i}),e.Portal=({children:i,...n})=>t.jsx(b,{...n,children:i}),e.Content=({children:i,side:n="top",sideOffset:r=12,avoidCollisions:l=!1,background:d="#252525",padding:a="8px 16px",width:s="auto",max_width:c="none",min_width:g="auto",...f})=>t.jsx(j,{side:n,sideOffset:r,avoidCollisions:l,...f,children:t.jsx(S,{background:d,padding:a,width:s,max_width:c,min_width:g,children:i})})})(x||(x={}));export{y as C,P as I,T as M,x as P};
