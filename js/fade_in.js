$(window).on('scroll', function(){

  var scrollTop = $(window).scrollTop();
  var bgPosition = scrollTop / 2;

  if(bgPosition){
    $('.animated').css('background-position', 'center left -'+ bgPosition + 'px');
  }
});