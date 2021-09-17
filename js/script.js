$(document).ready(function(){
    $(window).scroll(animatecounter);

    function animatecounter(){
        if($(window).scrollTop()>1660){
            $(".count").each(function(){
                let eleman=$(this);
                jQuery({counter:1}).animate({counter:eleman.text()},{duration:1200,easing:"swing",step:function(){
                    eleman.text(parseInt(this.counter+2));
                }});
            });
            $(window).off("scroll",animatecounter);
        }
    }
    $(".btnAnimation").each(function(){
    $(this).mouseenter(function(){
    $(this).find("button").animate({"margin-top":"170px","opacity":"1"},{duration:1200,easing:"swing"});
    });
    $(this).mouseleave(function(){
        $(this).find("button").animate({"margin-top":"190px","opacity":"0"},{duration:1200,easing:"swing"});
    });
    });

    IconAnimation();
    function IconAnimation(){
        $(".iconanimation").each(function(){
            $(this).find("img").animate({"top":"-10%"},{duration:500,easing:"swing"});
        });
        $(".iconanimation").each(function(){
            $(this).find("img").animate({"top":"0%"},{duration:500,easing:"swing",
        complete:function(){
            IconAnimation();
        }});
        });

    }

});