$(document).ready( 
    function(){


        $('.navbar-toggler').click(function(){

            $('.navbar-toggler').toggleClass('change')

        })

        $(window).scroll(function(){

            let position = $(this).scrollTop();

            if(position>= 610){
                $('.navbar').addClass('navbar-background');
                $('.navbar').addClass('fixed-top');

            }
            else{
                $('.navbar').removeClass('navbar-background');
                $('.navbar').removeClass('fixed-top');

            }

        })


        $(".info, #header").ripples({
            dropRadius: 25,
            perturbance: 0.6,
          });

          $('.parent-container').magnificPopup({
            delegate: 'a', // child items selector, by clicking on it popup will open
            type: 'image'
            // other options
          });



    }
);

