/**
 * prend un produit est cree des element pour le dom
 * @param {} element produit a contruire dans le dom
 */
export function getProduct(element: any) {
  let product = document.createElement("section");

  product.classList.add("product");

  let product__image = document.createElement("img");

  product__image.classList.add("product__image");
  product__image.setAttribute("src", element.imageUrl);

  let product__name = document.createElement("h3");
  product__name.classList.add("product__name");
  product__name.innerText = element.name;
  let product__description = document.createElement("p");
  product__description.classList.add("product__description");
  product__description.innerText = element.description;

  let product__prix = document.createElement("div");
  product__prix.classList.add("product__prix");
  product__prix.innerText = element.price + " €";
  product.append(
    product__image,
    product__name,
    product__description,
    product__prix
  );
  return product;
}

/**
 * envoye la commande au serveur et retourne le num de commande + la commande
 * @data les donnée du client adresse nom mail etc
 * @url  url du serveur ou envoyer les informations
 */
export const PostForm = async (
  data: any,
  url: any = "http://localhost:3000/api/cameras/order"
) => {
  console.log("data", data);
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  console.log(response);

  const response_data = await response.json();

  return response_data;
};

/**
 * recupere les donnée en format json des cameras
 * @url url du serveur ou envoyer les informations
 */
export const getAllData = async (
  url: string = "http://localhost:3000/api/cameras"
) => {
  let response = await fetch(url);
  let data = await response.json();
  return data;
};

/**
 * recupere les données d' une camera en fonction de son id
 * @url {string} url du serveur ou envoyer les informations
 */
export const getIdData = async (id: string) => {
  let response = await fetch("http://localhost:3000/api/cameras/" + id);
  let data = await response.json();
  return data;
};
