
const sec1 = document.querySelector(".sec1");
const sec1Hei = sec1.offsetTop;
const sec2 = document.querySelector(".sec2");
const sec2Hei = sec2.offsetTop;
const sec3 = document.querySelector(".sec3");
const sec3Hei = sec3.offsetTop;
const sec4 = document.querySelector(".sec4");
const sec4Hei = sec3.offsetTop;
const winHei = window.innerHeight;





window.addEventListener('DOMContentLoaded',function(){
    ScrollTrigger.name = "ScrollTrigger";
    gsap.registerPlugin(ScrollTrigger);

    // 로드 bg
    let box2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".sec2",
            scrub: true,
            pin: true,
            start: `${sec1Hei}`,
            end: `${sec4Hei + winHei}`,
            ease: "power3", 
            markers:false
        }
    });
    box2.to(".left_1 .title", {
        rotation:0,opacity:0,
    },0);
    box2.to(".right_1 .title", {
        rotation:0,opacity:0,
    },0);
    
    box2.to(".left_1", {
        rotation:0,xPercent:-100 ,y:52,
    },1);
    box2.to(".left_2", {
        rotation:0,xPercent:-100 ,y:0,
    },1);
    box2.to(".left_3", {
        rotation:0,xPercent:-100 ,y:52,
    },1);

    box2.to(".right_1", {
        rotation:0,xPercent:-100 ,y:52,
    },1);
    box2.to(".right_2", {
        rotation:0,xPercent:-100 ,y:0,
    },1);
    box2.to(".right_3", {
        rotation:0,xPercent:-100 ,y:52,
    },1);


    box2.to(".left_1", {
        rotation:0,xPercent:-200 ,y:52,
    },2);
    box2.to(".left_2", {
        rotation:0,xPercent:-200 ,y:0,
    },2);
    box2.to(".left_3", {
        rotation:0,xPercent:-200 ,y:52,
    },2);

    box2.to(".right_1", {
        rotation:0,xPercent:-200 ,y:0,
    },2);
    box2.to(".right_2", {
        rotation:0,xPercent:-200 ,y:0,
    },2);
    box2.to(".right_3", {
        rotation:0,xPercent:-200 ,y:52,
    },2);

    box2.to(".bold", {
        rotation:0,scale:1,
    },2.5);


    let box3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".sec3",
            scrub: true,
            pin: true,
            start: `${sec1Hei}`,
            end: `${sec3Hei + winHei}`,
            ease: "power3", 
            markers:false
        }
    });

    box3.to(".green", {
        rotation:0,height:0,y:-200,duration:2,
    },1);

    box3.to(".img_1", {
        rotation:0,height:0,y:-200,duration:2,
    },3);

    box3.to(".img_2", {
        rotation:0,height:0,y:-200,duration:2,
    },5);
    box3.to(".sec3_text1", {
        rotation:0,height:0,top:-100,duration:2,
    },5);


    window.addEventListener('scroll',function(){
        cle
    });
});

// window.onload = function () {
//     var elm = ".box";
//     $(elm).each(function (index) {
//         // 개별적으로 Wheel 이벤트 적용
//         $(this).on("mousewheel DOMMouseScroll", function (e) {
//             e.preventDefault();
//             var delta = 0;
//             if (!event) event = window.event;
//             if (event.wheelDelta) {
//                 delta = event.wheelDelta / 10;
//                 if (window.opera) delta = -delta;
//             } 
//             else if (event.detail)
//                 delta = -event.detail / 3;
//             var moveTop = $(window).scrollTop();
//             var elmSelecter = $(elm).eq(index);
//             // 마우스휠을 위에서 아래로
//             if (delta < 0) {
//                 if ($(elmSelecter).next() != undefined) {
//                     try{
//                         moveTop = $(elmSelecter).next().offset().top;
//                     }catch(e){}
//                 }
//             // 마우스휠을 아래에서 위로
//             } else {
//                 if ($(elmSelecter).prev() != undefined) {
//                     try{
//                         moveTop = $(elmSelecter).prev().offset().top;
//                     }catch(e){}
//                 }
//             }
             
//             // 화면 이동 0.8초(800)
//             $("html,body").stop().animate({
//                 scrollTop: moveTop + 'px'
//             }, {
//                 duration: 400, complete: function () {
//                 }
//             });
//         });
//     });
// }