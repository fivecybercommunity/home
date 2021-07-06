
// Loader
$(window).on("load", function () {
    $(".loader-wrapper").fadeOut("slow");
  });

// Loop every 150 ms and stop at 100 times run 
// Mulai Setelah Loader Selesai
var timesrun = 0;
var interval = setInterval(function () {
  timesrun += 1;
  if (timesrun === 100 ||document.getElementsByClassName("loader-wrapper").display === undefined) {
    clearInterval(interval);

    gsap.registerPlugin(ScrollTrigger);
    
    gsap.from(".navbar", { duration: 2, y: "-100%", ease: "bounce" });
    //gsap.from(".jumbotron", { opacity: 0, duration: 2, y: "-8%", x: "-50" });

    
    //RAINBOW COLOR CYCLE
    var rainbow = gsap.timeline({yoyo:true,repeat:-1,duration:1.5});
    rainbow.to("html",1,{"--fontColor":"rgba(175, 49, 49, 0.8)"})
    rainbow.to("html",1,{"--fontColor":"rgba(141, 175, 49, 0.8)"})
    rainbow.to("html",1,{"--fontColor":"rgba(49, 171, 175, 0.8)"})
    rainbow.to("html",1,{"--fontColor":"rgba(76, 58, 175, 0.8)"})
    rainbow.to("html",1,{"--fontColor":"rgba(146, 49, 175, 0.8)"})
    rainbow.repeat();

    // Jumbotron Text Animation
    var coolAnim = gsap.timeline({});
    coolAnim.fromTo('.jumbotron-texta',{scale:'0',opacity:'0'},{scale:'2',opacity:'100',duration:1.5,y:'20%'},'<');
    coolAnim.to('.jumbotron-texta',{scale:'1',opacity:'100',duration:1.5});
    coolAnim.fromTo('.jumbotron-textb',{scale:0,y:'5%'},{scale:1,opacity:100,duration:4},'<');

    // Scroll Down Indicator
    gsap.fromTo(".scroll-wrapper",{ opacity: 0, y: "200%", duration: 2 },{ opacity: 100, y: "0",delay:4.5 });
    gsap.to(".arrow", {opacity: "100%",y: "30",delay: 1,duration: 1,repeat: "-1",yoyo: true,});
    
    gsap.from(".profile-container",{
      scrollTrigger:{
        trigger:".profile-container",
        start:"-50px center",
        end:"800px center",
        toggleActions:"play reverse play reverse",
        // uncomment to see the trigger
        //markers:true
      },
      duration:0.5,
      x:-300
    });

    gsap.from(".kegiatan-wrapper",{
      scrollTrigger:{
        trigger:".kegiatan-wrapper",
        start:"-50px center",
        end:"1000px center",
        toggleActions:"play reverse play reverse",
        //markers:true 
      },
      duration:0.5,
      x:300
    });

    gsap.from(".hasil-karya-wrapper",{
      scrollTrigger:{
        trigger:".hasil-karya-wrapper",
        start:"-1000px center",
        toggleActions:"play restart restart none"
       //markers:true
      },
      opacity:'50%',y:'100%',duration:2
    });

  }
}, 150);
