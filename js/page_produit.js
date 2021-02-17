import {getPromise,getProduct} from "./utils.js"
import {LocalStorage} from "./LocalStorage.js"

var localS = new LocalStorage()

let element = JSON.parse(window.localStorage.getItem("element"))



   let product = getProduct(element)
   document.getElementsByClassName("product")[0].append(product)

function ajouter_panier (element) {

localStorage.setItem("pannier",JSON.stringify(element))

    
}
document.getElementsByClassName('ajouter_panier')[0].addEventListener('click',()=> {

   localS.ajouter_item(element)
})










