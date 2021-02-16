import {getPromise,getProduct} from "./utils.js"


getPromise('http://localhost:3000/api/cameras').then((res) => {

displayCameras(res) 




})

const listeVue = document.getElementById('liste');
const content = document.createElement("div")
function displayCameras(products){
    products.forEach(element => {

       var product =  getProduct(element)
        product.onclick = function storeData(){
            window.localStorage.setItem('element', JSON.stringify(element))
            window.open("page_produit.html");
        };
       
        content.append(product)

    




        
    })

    listeVue.append(content)
    

}



  

    
    
