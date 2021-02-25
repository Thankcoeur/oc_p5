 
 var total =  window.localStorage.getItem('totalAmount') 
 var id_commmande = window.localStorage.getItem('orderId')
 window.localStorage.clear()

 var confirmation = document.getElementById('confirmation').innerText ="merci de votre commande num : "+ id_commmande +" d' un montant de : "+ total +" €"
 



