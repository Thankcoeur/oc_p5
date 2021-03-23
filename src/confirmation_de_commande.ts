 
 var total : string =  window.localStorage.getItem('totalAmount') 
 var id_commmande = window.localStorage.getItem('orderId')


document.getElementById('confirmation').innerText ="merci de votre commande num : "+ id_commmande +" d' un montant de : "+ total +" €"
 



