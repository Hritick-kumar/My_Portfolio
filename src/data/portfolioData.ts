import type { 
  SocialLink, 
  QuickPillar, 
  ProjectCaseStudy, 
  ExperienceItem, 
  SkillCategory, 
  EngineeringStep, 
  AiNativeArea 
} from '../types';

export const PERSONAL_INFO = {
  name: "Hritick Kumar",
  title: "Software Analyst · Full-Stack Developer · MERN · AI/ML",
  headline: "Hi, I'm Hritick Kumar. I build scalable web products and intelligent software.",
  subheadline: "I'm a Full-Stack Developer focused on building production-ready web applications, scalable APIs, payment systems, integrations, and AI-powered solutions using modern JavaScript and cloud technologies.",
  status: "Open to Full-Stack / Software Engineering opportunities",
  email: "reachhritick@gmail.com",
  githubUrl: "https://github.com/Hritick-kumar/",
  linkedinUrl: "https://www.linkedin.com/in/hritick-kumar-",
  resumeUrl: "https://drive.google.com/file/d/1zJG4RvPtNjCeQcPdxpSDqaSaDb_1RF5S/view?usp=sharing",
  location: "India",
  avatarUrl: "/profile.jpg",
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    url: PERSONAL_INFO.githubUrl,
    icon: "Github",
    handle: "github.com/TODO",
  },
  {
    name: "LinkedIn",
    url: PERSONAL_INFO.linkedinUrl,
    icon: "Linkedin",
    handle: "linkedin.com/in/TODO",
  },
  {
    name: "Email",
    url: `mailto:${PERSONAL_INFO.email}`,
    icon: "Mail",
    handle: PERSONAL_INFO.email,
  },
];

export const QUICK_PILLARS: QuickPillar[] = [
  {
    title: "Full-Stack Engineering",
    tagline: "End-to-end web applications",
    description: "Building complete web applications with React, Node.js, Express, databases and modern APIs.",
    icon: "Layers",
    skills: ["React", "TypeScript", "Node.js", "Express", "REST APIs"],
  },
  {
    title: "Backend & Integrations",
    tagline: "Robust APIs & third-party services",
    description: "Designing REST APIs, authentication systems, payment integrations, third-party APIs and business workflows.",
    icon: "Server",
    skills: ["REST Architecture", "OAuth / JWT", "Payment Gateways", "External Webhooks"],
  },
  {
    title: "Production Mindset",
    tagline: "Reliable cloud environments",
    description: "Experience working with AWS, EC2, PM2, Nginx, deployment workflows, debugging and production systems.",
    icon: "ShieldCheck",
    skills: ["AWS EC2", "Nginx Reverse Proxy", "PM2 Process Manager", "Production Debugging"],
  },
  {
    title: "AI-Native Development",
    tagline: "Practical intelligent features",
    description: "Exploring practical AI/ML, LLM-powered applications, automation and integrating AI into real software products.",
    icon: "Sparkles",
    skills: ["LLM Integration", "RAG Pipelines", "NLP Models", "AI Assisted Engineering"],
  },
];

export const ABOUT_DATA = {
  summary: "I am a Software Analyst and Full-Stack Developer with practical experience building and maintaining production-oriented applications.",
  paragraphs: [
    "My primary expertise centers on the MERN stack (MongoDB, Express.js, React.js, Node.js), complemented by modern TypeScript, PostgreSQL, Prisma, Supabase, and Redis caching. I build reliable web apps where data flows cleanly from database schemas to client state.",
    "In production environments, I frequently tackle backend challenges: architecting resilient REST APIs, securing systems with JWT and OAuth flows, integrating multi-party payment architectures, and deploying onto containerized and cloud infrastructure (AWS EC2, Nginx, PM2, Docker).",
    "I am actively expanding into AI/ML and AI-native application development. Rather than treating artificial intelligence as theoretical, my focus is bridging backend engineering with LLMs, sentiment analysis, and intelligent automation to solve concrete user problems."
  ],
  stackHighlights: [
    "MongoDB", "Express.js", "React.js", "Node.js", "TypeScript", "PostgreSQL",
    "Prisma", "Supabase", "REST APIs", "JWT Auth", "OAuth", "Redis",
    "AWS", "Docker", "Payment Gateways", "Third-party APIs"
  ]
};

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: "Software Analyst",
    company: "Smart Data Enterprises",
    location: "Full-Time",
    period: "January 2025 — Present",
    startDate: "Jan 2025",
    status: "Active",
    highlights: [
      "Engineered full-stack features and high-throughput REST APIs utilizing the MERN stack (MongoDB, Express, React, Node.js) across production systems.",
      "Spearheaded complex payment platform integrations including PayPal PPCP marketplace flows, merchant onboarding referrals, and seamless digital wallet options (Google Pay, Apple Pay).",
      "Designed and optimized database schemas, indices, and queries to guarantee high availability and sub-100ms backend response times.",
      "Implemented enterprise-grade authentication, authorization mechanisms (JWT, OAuth), and token lifecycle managers.",
      "Configured and maintained production deployments on AWS EC2, configuring Nginx reverse proxying, SSL certificates, and PM2 runtime process management.",
      "Analyzed technical requirements, diagnosed production edge cases, and collaborated cross-functionally across mobile, web, and administrative dashboards."
    ],
    techStack: [
      "React", "Node.js", "Express.js", "MongoDB", "TypeScript", 
      "AWS EC2", "Nginx", "PM2", "PayPal PPCP", "REST APIs", "JWT"
    ]
  }
];

