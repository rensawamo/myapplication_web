$('.slider').slick({
	autoplay: true, //自動的に動き出すか。初期値はfalse。
	infinite: true, //スライドをループさせるかどうか。初期値はtrue。
	speed: 500, //スライドのスピード。初期値は300。
	slidesToShow: 3, //スライドを画面に3枚見せる
	slidesToScroll: 1, //1回のスクロールで1枚の写真を移動して見せる
	arrows: true,
	prevArrow: '<div class="slick-prev"></div>', //矢印部分PreviewのHTMLを変更
	nextArrow: '<div class="slick-next"></div>', //矢印部分NextのHTMLを変更
	centerMode: true, //要素を中央ぞろえにする
	variableWidth: true, //幅の違う画像の高さを揃えて表示
	dots: true, //下部ドットナビゲーションの表示
});

//// 以下　移行前のコード

(function ($) {
	$(window).load(function () {
		$('#btn-menu').click(function () {
			if ($('#gnav-sp').css('right') == '-194px') {
				$('#gnav-sp').animate({
					right: '0'
				});
			} else {
				$('#gnav-sp').animate({
					right: '-194px'
				});
			}
		});
		$('#btn-close').click(function () {
			$('#gnav-sp').animate({
				right: '-194px'
			});
		});
		$('a[href*=#]').click(function () {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length && target;
				if (target.length) {
					var sclpos = 30;
					var scldurat = 1200;
					var targetOffset = target.offset().top - sclpos;
					$('html,body').animate({ scrollTop: targetOffset }, { duration: scldurat, easing: "easeOutExpo" });
					return false;
				}
			}
		});
		$("#slides").slidesjs({
			width: 256,
			height: 466,
			navigation: {
				active: false,
				effect: 'slide'
			},
			pagenation: {
				active: false,
				effect: 'slide'
			},
			play: {
				active: false,
				effect: "slide",
				interval: 5000,
				auto: true,
				swap: true,
				pauseOnHover: false,
				restartDelay: 2500,
			}
		});
		$("#slides2").slidesjs({
			width: 256,
			height: 550,
			navigation: {
				active: false,
				effect: 'slide'
			},
			pagenation: {
				active: false,
				effect: 'slide'
			},
			play: {
				active: false, //trueで再生、停止ボタンを表示、falseで非表示
				effect: "slide", //自動再生のときのエフェクトを"slide", "fade"から選択
				interval: 5000, //再生間隔をミリ秒で指定
				auto: true, //trueで自動再生を有効に
				swap: true, //falseで再生、停止ボタンを両方常に表示、trueで切り替え
				pauseOnHover: false, //trueでマウスホバー時に一時停止
				restartDelay: 2500 //最初に戻るときに間隔を遅らせる場合、ミリ秒で指定
			}
		});
		$("#slides3").slidesjs({
			width: 256,
			height: 550,
			navigation: {
				active: false,
				effect: 'slide'
			},
			pagenation: {
				active: false,
				effect: 'slide'
			},
			play: {
				active: false, //trueで再生、停止ボタンを表示、falseで非表示
				effect: "slide", //自動再生のときのエフェクトを"slide", "fade"から選択
				interval: 5000, //再生間隔をミリ秒で指定
				auto: true, //trueで自動再生を有効に
				swap: true, //falseで再生、停止ボタンを両方常に表示、trueで切り替え
				pauseOnHover: false, //trueでマウスホバー時に一時停止
				restartDelay: 2500 //最初に戻るときに間隔を遅らせる場合、ミリ秒で指定
			}
		});
	});
})(jQuery);
