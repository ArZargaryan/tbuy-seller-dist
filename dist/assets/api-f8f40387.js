import{k as r}from"./index-81b9eae3.js";const a=async n=>{try{return(await r.get(`/banners/?action=get_banners&id_seller=${n}`)).data}catch(e){return console.error("Ошибка при получении баннеров:",e),null}},s=async n=>{try{return(await r.get(`/banners/?action=get_templates_banners&name_template=${n}`)).data}catch(e){return console.error("Ошибка при получении шаблонов баннеров:",e),null}};export{s as a,a as g};