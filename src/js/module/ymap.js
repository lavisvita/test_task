import ymaps from 'ymaps';

function loadMap() {
    try {
        ymaps.load()
            .then((maps) => {
                const mapContainer = document.getElementById('map');
                new maps.Map(mapContainer, {
                    center: [45.007285, 38.964380],
                    zoom: 10,
                    controls: ['zoomControl'],
                });
            });
    } catch (error) {
        throw new Error(error);
    }
}
loadMap();
