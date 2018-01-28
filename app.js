$(document).ready(function() {

  var controller = new ScrollMagic.Controller();
  var animateElem = document.getElementsByClassName("box")[0];
  var alert = new ScrollMagic.Scene({
    triggerElement: '.box',
    // triggerHook: 1,
    duration: $('.box').height()
  })
  .setTween(TweenMax.to('.box', 1.5, {
    backgroundColor: 'red'
  }))
  .addTo(controller);

  var svgDrawing = new ScrollMagic.Scene({
    triggerElement: '.line',
    // modify duration to be shorter than line height and the lines will be further down screen
    duration: $('.line').height(),
    triggerHook: 0
  })
  // .addIndicators({
  //   name: 'line drawing',
  // }) 
  .setTween(TweenMax.to('path', 1.5, {
    // 'stroke-dasharray': '0',
    'stroke-dashoffset': '0'
  }))
  .addTo(controller);

  // var jaggedsSvgDrawing = new ScrollMagic.Scene({
  //   triggerElement: '.line',
  //   duration: $('.line').height(),
  //   triggerHook: 0
  // })
  // .addIndicators({
  //   name: 'line drawing 2',
  // }) 
  // .setTween(TweenMax.to('path', 1.5, {
  //   // 'stroke-dasharray': '0',
  //   'stroke-dashoffset': '0'
  // }))
  // .addTo(controller);

})
