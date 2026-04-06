export type Difficulty = "Beginner" | "Intermediate" | "Advanced";
export type Category =
  | "Web Development"
  | "Mobile"
  | "AI/ML"
  | "Backend"
  | "Desktop"
  | "Data Science"
  | "Cloud"
  | "DevOps"
  | "Cybersecurity"
  | "Game Development"
  | "Blockchain"
  | "IoT"
  | "AR/VR"
  | "Automation"
  | "UI/UX"
  | "Open Source";

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

type AdditionalProjectSeed = {
  title: string;
  description: string;
  difficulty: Difficulty;
  category: Category;
  focus: string;
};

const categoryTechnologies: Record<Category, string[]> = {
  "Web Development": ["React", "TypeScript", "Vite", "Tailwind CSS", "REST APIs"],
  Mobile: ["React Native", "TypeScript", "Expo", "SQLite", "Push Notifications"],
  "AI/ML": ["Python", "TensorFlow", "PyTorch", "Pandas", "FastAPI"],
  Backend: ["Node.js", "Express", "PostgreSQL", "Redis", "Docker"],
  Desktop: ["Electron", "TypeScript", "SQLite", "Node.js", "IPC"],
  "Data Science": ["Python", "Pandas", "NumPy", "Matplotlib", "Jupyter"],
  Cloud: ["AWS", "Terraform", "Docker", "Kubernetes", "GitHub Actions"],
  DevOps: ["Docker", "Kubernetes", "GitHub Actions", "Prometheus", "Grafana"],
  Cybersecurity: ["OWASP", "Burp Suite", "Nmap", "Python", "SIEM"],
  "Game Development": ["Unity", "C#", "Godot", "Blender", "Game Physics"],
  Blockchain: ["Solidity", "Hardhat", "Ethers.js", "IPFS", "TypeScript"],
  IoT: ["MQTT", "Raspberry Pi", "Arduino", "Node.js", "InfluxDB"],
  "AR/VR": ["Unity", "WebXR", "Three.js", "C#", "Spatial Audio"],
  Automation: ["Python", "Playwright", "Selenium", "Cron", "APIs"],
  "UI/UX": ["Figma", "Design Systems", "Accessibility", "React", "Storybook"],
  "Open Source": ["Git", "GitHub", "TypeScript", "CI/CD", "Testing"],
};

