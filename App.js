import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <a href="/">
    <img
      alt="logo"
      className="logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxc9DTAqOlERTz8whSgUP7-zR3mYZzxlg7Ug&usqp=CAU"
    />
  </a>
);

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Services</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "84070",
      name: "Gurukripa Restaurant  Sarwate",
      uuid: "1e86e574-fa54-48f8-96f7-7ba27b0f635b",
      city: "18",
      area: "South Tukoganj",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "g5txnz35wlrgbskk3r8y",
      cuisines: [
        "North Indian",
        "Thalis",
        "Indian",
        "Fast Food",
        "Chinese",
        "Beverages",
        "Desserts",
        "Jain",
        "Punjabi",
      ],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 28,
      minDeliveryTime: 28,
      maxDeliveryTime: 28,
      slaString: "28 MINS",
      lastMileTravel: 4.199999809265137,
      slugs: {
        restaurant: "shree-gurukripa-sarwate-bus-stand-south-tukoganj",
        city: "indore",
      },
      cityState: "18",
      address: "Sarwate Bus Stand, Indore",
      locality: "Sarwate",
      parentId: 92204,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "60% off",
        shortDescriptionList: [
          {
            meta: "60% off | Use MISSEDYOU",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code MISSEDYOU",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use MISSEDYOU",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code MISSEDYOU",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 2900,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 2900,
        message: "",
        title: "Delivery Charge",
        amount: "2900",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "4.1 kms",
      hasSurge: false,
      sla: {
        restaurantId: "84070",
        deliveryTime: 28,
        minDeliveryTime: 28,
        maxDeliveryTime: 28,
        lastMileTravel: 4.199999809265137,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.0",
      totalRatings: 10000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "74397",
      name: "Punjabi Tadka Restaurant",
      uuid: "1017d977-a5e8-4ea0-b96e-8c264b821b0d",
      city: "18",
      area: "Bhawar Kuan",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "gi3zvy9zv6vvlsyq6qsg",
      cuisines: ["North Indian"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 19,
      minDeliveryTime: 19,
      maxDeliveryTime: 19,
      slaString: "19 MINS",
      lastMileTravel: 0.800000011920929,
      slugs: {
        restaurant: "punjabi-tadka-restaurant-geeta-bhavan-south-tukoganj",
        city: "indore",
      },
      cityState: "18",
      address:
        "160/4 Pipliyarao AB road,Opp TVS Ahuja showroom, bhanwarkua, indore",
      locality: "Pipliyarao",
      parentId: 7989,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 2400,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 2400,
        message: "",
        title: "Delivery Charge",
        amount: "2400",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.8 kms",
      hasSurge: false,
      sla: {
        restaurantId: "74397",
        deliveryTime: 19,
        minDeliveryTime: 19,
        maxDeliveryTime: 19,
        lastMileTravel: 0.800000011920929,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.4",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "97604",
      name: "Shree leela Restaurant",
      uuid: "ec66b995-d14e-4ecc-8a4d-fdcc1d881dd2",
      city: "18",
      area: "Goyal Nagar",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "a7slohkrnxq33xyx0vjo",
      cuisines: ["Indian"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 33,
      minDeliveryTime: 33,
      maxDeliveryTime: 33,
      slaString: "33 MINS",
      lastMileTravel: 7.099999904632568,
      slugs: {
        restaurant: "shreeleela-restaurant-bengali-square-old-palasia",
        city: "indore",
      },
      cityState: "18",
      address: "ag1 348 goyal nagar bengali square",
      locality: "bengali square",
      parentId: 22061,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "60% off",
        shortDescriptionList: [
          {
            meta: "60% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 6100,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 6100,
        message: "",
        title: "Delivery Charge",
        amount: "6100",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5986159~p=22~eid=00000186-936a-ce52-412b-644a00a11631",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "7 kms",
      hasSurge: false,
      sla: {
        restaurantId: "97604",
        deliveryTime: 33,
        minDeliveryTime: 33,
        maxDeliveryTime: 33,
        lastMileTravel: 7.099999904632568,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.0",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "67500",
      name: "Pishori Restaurant",
      uuid: "aeaec663-4879-495f-9ff9-2ac33e86fa33",
      city: "18",
      area: "Khatiwala Tank",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "ntfzr5mgmt9b9f545vtl",
      cuisines: ["North Indian", "Chinese", "Mughlai", "Punjabi", "Indian"],
      tags: [],
      costForTwo: 45000,
      costForTwoString: "₹450 FOR TWO",
      deliveryTime: 21,
      minDeliveryTime: 21,
      maxDeliveryTime: 21,
      slaString: "21 MINS",
      lastMileTravel: 1.7999999523162842,
      slugs: {
        restaurant: "pishori-dhaba-sapna-sangeeta-bhawar-kuan",
        city: "indore",
      },
      cityState: "18",
      address: "910, Khatiwala Tank, Sapna Sangeeta, Indore",
      locality: "Khatiwala Tank",
      parentId: 158125,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "60% off",
        shortDescriptionList: [
          {
            meta: "60% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 2400,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 2400,
        message: "",
        title: "Delivery Charge",
        amount: "2400",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.7 kms",
      hasSurge: false,
      sla: {
        restaurantId: "67500",
        deliveryTime: 21,
        minDeliveryTime: 21,
        maxDeliveryTime: 21,
        lastMileTravel: 1.7999999523162842,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.8",
      totalRatings: 10000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "630711",
      name: "The Belgian Waffle Co.",
      uuid: "4bfb5173-7905-4f7a-9493-161a244af217",
      city: "18",
      area: "Khatiwala Tank",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "koydyzdmevpcb9e6uqiq",
      cuisines: ["Waffle", "Desserts", "Ice Cream"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 22,
      minDeliveryTime: 22,
      maxDeliveryTime: 22,
      slaString: "22 MINS",
      lastMileTravel: 1.5,
      slugs: {
        restaurant: "the-belgian-waffle-co-holani-commerce-bhawar-kuan",
        city: "indore",
      },
      cityState: "18",
      address:
        "THE BELGIAN WAFFLE CO., UG-52, 626-627, HOLANI COMMERCE, OPP. KAILASH FLORIST, KHATIWALA TANK, INDORE, 452014",
      locality: "Sapna Sangeeta",
      parentId: 2233,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 2400,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 2400,
        message: "",
        title: "Delivery Charge",
        amount: "2400",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "630711",
        deliveryTime: 22,
        minDeliveryTime: 22,
        maxDeliveryTime: 22,
        lastMileTravel: 1.5,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.4",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
];

const RestaurantCard = ({
  name,
  cuisines,
  totalRatingsString,
  cloudinaryImageId,
}) => {
  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <h3>{totalRatingsString}</h3>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      {RestaurantList.map((restaurant) => {
        return (
          <RestaurantCard
            {...RestaurantList[0].data}
            key={restaurant.data.id}
          />
        );
      })}
    </div>
  );
};

const Footer = () => {
  return <h1>Footer</h1>;
};

const Layout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Layout />);
