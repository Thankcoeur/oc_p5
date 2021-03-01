
import { LocalStorage } from "./LocalStorage.js"
import { getPromise, getProduct } from "./utils.js";

var ls = new LocalStorage()
var tbody = document.getElementsByTagName("tbody")[0]
 var prix = 0;

function render () {
  tbody.innerHTML =""
  
  prix = 0 
  var panier = ls.recupererData()
 




  document.getElementById("prix_total").innerText = prix + " €"




  panier.forEach(element => {


    getPromise('GET', "http://localhost:3000/api/cameras/" + element).then((oneProduct) => {
  
  
      displaypanier_product(oneProduct)
      console.log(prix + "ici")
      document.getElementById("prix_total").innerText = prix + " €"
  
  
  
    })

    document.getElementById("prix_total").innerText = prix + " €"
  
  
  });





}
  
  
  

  
  
  function displaypanier_product(product) {
  
    var tr = document.createElement('tr')
    tr.setAttribute("data-id",product._id)
  
  
    var name = document.createElement('td')
    name.innerText = product.name
    var prixelement = document.createElement('td')
    prixelement.innerText = product.price + " €"
  
    var btn  = document.createElement("td")
  
    btn.innerHTML = "<btn>remove</btn>"
  
  btn.addEventListener("click" ,() => {
    
  var e = document.querySelectorAll('[data-id="' + product._id+'"]')[0];
  ls.removeItem(e._id)
  console.log(prix)
    e.remove()
  
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

function sendData() {
  let formData = document.getElementsByClassName("form__input");

  let contact = {
    firstName: formData[0].value,
    lastName: formData[1].value,

    email: formData[2].value,
    tel: formData[3].value,
    address: formData[4].value,
    city: formData[5].value,
  }

  let products = ls.recupererData()


  let data = { contact, products }
  console.log(data)

  getPromise("POST", 'http://localhost:3000/api/cameras/order', data).then((res) => {

    var orderId = res.orderId
    localStorage.setItem("totalAmount", prix);
    localStorage.setItem("orderId", orderId);
    window.open("confirmation_de_commande.html");
  })


}