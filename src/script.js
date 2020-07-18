//index slide show

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} //resets slider to first index
  if (n < 1) {slideIndex = slides.length} //resets slider to last index
  for (i = 0; i < slides.length; i++) { //Hide all image items
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", ""); //Hide all dot items
  }
  if(slides[slideIndex-1]){ //Display what it current active item is
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }
}


// grid item filter
var items = document.getElementsByClassName('grid-item');


function filterItems() {
    var type = document.getElementById("filterSelect").value;
    
    for (var i = 0; i < items.length; i++){
        var itemType= items[i].getElementsByClassName("item__type");
        var itemTypeValue= itemType[0].innerText;

        if(itemTypeValue == type){
            items[i].style.display = '';
        }
        else if(type == 'default'){
            items[i].style.display = '';
        }
        else{
            items[i].style.display = 'none';
        }
    }
}

var items = document.getElementsByClassName('grid-item');

function priceItems() {
    var price = document.getElementById("priceSelect").value;
    
    for (var i = 0; i < items.length; i++){
        var itemPrice= items[i].getElementsByClassName("item__price");
        var itemPriceValue= itemPrice[0].innerText;

        if(itemPriceValue == price){
            items[i].style.display = '';
        }
        else if(price == 'default'){
            items[i].style.display = '';
        }
        else{
            items[i].style.display = 'none';
        }

    }
}

function validateForm() {
    var x = document.forms["myForm"]["name"].value;
    var y = document.forms["myForm"]["email"].value;
    var z = document.forms["myForm"]["message"].value;

    if (x == "") {
      alert("Name or Email must be filled out");
      return false;
    }
    else if (y == "") {
      alert("Name or Email must be filled out");
      return false;
    }
    else if (z == "") {
      alert("Message must be filled out");
      return false;
    }
    else{
        return true;
    }
    
}
