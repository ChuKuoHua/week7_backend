import $ from 'jquery'
$(window).scroll(function(event){
  var scrollVal=$(this).scrollTop();
  if(scrollVal > 100){
    $('.top').fadeIn();
  }else if(scrollVal > 50){
    $('.navbar').css({'transform':'translateY(-50px)'});
    $('.sidebar').css({'transform':'translateY(-50px)'});
  }else{
    $('.top').fadeOut();
    $('.navbar').css({'transform':'translateY(0px)'});
    $('.sidebar').css({'transform':'translateY(0px)'});
  }
})