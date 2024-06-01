$('.banner_main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots:true,
    nextArrow:".next",
    prevArrow:".prev",
    speed:500,
  });

$('.tp-product-gadget-area_slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots:true,
    arrows:false,
  });
$('.tp-product-banner-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots:true,
    arrows:false,
    centerMode: true,
    centerPadding:"0px"
  });



  
  var containerEl = document.querySelector('.trending');
var mixer = mixitup(containerEl);



// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo1").innerHTML = days + "d ";
  document.getElementById("demo2").innerHTML = hours + "h ";
  document.getElementById("demo3").innerHTML = hours + "m ";
    document.getElementById("demo4").innerHTML = seconds + "s ";
  document.getElementById("demo5").innerHTML = days + "d ";
  document.getElementById("demo6").innerHTML = hours + "h ";
  document.getElementById("demo7").innerHTML = hours + "m ";
    document.getElementById("demo8").innerHTML = seconds + "s ";
  document.getElementById("demo9").innerHTML = days + "d ";
  document.getElementById("demo10").innerHTML = hours + "h ";
  document.getElementById("demo11").innerHTML = hours + "m ";
    document.getElementById("demo12").innerHTML = seconds + "s ";
  document.getElementById("demo13").innerHTML = days + "d ";
  document.getElementById("demo14").innerHTML = hours + "h ";
  document.getElementById("demo15").innerHTML = hours + "m ";
    document.getElementById("demo16").innerHTML = seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

new VenoBox({
  selector: ".venobox"
});














