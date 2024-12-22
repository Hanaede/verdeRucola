document.addEventListener('DOMContentLoaded', function() {
    const marqueeContent = document.querySelector('.marquee-content');
    const marquee = document.querySelector('.marquee');
    const marqueeWidth = marquee.offsetWidth;
    const contentWidth = marqueeContent.offsetWidth;

    let startPosition = marqueeWidth;
    let endPosition = -contentWidth;

    function animateMarquee() {
        if (startPosition <= endPosition) {
            startPosition = marqueeWidth;
        } else {
            startPosition -= 2; // Adjust this value to change the speed
        }
        marqueeContent.style.transform = `translateX(${startPosition}px)`;
        requestAnimationFrame(animateMarquee);
    }

    animateMarquee();
});