const additionalProjectSeeds: AdditionalProjectSeed[] = [
  { title: "Cloud Cost Optimizer Dashboard", description: "Track and reduce cloud spend with budgets, anomaly alerts, and service-level insights.", difficulty: "Intermediate", category: "Cloud", focus: "cost governance" },
  { title: "Kubernetes Deployment Health Monitor", description: "Visualize pod, deployment, and service health across namespaces with historical uptime trends.", difficulty: "Advanced", category: "DevOps", focus: "cluster observability" },
  { title: "SOC Incident Triage Assistant", description: "Prioritize security alerts and recommend next actions using severity and context scoring.", difficulty: "Advanced", category: "Cybersecurity", focus: "incident response" },
  { title: "2D Roguelike Dungeon Crawler", description: "Design a procedural dungeon game with enemies, loot, and progression mechanics.", difficulty: "Intermediate", category: "Game Development", focus: "procedural gameplay" },
  { title: "Smart Home Energy Analytics", description: "Analyze appliance usage from IoT sensors and suggest efficiency improvements.", difficulty: "Intermediate", category: "IoT", focus: "energy intelligence" },
  { title: "Design System Token Manager", description: "Build a UI tool to manage colors, spacing, typography, and export tokens for apps.", difficulty: "Beginner", category: "UI/UX", focus: "design consistency" },
  { title: "Open Source Contribution Tracker", description: "Track pull requests, review cycles, and contribution streaks across repositories.", difficulty: "Beginner", category: "Open Source", focus: "community contribution" },
  { title: "Decentralized Voting DApp", description: "Create a secure voting application with wallet authentication and immutable vote records.", difficulty: "Advanced", category: "Blockchain", focus: "on-chain governance" },
  { title: "CI Pipeline Failure Analyzer", description: "Summarize failing CI jobs and surface likely causes with remediation suggestions.", difficulty: "Intermediate", category: "DevOps", focus: "pipeline reliability" },
  { title: "AR Interior Furniture Preview", description: "Place virtual furniture in real rooms to preview scale and style before purchase.", difficulty: "Advanced", category: "AR/VR", focus: "spatial shopping" },
  { title: "Automated Invoice Processing Bot", description: "Extract fields from invoices and sync validated data into accounting systems.", difficulty: "Intermediate", category: "Automation", focus: "document automation" },
  { title: "API Security Testing Workbench", description: "Test APIs against common vulnerabilities and generate actionable security reports.", difficulty: "Advanced", category: "Cybersecurity", focus: "API hardening" },
  { title: "Serverless Image Moderation Pipeline", description: "Detect inappropriate media uploads using event-driven cloud functions and AI models.", difficulty: "Advanced", category: "Cloud", focus: "serverless moderation" },
  { title: "Browser-Based 3D Product Configurator", description: "Allow users to customize products in 3D with materials, colors, and live pricing.", difficulty: "Advanced", category: "Web Development", focus: "interactive commerce" },
  { title: "Gamified Habit Tracker Mobile App", description: "Track habits with streaks, levels, and rewards to boost long-term consistency.", difficulty: "Beginner", category: "Mobile", focus: "behavior design" },
  { title: "Edge Log Aggregation Service", description: "Collect distributed logs from edge nodes and centralize searchable observability data.", difficulty: "Advanced", category: "Backend", focus: "distributed logging" },
  { title: "AI Resume Feedback Coach", description: "Assess resume quality and suggest targeted improvements for role-specific applications.", difficulty: "Intermediate", category: "AI/ML", focus: "career optimization" },
  { title: "Personal Knowledge Graph", description: "Organize notes as connected ideas with backlink traversal and semantic search.", difficulty: "Intermediate", category: "Data Science", focus: "knowledge discovery" },
  { title: "Desktop Password Vault", description: "Build an encrypted local vault for credentials with secure search and tagging.", difficulty: "Advanced", category: "Desktop", focus: "local security" },
  { title: "Realtime Pair Programming Room", description: "Enable shared editing, chat, and terminal streams for collaborative coding sessions.", difficulty: "Advanced", category: "Web Development", focus: "live collaboration" },
  { title: "Container Drift Detection Tool", description: "Detect configuration drift between desired and running container environments.", difficulty: "Intermediate", category: "DevOps", focus: "infrastructure compliance" },
  { title: "Fraud Pattern Detector", description: "Identify suspicious transaction behavior using anomaly detection and explainable signals.", difficulty: "Advanced", category: "AI/ML", focus: "risk analytics" },
  { title: "Web Accessibility Audit Dashboard", description: "Run accessibility scans and track WCAG compliance over time for your sites.", difficulty: "Intermediate", category: "UI/UX", focus: "inclusive design" },
  { title: "IoT Fleet Firmware Rollout Manager", description: "Schedule, monitor, and rollback firmware updates for device fleets safely.", difficulty: "Advanced", category: "IoT", focus: "device operations" },
  { title: "Contributor Onboarding Portal", description: "Create guided issue workflows and starter tasks for new open source contributors.", difficulty: "Beginner", category: "Open Source", focus: "maintainer workflow" },
  { title: "NFT Collection Analytics Studio", description: "Analyze volume, holder concentration, and rarity trends for NFT collections.", difficulty: "Intermediate", category: "Blockchain", focus: "market intelligence" },
  { title: "Cloud Architecture Diagram Generator", description: "Generate cloud architecture diagrams from simple YAML definitions.", difficulty: "Beginner", category: "Cloud", focus: "architecture documentation" },
  { title: "Release Notes Auto Writer", description: "Create semantic release notes from commit history and pull request labels.", difficulty: "Beginner", category: "Automation", focus: "release automation" },
  { title: "Unity Parkour Prototype", description: "Build a first-person movement system with wall-running and vault mechanics.", difficulty: "Intermediate", category: "Game Development", focus: "movement systems" },
  { title: "Threat Modeling Workspace", description: "Map trust boundaries, assets, and attack paths for product security planning.", difficulty: "Intermediate", category: "Cybersecurity", focus: "secure design" },
  { title: "VR Team Retrospective Room", description: "Host sprint retrospectives in immersive VR spaces with collaborative boards.", difficulty: "Advanced", category: "AR/VR", focus: "immersive teamwork" },
  { title: "MLOps Experiment Registry", description: "Track model runs, metrics, artifacts, and deployment readiness in one place.", difficulty: "Advanced", category: "DevOps", focus: "model lifecycle" },
  { title: "Low-Code Workflow Builder", description: "Build drag-and-drop workflow automation with triggers, conditions, and actions.", difficulty: "Advanced", category: "Automation", focus: "workflow orchestration" },
  { title: "Mobile Offline Field Survey App", description: "Collect field data offline with sync support and geotagging.", difficulty: "Intermediate", category: "Mobile", focus: "offline data capture" },
  { title: "Data Catalog Explorer", description: "Create searchable metadata catalogs for datasets, owners, and lineage.", difficulty: "Intermediate", category: "Data Science", focus: "data governance" },
  { title: "Cloud Backup Policy Engine", description: "Define, validate, and enforce backup policies across cloud workloads.", difficulty: "Advanced", category: "Cloud", focus: "resilience policy" },
  { title: "Desktop Markdown Research Notebook", description: "Create a local-first research notebook with tags, links, and preview mode.", difficulty: "Beginner", category: "Desktop", focus: "research workflow" },
  { title: "Headless Commerce API", description: "Implement product, cart, and checkout APIs for storefront integrations.", difficulty: "Advanced", category: "Backend", focus: "commerce backend" },
  { title: "Skill Tree Learning Platform", description: "Design a progression-based platform where users unlock projects by milestones.", difficulty: "Intermediate", category: "Web Development", focus: "learning progression" },
  { title: "Privacy Consent Management Platform", description: "Manage cookie consent records and compliance workflows for global regulations.", difficulty: "Advanced", category: "Cybersecurity", focus: "privacy compliance" },
  { title: "Token-Gated Community Hub", description: "Restrict access to exclusive content based on on-chain wallet holdings.", difficulty: "Intermediate", category: "Blockchain", focus: "token access" },
  { title: "Drone Telemetry Dashboard", description: "Stream and visualize drone metrics including altitude, battery, and GPS pathing.", difficulty: "Advanced", category: "IoT", focus: "telemetry monitoring" },
  { title: "Prompt Library and Evaluator", description: "Store AI prompts, evaluate outputs, and compare prompt performance by use case.", difficulty: "Intermediate", category: "AI/ML", focus: "prompt engineering" },
  { title: "SaaS Trial Conversion Funnel Analyzer", description: "Track onboarding events and identify friction points in trial conversion journeys.", difficulty: "Beginner", category: "Data Science", focus: "product analytics" },
  { title: "Open Source Maintainer Dashboard", description: "Monitor issue velocity, stale threads, and contributor response times.", difficulty: "Intermediate", category: "Open Source", focus: "repo health" },
  { title: "In-Game Economy Simulator", description: "Model virtual item pricing, sinks, and inflation to balance a game economy.", difficulty: "Advanced", category: "Game Development", focus: "economy balancing" },
  { title: "Design Critique Collaboration Board", description: "Build a shared board for async design feedback with threaded annotations.", difficulty: "Beginner", category: "UI/UX", focus: "feedback workflow" },
  { title: "Automated QA Regression Runner", description: "Run scheduled regression suites and publish trend reports with flaky test flags.", difficulty: "Intermediate", category: "Automation", focus: "quality assurance" },
  { title: "Container Security Baseline Scanner", description: "Scan container images for CVEs and policy violations before deployment.", difficulty: "Advanced", category: "DevOps", focus: "supply chain security" },
  { title: "Cloud Secrets Rotation Service", description: "Automate secret rotation workflows with audit logs and expiry enforcement.", difficulty: "Advanced", category: "Cloud", focus: "credential hygiene" },
  { title: "XR Museum Tour Guide", description: "Create guided AR/VR museum tours with narration and interactive points of interest.", difficulty: "Intermediate", category: "AR/VR", focus: "immersive education" },
];

