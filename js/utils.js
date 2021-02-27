
/**
 * fonction qui envoie des requete au serveur et revoie une promise
 * @param {string} method get ou post
 * @param  {url} url url de la requete  
 * @param {object} data  donnée a envoyer en cas de requete post
 */
  export function getPromise(method,url,data) {

  return new Promise(function (resolve,reject) {
    
    var req = new XMLHttpRequest()
  req.open(method, url, true)
  req.onreadystatechange = function () {
    if (req.readyState == 4) {
    
       if(req.status == 201 || req.status == 200) {
         console.log(req.responseText)
        resolve(JSON.parse(req.responseText))

       }
        
       else
         {
            reject()
         }
    }
  };
  if(method == 'POST'){
    req.setRequestHeader("Content-Type", "application/json");
    console.log(data)
       req.send(JSON.stringify(data));
       
}
else {

  req.send()
}
  
    
 })

    
}

/**
 * prend un produit est cree des element pour le dom
 * @param {} element produit a contruire dans le dom
 */
  export function getProduct(element) {


  let product = document.createElement("section")
        product.classList.add("product")
        product.classList.add("d-flex")
        product.classList.add("align-items-center")
        product.classList.add("justify-content-center")
        product.classList.add("flex-column")
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










