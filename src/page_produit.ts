import {  getProduct, getIdData } from "./utils"
import { LocalStorage } from "./LocalStorage"


var localS = new LocalStorage();

var id = window.localStorage.getItem("ref_id");




 
(async () => {
   try {

       var data  = await getIdData(id)
   displayOneProduct(data,localS.recupererData())
   }catch (e) {

      alert(e)
   }
  
      
   

})()

function displayOneProduct(element: any, data: Array<Object>): void {

   let product = getProduct(element)
   document.getElementById("vue").append(product)

   var selectList = document.createElement("select")
   selectList.setAttribute('name', "option")
   selectList.id = "option"


   element.lenses.map((e: string) => {
      var option = document.createElement('option')

      option.setAttribute("value", e)
      option.innerText = e

      selectList.append(option)


   })
   product.append(selectList)


   document.getElementById('ajouter__panier').addEventListener('click', () => {

      localS.AddItem(id, data)
      alert('enregistré dans le panier')

   })

}













