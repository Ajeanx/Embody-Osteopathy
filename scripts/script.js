console.log("S")
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    console.log("SEEEE")
    anchor.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default anchor behavior

        const targetId = this.getAttribute("href").substring(1); // Get the target ID from the href attribute
        const targetElement = document.getElementById(targetId);

        // Get the height of the navbar from the CSS variable
        const navHeight = getComputedStyle(document.documentElement).getPropertyValue('--nav-height');

        if (targetElement) {
        const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY; 
        const offsetPosition = elementPosition - parseInt(navHeight);

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth" // Smooth scroll effect
        });
        }
    });
});
  