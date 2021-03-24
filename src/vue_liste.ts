import { getProduct, getAllData } from "./utils";

import { LocalStorage } from "./LocalStorage";
import { ProductStorage } from "./ProductStorage";

var a = new LocalStorage();

var ProductStrorage_ = new ProductStorage();

(async () => {
  try {
    const data = await getAllData();
    displayCameras(data);
  } catch (e) {
    alert(e);
  }
})();

const listeVue = document.getElementById("vue");
const content = document.createElement("div");
content.classList.add("list-vue");

function displayCameras(AllProducts: any) {
  AllProducts.forEach((element: any) => {
    var product = getProduct(element);

    var btn = document.createElement("div");
    btn.innerText = "voir plus";

    btn.onclick = function storeData() {
      window.localStorage.setItem("ref_id", element._id);
      window.open("page_produit.html", "_self");
    };

    btn.classList.add("btn-voir-plus");
    product.append(btn);
    let div = document.createElement("div");

    div.append(product);
    content.append(div);
  });

  listeVue.append(content);
}
