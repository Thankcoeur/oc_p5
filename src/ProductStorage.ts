class ProductStorage {


/**
 * ajoute un item au tableau en parametre
 */  
  AddItem(id: string,data : Array<Object>) : Array<Object> {
    let data_ = [...data]
    data_.push(id)
    return data_
  }

  /**
   * suprime un item au tableau en parametre
   */
  removeItem(id: string,data : Array<Object>) {
    let data_ = [...data]
    console.log(data_.splice(this.getIndex(id,data_), 1))
    return data_.splice(this.getIndex(id,data_), 1);
  }


   /**
   * rucupere l' index de tableau ou se trouve l'element ou - 1 quand aucun element est trouvé
   */
  getIndex(id: string,data : Array<Object>): number {
    let  data_ = [...data]
    return data_.findIndex((i) => i == id);
  }
 
}

export { ProductStorage };
