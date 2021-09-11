//Navbar toggler
$(function(){
    $(".toggle").on("click", function(){
        if($(".item").hasClass("active")){
            $(".item").removeClass("active");
        } else {
            $(".item").addClass("active");
        }
    })
});

// Gsap 
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

var A = gsap.timeline({scrollTrigger:{
    trigger:".kegiatan_bersama_text",
    toggleActions:"restart none restart none",
    start:"-30px bottom",
    //markers:true
}});
A.from(".kegiatan_bersama_text",{opacity:0,duration:1.5})
A.from(".kegiatan_bersama_text",{x:-300,duration:1.7,ease: Back.easeOut.config(2.1)},"<");

var B = gsap.timeline({scrollTrigger:{
    trigger:".kegiatan_project_text",
    toggleActions:"restart none restart restart",
    //markers:true
}});
B.from(".kegiatan_project_text",{opacity:0,duration:1.5});
B.from(".kegiatan_project_text",{x:200,duration:1.7,ease:Back.easeOut.config(2.1)},'<');

function goto(x){
    if(x == 1){
        gsap.to(window,{scrollTo:"#siapakami",duration:1});
    }
    else{
        gsap.to(window,{scrollTo:"#kegiatan",duration:2});
    }
    preventDefault();
}