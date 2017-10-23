$(function(){
    $('a.scroll').click(function(){
        var el = $(this);
        $('html, body')
            .stop()  // .stop() to stop current scrolling animation
            .animate({scrollTop: $(el.attr('href')).offset().top-$('header').height()},1000,'swing');
        event.preventDefault(); 
    });
})
$(function(){
    var arr=['.line-1','.line-2','.line-3','.morocco-1','.morocco-2','.morocco-3'];
    var path, length;
    for(let line of arr){
        path = document.querySelector(line);
        length = path.getTotalLength();
        $(line).css('stroke-dasharray',length);
        $(line).css('stroke-dashoffset',length);
    }
    $('#edu-container').fadeOut();
    $('#port-container').fadeOut();
    $('#cont-container').fadeOut();
    var date = new Date();
    $('span').append(date.getFullYear()-1993);
})

$(window).scroll(function() {
    var y = $(this).scrollTop();
    var x = $('#education').position().top-150;
    var z = $('#portfolio').position().top-150;
    var t = $('#contact').position().top-150;
    if (y >=x) {
      $('#edu-container').fadeIn();
    } else {
      $('#edu-container').fadeOut();
    }
    if (y >=z) {
        $('#port-container').fadeIn();
      } else {
        $('#port-container').fadeOut();
    }
    if (y >=t) {
        $('#cont-container').fadeIn();
    }
  });