$(document).ready(function() {

  var controller = new ScrollMagic.Controller();
  var animateElem = document.getElementsByClassName("box")[0];
  var alert = new ScrollMagic.Scene({
    triggerElement: '.box',
    // triggerHook: 1,
    duration: $('.box').height()
  })
  .addIndicators({
    name: 'red alert',
  }) 
  .setTween(TweenMax.to('.box', 1.5, {
    backgroundColor: 'red'
  }))
  .addTo(controller);

  var svgDrawing = new ScrollMagic.Scene({
    triggerElement: '.line',
    duration: $('.line').height(),
    triggerHook: 0
  })
  .addIndicators({
    name: 'line drawing',
  }) 
  .setTween(TweenMax.to('path', 1.5, {
    // 'stroke-dasharray': '0',
    'stroke-dashoffset': '0'
  }))
  .addTo(controller);

})
