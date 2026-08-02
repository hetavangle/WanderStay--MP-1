
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
    const mapTitle = mapElement.dataset.mapTitle;
    const mapLocation = mapElement.dataset.mapLocation;
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

        const popupContent = document.createElement("div");
        popupContent.className = "listing-map-popup";

        const popupTitle = document.createElement("h4");
        popupTitle.className = "listing-map-popup-title";
        popupTitle.textContent = mapTitle;

        const popupLocation = document.createElement("p");
        popupLocation.className = "listing-map-popup-location";
        popupLocation.textContent = mapLocation;

        popupContent.append(popupTitle, popupLocation);

        const popup = new maptilersdk.Popup({ offset: 25 })
            .setDOMContent(popupContent);

        const markerElement = document.createElement("button");
        markerElement.type = "button";
        markerElement.className = "listing-home-marker";
        markerElement.setAttribute("aria-label", `View ${mapTitle}`);

        const homeIcon = document.createElement("i");
        homeIcon.className = "fa-solid fa-house";
        homeIcon.setAttribute("aria-hidden", "true");
        markerElement.append(homeIcon);

        new maptilersdk.Marker({
            element: markerElement,
            anchor: "bottom",
        })
            .setLngLat(coordinates)
            .setPopup(popup)
            .addTo(map);
    }
}
