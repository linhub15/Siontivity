---
layout: default
title: Gallery
---
<!--Gallery CSS --> 
<link rel="stylesheet" href="css/gallery.css">

<div class="picture">
	<figure>
		<a href="images/lrg-res/Thesis_002.jpg" data-size="3040x4399">
			<img src="images/lrg-res/Thesis_002.jpg" alt="Thesis_002" width="300" height="200">
		</a>
	</figure>
	<figure>
		<a href="images/lrg-res/Thesis_003.jpg" data-size="3922x6000">
			<img src="images/lrg-res/Thesis_003.jpg" alt="Thesis_003" width="600" height="400">
		</a>
	</figure>
	<figure>
		<a href="images/lrg-res/Thesis_004.jpg" data-size="3820x6000">
			<img src="images/lrg-res/Thesis_004.jpg" alt="Thesis_004" width="600" height="400">
		</a>
	</figure>
</div>


<!-- Root element of PhotoSwipe. Must have class pswp. -->
<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">

	<!-- Background of PhotoSwipe. 
	It's a separate element as animating opacity is faster than rgba(). -->
	<div class="pswp__bg"></div>

	<!-- Slides wrapper with overflow:hidden. -->
	<div class="pswp__scroll-wrap">

	<!-- Container that holds slides. 
	PhotoSwipe keeps only 3 of them in the DOM to save memory.
	Don't modify these 3 pswp__item elements, data is added later on. -->
	<div class="pswp__container">
	<div class="pswp__item"></div>
	<div class="pswp__item"></div>
	<div class="pswp__item"></div>
	</div>

	<!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->
	<div class="pswp__ui pswp__ui--hidden">

	<div class="pswp__top-bar">

	<!--  Controls are self-explanatory. Order can be changed. -->

	<div class="pswp__counter"></div>

	<button class="pswp__button pswp__button--close" title="Close (Esc)"></button>

	<button class="pswp__button pswp__button--share" title="Share"></button>

	<button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>

	<button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>

	<!-- Preloader demo http://codepen.io/dimsemenov/pen/yyBWoR -->
	<!-- element will get class pswp__preloader--active when preloader is running -->
	<div class="pswp__preloader">
	<div class="pswp__preloader__icn">
	<div class="pswp__preloader__cut">
	<div class="pswp__preloader__donut"></div>
	</div>
	</div>
	</div>
	</div>

	<div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
	<div class="pswp__share-tooltip"></div> 
	</div>

	<button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
	</button>

	<button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
	</button>

	<div class="pswp__caption">
	<div class="pswp__caption__center"></div>
	</div>

	</div>

	</div>

</div>

<script>
	(function($) {
		var $pswp = $('.pswp')[0];
		var image = [];

		$('.picture').each( function() {
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
					}

					items.push(item);
				});
				return items;
			}

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
				}

				var lightBox = new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options);
				lightBox.init();
			});
		});
	})(jQuery);
</script>