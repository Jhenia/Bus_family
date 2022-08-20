 //Header burger     
      let header__burger = document.querySelector('.burger');
        let header_menu = document.querySelector('.header__menu');
        let back = document.querySelector('body');


        header__burger.onclick = function(){
            header__burger.classList.toggle('active');
            header_menu.classList.toggle('active');
            back.classList.toggle('locked');
        }
//Header burger   
	
jQuery(document).ready(function($) {
  var myHash = location.hash; //получаем значение хеша
  location.hash = ''; //очищаем хеш
  if(myHash[1] != undefined){ //проверяем, есть ли в хеше какое-то значение
  $('html, body').animate(
  {scrollTop: $(myHash).offset().top - 110}
  , 700); //скроллим за полсекунды
  location.hash = '';
 
  history.pushState("", document.title, window.location.pathname);
   //возвращаем хеш
  };
  });
  $('a[href*="#"]').on('click', function() {
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
  });	

var btnContainer = document.getElementById("nav");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("trigger__link");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


         
     
