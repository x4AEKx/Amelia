$(function() {
	$(".main-menu__link").on("click", function(e) {
		e.preventDefault()

		$(".main-menu__item").removeClass("highlight")
		$(".dropdown").removeClass("show")

		$(this).parent().addClass("highlight")
		$($(this).attr("href")).addClass("show")
	})

	$(".link-search").on("click", function(e) {
		e.preventDefault()

		console.log(e.target)

		$(".search__item").removeClass("highlight")
		$(".link-search__list").removeClass("show")

		$(this).parent().addClass("highlight")
		$($(this).attr("href")).addClass("show")
	})
})
