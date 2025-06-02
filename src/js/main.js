import AOS from "aos";
import lozad from "lozad";
import { setBackgroundElement, detectCloseElement, buttonToTop, clickScrollToDiv, appendCaptchaASP } from "./helper";
import { header } from "./header";
import { swiperInit } from "./swiper";
$(document).ready(function () {
	setBackgroundElement();
	header.init();
	swiperInit();
});

/*==================== Aos Init ====================*/
AOS.init({
	offset: 100,
});
/*==================== Lazyload JS ====================*/
const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();

/*==================== Button to Top ====================*/
window.addEventListener('scroll', function() {
    const btn = document.querySelector('.button-to-top');
    if (!btn) return;
    if (window.scrollY > 200) {
        btn.classList.add('active');
    } else {
        btn.classList.remove('active');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('.button-to-top');
    if (btn) {
        btn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
