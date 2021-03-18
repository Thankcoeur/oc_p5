import { ProductStorage } from "./ProductStorage"
import {  getIdData, getProduct, PostForm } from "./utils";
import { Factory } from './Factory';

var productf = Factory.getProductStorage() 
var localS = Factory.getLocalStorage()
var tbody = document.getElementsByTagName("tbody")[0]
var prix  : number = 0;

function render () {
  tbody.innerHTML =""
  prix = 0 
  
 var panier :any = Factory.getLocalStorage().data
  document.getElementById("prix_total").innerText = prix + " €"

  panier.forEach((element : string )  => {

    (async () => {
      let oneProduct = await getIdData(element)
      displaypanier_product(oneProduct)
      document.getElementById("prix_total").innerText = prix + " €"

    })()
    document.getElementById("prix_total").innerText = prix + " €"

     localS.data = productf.removeItem(element,localS.data)

    
  });
}
  
  function displaypanier_product(product :any) {
    var tr = document.createElement('tr')
    tr.setAttribute("data-id",product._id)
    var name = document.createElement('td')
    name.innerText = product.name
    var prixelement = document.createElement('td')
    prixelement.innerText = product.price + " €"
    var btn  = document.createElement("td")
    btn.innerHTML = '<i class="fas fa-trash"></i>'
    btn.addEventListener("click" ,() => {
    
  var e :any  = document.querySelectorAll('[data-id="' + product._id+'"]')[0];
  
  
    
  
  render()
  
  })

  
    prix = prix + product.price
    tr.append(name, prixelement,btn)
  
    tbody.append(tr)
}




render()

document.getElementById('form').addEventListener('submit', function (e) {
  e.preventDefault();
  sendData();
})

/**
 * Envoie les produits commandés et les information de contact
 */

function sendData() {
  let formData :any = document.getElementsByClassName("form__input");

  let contact = {
    firstName: formData[0].value,
    lastName: formData[1].value,

    email: formData[2].value,
    tel: formData[3].value,
    address: formData[4].value,
    city: formData[5].value,
  }


  let data = { contact };
  

  (async () => {

    var post = await PostForm(data)
    window.localStorage.setItem('orderId',post.orderId)
    window.localStorage.setItem('totalAmount',prix.toString())
    window.open("confirmation_de_commande.html")



  })()

  
 



}