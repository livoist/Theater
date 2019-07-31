var vm = new Vue({
 el: "#app",
 data: {
   starshow: false,
   currentMovie: null,
   favorite: [],
   cart: [],
   isCartOpen: false,
   isFavoriteOpen: false,
   time: 0,
   movies: [
    {
     name: "FAST & FURIOUS PRESENTS: HOBBS & SHAW",
     imgUrl: "https://resizing.flixster.com/IDyuecWxIfwqfhHFyFnWfJLk6_U=/fit-in/200x296.2962962962963/v1.bTsxMzExNTg5NTtqOzE4MTUxOzEyMDA7MzE1ODs1MDAw",
     price: 480,
     description: "Two years after the Lifetime 8 incident, the US Department of Foreign Affairs agent Luke Harper and former British Special Forces and international assassin Dick Shaw must work together to prevent the use of enhancement factors to enhance The new threat of international terrorist Brestston.",
     starshow: false,
     // iframe: "http://player.theplatform.com/p/dCK2IC/X36SYnM49ldh/select/media/guid/2474312077/4FF56B8A-11B6-4F02-A33D-62914CC77ABD?ec=f&isEmbedded=true",
   },
     {
       name: "ONCE UPON A TIME IN HOLLYWOOD",
       imgUrl: "https://resizing.flixster.com/MFoAvVCQMl9Dhb9COJ-ru6ZZdqg=/fit-in/200x296.2962962962963/v1.bTsxMzEwMTEzNDtqOzE4MTUxOzEyMDA7MTY5OzI1MA",
       price: 420,
       description: "Thrillingly unrestrained yet solidly crafted, Once Upon a Time in Hollywood tempers Tarantino's provocative impulses with the clarity of a mature filmmaker's vision.",
       starshow: false,
       // iframe: "http://player.theplatform.com/p/dCK2IC/X36SYnM49ldh/select/media/guid/2474312077/A6D60FE7-29F7-46D2-A4B9-EBD38C6B7D77?ec=f&isEmbedded=true",
     },
     {
      name: "JOHN WICK: CHAPTER 3 - PARABELLUM",
      imgUrl: "https://resizing.flixster.com/8t8NPzekz5fXKmy22ME5sYRtKu4=/fit-in/200x296.2962962962963/v1.bTsxMzAyNzExOTtqOzE4MTUwOzEyMDA7MzYwMDs1NTUw",
      price: 400,
      description: "John Wick: Chapter 3 - Parabellum reloads for another hard-hitting round of the brilliantly choreographed, over-the-top action that fans of the franchise demand.",
      starshow: false,
      // iframe: "http://player.theplatform.com/p/dCK2IC/X36SYnM49ldh/select/media/guid/2474312077/3D894C2C-2D26-4982-B31E-709A4004DEA1?ec=f&isEmbedded=true",
    },
     {
      name: "AVENGERS: ENDGAME",
      imgUrl: "https://resizing.flixster.com/g0gpJkhWsm2qy1KC5vK0lo-352I=/fit-in/200x296.2962962962963/v1.bTsxMzAxOTkzMjtqOzE4MDYwOzEyMDA7MTY4ODsyNTAw",
      price: 450,
      description: "Exciting, entertaining, and emotionally impactful, Avengers: Endgame does whatever it takes to deliver a satisfying finale to Marvel's epic Infinity Saga.",
      starshow: false,
      // iframe: "http://player.theplatform.com/p/dCK2IC/X36SYnM49ldh/select/media/guid/2474312077/F6AB892B-526A-4FD4-AD55-BACB7FCF9A32?ec=f&isEmbedded=true",
    },
    {
      name: "THE LION KING",
      imgUrl: "https://resizing.flixster.com/uKbQ1Q2Dbp5FOhx-EtGUet4wCPg=/fit-in/200x296.2962962962963/v1.bTsxMzAwNDEwMDtqOzE4MTUwOzEyMDA7MTY4ODsyNTAw",
      price: 400,
      description: "While it can take pride in its visual achievements,The Lion King is a by-the-numbers retelling that lacks the energy and heart that made the original so beloved--though for some fans that may just be enough.",
      starshow: false,
      // iframe: "http://player.theplatform.com/p/dCK2IC/X36SYnM49ldh/select/media/guid/2474312077/1002373E-1310-4374-843E-01F427D86B17?ec=f&isEmbedded=true",
    },
     {
       name: "ALADDIN",
       imgUrl: "https://resizing.flixster.com/Sc5m2ZasbnWI4yr7FmKF2ER87Nc=/fit-in/200x296.2962962962963/v1.bTsxMzAxODU5MjtqOzE4MTUwOzEyMDA7MTY4ODsyNTAw",
       price: 400,
       description: "Aladdin retells its classic source material's story with sufficient spectacle and skill, even if it never approaches the dazzling splendor of the animated original.",
       starshow: false,
       // iframe: "http://player.theplatform.com/p/dCK2IC/X36SYnM49ldh/select/media/guid/2474312077/82D004A7-2A15-41B4-8E23-643BC9F191DF?ec=f&isEmbedded=true",
     },
   ]
 },
 methods: {
   bgImg(url) {
     return {
       "background-position": "center center",
       "background-size": "cover",
       "background-image": "url(" + url + ")"
     }
   },
   addtoCart(movie, evt) {
     this.currentMovie = movie
     console.log(evt)
     let target = evt.target
     this.$nextTick(() => {
       TweenMax.from('.buybox', 0.8, {
         left: $(target).offset().left,
         top: $(target).offset().top,
         opacity: 1,
         ease: Power1.easeOut,
       })
       setTimeout(() => {
         this.cart.push(movie)
       }, 800)
     })
     console.log(this.cart.length)
   },

   wheel(evt) {
     TweenMax.to(".cards", 0.8, {
       left: "+=" + evt.deltaY * 2.5 + "px"
     })
   },
   starShow(movie, evt) {
     let star = movie.starshow = !movie.starshow
     let target = evt.target
     this.currentMovie = movie
     console.log(star)
     if (movie.starshow) {
       this.$nextTick(() => {
         TweenMax.from('.starbox', 0.8, {
           left: $(target).offset().left,
           top: $(target).offset().top,
           opacity: 1,
           color: "rgba(250, 45, 45, 0.8)",
           ease: Power1.easeIn,
         })
         setTimeout(() => {
           this.favorite.push(movie)
         }, 600)
       })
       console.log(this.favorite.length)
     }
   },
   movieStart() {
     let _this = this
     var loadTimer = setInterval(() => {
       $('.loading-bar').css('width', _this.time + '%')
       _this.time += 1
       $('.loading-text').text(_this.time)
       $('.animation').css({ 'animation': 'moviejump 0.8s infinite alternate' })
       $('.top-bgc').css({ 'animation': 'bgcolor 3s infinite alternate' })
       if (_this.time >= 100) {
         clearInterval(loadTimer)
         $('.loading-page').addClass('movie-page')
       }
     }, 1000 / 30)
   }
 },
 mounted: {

 },
 created: {

 },
 watch: {
   cart() {
     TweenMax.from(".fa-shopping-cart", 0.3, {
       scale: 0.5
     })
   },
   favorite() {
     TweenMax.from('.fa-star', 1, {
       scale: 1.5
     })
   },
 },
 computed: {
   totalPrice() {
     return this.cart.map(movie => movie.price).reduce((total, p) => total + p, 0)
   }
 }
})


