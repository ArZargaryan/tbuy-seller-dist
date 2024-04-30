import{n as t}from"./index-c419738b.js";const o=t.div`
  margin: var(--space-4) 0;
`,r=t.span`
  font-weight: 600;
  font-size: 24px;
  line-height: 45px;
  letter-spacing: 0;
`,e=t.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 42px;
  gap: 42px;
`,s=t.div`
  background-color: #ffffff;
  padding: 42px 30px;
  margin-top: 24px;
`,p=t.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 46px;
  max-width: 1028px;
  margin: ${i=>i.margin||"0"};
`,d=t.div`
  display: flex;
  gap: 48px;
  flex-direction: column;
`;t.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  margin-top: 20px;
`;const c=t.div`
  max-width: 1028px;
`,l=t.div`
  width: 100%;
  height: 1px;
  background: var(--gray);
  margin: 54px 0;
`,g=t.input`
  position: absolute;
  width: 0;
  height: 0;
  z-index: -9999;
`,x=t.label`
  display: flex;
  align-items: center;
  width: max-content;
  gap: 4px;
`,h=t.span`
  width: 20px;
  height: 20px;
  border: 1px solid #6b718d;
  border-radius: 50%;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 12px;
    height: 12px;
    transform: translate(-50%, -50%) scale(0);
    background: var(--primary);
    border-radius: 50%;
  }

  ${i=>i.checked?`
				border: 1px solid var(--primary);

				&::after {
					transform: translate(-50%, -50%);
				}
			`:null};
`,f=t.span`
  font-weight: 700;
`,u=t.div`
  font-size: 14px;
  max-width: 500px;
  line-height: 1.5;
`,m=t.div`
  margin-top: 54px;
  img {
    width: 100%;
  }
`,w=t.input`
  min-width: 100px;
  height: 32px;
  background: #eeeff4;
  outline: none;
  border-radius: 100px;
  padding: 8px 12px;
  border: 1px solid #dadce6;
  color: #6c718c;
  transition: 0.2s;

  &::-webkit-calendar-picker-indicator {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'%3E%3Cg clip-path='url(%23clip0_2007_2191)'%3E%3Cpath d='M7.9987 14.6673C11.6806 14.6673 14.6654 11.6825 14.6654 8.00065C14.6654 4.31875 11.6806 1.33398 7.9987 1.33398C4.3168 1.33398 1.33203 4.31875 1.33203 8.00065C1.33203 11.6825 4.3168 14.6673 7.9987 14.6673Z' stroke='%236B718D' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M8 4V8L10.6667 9.33333' stroke='%236B718D' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_2007_2191'%3E%3Crect width='16' height='16' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
  }

  &:focus {
    border: 1px solid var(--primary);
  }
`,n=t.button`
  height: 50px;
  padding: 0 24px;
  background: var(--primary);
  font-size: 14px;
  font-weight: 700;
  color: white;
  cursor: pointer;
`,b=t(n)`
  border: 1px solid var(--black);
  color: var(--black);
  background: transparent;
`,v=t.button`
  color: var(--dark-warning);
  border: 1px solid var(--dark-warning);
  height: 36px;
  background: transparent;
  cursor: pointer;
  padding: 0 16px;
`,k=t.span`
  color: var(--dark-warning);
  font-weight: 600;
`,C=t.div`
  background: var(--light-warning);
  border: 1px solid var(--warning);
  height: 48px;
  padding: 0 14px;
  margin: 21px 0 0 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
`,y=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px;
  cursor: pointer;
`,E=t.button`
  font-weight: 700;
  color: var(--warning);
  font-size: 14px;
`;export{y as C,c as D,u as I,m as M,s as N,n as P,x as R,b as S,r as T,C as W,g as a,h as b,f as c,w as d,E as e,k as f,v as g,o as h,e as i,p as j,d as k,l};
