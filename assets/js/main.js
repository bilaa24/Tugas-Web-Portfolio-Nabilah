/*=============== SHOW MENU ===============*/
const navMenu   = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose  = document.getElementById('nav-close')

/*===== MENU SHOW =====*?
/* Validasi klu constant nya exists*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/*Validasi klu constant nya exists*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    //pas kita ngeklik link nav lain, kita bakal ngeilangin class atau tampilan show menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    //When the scroll is greater than 50 viewport height, add the blur-header class to the header tag
    this.scrollY >=50  ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form')
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_bs1qkul', 'template_znehm4t', '#contact-form', '2CKviWn4XX3LkT5GG')
        .then(() => {
            //menampilkan pesan yang berhasil terkirim
            contactMessage.textContent = 'Pesan anda telah berhasil terkirim ✅'

            //menghapus pesan notofikasi setelah 5 detik
            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)

            //menghapus semua isi form inputan
            contactForm.reset()
        }, () =>{
            //menampilkan pesan yang gagal terkirim
            contactMessage.textContent = 'Pesan anda gagal terkirim (service error) ❌'
        })
}

contactForm.addEventListener('submit', sendEmail)


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    //klu ngescroll nya tuh lebih tinggi dari pada 350 viewport, maka tambahkan showscroll (yang dinamain pake tag scrollup)
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/  
const sections = document.querySelectorAll('selection[id]')

const scrollActive = () =>{
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop    = current.offsetTop - 58,
              sectionId     = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
