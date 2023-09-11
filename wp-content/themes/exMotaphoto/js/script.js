// (function($) {
//     'use strict';
// ============== Fermeture de pop-up ================= //
document.addEventListener('DOMContentLoaded', () => {
    const closeButton = document.getElementById('close');
    // HTMLButtonElement object
    // console.log(closeButton); 

    //  Works as expected
    closeButton.addEventListener('click', function () {
        const popupOverlay = document.querySelector('.popup');
        // console.log(popupOverlay);
        popupOverlay.classList.remove('active');
    })
})

// ==================== Pop-up Contact button with ref ==================== //

document.addEventListener('DOMContentLoaded', () => {
    const contactBtn = document.querySelector('.contact');
    if (document.getElementById('contact-filled')) {
        const filledBtn = document.getElementById('contact-filled');
        
       

        filledBtn.addEventListener('click', function () {
            const popupOverlay = document.querySelector('.popup');
            popupOverlay.classList.add('active');
            // ici le code pour afficher la ref
            // afficher la ref d'image : single.php -> class ref && contenu && ce centenu passe (injecter) en value dans le formulaire champs ref
            const reference = document.querySelector('.ref-val').innerText;
             console.log(reference);
            let ref = document.querySelector('#refference');
            ref.setAttribute("placeholder", reference);
           // document.querySelector('input[name="reference"]').value = reference;
        })
    }
    contactBtn.addEventListener('click', function (e) {
        // console.log('you are clicking on contact');
        e.preventDefault();
        const popupOverlay = document.querySelector('.popup');
        popupOverlay.classList.add('active');
        

        // console.log('you have activated popup'); 
        //console.log(contactBtn);
    })
});

/********************************closeBurgerMenu*************************************** */
function linkClicked(){
  const links = document.querySelectorAll("a");
  
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', () => {
      // console.log('clicked');
      closeBurgerMenu();
    });
  }
}
linkClicked();

function closeBurgerMenu(){
  const burgerMenuIcon = document.querySelector('.burger-menu-open');
  const closeIcon = document.querySelector(".burger-menu-close");
  const menu = document.querySelector('.burger-menu-opened');

  burgerMenuIcon.classList.add("active");
  closeIcon.classList.remove("active");
  menu.classList.remove('active');
}

// ============================== Lightbox =================================== //

function openLightbox(){
    
    document.querySelectorAll('.fullscreen').forEach(open => {
         open.addEventListener('click', function (e) {
            const lightboxSpace = document.querySelector('.lightbox');
            let overlayImg  = e.target.parentNode.getAttribute('rel');
           // let lightboxImgSrc = this.getAttribute('rel');
            let lightboxImage = document.querySelector('.image-lightbox');
              lightboxImage.src = overlayImg;            
              lightboxSpace.classList.add('active');
            })
    });
    const closeLightbox = document.getElementById('close-lightbox');
    closeLightbox.addEventListener('click', ()=>{
        const lightboxSpace = document.querySelector('.lightbox');
        lightboxSpace.classList.remove('active');
        
    })
}

//====================================== Burger menu =========================//
      const burgerMenuIcon = document.querySelector('.burger-menu-open');
      const closeIcon = document.querySelector('.burger-menu-close'); 
      const menu = document.querySelector('.burger-menu-opened');
    function openBurgerMenu() {
    const openMenuIcons = document.querySelector('.burger-menu-icons');
    openMenuIcons.addEventListener('click', () => {
       if (burgerMenuIcon.classList.contains('active')) {
        burgerMenuIcon.classList.remove('active');
        closeIcon.classList.add('active');
        menu.classList.add('active');
      } else {
        burgerMenuIcon.classList.add('active');
        closeIcon.classList.remove('active');
        menu.classList.remove('active');
        linkClicked();
      }
      closeIcon.addEventListener('click', ()=>{
        closeBurgerMenu();
      })

    });
  }
  openBurgerMenu();
  function closeBurgerMenu(e){
    burgerMenuIcon.classList.add('active');
    closeIcon.classList.remove('active');
    menu.classList.remove('active');
  }

   let slideIndex = 0;
   showSlides();
   
   function showSlides() {
    if(window.location == "http://newmotaphoto.local/"){ 
     let slides = document.querySelectorAll('.mySlides');
     
     for (let i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
     }
     
     slideIndex++;
     
     if (slideIndex > slides.length) {
       slideIndex = 1;
     }
     
     slides[slideIndex - 1].style.display = "block";
     setTimeout(showSlides, 6000); // Change image every 2 seconds
   }
  }
   
   
   
   
    
   