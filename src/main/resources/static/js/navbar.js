export function iniciarNavbar() {

    const navbar = document.querySelector('.navbar');

    if (navbar) {

        window.addEventListener('scroll', () => {

            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }

        });

    }

    const abrirMenu = document.querySelector('.menu-toggle');
    const fecharMenu = document.querySelector('.fechar-menu');
    const menuMobile = document.querySelector('.menu-mobile');

    if (abrirMenu && fecharMenu && menuMobile) {

        abrirMenu.addEventListener('click', () => {

            menuMobile.classList.add('ativo');

        });

        fecharMenu.addEventListener('click', () => {

            menuMobile.classList.remove('ativo');

        });

    }

}