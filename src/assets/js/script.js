/* starts contact map */
// if ($('#map').length > 0) {
//   function initMap(getId) {
//     if (document.getElementById(getId)) {
//       let lat = parseFloat(document.getElementById(getId).getAttribute('lat'))
//       let lng = parseFloat(document.getElementById(getId).getAttribute('lng'))

//       var location = { lat, lng }
//       map = new google.maps.Map(document.getElementById(getId), {
//         zoom: 16,
//         disableDefaultUI: true,
//         center: location,
//         mapTypeId: google.maps.MapTypeId.ROADMAP,
//       })
//       marker = new google.maps.Marker({
//         map: map,
//         position: location,
//         animation: google.maps.Animation.DROP,
//         icon: './assets/css/icons/map-marker.svg',
//       })
//       marker.addListener('click', toggleBounce)
//     }
//   }
//   function toggleBounce() {
//     if (marker.getAnimation() !== null) {
//       marker.setAnimation(null)
//     } else {
//       marker.setAnimation(google.maps.Animation.BOUNCE)
//     }
//   }
//   initMap('map')
//   google.maps.event.addDomListener(window, 'load', initMap)
// }
/* ends contact map */

//   new WOW().init()
//   if (window.matchMedia('(max-width: 1024px)').matches) {
//     $('*').removeClass('wow')
//     $('*').removeClass('fadeInUp')
//     $('*').removeClass('fadeInDown')
//     $('*').removeClass('slideInUp')
//     $('*').removeClass('animated')
//   }

//   $('.branch-item').click(function () {
//     $('#map').attr('lat', $(this).attr('lat'))
//     $('#map').attr('lng', $(this).attr('lng'))
//     initMap('map')
//   })
// })
// burdandi
// function initMap() {
//   // Map options
//   var options = {
//     zoom: 8,
//     center: { lat: 40.409264, lng: 49.867092 },
//   }
//   // new map
//   var map = new google.maps.Map(document.getElementById('map'), options)
//   // Marker
//   var marker = new google.maps.Marker({
//     position: { lat: 40.409264, lng: 49.867092 },
//     map: map,
//   })

//   var options = {
//     zoom: 8,
//     center: { lat: 40.409264, lng: 49.867092 },
//   };

;(function () {
  var parent = document.querySelector('#rangeSlider')
  if (!parent) return

  var rangeS = parent.querySelectorAll('input[type=range]'),
    numberS = parent.querySelectorAll('input[type=number]')

  rangeS.forEach(function (el) {
    el.oninput = function () {
      var slide1 = parseFloat(rangeS[0].value),
        slide2 = parseFloat(rangeS[1].value)

      if (slide1 > slide2) {
        ;[slide1, slide2] = [slide2, slide1]
        // var tmp = slide2;
        // slide2 = slide1;
        // slide1 = tmp;
      }

      numberS[0].value = slide1
      numberS[1].value = slide2
    }
  })

  numberS.forEach(function (el) {
    el.oninput = function () {
      var number1 = parseFloat(numberS[0].value),
        number2 = parseFloat(numberS[1].value)

      if (number1 > number2) {
        var tmp = number1
        numberS[0].value = number2
        numberS[1].value = tmp
      }

      rangeS[0].value = number1
      rangeS[1].value = number2
    }
  })
})()

// Check one value

$('input:checkbox').on('click', function () {
  // in the handler, 'this' refers to the box clicked on
  var $box = $(this)
  if ($box.is(':checked')) {
    var group = "input:checkbox[name='" + $box.attr('name') + "']"
    $(group).prop('checked', false)
    $box.prop('checked', true)
  } else {
    $box.prop('checked', false)
  }
})

const prevIcon = '<img src="assets/img/left-thin-arrow.svg"/>'
const nextIcon = '<img src="assets/img/right-thin-arrow.svg"/>'
$('.country-tour').owlCarousel({
  loop: true,
  dots: false,
  margin: 10,
  nav: false,
  items: 1,
  navText: [prevIcon, nextIcon],
  autoplay: 1000,
})

const prevarrow = '<img src="assets/img/left-arrow.svg"/>'
const nextarrow = '<img src="assets/img/right-arrow.svg"/>'

$('.select-one').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  autoplay: 1000,
  navText: [prevarrow, nextarrow],
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 2,
    },
    768: {
      items: 3,
    },
    1000: {
      items: 4.5,
    },
  },
})

$('.trending-wrap').owlCarousel({
  loop: true,
  margin: 16,
  nav: false,
  autoplay: 2000,
  navText: [prevarrow, nextarrow],
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    992: {
      items: 3,
    },
    1000: {
      items: 3.3,
    },
  },
})

$('.top-destinations').owlCarousel({
  loop: true,
  dots: false,
  margin: 0,
  nav: false,
  autoplay: 2000,
  navText: [prevarrow, nextarrow],
  responsive: {
    0: {
      items: 1,
    },
  },
})
$('.tour-guides-wrap').owlCarousel({
  loop: true,
  dots: false,
  margin: 0,
  nav: false,
  autoplay: 2000,
  navText: [prevarrow, nextarrow],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1.25,
    },
  },
})
$('.recently-viewed').owlCarousel({
  loop: true,
  margin: 16,
  nav: false,
  toplay: 2000,
  navText: [prevarrow, nextarrow],
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
})

$('.gallery-slider')
  .on('initialized.owl.carousel changed.owl.carousel', function (e) {
    if (!e.namespace) {
      return
    }
    var carousel = e.relatedTarget
    $('.slider-counter').text(
      carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length
    )
  })
  .owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    autoplay: 2000,
    nav: true,
    navText: [prevarrow, nextarrow],
  })

$('#datepicker').datepicker()
$('#datepicker').on('changeDate', function () {
  $('#my_hidden_input').val($('#datepicker').datepicker('getFormattedDate'))
})
$('.datepicker').datepicker({
  format: 'mm/dd/yyyy',
  startDate: '-3d',
})

const navMenu = document.querySelector('#navMenu')
navMenu.addEventListener('click', () => {
  navMenu.classList.toggle('active')
})
// Side Menu
var hamburger = document.querySelector('.hamburger-menu')
var sidebar = document.querySelector('.sidebar-nav')
var close = document.querySelector('.close-btn')
hamburger.addEventListener('click', function () {
  sidebar.classList.toggle('show-menu')
})
close.addEventListener('click', function () {
  sidebar.classList.remove('show-menu')
  hamburger.classList.remove('active')
})

function initMap() {
  // Map options
  var options = {
    zoom: 8,
    center: { lat: 40.409264, lng: 49.867092 },
  }
  // new map
  var map = new google.maps.Map(document.getElementById('map'), options)
  // Marker
  var marker = new google.maps.Marker({
    position: { lat: 40.409264, lng: 49.867092 },
    map: map,
  })
}
// slide range
var x = 1
document.getElementById('output-area').innerHTML = x
function button1() {
  document.getElementById('output-area').innerHTML = ++x
}
function button2() {
  if (x <= 0) {
    alert(' minimum value 0 ')
    return false
  }
  document.getElementById('output-area').innerHTML = --x
}
