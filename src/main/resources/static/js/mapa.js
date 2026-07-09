	export function iniciarMapa() {
	
	    const containerMapa = document.getElementById("mapa");
	
	    if (!containerMapa) return;
	
	    const mapa = L.map("mapa").setView([-14.2350, -51.9253], 4);
	
	    L.tileLayer(
	        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
	        {
	            attribution:
	                '&copy; OpenStreetMap contributors'
	        }
	    ).addTo(mapa);
	
	    L.marker([-18.9128, -48.2755])
	        .addTo(mapa)
	        .bindPopup('<div class="popup-nucleo"><strong>UFU</strong><br><span>Universidade Federal de Uberlândia</span><br><a href="https://www.ufu.br" target="_blank" rel="noopener" class="popup-nucleo-link">Visitar site <i class="fa-solid fa-arrow-right"></i></a></div>');
	
	    // UFTM
	    L.marker([-19.7496, -47.9317])
	        .addTo(mapa)
	        .bindPopup('<div class="popup-nucleo"><strong>UFTM</strong><br><span>Universidade Federal do Triângulo Mineiro</span><br><a href="https://www.uftm.edu.br" target="_blank" rel="noopener" class="popup-nucleo-link">Visitar site <i class="fa-solid fa-arrow-right"></i></a></div>');
	
	    // IFCE
	    L.marker([-3.7439, -38.5358])
	        .addTo(mapa)
	        .bindPopup('<div class="popup-nucleo"><strong>IFCE</strong><br><span>Instituto Federal do Ceará</span><br><a href="https://www.ifce.edu.br" target="_blank" rel="noopener" class="popup-nucleo-link">Visitar site <i class="fa-solid fa-arrow-right"></i></a></div>');
	
	    // UFPE
	    L.marker([-8.0552, -34.9515])
	        .addTo(mapa)
	        .bindPopup('<div class="popup-nucleo"><strong>UFPE</strong><br><span>Universidade Federal de Pernambuco</span><br><a href="https://www.ufpe.br" target="_blank" rel="noopener" class="popup-nucleo-link">Visitar site <i class="fa-solid fa-arrow-right"></i></a></div>');
	
	    // UFS
	    L.marker([-10.9269, -37.1009])
	        .addTo(mapa)
	        .bindPopup('<div class="popup-nucleo"><strong>UFS</strong><br><span>Universidade Federal de Sergipe</span><br><a href="https://www.ufs.br" target="_blank" rel="noopener" class="popup-nucleo-link">Visitar site <i class="fa-solid fa-arrow-right"></i></a></div>');
	
	    // UFMT
	    L.marker([-15.6083, -56.0697])
	        .addTo(mapa)
	        .bindPopup('<div class="popup-nucleo"><strong>UFMT</strong><br><span>Universidade Federal de Mato Grosso</span><br><a href="https://www.ufmt.br" target="_blank" rel="noopener" class="popup-nucleo-link">Visitar site <i class="fa-solid fa-arrow-right"></i></a></div>');
	
	    // FURG
	    L.marker([-32.0738, -52.1648])
	        .addTo(mapa)
	        .bindPopup('<div class="popup-nucleo"><strong>FURG</strong><br><span>Universidade Federal do Rio Grande</span><br><a href="https://www.furg.br" target="_blank" rel="noopener" class="popup-nucleo-link">Visitar site <i class="fa-solid fa-arrow-right"></i></a></div>');
	}