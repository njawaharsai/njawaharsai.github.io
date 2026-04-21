export const personal = {
  name: "Jawahar Sai Nathani",
  initials: "JSN",
  title: "Software Engineer",
  subtitle: "AI Infrastructure · Cloud Systems · Full-Stack",
  bio: [
    "I'm a software engineer working at the intersection of backend systems, cloud infrastructure, and applied AI, with a strong focus on building scalable, production-grade platforms. As a Founding Software Engineer at Encando.AI, I've owned end-to-end systems from designing low-latency SaaS backends and auto-scaling cloud infrastructure to shipping AI-powered features used by thousands of users.",
    "My work emphasizes reliability, performance, and clear system design, often under high ambiguity and tight timelines. I'm especially interested in LLMs, agentic systems, and AI infrastructure, and have built multi-stage RAG frameworks, human-feedback-driven evaluation loops, and agent-based reasoning systems that balance accuracy, cost, and latency.",
    "I enjoy tackling hard problems, collaborating closely with cross-functional teams, and taking ownership of projects from idea to production. I'm motivated by roles where engineering rigor meets real-world impact and where shipping high-quality systems truly matters.",
  ],
  github: "https://github.com/JawaharSaiNathani",
  linkedin: "https://linkedin.com/in/jawahar-nathani",
  email: "jawaharsainathani@gmail.com",
  stats: [
    { value: "2+ Years", label: "Startup Experience" },
    // { value: "95%", label: "Latency Reduction" },
    { value: "4.0", label: "GPA at TAMU" },
    { value: "4+ Years", label: "Experience" },
  ],
};

export interface Certificate {
  name: string;
  url: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  website: string;
  type: "Full-time" | "Part-time" | "Internship" | "Research";
  description: string[];
  tech: string[];
  certificates?: Certificate[];
}

export const experiences: Experience[] = [
  {
    id: "encando-founding",
    company: "Encando AI",
    role: "Founding Software Engineer",
    duration: "Aug 2025 - Present",
    website: "https://encando.com/",
    type: "Full-time",
    description: [
      "Architected an end-to-end React and FastAPI LMS, redesigning hot paths with index-backed access patterns and caching to cut median API latency by 95% from 1.4s to 67ms for 6,000+ monthly users.",
      "Owned a full-stack OCR platform with Stripe billing, fair scheduling, and auto-scaling workers to reduce processing time by 40% for 300+ concurrent jobs in production.",
      "Led a team of 5 engineers, formalizing CI/CD, PR review standards, and pytest-backed test-gated release workflows to improve code quality and support reliable deployments across a growing cloud platform.",
      "Designed LLM orchestration with LangChain and Pinecone, enforcing Pydantic schemas, citation requirements, and eval-driven guardrails to improve grounded-answer accuracy by 18% and cut inference cost by 15%.",
      "Migrated the backend to AWS ECS Fargate with Application Load Balancer routing and containerized services, enabling zero-downtime releases for 20,000+ registered users while keeping the trusted platform stable under growing traffic.",
    ],
    tech: ["React", "FastAPI", "Python", "AWS ECS Fargate", "Docker", "LangChain", "Pinecone", "OpenAI", "Gemini", "PostgreSQL", "Redis", "Stripe"],
  },
  {
    id: "encando-intern",
    company: "Encando AI",
    role: "Software Engineering Intern",
    duration: "May 2025 - Jul 2025",
    website: "https://encando.com/",
    type: "Internship",
    description: [
      "Automated GitHub Actions deployments with PR-gated unit tests, Docker layer caching, and ECS rollouts, cutting release time by 80% from 25 minutes to under 5 while improving release confidence.",
      "mplemented Stripe API billing and webhook processing with idempotency controls, enabling subscription-gated access across multiple tiers.",
      "Delivered LLM-assisted grading in Python with Pydantic schemas and an AI Council flow where OpenAI model outputs are validated by Gemini for agreement-based confidence, cutting instructor grading time by 29%."
    ],
    tech: ["LLM Fine-tuning", "RAG", "React JS", "Next.js", "AWS", "Prompt Engineering", "ReAct Agents", "LLaMA", "DeepSeek", "Pinecone"],
  },
  {
    id: "encando-gra",
    company: "Encando AI",
    role: "Graduate Research Assistant",
    duration: "May 2024 - Apr 2025",
    website: "https://encando.com/",
    type: "Research",
    description: [
      "Built the platform's authN/authZ foundation in FastAPI, modeling 3 user roles with JWT sessions and OAuth 2.0 SSO, including a 6-hour expiry and refresh flow for secure access.",
      "Designed the RAG pipeline with PyTorch reranking and Pinecone retrieval, improving recall@K by 25% and nDCG by 18% for course-grounded tutoring responses through iterative evaluation and retrieval tuning"
    ],
    tech: ["LLM Fine-tuning", "RAG", "React JS", "Next.js", "AWS", "Prompt Engineering", "ReAct Agents", "LLaMA", "DeepSeek", "Pinecone"],
  },
  {
    id: "gep-swe",
    company: "GEP Worldwide",
    role: "Software Engineer",
    duration: "Jul 2022 - Nov 2023",
    website: "https://www.gep.com/",
    type: "Full-time",
    description: [
      "Developed scalable .NET RESTful APIs and deployed them on Azure with Kubernetes orchestration, reducing infrastructure costs by 15% while supporting enterprise procurement workloads with stable rolling releases.",
      "Enabled Angular low-code plugin workflows for shipment applications, reducing development effort by 25% by letting teams configure and release domain features without full-stack rebuilds.",
      "Collaborated on a 150M+ document migration from SQL Server to MongoDB using PySpark and Databricks, consolidating schemas to reduce database load by 12% and support more efficient application access patterns.",
      "Received 2 engineering awards for high-impact contributions across cloud and platform initiatives.",
    ],
    tech: ["Angular CLI", "ASP.NET", "MongoDB", "SQL", "Azure", "Kubernetes", "Kafka", "Elasticsearch", "PySpark"],
    certificates: [
      { name: "CATALYST - Exemplary Contribution", url: "./images/certificate_kudo1.png" },
      { name: "SPOT RECOGNITION - Excellent Commitment", url: "./images/certificate_kudo2.png" },
    ],
  },
  {
    id: "gep-intern",
    company: "GEP Worldwide",
    role: "Software Engineering Intern",
    duration: "May 2021 - Jul 2021",
    website: "https://www.gep.com/",
    type: "Internship",
    description: [
      "Constructed Angular plugins and .NET APIs serving 140+ enterprise clients.",
      "Diagnosed gaps in a legacy codebase and implemented unit tests, increasing code coverage by 52% to reduce regression risk across client-facing features and improve confidence in deployment quality.",
      "Won 1st Prize in GEP India's intern Techathon.",
    ],
    tech: ["Angular CLI", "ASP.NET", "SQL", "Plugin Architecture"],
    certificates: [
      { name: "Hackathon Winner - 1st Place", url: "./images/certificate_hackathon.png" },
      { name: "Internship Program Certificate", url: "./images/certificate_intern.png" },
    ],
  },
];

