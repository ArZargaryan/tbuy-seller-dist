import{aF as s,a5 as r,k as t}from"./index-2bc117be.js";const n=s({name:"employees",handler:async({id:e})=>t.get("/client/employee",{params:{company_id:e}}).then(a=>a.data)});n.finished.failure.watch(({error:e})=>{const a=e.response.data;r("Error",{description:a.message,className:"error-toast"})});export{n as e};
