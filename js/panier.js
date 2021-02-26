
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


   document.getElementById('form').addEventListener('submit', function(e){
    e.preventDefault();
    sendData();
})

   function sendData() {
    let formData = document.getElementsByClassName("form__input");
    
    let contact = {
        firstName : formData[0].value,
        lastName : formData[1].value,
        
        email : formData[2].value,
        tel: formData[3].value,
        address :formData[4].value,
        city : formData[5].value,
    }

    let products = ls.recupererData()


    let data  =  {contact,products}
    console.log(data)

    getPromise("POST",'http://localhost:3000/api/cameras/order',data).then( (res) => {

    var orderId = res.orderId
    localStorage.setItem("totalAmount", prix);
        localStorage.setItem("orderId", orderId);
        window.open("confirmation_de_commande.html");
    })






   }


   
   



 
