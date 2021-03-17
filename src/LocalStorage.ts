class LocalStorage {




  AddItem(id: string, data: Array<Object>) {

    if (typeof id !== "string") {

      throw new Error("le parametre id  doit etre de type string ")


    }





    var data = this.recupererData()
    var index = this.getIndex(id, data)

    if (index < 0) {


      data.push(id)
      this.updateData(data)
    }






  }

  /**
   * suprimer un element du local storage avec un id
   * @param {number} id  identifiant de l'element à suprimer 
   * 
   */
  removeItem(id: string, data: Array<Object>) {
    console.log(id)

    if (typeof id !== "string") {
      throw new Error("le parametre id n'est pas une chaine de caractere")
    }
    if (this.getIndex(id, data) < 0) {

      throw new Error("le produit a suprimer n' existe pas")
    }
    if (data == undefined) {
      throw new Error("aucune donnée")

    }


    data.splice(this.getIndex(id, data), 1)

    this.updateData(data)















  }

  /**
   * permet de conaitre si le produit ayant cette identifiant existe
   * dans le local storage
   * envoie -1 si rien n' es trouvé 
   * ou l'index de l' objet
   * @param {number} id id à inserer 
   */

  getIndex(id: string, data: Array<Object>): number {




    return data.findIndex(id1 => id1 == id)




  }


  just(name: number) {

    return name
  }








  /**
   * recupere les données du local storage sous forme de tableau
   * @return  {Array}
   */
  recupererData(): Array<Object> {

    if (window.localStorage.getItem('panier') == null && !Array.isArray(JSON.parse(window.localStorage.getItem('panier')))) {

      window.localStorage.setItem('panier', "[]")


    }

    return JSON.parse(window.localStorage.getItem('panier'))




  }

  /**
   * met a jour le localstorage avec le tableau envoyé en parametre
   * @param {Array} data 
   */

  updateData(data: Array<Object>) {

    var str = JSON.stringify(data)


    window.localStorage.setItem('panier', str)

  }




}





export { LocalStorage }


