const getMapTilerApiKey = () =>
  process.env.MAPTILER_API_KEY || process.env.MAP_TOKEN;

const isValidPoint = (geometry) =>
  geometry?.type === "Point" &&
  Array.isArray(geometry.coordinates) &&
  geometry.coordinates.length === 2 &&
  geometry.coordinates.every(Number.isFinite);

const geocodeListingLocation = async (location, country) => {
  const apiKey = getMapTilerApiKey();

  if (!apiKey) {
    throw new Error("MapTiler API key is not configured.");
  }

  const address = [location, country].filter(Boolean).join(", ");
  const geocodingUrl = new URL(
    `https://api.maptiler.com/geocoding/${encodeURIComponent(address)}.json`,
  );
  geocodingUrl.searchParams.set("key", apiKey);
  geocodingUrl.searchParams.set("limit", "1");
  geocodingUrl.searchParams.set("autocomplete", "false");

  const response = await fetch(geocodingUrl);

  if (!response.ok) {
    throw new Error(`MapTiler geocoding failed with status ${response.status}.`);
  }

  const data = await response.json();
  const coordinates = data.features?.[0]?.center;
  const geometry = {
    type: "Point",
    coordinates,
  };

  if (!isValidPoint(geometry)) {
    throw new Error(`No coordinates found for ${address}.`);
  }

  return geometry;
};

module.exports = {
  geocodeListingLocation,
  getMapTilerApiKey,
  isValidPoint,
};
