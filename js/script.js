// Loop every 150 ms and stop at 100 times run
var timesrun = 0;
var interval = setInterval(function () {
  timesrun += 1;
  if (
    timesrun === 100 ||
    document.getElementsByClassName("loader-wrapper").display === undefined
  ) {
    clearInterval(interval);
    gsap.from(".navbar", { duration: 2, y: "-100%", ease: "bounce" });
    gsap.from(".jumbotron", { opacity: 0, duration: 2, y: "-8%", x: "-50" });
    gsap.fromTo(
      ".scroll-wrapper",
      { opacity: 0, y: "200%", duration: 1 },
      { opacity: 100, y: "0" }
    );
    gsap.to(".arrow", {
      opacity: "100%",
      y: "30",
      delay: 1,
      duration: 1,
      repeat: "-1",
      yoyo: true,
    });
  }
}, 150);
