(()=>{"use strict";var __webpack_modules__={593:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('/* unused harmony exports getProduct, PostForm, getAllData, getIdData */\n/**\r\n * prend un produit est cree des element pour le dom\r\n * @param {} element produit a contruire dans le dom\r\n */\r\nfunction getProduct(element) {\r\n    let product = document.createElement("section");\r\n    product.classList.add("product");\r\n    let product__image = document.createElement("img");\r\n    product__image.classList.add("product__image");\r\n    product__image.setAttribute("src", element.imageUrl);\r\n    let product__name = document.createElement("h3");\r\n    product__name.classList.add("product__name");\r\n    product__name.innerText = element.name;\r\n    let product__description = document.createElement("p");\r\n    product__description.classList.add("product__description");\r\n    product__description.innerText = element.description;\r\n    let product__prix = document.createElement("div");\r\n    product__prix.classList.add("product__prix");\r\n    product__prix.innerText = element.price + " €";\r\n    product.append(product__image, product__name, product__description, product__prix);\r\n    return product;\r\n}\r\n/**\r\n * envoye la commande au serveur et retourne le num de commande + la commande\r\n * @data les donnée du client adresse nom mail etc\r\n * @url  url du serveur ou envoyer les informations\r\n */\r\nconst PostForm = async (data, url = "http://localhost:3000/api/cameras/order") => {\r\n    console.log("data", data);\r\n    const response = await fetch(url, {\r\n        method: "POST",\r\n        headers: {\r\n            "Content-Type": "application/json",\r\n        },\r\n        body: JSON.stringify(data),\r\n    });\r\n    console.log(response);\r\n    const response_data = await response.json();\r\n    return response_data;\r\n};\r\n/**\r\n * recupere les donnée en format json des cameras\r\n * @url url du serveur ou envoyer les informations\r\n */\r\nconst getAllData = async (url = "http://localhost:3000/api/cameras") => {\r\n    let response = await fetch(url);\r\n    let data = await response.json();\r\n    return data;\r\n};\r\n/**\r\n * recupere les données d\' une camera en fonction de son id\r\n * @url {string} url du serveur ou envoyer les informations\r\n */\r\nconst getIdData = async (id) => {\r\n    let response = await fetch("http://localhost:3000/api/cameras/" + id);\r\n    let data = await response.json();\r\n    return data;\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdGFydGJvb3RzdHJhcC1zaG9wLWhvbWVwYWdlLy4vc3JjL3V0aWxzLnRzPzdkZGEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7R0FHRztBQUNJLFNBQVMsVUFBVSxDQUFDLE9BQVk7SUFDckMsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUVoRCxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUVqQyxJQUFJLGNBQWMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRW5ELGNBQWMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDL0MsY0FBYyxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRXJELElBQUksYUFBYSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakQsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDN0MsYUFBYSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO0lBQ3ZDLElBQUksb0JBQW9CLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN2RCxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDM0Qsb0JBQW9CLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUM7SUFFckQsSUFBSSxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsRCxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUM3QyxhQUFhLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQy9DLE9BQU8sQ0FBQyxNQUFNLENBQ1osY0FBYyxFQUNkLGFBQWEsRUFDYixvQkFBb0IsRUFDcEIsYUFBYSxDQUNkLENBQUM7SUFDRixPQUFPLE9BQU8sQ0FBQztBQUNqQixDQUFDO0FBRUQ7Ozs7R0FJRztBQUNJLE1BQU0sUUFBUSxHQUFHLEtBQUssRUFDM0IsSUFBUyxFQUNULE1BQVcseUNBQXlDLEVBQ3BELEVBQUU7SUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMxQixNQUFNLFFBQVEsR0FBRyxNQUFNLEtBQUssQ0FBQyxHQUFHLEVBQUU7UUFDaEMsTUFBTSxFQUFFLE1BQU07UUFDZCxPQUFPLEVBQUU7WUFDUCxjQUFjLEVBQUUsa0JBQWtCO1NBQ25DO1FBQ0QsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO0tBQzNCLENBQUMsQ0FBQztJQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFdEIsTUFBTSxhQUFhLEdBQUcsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFFNUMsT0FBTyxhQUFhLENBQUM7QUFDdkIsQ0FBQyxDQUFDO0FBRUY7OztHQUdHO0FBQ0ksTUFBTSxVQUFVLEdBQUcsS0FBSyxFQUM3QixNQUFjLG1DQUFtQyxFQUNqRCxFQUFFO0lBQ0YsSUFBSSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEMsSUFBSSxJQUFJLEdBQUcsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDakMsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDLENBQUM7QUFFRjs7O0dBR0c7QUFDSSxNQUFNLFNBQVMsR0FBRyxLQUFLLEVBQUUsRUFBVSxFQUFFLEVBQUU7SUFDNUMsSUFBSSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQUMsb0NBQW9DLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDdEUsSUFBSSxJQUFJLEdBQUcsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDakMsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDLENBQUMiLCJmaWxlIjoiNTkzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIHByZW5kIHVuIHByb2R1aXQgZXN0IGNyZWUgZGVzIGVsZW1lbnQgcG91ciBsZSBkb21cclxuICogQHBhcmFtIHt9IGVsZW1lbnQgcHJvZHVpdCBhIGNvbnRydWlyZSBkYW5zIGxlIGRvbVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2R1Y3QoZWxlbWVudDogYW55KSB7XHJcbiAgbGV0IHByb2R1Y3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuXHJcbiAgcHJvZHVjdC5jbGFzc0xpc3QuYWRkKFwicHJvZHVjdFwiKTtcclxuXHJcbiAgbGV0IHByb2R1Y3RfX2ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuXHJcbiAgcHJvZHVjdF9faW1hZ2UuY2xhc3NMaXN0LmFkZChcInByb2R1Y3RfX2ltYWdlXCIpO1xyXG4gIHByb2R1Y3RfX2ltYWdlLnNldEF0dHJpYnV0ZShcInNyY1wiLCBlbGVtZW50LmltYWdlVXJsKTtcclxuXHJcbiAgbGV0IHByb2R1Y3RfX25hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XHJcbiAgcHJvZHVjdF9fbmFtZS5jbGFzc0xpc3QuYWRkKFwicHJvZHVjdF9fbmFtZVwiKTtcclxuICBwcm9kdWN0X19uYW1lLmlubmVyVGV4dCA9IGVsZW1lbnQubmFtZTtcclxuICBsZXQgcHJvZHVjdF9fZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBwcm9kdWN0X19kZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwicHJvZHVjdF9fZGVzY3JpcHRpb25cIik7XHJcbiAgcHJvZHVjdF9fZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gZWxlbWVudC5kZXNjcmlwdGlvbjtcclxuXHJcbiAgbGV0IHByb2R1Y3RfX3ByaXggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHByb2R1Y3RfX3ByaXguY2xhc3NMaXN0LmFkZChcInByb2R1Y3RfX3ByaXhcIik7XHJcbiAgcHJvZHVjdF9fcHJpeC5pbm5lclRleHQgPSBlbGVtZW50LnByaWNlICsgXCIg4oKsXCI7XHJcbiAgcHJvZHVjdC5hcHBlbmQoXHJcbiAgICBwcm9kdWN0X19pbWFnZSxcclxuICAgIHByb2R1Y3RfX25hbWUsXHJcbiAgICBwcm9kdWN0X19kZXNjcmlwdGlvbixcclxuICAgIHByb2R1Y3RfX3ByaXhcclxuICApO1xyXG4gIHJldHVybiBwcm9kdWN0O1xyXG59XHJcblxyXG4vKipcclxuICogZW52b3llIGxhIGNvbW1hbmRlIGF1IHNlcnZldXIgZXQgcmV0b3VybmUgbGUgbnVtIGRlIGNvbW1hbmRlICsgbGEgY29tbWFuZGVcclxuICogQGRhdGEgbGVzIGRvbm7DqWUgZHUgY2xpZW50IGFkcmVzc2Ugbm9tIG1haWwgZXRjXHJcbiAqIEB1cmwgIHVybCBkdSBzZXJ2ZXVyIG91IGVudm95ZXIgbGVzIGluZm9ybWF0aW9uc1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFBvc3RGb3JtID0gYXN5bmMgKFxyXG4gIGRhdGE6IGFueSxcclxuICB1cmw6IGFueSA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9jYW1lcmFzL29yZGVyXCJcclxuKSA9PiB7XHJcbiAgY29uc29sZS5sb2coXCJkYXRhXCIsIGRhdGEpO1xyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICB9KTtcclxuICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcblxyXG4gIGNvbnN0IHJlc3BvbnNlX2RhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gIHJldHVybiByZXNwb25zZV9kYXRhO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIHJlY3VwZXJlIGxlcyBkb25uw6llIGVuIGZvcm1hdCBqc29uIGRlcyBjYW1lcmFzXHJcbiAqIEB1cmwgdXJsIGR1IHNlcnZldXIgb3UgZW52b3llciBsZXMgaW5mb3JtYXRpb25zXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZ2V0QWxsRGF0YSA9IGFzeW5jIChcclxuICB1cmw6IHN0cmluZyA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9jYW1lcmFzXCJcclxuKSA9PiB7XHJcbiAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICBsZXQgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICByZXR1cm4gZGF0YTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiByZWN1cGVyZSBsZXMgZG9ubsOpZXMgZCcgdW5lIGNhbWVyYSBlbiBmb25jdGlvbiBkZSBzb24gaWRcclxuICogQHVybCB7c3RyaW5nfSB1cmwgZHUgc2VydmV1ciBvdSBlbnZveWVyIGxlcyBpbmZvcm1hdGlvbnNcclxuICovXHJcbmV4cG9ydCBjb25zdCBnZXRJZERhdGEgPSBhc3luYyAoaWQ6IHN0cmluZykgPT4ge1xyXG4gIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9jYW1lcmFzL1wiICsgaWQpO1xyXG4gIGxldCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIHJldHVybiBkYXRhO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///593\n')}},__webpack_require__={d:(c,Q)=>{for(var F in Q)__webpack_require__.o(Q,F)&&!__webpack_require__.o(c,F)&&Object.defineProperty(c,F,{enumerable:!0,get:Q[F]})},o:(c,Q)=>Object.prototype.hasOwnProperty.call(c,Q)},__webpack_exports__={};__webpack_modules__[593](0,__webpack_exports__,__webpack_require__)})();