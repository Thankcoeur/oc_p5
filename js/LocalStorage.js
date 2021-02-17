class LocalStorage {

    constructor() {

    }

    existe_dans_table(id,table) {
        var  result= false
        table.forEach(element => {
            console.log(element._id  +" : " + id)
            if (element._id == id) {
        
                result = true
            }
            
        });
        
        return result
        
    


    }

    retourneElement(id,table) {
        var  result= null
        table.forEach(element => {
            console.log(element._id  +" : " + id)
            if (element._id == id) {
        
                result = element
            }
            
        });
        
        return result
        
    


    }













    ajouter_item(item) {
        
       var  data  = this.recupererData('panier')

      
       if (this.existe_dans_table(item._id,data)) {
           
           item.qt = item.qt +1
            data.splice(data.indexOf(item),1,item)
            console.log(data)
            


       }

       else {
           item.qt = 1
           data.push(item)


       
       }

         this.envoyerData(data)

    }

    moins(element) {

       var  data = this.recupererData()
       element.qt = element.qt -1 
        if (element.qt <1) {
           if( confirm("ete vous sur de suprimer cette article  ?") ) 
           {

            data.splice(data.indexOf(element),1)
            
           }
           else {

            
           }

        

        }
        else {

            
            data.splice(data.indexOf(element),1,element)

        }
        

        this.envoyerData(data)
        


    }

    plus(element) {
        var  data = this.recupererData()
        if (element.qt <1) {

            element.qt = 0

        }
        element.qt = element.qt + 1
        data.splice(data.indexOf(element),1,element)

        this.envoyerData(data)




    }

    recupererData(nomTable) {
        
      if (window.localStorage.getItem(nomTable) == null && !Array.isArray( JSON.parse(window.localStorage.getItem('panier')))) {

        window.localStorage.setItem(nomTable,"[]")
        
        
      }

      return  JSON.parse(window.localStorage.getItem('panier'))




    }

    envoyerData(tab) {

        var str = JSON.stringify(tab)
        
        
        window.localStorage.setItem('panier', str)

    }

    

    
}





export { LocalStorage }


