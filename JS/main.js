     // Show Menu
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

    //   Show Menu 
// variable if contains exist

if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu');
    });
}

            // Hide Menu 
// Variable if contains exist

if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}



                // Remove Menu Mobile
const navLink = document.querySelectorAll('.nav__link');

const linkAction = ()=>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show menu
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n=>n.addEventListener('click', linkAction));

                // Change Background Header
const scrollHeader = ()=>{
    const header = document.getElementById('header');
    // When the scroll is greater than 50 viewport height and the scroll header class to the header tag 
    this.scrollY>50 ? header.classList.add('bg-header') : header.classList.remove('bg-header');
}

window.addEventListener('scroll', scrollHeader);

                // Scroll Section Active link
const sections = document.querySelectorAll('section[id]');


const scrollActive = ()=>{
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId);
              
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link');
        }else{
            sectionsClass.classList.remove('active-link');
        }
    });
};
window.addEventListener('scroll', scrollActive);
                // Show Scroll UP
const scrollUp = ()=>{
    const scrollUp = document.getElementById('scroll-up');
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);                


                // Scroll Reveal Animation 
const sr = new ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
});

sr.reveal(`.home__data, .footer__container, .footer__group`);
sr.reveal(`.home__img`,{delay:700, origin:'bottom'});
sr.reveal(`.logos__img, .program__card`,{interval: 100});
sr.reveal(`.choose__img, .calculate__content`,{origin: 'left'});
sr.reveal(`.choose__content, .calculate__img`,{origin: 'right'});
                // Calculate JS

const calculateForm = document.getElementById('calculate-form'),
      calculateCm = document.getElementById('calculate-cm'),              
      calculateMessage = document.getElementById('calculate-message'),
      calculateKg = document.getElementById('calculate-kg');

const calculateBMI = (e)=>{
    e.preventDefault();

    // Check if the fields have value 

    if(calculateCm.value === '' || calculateKg === ''){
        calculateMessage.classList.remove('color-green');
        calculateMessage.classList.add('color-red');

        calculateMessage.textContent = 'Fill the Height and Weight !!';

        setTimeout(() => {
            calculateMessage.textContent = '';
        }, 3000);
    }else{
        // BMI Formula
        const cm = calculateCm.value/100,
              kg = calculateKg.value,
              bmi = Math.round(kg/(cm *cm));

        // Show your Health status
        if(bmi<18.5){
            // Add color and display message
            calculateMessage.classList.add('color-green');
            calculateMessage.textContent = `Your BMI is ${bmi} and you are underweight 😔`;

        }else if(bmi<25){
            // Add color and display message
            calculateMessage.classList.add('color-green');
            calculateMessage.textContent = `Your BMI is ${bmi} and you are healthy 🥳`;
        }else{
            // Add color and display message
            calculateMessage.classList.add('color-red');
            calculateMessage.textContent = `Your BMI is ${bmi} and you are overweight 😭`;
        }
            calculateCm.value = '';
            calculateKg.value = '';
        setInterval(() => {
            calculateMessage.textContent = '';
        }, 4000);
    }

    
}      

calculateForm.addEventListener('submit', calculateBMI);



                                // Footer seciton

const contactForm = document.getElementById('contact-form'),
      contactUser = document.getElementById('contact-user'),                              
      contactMessage = document.getElementById('contact-message');

const sendEmail = (e)=>{
    e.preventDefault();

    // Check if field has the value

    if(contactUser.value === ''){
        // Add or Remove Color
        contactMessage.classList.remove('color-green');
        contactMessage.classList.add('color-red');

        // Show Message
        contactMessage.textContent = 'You must enter your email 👆';

        setTimeout(() => {
            contactMessage.textContent = '';
        }, 3000);
    }else{
        // Service ID - Template ID = #Form - publicKey
        emailjs.sendForm('raa@1811', 'raa@1811_template', '#contact-form', 'Q0thRybKhI0qHSDRA')
        .then(()=>{
            // Show message and add contact 
            contactMessage.classList.add('color-green');
            contactMessage.textContent = `You have subscribed successfully`;


            // Remove message after few seconds
            setInterval(() => {
                contactMessage.textContent = '';
            }, 4000);
        },(error)=>{
            // Mail Sending Error
            alert('OOPS! Some error occurred... try again', error);
        })

        // Clear the contact Field
        contactUser.value = '';
    }
}

contactForm.addEventListener('submit', sendEmail);

                    // Disable Right click to the whole body

document.addEventListener('contextmenu', (e)=>{
    alert('Right click, cut, copy and paste is not allowed');
    
    e.preventDefault();
})


                    // Disale Ctr, shift, keypress etc 

document.addEventListener('keydown', (event)=>{
    if(event.keyCode === 123){
        return false
    }

    if(event.ctrlKey && event.shiftKey && event.keyCode === 'I'.charCodeAt(0)){
        // alert('Control and Shift key is not allowed');
        event.preventDefault()
        return false
    }

    if(event.ctrlKey && event.shiftKey && event.keyCode === 'J'.charCodeAt(0)){
        // alert('Control and Shift key is not allowed');
        event.preventDefault()
        return false
    }

    if(event.ctrlKey && event.keyCode === 'J'.charCodeAt(0)){
        // alert('Control and Shift key is not allowed');
        event.preventDefault()
        return false
    }

    
})    
     
