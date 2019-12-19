// jQuery
window.$ = window.jQuery = require('jquery');

// Popper JS
require('popper.js');

// Bootstrap
require('bootstrap');

// GSAP
import {
  Back,
  Bounce,
  cssPlugin,
  Draggable,
  Elastic,
  Power0,
  Power2,
  Power3,
  Sine,
  SlowMo,
  TimelineLite,
  TimelineMax,
  TweenLite,
  TweenMax,
} from "gsap/all";
import { Signer } from "crypto";

$(document).ready(() => {
  console.log('.. iniciando ..');

  // Basics
  /** Set */
  let $body_sets = $('body.body-sets');
  let $itens_set = $body_sets.find('.item');

  TweenMax.set($itens_set, {
    x: 100,
    y: -100,
    opacity: .8
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
    opacity: 0.01
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

  TweenMax.fromTo($itens_fromto, 2, {
    scale: 0,
    opacity: 0
  }, {
    scale: 1,
    opacity: 1
  });

  /** Delay */
  let $body_delay  = $('body.body-delay');
  let $itens_delay = $body_delay.find('.item');
  let $delayTitle  = $body_delay.find('h1.title');

  TweenMax.from($delayTitle, 2, {
    x: -500
  });

  TweenMax.to($itens_delay, 2, {
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

  TweenMax.from($itens_easings, 2, {
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
    }
  });

  function onStart() {
    $itens_callbacks.text('Index Yea Bitch!');
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


  // Timelines
  /** Aula 01 */
  let $body_timeline1  = $('body.body-timeline1');
  let $itens_timeline1 = $body_timeline1.find('.item');
  let $timeline1_title = $body_timeline1.find('h1.title');
  let $timeline1_link  = $body_timeline1.find('a');

  let tl1 = new TimelineMax();

  tl1.from($timeline1_title, 1.5, {
    y: 1000,
    opacity: 0
  })
  .from($timeline1_link, 1, {
    x: -500,
    opacity: 0,
  })
  .staggerFrom($itens_timeline1, .5, {
    scale: 0,
    opacity: 0,
  }, .3);

  /** Aula 02 */
  let $body_timeline2  = $('body.body-timeline2');
  let $itens_timeline2 = $body_timeline2.find('.item');
  let $timeline2_title = $body_timeline2.find('h1.title');
  let $timeline2_link  = $body_timeline2.find('a');

  let tl2 = new TimelineMax();

  tl2.from($itens_timeline2, 1, {
    y: -500,
    opacity: 0
  })
  .add('titleAppear', '+=1')
  .from($timeline2_title, 1, {
    x: -500,
    opacity: 0,
  }, 'titleAppear') // overlap - negative relative
  // }, '+=1') // delay - positive relative
  .staggerFrom($timeline2_link, .5, {
    scale: 0,
    opacity: 0,
  }, .3, 2); // position absolute

  /** Aula 03 */
  let $body_timeline3  = $('body.body-timeline3');
  let $itens_timeline3 = $body_timeline3.find('.item');
  let $timeline3_title = $body_timeline3.find('h1.title');
  let $timeline3_link  = $body_timeline3.find('a');
  let $timeline3_sub   = $body_timeline3.find('h4.subtitle');

  let play    = $body_timeline3.find('#play');
  let pause   = $body_timeline3.find('#pause');
  let resume  = $body_timeline3.find('#resume');
  let reverse = $body_timeline3.find('#reverse');
  let restart = $body_timeline3.find('#restart');

  const tl = new TimelineMax({
    paused:true
  });

  tl
  .from($timeline3_title, .5, {
    x: 500,
    opacity: 0
  })
  .from($timeline3_sub, .5, {
    x: -500,
    opacity: 0
  })
  .from($timeline3_link, .5, {
    scale: 0,
    opacity: 0
  })
  .staggerFrom($itens_timeline3, .5, {
    scale: 0,
    opacity: 0
  }, .3);

  play.on('click', function() {
    tl.play();
  });

  pause.on('click', function() {
    tl.pause();
  });

  resume.on('click', function() {
    tl.resume();
  });

  reverse.on('click', function() {
    tl.reverse();
  });

  restart.on('click', function() {
    tl.restart();
  });

  /** Aula 04 */
  let $body_timeline4  = $('body.body-timeline4');
  let $itens_timeline4 = $body_timeline4.find('.item');
  let $timeline4_title = $body_timeline4.find('h1.title');
  let $timeline4_link  = $body_timeline4.find('a');
  let $timeline4_sub   = $body_timeline4.find('h4.subtitle');

  let fast     = $body_timeline4.find('#fast');
  let slow     = $body_timeline4.find('#slow');
  let normal   = $body_timeline4.find('#normal');
  let restart2 = $body_timeline4.find('#restart');

  const tl4 = new TimelineMax({
    paused:true
  });

  tl4
  .from($timeline4_title, .5, {
    x: 500,
    opacity: 0
  })
  .from($timeline4_sub, .5, {
    x: -500,
    opacity: 0
  })
  .from($timeline4_link, .5, {
    scale: 0,
    opacity: 0
  })
  .staggerFrom($itens_timeline4, .5, {
    scale: 0,
    opacity: 0
  }, .3);

  fast.on('click', function() {
    tl4.timeScale(5);
    tl4.play();
  });

  slow.on('click', function() {
    tl4.timeScale(1/10);
    tl4.play();
  });

  normal.on('click', function() {
    tl4.timeScale(1);
    tl4.play();
  });

  restart2.on('click', function() {
    tl4.restart();
  });
  // Timelines


  // Loaders
  /** Loaders **/
  let $body_loader1  = $('body.body-loaders');
  let $balls_loader1 = $body_loader1.find('.ball');
  let $square_loader1 = $body_loader1.find('.square');
  let $circle_svg_loader1 = $body_loader1.find('.circle');
  let $load_svg_loader1 = $body_loader1.find('.load');
  let $money_svg_loader1 = $body_loader1.find('#money');
  let $stick_svg_loader1 = $body_loader1.find('#stick');
  let $left_svg_loader1 = $body_loader1.find('#left');
  let $right_svg_loader1 = $body_loader1.find('#right');
  let $whell1_svg_loader1 = $body_loader1.find('#wheel-1');
  let $whell2_svg_loader1 = $body_loader1.find('#wheel-2');
  let $whell3_svg_loader1 = $body_loader1.find('#wheel-3');

  TweenMax.staggerFromTo($balls_loader1, 1, {
    // From
    scale: .1,
    opacity: 0
  }, {
    // To
    scale: 1.2,
    opacity: 1,
    repeat: -1,
    yoyo: true
  }, .5);

  TweenMax.to($square_loader1, 1, {
    scale: .8,
    borderRadius: '50%',
    rotate: 360,
    repeat: -1,
    repeatDelay: .3,
    yoyo: true
  });

  TweenMax.to($circle_svg_loader1, 3, {
    strokeDashoffset: 0,
    ease: Sine.easeInOut,
    repeat: -1,
    yoyo: true
  });

  TweenMax.to($load_svg_loader1, 2, {
    strokeDashoffset: 0,
    ease: Sine.easeInOut,
    repeat: -1
  });

  TweenMax.from($money_svg_loader1, 2, {
    scaleY: .8,
    transformOrigin: 'bottom center',
    ease: Power0.easeOut,
    repeat: -1,
    yoyo: true
  });

  // const tl5 = new TimelineMax({ repeat: -1, yoyo: true });
  const tl5 = new TimelineMax({ repeat: -1 });

  tl5.from($stick_svg_loader1, 2, { transformOrigin: 'center center', rotation: 25 }, 'first')
     .from($left_svg_loader1, 2, { y: '-100px' }, 'first')
     .from($right_svg_loader1, 2, { y: '+100' }, 'first')
     // sem o yoyo: true, podemos fazer com um segundo passo
     .to($stick_svg_loader1, 2, {  transformOrigin: 'center center', rotation: 25 }, 'second')
     .to($left_svg_loader1, 2, { y: '-100px' }, 'second')
     .to($right_svg_loader1, 2, { y: '+100' }, 'second');

  TweenMax.to([$whell1_svg_loader1, $whell2_svg_loader1, $whell3_svg_loader1], 2, {
    transformOrigin: 'center center',
    rotation: 360,
    ease: Power0.easeOut,
    repeat: -1
  });

  // Loaders

  // Urso Polar

  // Parte 1
  let $body_urso  = $('body.body-urso');
  let $polarBear = $body_urso.find('#polar-bear polygon');
  // TweenMax.staggerFrom($polarBear, 1.5, {
  //   scale: 0,
  //   opacity: 0,
  //   transformOrigin: 'center center',
  //   ease: Elastic.easeInOut,
  //   repeat: -1
  // }, .004);

  // Parte 2
  const polarBear = document.querySelectorAll('#polar-bear > polygon');
  const svg = document.querySelector('#bear-svg');

  if( svg != null ) {
    const bear_width = svg.getBBox().width;
    const bear_height = svg.getBBox().height;
    polarBear.forEach(polygon => {
        const xPos = Math.random() * bear_width - bear_width/2;
        const yPos = Math.random() * bear_height - bear_height/2;
        TweenMax.set(polygon, {
            x: xPos,
            y: yPos
        });
        TweenMax.to(polygon, 2, {
            x: 0,
            y: 0,
            opacity: 1,
            ease: Power3.easeInOut,
            repeat: -1,
            repeatDelay: .5,
            yoyo: true
        });
    });
  }

  // Urso Polar

  // Copa do mundo 2019

  let $body_copa = $('body.body-copa');
  let $background_copa = $body_copa.find('#background');
  let $right_flag_copa = $body_copa.find('#right-flag');
  let $left_flag_copa = $body_copa.find('#left-flag');
  let $right_vuvuzela_copa = $body_copa.find('#right-vuvuzela');
  let $left_vuvuzela_copa = $body_copa.find('#left-vuvuzela');
  let $trophy_copa = $body_copa.find('#trophy');
  let $title_copa = $body_copa.find('#title g');
  let $restanart_copa = $body_copa.find('#restart');

  const tl6 = new TimelineMax();
  const show = { scale: 0, opacity: 0 };
  const alignCenterBottom = { transformOrigin: 'center bottom' }
  const alignLeftBottom = { transformOrigin: 'left bottom' }
  const alignRightBottom = { transformOrigin: 'right bottom' }

  tl6.staggerFrom($title_copa, .5, { opacity: 0, y: 50 }, -0.05)
     .from($trophy_copa, .5, { ...show, ...alignCenterBottom })
     .add('vuvuzela', '-=0.2')
     .from($right_vuvuzela_copa, .3, { ...show, ...alignLeftBottom }, 'vuvuzela')
     .from($left_vuvuzela_copa, .3, { ...show, ...alignRightBottom }, 'vuvuzela')
     .from($background_copa, .5, { ...show, ...alignCenterBottom }, 'vuvuzela')
     .from($right_flag_copa, .4, { ...show, rotation: '-90deg', ...alignLeftBottom }, 'vuvuzela+=.2')
     .from($left_flag_copa, .4, { ...show, rotation: '90deg', ...alignRightBottom }, 'vuvuzela+=.2')
     .to($background_copa, 1, { opacity: .4, scale: .95, ...alignCenterBottom, repeat: -1, yoyo: true })

  $restanart_copa.on('click', function() {
    tl6.restart();
  });

  // Copa do mundo 2019

  // Modais

  let $body_modais = $('body.body-modais');
  let $modal = $body_modais.find('.modal');
  let $modal_fade_in = $body_modais.find('#fadeIn');
  let $modal_fade_in_scale = $body_modais.find('#fadeInScale');
  let $modal_slide_in = $body_modais.find('#slideIn');
  let $modal_full_screen = $body_modais.find('#fullScreen');
  let $btn_close_modal = $body_modais.find('.modal__close');
  let $modal_box = $body_modais.find('.modal__box');
  let $modal_header = $body_modais.find('.modal__header');
  let $modal_title = $body_modais.find('.modal__title');

  $modal_fade_in.on('click', fadeIn);

  function fadeIn() {
    TweenMax.to($modal, .5, { autoAlpha: 1 });
  }

  $btn_close_modal.on('click', modalClose)

  function modalClose() {
    TweenMax.set([$modal, $btn_close_modal, $modal_box, $modal_header, $modal_title], { clearProps: 'all' });
    TweenMax.to($modal, .5, { autoAlpha: 0 });
  }

  $modal_fade_in_scale.on('click', fadeInScale);

  function fadeInScale() {
    TweenMax.set($modal_box, { scale: 0 });
    TweenMax.to($modal, .5, { autoAlpha: 1 });
    TweenMax.to($modal_box, 1, { scale: 1, delay: .2, ease: Elastic.easeOut });
  }

  $modal_slide_in.on('click', slideIn);

  function slideIn() {
    TweenMax.to($modal, .5, { autoAlpha: 1 });
    TweenMax.from($modal_box, .5, { autoAlpha: 0, top: 300 });
  }

  $modal_full_screen.on('click', fullScreen);

  function fullScreen() {
    TweenMax.set($modal, { backgroundColor: '#fff', scale: 0 });
    TweenMax.set($btn_close_modal, { color: '#333' });
    TweenMax.set([$modal_header, $modal_box], { position: 'initial' });
    TweenMax.set($modal_title, { color: '#333', backgroundColor: '#fff' });
    TweenMax.to($modal, .2, { autoAlpha: 1, scale: 1 });
  }

  // Modais

  // Carousel

  let $body_carousel = $('body.body-carousel');
  let $carousel_itens = $body_carousel.find('.slider__item');
  let $carousel_btn_next = $body_carousel.find('.slider__arow--right');
  let $carousel_btn_prev = $body_carousel.find('.slider__arow--left');

  const Slider = {
    currentItem: 0,
    init: () => {
      Slider.in(Slider.currentItem);
    },

    in: (index) => {
      const item = $carousel_itens.eq(index);
      const slider_texts = item.find('p');
      const tl7 = new TimelineMax();

      TweenLite.set(item, { scale: .9 });
      TweenLite.set(item, { left: '-100vw' });
      tl7
        .to(item, .5, { left: 0, delay: 1 })
        .to(item, .5, { scale: 1 })
        .staggerFrom(slider_texts, .5, { y: +300, autoAlpha: 0, ease: Back.easeOut }, 0.2)
    },

    out: (index, nextIndex) => {
      const item = $carousel_itens.eq(index);
      const slider_texts = item.find('p');
      const tl7 = new TimelineMax();

      tl7
        .staggerTo(slider_texts, .5, { y: 300, autoAlpha: 0, ease: Back.easeIn }, '-0.5')
        .to(item, .5, { scale: .9 })
        .to(item, .5, { left: '100vw' })
        .call(Slider.in, [nextIndex], this, '-=1.5')
        .set(slider_texts, { clearProps: 'all' })
    },

    next: () => {
      const next = Slider.currentItem !== $carousel_itens.length -1 ? Slider.currentItem + 1 : 0;
      Slider.out(Slider.currentItem, next);
      Slider.currentItem = next;
    },

    prev: () => {
      const prev = Slider.currentItem > 0 ? Slider.currentItem -1 : $carousel_itens.length -1;
      Slider.out(Slider.currentItem, prev);
      Slider.currentItem = prev;
    }
  }

  $carousel_btn_next.on('click', Slider.next);
  $carousel_btn_prev.on('click', Slider.prev);

  Slider.init();

  // Carousel

  // Draggable

  let $body_draggble_1 = $('body.body-draggble-1');
  let $body_draggble_2 = $('body.body-draggble-2');
  let $body_draggble_3 = $('body.body-draggble-3');
  let $body_draggble_4 = $('body.body-draggble-4');
  let $body_draggble_5 = $('body.body-draggble-5');
  let $body_draggble_6 = $('body.body-draggble-6');
  let $draggble_itens = $body_draggble_1.find('.item');
  let $container = $body_draggble_1.find('.body-draggble-1');
  const $bodyParts = "#top_hat, #moustache, #redhat, #curly-moustache, #eyes1, #lips, #toothy-lips, #toupe, #toothy, #big-ear-r, #big-ear-l, #shoes1, #lashed, #lash2, #lazy-eyes, #longbrown-moustache, #purplehat, #sm-ear-r, #sm-ear-l, #earring-r, #earring-l, #highheels, #greenhat, #shoes2, #blonde, #blond-mustache, #elf-r, #elf-l";
  let $bounce = $body_draggble_2.find('#svg');
  let $balloon = $body_draggble_3.find('#balloon-innards');
  let $pieces = $body_draggble_3.find('.piece');
  let $dragInteragion = $body_draggble_4.find('.drag-interaction');
  let $dragPrice = $body_draggble_4.find('.price');
  let $minRotation = 0;
  let $maxRotation = 180;
  let $minVal = 0;
  let $maxVal = 50000;
  let $folders = $body_draggble_5.find('.folder');
  let $trash = $body_draggble_5.find('.trash');
  let $btn_limpar_lixeira = $body_draggble_5.find('#empty');
  let $drag_me = $body_draggble_6.find('#drag-me');
  let $before_after = $body_draggble_6.find('.before-after');
  let $view_after = $body_draggble_6.find('.view-after');

  // Draggable.create($draggble_itens);
  Draggable.create($draggble_itens, {
    // type: 'x',
    // type: 'y',
    // type: 'rotation',
    // bounds: $container,
    // edgeResistance: 1,
    // dragResistance: .5
    onDragStart: function() {
      console.log('iniciando o drag');
    },
    onDrag: () => {
      console.log('o drag está acontecendo');
    },
    onDragEndParams: ['O drag terminou!', 10],
    onDragEnd: (message, number) => {
      console.log(message, number, this);
    }
  });

  Draggable.create($bodyParts, {
    bounds: $bounce,
    edgeResistance: .9
  });
  TweenMax.to($balloon, 4, {
    y: 60,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut
  });
  TweenMax.staggerTo($pieces, 2, {
    cycle: {
      x: randomQuebraCabeca,
      y: randomQuebraCabeca
    },
    delay: 1,
    ease: Elastic.easeInOut,
  }, .2);
  function randomQuebraCabeca() {
    return (Math.random() * 4 - 2) * 60;
  }
  Draggable.create($pieces);

  function onDrag() {
    $dragPrice.text( (info.rotation * ($maxVal/$maxRotation)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) );
  }
  Draggable.create($dragInteragion, {
    type: 'rotation',
    bounds: {
      minRotation: $minRotation,
      maxRotation: $maxRotation
    },
    onDrag: onDrag
  });
  const info = Draggable.get($dragInteragion);

  Draggable.create($folders, {
    onDragEnd: deleteFolder
  });

  function deleteFolder() {
    if( this.hitTest($trash) ) {
      TweenLite.to(this.target, .5, {
        opacity: 0,
        scale: 0
      });
      $trash.addClass('is-full');
      $btn_limpar_lixeira.show();
    }
  }

  $btn_limpar_lixeira.on('click', function() {
    $trash.removeClass('is-full');
  });

  Draggable.create($drag_me, {
    type: 'left',
    bounds: $before_after,
    onDrag: updateImages
  });

  function updateImages() {
    TweenLite.set($view_after, {
      zIndex: 3,
      width: $drag_me.css('left')
    });
  }

  function animateTo(width) {
    TweenLite.to($drag_me, 1, {
      left: width,
      onUpdate: updateImages
    });
  }
  animateTo(150);

  // Draggable
});
