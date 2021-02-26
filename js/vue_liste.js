import { getPromise, getProduct } from "./utils.js"


getPromise('GET','http://localhost:3000/api/cameras').then((AllProducts) => {
    
    displayCameras(AllProducts)
    




})

const listeVue = document.getElementById('vue');
const content = document.createElement("div")
content.classList.add("row")


function displayCameras(AllProducts) {
    
    AllProducts.forEach(element => {

        var product = getProduct(element)
        
        var btn = document.createElement("div")
        btn.innerText = "voir plus"

        btn.onclick = function storeData() {
            window.localStorage.setItem('ref_id', element._id)
            window.open("page_produit.html", "_self");
        };

        btn.classList.add("btn_voir_plus")
        product.append(btn)
        let div = document.createElement("div")
        div.classList.add("col-md-4")
        div.classList.add("col-sm-12")
        div.append(product)
        content.append(div)







    })

    listeVue.append(content)


}










