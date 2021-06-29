<<<<<<< HEAD
// Loader
$(window).on("load", function () {
    $(".loader-wrapper").fadeOut("slow");
  });

=======
>>>>>>> aa9449e80b443c5b2e2a3a0b57948e4d43a18389
// Loop every 150 ms and stop at 100 times run
var timesrun = 0;
var interval = setInterval(function () {
  timesrun += 1;
  if (timesrun === 100 ||document.getElementsByClassName("loader-wrapper").display === undefined) {
    clearInterval(interval);
    gsap.from(".navbar", { duration: 2, y: "-100%", ease: "bounce" });
    //gsap.from(".jumbotron", { opacity: 0, duration: 2, y: "-8%", x: "-50" });
    var rainbow = gsap.timeline({yoyo:true,repeat:-1,duration:1.5});
    
    rainbow.to("html",1,{"--fontColor":"rgba(175, 49, 49, 0.8)"})
    rainbow.to("html",1,{"--fontColor":"rgba(141, 175, 49, 0.8)"})
    rainbow.to("html",1,{"--fontColor":"rgba(49, 171, 175, 0.8)"})
    rainbow.to("html",1,{"--fontColor":"rgba(76, 58, 175, 0.8)"})
    rainbow.to("html",1,{"--fontColor":"rgba(146, 49, 175, 0.8)"})

    rainbow.repeat();

    var coolAnim = gsap.timeline({});
    coolAnim.fromTo('.jumbotron-texta',{scale:'0',opacity:'0'},{scale:'2',opacity:'100',duration:1.5,y:'20%'},'<');
    coolAnim.to('.jumbotron-texta',{scale:'1',opacity:'100',duration:1.5});
    coolAnim.fromTo('.jumbotron-textb',{scale:0,y:'5%'},{scale:1,opacity:100,duration:4},'<');


    gsap.fromTo(".scroll-wrapper",{ opacity: 0, y: "200%", duration: 2 },{ opacity: 100, y: "0",delay:4.5 });
    gsap.to(".arrow", {opacity: "100%",y: "30",delay: 1,duration: 1,repeat: "-1",yoyo: true,});
  }
}, 150);
