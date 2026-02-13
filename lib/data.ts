/* Cato Labs content data — services, case studies, articles */

export interface ServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  excerpt: string;
  icon: string;
  features: string[];
  answerBlock: string[];
}

export interface CaseStudyData {
  slug: string;
  title: string;
  client: string;
  industry: string;
  excerpt: string;
  metrics: { label: string; value: string }[];
  services: string[];
}

export interface ArticleData {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
}

export const services: ServiceData[] = [
  {
    slug: "ai-product-studio",
    title: "AI Product Studio",
    shortTitle: "Product Studio",
    description:
      "End-to-end AI product development from concept to production. We design, build, and ship intelligent products that users love.",
    excerpt:
      "From zero to one: we design, build, and launch production-grade AI products that create category-defining user experiences.",
    icon: "Layers",
    features: [
      "Product strategy and AI roadmapping",
      "UX research for AI-native interfaces",
      "Rapid prototyping and validation",
      "Production ML pipeline architecture",
      "Continuous model monitoring and improvement",
    ],
    answerBlock: [
      "Full-lifecycle AI product development",
      "From concept validation through production launch",
      "Specializing in AI-native user experiences",
      "Continuous improvement with model monitoring",
    ],
  },
  {
    slug: "agentic-systems",
    title: "Agentic Systems",
    shortTitle: "Agentic Systems",
    description:
      "Design and deploy autonomous AI agents that reason, plan, and execute complex multi-step workflows with human-in-the-loop oversight.",
    excerpt:
      "Autonomous AI agents that reason, plan, and execute multi-step workflows while keeping humans in the loop.",
    icon: "Bot",
    features: [
      "Multi-agent orchestration frameworks",
      "Tool-use and function calling architectures",
      "Human-in-the-loop approval chains",
      "Memory and context management",
      "Agent evaluation and testing harnesses",
    ],
    answerBlock: [
      "Design and deploy autonomous AI agent systems",
      "Multi-agent orchestration with tool-use capabilities",
      "Human-in-the-loop oversight and approval workflows",
      "Comprehensive agent testing and evaluation",
    ],
  },
  {
    slug: "llmops-infrastructure",
    title: "LLMOps & Infrastructure",
    shortTitle: "LLMOps",
    description:
      "Build robust, scalable infrastructure for deploying and managing large language models in production environments.",
    excerpt:
      "Scalable infrastructure for deploying and managing LLMs in production with observability, cost optimization, and reliability.",
    icon: "Server",
    features: [
      "Model serving and inference optimization",
      "Prompt management and versioning",
      "Cost optimization and model routing",
      "Observability, logging, and tracing",
      "Fine-tuning and evaluation pipelines",
    ],
    answerBlock: [
      "Production-grade LLM deployment infrastructure",
      "Model serving optimization and cost management",
      "Full observability with logging and tracing",
      "Fine-tuning and continuous evaluation pipelines",
    ],
  },
  {
    slug: "rag-search-retrieval",
    title: "RAG, Search & Retrieval",
    shortTitle: "RAG & Search",
    description:
      "Build knowledge-grounded AI systems with state-of-the-art retrieval augmented generation, semantic search, and intelligent data pipelines.",
    excerpt:
      "Knowledge-grounded AI with state-of-the-art RAG pipelines, semantic search, and intelligent data retrieval systems.",
    icon: "Search",
    features: [
      "Vector database architecture and optimization",
      "Hybrid search (semantic + keyword)",
      "Document ingestion and chunking pipelines",
      "Multi-modal retrieval systems",
      "Evaluation and relevance tuning",
    ],
    answerBlock: [
      "State-of-the-art retrieval augmented generation",
      "Hybrid search combining semantic and keyword matching",
      "Scalable document ingestion and processing",
      "Multi-modal retrieval with continuous optimization",
    ],
  },
  {
    slug: "security-governance",
    title: "AI Security & Governance",
    shortTitle: "Security",
    description:
      "Ensure your AI systems are safe, compliant, and trustworthy with comprehensive security frameworks, red teaming, and governance policies.",
    excerpt:
      "Comprehensive AI security, red teaming, compliance frameworks, and governance policies for trustworthy AI deployment.",
    icon: "Shield",
    features: [
      "AI red teaming and adversarial testing",
      "Prompt injection defense strategies",
      "Compliance frameworks (SOC2, GDPR, HIPAA)",
      "Model access controls and audit logging",
      "Responsible AI policy development",
    ],
    answerBlock: [
      "End-to-end AI security and governance",
      "Red teaming and adversarial vulnerability testing",
      "Compliance with SOC2, GDPR, HIPAA, and more",
      "Responsible AI policy and audit frameworks",
    ],
  },
];

