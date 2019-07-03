/* Javascript for type.js */ 
var typed = new Typed(".type", { 
  strings: [
      "Daniel Narh",  
      "Front-End Engineer",
      "Freelancer",
      "Data Analyst",
      " PHP Developer."
  ],
   typeSpeed: 60,
   backSpeed: 60,
   loop: true
});

//image zoom
$('.test-popup-link').magnificPopup({
    type: 'image'
    // other options
  });

  $('.image-link').magnificPopup({
    type: 'image',
    mainClass: 'mfp-with-zoom', // this class is for CSS animation below
  
    zoom: {
      enabled: true, // By default it's false, so don't forget to enable it
  
      duration: 300, // duration of the effect, in milliseconds
      easing: 'ease-in-out', // CSS transition easing function
  
      // The "opener" function should return the element from which popup will be zoomed in
      // and to which popup will be scaled down
      // By defailt it looks for an image tag:
      opener: function(openerElement) {
        // openerElement is the element on which popup was initialized, in this case its <a> tag
        // you don't need to add "opener" option if this code matches your needs, it's defailt one.
        return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    }
  
  });

  //lax scroll effect
  window.onload = function() {
	lax.setup() // init

	const updateLax = () => {
		lax.update(window.scrollY)
		window.requestAnimationFrame(updateLax)
	}

	window.requestAnimationFrame(updateLax)
}

//scroll master 

// new Skroll()
//   .add("#my-name",{
//     animation: "fadeInLeft"

//   })
// .init();

var skroll = new Skroll()
			.add(".header",{
				animation:"zoomIn",
				duration:600
			})
			.add(".anim1",{
				animation:"fadeInUp",
				delay:120,
				duration:600,
				wait:250
			})
			.add(".anim2",{
				animation:"flipInX",
				delay:120,
				duration:750
			})
			.add(".anim3",{
				animation:"rotateLeftIn",
				delay:100,
				duration:750
			})
			.add(".anim4",{
				animation:"slideInLeft",
				delay:80,
				duration:800
			})
			.add(".anim5",{
				animation:"growInLeft",
				delay:80,
				duration:500,
				easing:"cubic-bezier(0.37, 0.27, 0.24, 1.26)"
			})
			.add(".anim6",{
				animation:"growInRight",
				delay:80,
				duration:500,
				easing:"cubic-bezier(0.37, 0.27, 0.24, 1.26)",
			})
			.addAnimation("spinIn",{
				start:function(el){
                    el.style["transform"] = "rotate(-360deg) scale(.2,.2)";
                    el.style["transform-origin"] ="50% 50%";
                    el.style["opacity"] = 0;
	            },
	            end:function(el){
	                el.style["transform"] = "rotate(0deg) scale(1,1)";
	                el.style["opacity"] = 1;
	            }
			})
			.add(".anim7",{
				animation:"spinIn",
				delay:80,
				duration:500,
				easing:"cubic-bezier(0.37, 0.27, 0.24, 1.26)"
			})
			.add(".anim8",{
				animation:"fadeInDown",
				delay:75,
				duration:150,
				triggerBottom:1,
				easing:"cubic-bezier(0.37, 0.27, 0.24, 1.26)"
			})
            .init();
            
