
//importing the navigation event listeners from the navigation.js file
import { projectEventListeners,experienceEventListeners,aboutEventListeners } from './navigation.js';

//Calling the functions
projectEventListeners();
experienceEventListeners();
aboutEventListeners();

//Selectors
const sayHello = document.querySelector('.sayHello');
const sayFrontendDev= document.querySelector('.sayFrontendDev');
const container = document.querySelector('.container');

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


//adding event listener to sayhallo and sayfrontenddev
sayHello.addEventListener('click', () => {
    //removing the sayhello textcontent
    sayHello.textContent = '';
    sayingHello()
})

sayFrontendDev.addEventListener('click', () => {
    sayFrontendDev.textContent = '';
    sayingFrontendDev()
})


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

//adding eventlisteners to navigation links
const pageAbout = document.querySelector('.pageAbout');
pageAbout.addEventListener('click', () => {
    window.scrollTo({
        top: 780,
        behavior: 'smooth'
    })
})

//window scroll to experience section
const pageExperience = document.querySelector('.pageExperience');
pageExperience.addEventListener('click', () => {
    window.scrollTo({
        top: 1650,
        behavior: 'smooth'
    })
})

//window scroll to my projects section
const pageProject = document.querySelector('.pageProject');
pageProject.addEventListener('click', () => {
    window.scrollTo({
        top: 2500,
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
//window scroll to arrow
const scrollTop= document.querySelector('.scrollTop');
scrollTop.addEventListener('click', () => {
    window.scrollTo({
        top: 780,
        behavior: 'smooth'
    })
})

//adding foreach item eventlisteners
const item = document.querySelector('.item');
const overlay = document.querySelector(".overlay")
console.log(item)
console.log(overlay)

// item.addEventListener('mouseover', () => {
// overlay.classList.add('overlayActive');
// })


// item.addEventListener('mouseover', () => {
//     overlay.classList.add("overlayActive")
// })
// item,addEventListener("mouseout",() => {
//     overlay.classList.remove("overlayActive")
// })


 const flexContainer = document.querySelector(".flexContainer")
 console.log(flexContainer)


// flexContainer.addEventListener("mouseover",(e) => {
//     if(e.target.classList.contains("img"))
//     {
//         e.target.nextElementSibling.classList.add("overlayActive")
//     }
// })

//  flexContainer.addEventListener("mouseout",(e) => {
//       if(e.target.classList.contains("overlay"))
//       {
//         console.log("true")
//         e.target.classList.remove("overlayActive")
//       }
//   })