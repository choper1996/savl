document.addEventListener("DOMContentLoaded", function() {
	// LINKS
	let appStoreLinks = document.querySelectorAll('.app-store-button');

	appStoreLinks.forEach((item)=> {
		item.addEventListener('click', () => {
			document.location.href = "https://apps.apple.com/us/app/savl/id1369912925?l=ru&ls=1"
		})
	});

    // HEADER
    let burger = document.querySelector('.header__burger'),
        header = document.querySelector('.header');

    burger.addEventListener('click', ()=> {
        header.classList.toggle('active');
    });

    // main
    let mainSlider = document.querySelector('.main__slider');

    $(mainSlider).slick({
        infinite:      true,
        dots:          false,
        pauseOnHover:  false,
        draggable:     true,
        autoplaySpeed: 3000,
        speed:          1000,
        autoplay:       true,
        arrows:        false,
        slidesToShow:      1,
        slidesToScroll:    1,
        vertical:       true
    });

    let mainLiseItems = document.querySelectorAll('.main-list__items');

    $(mainLiseItems).click(function() {
        $(mainSlider).slick('slickGoTo', +$(this).attr('id'));
    });

    $(mainSlider).on('beforeChange', function(event, slick, currentSlide, nextSlide){
        mainLiseItems.forEach((item)=> {
            item.classList.remove('active')
        });

        mainLiseItems[nextSlide].classList.add('active');
    });

    // abilities

    let registrationSlider = document.querySelector('.registration__slider');

    $(registrationSlider).slick({
        infinite:      true,
        dots:          false,
        pauseOnHover:  false,
        draggable:     true,
        autoplaySpeed: 3000,
        speed:          1000,
        autoplay:       true,
        arrows:        false,
        slidesToShow:      1,
        slidesToScroll:    1,
        vertical:       true
    });

    let registrationListItem = document.querySelectorAll('.registration-steps-list__item');

    registrationListItem.forEach((item)=> {
        item.addEventListener('mouseover', ()=> {
            $(registrationSlider).slick('slickGoTo', +item.getAttribute('id'));
        });
    });

    $(registrationSlider).on('beforeChange', function(event, slick, currentSlide, nextSlide){
        registrationListItem.forEach((item)=> {
            item.classList.remove('active')
        });

        registrationListItem[nextSlide].classList.add('active');
    });

    // navigation
    // STICK NAVIGATION AND HOVER LINKS
     let navLinks = document.querySelectorAll('.nav-list-item');

    window.addEventListener('scroll', ()=> {

        let mainY       = document.querySelector('#main').getBoundingClientRect().bottom,
            abilities  = document.querySelector('#abilities').getBoundingClientRect().top,
            abilitiesBot  = document.querySelector('#abilities').getBoundingClientRect().bottom,
            registration = document.querySelector('#registration').getBoundingClientRect().top,
            footer = document.querySelector('#footer').getBoundingClientRect().top;


        if (mainY > 0) {
            navLinks.forEach((item)=>{
                item.classList.remove('active');
            });

            navLinks[0].classList.add('active');
        }

        if (abilities < 100 && abilities > -100) {
            navLinks.forEach((item)=>{
                item.classList.remove('active');
            });

            navLinks[1].classList.add('active');
        }

        if (registration < 100 && registration > -100) {
            navLinks.forEach((item)=>{
                item.classList.remove('active');
            });

            navLinks[2].classList.add('active');
        }

        if (abilitiesBot < 400) {
            navLinks.forEach((item)=>{
                item.classList.remove('active');
            });

            navLinks[2].classList.add('active');
        }
    });

    navLinks.forEach((item)=>{
        item.addEventListener('click', ()=> {
           header.classList.remove('active');
        });
    });

    // ANCHOR LINKS
    let anchorToMain    = document.querySelector('.header__anchor-to-main'),
        main            = document.querySelector('.main'),
        abilities       = document.querySelector('.abilities'),
        downButton      = document.querySelector('.main__down-button'),
        downButtonMobile = document.querySelector('.main__down-button-mobile'),
        navigationLinks = document.querySelectorAll('.nav-list-item a');

    downButton.addEventListener('click', (e)=>{
        e.preventDefault();

        abilities.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });

    downButtonMobile.addEventListener('click', (e)=>{
        e.preventDefault();

        abilities.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });

    anchorToMain.addEventListener('click', (e)=>{
        e.preventDefault();

        main.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });


    navigationLinks.forEach((item)=>{
        item.addEventListener('click', (e)=>{
            e.preventDefault();

            let selectedLink = e.target,
                href = selectedLink.getAttribute('href'),
                el   = document.querySelector(`${href}`);

            el.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            item.classList.add('active');
        })
    });


    // VIDEO
    let videoPreview = document.querySelectorAll('.video > *'),
        videoWrapper = document.querySelector('.video');

    let iframe = document.createElement('iframe');

    iframe.setAttribute('src', 'https://www.youtube.com/embed/DuLIfzWo4sQ?autoplay=1');
    iframe.setAttribute('frameborder' , '0');
    iframe.setAttribute('allow' , '"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture');
    iframe.setAttribute('allowfullscreen', '');
    iframe.classList.add('video-active');

    videoWrapper.addEventListener('click', ()=> {
        // videoWrapper.style.backgroundColor = '#000';

       videoPreview.forEach((item)=> {
           item.remove();
       });

        videoWrapper.appendChild(iframe);
    });
});


