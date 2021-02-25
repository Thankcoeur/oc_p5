class LocalStorage {

    

  /**
   * ajoute un produit dans le local storage
   * @param {number} id  identifiant du produit
   */
   AddItem(id) {

   var data =  this.recupererData()
   var index = this.getIndex(id)
   console.log(index)
    if(index < 0) {
        

        data.push(id) 
        this.updateData(data)
    }


   



   }

  /**
   * suprimer un element du local storage avec un id
   * @param {number} id  identifiant de l'element à suprimer 
   * 
   */
   removeItem(id) {

    var data = this.recupererData()

    data.splice(this.getIndex(id),1)

    this.updateData(data)



   }

   /**
    * permet de conaitre si le produit ayant cette identifiant existe
    * dans le local storage
    * envoie -1 si rien n' es trouvé 
    * ou l'index de l' objet
    * @param {number} id id à inserer 
    */

   getIndex(id) {

    var data = this.recupererData()
    console.log(id)
     var index = data.findIndex( e =>   e.id === id  )
     
    return index

   }

   

   

    

   
/**
 * recupere les données du local storage sous forme de tableau
 * @return  {Array}
 */
    recupererData() {
        
      if (window.localStorage.getItem('panier') == null && !Array.isArray( JSON.parse(window.localStorage.getItem('panier')))) {

        window.localStorage.setItem('panier',"[]")
        
        
      }

      return  JSON.parse(window.localStorage.getItem('panier'))




    }

    /**
     * met a jour le localstorage avec le tableau envoyé en parametre
     * @param {Array} data 
     */

    updateData(data) {

        var str = JSON.stringify(data)
        
        
        window.localStorage.setItem('panier', str)

    }

    

    
}





export { LocalStorage }


