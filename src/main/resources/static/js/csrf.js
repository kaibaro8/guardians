/**
 * Helper global de CSRF.
 * Lê o token do cookie XSRF-TOKEN (setado automaticamente pelo Spring
 * Security via CookieCsrfTokenRepository) e disponibiliza pra qualquer
 * fetch/AJAX da aplicação, sem depender de meta tags por página.
 */
function getCsrfToken() {
    const match = document.cookie.match(/(?:^|;\s*)XSRF-TOKEN=([^;]*)/);
    return match ? decodeURIComponent(match[1]) : null;
}

function getCsrfHeader() {
    const token = getCsrfToken();
    return token ? { 'X-XSRF-TOKEN': token } : {};
}