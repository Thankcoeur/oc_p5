(()=>{"use strict";var e,t,r,a,o,n,c={752:(e,t,r)=>{r.d(t,{F:()=>n});var a=r(291),o=r(342);class n{static getLocalStorage(){return null==n.LocalStorage_?(n.LocalStorage_=new a.m,n.LocalStorage_):n.LocalStorage_}static getProductStorage(){return null==n.ProductStorage_?(n.ProductStorage_=new o.A,n.ProductStorage_):n.ProductStorage_}}n.LocalStorage_=null,n.ProductStorage_=null},291:(e,t,r)=>{r.d(t,{m:()=>a});class a{constructor(){}static recupererData(){return JSON.parse(window.localStorage.getItem("panier"))}static enregistrer(e){window.localStorage.setItem("panier",JSON.stringify(e))}}!function(e,t,r,a){var o,n=arguments.length,c=n<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,a);else for(var l=e.length-1;l>=0;l--)(o=e[l])&&(c=(n<3?o(c):n>3?o(t,r,c):o(t,r))||c);n>3&&c&&Object.defineProperty(t,r,c)}([function(e,t){let r=null;Object.defineProperty(e,t,{get:function(){return a.recupererData()},set:function(e){console.log(e),a.enregistrer(e),r=e}})}],a.prototype,"data",void 0)},342:(e,t,r)=>{r.d(t,{A:()=>a});class a{AddItem(e,t){let r=[...t];return r.push(e),r}removeItem(e,t){let r=[...t];return console.log(r.splice(this.getIndex(e,r),1)),r.splice(this.getIndex(e,r),1)}getIndex(e,t){return[...t].findIndex((t=>t==e))}}},593:(e,t,r)=>{r.d(t,{sA:()=>a,jV:()=>o});const a=async(e,t="http://localhost:3000/api/cameras/order")=>{const r=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});return await r.json()},o=async e=>{let t=await fetch("http://localhost:3000/api/cameras/"+e);return await t.json()}}},l={};function i(e){if(l[e])return l[e].exports;var t=l[e]={exports:{}};return c[e](t,t.exports,i),t.exports}i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e=i(593),t=i(752),r=t.F.getProductStorage(),a=t.F.getLocalStorage(),o=document.getElementsByTagName("tbody")[0],n=0,function c(){o.innerHTML="",n=0;var l=t.F.getLocalStorage().data;document.getElementById("prix_total").innerText=n+" €",l.forEach((t=>{(async()=>{!function(e){var t=document.createElement("tr");t.setAttribute("data-id",e._id);var r=document.createElement("td");r.innerText=e.name;var a=document.createElement("td");a.innerText=e.price+" €";var l=document.createElement("td");l.innerHTML='<i class="fas fa-trash"></i>',l.addEventListener("click",(()=>{document.querySelectorAll('[data-id="'+e._id+'"]')[0],c()})),n+=e.price,t.append(r,a,l),o.append(t)}(await(0,e.jV)(t)),document.getElementById("prix_total").innerText=n+" €"})(),document.getElementById("prix_total").innerText=n+" €",a.data=r.removeItem(t,a.data)}))}(),document.getElementById("form").addEventListener("submit",(function(t){t.preventDefault(),function(){let t=document.getElementsByClassName("form__input"),r={contact:{firstName:t[0].value,lastName:t[1].value,email:t[2].value,tel:t[3].value,address:t[4].value,city:t[5].value}};(async()=>{var t=await(0,e.sA)(r);window.localStorage.setItem("orderId",t.orderId),window.localStorage.setItem("totalAmount",n.toString()),window.open("confirmation_de_commande.html")})()}()}))})();