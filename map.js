const lat = -23.152896;
const lng = -47.006805;

var map = L.map('map', {
    minZoom: 14,
    maxZoom: 17,
    dragging: false,
}).setView([lat, lng], 15);
var marker = L.marker([lat, lng]).addTo(map);

marker.bindPopup(`<b>Studio Eduarda Almeida</b></br><a href="https://www.google.com/maps?q=${lat},${lng}" target="_blank" style="display:flex;">Abrir no Google Maps <img src="assets/icons/Arrow up-right.svg" style="width: 1rem; height: auto; filter: invert(1) brightness(2) saturate(0);"/></a>`).openPopup();

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);