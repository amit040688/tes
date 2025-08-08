    // owl carousel script
    $(document).ready(function() {
    $('#carousel').owlCarousel({
        margin: 15,
        loop: true,
        dots:false,
        autoplay: true,
         nav: true,
         navText: [
        '<i class="fa-solid fa-arrow-left-long" aria-hidden="true"></i>',
        '<i class="fa-solid fa-arrow-right-long" aria-hidden="true"></i>'
    
    ],
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
              
            },
            767:{
                items: 2,
                
            },
            1000:{
                items: 3,
              
            }
        }
    });
      $('#carou').owlCarousel({
        margin: 10,
        loop: true,
         dots:false,
        autoplay: true,
                 nav: true,
         navText: [
        '<i class="fa-solid fa-arrow-left-long" aria-hidden="true"></i>',
        '<i class="fa-solid fa-arrow-right-long" aria-hidden="true"></i>'
    
    ],
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            767:{
                items: 2,
                nav: false
            },
            1000:{
                items: 4,
                nav: false
            }
        }
        
    });
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');
		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');
		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})
});
       $('.menu-btn').click(function(){
        $('body').toggleClass('menu_open')
     
    
    });
           $('.menu-close,.mobile_menu ul li a').click(function(){
        $('body').removeClass('menu_open')
    });
