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

const planCardsData = [
  {
    title: "Starter",
    subtitle: "Basic Builder",
    price: "29",
    type: "monthly",
    featuresList: [
      "Manage up to 3 buildings",
      "Connect up to 10 sensors",
      "Basic real-time monitoring",
      "Standard reporting tools",
      "Email support",
    ],
    description:
      "Start with the essentials. Ideal for small teams or single buildings, this plan provides the foundational tools to get your smart building up and running efficiently",
    bg: "#B2FFB0",
    btnBg: "#008B26",
  },
  {
    title: "Standard",
    subtitle: "Pro Manager",

    price: "39",
    type: "yearly",
    featuresList: [
      "Manage up to 3 buildings",
      "Connect up to 10 sensors",
      "Basic real-time monitoring",
      "Standard reporting tools",
      "Email support",
    ],
    description:
      "Start with the essentials. Ideal for small teams or single buildings, this plan provides the foundational tools to get your smart building up and running efficiently",
    bg: "#81CEFF",
    btnBg: "#0067A9",
  },
  {
    title: "Premium",
    subtitle: "Basic Plan",

    price: "49",
    type: "lifetime",
    featuresList: [
      "Manage up to 3 buildings",
      "Connect up to 10 sensors",
      "Basic real-time monitoring",
      "Standard reporting tools",
      "Email support",
    ],
    description:
      "Start with the essentials. Ideal for small teams or single buildings, this plan provides the foundational tools to get your smart building up and running efficiently",
    bg: "#FFCF87",
    btnBg: "#F2AC44",
  },
];

const subscriptionHistoryData = [
  {
    _id: "123123sd",
    date: "24 June 2024",
    plan: "Standard",
    amount: "19.99",
    status: "expired",
    invoice: "",
  },
  {
    _id: "456456gh",
    date: "15 July 2024",
    plan: "Premium",
    amount: "29.99",
    status: "active",
    invoice: "INV-2024-001",
  },
  {
    _id: "789789jk",
    date: "01 Aug 2024",
    plan: "Standard",
    amount: "19.99",
    status: "cancelled",
    invoice: "INV-2024-002",
  },
  {
    _id: "101010ab",
    date: "12 Sept 2024",
    plan: "Basic",
    amount: "9.99",
    status: "active",
    invoice: "INV-2024-003",
  },
  {
    _id: "121212cd",
    date: "30 October 2024",
    plan: "Premium",
    amount: "29.99",
    status: "expired",
    invoice: "",
  },
  {
    _id: "131313ef",
    date: "05 November 2024",
    plan: "Standard",
    amount: "19.99",
    status: "active",
    invoice: "INV-2024-004",
  },
];

export {
  dashboardCardsData,
  pieChartData,
  buildingData,
  tableStyles,
  initialSensorsData,
  planCardsData,
  subscriptionHistoryData,
};
