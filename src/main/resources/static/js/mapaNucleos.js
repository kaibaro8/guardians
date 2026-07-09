// Mapa de núcleos data-driven (Leaflet), usado na "Proposta do Projeto" e em "Núcleos pelo Brasil".
// Cada marcador abre um popup com resumo do núcleo e link para a página de núcleos.

export function iniciarMapaNucleos(containerId, projetos) {

    const container = document.getElementById(containerId);

    if (!container || typeof L === "undefined") return;

    const mapa = L.map(containerId).setView([-14.2350, -51.9253], 4);

    L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        { attribution: "&copy; OpenStreetMap contributors" }
    ).addTo(mapa);

    projetos.forEach(projeto => {

        const marcador = L.marker([projeto.lat, projeto.lng]).addTo(mapa);

        marcador.bindPopup(`
            <div class="popup-nucleo">
                <strong>${projeto.nome}</strong><br>
                <span>${projeto.local}</span><br>
                <small>${projeto.resumo}</small><br>
                <a href="/nucleosPeloBrasil" class="popup-nucleo-link">
                    Ver todos os núcleos <i class="fa-solid fa-arrow-right"></i>
                </a>
            </div>
        `);
    });

    // Corrige eventuais problemas de renderização quando o mapa
    // está dentro de um container que ainda não tinha tamanho definido.
    setTimeout(() => mapa.invalidateSize(), 200);

    return mapa;
}