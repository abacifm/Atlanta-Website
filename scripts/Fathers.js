function toggleMenu() {
    // JavaScript for toggling menu
}
function toggleText(sectionId) {
    var section = document.getElementById(sectionId);
    var button = section.querySelector('.read-more-btn');
    var hiddenText = section.querySelector('.hidden-text');
    $(hiddenText).slideToggle('fast', function() {
        button.textContent = (button.textContent === 'READ LESS') ? 'READ MORE' : 'READ LESS';
    });
}
function toggleFooterSection(sectionId) {
    var section = document.getElementById(sectionId);
    $(section).slideToggle('fast');
}

function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
}
function toggleFooterSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.style.display = section.style.display === 'block' ? 'none' : 'block';
}

function toggleMenu() {
    const menu = document.querySelector('nav ul');
    menu.classList.toggle('open');
}

function toggleFooterSection(sectionId) {
    const section = document.getElementById(sectionId);
    $(section).slideToggle('fast'); // Using jQuery for a smooth toggle
}


function toggleSection(sectionId) {
    if (window.innerWidth <= 768) { // Only toggle on small screens
        var section = document.getElementById(sectionId);
        var isDisplayed = section.style.display === 'block';
        var containers = document.querySelectorAll('.footer-content > div');
        
        // Close all open sections
        containers.forEach(div => {
            if (div !== section) div.style.display = 'none'; // close other sections
        });

        // Toggle clicked section
        section.style.display = isDisplayed ? 'none' : 'block';
    }
}