export const PROJECTS_DATA: ProjectCaseStudy[] = [
  {
    id: "tip-app",
    title: "Tip App / Multi-Tenant Payment Platform",
    category: "Fintech & Payments Architecture",
    badge: "Production System",
    shortDesc: "Production-oriented marketplace tipping and payment platform featuring partner merchant onboarding, multi-party fee splits, and digital wallets.",
    problem: "Venues, service staff, and consumers required an instantaneous, friction-free way to tip and process transactions without manual reconciliation, while ensuring complete regulatory compliance and automated marketplace commission splits.",
    solution: "Engineered an end-to-end payment platform powered by PayPal Complete Payments (PPCP) marketplace architecture. Implemented merchant partner referral onboarding, PayPal-Auth-Assertion header generation for seamless on-behalf-of transactions, and multi-wallet checkouts (Apple Pay, Google Pay).",
    myContribution: [
      "Architected PayPal PPCP partner referral onboarding with real-time merchant status synchronization via Webhooks.",
      "Implemented server-side security flows utilizing PayPal-Auth-Assertion headers for compliant marketplace captures.",
      "Built multi-party fee calculation algorithms dynamically calculating platform commissions and merchant net payouts.",
      "Integrated native browser checkout methods including Apple Pay and Google Pay via digital wallet payment tokens.",
      "Constructed admin reconciliation dashboards for transaction inspection, capture disputes, and balance audits."
    ],
    technicalHighlights: [
      "PayPal PPCP Partner Referrals & Webhooks",
      "PayPal-Auth-Assertion secure delegate headers",
      "Real-time merchant balance & status synchronization",
      "Apple Pay & Google Pay direct tokenization",
      "Configurable commission fee calculation engine",
      "Idempotent payment creation and capture pipelines"
    ],
    architectureSteps: [
      { from: "Customer / Mobile", to: "Checkout UI", label: "Select Tip / Order", detail: "Calculates tip tier & total" },
      { from: "Checkout UI", to: "Node.js API", label: "Create Order Request", detail: "Validates merchant ID & fee splits" },
      { from: "Node.js API", to: "PayPal PPCP", label: "Auth-Assertion Capture", detail: "Executes capture on behalf of merchant" },
      { from: "PayPal PPCP", to: "Merchant Account", label: "Instant Balance Sync", detail: "Transfers funds less platform commission" },
    ],
    techStack: ["Node.js", "Express", "React", "MongoDB", "PayPal PPCP", "Google Pay", "Apple Pay", "REST APIs"],
    featured: true,
    type: "production"
  },
  {
    id: "calm-trade",
    title: "CalmTrade / Trading Analytics Engine",
    category: "Financial Analytics & Data Synchronization",
    badge: "Production System",
    shortDesc: "Sophisticated multi-broker trading and portfolio analytics platform solving distributed trade synchronization and FIFO matching challenges.",
    problem: "Active retail traders struggle with fragmented portfolios across disparate brokerages, suffering from delayed trade reporting, inaccurate cost basis calculations, and complex multi-tax-lot matching.",
    solution: "Engineered a robust financial synchronization platform utilizing the SnapTrade unified API, backed by an incremental sync engine, background cron workers, and a strict FIFO (First-In, First-Out) trade matching engine calculating realized P&L across trading sessions.",
    myContribution: [
      "Integrated SnapTrade API for multi-broker authorization, account aggregation, and execution streaming.",
      "Designed dual-phase synchronization: low-latency incremental polling paired with scheduled full reconciliation jobs.",
      "Built an in-house FIFO trade matching algorithm that traces buy/sell execution lots to compute realized profit/loss.",
      "Engineered automated cron recovery jobs capable of resuming sync pipelines gracefully after broker rate limits or API timeouts.",
      "Created dynamic portfolio visualization dashboards showing equity curves, win-rate distributions, and historical sessions."
    ],
    technicalHighlights: [
      "SnapTrade multi-brokerage authentication & syncing",
      "FIFO lot matching engine for precise realized P&L",
      "Incremental sync with timestamp cursor tracking",
      "Background cron tasks with exponential backoff retry",
      "High-integrity MongoDB transaction records",
      "Zero-assumptions error boundary for inconsistent financial records"
    ],
    architectureSteps: [
      { from: "Brokerages", to: "SnapTrade API", label: "Execution Stream", detail: "Aggregates raw trade executions" },
      { from: "SnapTrade API", to: "Sync Worker (Cron)", label: "Incremental Sync", detail: "Fetches new trade deltas by cursor" },
      { from: "Sync Worker", to: "FIFO Matching Engine", label: "Lot Dissection", detail: "Matches buys to sells, computes realized P&L" },
      { from: "FIFO Engine", to: "MongoDB & Analytics UI", label: "Portfolio Updates", detail: "Renders live trade session curves" },
    ],
    techStack: ["Node.js", "MongoDB", "React", "SnapTrade API", "TypeScript", "Cron Schedulers", "Express"],
    featured: true,
    type: "production"
  },
  {
    id: "ai-nlp-sentiment",
    title: "AI / NLP Sentiment Intelligence System",
    category: "Machine Learning & Natural Language Processing",
    badge: "AI Application",
    shortDesc: "End-to-end Natural Language Processing application analyzing sentiment polarity, subjectivity, and emotional nuances using trained ML models.",
    problem: "Customer feedback, product reviews, and unstructured qualitative text streams are too voluminous for manual review, causing product teams to miss emerging satisfaction signals and critical product friction points.",
    solution: "Developed an interactive NLP pipeline utilizing Python, Scikit-Learn/NLTK, and Streamlit. The system preprocesses unstructured text, vectorizes tokens using TF-IDF, and runs an optimized classifier to generate real-time sentiment classifications with confidence scoring.",
    myContribution: [
      "Built text tokenization, lemmatization, stop-word filtering, and n-gram feature extraction pipelines in Python.",
      "Trained and evaluated multiple classification models (Logistic Regression, Naive Bayes, Linear SVM) to optimize accuracy and F1 score.",
      "Created an interactive user interface using Streamlit with real-time text parsing, emotion density breakdown, and sentiment breakdown.",
      "Packaged the inference pipeline into clean callable modules ready for API gateway integration."
    ],
    technicalHighlights: [
      "End-to-end Python NLP preprocessing pipeline",
      "Trained Machine Learning classification models",
      "Confidence scoring & polarity metric calculation",
      "Interactive Streamlit application interface",
      "Token frequency and emotional context extraction",
      "Modular design primed for microservice deployment"
    ],
    architectureSteps: [
      { from: "Raw Text Input", to: "NLP Pipeline", label: "Tokenize & Clean", detail: "Removes stop-words & lemmatizes" },
      { from: "NLP Pipeline", to: "TF-IDF Vectorizer", label: "Feature Extraction", detail: "Extracts n-gram weight matrices" },
      { from: "Vector Matrix", to: "ML Classifier", label: "Inference Model", detail: "Predicts sentiment & confidence" },
      { from: "ML Classifier", to: "Streamlit UI / API", label: "Results Visualizer", detail: "Renders polarity, gauge & breakdown" },
    ],
    techStack: ["Python", "NLP", "Machine Learning", "Scikit-Learn", "NLTK", "Streamlit", "Pandas"],
    featured: true,
    type: "production"
  },
  {
    id: "routepilot",
    title: "RoutePilot / Intelligent Logistics Platform",
    category: "Logistics & Workflow Automation",
    badge: "Product / MVP",
    shortDesc: "Scalable logistics planning and fleet shipment dispatch system designed for real-time routing optimization and modern dispatch dashboards.",
    problem: "Small-to-medium logistics dispatchers handle dispatching across disconnected spreadsheets, lacking structured shipment workflows, real-time status visibility, and automated route leg coordination.",
    solution: "Architected a modern logistics platform MVP providing interactive dispatch boards, stop sequence planning, automated shipment status lifecycles, and a clean, high-density operations dashboard designed for future multi-region routing expansion.",
    myContribution: [
      "Structured the core domain model for shipments, legs, carriers, and depot nodes.",
      "Designed a responsive dispatch control center in React and Tailwind CSS with instant filtering and drag-and-drop workflow status shifts.",
      "Implemented RESTful service endpoints with Node.js and Express to manage shipment manifests and transit updates.",
      "Engineered clean state synchronization patterns ensuring dispatchers maintain an up-to-date picture of in-transit cargo."
    ],
    technicalHighlights: [
      "Modular logistics workflow & shipment state machine",
      "Interactive dispatcher operations console",
      "Real-time stop sequencing & route leg representation",
      "Extensible architecture ready for international expansion",
      "Fast query indexing for high-volume shipment lookups"
    ],
    architectureSteps: [
      { from: "Dispatcher Console", to: "API Gateway", label: "Create Shipment", detail: "Registers cargo, weight & destinations" },
      { from: "API Gateway", to: "Route Engine", label: "Sequence Optimization", detail: "Sorts depot drops by priority" },
      { from: "Route Engine", to: "Database Store", label: "Persist Manifest", detail: "Stores immutable shipment logs" },
      { from: "Database Store", to: "Fleet Dashboard", label: "Live Tracking", detail: "Visualizes cargo lifecycle stages" },
    ],
    techStack: ["React", "TypeScript", "Node.js", "Express", "Tailwind CSS", "REST APIs", "MongoDB"],
    featured: true,
    type: "mvp"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Frontend Development",
    description: "Building responsive, accessible, high-performance web interfaces with modern reactive patterns.",
    icon: "Layout",
    skills: [
      { name: "React", focus: true },
      { name: "TypeScript", focus: true },
      { name: "JavaScript (ES6+)", focus: true },
      { name: "Vite", focus: false },
      { name: "Next.js", focus: false },
      { name: "Tailwind CSS", focus: true },
      { name: "Redux / State Management", focus: false },
      { name: "HTML5 / Accessible UI", focus: false },
    ]
  },
  {
    category: "Backend Engineering",
    description: "Designing scalable server architectures, resilient APIs, and secure authentication flows.",
    icon: "Server",
    skills: [
      { name: "Node.js", focus: true },
      { name: "Express.js", focus: true },
      { name: "REST APIs Architecture", focus: true },
      { name: "JWT Authentication", focus: true },
      { name: "OAuth 2.0", focus: true },
      { name: "WebSockets", focus: false },
      { name: "Microservices Patterns", focus: false },
      { name: "API Rate Limiting", focus: false },
    ]
  },
  {
    category: "Databases & Storage",
    description: "Designing normalized and document schemas, indexing for high performance, and managing data consistency.",
    icon: "Database",
    skills: [
      { name: "MongoDB", focus: true },
      { name: "PostgreSQL", focus: true },
      { name: "Prisma ORM", focus: false },
      { name: "Supabase", focus: false },
      { name: "Redis Caching", focus: true },
      { name: "Aggregation Pipelines", focus: true },
      { name: "Schema Migration", focus: false },
    ]
  },
  {
    category: "Cloud, DevOps & Production",
    description: "Deploying and managing production workloads with high uptime, monitoring, and automated process recovery.",
    icon: "Cloud",
    skills: [
      { name: "AWS (EC2, S3)", focus: true },
      { name: "ECS / Fargate", focus: false },
      { name: "Nginx Reverse Proxy", focus: true },
      { name: "PM2 Process Manager", focus: true },
      { name: "Docker", focus: true },
      { name: "Cloudinary", focus: false },
      { name: "Git / GitHub Actions", focus: true },
      { name: "Production Debugging", focus: true },
    ]
  },
  {
    category: "Payments & Integrations",
    description: "Connecting mission-critical external APIs, financial gateways, and real-time webhook listeners.",
    icon: "CreditCard",
    skills: [
      { name: "PayPal Complete Payments (PPCP)", focus: true },
      { name: "Google Pay API", focus: true },
      { name: "Apple Pay Web Integration", focus: true },
      { name: "Stripe", focus: false },
      { name: "SnapTrade Brokerage API", focus: true },
      { name: "Webhook Listeners & Idempotency", focus: true },
      { name: "Third-party REST Integrations", focus: true },
    ]
  },
  {
    category: "AI, ML & Modern Toolkit",
    description: "Combining software engineering foundations with intelligent models, LLM APIs, and AI-assisted tooling.",
    icon: "Cpu",
    skills: [
      { name: "Python", focus: true },
      { name: "NLP (Natural Language Processing)", focus: true },
      { name: "Machine Learning (Scikit-Learn)", focus: true },
      { name: "LLM APIs (OpenAI, Anthropic, Gemini)", focus: true },
      { name: "RAG & Vector Embeddings", focus: false },
      { name: "Streamlit", focus: false },
      { name: "AI-Assisted Engineering", focus: true },
    ]
  }
];

