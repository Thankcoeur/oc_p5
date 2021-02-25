
import { LocalStorage } from "./LocalStorage.js"
import { getPromise,getProduct } from "./utils.js";

var ls = new LocalStorage()
var prix = 0;
 var panier = ls.recupererData()

 console.log(panier)

panier.forEach(element => {
  

  getPromise('GET',"http://localhost:3000/api/cameras/"+element).then((oneProduct) => {


displaypanier_product(oneProduct)
document.getElementById("prix_total").innerText = prix + " €"



})

  
});


var tbody = document.getElementsByTagName("tbody")[0]


 function displaypanier_product(product) {
 
   var tr = document.createElement('tr')

   
   var name = document.createElement('td')
   name.innerText = product.name
  var prixelement  = document.createElement('td')
  prixelement.innerText = product.price +" €"

  prix = prix + product.price
   tr.append(name,prixelement)

   tbody.append(tr)
   
  
     
   }


   
   



 
