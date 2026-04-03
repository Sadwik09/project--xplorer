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
  {
    id: "7",
    title: "Blog Platform with CMS",
    description: "Build a blogging platform where users can create, edit, and publish blog posts with rich text editing.",
    difficulty: "Intermediate",
    category: "Web Development",
    overview:
      "A blog platform teaches you content management, rich text editing, and user-generated content handling. You'll build a complete system where users can create and manage their own blog posts with formatting options.",
    whyUseful:
      "Content management systems (CMS) power millions of websites. Building one teaches you about data persistence, user authentication, and content publishing workflows - skills essential for many real-world applications.",
    stepByStep: [
      "Set up project with React, TypeScript, and a database",
      "Create user authentication and authorization",
      "Build a rich text editor integration (Draft.js or Slate)",
      "Create database schema for posts and comments",
      "Implement post creation with title, content, and metadata",
      "Add post editing and deletion functionality",
      "Create a dashboard for users to manage posts",
      "Build a public blog listing page",
      "Implement search and category filtering",
      "Add comments system for blog posts",
      "Create featured posts section",
      "Add social sharing buttons",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js/Express",
      "MongoDB/PostgreSQL",
      "Draft.js or Slate Editor",
      "JWT Authentication",
    ],
    keyFeatures: [
      "Rich text editor",
      "User authentication",
      "Post management dashboard",
      "Comments system",
      "Search functionality",
      "Category filtering",
      "Featured posts",
      "Social sharing",
    ],
    expectedOutcome:
      "A fully functional blogging platform where users can create, publish, and manage blog posts with a professional editor interface.",
    realWorldImpact:
      "Content creation is a fundamental need for businesses. This project teaches you how platforms like Medium, Dev.to, and WordPress work, opening doors to content platform development roles.",
  },
  {
    id: "8",
    title: "Expense Tracker App",
    description: "Create a personal finance app to track spending, categorize expenses, and visualize spending patterns.",
    difficulty: "Intermediate",
    category: "Web Development",
    overview:
      "An expense tracker helps users manage their personal finances. You'll build an app where users can log expenses, categorize them, set budgets, and view insights about their spending habits.",
    whyUseful:
      "Financial literacy is crucial. This project teaches you data aggregation, visualization, budgeting logic, and how to present complex financial data in an understandable way.",
    stepByStep: [
      "Create user authentication system",
      "Design database schema for expenses and budgets",
      "Build expense entry form with category selection",
      "Implement expense listing with filters",
      "Create expense editing and deletion",
      "Build budget management features",
      "Create expense charts and visualizations",
      "Implement spending analytics dashboard",
      "Add monthly and yearly reports",
      "Create export functionality (CSV/PDF)",
      "Add recurring expense tracking",
      "Implement notifications for budget alerts",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js/Express",
      "MongoDB/PostgreSQL",
      "Chart.js or Recharts",
      "JWT Authentication",
    ],
    keyFeatures: [
      "Expense logging with categories",
      "Budget management",
      "Spending charts",
      "Monthly/yearly reports",
      "Data export",
      "Budget alerts",
      "Recurring expenses",
      "Analytics dashboard",
    ],
    expectedOutcome:
      "A comprehensive expense tracking application with visualizations and insights that help users understand and manage their spending.",
    realWorldImpact:
      "Financial apps are highly valued. You'll understand how fintech applications work and learn skills applicable to banking, investment, and financial management platforms.",
  },
  {
    id: "9",
    title: "Movie Recommendation Engine",
    description: "Build an app that recommends movies based on user preferences using algorithms and APIs.",
    difficulty: "Intermediate",
    category: "Data Science",
    overview:
      "A recommendation engine teaches you how to use data to make predictions. You'll integrate with movie databases, implement recommendation algorithms, and present personalized results to users.",
    whyUseful:
      "Recommendation engines power Netflix, Amazon, and Spotify. Understanding how they work is essential for data science and ML careers. You'll learn about collaborative filtering and content-based recommendations.",
    stepByStep: [
      "Set up project and integrate with movie API (TMDb)",
      "Create user profile system with preferences",
      "Build genre-based filtering system",
      "Implement rating system for movies",
      "Create simple recommendation algorithm",
      "Build recommendation dashboard",
      "Add watchlist functionality",
      "Implement advanced filtering options",
      "Create user preference management",
      "Build trending movies section",
      "Add similar movie recommendations",
      "Deploy and optimize",
    ],
    technologies: [
      "React",
      "Python (for recommendation algorithms)",
      "Node.js/Express",
      "MongoDB",
      "TMDb API",
      "Scikit-learn",
    ],
    keyFeatures: [
      "Movie search and filtering",
      "User ratings",
      "Personalized recommendations",
      "Watchlist management",
      "Similar movie suggestions",
      "Trending movies",
      "Genre filtering",
      "User preferences",
    ],
    expectedOutcome:
      "A movie recommendation platform that suggests relevant movies based on user ratings and preferences with a beautiful interface.",
    realWorldImpact:
      "Recommendation systems are at the core of modern platforms. This project prepares you for roles in data science, machine learning, and personalization engineering.",
  },
  {
    id: "10",
    title: "Fitness Tracking App",
    description: "Build a health and fitness app to track workouts, calories, and progress towards fitness goals.",
    difficulty: "Intermediate",
    category: "Mobile",
    overview:
      "A fitness tracker helps users monitor their health journey. You'll build an app where users can log workouts, track nutrition, set goals, and view progress analytics.",
    whyUseful:
      "Health and wellness apps are exploding. This project teaches you about user engagement, data analytics, goal tracking, and how to motivate users through progress visualization.",
    stepByStep: [
      "Set up user authentication",
      "Create goal-setting interface",
      "Build workout logging system",
      "Add exercise database with descriptions",
      "Implement nutrition tracking",
      "Create progress dashboard",
      "Build statistics and charts",
      "Add reminder/notification system",
      "Create achievement badges",
      "Implement social sharing features",
      "Add mobile responsiveness",
      "Deploy application",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js/Express",
      "MongoDB",
      "Chart.js or Recharts",
      "React Native (optional)",
    ],
    keyFeatures: [
      "Workout logging",
      "Nutrition tracking",
      "Goal management",
      "Progress charts",
      "Achievement badges",
      "Reminders/Notifications",
      "Social sharing",
      "Statistics dashboard",
    ],
    expectedOutcome:
      "A comprehensive fitness tracking app with workout logging, nutrition tracking, and progress visualization to help users achieve their health goals.",
    realWorldImpact:
      "The fitness tech industry is booming. This project demonstrates your ability to build health-focused applications used by millions of users globally.",
  },
  {
    id: "11",
    title: "Multi-User Drawing App",
    description: "Create a collaborative drawing application where multiple users can draw together in real-time.",
    difficulty: "Advanced",
    category: "Web Development",
    overview:
      "A collaborative drawing app teaches real-time synchronization, canvas manipulation, and multi-user coordination. Users can draw together, see changes instantly, and save their artwork.",
    whyUseful:
      "Real-time collaborative tools are reshaping how teams work. Building one teaches you WebSockets, canvas APIs, and how to handle concurrent user interactions - skills essential for modern collaboration apps.",
    stepByStep: [
      "Set up WebSocket server for real-time communication",
      "Create HTML5 Canvas implementation",
      "Implement drawing tools (pen, eraser, shapes)",
      "Add color picker and brush size selector",
      "Implement real-time drawing synchronization",
      "Create user presence indicators",
      "Add undo/redo functionality",
      "Create layers system",
      "Implement save and load drawings",
      "Add drawing templates",
      "Create sharing functionality",
      "Deploy with WebSocket support",
    ],
    technologies: [
      "React",
      "HTML5 Canvas",
      "WebSocket/Socket.io",
      "Node.js/Express",
      "MongoDB",
      "TypeScript",
    ],
    keyFeatures: [
      "Real-time collaborative drawing",
      "Multiple drawing tools",
      "Color picker",
      "Undo/redo",
      "Layers system",
      "Save and load drawings",
      "User presence",
      "Drawing sharing",
    ],
    expectedOutcome:
      "A fully functional collaborative drawing application where multiple users can work on the same canvas in real-time with a complete feature set.",
    realWorldImpact:
      "Collaborative tools like Figma and Miro revolutionized design. This project teaches you the core technology behind collaborative platforms used by millions.",
  },
  {
    id: "12",
    title: "Code Snippet Manager",
    description: "Build a platform to save, organize, and share code snippets with syntax highlighting and search.",
    difficulty: "Beginner",
    category: "Web Development",
    overview:
      "A code snippet manager helps developers store and retrieve useful code pieces. You'll build a system with syntax highlighting, categorization, and search functionality.",
    whyUseful:
      "Every developer needs a code repository. This project teaches you about code syntax highlighting, text processing, and how to build productivity tools for developers.",
    stepByStep: [
      "Create snippet creation form",
      "Add syntax highlighting library (Prism.js or Highlight.js)",
      "Implement snippet storage",
      "Create snippet listing with search",
      "Add category/tag system",
      "Implement copy to clipboard functionality",
      "Create snippet editing",
      "Add delete functionality",
      "Implement favorites system",
      "Create snippet sharing links",
      "Add syntax language selection",
      "Deploy application",
    ],
    technologies: [
      "React",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Prism.js or Highlight.js",
      "localStorage or backend database",
    ],
    keyFeatures: [
      "Snippet creation with syntax highlighting",
      "Search functionality",
      "Category/tag system",
      "Copy to clipboard",
      "Favorites",
      "Snippet sharing",
      "Edit and delete",
      "Multiple language support",
    ],
    expectedOutcome:
      "A functional code snippet manager where developers can organize, search, and share code snippets with proper syntax highlighting.",
    realWorldImpact:
      "Developer tools are highly sought after. This project demonstrates your understanding of developer workflows and the problems developers face daily.",
  },
];