export interface Education {
  id: string;
  title: string;
  college: string;
  location: string;
  branch: string;
  start: string;
  end: string;
  score: string;
  courses: string[];
}

export const education: Education[] = [
  {
    id: "tamu",
    title: "Master of Science",
    college: "Texas A&M University",
    location: "College Station, TX",
    branch: "Computer Science & Engineering",
    start: "2024",
    end: "Aug 2025",
    score: "4.0 / 4.0",
    courses: [
      "Deep Learning",
      "Analysis of Algorithms",
      "Reinforcement Learning",
      "Artificial Intelligence",
      "Operating Systems",
      "Data Mining & Analysis",
      "Information Storage & Retrieval",
      "Natural Language Processing",
      "Computer & Network Security",
    ],
  },
  {
    id: "iit",
    title: "Bachelor of Technology",
    college: "Indian Institute of Technology Tirupati",
    location: "Tirupati, India",
    branch: "Computer Science & Engineering",
    start: "2018",
    end: "2022",
    score: "8.4 / 10",
    courses: [
      "Discrete Mathematics",
      "Linear Algebra",
      "Computer Organization",
      "Data Structures & Algorithms",
      "Probability & Statistics",
      "Compiler Design",
      "Machine Learning",
      "Internet of Things",
      "Computer Networks",
      "Database Systems",
    ],
  },
];

export type ProjectTag = "all" | "ml-ai" | "frontend" | "systems" | "ios";

