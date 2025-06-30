// src/assets/js/theme.js

export function initThemeScripts() {
  // Initialize AOS (Animate On Scroll)
  AOS.init({
    duration: 800,
    easing: 'slide'
  });

  // jQuery ready
  $(document).ready(function () {
    // Loader
    const loader = () => {
      setTimeout(function () {
        if ($('#ftco-loader').length > 0) {
          $('#ftco-loader').removeClass('show');
        }
      }, 1);
    };
    loader();

    // Owl Carousel
    $('.carousel-testimony').owlCarousel({
      center: true,
      loop: true,
      items: 1,
      margin: 30,
      stagePadding: 0,
      nav: false,
      navText: [
        '<span class="ion-ios-arrow-back"></span>',
        '<span class="ion-ios-arrow-forward"></span>'
      ],
      responsive: {
        0: { items: 1 },
        600: { items: 3 },
        1000: { items: 3 }
      }
    });

    // Full height adjustment
    const fullHeight = () => {
      $('.js-fullheight').css('height', $(window).height());
      $(window).resize(function () {
        $('.js-fullheight').css('height', $(window).height());
      });
    };
    fullHeight();

    // Counter
    const counter = () => {
      $('#section-counter, .ftco-about').waypoint(function (direction) {
        if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
          const comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');
          $('.number').each(function () {
            const $this = $(this);
            const num = $this.data('number');
            $this.animateNumber({
              number: num,
              numberStep: comma_separator_number_step
            }, 7000);
          });
        }
      }, { offset: '95%' });
    };
    counter();

    // Waypoints animation
    const contentWayPoint = () => {
      let i = 0;
      $('.ftco-animate').waypoint(function (direction) {
        if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
          i++;
          $(this.element).addClass('item-animate');
          setTimeout(function () {
            $('body .ftco-animate.item-animate').each(function (k) {
              const el = $(this);
              setTimeout(function () {
                const effect = el.data('animate-effect');
                if (effect === 'fadeIn') {
                  el.addClass('fadeIn ftco-animated');
                } else if (effect === 'fadeInLeft') {
                  el.addClass('fadeInLeft ftco-animated');
                } else if (effect === 'fadeInRight') {
                  el.addClass('fadeInRight ftco-animated');
                } else {
                  el.addClass('fadeInUp ftco-animated');
                }
                el.removeClass('item-animate');
              }, k * 50);
            });
          }, 100);
        }
      }, { offset: '95%' });
    };
    contentWayPoint();

    // Magnific popup for images
    $('.image-popup').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      closeBtnInside: false,
      fixedContentPos: true,
      mainClass: 'mfp-no-margins mfp-with-zoom',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1]
      },
      image: {
        verticalFit: true
      },
      zoom: {
        enabled: true,
        duration: 300
      }
    });

    // Magnific popup for videos/maps
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
    });

    // Scroll Navigation
    const link = $('#navbar a.dot');
    link.on('click', function (e) {
      const target = $($(this).attr('href'));
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 600);
      link.removeClass('active');
      $(this).addClass('active');
      e.preventDefault();
    });

    const scrNav = () => {
      const sTop = $(window).scrollTop();
      $('section').each(function () {
        const id = $(this).attr('id');
        const offset = $(this).offset().top - 1;
        const height = $(this).height();
        if (sTop >= offset && sTop < offset + height) {
          link.removeClass('active');
          $('#navbar').find('[data-scroll="' + id + '"]').addClass('active');
        }
      });
    };
    $(window).on('scroll', scrNav);
    scrNav();

    // Circular progress
    $('.progress').each(function () {
      const value = $(this).attr('data-value');
      const left = $(this).find('.progress-left .progress-bar');
      const right = $(this).find('.progress-right .progress-bar');

      if (value > 0) {
        if (value <= 50) {
          right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)');
        } else {
          right.css('transform', 'rotate(180deg)');
          left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)');
        }
      }
    });

    const percentageToDegrees = (percentage) => {
      return percentage / 100 * 360;
    };
  });
}