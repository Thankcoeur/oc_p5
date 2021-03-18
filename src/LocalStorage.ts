function observe() {

return function(target : any , descriptor : any) {
    let data : any  = null
    Object.defineProperty(target, descriptor, {
        get: function() { 
            
             return LocalStorage.recupererData(); 
        },
        set: function(data_) {
            console.log(data_)
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

 static recupererData() {
 return JSON.parse(window.localStorage.getItem("panier"))


}

static enregistrer(data :any) {
  window.localStorage.setItem('panier',JSON.stringify(data))

}






}