$(function(){

//햄버거 버튼을 클릭하면
$('.open_gnb').click(function(){
    $(this).toggleClass('open');
    $('.gnb_area').slideToggle();
    $('.m_gnb_dimmed').fadeToggle(200);
});


//main
    var sliderUl = $('#slider>ul');          
    var imgWidth = $('#slider img').width(); 
    var imgNumber = $('#slider li').length;  
    console.log(imgWidth);

    sliderUl.css({width:imgWidth*imgNumber});   


    var right = function(){
        sliderUl.find('li:last-child').insertBefore(sliderUl.find('li:first-child')); 
        sliderUl.css({'margin-left':-500});
        sliderUl.animate({'margin-left':0},300);
    };


    var left = function(){
        sliderUl.animate({'margin-left':500},300,'swing',function(){
            sliderUl.css({'margin-left':0});
            sliderUl.find("li:first-child").insertAfter(sliderUl.find("li:last-child"));
        });    
    }; 


    $(".right").click(function(){
        right();
    });


    $(".left").click(function(){
        left();
    });




    var du = 400; 

$(".first .item").on("mouseenter",function(){
  $(this).find("strong, span").stop().animate({opacity:1},du);
})
.on("mouseleave",function(){
  $(this).find("strong, span").stop().animate({opacity:""},du);
});






//슬라이더-slick
$('.slides').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
});


$('.move').slick({
    dots: true,
    infinite: true,
    speed: 200,
    fade: true,
    cssEase: 'linear',
    arrows:false,
    autoplay: true,
  });
    



});
