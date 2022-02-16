/*!
* Copyright 2022-Present Bootstrap
* Licensed under Ryan Smith - EsCPerience Digital LLC.
*/

/* common fuctions */
// function el(selector) { return document.querySelector(selector) }
// function els(selector) { return document.querySelectorAll(selector) }
// function on(selector, event, action) { els(selector).forEach(e => e.addEventListener(event, action)) }
// function cookie(name) {
//   let c = document.cookie.split('; ').find(cookie => cookie && cookie.startsWith(name+'='))
//   return c ? c.split('=')[1] : false;
// }


// /* popup button hanler */
// on('.cookie-popup button', 'click', () => {
//   el('.cookie-popup').classList.add('cookie-popup--accepted');
//   document.cookie = `cookie-accepted=true`
// });

// /* popup init hanler */
// if (cookie('cookie-accepted') !== "true") {
//   el('.cookie-popup').classList.add('cookie-popup--not-accepted');
// }



// /* page buttons handlers */

// function _reset() {
//   document.cookie = 'cookie-accepted=false';
//   document.location.reload();
// }

// function _switchMode(cssClass) {
//   el('.cookie-popup').classList.toggle(cssClass);
// }

function play_pause(vid)
  {
    var video_screen = document.getElementById(vid);

    video_screen.pause();
    play_pause_status = "pause";

}

$( document ).ready(function() {
    // console.log( "ready!" );

// Stopping videos On Modal Closing Scripts:
//Modals 1-4, then 6 and 7, which was a bit different:
    $('#portfolioModal1').on('hidden.bs.modal', function () {
    play_pause("Modal1Vid");
  })
  $('#portfolioModal2').on('hidden.bs.modal', function () {
    play_pause("Modal2Vid");
  })
  $('#portfolioModal3').on('hidden.bs.modal', function () {
    play_pause("Modal3Vid");
  })

    $('#portfolioModal6').on('hidden.bs.modal', function () {
    play_pause("Modal6Vid");
  })

  $('#portfolioModal7').on('hidden.bs.modal', function () {
    play_pause("Modal7Vid1");
    play_pause("Modal7Vid2");
    play_pause("Modal7Vid3");
    play_pause("Modal7Vid4");
  })
});


window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
