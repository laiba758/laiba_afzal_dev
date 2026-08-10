import picks4tipsImage from "../assets/heroo.png";
import customerDashboardImage from "../assets/customerdashboard.png";
import workerDashboardImage from "../assets/workerdashboard.png";
import adminImage from "../assets/admin.png";
import jobsImage from "../assets/jobs.png";
import subscriptionImage from "../assets/subscription.png";
import mobileViewImage from "../assets/cusmobileview.png";

const projects = [
  {
    id: "picks4tips",
    name: "Picks4Tips",
    tagline: "Responsive Full-Stack Service Marketplace",

    description:
      "Picks4Tips is a modern full-stack service marketplace designed to provide customers and service providers with a clean, responsive and user-friendly experience. The platform includes job posting, service booking, bidding, subscriptions, payments, dashboards and real-time communication.",

    // Main project image
    image: picks4tipsImage,

    tech: [
      "React.js",
      "JavaScript",
      "PHP / Laravel",
      "MySQL",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Stripe",
    ],

    features: [
      "Customer Dashboard",
      "Service Provider Dashboard",
      "Job Posting",
      "Service Booking",
      "Bidding System",
      "Subscription Plans",
      "Stripe Payment Integration",
      "Chat / Messaging",
      "Real-Time Notifications",
      "Admin Panel",
      "Authentication",
      "Responsive UI",
    ],

    // Project screenshots
    screenshots: [
      {
        title: "Picks4Tips Homepage",
        image: picks4tipsImage,
      },
      {
        title: "Customer Dashboard",
        image: customerDashboardImage,
      },
      {
        title: "Service Provider Dashboard",
        image: workerDashboardImage,
      },
      {
        title: "Admin Panel",
        image: adminImage,
      },
      {
        title: "Job Posting",
        image: jobsImage,
      },
      {
        title: "Subscription Plans",
        image: subscriptionImage,
      },
      {
        title: "Mobile Responsive View",
        image: mobileViewImage,
      },
    ],
  },
];

export default projects;