export const ENGINEERING_APPROACH: EngineeringStep[] = [
  {
    step: "01",
    title: "Understand",
    description: "Unpack core business requirements, user expectations, and system constraints before writing a single line of code.",
    deliverables: ["Domain modeling", "User journey mapping", "Constraint analysis"]
  },
  {
    step: "02",
    title: "Design",
    description: "Design clean REST interfaces, relational/document database schemas, and data flow contracts.",
    deliverables: ["API specifications", "DB ERD / Schema models", "Error taxonomy"]
  },
  {
    step: "03",
    title: "Build",
    description: "Implement clean, modular frontend components and resilient backend controllers with strict typing.",
    deliverables: ["TypeScript codebase", "Express route controllers", "Reusable UI components"]
  },
  {
    step: "04",
    title: "Integrate",
    description: "Connect payment gateways, external brokers, and third-party services with safe webhook handlers and retries.",
    deliverables: ["Webhook idempotency", "Auth assertions", "Third-party SDK integration"]
  },
  {
    step: "05",
    title: "Test & Validate",
    description: "Probe edge cases, race conditions, network failures, and inconsistent payload responses.",
    deliverables: ["Payload validation", "Edge-case debugging", "Performance audits"]
  },
  {
    step: "06",
    title: "Deploy & Monitor",
    description: "Ship to production via AWS EC2, configured behind Nginx with PM2 daemon process monitoring and SSL.",
    deliverables: ["AWS infrastructure", "Nginx routing config", "Process uptime supervision"]
  }
];