class Content {
 constructor(el) {
     this.DOM = {el: el};
     this.DOM.number = this.DOM.el.querySelector('.content__number');
     this.DOM.title = this.DOM.el.querySelector('.content__title');
     this.DOM.subtitle = this.DOM.el.querySelector('.content__subtitle');
     this.DOM.text = this.DOM.el.querySelector('.content__text');
     this.DOM.backCtrl = this.DOM.el.parentNode.querySelector('.content__close');
     this.DOM.backCtrl.addEventListener('click', () => slideshow.hideContent());
 }
 show() {
     this.DOM.el.classList.add('content__item--current');

     TweenMax.staggerTo([this.DOM.backCtrl,this.DOM.number,this.DOM.title,this.DOM.subtitle,this.DOM.text], 0.8, {
         ease: Power4.easeOut,
         delay: 0.4,
         opacity: 1,
         startAt: {x: 40},
         y: 0
     }, 0.05);
 }
 hide() {
     this.DOM.el.classList.remove('content__item--current');

     TweenMax.staggerTo([this.DOM.backCtrl,this.DOM.number,this.DOM.title,this.DOM.subtitle,this.DOM.text].reverse(), 0.3, {
         ease: Power3.easeIn,
         opacity: 0,
         y: 10
     }, 0.01);
 }
}


