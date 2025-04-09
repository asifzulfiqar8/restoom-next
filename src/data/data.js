const tableStyles = {
  headCells: {
    style: {
      fontSize: "16px",
      fontWeight: 600,
      color: "rgba(17, 17, 17, 1)",
    },
  },
  rows: {
    style: {
      background: "#ECE8FF",
      borderRadius: "6px",
      padding: "14px 0",
      margin: "10px 0",
      borderBottomWidth: "0 !important",
    },
  },
  cells: {
    style: {
      color: "rgba(17, 17, 17, 1)",
      fontSize: "14px",
    },
  },
};

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

const initialSensorsData = [
  {
    _id: "1",
    name: "Pressure Sensor",
    ip: "255.255.255.255",
    port: "2093",
    type: "Pressure",
    uniqueId: "123456789",
    status: "connected",
  },
  {
    _id: "2",
    name: "Temperature Sensor",
    ip: "192.168.1.10",
    port: "3001",
    type: "Temperature",
    uniqueId: "987654321",
    status: "disconnected",
  },
  {
    _id: "3",
    name: "Humidity Sensor",
    ip: "10.0.0.5",
    port: "8080",
    type: "Humidity",
    uniqueId: "1122334455",
    status: "connected",
  },
];

export {
  dashboardCardsData,
  pieChartData,
  buildingData,
  tableStyles,
  initialSensorsData,
};
