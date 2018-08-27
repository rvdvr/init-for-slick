(function() {
  var imgs = [];

  $('.slider-5-without-all__img').each(function() {
    var $this = $(this);
    var path = $this.attr('src');
    imgs.push(path);
  });

  var percentsTotal = 1;

  for (var i = 0; i < imgs.length; i++) {
    var image = $('<img>', {
      attr: {
        src: imgs[i]
      }
    });
    image.on({
      load: function() {
        setPercents(imgs.length, percentsTotal);
        percentsTotal++;
      },
      error: function() {
        percentsTotal++;
      }
    });
  }

  function setPercents(total, current) {
    var percent = Math.ceil(current / total * 100);

    if (percent >= 100) {
      initSlider();
    }
  }

  function initSlider() {
    $('.slider-5-without-all').slick({
      slidesToShow: 5,
      slidesToScroll: 2,
      autoplay: true,
      arrows: false,
      responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    });
  };
})();
