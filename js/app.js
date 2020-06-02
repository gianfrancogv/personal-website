function scrollToTop (duration) {

    const totalScrollDistance = document.scrollingElement.scrollTop;
    let scrollY = totalScrollDistance, oldTimestamp = null;

    function step (newTimestamp) {
        if (oldTimestamp !== null) {
            scrollY -= totalScrollDistance * (newTimestamp - oldTimestamp) / duration;
            if (scrollY <= 0) return document.scrollingElement.scrollTop = 0;
            document.scrollingElement.scrollTop = scrollY;
        }
        oldTimestamp = newTimestamp;
        window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
}

document.addEventListener('scroll', function (e) {
    var top  = window.pageYOffset + window.innerHeight,
        isVisible = top > document.querySelector('.about').offsetTop,
        isVisible = top > document.querySelector('.skills-tools').offsetTop;

     if (isVisible) {
       document.querySelector('.about').classList.add('arriveLeft');
     }
     if (isVisible) {
       document.querySelector('.skills-tools').classList.add('arriveRight');
     }
});

$(document).ready(function(){
    $('body').scrollspy({target: "body", offset: 80}); 

    $('[data-spy="scroll"]').each(function () {
        var $spy = $(this).scrollspy('refresh')
    });

});