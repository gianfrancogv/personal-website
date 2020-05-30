// $(document).ready(function(){
//     // add padding top to show content behind navbar
//     $('body').css('padding-top', $('.navbar').outerHeight() + 'px')

//     // detect scroll top or down
//     if ($('.smart-scroll').length > 0) { // check if element exists
//         var last_scroll_top = 0;
//         $(window).on('scroll', function() {
//             scroll_top = $(this).scrollTop();
//             if(scroll_top > last_scroll_top && last_scroll_top > 720) {
//                 $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
//             }
//             else {
//                 $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
//             }
//             last_scroll_top = scroll_top;
//         });
//     }
// });