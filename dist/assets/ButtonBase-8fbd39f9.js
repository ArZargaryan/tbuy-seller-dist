import{am as Ie,R as K,r as a,an as Ue,_ as X,A as ee,D as E,j as F,p as me,ao as te,s as ne,z as be,q as _e,E as ze}from"./index-2bc117be.js";import{a as ue,e as Oe,g as H}from"./createSvgIcon-bae563fb.js";function Ae(e,o){e.prototype=Object.create(o.prototype),e.prototype.constructor=e,Ie(e,o)}const ce=K.createContext(null);function oe(e,o){var s=function(t){return o&&a.isValidElement(t)?o(t):t},l=Object.create(null);return e&&a.Children.map(e,function(n){return n}).forEach(function(n){l[n.key]=s(n)}),l}function Ke(e,o){e=e||{},o=o||{};function s(f){return f in o?o[f]:e[f]}var l=Object.create(null),n=[];for(var t in e)t in o?n.length&&(l[t]=n,n=[]):n.push(t);var i,c={};for(var u in o){if(l[u])for(i=0;i<l[u].length;i++){var p=l[u][i];c[l[u][i]]=s(p)}c[u]=s(u)}for(i=0;i<n.length;i++)c[n[i]]=s(n[i]);return c}function w(e,o,s){return s[o]!=null?s[o]:e.props[o]}function Xe(e,o){return oe(e.children,function(s){return a.cloneElement(s,{onExited:o.bind(null,s),in:!0,appear:w(s,"appear",e),enter:w(s,"enter",e),exit:w(s,"exit",e)})})}function Ye(e,o,s){var l=oe(e.children),n=Ke(o,l);return Object.keys(n).forEach(function(t){var i=n[t];if(a.isValidElement(i)){var c=t in o,u=t in l,p=o[t],f=a.isValidElement(p)&&!p.props.in;u&&(!c||f)?n[t]=a.cloneElement(i,{onExited:s.bind(null,i),in:!0,exit:w(i,"exit",e),enter:w(i,"enter",e)}):!u&&c&&!f?n[t]=a.cloneElement(i,{in:!1}):u&&c&&a.isValidElement(p)&&(n[t]=a.cloneElement(i,{onExited:s.bind(null,i),in:p.props.in,exit:w(i,"exit",e),enter:w(i,"enter",e)}))}}),n}var We=Object.values||function(e){return Object.keys(e).map(function(o){return e[o]})},He={component:"div",childFactory:function(o){return o}},ie=function(e){Ae(o,e);function o(l,n){var t;t=e.call(this,l,n)||this;var i=t.handleExited.bind(Ue(t));return t.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},t}var s=o.prototype;return s.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},s.componentWillUnmount=function(){this.mounted=!1},o.getDerivedStateFromProps=function(n,t){var i=t.children,c=t.handleExited,u=t.firstRender;return{children:u?Xe(n,c):Ye(n,i,c),firstRender:!1}},s.handleExited=function(n,t){var i=oe(this.props.children);n.key in i||(n.props.onExited&&n.props.onExited(t),this.mounted&&this.setState(function(c){var u=X({},c.children);return delete u[n.key],{children:u}}))},s.render=function(){var n=this.props,t=n.component,i=n.childFactory,c=ee(n,["component","childFactory"]),u=this.state.contextValue,p=We(this.state.children).map(i);return delete c.appear,delete c.enter,delete c.exit,t===null?K.createElement(ce.Provider,{value:u},p):K.createElement(ce.Provider,{value:u},K.createElement(t,c,p))},o}(K.Component);ie.propTypes={};ie.defaultProps=He;const Ge=ie;function qe(e){const{className:o,classes:s,pulsate:l=!1,rippleX:n,rippleY:t,rippleSize:i,in:c,onExited:u,timeout:p}=e,[f,g]=a.useState(!1),b=E(o,s.ripple,s.rippleVisible,l&&s.ripplePulsate),C={width:i,height:i,top:-(i/2)+t,left:-(i/2)+n},h=E(s.child,f&&s.childLeaving,l&&s.childPulsate);return!c&&!f&&g(!0),a.useEffect(()=>{if(!c&&u!=null){const R=setTimeout(u,p);return()=>{clearTimeout(R)}}},[u,c,p]),F.jsx("span",{className:b,style:C,children:F.jsx("span",{className:h})})}const Je=me("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),m=Je,Qe=["center","classes","className"];let G=e=>e,pe,de,fe,he;const Z=550,Ze=80,et=te(pe||(pe=G`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),tt=te(de||(de=G`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),nt=te(fe||(fe=G`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),ot=ne("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),it=ne(qe,{name:"MuiTouchRipple",slot:"Ripple"})(he||(he=G`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),m.rippleVisible,et,Z,({theme:e})=>e.transitions.easing.easeInOut,m.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,m.child,m.childLeaving,tt,Z,({theme:e})=>e.transitions.easing.easeInOut,m.childPulsate,nt,({theme:e})=>e.transitions.easing.easeInOut),rt=a.forwardRef(function(o,s){const l=be({props:o,name:"MuiTouchRipple"}),{center:n=!1,classes:t={},className:i}=l,c=ee(l,Qe),[u,p]=a.useState([]),f=a.useRef(0),g=a.useRef(null);a.useEffect(()=>{g.current&&(g.current(),g.current=null)},[u]);const b=a.useRef(!1),C=a.useRef(0),h=a.useRef(null),R=a.useRef(null);a.useEffect(()=>()=>{C.current&&clearTimeout(C.current)},[]);const U=a.useCallback(d=>{const{pulsate:M,rippleX:y,rippleY:L,rippleSize:I,cb:z}=d;p(x=>[...x,F.jsx(it,{classes:{ripple:E(t.ripple,m.ripple),rippleVisible:E(t.rippleVisible,m.rippleVisible),ripplePulsate:E(t.ripplePulsate,m.ripplePulsate),child:E(t.child,m.child),childLeaving:E(t.childLeaving,m.childLeaving),childPulsate:E(t.childPulsate,m.childPulsate)},timeout:Z,pulsate:M,rippleX:y,rippleY:L,rippleSize:I},f.current)]),f.current+=1,g.current=z},[t]),N=a.useCallback((d={},M={},y=()=>{})=>{const{pulsate:L=!1,center:I=n||M.pulsate,fakeElement:z=!1}=M;if((d==null?void 0:d.type)==="mousedown"&&b.current){b.current=!1;return}(d==null?void 0:d.type)==="touchstart"&&(b.current=!0);const x=z?null:R.current,P=x?x.getBoundingClientRect():{width:0,height:0,left:0,top:0};let V,D,S;if(I||d===void 0||d.clientX===0&&d.clientY===0||!d.clientX&&!d.touches)V=Math.round(P.width/2),D=Math.round(P.height/2);else{const{clientX:$,clientY:v}=d.touches&&d.touches.length>0?d.touches[0]:d;V=Math.round($-P.left),D=Math.round(v-P.top)}if(I)S=Math.sqrt((2*P.width**2+P.height**2)/3),S%2===0&&(S+=1);else{const $=Math.max(Math.abs((x?x.clientWidth:0)-V),V)*2+2,v=Math.max(Math.abs((x?x.clientHeight:0)-D),D)*2+2;S=Math.sqrt($**2+v**2)}d!=null&&d.touches?h.current===null&&(h.current=()=>{U({pulsate:L,rippleX:V,rippleY:D,rippleSize:S,cb:y})},C.current=setTimeout(()=>{h.current&&(h.current(),h.current=null)},Ze)):U({pulsate:L,rippleX:V,rippleY:D,rippleSize:S,cb:y})},[n,U]),_=a.useCallback(()=>{N({},{pulsate:!0})},[N]),j=a.useCallback((d,M)=>{if(clearTimeout(C.current),(d==null?void 0:d.type)==="touchend"&&h.current){h.current(),h.current=null,C.current=setTimeout(()=>{j(d,M)});return}h.current=null,p(y=>y.length>0?y.slice(1):y),g.current=M},[]);return a.useImperativeHandle(s,()=>({pulsate:_,start:N,stop:j}),[_,N,j]),F.jsx(ot,X({className:E(m.root,t.root,i),ref:R},c,{children:F.jsx(Ge,{component:null,exit:!0,children:u})}))}),st=rt;function at(e){return _e("MuiButtonBase",e)}const lt=me("MuiButtonBase",["root","disabled","focusVisible"]),ut=lt,ct=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],pt=e=>{const{disabled:o,focusVisible:s,focusVisibleClassName:l,classes:n}=e,i=ze({root:["root",o&&"disabled",s&&"focusVisible"]},at,n);return s&&l&&(i.root+=` ${l}`),i},dt=ne("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,o)=>o.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${ut.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),ft=a.forwardRef(function(o,s){const l=be({props:o,name:"MuiButtonBase"}),{action:n,centerRipple:t=!1,children:i,className:c,component:u="button",disabled:p=!1,disableRipple:f=!1,disableTouchRipple:g=!1,focusRipple:b=!1,LinkComponent:C="a",onBlur:h,onClick:R,onContextMenu:U,onDragLeave:N,onFocus:_,onFocusVisible:j,onKeyDown:d,onKeyUp:M,onMouseDown:y,onMouseLeave:L,onMouseUp:I,onTouchEnd:z,onTouchMove:x,onTouchStart:P,tabIndex:V=0,TouchRippleProps:D,touchRippleRef:S,type:$}=l,v=ee(l,ct),O=a.useRef(null),T=a.useRef(null),ge=ue(T,S),{isFocusVisibleRef:re,onFocus:Re,onBlur:Me,ref:ye}=Oe(),[k,Y]=a.useState(!1);p&&k&&Y(!1),a.useImperativeHandle(n,()=>({focusVisible:()=>{Y(!0),O.current.focus()}}),[]);const[q,xe]=a.useState(!1);a.useEffect(()=>{xe(!0)},[]);const Te=q&&!f&&!p;a.useEffect(()=>{k&&b&&!f&&q&&T.current.pulsate()},[f,b,k,q]);function B(r,ae,je=g){return H(le=>(ae&&ae(le),!je&&T.current&&T.current[r](le),!0))}const Ee=B("start",y),Ce=B("stop",U),Ve=B("stop",N),ve=B("stop",I),Be=B("stop",r=>{k&&r.preventDefault(),L&&L(r)}),Pe=B("start",P),De=B("stop",z),Se=B("stop",x),Le=B("stop",r=>{Me(r),re.current===!1&&Y(!1),h&&h(r)},!1),$e=H(r=>{O.current||(O.current=r.currentTarget),Re(r),re.current===!0&&(Y(!0),j&&j(r)),_&&_(r)}),J=()=>{const r=O.current;return u&&u!=="button"&&!(r.tagName==="A"&&r.href)},Q=a.useRef(!1),ke=H(r=>{b&&!Q.current&&k&&T.current&&r.key===" "&&(Q.current=!0,T.current.stop(r,()=>{T.current.start(r)})),r.target===r.currentTarget&&J()&&r.key===" "&&r.preventDefault(),d&&d(r),r.target===r.currentTarget&&J()&&r.key==="Enter"&&!p&&(r.preventDefault(),R&&R(r))}),we=H(r=>{b&&r.key===" "&&T.current&&k&&!r.defaultPrevented&&(Q.current=!1,T.current.stop(r,()=>{T.current.pulsate(r)})),M&&M(r),R&&r.target===r.currentTarget&&J()&&r.key===" "&&!r.defaultPrevented&&R(r)});let W=u;W==="button"&&(v.href||v.to)&&(W=C);const A={};W==="button"?(A.type=$===void 0?"button":$,A.disabled=p):(!v.href&&!v.to&&(A.role="button"),p&&(A["aria-disabled"]=p));const Fe=ue(s,ye,O),se=X({},l,{centerRipple:t,component:u,disabled:p,disableRipple:f,disableTouchRipple:g,focusRipple:b,tabIndex:V,focusVisible:k}),Ne=pt(se);return F.jsxs(dt,X({as:W,className:E(Ne.root,c),ownerState:se,onBlur:Le,onClick:R,onContextMenu:Ce,onFocus:$e,onKeyDown:ke,onKeyUp:we,onMouseDown:Ee,onMouseLeave:Be,onMouseUp:ve,onDragLeave:Ve,onTouchEnd:De,onTouchMove:Se,onTouchStart:Pe,ref:Fe,tabIndex:p?-1:V,type:$},A,v,{children:[i,Te?F.jsx(st,X({ref:ge,center:t},D)):null]}))}),gt=ft;export{gt as B,ce as T,Ae as _};
