export function iniciarSlider() {

    const bgSlides = document.querySelectorAll('.bg-slide');

    if (!bgSlides.length) return;

    let index = 0;

    setInterval(() => {

        bgSlides[index].classList.remove('active');

        index = (index + 1) % bgSlides.length;

        bgSlides[index].classList.add('active');

    }, 5000);

}