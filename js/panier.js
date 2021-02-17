
import { LocalStorage } from "./LocalStorage.js"


var ls = new LocalStorage()





  

function display_panier() {
  var vue_panier = document.getElementById("vue_panier")
  var prix = 0;
var panier = ls.recupererData()
  var el = document.createElement("div")

  panier.forEach(element => {
 
    var panier_item = document.createElement("div")
    panier_item.setAttribute("data-id",element._id )
    panier_item.classList.add("panier_item")
    var panier_item_h3 = document.createElement('h3')
    panier_item_h3.innerText = element.name
    var panier_item_prix = document.createElement('div')
    panier_item_prix.innerText = element.price*element.qt + " €"
    var panier_qt = document.createElement('div') 
    panier_qt.innerText = element.qt
    
    var panier_moins = document.createElement('div')
    panier_moins.innerText="-"

    prix = prix + element.price*element.qt
    panier_moins.classList.add("panier_moins")
    panier_moins.addEventListener('click',(e) => {
      
     ls.moins(element)
      el.remove()
     display_panier(panier)
     
     

    })

    var panier_plus = document.createElement('div')
    panier_plus.innerText="+"
    panier_plus.classList.add("panier_moins")
    panier_plus.addEventListener('click',(e) => {
      
     ls.plus(element)
      el.remove()
     display_panier(panier)
     
     

    })
    panier_item.append(panier_item_h3, panier_item_prix,panier_qt,panier_moins,panier_plus)
    
    
    el.append(panier_item)
    



  });

  
 var prix_total = document.createElement('div')
  prix_total.innerText = prix +" €"
 el.append(prix_total)


vue_panier.append(el)


}



  display_panier()




