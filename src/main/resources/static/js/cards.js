export function iniciarCards() {

    const cards = document.querySelectorAll('.card-wrap');

    if (!cards.length) return;

    cards.forEach(cardWrap => {

        const card = cardWrap.querySelector('.card');
        const bg = cardWrap.querySelector('.card-bg');

        cardWrap.addEventListener('mousemove', e => {

            const rect = cardWrap.getBoundingClientRect();

            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            const rotateY = x / 25;
            const rotateX = -y / 25;

            card.style.transform =
                `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;

            bg.style.transform =
                `translateX(${-x / 25}px) translateY(${-y / 25}px)`;

        });

        cardWrap.addEventListener('mouseleave', () => {

            card.style.transform =
                'rotateY(0deg) rotateX(0deg)';

            bg.style.transform =
                'translateX(0) translateY(0)';

        });

    });

}