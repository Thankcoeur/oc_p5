import {getPromise,getProduct} from "./utils.js"

let element = JSON.parse(window.localStorage.getItem("productDetails"));


(function displayProductDetails(){
   let product = getProduct(element)
   document.getElementsByClassName("product")[0].append(product)

})()








