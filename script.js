document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    let index = 0;
    let scrolling = false;

    window.addEventListener('wheel', function(e) {
        e.preventDefault(); // Prevent default scrolling behavior

        if (scrolling) return; // If currently scrolling, ignore the event

        scrolling = true;

        // Calculate the height of the viewport
        const viewportHeight = window.innerHeight;

        // Determine the direction of the scroll
        const delta = e.deltaY > 0 ? 1 : -1;

        // Calculate the target section based on the scroll direction
        const nextIndex = Math.max(0, Math.min(index + delta, sections.length - 1));

        // Calculate the target scroll position
        const targetScroll = nextIndex * viewportHeight;

        // Scroll to the target position
        window.scrollTo({
            top: targetScroll,
            behavior: 'smooth'
        });

        // Update the index
        index = nextIndex;

        // Set a timeout to reset the scrolling flag after the scroll animation completes
        setTimeout(function() {
            scrolling = false;
        }, 1000); // Adjust the duration of the scroll animation as needed
    });
});
