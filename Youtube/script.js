var rect = document.querySelector("#center");

rect.addEventListener("mousemove", function (details) {
    var ractanglelocation = rect.getBoundingClientRect();
    var insiderectval = details.clientX - rectanglelocation.left;

    if(insiderectval < rectanglelocation.width.width/2){
  var redcolor = gsap.utils.mapRange.mapRange(0, rectanglelocation.width/2, 255, 0, insiderectval);
   gsap.to(rect, {
    backgroundColor: 'rgb(${redcolor}, 0, 0)' ,
    ease: Power4,     
   });
}else {
  var bluecolor = gsap.utils.mapRange.mapRange(0, rectanglelocation.width/2, rectanglelocation.width, 0, 255, insiderectval);
  gsap.to(rect, {
   backgroundColor: 'rgb(0, 0, ${bluecolor})' ,
   ease: Power4,     
  });
} 
});
