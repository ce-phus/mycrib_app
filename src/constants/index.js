import { 
  homeSmile, 
  file02, 
  searchMd, 
  plusSquare,
  notification2,
  notification3,
  notification4,
  figma,
  notion,
  framer,
  photoshop,
  protopie,
  raindrop,
  slack,
  discord,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  ai,
  authentication1,
  chat,
  comments,
  filter,
  profile,
  property,
  authentication,
  realestate,
}from "../assets";


export const navigation = [
    {
      id: "0",
      title: "Features",
      url: "#features",
    },
    {
      id: "1",
      title: "Pricing",
      url: "#pricing",
    },
    {
      id: "3",
      title: "Roadmap",
      url: "#roadmap",
    },
    {
      id: "4",
      title: "Visit myCrib",
      url: "https://mycrib.app",
      onlyMobile: true,
    },
   
  ];

  export const flowApps = [
    {
      id: "0",
      title: "AI",
      icon: ai,
      width: 26,
      height: 36,
    },
    {
      id: "1",
      title: "User Authentication",
      icon: authentication1,
      width: 34,
      height: 36,
    },
    {
      id: "2",
      title: "Chat",
      icon: chat,
      width: 36,
      height: 28,
    },
    {
      id: "3",
      title: "Comments",
      icon: comments,
      width: 34,
      height: 35,
    },
    {
      id: "4",
      title: "Filter",
      icon: filter,
      width: 34,
      height: 34,
    },
    {
      id: "5",
      title: "Profile",
      icon: profile,
      width: 34,
      height: 34,
    },
    {
      id: "6",
      title: "Property",
      icon: property,
      width: 26,
      height: 34,
    },
    {
      id: "7",
      title: "Realestate",
      icon: realestate,
      width: 38,
      height: 32,
    },
  ];

  export const flowText =
  "A user-friendly platform with a robust unified ecosystem for both desktop and mobile users, advanced filtering capabilities, fragmented communication between potential buyers with sellers, agents and top agents and more.";

  export const flowContent = [
    {
      id: "0",
      title: "Seamless Integration",
      text: flowText,
    },
    {
      id: "1",
      title: "Advanced Filtering and Search options",
    },
    {
      id: "2",
      title: "Intergrated Chat and Comment Section",
    },
    {
      id: "3",
      title: "Like Property Feature",
    },
  ];
  
  export const roadmap = [
    {
      id: "0",
      title: "Web & Mobile App Platform",
      text: "A fully functional web app platform that connects property owners, agents, and buyers. The platform includes advanced filtering options of properties, a chat feature, and a comment section for users to interact with each other.",
      date: "April 2025",
      status: "done",
      imageUrl: roadmap1,
      colorful: true,
    },
    {
      id: "1",
      title: "Dashboard Analytics",
      text: "A dashboard that provides analytics and insights on property listings, user engagement, and market trends. This feature will help users make informed decisions about their real estate investments.",
      date: "April 2025",
      status: "progress",
      imageUrl: roadmap2,
    },
    {
      id: "2",
      title: "Predictive Analytics (Advanced)",
      text: "A predictive analytics feature that uses artificial intelligence to analyze user data and provide personalized recommendations for property listings. This feature will help users find properties that match their preferences and needs, future prices forecasts, market hotspots and buyer behaviour predictions.",
      date: "April 2025",
      status: "progress",
      imageUrl: roadmap3,
    },
    {
      id: "3",
      title: "Integration with APIs",
      text: "Allow the integration of third-party APIs to enhance the platform's functionality. This feature will enable users to access additional data sources and tools, such as mortgage calculators, property valuation tools, and more.",
      date: "April 2025",
      status: "progress",
      imageUrl: roadmap4,
    },
  ];

  export const pricing = [
    {
      id: "0",
      title: "Seller Plan",
      description: "Property owners looking to list and sell real estate",
      price: "2.99",
      features: [
        "List up to 5 properties for sale.",
        "Create up to 20 reels/clips to showcase properties.",
        "Unlimited posts (e.g., comments, shares, updates).",
        "Access to chat with Agents (but not Top Agents).",
        "Dashboard with future price predictions for up to 2 countries/regions.",
        "Support the community",
      ],
    },
    {
      id: "1",
      title: "Top Agent Plan",
      description: "High-performing agents seeking premium tools and exclusivity.",
      price: "8.99",
      features: [
        "Unlimited property listings and posts.",
        "Unlimited reels/clips with advanced editing tools (e.g., templates, filters).",
        "Access to both Agent-only and Top Agent-only chat networks (connect with all users).",
        "Priority listing visibility (properties appear higher in search results).",
        "Premium “Top Agent” badge and featured profile placement.",
        "Detailed analytics (e.g., post engagement, property views).",
        "Support the community",
      ],
    },
    {
      id: "2",
      title: "Agent Plan",
      description: "Licensed real estate agents building their network and business.",
      price: "4.99",
      features: [
        "Unlimited property listings and posts.",
        "Access to Agent-only chat (connect with other Agents, Buyers, and Sellers)",
        "Create unlimited reels/clips to market properties or personal brand.",
        "Profile badge indicating “Verified Agent” (requires credentials).",
        "Dashboard with future price predictions for up to 3 countries/regions.",
        "Support the community",
      ],
    },
    
  ];
  
  export const heroIcons = [homeSmile, file02, searchMd, plusSquare];
  export const notificationImages = [notification4, notification3, notification2];