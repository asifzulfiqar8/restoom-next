const dashboardCardsData = [
  {
    title: "Total Buildings",
    value: "125",
    icon: "/images/dashboard/total-buildings.png",
    percentageChange:
      "<span class='text-[#00B69B]'>8.5%</span> Up from yesterday",
  },
  {
    title: "Total Restrooms",
    value: "212",
    icon: "/images/dashboard/total-restroom.png",
    percentageChange:
      "<span class='text-[#00B69B]'>8.5%</span> Up from yesterday",
  },
  {
    title: "Total Sensors",
    value: "223",
    icon: "/images/dashboard/total-sensors.png",
    percentageChange:
      "<span class='text-[#00B69B]'>8.5%</span> Up from yesterday",
  },
  {
    title: "Total Subscriptions",
    value: "12",
    icon: "/images/dashboard/total-subscription.png",
    percentageChange:
      "<span class='text-[#00B69B]'>8.5%</span> Up from yesterday",
  },
];

const pieChartData = [
  { name: "Building 1", value: 490 },
  { name: "Building 2", value: 102 },
  { name: "Building 3", value: 209 },
];

const buildingData = [
  {
    title: "Arfa Tower",
    location: "Ryad, Saudi Arabia",
    image: "/images/dashboard/building-one.png",
    numberOfFloors: 4,
    numberOfRestrooms: 14,
    buildingType: "Public",
  },
  {
    title: "Bahrain Plaza",
    location: "Downtown, Manama, Bahrain",
    image: "/images/dashboard/building-two.png",
    numberOfFloors: 8,
    numberOfRestrooms: 20,
    buildingType: "Commercial",
  },
  {
    title: "Dubai Heights",
    location: "Business Bay, Dubai, UAE",
    image: "/images/dashboard/building-three.png",
    numberOfFloors: 12,
    numberOfRestrooms: 30,
    buildingType: "Private",
  },
  {
    title: "Kuwait Residency",
    location: "Salmiya, Kuwait",
    image: "/images/dashboard/building-one.png",
    numberOfFloors: 6,
    numberOfRestrooms: 18,
    buildingType: "Private",
  },
  {
    title: "Qatar Hub",
    location: "West Bay, Doha, Qatar",
    image: "/images/dashboard/building-two.png",
    numberOfFloors: 10,
    numberOfRestrooms: 24,
    buildingType: "Commercial",
  },
  {
    title: "Oman Oasis",
    location: "Muscat, Oman",
    image: "/images/dashboard/building-three.png",
    numberOfFloors: 5,
    numberOfRestrooms: 16,
    buildingType: "Commercial",
  },
];

export { dashboardCardsData, pieChartData, buildingData };
