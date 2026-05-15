export const nav = ["Home", "About", "Projects", "Experience", "Awards", "Contact"];

export const stats = [
    { label: "Years Experience", value: "10+" },
    { label: "Projects Completed", value: "50+" },
    { label: "Team Members Led", value: "20+" },
    { label: "Leadership Roles", value: "5" },
];

export const socialLinks = [
    { name: "LinkedIn", url: "https://linkedin.com/in/asif4347", type: "icon" },
    { name: "GitHub", url: "https://github.com/asif4347", type: "icon" },
    { name: "Upwork", url: "https://www.upwork.com/freelancers/asif4347", type: "img", img: "/assets/upwork.png" },
    { name: "Fiverr", url: "https://fiverr.com/m_asif_", type: "img", img: "/assets/fiverr.png" },
    { name: "Twitter", url: "https://twitter.com/asif4347", type: "icon" },
    { name: "Instagram", url: "https://www.instagram.com/m.asif_", type: "icon" },
];

export const skillCategories = [
    {
        title: "Backend Development",
        emoji: "⚙️",
        skills: ["Python (Django, Flask, FastAPI)", "Node.js & Express.js", "RESTful & GraphQL APIs", "Microservices Architecture", "Celery, Redis, RabbitMQ"],
    },
    {
        title: "Frontend Development",
        emoji: "🖥️",
        skills: ["React.js & Next.js", "Vue.js & Angular", "TypeScript & JavaScript (ES6+)", "HTML5 & CSS3", "Responsive Design"],
    },
    {
        title: "AI & Automation",
        emoji: "🤖",
        skills: ["OpenAI (GPT-4/4o)", "LangChain & RAG Pipelines", "Pinecone Vector Database", "n8n Workflow Automation", "Hume AI & Stable Diffusion"],
    },
    {
        title: "Cloud & DevOps",
        emoji: "☁️",
        skills: ["AWS (EC2, S3, Lambda, RDS)", "Google Cloud Platform", "Docker & Kubernetes", "CI/CD (GitHub Actions, Jenkins)", "DigitalOcean, Cloudflare"],
    },
    {
        title: "Databases",
        emoji: "🗄️",
        skills: ["PostgreSQL & MySQL", "MongoDB & DynamoDB", "Supabase & Neon", "Redis Caching", "Database Optimization"],
    },
    {
        title: "Mobile Development",
        emoji: "📱",
        skills: ["React Native", "FlutterFlow", "Expo CLI", "Mobile API Development", "Cross-platform Apps"],
    },
];

export const projects = [
    {
        name: "RubyOrbit (SmartLinkx)",
        tag: "AI-Powered CRM & Lead Management SaaS",
        description: "An intelligent CRM platform combining OpenAI-based virtual ISAs with lead engagement automation.",
        impact: "AI chat + call agents for automated lead engagement, RAG pipeline for knowledge-based responses, campaign builder with analytics dashboard.",
        stack: ["Python", "Django", "OpenAI GPT-4", "React", "Zapier"],
    },
    {
        name: "PocketISAi",
        tag: "AI ISA Mobile App for Real Estate",
        description: "Mobile app automating lead follow-ups through AI texting, human hand-off, and CRM integration.",
        impact: "Trained AI on 50,000+ real estate conversations. Integrated Twilio & Zapier for communications with campaign setup and lead pipeline management.",
        stack: ["Python", "Django", "GPT-4", "React Native", "Twilio"],
    },
    {
        name: "LimouCloud",
        tag: "AI-Enabled Reservation & Dispatch SaaS",
        description: "Cloud-based platform for limousine companies with integrated accounting, GPS tracking, and AI email-booking.",
        impact: "Role-based dashboard for all stakeholders. AI reads trip emails & auto-creates reservations with real-time GPS tracking.",
        stack: ["Django", "FlutterFlow", "Next.js", "Stripe", "AWS"],
    },
    {
        name: "Elite Med Labs Middleware",
        tag: "Healthcare Diagnostics Integration",
        description: "Middleware solution to automate HL7 message exchange between medical laboratories.",
        impact: "Automated lab result ingestion & processing with Twilio notifications for patients & doctors. Secure data pipelines & comprehensive dashboards.",
        stack: ["Python", "Django", "AWS S3", "Lambda", "Celery"],
    },
    {
        name: "Conversion Monster Integration",
        tag: "CRM Data Synchronization Platform",
        description: "Middleware solution automating CRM data synchronization across 35+ platforms.",
        impact: "Handles 300+ requests per second. Processes 5M+ daily records with real-time filtering and Dockerized infrastructure.",
        stack: ["Python", "Django", "Docker", "GCP", "Redis"],
    },
    {
        name: "AI Proposal Generator",
        tag: "Automation Platform",
        description: "Multi-agent proposal generation system for parsing RFPs, designing solutions, estimating cost, validating quality, and preparing client-ready proposals.",
        impact: "Converts messy sales inputs into structured, high-quality proposal workflows.",
        stack: ["n8n", "LLMs", "PostgreSQL", "RAG", "Google Drive"],
    },
    {
        name: "Wellgevity AI",
        tag: "AI-Powered Wellness & Longevity Platform",
        description: "Gamified health & life prediction app using AI to provide personalized wellness coaching, longevity tracking, and science-based micro-quests.",
        impact: "AI-calculated vitality score & biological age estimation. Average +12 point longevity score improvement in first month. 92% first-quest completion rate.",
        stack: ["Next.js", "Supabase", "OpenAI GPT-4", "React Native", "PostgreSQL"],
    },
    {
        name: "Facespace AI",
        tag: "AI-Based Image Classification",
        description: "AI-based system using AWS Rekognition to automatically classify images by recognizing faces.",
        impact: "Facial recognition for efficient categorization. Aids photographers in managing large image sets with scalable cloud storage.",
        stack: ["Python", "Django", "AWS Rekognition", "S3"],
    },
    {
        name: "Online Proctoring System",
        tag: "Real-time Exam Monitoring Platform",
        description: "Real-time proctoring system with cam, screen, and audio monitoring using WebRTC and AWS.",
        impact: "Real-time video, screen, and audio monitoring ensuring secure and reliable online examinations with academic integrity.",
        stack: ["Python", "Django", "WebRTC", "AWS S3", "EC2"],
    },
    {
        name: "Reviood",
        tag: "Social Platform for Food Enthusiasts",
        description: "A social platform for discovering, reviewing, and sharing insights about local food and eateries.",
        impact: "Interactive features for user engagement with reviews, ratings system, and geolocation for discovering nearby eateries.",
        stack: ["Python", "Django", "React", "PostgreSQL"],
    },
];

