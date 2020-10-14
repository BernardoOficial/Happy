// Criar mapa
const map = L.map('mapid').setView([-23.5293878, -46.5445301], 16);

// 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Criar o icone de marca o mapa
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

// Criar o pop-up
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das meninas <a href="orfanatos.html?id=1" class="choose-orfanato> <img src="./public/images/arrow-white.svg"> </a>')

// Adicionar o icone
L
    .marker([-23.5293878, -46.5445301], { icon: icon })
    .addTo(map)
    .bindPopup(popup)