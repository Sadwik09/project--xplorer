export type Difficulty = "Beginner" | "Intermediate" | "Advanced";
export type Category =
  | "Web Development"
  | "Mobile"
  | "AI/ML"
  | "Backend"
  | "Desktop"
  | "Data Science";

export interface ProjectSection {
  title: string;
  content: string | string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  difficulty: Difficulty;
  category: Category;
  overview: string;
  whyUseful: string;
  stepByStep: string[];
  technologies: string[];
  keyFeatures: string[];
  expectedOutcome: string;
  realWorldImpact: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Personal Portfolio Website",
    description: "Build a stunning portfolio website to showcase your projects and skills to potential employers.",
    difficulty: "Beginner",
    category: "Web Development",
    overview:
      "A personal portfolio website is your digital resume. It allows you to showcase your work, skills, and achievements in a visually appealing way. This project teaches you the fundamentals of web design, responsive layouts, and how to present your professional brand online.",
    whyUseful:
      "In today's job market, having a strong online presence is crucial. A portfolio website helps you stand out from other candidates, demonstrates your ability to build real projects, and gives potential employers a direct way to evaluate your skills and creativity.",
    stepByStep: [
      "Set up your project structure with HTML, CSS, and JavaScript",
      "Create a header/navigation that links to different sections",
      "Build a hero section with a compelling introduction and call-to-action",
      "Design a projects section showcasing 3-5 of your best works",
      "Add a skills section with categories and proficiency levels",
      "Create a contact section with a form or links to your social media",
      "Implement responsive design to work on mobile and desktop",
      "Add smooth scrolling and interactive hover effects",
      "Deploy your site using Netlify, Vercel, or GitHub Pages",
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React (optional)",
      "Tailwind CSS (optional)",
      "Git & GitHub",
    ],
    keyFeatures: [
      "Responsive navigation menu",
      "Smooth scroll animations",
      "Project showcase with images and descriptions",
      "Contact form or email integration",
      "Dark mode toggle",
      "Mobile-first design",
    ],
    expectedOutcome:
      "A fully functional, deployed portfolio website that effectively showcases your projects and attracts potential employers. You'll have a production-ready site that you can continuously update with new projects.",
    realWorldImpact:
      "This project directly impacts your career. Many job opportunities come through portfolio reviews. Companies love candidates who have personal projects deployed online, and this demonstrates your initiative and technical skills.",
  },
  {
    id: "2",
    title: "Todo Application with Local Storage",
    description: "Create a productivity app to manage daily tasks with persistent storage and filtering options.",
    difficulty: "Beginner",
    category: "Web Development",
    overview:
      "A todo application is a perfect beginner project that teaches you about state management, DOM manipulation, and data persistence. You'll build a functional app where users can add, complete, and delete tasks, with all data saved locally.",
    whyUseful:
      "Todo apps are excellent for learning fundamental web development concepts. You'll practice handling user input, managing application state, working with local storage, and creating intuitive user interfaces. Plus, you build a tool you can actually use daily!",
    stepByStep: [
      "Create the HTML structure with input field and task list container",
      "Style the application with CSS for a clean, modern look",
      "Implement JavaScript to handle adding new todos",
      "Add functionality to mark todos as complete",
      "Create a delete button for each todo item",
      "Implement local storage to persist todos across sessions",
      "Add filter options (all, active, completed)",
      "Add edit functionality to modify existing todos",
      "Implement a clear completed button",
      "Add animations for better user experience",
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript ES6+",
      "localStorage API",
      "React or Vue (optional)",
    ],
    keyFeatures: [
      "Add/delete/edit tasks",
      "Mark tasks as complete",
      "Filter by status (all, active, completed)",
      "Persistent storage",
      "Due dates for tasks",
      "Task categories",
      "Search functionality",
    ],
    expectedOutcome:
      "A fully functional todo application that works across browser sessions. You'll have a clear understanding of client-side state management and how web browsers store data.",
    realWorldImpact:
      "This project teaches you the core concepts needed for any web application. The patterns you learn here apply to complex applications, and you'll understand how front-end applications manage data and user interactions.",
  },
  {
    id: "3",
    title: "Weather Application",
    description: "Build a weather app that fetches real-time data from an API and displays forecasts beautifully.",
    difficulty: "Intermediate",
    category: "Web Development",
    overview:
      "A weather application teaches you how to work with external APIs, handle asynchronous data, and build user interfaces based on real-time information. You'll fetch weather data from a public API and present it in an engaging way.",
    whyUseful:
      "This project is essential for understanding how modern web applications work with external services. API integration is a critical skill for any web developer, and weather apps are perfect for learning without complex authentication.",
    stepByStep: [
      "Choose a free weather API (OpenWeatherMap, WeatherAPI, etc.)",
      "Set up your project with HTML, CSS, and JavaScript",
      "Create a search input for users to enter a city name",
      "Implement API calls to fetch weather data",
      "Parse the API response and display current weather",
      "Add a 5-day forecast display",
      "Implement geolocation to show weather for user's location",
      "Add weather icons that change based on conditions",
      "Create detailed information panels (humidity, wind speed, etc.)",
      "Add temperature unit toggle (Celsius/Fahrenheit)",
      "Cache recent searches for quick access",
      "Deploy and test with multiple locations",
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript/TypeScript",
      "REST APIs",
      "Fetch API or Axios",
      "React or Vue (recommended)",
    ],
    keyFeatures: [
      "Real-time weather data",
      "5-day forecast",
      "Geolocation support",
      "Search by city name",
      "Temperature unit conversion",
      "Detailed weather metrics",
      "Weather animations/icons",
      "Search history",
    ],
    expectedOutcome:
      "A fully functional weather application that integrates with a real weather API and provides accurate, up-to-date information with a polished interface.",
    realWorldImpact:
      "You'll understand API integration, asynchronous programming, and how to handle errors gracefully. These skills are fundamental for all modern web development and apply to countless real-world applications.",
  },
  {
    id: "4",
    title: "E-Commerce Store Frontend",
    description: "Create a product browsing and shopping cart system with filtering and checkout flow.",
    difficulty: "Intermediate",
    category: "Web Development",
    overview:
      "An e-commerce frontend teaches you how to build complex user interfaces with state management. You'll create product listings, implement shopping cart functionality, and build a checkout flow without a backend.",
    whyUseful:
      "E-commerce skills are highly sought after. This project teaches you state management, component composition, form handling, and UX design principles that are essential for modern web development.",
    stepByStep: [
      "Create a product database or JSON file with sample products",
      "Build a product listing page with image, price, and description",
      "Implement product filtering by category and price range",
      "Add search functionality across products",
      "Create a shopping cart system with add/remove functionality",
      "Implement cart quantity updates",
      "Build a product detail page with reviews and ratings",
      "Create a checkout flow with cart review and address form",
      "Implement order summary and total calculation",
      "Add payment method selection (UI only)",
      "Create an order confirmation page",
      "Add wishlist/favorites functionality",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Context API or Redux",
      "React Router",
    ],
    keyFeatures: [
      "Product browsing with filters",
      "Shopping cart management",
      "Product search",
      "Product detail pages",
      "Wishlist feature",
      "Checkout flow",
      "Order summary",
      "Responsive design",
    ],
    expectedOutcome:
      "A complete e-commerce frontend with product browsing, filtering, shopping cart, and checkout flow. You'll have a scalable foundation that could integrate with a real backend API.",
    realWorldImpact:
      "This project demonstrates your ability to build complex applications with multiple states and user workflows. These are the exact skills needed for real e-commerce jobs and other data-heavy applications.",
  },
  {
    id: "5",
    title: "Chat Application with WebSockets",
    description: "Build a real-time chat application enabling instant messaging between multiple users.",
    difficulty: "Advanced",
    category: "Backend",
    overview:
      "A real-time chat application demonstrates advanced concepts like WebSockets, real-time data synchronization, and server-client communication. You'll build both frontend and backend components.",
    whyUseful:
      "Real-time applications are at the cutting edge of web development. Understanding WebSockets and real-time communication opens doors to building collaborative tools, notifications systems, and interactive applications.",
    stepByStep: [
      "Set up a Node.js/Express backend with WebSocket support",
      "Install and configure Socket.io for real-time communication",
      "Create a user authentication system",
      "Build the frontend with React and Socket.io client",
      "Implement the chat message interface",
      "Create functionality to send and receive messages",
      "Implement user online/offline status",
      "Add typing indicators when users are composing",
      "Create message history and persistent storage",
      "Implement private messaging between users",
      "Add group chat functionality",
      "Deploy to a platform supporting WebSockets",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "Socket.io",
      "MongoDB or PostgreSQL",
      "TypeScript",
      "JWT for authentication",
    ],
    keyFeatures: [
      "Real-time messaging",
      "User authentication",
      "Online status",
      "Typing indicators",
      "Message history",
      "Group chats",
      "Private messages",
      "User notifications",
    ],
    expectedOutcome:
      "A fully functional real-time chat application with user authentication, message persistence, and real-time synchronization across multiple clients.",
    realWorldImpact:
      "This project showcases your ability to build scalable, real-time applications. These skills are crucial for building modern communication tools and collaborative platforms used by millions.",
  },
  {
    id: "6",
    title: "Machine Learning Image Classifier",
    description: "Use ML models to classify images and build a web interface for image recognition.",
    difficulty: "Advanced",
    category: "AI/ML",
    overview:
      "An image classifier demonstrates how to integrate machine learning models into web applications. You'll use pre-trained models and TensorFlow.js to make predictions directly in the browser.",
    whyUseful:
      "AI/ML is reshaping technology. This project teaches you how to leverage existing models and integrate them into practical applications. It bridges the gap between machine learning and web development.",
    stepByStep: [
      "Choose a pre-trained model (MobileNet, COCO-SSD, etc.)",
      "Set up TensorFlow.js in your project",
      "Create an image upload interface",
      "Load and initialize the pre-trained model",
      "Implement image preprocessing pipeline",
      "Create prediction logic and display results",
      "Add confidence scores for predictions",
      "Implement real-time webcam classification",
      "Add multiple model support",
      "Create a results history",
      "Optimize for performance",
      "Deploy the application",
    ],
    technologies: [
      "React",
      "TensorFlow.js",
      "Python (for training custom models)",
      "HTML5 Canvas",
      "WebGL",
      "Tailwind CSS",
    ],
    keyFeatures: [
      "Image upload and classification",
      "Webcam real-time classification",
      "Confidence score display",
      "Multiple model support",
      "Batch image processing",
      "Results visualization",
      "Performance metrics",
    ],
    expectedOutcome:
      "A functional image classification web application that can identify objects, animals, and scenes from images with high accuracy.",
    realWorldImpact:
      "This project opens doors to AI/ML-focused roles. You'll understand how to productionize machine learning models and reach millions of users through web applications.",
  },
];
