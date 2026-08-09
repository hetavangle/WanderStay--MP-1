const listingCategories = [
  { value: "Trending", icon: "ph ph-fire" },
  { value: "Rooms", icon: "ph ph-bed" },
  { value: "Iconic cities", icon: "ph ph-city" },
  { value: "Moutains", icon: "ph ph-mountains" },
  { value: "Castles", icon: "ph ph-castle-turret" },
  { value: "Amazing Pools", icon: "ph ph-swimming-pool" },
  { value: "Camping", icon: "ph ph-tent" },
  { value: "Farms", icon: "ph ph-cow" },
  { value: "Arctic", icon: "ph ph-snowflake" },
  { value: "Dome", icon: "ph ph-house-line" },
  { value: "Boats", icon: "ph ph-sailboat" },
];

const LISTING_CATEGORY_VALUES = listingCategories.map(
  (category) => category.value,
);

module.exports = { listingCategories, LISTING_CATEGORY_VALUES };
