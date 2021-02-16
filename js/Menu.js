

  export function Menu(){
     var i = document.getElementById("menu_nav");
     if(i.style.display === "flex"){
        i.style.display = "none";
     }else{
         i.style.display = "flex";
     } 
     
     let activeItem = document.querySelector("#menu_nav > li:nth-child(2)");
 activeItem.classList.add("active_item");
 }








