$(document).ready(function() {
  getNews();
});

function getNews() {
  $.ajax({
  	url: "https://public-api.wordpress.com/wp/v2/sites/sicarfarmsblog.wordpress.com/posts?per_page=100&orderby=date",
  	dataType: 'json'
  }).then(function(data) {
  	howMany(data);
  });
}

function howMany(data) {
  var count = data.length;
  var shown;
  var rest = count;
  var need;
  var start = 1;

  if (count <= 6) {
  	need = count;
  	shown = count;

  	$('.news-more').hide();
  } else {
  	need =  6;
  	shown = 6;
  	rest = count - shown;
  }

  $('.news-more').on('click', function() {
  	if (rest >= 9) {
  	  need = 6;
  	  start = start + need;
  	  shown = shown + need;
  	  rest = count - shown;

  	  showPosts(data, start, need);
  	} else {
  	  start = start + need;
  	  need = rest;
  	  shown = shown + need;
  	  rest = count - shown;

  	  showPosts(data, start, need);

  	  if (rest == 0) {
  	  	$('.news-more').fadeOut();
  	  }
  	}
  });

  showPosts(data, start, need);
}

function showPosts(data, start, need) {
  for (var i = start-1; i <= start+(need-2); i++) {
    var background = data[i].featured_media_url;
    var image = '.news-image'+i+'';
    var title = data[i].title.rendered;
    var content = $(data[i].excerpt.rendered).text();
    var date = dateConverter(data[i].date);
    var id = data[i].id;

    var item =
      '<a href="/post?id='+id+'" class="news-item">'+
        '<div class="news-image news-image'+i+'"></div>'+
        '<h3 class="news-title">'+title+'</h3>'+
        '<p class="news-excerpt">'+content+'</p>'+
        '<p class="news-info">'+date+'</p>'+
      '</a>';

    $('.news').append(item);

    $(image).css('background','url("'+background+'") center/cover no-repeat');
  }
}

function dateConverter(date) {
  var rawDate = date.split('T');
  var shortDate = rawDate[0].split('-');
  var month = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
  ];

  var newDate = shortDate[2] + ' de ' + month[parseInt(shortDate[1])-1] + ' de ' + shortDate[0];


  return newDate;
}
