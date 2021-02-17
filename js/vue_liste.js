import { getPromise, getProduct } from "./utils.js"


getPromise('http://localhost:3000/api/cameras').then((res) => {

    displayCameras(res)
    console.log(res)




})

const listeVue = document.getElementById('liste');
const content = document.createElement("div")
function displayCameras(products) {
    console.log(typeof products)
    products.forEach(element => {

        var product = getProduct(element)
        var btn = document.createElement("div")
        btn.innerText = "voir plus"

        btn.onclick = function storeData() {
            window.localStorage.setItem('element', JSON.stringify(element))
            window.open("page_produit.html", "_self");
        };

        btn.classList.add("btn_voir_plus")
        product.append(btn)

        content.append(product)







    })

    listeVue.append(content)


}










