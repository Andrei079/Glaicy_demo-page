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
var slide=document.querySelector("#point2");
slide.addEventListener("click", function () {
    document.body.style.backgroundImage = "url('img/ice_cream_2')";
});

})

