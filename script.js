document.addEventListener("DOMContentLoaded", function () {
    const image = document.querySelector('#about .col-7 img');
    const slogan = document.querySelector('#about .col-5 .about-slogan');

    function handleScroll() {
        const windowHeight = window.innerHeight;
        const imagePosition = image.getBoundingClientRect().top;
        const sloganPosition = slogan.getBoundingClientRect().top;

        // Check if the image is in the viewport
        if (imagePosition < windowHeight - 100) {
            image.classList.add('play-on-scroll', 'active');
        } else {
            image.classList.remove('active'); // Reset the animation when out of view
        }

        // Check if the slogan is in the viewport
        if (sloganPosition < windowHeight - 100) {
            slogan.classList.add('play-on-scroll', 'active');
        } else {
            slogan.classList.remove('active'); // Reset the animation when out of view
        }
    }

    window.addEventListener('scroll', handleScroll);
    // Initial check in case the image/slogan is already in the viewport
    handleScroll();
});





//Member section//
document.addEventListener('DOMContentLoaded', function () {
    // Show OIC button click event
    document.getElementById('show-oic').addEventListener('click', function () {
        const oicSection = document.getElementById('oic-section');
        const agentsSection = document.getElementById('agents-section');
        const teamLeadersSection = document.getElementById('team-leaders');

        // Hide other sections
        agentsSection.style.display = 'none';
        teamLeadersSection.style.display = 'none';

        // Always show the OIC section
        oicSection.style.display = 'block';
    });

    // Show Agents button click event
    document.getElementById('show-agents').addEventListener('click', function () {
        const agentsSection = document.getElementById('agents-section');
        const oicSection = document.getElementById('oic-section');
        const teamLeadersSection = document.getElementById('team-leaders');

        // Hide other sections
        oicSection.style.display = 'none';
        teamLeadersSection.style.display = 'none';

        // Always show the Agents section
        agentsSection.style.display = 'block';
    });

    // Show Team Leaders button click event
    document.getElementById('show-team').addEventListener('click', function () {
        const teamLeadersSection = document.getElementById('team-leaders');
        const oicSection = document.getElementById('oic-section');
        const agentsSection = document.getElementById('agents-section');

        // Hide other sections
        oicSection.style.display = 'none';
        agentsSection.style.display = 'none';

        // Always show the Team Leaders section
        teamLeadersSection.style.display = 'block';
    });
});



//review//
document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.col-4');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active'); 
            } else {
                entry.target.classList.remove('active'); 
            }
        });
    }, {
        threshold: 0.1, // Adjust to control sensitivity (0.1 = 10% visibility)
    });

    elements.forEach((element) => observer.observe(element));
});






const nav = document.querySelector('.nav'); // Select the nav element
const maxScrollHeight = 300; // Set a max scroll height for the effect

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop; // Current scroll position
    
    // Calculate the opacity based on the scroll position
    let opacity = Math.min(1, (scrollTop / maxScrollHeight)); // Limit to a max of 1 (100% opacity)

    // Change the background color based on the scroll position
    nav.style.backgroundColor = `rgba(255, 255, 255, ${0.3 + opacity * 0.7})`; // Start at 30% opacity and go to 100%
});
