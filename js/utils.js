

  export function getPromise(url) {

  return new Promise(function (resolve,reject) {
    
    var req = new XMLHttpRequest()
  req.open('GET', url, true)
  req.onreadystatechange = function () {
    if (req.readyState == 4) {
       if(req.status == 200) {
        resolve(JSON.parse(req.responseText))

       }
        
       else
         {
            reject('error')
         }
    }
  };
  req.send(null)
    
 })

    
}


  export function getProduct(element) {


  let product = document.createElement("section")
        product.classList.add("produit")
        let product__image = document.createElement('img')
        product__image.classList.add("product__image")
        product__image.setAttribute("src",element.imageUrl)

        let product__name = document.createElement('h3')
        product__name.classList.add("product__name")
        product__name.innerText = element.name;
        let product__description = document.createElement('p')
        product__description.classList.add("product__description")
        product__description.innerText = element.description

        let product__prix  = document.createElement('div')
        product__prix.classList.add("product__prix")
        product__prix.innerText = element.price +" €"
        product.append(product__image,product__name,product__description,product__prix)
        return product
}










