//Navbar toggler
function navbarToggler(){
    var x = document.getElementById("navbar");
    if (x.className == "container navbar"){
        x.className += " responsive";
        console.log("asede wan");
    } else {
        x.className = "container navbar";
        console.log("asede tu");
    }
}

// Gsap 
gsap.registerPlugin(ScrollTrigger);
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
