//появление и закрытие скрытых окон
document.addEventListener('DOMContentLoaded', function () {

// поиск
var link = document.querySelector(".search");
var popup = document.querySelector(".search-form");

link.addEventListener("click", function(event) {    event.preventDefault();
popup.classList.toggle("form-show");  });

//логин
var link1 = document.querySelector(".login");
var popup1 = document.querySelector(".login-form");
link1.addEventListener("click", function(event) {    event.preventDefault();
popup1.classList.toggle("form-show");});
// полная корзина (на стр каталог)
/* var link2 = document.querySelector(".basket-full");
var popup2 = document.querySelector(".basket-form");
link2.addEventListener("click", function(event) { event.preventDefault();
popup2.classList.toggle("form-show");  });
 */
//слайдер 
    var slide = document.querySelectorAll(".promotion-slider input");
    var img = document.querySelector(".body");
    var text = document.querySelector(".promotion__text"); 
// ljk;ty bflhtc cskrbvtyznmcz
    slide[1].addEventListener("click", function () {    
      
        img.style.backgroundImage = "url('img/ice_cream_3.jpg')";
        img.style.backgroundColor = "#8a97a7"; 
        text.innerHTML= 'Шоколадный пломбир и лимонный сорбет '; 
       
    }); 

    slide[2].addEventListener("click", function () {       
        img.style.backgroundImage = "url('img/ice_cream_2.jpg')";
        img.style.backgroundColor = "#9d8b84";
        text.innerHTML = 'Пломбир с помадкой и клубничный щербет';  
    }); 

    slide[0].addEventListener("click", function () {       
        img.style.backgroundImage = "url('img/ice_cream_1.jpg')";
        img.style.backgroundColor = "#849d8f ";
        text.innerHTML = 'Крем-брюле и пломбир с малиновым джемом';
    }); 
window.onload = function () {  
   setInterval(ChangeBackground, 10000); 
   
    var i=0;
    function ChangeBackground() {
        if (i==2) { i=0; }
        else {
        i=i+1;  }      
        slide[i].click();
        
       
     
    }
  
   


}



})



