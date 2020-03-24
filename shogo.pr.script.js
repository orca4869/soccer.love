$(function(){
$("#form").click(function(){
$('#login-modal').fadeIn();


});

$('.signup-show').click(function(){

    $('#signup-modal').fadeIn();
});

$('.close-modal').click(function(){
    $('#signup-modal').fadeOut();
    $('#login-modal').fadeOut();
});



$('.faq-wrapper__item').click(function(){
    var $answer = $(this).find('.answer');
    if($answer.hasClass('open')){
        $answer.removeClass('open');
        $answer.slideUp();
        $(this).find('span').text('+');

    }else{
        $answer.addClass('open');
        $answer.slideDown();
        $(this).find('span').text('-');

    }
});

$('.page-header__form a').hover(
    function(){
    $(this).animate({'font-size':'15px'},300);
    },
    function(){
      $(this).animate({'font-size':'14px'},300);
    }
    
    );

var topBtn =$('#scroll');
topBtn.hide();
$(window).scroll(function(){
    if($(this).scrollTop() >100){
        topBtn.fadeIn();
    }else{
        topBtn.fadeOut();
    }
});


$('#scroll').click(function(){
    $('html,body').animate({'scrollTop':0},1000);
    
});

$('.page-header__block a').click(function(){
var id = $(this).attr('href');
var position = $(id).offset().top;
$('html,body').animate({'scrollTop':position},1000);


});




    




});
