
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})();

const mapElement = document.getElementById("map");

if (mapElement) {
    const mapToken = mapElement.dataset.mapToken;
    const coordinates = mapElement.dataset.mapCoordinates
        .split(",")
        .map(Number);

    const showMapError = () => {
        mapElement.classList.add("listing-map-error");
        mapElement.textContent = "The map for this location is currently unavailable.";
    };

    if (
        !mapToken ||
        !window.maptilersdk ||
        coordinates.length !== 2 ||
        !coordinates.every(Number.isFinite)
    ) {
        showMapError();
    } else {
        maptilersdk.config.apiKey = mapToken;
        const map = new maptilersdk.Map({
            container: mapElement,
            style: maptilersdk.MapStyle.STREETS,
            center: coordinates,
            zoom: 12,
            interactive: false,
        });

        new maptilersdk.Marker({ color: "#ff3d60" })
            .setLngLat(coordinates)
            .addTo(map);
    }
}
