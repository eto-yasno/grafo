$(function(){

	/* Кнопка с выпадающим меню */	
	var menuBtn = $('.dropdown-menu__btn');
	menuBtn.on('click', function(){
		menuBtn.toggleClass('active').next('.dropdown-menu__list').stop(true).slideToggle(500);
	});

	/* Слайдер на главной */
	var slider = $('.slider-main');
	if(slider.length > 0)
	{
	  	slider.on('init', function(event, slick){
			slider.find('.slick-dots').prepend('<div class="slider-counter"><span>'+ parseInt(slick.currentSlide + 1, 10) +'</span>/<span>'+ slick.slideCount +'</span></div>');
		});

		slider.slick({
			infinite: true,
			autoplay: true,
			autoplaySpeed: 4000,
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			speed: 500,
			arrows: false
	  	});

	  	slider.on('afterChange', function(event, slick, currentSlide){
			slider.find('.slider-counter span:first-child').html( slick.currentSlide + 1 );
			slider.find('.slider-counter span:last-child').html( slick.slideCount);
		});
	}

	/* Слайдер на странице Все фабрики */
	var slider = $('.slider-factories');
	if(slider.length > 0)
	{
		slider.slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			speed: 500
	  	});
	}

	/* Слайдер на странице Новости и акции */
	var slider = $('.slider-promotions');
	if(slider.length > 0)
	{
		slider.slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			speed: 500
	  	});
	}

	/* Слайдер на странице Обеденные */
	var slider = $('.main-inner-slider');
	if(slider.length > 0)
	{
		slider.slick({
			infinite: true,
			autoplay: true,
			autoplaySpeed: 4000,
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			speed: 500,
			arrows: false
	  	});
	}

	/* Выводим имя загруженого файла в нашем стилизованом input type="file" */
	var uploadInput = $("label.upload input[type=file]");
	var uploadLabel = $("label.upload span");
	uploadInput.change(function(){
         uploadLabel.text( $(this).val().replace(/.*\\/, "") );
	});

	/* маска поля для телефона */
	var tel = $('input[type="tel"]');
	if(tel.length > 0)
	{
		tel.mask("+7(999) 999-99-99");
	}

	/* Карта */
	if(document.getElementById('map'))
	{
	var position = {
		zoom: 17,
		center: {lat: 56.838588, lng: 60.639156},
		mapTypeId: google.maps.MapTypeId.ROADMAP
		};
	var map = new google.maps.Map(document.getElementById('map'), position);
	var marker = new google.maps.Marker({
		position: {lat: 56.839503, lng: 60.639080},
		map: map
	});
	}

	/* Анимирование цифр на странице Преимущества */	

	function animateDigits(selector, time, breakpoint){
		var element = $(selector),
			i = 0,
			interval = setInterval(function(){
							element.text(i++);
							if(i > breakpoint)
							{
								clearInterval(interval);
							}
						}, time);
	}

	animateDigits('.advantages-stats__item:nth-child(3) span', 30, 94);
	animateDigits('.advantages-stats__item:nth-child(4) span', 30, 100);


});