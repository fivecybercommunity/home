
// Loop every 150 ms and stop at 100 times run
var timesrun = 0;
var interval = setInterval(function(){ 
    timesrun += 1;
    if(timesrun === 100 || document.getElementsByClassName("loader-wrapper").display === undefined){
        clearInterval(interval);
        gsap.from('.navbar',{ duration: 4,y : '-100%',ease: 'elastic',delay : 0})
        gsap.from('.jumbotron',{opacity:0,duration:2,y:'-8%',x:'-50',})
    }
}, 150);