export const timeline = [
    {
        role: "Director of Software Engineering",
        company: "Datamart Inc. (California, USA)",
        period: "2024 — Present",
        points: [
            "Led 20+ engineers in AI, backend, and cloud operations",
            "Implemented rate cards, delivery systems, and DevOps pipelines",
            "Directed projects across real estate tech, telecommunication, and logistics",
            "Architected cloud migration using GCP, Kubernetes, and CI/CD pipelines",
            "Oversaw development of Ruby Orbit and SmartLinkx CRM solutions",
        ],
    },
    {
        role: "Project Manager (Software & DevOps)",
        company: "Axion Communications (USA)",
        period: "2024 — 2025",
        points: [
            "Improved on-time delivery rate by redesigning code review and GitHub tracking",
            "Managed CI/CD pipelines, cost analysis, and performance optimization",
            "Led global team to deliver cloud-native enterprise applications",
            "Implemented event-driven microservices architecture",
        ],
    },
    {
        role: "CTO",
        company: "A2K Solutions LLC",
        period: "2020 — 2024",
        points: [
            "Built a multinational software company delivering AI-powered products & SaaS platforms",
            "Managed teams across Pakistan, US, and UAE in AI, DevOps, and Web divisions",
            "Oversaw product design, client acquisition, and strategic partnerships",
            "Delivered 50+ projects including PocketISAi, LimouCloud, and Elite Med Labs",
        ],
    },
    {
        role: "Full Stack Developer",
        company: "Datamart Inc.",
        period: "2020 — 2022",
        points: [
            "Developed Conversion Monster Integration (CMI) to sync 35+ CRMs",
            "Handled 5M+ daily records using Django APIs and Dockerized infrastructure",
            "Achieved seamless data exchange, handling 300+ requests per second",
        ],
    },
    {
        role: "Web Developer",
        company: "Novatore Solutions",
        period: "2018 — 2020",
        points: [
            "Built responsive UIs, ERP integrations, and real-time dashboards",
            "Developed applications using Django and modern JavaScript frameworks",
        ],
    },
    {
        role: "MVC Web Developer & Trainer",
        company: "Trodo Soft",
        period: "2017 — 2018",
        points: [
            "Developed ASP.NET MVC applications",
            "Trained junior developers on best practices and modern development techniques",
        ],
    },
    {
        role: "Freelancer",
        company: "Fiverr / Upwork",
        period: "2015 — 2017",
        points: [
            "Worked on several freelance projects across various domains",
            "Collaborated with clients to define project scopes and deliverables",
        ],
    },
];

export const awards = [
    {
        emoji: "🏆",
        title: "Young Business Leader of the Year 2024",
        org: "Forttuna Global Excellence Awards",
        date: "Dubai, December 2024",
    },
    {
        emoji: "💯",
        title: "Forttuna 2025 PowerList 100",
        org: "Global Recognition in AI & Software Architecture",
        date: "2025",
    },
    {
        emoji: "✅",
        title: "Certified Web Developer",
        org: "Microtechx Technologies",
        date: "Professional Certification",
    },
];

export const awardImages = [
    { src: "/assets/Dr. Muhammad Asif Certificate.png", alt: "Award Certificate" },
    { src: "/assets/Screenshot 2025-07-20 at 1.41.32\u202FAM.png", alt: "Award Ceremony" },
    { src: "/assets/Muhammad Asif (1).jpg", alt: "Professional Photo" },
];

export const contactInfo = [
    { icon: "mail", label: "Email", value: "moh.asif4347@gmail.com", href: "mailto:moh.asif4347@gmail.com" },
    { icon: "phone", label: "Phone", value: "+92 321 8337902", href: "tel:+923218337902" },
    { icon: "location", label: "Location", value: "Lahore, Pakistan", href: null },
];

export const stack = [
    "Python", "Django", "FastAPI", "Flask", "React", "Next.js", "React Native", "Node.js",
    "PostgreSQL", "MongoDB", "Redis", "Docker", "AWS", "GCP", "OpenAI", "RAG", "Pinecone",
    "n8n", "Stripe", "Twilio", "CI/CD", "Cloudflare", "LangChain", "Kubernetes",
    "Vue.js", "Angular", "TypeScript", "Supabase",
];