class Slide {
 constructor(el) {
     this.DOM = {el: el};
     // The image wrap element.
     this.DOM.imgWrap = this.DOM.el.querySelector('.left');
     // The image element.
     this.DOM.img = this.DOM.imgWrap.querySelector('.cover');
     // The texts: the parent wrap, title, number and side text.
     this.DOM.texts = {
         // wrap: this.DOM.el.querySelector('.slide__title-wrap'),
         title: this.DOM.el.querySelector('.name'),
         number: this.DOM.el.querySelector('.des'),
         // side: this.DOM.el.querySelector('.slide__side'),
     };
     // Split the title and side texts into spans, one per letter. Sort these so we can later animate then with the 
     // randomizeLetters or disassembleLetters functions when navigating and showing the content.
     charming(this.DOM.texts.title);
     charming(this.DOM.texts.side);
     this.DOM.titleLetters = Array.from(this.DOM.texts.title.querySelectorAll('span')).sort(() => 0.5 - Math.random());
     this.DOM.sideLetters = Array.from(this.DOM.texts.side.querySelectorAll('span')).sort(() => 0.5 - Math.random());
     this.DOM.titleLetters.forEach(letter => letter.dataset.initial = letter.innerHTML);
     this.DOM.sideLetters.forEach(letter => letter.dataset.initial = letter.innerHTML);
     // Calculate the sizes of the image wrap. 
     this.calcSizes();
     // And also the transforms needed per position. 
     // We have 5 different possible positions for a slide: center, bottom right, top left and outside the viewport (top left or bottom right).
     this.calcTransforms();
     // Init/Bind events.
     this.initEvents();
 }
 // Gets the size of the image wrap.
 calcSizes() {
     this.width = this.DOM.imgWrap.offsetWidth;
     this.height = this.DOM.imgWrap.offsetHeight;
 }
 // Gets the transforms per slide position.
 calcTransforms() {
     /*
     Each position corresponds to the position of a given slide:
     0: left top corner outside the viewport
     1: left top corner (prev slide position)
     2: center (current slide position)
     3: right bottom corner (next slide position)
     4: right bottom corner outside the viewport
     5: left side, for when the content is shown
     */
     this.transforms = [
         {x: -1*(winsize.width/2+this.width), y: -1*(winsize.height/2+this.height), rotation: -30},
         {x: -1*(winsize.width/2-this.width/3), y: -1*(winsize.height/2-this.height/3), rotation: 0},
         {x: 0, y: 0, rotation: 0},
         {x: winsize.width/2-this.width/3, y: winsize.height/2-this.height/3, rotation: 0},
         {x: winsize.width/2+this.width, y: winsize.height/2+this.height, rotation: 30},
         {x: -1*(winsize.width/2 - this.width/2 - winsize.width*0.075), y: 0, rotation: 0}
     ];
 }
 // Init events:
 // Mouseevents for mousemove/tilt/scale on the current image, and window resize.
 initEvents() {
     // this.mouseenterFn = () => {
     //     if ( !this.isPositionedCenter() || !allowTilt ) return;
     //     clearTimeout(this.mousetime);
     //     this.mousetime = setTimeout(() => {
     //         // Scale the image.
     //         TweenMax.to(this.DOM.img, 0.8, {
     //             ease: Power3.easeOut,
     //             scale: 1.1
     //         });
     //     }, 40);
     // };
     // this.mousemoveFn = ev => requestAnimationFrame(() => {
     //     // Tilt the current slide.
     //     if ( !allowTilt || !this.isPositionedCenter() ) return;
     //     this.tilt(ev);
     // });
     this.mouseleaveFn = (ev) => requestAnimationFrame(() => {
         // if ( !allowTilt || !this.isPositionedCenter() ) return;
         // clearTimeout(this.mousetime);

         // Reset tilt and image scale.
         // TweenMax.to([this.DOM.imgWrap,this.DOM.texts.wrap], 1.8, {
         //     ease: 'Power4.easeOut',
         //     x: 0,
         //     y: 0,
         //     rotationX: 0,
         //     rotationY: 0
         // });
         // TweenMax.to(this.DOM.img, 1.8, {
         //     ease: 'Power4.easeOut',
         //     scale: 1
         // });
     });
     // When resizing the window recalculate size and transforms, since both will depend on the window size.
     this.resizeFn = () => {
         this.calcSizes();
         this.calcTransforms();
     };
     // this.DOM.imgWrap.addEventListener('mouseenter', this.mouseenterFn);
     // this.DOM.imgWrap.addEventListener('mousemove', this.mousemoveFn);
     this.DOM.imgWrap.addEventListener('mouseleave', this.mouseleaveFn);
     window.addEventListener('resize', this.resizeFn);
 }
 // Tilt the image wrap and texts when mouse moving the current slide.
 tilt(ev) {
     // const mousepos = getMousePos(ev);
     // Document scrolls.
     // const docScrolls = {
     //     left : document.body.scrollLeft + document.documentElement.scrollLeft, 
     //     top : document.body.scrollTop + document.documentElement.scrollTop
     // };
     // const bounds = this.DOM.imgWrap.getBoundingClientRect();;
     // Mouse position relative to the main element (this.DOM.el).
     // const relmousepos = { 
     //     x : mousepos.x - bounds.left - docScrolls.left, 
     //     y : mousepos.y - bounds.top - docScrolls.top 
     // };
     
     // Move the element from -20 to 20 pixels in both x and y axis.
     // Rotate the element from -15 to 15 degrees in both x and y axis.
     // let t = {x:[-20,20],y:[-20,20]},
     //     r = {x:[-15,15],y:[-15,15]};

     // const transforms = {
     //     translation : {
     //         x: (t.x[1]-t.x[0])/bounds.width*relmousepos.x + t.x[0],
     //         y: (t.y[1]-t.y[0])/bounds.height*relmousepos.y + t.y[0]
     //     },
     //     rotation : {
     //         x: (r.x[1]-r.x[0])/bounds.height*relmousepos.y + r.x[0],
     //         y: (r.y[1]-r.y[0])/bounds.width*relmousepos.x + r.y[0]
     //     }
     // };

     // Move the image wrap.
     // TweenMax.to(this.DOM.imgWrap, 1.5, {
     //     ease: 'Power1.easeOut',
     //     x: transforms.translation.x,
     //     y: transforms.translation.y,
     //     rotationX: transforms.rotation.x,
     //     rotationY: transforms.rotation.y
     // }); 

     // Move the texts wrap.
     // TweenMax.to(this.DOM.texts.wrap, 1.5, {
     //     ease: 'Power1.easeOut',
     //     x: -1*transforms.translation.x,
     //     y: -1*transforms.translation.y
     // }); 
 }
 // Positions one slide (left, right or current) in the viewport.
 position(pos) {
     TweenMax.set(this.DOM.imgWrap, {
         x: this.transforms[pos].x, 
         y: this.transforms[pos].y, 
         // rotationX: 0,
         // rotationY: 0,
         // opacity: 1,
         // rotationZ: this.transforms[pos].rotation
     });
 }
 // Sets it as current.
 setCurrent(isContentOpen) {
     this.isCurrent = true;
     this.DOM.el.classList.add('slide--current', 'slide--visible');
     // Position it on the current´s position.
     this.position(isContentOpen ? 5 : 2);
 }
 // Position the slide on the left side.
 setLeft(isContentOpen) {
     this.isRight = this.isCurrent = false;
     this.isLeft = true;
     this.DOM.el.classList.add('slide--visible');
     // Position it on the left position.
     this.position(isContentOpen ? 0 : 1);
 }
 // Position the slide on the right side.
 setRight(isContentOpen) {
     this.isLeft = this.isCurrent = false;
     this.isRight = true;
     this.DOM.el.classList.add('slide--visible');
     // Position it on the right position.
     this.position(isContentOpen ? 4 : 3);
 }
 // Check if the slide is positioned on the right side (if it´s the next slide in the slideshow).
 isPositionedRight() {
     return this.isRight;
 }
 // Check if the slide is positioned on the left side (if it´s the previous slide in the slideshow).
 isPositionedLeft() {
     return this.isLeft;
 }
 // Check if the slide is the current one.
 isPositionedCenter() {
     return this.isCurrent;
 }
 // Reset classes and state.
 reset() {
     this.isRight = this.isLeft = this.isCurrent = false;
     this.DOM.el.classList = 'slide';
 }
 hide() {
     TweenMax.set(this.DOM.imgWrap, {x:0, y:0, rotationX:0, rotationY:0, rotationZ:0, opacity:0});
 }
 // Moves a slide to a specific position defined in settings.position.
 // Also, moves it from position settings.from and if we need to reset the image scale when moving the slide then settings.resetImageScale should be true.
 moveToPosition(settings) {
     return new Promise((resolve, reject) => {
         /*
         Moves the slide to a specific position:
         -2: left top corner outside the viewport
         -1: left top corner (prev slide position)
         0: center (current slide position)
         1: right bottom corner (next slide position)
         2: right bottom corner outside the viewport
         3: left side, for when the content is shown
         */
         TweenMax.to(this.DOM.imgWrap, .8, {
             ease: Power4.easeInOut,
             delay: settings.delay || 0,
             startAt: settings.from !== undefined ? {
                 x: this.transforms[settings.from+2].x,
                 y: this.transforms[settings.from+2].y,
                 rotationX: 0,
                 rotationY: 0,
                 rotationZ: this.transforms[settings.from+2].rotation
             } : {},
             x: this.transforms[settings.position+2].x,
             y: this.transforms[settings.position+2].y,
             rotationX: 0,
             rotationY: 0,
             rotationZ: this.transforms[settings.position+2].rotation,
             onStart: settings.from !== undefined ? () => TweenMax.set(this.DOM.imgWrap, {opacity: 1}) : null,
             onComplete: resolve
         });
         
         // Reset image scale when showing the content of the current slide.
         if ( settings.resetImageScale ) {
             TweenMax.to(this.DOM.img, .8, {
                 ease: Power4.easeInOut,
                 scale: 1
             });
         }
     });
 }
 // Hides the current slide´s texts.
 hideTexts(animation = false) {
     if ( animation ) {
         disassembleLetters(this.DOM.titleLetters).then(() => TweenMax.set(this.DOM.texts.wrap, {opacity: 0}));
         // disassembleLetters(this.DOM.sideLetters).then(() => TweenMax.set(this.DOM.texts.side, {opacity: 0}));
     }
     else {
         TweenMax.set(this.DOM.texts.wrap, {opacity: 0});
         // TweenMax.set(this.DOM.texts.side, {opacity: 0});
     }
 }
 // Shows the current slide´s texts.
 showTexts(animation = true) {
     TweenMax.set(this.DOM.texts.wrap, {opacity: 1});
     // TweenMax.set(this.DOM.texts.side, {opacity: 1});

     if ( animation ) { 
         randomizeLetters(this.DOM.titleLetters);
         randomizeLetters(this.DOM.sideLetters);
         TweenMax.to(this.DOM.texts.title, 0.6, {
             ease: Elastic.easeOut.config(1,0.5),
             startAt: {x: '-10%', opacity: 0},
             y: '0%',
             opacity: 1 
         });
     }
 }
}