const additionalProjects: Project[] = additionalProjectSeeds.map((seed, index) => {
  const technologies = categoryTechnologies[seed.category];

  return {
    id: String(projects.length + index + 1),
    title: seed.title,
    description: seed.description,
    difficulty: seed.difficulty,
    category: seed.category,
    overview:
      `${seed.title} is a focused build that helps you practice ${seed.focus} through practical implementation and measurable outcomes.`,
    whyUseful:
      `This project is useful because it strengthens hands-on skills in ${seed.category} while producing a portfolio-ready artifact aligned with real team workflows.`,
    stepByStep: [
      `Define clear requirements and success metrics for ${seed.title}`,
      "Design architecture and choose tooling for fast iteration",
      "Build the first working slice with core functionality",
      "Add data validation, error handling, and user feedback",
      "Implement filtering/search or workflow controls where relevant",
      "Improve performance, accessibility, and developer ergonomics",
      "Add meaningful tests and document key technical decisions",
      "Prepare deployment and monitor outcomes after release",
    ],
    technologies,
    keyFeatures: [
      "Production-minded architecture",
      "Clear user workflow",
      "Performance and reliability considerations",
      "Observability and reporting",
      "Scalable data model",
      "Testing-friendly structure",
    ],
    expectedOutcome:
      `You will complete a deployable ${seed.category} project with practical features, documentation, and a strong implementation story for interviews.`,
    realWorldImpact:
      `By finishing this project, you demonstrate execution depth in ${seed.category} and the ability to ship software that solves concrete problems.`,
  };
});

