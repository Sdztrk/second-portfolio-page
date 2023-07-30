
//adding active class on navigation links


export const aboutEventListeners = () => {

    const about = document.querySelector('.about');
    window.addEventListener('scroll', () => {
        const aboutTop = about.getBoundingClientRect().top;
        const aboutLink= document.querySelector('.navUl li:nth-child(1)');
        if(aboutTop < -50 && aboutTop > -868){
            aboutLink.classList.add('active');
        }
        else{
            aboutLink.classList.remove('active');
        } 
    }
    )}

export const experienceEventListeners = () => {

const experience = document.querySelector('.experience');
window.addEventListener('scroll', () => {
    const experienceTop = experience.getBoundingClientRect().top;
    const experienceLink= document.querySelector('.navUl li:nth-child(2)');
    if(experienceTop < 106 && experienceTop > -780){
        experienceLink.classList.add('active');
    }
   else {
        experienceLink.classList.remove('active');
    }
}   
)
}

export const projectEventListeners = () => {

    const myProjectsSection = document.querySelector('.myProjectsSection');
    window.addEventListener('scroll', () => {
        const myProjectsSectionTop = myProjectsSection.getBoundingClientRect().top;
        const projectLink= document.querySelector('.navUl li:nth-child(3)');
        if(myProjectsSectionTop < 65 && myProjectsSectionTop > -774){
            projectLink.classList.add('active');
        }
        else {
            projectLink.classList.remove('active');
        }
    })
    }



const resume = document.querySelector('.resume');
// window.addEventListener('scroll', () => {
//     console.log(resume.getBoundingClientRect().top)
// }

// )


window.addEventListener('scroll', () => {
    const resumeTop = resume.getBoundingClientRect().top;
    const resumeLink= document.querySelector('.navUl li:nth-child(4)');
    if(resumeTop < 50) {
        resumeLink.classList.add('active');
    }
    else{
        resumeLink.classList.remove('active');
    }
}
)

window.addEventListener('DOMContentLoaded', () => {
    const name = document.querySelector('.name');
    name.classList.add('name-show');
    const navUl = document.querySelector('.navUl');
    navUl.classList.add('navUl-show');
})







// window.addEventListener('scroll', () => {
//     console.log(myProjectsSection.getBoundingClientRect().top)
// })
//about top =  between -37 and -868
//experinece top =  between 106 and -780
//myprojects top = between 65 and -774
//resume top = between 24 and 900

