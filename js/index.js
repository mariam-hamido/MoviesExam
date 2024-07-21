import { Home } from "./home.module.js";


const home=new Home()

import { validateForm } from './contactUS.module.js';


document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        if (!validateForm()) {
            event.preventDefault();
        }
    });
});






document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('navIcon').onclick = toggleNav;
});

 function toggleNav() {
    const navTabs = document.querySelector('.nav-tabs');
    const navIcon = document.getElementById('navIcon');

    // Toggle the display of navTabs
    navTabs.classList.toggle('d-none');

    // Toggle the icon
    if (navTabs.classList.contains('d-none')) {
        navIcon.classList.remove('fa-x');
        navIcon.classList.add('fa-bars');
        
    } else {
        navIcon.classList.remove('fa-bars');
        navIcon.classList.add('fa-x');
    }
}








