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
  roadmap4
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
      id: "2",
      title: "How to use",
      url: "#how-to-use",
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
      title: "Figma",
      icon: figma,
      width: 26,
      height: 36,
    },
    {
      id: "1",
      title: "Notion",
      icon: notion,
      width: 34,
      height: 36,
    },
    {
      id: "2",
      title: "Discord",
      icon: discord,
      width: 36,
      height: 28,
    },
    {
      id: "3",
      title: "Slack",
      icon: slack,
      width: 34,
      height: 35,
    },
    {
      id: "4",
      title: "Photoshop",
      icon: photoshop,
      width: 34,
      height: 34,
    },
    {
      id: "5",
      title: "Protopie",
      icon: protopie,
      width: 34,
      height: 34,
    },
    {
      id: "6",
      title: "Framer",
      icon: framer,
      width: 26,
      height: 34,
    },
    {
      id: "7",
      title: "Raindrop",
      icon: raindrop,
      width: 38,
      height: 32,
    },
  ];

  export const flowText =
  "A user-firendly platform with a robust unified ecosystem for both desktop and mobile users, advanced filtering capabilities, fragmented communication between potential buyers with sellers, agents and top agents and more.";

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
      title: "Voice recognition",
      text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
      date: "May 2023",
      status: "done",
      imageUrl: roadmap1,
      colorful: true,
    },
    {
      id: "1",
      title: "Gamification",
      text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
      date: "May 2023",
      status: "progress",
      imageUrl: roadmap2,
    },
    {
      id: "2",
      title: "Chatbot customization",
      text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
      date: "May 2023",
      status: "done",
      imageUrl: roadmap3,
    },
    {
      id: "3",
      title: "Integration with APIs",
      text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
      date: "May 2023",
      status: "progress",
      imageUrl: roadmap4,
    },
  ];

  export const heroIcons = [homeSmile, file02, searchMd, plusSquare];
  export const notificationImages = [notification4, notification3, notification2];