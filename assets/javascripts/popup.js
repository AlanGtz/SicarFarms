$(document).ready(function() {
  playVideo();
  gallery();
  openSelect();
});

function playVideo() {
  $('.cover-btn').magnificPopup({
    type: 'inline',
    callbacks: {
      open: function() {
        $('.videoplay')[0].play();
      },
      close: function() {
        $('.videoplay')[0].load();
      }
    }
  });
}

function gallery() {
  $('.gallery-gallery').magnificPopup({
    delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		gallery: {
			enabled: true,
			preload: [0,1]
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
		},
    zoom: {
			enabled: true,
			duration: 300,
			opener: function(element) {
				return element;
			}
		}
  });

  $('.facilities-gallery').magnificPopup({
    delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		gallery: {
			enabled: true,
			preload: [0,1]
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
		},
    zoom: {
			enabled: true,
			duration: 300,
			opener: function(element) {
				return element;
			}
		}
  });
}

function openSelect() {
  $('.open-select').magnificPopup({
    showCloseBtn: false,
    prependTo: '.contact-form'
  });
}