export const AI_NATIVE_AREAS: AiNativeArea[] = [
  {
    title: "LLM-Powered Application Architecture",
    description: "Augmenting classic MERN architectures with generative language models, function calling, and structured JSON outputs.",
    icon: "Bot",
    applications: [
      "Context-aware workflow automation",
      "Dynamic data summarization & extraction",
      "Natural language querying over SQL/MongoDB"
    ]
  },
  {
    title: "Practical AI & NLP Services",
    description: "Deploying trained ML models for sentiment analysis, classification, and text entity extraction as backend microservices.",
    icon: "Network",
    applications: [
      "Customer sentiment anomaly detection",
      "Document entity extraction",
      "Real-time feedback classification"
    ]
  },
  {
    title: "RAG & Knowledge Retrieval",
    description: "Grounding large language models with vector embeddings and custom domain context to eliminate hallucinations.",
    icon: "Database",
    applications: [
      "Vector search indexing",
      "Context chunking & retrieval pipelines",
      "Accurate domain knowledge assistants"
    ]
  },
  {
    title: "AI-Assisted Engineering Workflow",
    description: "Leveraging state-of-the-art AI tooling to accelerate architecture exploration, refactoring, and code review while keeping human engineering ownership.",
    icon: "Wand2",
    applications: [
      "Accelerated test case generation",
      "Fast API design prototyping",
      "Complex algorithmic debugging"
    ]
  }
];

export const AI_TOOLKIT = [
  { name: "Claude / Claude Code", role: "Architecture exploration, deep debugging, and codebase reasoning" },
  { name: "Google Antigravity", role: "Agentic software development workflows and pair programming" },
  { name: "Cursor / AI IDE", role: "Contextual inline code generation and fast refactoring" },
  { name: "ChatGPT & Gemini", role: "API research, conceptual ideation, and documentation drafting" },
];
