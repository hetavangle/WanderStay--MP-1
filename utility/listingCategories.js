const listingCategories = [
  { value: "Trending", icon: "fa-solid fa-fire" },
  { value: "Rooms", icon: "fa-solid fa-bed" },
  { value: "Iconic cities", icon: "fa-solid fa-mountain-city" },
  { value: "Moutains", icon: "fa-solid fa-mountain" },
  { value: "Castles", icon: "fa-brands fa-fort-awesome" },
  { value: "Amazing Pools", icon: "fa-solid fa-water-ladder" },
  { value: "Camping", icon: "fa-solid fa-tents" },
  { value: "Farms", icon: "fa-solid fa-cow" },
  { value: "Arctic", icon: "fa-solid fa-snowflake" },
  { value: "Dome", icon: "fa-solid fa-igloo" },
  { value: "Boats", icon: "fa-solid fa-ship" },
];

const LISTING_CATEGORY_VALUES = listingCategories.map(
  (category) => category.value,
);

module.exports = { listingCategories, LISTING_CATEGORY_VALUES };
