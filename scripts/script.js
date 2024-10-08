// script.js

document.getElementById('explore-btn').addEventListener('click', function() {
    window.location.href = 'https://threejs.org'; // Update with the actual URL
});

//document.getElementById('get-started-btn').addEventListener('click', function() {
//    window.location.href = 'preparation-tips.html'; // Update with the actual URL
//});

// Add event listeners for feature sections
document.getElementById('career-paths').addEventListener('click', function() {
    window.location.href = 'career-paths.html'; // Update with the actual URL
});

document.getElementById('job-opportunities').addEventListener('click', function() {
    window.location.href = 'job-opportunities.html'; // Update with the actual URL
});

document.getElementById('preparation-tips').addEventListener('click', function() {
    window.location.href = 'preparation-tips.html'; // Update with the actual URL
});


function findJobes() {
    //More career Job Opportunities
    window.location.href = 'https://www.indeed.com/jobs?q=computer+science&l=&from=searchOnHP&vjk=70afb95a7806db1a'; // Replace with the actual URL
}

document.addEventListener('DOMContentLoaded', function() {
    const getStartedBtn = document.getElementById('get-started-btn');
    const hiddenContent = document.querySelector('.hidden-content');

    getStartedBtn.addEventListener('click', function() {
        hiddenContent.style.display = 'block';
        setTimeout(() => {
            hiddenContent.classList.add('show');
        }, 10);
    });
});

function updateNavColor() {
    const navbar = document.querySelector('.navbar');
    const backgroundColor = window.getComputedStyle(document.body).backgroundColor;
    const rgb = backgroundColor.match(/\d+/g); // Extract RGB values

    // Calculate brightness
    const brightness = (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) / 255;

    // Change text color based on brightness
    if (brightness < 0.5) {
        navbar.querySelectorAll('a').forEach(link => {
            link.style.color = 'black'; // Light text for dark backgrounds
        });
    } else {
        navbar.querySelectorAll('a').forEach(link => {
            link.style.color = 'white'; // Dark text for light backgrounds
        });
    }
}

// Call the function on page load
window.onload = updateNavColor;
// Call the function on resize to adjust if necessary
window.onresize = updateNavColor;