export interface Project {
  id: string;
  title: string;
  description: string;
  /** Highlights for project tiles (hover / pin) and detail views. */
  details: string[];
  image: string;
  tech: string[];
  github?: string;
  paper?: string;
  weblink?: string;
  tags: ProjectTag[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "reliable-llm",
    title: "ReliableLLM",
    description: "Reduced LLM hallucinations using dynamic Chain-of-Thought prompt selection and RAG context classification.",
    image: "./images/proj_aa.png",
    tech: ["PyTorch", "Hugging Face", "Python", "RAG"],
    github: "https://github.com/JawaharSaiNathani/ReliableLLM",
    paper: "https://arxiv.org/abs/2505.09031",
    details: [
      "Performed prompt engineering to identify optimal Chain of Thought prompts that enforce step-by-step reasoning in LLMs, reducing hallucinations in generated responses.",
      "Deployed a classifier to dynamically select CoT prompts and relevant RAG context based on input queries.",
      "Reduced hallucination rates by 21% on TruthfulQA and 32% on HaluEval datasets.",
    ],
    tags: ["ml-ai"],
    featured: true,
  },
  {
    id: "picpose",
    title: "PicPose",
    description: "iOS app for creative pose recommendation and aesthetic ranking using MediaPipe + NIMA scoring.",
    image: "./images/proj_kisanseva.png",
    tech: ["Swift", "Xcode", "PyTorch", "Gemini", "MediaPipe"],
    github: "https://github.com/jawaharnathani/PicPose",
    details: [
      "Built intelligent iOS app for creative pose recommendation using MediaPipe pose estimation and NIMA aesthetic modeling to rank user-uploaded photos.",
      "Developed a pairwise RankNet fine-tuning pipeline trained on user feedback, improving pose ranking precision by 12%.",
      "Integrated on-device inference paths in Swift and Xcode so pose hints and ranking updates stay responsive during capture sessions.",
    ],
    tags: ["ml-ai", "ios"],
    featured: true,
  },
  {
    id: "akshara-annotator",
    title: "Akshara Annotator",
    description: "Crowdsourcing app to digitize handwritten medical prescriptions using a 2-layer CNN with 94% accuracy.",
    image: "./images/proj_aa.png",
    tech: ["Python", "React JS", "Django", "CNN", "Flutter"],
    github: "https://github.com/JawaharSaiNathani/BTP_Annotator",
    details: [
      "Web-based crowdsourcing application to digitize and store handwritten medical prescriptions with text layer for document search.",
      "Subregion-detection OCR model using a concise 2-layer CNN achieved 94% accuracy with minimal training duration.",
      "Ecosystem includes a mobile app for document scanning and server upload.",
    ],
    tags: ["ml-ai", "frontend"],
    featured: true,
  },
  {
    id: "vatc",
    title: "VATC",
    description: "Virtual Assistant to Type and Code - voice-driven Python code generation using BERT + speech recognition.",
    image: "./images/proj_vatc.png",
    tech: ["Python", "Tkinter", "BERT", "NLP", "Sentiment Analysis"],
    github: "https://github.com/JawaharSaiNathani/VATC",
    details: [
      "Text editor with speech recognition and NLP converting voice commands into Python code snippets.",
      "BERT model trained on Python programs dataset for code generation and documentation.",
      "Features keyword highlighting, line numbers, debug points, and an integrated search panel with sentiment analysis.",
    ],
    tags: ["ml-ai"],
  },
  {
    id: "kisan-seva",
    title: "Kisan Seva",
    description: "Full-stack agricultural platform connecting farmers, dealers, and experts for fair crop pricing.",
    image: "./images/proj_kisanseva.png",
    tech: ["React JS", "Node.js", "Material UI", "Flutter"],
    github: "https://github.com/JawaharSaiNathani/SE_WebApp_Frontend",
    weblink: "https://kisanseva-officiallynik.vercel.app",
    details: [
      "Platform serving farmers, dealers, and agricultural experts with EShop listings, direct negotiations, and real-time chat.",
      "Farmers list crops, dealers purchase directly, and agricultural experts provide advice to improve farming practices.",
      "Full-stack React and Node.js services power the marketplace, with Material UI dashboards and Flutter flows for mobile-first access.",
    ],
    tags: ["frontend"],
  },
  {
    id: "teachable-machine",
    title: "Teachable Machine",
    description: "Full-stack app for training custom image classification models - a self-hosted Google Teachable Machine.",
    image: "./images/proj_tm.png",
    tech: ["React JS", "Flask", "Keras", "TensorFlow", "sklearn"],
    github: "https://github.com/JawaharSaiNathani/TeachableMachine",
    details: [
      "Trains custom image classification models using Keras/sklearn; detects objects with TensorFlow Object Detection.",
      "Users can export trained models with the necessary OpenCV code snippet for testing and validation.",
      "React labelling UI and Flask training orchestration keep the self-hosted loop fast for classroom demos and iterative labelling.",
    ],
    tags: ["ml-ai", "frontend"],
  },
  {
    id: "type-news",
    title: "Type News",
    description: "Practice typing while staying informed - real-time news scraped and served as typing exercises.",
    image: "./images/proj_typenews.png",
    tech: ["React JS", "Flask", "Selenium"],
    github: "https://github.com/JawaharSaiNathani/type-news-frontend",
    weblink: "https://overpowered-news-typer.herokuapp.com",
    details: [
      "Built a typing practice web app that turns live news headlines into timed exercises so users stay informed while improving speed and accuracy.",
      "Backend scrapes and normalizes article text; React frontend streams passages with low-latency keystroke feedback and scoring.",
      "Full-stack prototype pairing Flask APIs with a Selenium-based ingestion path for resilient content updates.",
    ],
    tags: ["frontend"],
  },
  {
    id: "big-little-township",
    title: "Big Little Township",
    description: "3D township management simulation game built in Unity with custom 3D assets created in Blender.",
    image: "./images/proj_blt.png",
    tech: ["Unity", "C#", "Blender"],
    github: "https://github.com/JawaharSaiNathani/SE_Game",
    details: [
      "Developed a 3D township management simulation in Unity with resource balances, zoning, and progression loops inspired by classic city builders.",
      "Authored custom buildings and environmental assets in Blender and integrated them through Unity's asset pipeline and lighting passes.",
      "Owned scene management, UI flows, and core simulation logic as a small-team systems and gameplay contribution.",
    ],
    tags: ["systems"],
  },
  {
    id: "custom-compiler",
    title: "Custom Language Compiler",
    description: "Full compiler for a C-like custom language - lexer, parser, semantic analysis, and code generation.",
    image: "./images/proj_compiler.png",
    tech: ["C++", "Compiler Design", "Yacc", "LEX"],
    github: "https://github.com/JawaharSaiNathani/Custom-CD-Compiler",
    details: [
      "Implemented a complete compiler for a C-like teaching language: lexical analysis, parsing, semantic checks, and code generation in C++.",
      "Used Yacc and LEX for grammar-driven parsing, parse-tree construction, and clear static error messages for students.",
      "Delivered an end-to-end toolchain that makes compiler-design coursework tangible with a small, well-documented language surface.",
    ],
    tags: ["systems"],
  },
  {
    id: "modified-xinu",
    title: "Modified XINU OS",
    description: "Extended XINU operating system with a custom terminal, virtual file system, and shell.",
    image: "./images/proj_xinu.png",
    tech: ["C/C++", "x86 Assembly", "OS Design"],
    github: "https://github.com/JawaharSaiNathani/Modified_XINU_OS",
    details: [
      "Extended the educational XINU OS kernel with a richer shell, pluggable commands, and improved terminal I/O for coursework-scale workloads.",
      "Introduced a minimalist virtual file system layer and coordinated changes across scheduling, memory, and device driver boundaries.",
      "Hands-on work in C and x86 assembly to stabilize context switches and integrate hardware-facing code paths.",
    ],
    tags: ["systems"],
  },
  {
    id: "asm-simulator",
    title: "Assembly Code Simulator",
    description: "Virtual Machine, compiler, and assembler for a custom language targeting ARM Architecture from scratch.",
    image: "./images/proj_al.png",
    tech: ["C/C++", "ARM Architecture", "Yacc", "LEX"],
    github: "https://github.com/JawaharSaiNathani/ASM_Simulator",
    details: [
      "Built Virtual Machine (ARM Architecture), Compiler, and Assembler from scratch for a custom programming language.",
      "Generates 3-address code and converts to x86 Assembly Language; OS and Processor support recursion and functions.",
      "Lexer and parser stages authored with Yacc and LEX feed a unified VM harness exercised across representative sample programs.",
    ],
    tags: ["systems"],
  },
  {
    id: "blog-detection",
    title: "Blog Detection",
    description: "Blog category classifier using BERT transformers and sentiment analysis techniques.",
    image: "./images/proj_bd.png",
    tech: ["BERT", "Transformers", "Sentiment Analysis", "Python"],
    github: "https://github.com/JawaharSaiNathani/Blog_Detection",
    details: [
      "Fine-tuned BERT-style transformer models for multi-class blog categorization with a compact, reproducible Python evaluation harness.",
      "Augmented topic predictions with sentiment analysis features to improve robustness on short and noisy posts.",
      "Documented preprocessing, train/validation splits, and metrics so experiments are easy to rerun and extend.",
    ],
    tags: ["ml-ai"],
  },
];

export const certificates = [
  { name: "CATALYST Award - GEP Worldwide", url: "./images/certificate_kudo1.png" },
  { name: "SPOT RECOGNITION - GEP Worldwide", url: "./images/certificate_kudo2.png" },
  { name: "Techathon Winner - GEP Interns India", url: "./images/certificate_hackathon.png" },
  { name: "Internship Completion - GEP Worldwide", url: "./images/certificate_intern.png" },
];
