const CHAVE_TEMA = "guardias-tema";

export function iniciarTema() {

    // Reaplica o tema salvo assim que a página carrega — cobre também
    // páginas (como as de admin/operador) que não têm o script
    // anti-flash no <head>.
    const temaSalvo = localStorage.getItem(CHAVE_TEMA);
    if (temaSalvo === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
    }

    document.querySelectorAll(".tema-toggle").forEach(botao => {
        botao.addEventListener("click", () => {

            const ativo = document.documentElement.getAttribute("data-theme") === "dark";
            const novoTema = ativo ? "light" : "dark";

            if (novoTema === "dark") {
                document.documentElement.setAttribute("data-theme", "dark");
            } else {
                document.documentElement.removeAttribute("data-theme");
            }

            localStorage.setItem(CHAVE_TEMA, novoTema);
        });
    });
}