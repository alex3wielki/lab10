/* STEP 2a - DOM ready*/
$(function() {
    console.log("DOM is ready.");

    var navTop = $('#floatingbar').offset().top;

    var texth1 = '<li id="textfromh1"><a href="#" title="Back to top" class="top">' + $('h1').text() + '</a></li>';


    var i = 0;
    $(window).scroll(function() {
        if ($(window).scrollTop() > navTop) {
            if (i == 0) { $('#floatingbar>ul').prepend(texth1); }

            $('#floatingbar').addClass('floater');

            i++;
        } else {

            $('#floatingbar').removeClass('floater');
            $('#textfromh1').remove();
            i = 0;
        }

        // Playing with offsets, moving the go up button
        if ($(window).scrollTop() > $('#content p:nth-of-type(1)').offset().top) {
            $('footer p a.top').fadeIn(100);
        } else {
            $('footer p a.top').fadeOut(100);
        }
    });

    $('footer p a.top').click(function(event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: 0 }, 300);
    })

    $('span.pullquote').each(function() {

        var $parentElem = $(this).parent('p');

        $(this).clone().addClass('pullquote2').prependTo($parentElem);
    })
});