projects.push(...additionalProjects);

const extraProjectPrefixes = [
  "Scalable",
  "Intelligent",
  "Realtime",
  "Modular",
  "Autonomous",
  "Interactive",
  "Secure",
  "Adaptive",
  "Collaborative",
  "Next-Gen",
];

const extraProjectDomains = [
  "Analytics",
  "Monitoring",
  "Automation",
  "Collaboration",
  "Security",
  "Optimization",
  "Orchestration",
  "Simulation",
  "Discovery",
  "Intelligence",
];

const extraProjectProducts = [
  "Platform",
  "Hub",
  "Dashboard",
  "Engine",
  "Workbench",
  "Studio",
  "Portal",
  "Toolkit",
  "Assistant",
  "Manager",
];

const extraProjectCategories: Category[] = [
  "Web Development",
  "Mobile",
  "AI/ML",
  "Backend",
  "Desktop",
  "Data Science",
  "Cloud",
  "DevOps",
  "Cybersecurity",
  "Game Development",
  "Blockchain",
  "IoT",
  "AR/VR",
  "Automation",
  "UI/UX",
  "Open Source",
];

const extraProjectDifficulties: Difficulty[] = ["Beginner", "Intermediate", "Advanced"];
const extraProjectTotal = 100;

const generatedExtraProjects: Project[] = Array.from({ length: extraProjectTotal }, (_, index) => {
  const prefix = extraProjectPrefixes[index % extraProjectPrefixes.length];
  const domain = extraProjectDomains[Math.floor(index / extraProjectPrefixes.length) % extraProjectDomains.length];
  const product = extraProjectProducts[Math.floor(index / (extraProjectPrefixes.length * extraProjectDomains.length)) % extraProjectProducts.length];
  const category = extraProjectCategories[index % extraProjectCategories.length];
  const difficulty = extraProjectDifficulties[index % extraProjectDifficulties.length];
  const title = `${prefix} ${domain} ${product} ${index + 1}`;
  const technologies = categoryTechnologies[category];

  return {
    id: String(projects.length + index + 1),
    title,
    description:
      `Build ${title.toLowerCase()} to solve practical ${domain.toLowerCase()} problems with a production-ready architecture.`,
    difficulty,
    category,
    overview:
      `${title} helps you practice applied engineering by turning ${category.toLowerCase()} concepts into an end-to-end project with clear outcomes.`,
    whyUseful:
      `This project improves your ability to ship reliable ${category.toLowerCase()} solutions while balancing architecture, usability, and maintainability.`,
    stepByStep: [
      `Define scope and success metrics for ${title}`,
      "Sketch data flow and core user interactions",
      "Implement the first functional version",
      "Add validation, observability, and edge-case handling",
      "Improve performance and refine the experience",
      "Document architecture and release notes",
      "Create tests for critical workflows",
      "Prepare deployment and iterate with feedback",
    ],
    technologies,
    keyFeatures: [
      "Clear and scalable architecture",
      "Structured workflows and controls",
      "Performance-aware implementation",
      "Meaningful observability signals",
      "Reusable and testable modules",
      "Deployment-ready setup",
    ],
    expectedOutcome:
      `A complete ${category.toLowerCase()} project demonstrating implementation depth, clean structure, and real portfolio value.`,
    realWorldImpact:
      `Completing this project proves you can deliver measurable outcomes and collaborate effectively on modern software systems.`,
  };
});

projects.push(...generatedExtraProjects);
