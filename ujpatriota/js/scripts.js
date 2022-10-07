const _gallery = [
	{
		img: "assets/photo_0.png",
		description: ""
	},
	{
		img: "assets/photo_1.png",
		description: ""
	},
	{
		img: "assets/photo_2.png",
		description: ""
	},
	{
		img: "assets/photo_3.png",
		description: ""
	},
	{
		img: "assets/photo_4.png",
		description: ""
	},
	{
		img: "assets/photo_5.png",
		description: ""
	},
	{
		img: "assets/photo_6.png",
		description: ""
	},
	{
		img: "assets/photo_7.png",
		description: ""
	}
]

const _elements = {
	date: document.querySelector(".date"),

	scrollLinks: document.querySelectorAll(".navbar-list__link, .footer-list__link"),
	navbarList: document.querySelector(".navbar-list"),
	toggle: document.querySelector(".navbar-header__toggle"),

	galleryItems: document.querySelectorAll(".galeria-item"),
	sliderThumbsImage: document.querySelectorAll(".slider-thumbs__img"),
	closeModalBtn: document.querySelector(".modal__close"),
	modal: document.querySelector(".modal"),

	slider: document.querySelector(".slider"),
	sliderImage: document.querySelector(".slider-image__img"),
	sliderImageNumber: document.querySelector(".slider-image__number"),
	sliderImageDescription: document.querySelector(".slider-image-description"),
	sliderPrevButton: document.querySelector(".slider-buttons__btn-prev"),
	sliderNextButton: document.querySelector(".slider-buttons__btn-next"),
}

let _sliderCounter = 0, _touchStart, _touchEnd;

_elements.scrollLinks.forEach(link => {

});

_elements.toggle.addEventListener("click", () => {

});

_elements.galleryItems.forEach(item => {

});

_elements.sliderThumbsImage.forEach(img => {

});

_elements.closeModalBtn.addEventListener("click", () => {

});

_elements.sliderNextButton.addEventListener("click", () => nextImage());

_elements.sliderPrevButton.addEventListener("click", () => prevImage());

const getImageId = (target) => {

}

const updateModal = (imgId) => {

}

const nextImage = () => {

}

const prevImage = () => {

}



_elements.slider.addEventListener("", e => {

});

_elements.slider.addEventListener("", e => {

});
