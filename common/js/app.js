// jQuery
window.$ = window.jQuery = require('jquery');

// Popper JS
require('popper.js');

// Bootstrap
require('bootstrap');

// GSAP
import {
  TweenMax,
  Power2,
  TimelineLite,
  SlowMo
} from "gsap/TweenMax";

$(document).ready(() => {
  console.log('.. iniciando ..');

  // Basics
  /** Set */
  let $body_sets = $('body.body-sets');
  let $itens_set = $body_sets.find('.item');

  TweenMax.set($itens_set, {
    x: 100,
    y: -100,
    opacity: .4
  });

  let $setTitle = $body_sets.find('h1.title');

  TweenMax.set($setTitle, {
    color: '#34AE4A',
    x: 500
  });

  /** To */
  let $body_to  = $('body.body-to');
  let $itens_to = $body_to.find('.item');
  let $toTitle  = $body_to.find('h1.title');

  TweenMax.to($toTitle, 5, {
    x: 500,
    opacity: 0
  });

  TweenMax.to($itens_to, 2, {
    rotation: 360,
    scale: .4
  });

  /** From */
  let $body_from  = $('body.body-from');
  let $itens_from = $body_from.find('.item');
  let $fromTitle  = $body_from.find('h1.title');

  TweenMax.from($fromTitle, 2, {
    scale: 0
  });

  TweenMax.from($itens_from, 2, {
    y: 500
  });

  /** FromTo */
  let $body_fromto  = $('body.body-fromto');
  let $itens_fromto = $body_fromto.find('.item');
  let $fromtoTitle  = $body_fromto.find('h1.title');

  // TweenMax.from($fromtoTitle, 2, {
  //   x: -500
  // });

  // TweenMax.to($fromtoTitle, 2, {
  //   x: 500
  // });

  TweenMax.fromTo($fromtoTitle, 2, {
    x: -500
  }, {
    x: 500
  });

  /** Delay */
  let $body_delay  = $('body.body-delay');
  let $itens_delay = $body_delay.find('.item');
  let $delayTitle  = $body_delay.find('h1.title');

  TweenMax.from($delayTitle, 2, {
    x: -500
  });

  TweenMax.to($delayTitle, 2, {
    x: 500,
    delay: 2
  });

  /** Easings */
  let $body_easings  = $('body.body-easings');
  let $itens_easings = $body_easings.find('.item');
  let $easingsTitle  = $body_easings.find('h1.title');

  TweenMax.from($easingsTitle, 2, {
    scale: 0,
    ease: Bounce.easeOut
  });

  /** StaggerTo (Só funciona com lista) */
  let $body_staggerto  = $('body.body-staggerto');
  let $itens_staggerto = $body_staggerto.find('.item');

  TweenMax.staggerTo($itens_staggerto, .8, {
    scale: 0,
    opacity: 0
  }, .2);

  // Basics
});