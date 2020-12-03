let btop = document.getElementById('top');
let mid = document.getElementById('mid');
let bot = document.getElementById('bot');
let btn = document.getElementById('burger');


var tl = gsap.timeline({paused: true, reversed: true})

        tl.to(btop, .2, { y: -5, delay: 0, ease: "power3.inOut"} )
            .to(bot, .2, { y: 5, delay: 0, ease: "power3.inOut"} )
            .to(btop, .2,  { y: 5,delay: .5, ease: "power3.inOut"} )
            .to(bot, .2,  { y: -5,delay: .5, ease: "power3.inOut"} )
            .to(mid, .1, { opacity: 0, x: 5})
            .to(btop, .2, {ease: "power3.inOut", rotation: 45, delay: .8, transformOrigin: '50% 50%'})
            .to(bot, .2, {rotation: -45, ease: "power3.inOut", delay: .8, transformOrigin: '50% 50%'});
           
           
btn.addEventListener("click", function () {
                tl.reversed() ? tl.restart() : tl.reverse();
              });
                 
   
    //     // gsap.to(btop, .2, { y: -5, ease: "power3.inOut"} );
    //     // gsap.to(bot, .2, { y: 5, ease: "power3.inOut"} );
    //     // gsap.to(btop, .2,  { y: -5,delay: .5, ease: "power3.inOut"} );
    //     // gsap.to(bot, .2,  { y: 5,delay: .5, ease: "power3.inOut"} );
    //     gsap.to(mid, .1, { opacity: 1, x: -5, delay:.8})
    //     gsap.to(btop, .2, {ease: "power3.inOut", rotation: 0, transformOrigin: '50% 50%'});
    //     gsap.to(bot, .2, {rotation: 0, ease: "power3.inOut",  transformOrigin: '50% 50%'})
        
    // },
    // menuOpen: function(){
//         btn.addEventListener("click", function(){   
//             console.log('open')        
//                  Timeline.open();   
//             Timeline.opened = true
//         })
//     },
//     menuClose: function(){
//         btn.addEventListener("click", function(){
//             console.log('close')
//                  Timeline.close();
//                  Timeline.opened = false
//         })
//     }

// }

// Timeline.init()