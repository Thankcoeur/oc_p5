

  export function getPromise(url) {

  return new Promise(function (resolve,reject) {
    
    var req = new XMLHttpRequest()
  req.open('GET', url, true)
  req.onreadystatechange = function () {
    if (req.readyState == 4) {
       if(req.status == 200) {
        resolve(JSON.parse(req.responseText))

       }
        
       else
         {
            reject('error')
         }
    }
  };
  req.send(null)
    
 })

    
}








