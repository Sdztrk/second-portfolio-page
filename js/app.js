
//importing the navigation event listeners from the navigation.js file
import { projectEventListeners,experienceEventListeners,aboutEventListeners } from './navigation.js';

//Calling the functions
projectEventListeners();
experienceEventListeners();
aboutEventListeners();

//Selectors
const sayHello = document.querySelector('.sayHello');
const sayFrontendDev= document.querySelector('.sayFrontendDev');

//Function for the saying hello text 
const sayingHello = () => {
let str = 'hi, I`m said, I`m a frontend developer';
let i = 0;
let timer;
for (let i = 0; i < str.length; i++) {
    timer = setTimeout(() => {
        sayHello.textContent += str[i];
    }, 100 * i);
}}

//Function for the saying i love coding text
const sayingFrontendDev = () => {
let str2 = '  i love coding ...';
let j = 0;
let timer2;
for (let j = 0; j < str2.length; j++) {
    timer2 = setTimeout(() => {
        sayFrontendDev.textContent += str2[j];
    }, 100 * j);
}
}

//Calling the functions
sayingHello();
setTimeout(sayingFrontendDev, 4000);



//adding navigation background color on scroll
const nav = document.getElementsByTagName('nav')[0];
window.addEventListener('scroll', () => {
if (window.pageYOffset > 50) {
    nav.classList.add('nav-bg');
}
else {
    nav.classList.remove('nav-bg');
}
})
const languages = document.querySelector('.languages');
window.addEventListener('scroll', () => {
if (window.pageYOffset > 2230) {
    languages.classList.add('languages-show');
}
})
//finding the pageYoffset height of languages section
console.log(languages);
const languagesHeight = languages.scrollTop;
console.log(languagesHeight);


//adding eventlisteners to navigation links
const pageAbout = document.querySelector('.pageAbout');
pageAbout.addEventListener('click', () => {
    window.scrollTo({
        top: 880,
        behavior: 'smooth'
    })
})

//window scroll to experience section
const pageExperience = document.querySelector('.pageExperience');
pageExperience.addEventListener('click', () => {
    window.scrollTo({
        top: 1790,
        behavior: 'smooth'
    })
})

//window scroll to my projects section
const pageProject = document.querySelector('.pageProject');
pageProject.addEventListener('click', () => {
    window.scrollTo({
        top: 2690,
        behavior: 'smooth'
    })
})

//window scroll to name section
const name = document.querySelector('.name');
name.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})
//window scroll to resume section
const pageResume = document.querySelector('.pageContact');
pageResume.addEventListener('click', () => {
    window.scrollTo({
        top: 3600,
        behavior: 'smooth'
    })
})

//window scroll to arrow
const scrollAbout= document.querySelector('.scrollAbout');
scrollAbout.addEventListener('click', () => {
    window.scrollTo({
        top: 880,
        behavior: 'smooth'
    })
})

//adding event listener to the rocket
const rocket = document.querySelector('.pageTop');
rocket.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})
