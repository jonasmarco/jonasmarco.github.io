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

  /** StaggerFrom (Só funciona com lista) */
  let $body_staggerfrom  = $('body.body-staggerfrom');
  let $itens_staggerfrom = $body_staggerfrom.find('.item');

  TweenMax.staggerFrom($itens_staggerfrom, .5, {
    scale: 0,
    opacity: 0
  }, .5);

  /** StaggerFromTo (Só funciona com lista) */
  let $body_staggerfromto  = $('body.body-staggerfromto');
  let $itens_staggerfromto = $body_staggerfromto.find('.item');

  TweenMax.staggerFromTo($itens_staggerfromto, .5, {
    scale: .3,
    rotation: 190
  }, {
    scale: 1.1,
    rotation: 0
  }, .2);

  /** Cycle (Só funciona em stack) */
  let $body_cycle  = $('body.body-cycle');
  let $itens_cycle = $body_cycle.find('.item');

  TweenMax.staggerTo($itens_cycle, 1, {
    // cycle: {
    //   opacity: [0, 1]
    // }
    cycle: {
      x: function(index, target) {
        return index * 30
      },
      opacity: [0, 1]
    }
  }, .3);

  /** Loops */
  let $body_loops  = $('body.body-loops');
  let $itens_loops = $body_loops.find('.item');
  let $loops_title = $body_loops.find('h1.title');

  TweenMax.fromTo($loops_title, 1, {
    x: -60
  }, {
    x: 600,
    repeat: -1,
    yoyo: true
  });

  TweenMax.staggerFrom($itens_loops, .5, {
    scale: 0,
    repeat: -1,
    yoyo: true
  }, .5);

  /** Callbacks */
  let $body_callbacks  = $('body.body-callbacks');
  let $itens_callbacks = $body_callbacks.find('.item');
  let $callbacks_title = $body_callbacks.find('h1.title');
  let link             = $('body a');
  let i                = 0;

  TweenMax.to($callbacks_title, 1, {
    x: 500,
    repeat: 1,
    onStart: onStart,
    // onStart: function() {
    //   console.log('A animação começou');
    // },
    onUpdate: onUpdate,
    // onUpdate: function() {
    //   console.log('A animação está acontecendo');
    // },
    onComplete: onComplete,
    // onComplete: function() {
    //   console.log('A animação terminou');
    // },
    onRepeat: function() {
      console.log('A animação repetiu');
    }
  });

  function onStart() {
    link.text('Index Yea Bitch!');
  }

  function onUpdate() {
    $callbacks_title.text(i++);
  }

  function onComplete() {
    TweenMax.to($itens_callbacks, .5, {
      opacity: 0
    });
  }

  // Basics
});