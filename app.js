/* STEP 2a - DOM ready*/
$(function() {
    console.log("DOM is ready.");
    /* STEP 2b - script to add class to nav when header is scrolled off screen */
    // Persistent navigation
    //add additional necessary offset for Webkit
    var navTop = $('#floatingbar').offset().top;
    // console.log(navTop);
    //Scroll function
    $(window).scroll(function() {
        // console.log("window scrolled!");
        //once window has scrolled past top of nav, add class .floater
        if ($(window).scrollTop() > navTop) {
            //add class .floater
            $('#floatingbar').addClass('floater').addClass('floater2');
        } else {
            //remove class .floater
            $('#floatingbar').removeClass('floater');
        }

        // Playing with offsets, moving the go up button
        if ($(window).scrollTop() > $('#content p:nth-of-type(1)').offset().top) {
            $('footer p a.top').fadeIn(100);
        } else {
            $('footer p a.top').fadeOut(100);
        }
    });
    /* STEP 6c - sticky footer button appear */
    /* STEP 6d - sticky footer button dissappear */
    /* STEP 6e - click handler to animate scroll to top */
    $('footer p a.top').click(function(event) {
            event.preventDefault();
            $('html,body').animate({ scrollTop: 0 }, 300);
        })
        /* stop default anchor behavior */
        /* STEP 3 - script to duplicate pullquote text */
        // Pullquotes
    $('span.pullquote').each(function() {
        //Grab the parent element (paragraph)
        var $parentElem = $(this).parent('p');
        //clone the span elem inside it, add a special class for CSS, and inject into HTML
        $(this).clone().addClass('pullquote2').prependTo($parentElem);
    })
});
// end DOM ready