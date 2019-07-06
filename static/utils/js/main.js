var swiper1 = new Swiper('.swiper-container1', {
    pagination: '.swiper-pagination',
    //nextButton: '.swiper-button-next',
    //prevButton: '.swiper-button-prev',
    paginationClickable: true,
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: 2500,
    speed:1000,
    autoplayDisableOnInteraction: false
});

(function(){
    $(window).scroll(function () {
        var stop=$(window).scrollTop();
        if(stop>0){
            $(".h-nav").addClass("fix-nav");
        }else{
            $(".h-nav").removeClass("fix-nav");
        }
    })
})();
//nav
$(function () {
   $(".i_sch").click(function () {
       $(".f-mask").toggleClass("m_show")
   });

    $(".btn_i").click(function(){
        $(this).toggleClass("btn_i_click");
        $(".h-nav-g").toggleClass("translate");
        $(".ul-small").toggleClass("translate2");
    })
});
//friend
(function () {
    $(".friend-ol li").each(function (i) {
        $(this).hover(function () {
            $(this).addClass("li_active").siblings().removeClass("li_active");
            $(".friend-list").eq(i).show().siblings(".friend-list").hide();
        })
    }).eq(0).mouseover();
})();
//info-nav
(function () {
    var _nav=$(".info-nav ul li");
    _nav.css("width",(100/_nav.length)+"%");
})();


//逐个出现
function zu(ele){
    $(ele).each(function (i) {
        $(this).attr("data-wow-delay","0."+i*2+"s")
    })
}
$(".info-title").addClass("wow fadeInUpSmall");
$(".info-title small").addClass("wow fadeInUpSmall")
    .attr("data-wow-delay","0.2s");

zu(".news ul li");
zu(".time ul li");

//case
(function () {
    function rotatex(a){
        var str=$(a).find("b").text();
        var array=str.split("");
        for(var i=0;i<array.length;i++){
            $(a).prepend('<span></span>');
            $(a).find("span").each(function(i){
                $(this).text(array[i])
            });
            $(a).find("b").remove();
        }
    }

    $(".indexcoo .list li p").each(function () {
        rotatex($(this));
    });

    $(".indexcoo .list li span").each(function (i) {
        $(this).css("animation-delay","0.1"*i*1.5+"s");
    });

    new WOW().init();
})();

