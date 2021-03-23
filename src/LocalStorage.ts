/**
 * decorateur qui permet de modifier le getter et le setter de la proprieté
 */
function observe() {


return function(target : any , descriptor : any) {
    let data : any  = null
    Object.defineProperty(target, descriptor, {
        get: function() { 

            data = LocalStorage.recupererData();
             return data
            
        },
        set: function(data_) {
            
            LocalStorage.enregistrer(data_)
           data = data_
        },
    });

}


}




export class LocalStorage {



@observe()
data :Array<Object>
constructor() {


    

   





}

/**
 * recupere les données du localstorage
 */
 static recupererData() {
     let data =JSON.parse(window.localStorage.getItem("panier"))


return data


}
/**
 * enregistre les données dans le localStorage
 * @param data données a enregistrer dans le localStorage
 */
static enregistrer(data :any) {
  window.localStorage.setItem('panier',JSON.stringify(data))

}






}