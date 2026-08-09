(() => {
  "use strict";

  const forms = document.querySelectorAll(".needs-validation");

  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add("was-validated");
    });
  });
})();

const currentPath = window.location.pathname;
const navLinks = document.querySelectorAll("[data-nav-path]");

navLinks.forEach((link) => {
  const linkPath = link.dataset.navPath;
  const isExploreRoute =
    linkPath === "/listings" &&
    currentPath.startsWith("/listings") &&
    currentPath !== "/listings/new";

  if (currentPath === linkPath || isExploreRoute) {
    link.setAttribute("aria-current", "page");
  }
});

const taxSwitch = document.getElementById("tax-switch");

if (taxSwitch) {
  taxSwitch.addEventListener("change", () => {
    document.querySelectorAll(".tax-info").forEach((taxInfo) => {
      taxInfo.classList.toggle("is-visible", taxSwitch.checked);
    });
  });
}

document.querySelectorAll("form[data-confirm]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    if (!window.confirm(form.dataset.confirm)) {
      event.preventDefault();
    }
  });
});

const mapElement = document.getElementById("map");

if (mapElement) {
  const mapToken = mapElement.dataset.mapToken;
  const mapTitle = mapElement.dataset.mapTitle;
  const mapLocation = mapElement.dataset.mapLocation;
  const coordinates = mapElement.dataset.mapCoordinates.split(",").map(Number);

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

    const popup = new maptilersdk.Popup({ offset: 25 }).setDOMContent(popupContent);

    const markerElement = document.createElement("button");
    markerElement.type = "button";
    markerElement.className = "listing-home-marker";
    markerElement.setAttribute("aria-label", `View ${mapTitle}`);

    const homeIcon = document.createElement("i");
    homeIcon.className = "ph ph-house";
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
