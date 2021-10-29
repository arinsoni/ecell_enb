var slideIndex = 1;
showDivs(slideIndex);

var slideIndex = 0;

var myVar;

carousel();

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function myFunction() {
  myVar = setTimeout(carousel, 100000000000000);
}

function myStopFunction() {
  clearTimeout(myVar);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = x.length; }
  for (i = 0; i < x.length; i++) {
    if (window.CP.shouldStopExecution(0)) break;
    x[i].style.display = "none";
  } window.CP.exitedLoop(0);
  for (i = 0; i < dots.length; i++) {
    if (window.CP.shouldStopExecution(1)) break;
    dots[i].className = dots[i].className.replace(" w3-white", "");
  } window.CP.exitedLoop(1);
  x[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " w3-white";

  myStopFunction();
  myFunction();
}

function carousel() {
  var dots = document.getElementsByClassName("demo");
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    if (window.CP.shouldStopExecution(2)) break;
    x[i].style.display = "none";
  } window.CP.exitedLoop(2);

  slideIndex++;
  if (slideIndex > x.length) { slideIndex = 1; }
  x[slideIndex - 1].style.display = "block";

  for (i = 0; i < dots.length; i++) {
    if (window.CP.shouldStopExecution(3)) break;
    dots[i].className = dots[i].className.replace(" w3-white", "");
  } window.CP.exitedLoop(3);

  dots[slideIndex - 1].className += " w3-white";

  myStopFunction();
  myFunction();


}

$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 300) {
      $(".navbar").css("background", "black");
    } else {
      $(".navbar").css("background", "white");
    }
  });
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 300) {
    $('#navbarNav').addClass('black-nav');
  } else {
    $('#navbarNav').removeClass('black-nav');
  }
});

