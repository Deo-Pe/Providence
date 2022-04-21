AOS.init({
	delay: 300,
	duration: 1000,
	disable: 'mobile',
});

const swiper = new Swiper('.swiper-container', {
	slidesPerView: 3,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	loop: true,
	centeredSlides: true,
	initialSlide: 1,
	autoplay: {
		delay: 4000,
		disableOnInteraction: false
	},
	speed: 1000,
	freeModeSticky: true,
});
const btnVideo = document.querySelector('.header_video')
const navPanel = document.querySelector('.wrapp__navigation');
let checked = document.querySelector('.checkbox');
let cardBlock = document.querySelector('.chose_cardBlock');
const header = document.querySelector('#header');
const navigatorIcon = document.querySelector('.navigator__icon');

btnVideo.addEventListener("click", () => {
	const blockVideo = document.createElement("div")
	const content = `
		<video autoplay class = "video" poster ="images/header_iphone.png" controls="controls">
			<source  src="2014-02-16%2015-21-22.webm"  type='video/webm'>
		</video >
	`
	navPanel.style.display = "none"
	blockVideo.classList.add('blockVideo')
	document.body.classList.add('stop-scrolling')
	document.body.prepend(blockVideo);
	blockVideo.insertAdjacentHTML("afterbegin", content);
	blockVideo.addEventListener('click', (e) => {
		if (e.target === blockVideo) {
			document.body.removeChild(blockVideo);
			document.body.classList.remove('stop-scrolling');
			navPanel.style.display = "flex"

		}
	});
})

checked.addEventListener('click', function (e) {
	e.stopPropagation()
	if (checked.checked) {
		cardBlock.firstElementChild.style.display = "none";
	} else {
		cardBlock.firstElementChild.style.display = "block";
	}
})

window.addEventListener('scroll', () => {
	// let sticky = navPanel.offsetTop;
	if (window.pageYOffset > 0) {
		navPanel.classList.add("nav__height");
	} else {
		navPanel.classList.remove("nav__height");
	}
})

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	document.querySelector('.iphon_screens_img').remove()
	document.querySelector('.iphon_heading').remove()
	document.querySelector('.wrapp__navigation').remove()
	document.querySelector('.heading__img').remove()
	document.querySelector('.navigator__icon').style.display = 'block';
	document.querySelector('.slider').style.display = 'none';

} else {

}
const menuLinks = document.querySelectorAll('.menu__link[data-goto]')
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", linkClick)
	})
	function linkClick(e) {
		const menuLink = e.target
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto)
			if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
				let gotoValueBlock = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.navMobile').offsetHeight;
				window.scrollTo({
					top: gotoValueBlock,
					behavior: "smooth"
				})
				document.querySelector('.navMobile').classList.toggle('activeNavMobile');
				document.body.classList.toggle('togleBody');
				navigatorIcon.classList.toggle('_active')
			}
			else {
				let gotoValueBlock = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.wrapp__navigation').offsetHeight;
				window.scrollTo({
					top: gotoValueBlock,
					behavior: "smooth"
				})
			}
			e.preventDefault();
		}
	}
}

navigatorIcon.addEventListener('click', () => {
	navigatorIcon.classList.toggle('_active')
	document.body.classList.toggle('togleBody');
	document.querySelector('.navMobile').classList.toggle('activeNavMobile');
})

