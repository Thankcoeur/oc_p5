import {getPromise,getProduct} from "./utils.js"
import {LocalStorage} from "./LocalStorage.js"

var localS = new LocalStorage()

let id = window.localStorage.getItem("ref_id")

console.log(id)

getPromise('GET',"http://localhost:3000/api/cameras/"+id).then((oneProduct) => {

  
displayOneProduct(oneProduct)



})

   function displayOneProduct(element) {

      let product = getProduct(element)
      document.getElementById("vue").append(product)

     var selectList =  document.createElement("select")
     selectList.setAttribute('name',"option")
     selectList.id ="option"


     element.lenses.map( e => {
      var option =  document.createElement('option')

      option.setAttribute("value",e)
      option.innerText =  e

      selectList.append(option)


     })
      product.append(selectList)
   
   
   document.getElementById('ajouter__panier').addEventListener('click',()=> {
   
      localS.AddItem(id)
   })
   
   
   



   }







