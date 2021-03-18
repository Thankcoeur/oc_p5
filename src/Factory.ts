import { LocalStorage } from './LocalStorage';
import { ProductStorage } from './ProductStorage';

 export class Factory {

   static  LocalStorage_ :LocalStorage = null
  static   ProductStorage_ : ProductStorage = null
   

static getLocalStorage() {

    if(Factory.LocalStorage_ == null) {

        Factory.LocalStorage_ =  new LocalStorage()
        return Factory.LocalStorage_
    }
    return Factory.LocalStorage_


    
}
static getProductStorage() {

    if(Factory.ProductStorage_ == null) {

        Factory.ProductStorage_ =  new ProductStorage()
        return Factory.ProductStorage_
    }
    return Factory.ProductStorage_

    


    return new ProductStorage
}




}
