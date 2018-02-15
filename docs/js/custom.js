/* open and closes side nav bar */
$(".menu-toggle").click(function(e) {
	e.preventDefault();
	$("#sidebar-wrapper").toggleClass("active");
	$(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
	$(this).toggleClass("active");
	$("footer").toggleClass("hide");
});


/* Photoswipe Gallery Click JS */

(function($) {
    var $pswp = $('.pswp')[0];
    var image = [];

    $('.photos').each( function() {
      var $pic     = $(this),
      getItems = function() {
        var items = [];
        $pic.find('a').each(function() {
          var $href   = $(this).attr('href'),
          $size   = $(this).data('size').split('x'),
          $width  = $size[0],
          $height = $size[1];

          var item = {
            src : $href,
            w   : $width,
            h   : $height
          };

          items.push(item);
        });
        return items;
      };

      var items = getItems();

      console.log(items);

      $.each(items, function(index, value) {
        image[index]     = new Image();
        image[index].src = value['src'];
      });

      $pic.on('click', 'figure', function(event) {
        event.preventDefault();

        var $index = $(this).index();
        var options = {
          index: $index,
          bgOpacity: 0.7,
          showHideOpacity: true
        };

        var lightBox = new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options);
        lightBox.init();
      });
    });
  })(jQuery);