export const caseStudies: CaseStudyData[] = [
  {
    slug: "fortune-500-agentic-platform",
    title: "Enterprise Agentic Platform for Fortune 500 Retailer",
    client: "Fortune 500 Retailer",
    industry: "Retail & E-Commerce",
    excerpt:
      "Designed and deployed a multi-agent system handling 50K+ daily customer interactions with 94% resolution rate.",
    metrics: [
      { label: "Daily Interactions", value: "50K+" },
      { label: "Resolution Rate", value: "94%" },
      { label: "Cost Reduction", value: "60%" },
      { label: "Deploy Time", value: "12 weeks" },
    ],
    services: ["agentic-systems", "llmops-infrastructure"],
  },
  {
    slug: "fintech-rag-platform",
    title: "RAG-Powered Compliance Engine for Fintech",
    client: "Series B Fintech",
    industry: "Financial Services",
    excerpt:
      "Built a retrieval system that processes 100K+ regulatory documents, reducing compliance review time by 75%.",
    metrics: [
      { label: "Documents Processed", value: "100K+" },
      { label: "Review Time Reduction", value: "75%" },
      { label: "Accuracy", value: "98.5%" },
      { label: "ROI", value: "8x" },
    ],
    services: ["rag-search-retrieval", "security-governance"],
  },
  {
    slug: "healthtech-ai-product",
    title: "AI Diagnostic Assistant for HealthTech Startup",
    client: "HealthTech Startup",
    industry: "Healthcare",
    excerpt:
      "Launched an AI-powered diagnostic assistant from concept to production in 16 weeks, now serving 200+ clinics.",
    metrics: [
      { label: "Clinics Served", value: "200+" },
      { label: "Diagnostic Accuracy", value: "96%" },
      { label: "Time to Market", value: "16 weeks" },
      { label: "User Satisfaction", value: "4.8/5" },
    ],
    services: ["ai-product-studio", "security-governance"],
  },
];

export const articles: ArticleData[] = [
  {
    slug: "building-production-rag-systems",
    title: "Building Production RAG Systems: A Practitioner's Guide",
    excerpt:
      "A comprehensive guide to designing, building, and scaling retrieval augmented generation systems for real-world production workloads.",
    author: "Engineering Team",
    date: "2026-01-15",
    readTime: "12 min read",
    category: "Engineering",
    tags: ["RAG", "Vector Search", "Production"],
  },
  {
    slug: "agentic-ai-enterprise-playbook",
    title: "The Enterprise Playbook for Agentic AI",
    excerpt:
      "How to evaluate, pilot, and scale autonomous AI agents in enterprise environments with proper governance.",
    author: "Strategy Team",
    date: "2026-01-08",
    readTime: "9 min read",
    category: "Strategy",
    tags: ["Agents", "Enterprise", "Governance"],
  },
  {
    slug: "llmops-observability-stack",
    title: "The Modern LLMOps Observability Stack",
    excerpt:
      "A deep dive into monitoring, tracing, and debugging large language model applications in production.",
    author: "Engineering Team",
    date: "2025-12-20",
    readTime: "10 min read",
    category: "Engineering",
    tags: ["LLMOps", "Observability", "Infrastructure"],
  },
];
