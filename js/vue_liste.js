import {getPromise} from "./GetDatas.js"
import {Menu} from "./Menu.js"
Menu()

getPromise('http://localhost:3000/api/cameras').then((res) => {

displayCameras(res)

})

const listeVue = document.getElementById('liste');

function displayCameras(appareil){
    for(let i in appareil) {
        let product__card = document.createElement('section');
            product__card.classList.add('product');
            product__card.onclick = function storeData(){
                window.localStorage.setItem('product__details', JSON.stringify(appareil[i]));
                window.open("page_produit.html");
            };

        let product__left__div = document.createElement('div');
        let product__name = document.createElement('h3');
            product__name.innerText = `${appareil[i].name}`;

        let product__image = document.createElement('img');
            product__image.classList.add("product__image")
            product__image.src = `${appareil[i].imageUrl}`;
            console.log(product__image.src);

        let product__right__div = document.createElement('div');
        let product__price = document.createElement('p');
            product__price.classList.add('product_price');
            product__price.innerText = `${appareil[i].price}` + `€`;

        let product__description = document.createElement('p');
            product__description.innerText = `${appareil[i].description}`;

        listeVue.append(product__card);
        product__card.append(product__left__div,product__right__div);
        product__left__div.append(product__name,product__image);
        product__right__div.append(product__price,product__description);
    }
}