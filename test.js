



function  isExist(id,data) {
    var  result= false
data.forEach(element => {
    if (element.id == id) {

        result = true
    }
    
});

return result







}

var data =  [{id:"0"}]
var id  = "0"
console.log(isExist(id,data))