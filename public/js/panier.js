(()=>{"use strict";var e,t,r,n,a,o={291:(e,t,r)=>{r.d(t,{m:()=>n});class n{AddItem(e,t){if("string"!=typeof e)throw new Error("le parametre id  doit etre de type string ");t=this.recupererData(),this.getIndex(e,t)<0&&(t.push(e),this.updateData(t))}removeItem(e,t){if(console.log(e),"string"!=typeof e)throw new Error("le parametre id n'est pas une chaine de caractere");if(this.getIndex(e,t)<0)throw new Error("le produit a suprimer n' existe pas");if(null==t)throw new Error("aucune donnée");t.splice(this.getIndex(e,t),1),this.updateData(t)}getIndex(e,t){return t.findIndex((t=>t==e))}just(e){return e}recupererData(){return null!=window.localStorage.getItem("panier")||Array.isArray(JSON.parse(window.localStorage.getItem("panier")))||window.localStorage.setItem("panier","[]"),JSON.parse(window.localStorage.getItem("panier"))}updateData(e){var t=JSON.stringify(e);window.localStorage.setItem("panier",t)}}},593:(e,t,r)=>{function n(e,t,r=[]){return new Promise((function(n,a){var o=new XMLHttpRequest;o.open(e,t,!0),o.onreadystatechange=function(){4==o.readyState&&(201==o.status||200==o.status?n(JSON.parse(o.responseText)):a())},"POST"==e?(o.setRequestHeader("Content-Type","application/json"),console.log(r),o.send(JSON.stringify(r))):o.send()}))}r.d(t,{sM:()=>n,sA:()=>a});const a=async(e,t="http://localhost:3000/api/cameras/order")=>{const r=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});return await r.json()}}},i={};function s(e){if(i[e])return i[e].exports;var t=i[e]={exports:{}};return o[e](t,t.exports,s),t.exports}s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e=s(291),t=s(593),r=new e.m,n=document.getElementsByTagName("tbody")[0],a=0,function e(){n.innerHTML="",a=0;var o=r.recupererData();document.getElementById("prix_total").innerText=a+" €",o.forEach((o=>{(0,t.sM)("GET","http://localhost:3000/api/cameras/"+o).then((t=>{!function(t){var o=document.createElement("tr");o.setAttribute("data-id",t._id);var i=document.createElement("td");i.innerText=t.name;var s=document.createElement("td");s.innerText=t.price+" €";var d=document.createElement("td");d.innerHTML="<btn>remove</btn>",d.addEventListener("click",(()=>{var n=document.querySelectorAll('[data-id="'+t._id+'"]')[0];r.removeItem(t._id,r.recupererData()),console.log(a),n.remove(),e()})),a+=t.price,o.append(i,s,d),n.append(o)}(t),console.log(a+"ici"),document.getElementById("prix_total").innerText=a+" €"})),document.getElementById("prix_total").innerText=a+" €"}))}(),document.getElementById("form").addEventListener("submit",(function(e){e.preventDefault(),function(){let e=document.getElementsByClassName("form__input"),n={contact:{firstName:e[0].value,lastName:e[1].value,email:e[2].value,tel:e[3].value,address:e[4].value,city:e[5].value},products:r.recupererData()};(async()=>{var e=await(0,t.sA)(n);window.localStorage.setItem("orderId",e.orderId),window.localStorage.setItem("totalAmount",a.toString()),window.open("confirmation_de_commande.html")})()}()}))})();