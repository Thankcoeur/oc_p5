class ProductStorage {
  
  AddItem(id: string,data : Array<Object>) : Array<Object> {
    let data_ = [...data]
    data_.push(id)
    return data_
  }

  removeItem(id: string,data : Array<Object>) {
    let data_ = [...data]
    console.log(data_.splice(this.getIndex(id,data_), 1))
    return data_.splice(this.getIndex(id,data_), 1);
  }

  getIndex(id: string,data : Array<Object>): number {
    let  data_ = [...data]
    return data_.findIndex((i) => i == id);
  }
 
}

export { ProductStorage };
