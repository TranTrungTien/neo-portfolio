import { Project, ExperienceItem, SkillCategory } from "./types";

export const profileSummary = {
  name: "Tran Trung Tien",
  title: "Frontend Engineer / Fullstack Developer",
  email: "trantrungtien9x@gmail.com",
  phone: "+84 379 818 940",
  location: "Hanoi, Vietnam",
  github: "https://github.com/trantrungtien",
  linkedin: "https://www.linkedin.com/in/trantrungtien/",
  bio: `Frontend Engineer with 4+ years of experience building scalable web applications for logistics and enterprise systems at FPT Software and Giao Hang Tiet Kiem. Specialized in React, Next.js, and TypeScript with a core focus on performance, reusable component architecture, and fullstack capabilities (NestJS, Spring Boot, AWS, Docker). Evolving toward a frontend-focused fullstack role with rich experience in engineering robust user interfaces and high-scale backends.`,
};

export const skillsData: SkillCategory[] = [
  {
    categoryName: "Languages",
    skills: [
      { name: "TypeScript", color: "bg-neo-blue", tip: "Primary language for high-level type-safe app architecture" },
      { name: "JavaScript", color: "bg-neo-yellow", tip: "Modern ES2022+ features & advanced asynchronous logic" },
      { name: "Java", color: "bg-neo-orange", tip: "Spring Boot service design & database integration models" },
      { name: "HTML5 & CSS3", color: "bg-neo-pink", tip: "Semantic layout, flexbox, grid, and modular typography" },
    ],
  },
  {
    categoryName: "Frontend Frameworks",
    skills: [
      { name: "React", color: "bg-neo-blue", tip: "Hooks, custom state managers, performance profiling, and SPA setups" },
      { name: "Next.js 15", color: "bg-neo-green", tip: "SSR, ISR, BFF patterns, Server Actions, & Route Handler optimisations" },
      { name: "Angular", color: "bg-neo-pink", tip: "Modular components, RxJS reactive programming, blockchain tooling" },
      { name: "SWR / React Query", color: "bg-neo-orange", tip: "Server-state fetching, polling, stale-while-revalidate caches" },
      { name: "React Hook Form", color: "bg-neo-yellow", tip: "Form state management & Zod schema validation streams" },
    ],
  },
  {
    categoryName: "UI & Designs",
    skills: [
      { name: "Tailwind CSS", color: "bg-neo-pink", tip: "Utility-first layout, custom design-tokens, responsive styling" },
      { name: "Ant Design", color: "bg-neo-blue", tip: "Comprehensive enterprise dashboard layouts & input modules" },
      { name: "Shadcn/UI", color: "bg-neo-green", tip: "Modern customizable radical UI components with Radix primitives" },
      { name: "Atomic Design", color: "bg-neo-yellow", tip: "Structuring UI into modular Atoms, Molecules, and Organisms" },
    ],
  },
  {
    categoryName: "Backend & Databases",
    skills: [
      { name: "NestJS", color: "bg-neo-green", tip: "Modular enterprise Node.js frameworks with REST APIs & TypeORM" },
      { name: "Spring Boot", color: "bg-neo-orange", tip: "Scalable Java microservices, API architecture, JPA repositories" },
      { name: "PostgreSQL / MySQL", color: "bg-neo-blue", tip: "Relational database schema modeling, indexing & optimization" },
      { name: "Redis", color: "bg-neo-yellow", tip: "Caching session keys, BFF layers, API rate-limiting databases" },
    ],
  },
  {
    categoryName: "Cloud & Dev Tooling",
    skills: [
      { name: "AWS Cloud Services", color: "bg-neo-orange", tip: "Lambda serverless batch, SQS queues, S3 file-transfer pipelines" },
      { name: "Docker & Container", color: "bg-neo-blue", tip: "Containerizing services for consistent sandbox environments" },
      { name: "Jest / Cypress", color: "bg-neo-pink", tip: "Unit testing, integration checking, and interactive E2E UI assertions" },
      { name: "Storybook / MSW", color: "bg-neo-green", tip: "Isolating UX components & mocking REST mock services" },
    ],
  },
];

export const experienceData: ExperienceItem[] = [
  {
    company: "FPT Software",
    role: "Frontend Engineer / Fullstack Developer",
    period: "Jan. 2024 - Present",
    location: "Hanoi, Vietnam",
    color: "bg-neo-blue",
    projects: [
      {
        title: "Fleet Management System (Multi-tenant B2B Platform)",
        role: "Frontend Engineer with Backend Contributions",
        teamSize: "7 developers",
        techStack: "React, TypeScript, NestJS, TypeORM, AWS Lambda, SQS, Redis, PostgreSQL, OpenAPI",
        bullets: [
          "Led development of core vehicle tracking and dashcam safety modules across multiple tenants.",
          "Integrated IoT telemetry ingestion pipelines using AWS Lambda & SQS with advanced idempotency handlers.",
          "Coded PDF analysis triggers with Puppeteer & templates delivering summaries through S3 pre-signed links.",
          "Implemented JWT validation through AWS Cognito with MFA and RBAC access, reducing database calls via Redis.",
        ],
      },
      {
        title: "Embedded Recruitment Platform (Webview / SDK)",
        role: "Frontend Engineer",
        teamSize: "6 developers",
        techStack: "Next.js, TypeScript, SWR, OpenAPI, Redis, BFF (Backend For Frontend), Jest, MSW, Storybook",
        bullets: [
          "Engineered strongly-typed cross-platform Next.js interfaces optimized for mobile WebViews.",
          "Secured JWT session storage using React-to-BFF Redis adapters, mitigating client XSS risks.",
          "Configured MSW mocking & decoupled automated tests via Jest, reducing developer setup times by up to 40%.",
          "Automated file structure scaffolding using node scripts, reducing component feature assembly times by 20%.",
        ],
      },
      {
        title: "Job Scheduling & Management App",
        role: "Frontend Engineer",
        teamSize: "5 developers",
        techStack: "Next.js 15, TypeScript, Zod Schema, Spring Boot, MySQL, BFF Pattern, OpenAPI",
        bullets: [
          "Developed form configurations backed by intense Zod validation rules, dropping client errors by over 30%.",
          "Engineered complex calendar scheduling slots minimizing layouts re-renders using React Profiler tools.",
          "Boosted mobile Lighthouse metric to 90%+ using image-optimization, code-splitting and Next.js SSR configurations.",
        ],
      },
      {
        title: "Recruitment Management System (ATS)",
        role: "Frontend Engineer",
        teamSize: "6 developers",
        techStack: "React, TypeScript, SWR, Atomic Design, React Hook Form, Zod, Spring Boot",
        bullets: [
          "Spearheaded Atomic Design layout engineering over 100+ highly reusable component files.",
          "Minimized duplicate API queries by ~25% using pre-caching queries on SWR-driven network threads.",
          "Standardized multi-step candidate validation workflow wizards with rich client diagnostics alerts.",
        ],
      },
      {
        title: "Aura - Blockchain Explorer",
        role: "Frontend Developer",
        teamSize: "4 developers",
        techStack: "Angular, TypeScript, GraphQL, SCSS",
        bullets: [
          "Created modular panels mapping on-chain blockchain tokens, real-time tx grids, and validator telemetry.",
          "Integrated speedier GraphQL schemas which improved server exchange performance, loading queries 30% faster than REST.",
          "Managed modular responsive SCSS designs displaying grid lists for blocks and transaction datasets.",
        ],
      },
    ],
  },
  {
    company: "Giao Hang Tiet Kiem (GHTK)",
    role: "Frontend Engineer",
    period: "Mar. 2022 - Jan. 2024",
    location: "Hanoi, Vietnam",
    color: "bg-neo-pink",
    projects: [
      {
        title: "Quality Management System (JIRA Replacement)",
        role: "Frontend Engineer",
        teamSize: "6 developers",
        techStack: "React, Redux Toolkit, Redux Saga, Ant Design, OAuth2, BFF Pattern, Jest, Cypress",
        bullets: [
          "Migrated monolithic jQuery components to React, serving 1500+ daily corporate active users.",
          "Architected task orchestration flows with Redux Saga for transaction updates across operational backends.",
          "Optimized initial browser content loads by 20% by restructuring bundle packaging distributions.",
        ],
      },
      {
        title: "Administrative Boundary & Map Visualization",
        role: "Frontend Developer",
        teamSize: "5 developers",
        techStack: "React, Redux, Ant Design, Map Integrations, GeoJSON Boundary Models, Jest",
        bullets: [
          "Rendered topological commune boundaries directly using custom GeoJSON layer rendering overlays.",
          "Designed hierarchical state forms handling heavy nested region queries smoothly.",
          "Secured polygon validation code handling edge overlays to enforce route drawing safety constraints.",
        ],
      },
      {
        title: "Logistics Route Management Tool",
        role: "Frontend Developer",
        teamSize: "5 developers",
        techStack: "React, React Query, Ant Design, Map SDKs, Jest, Cypress Tests",
        bullets: [
          "Programmed dispatching map screens rendering live vehicle trackers for 1,000+ logistics personnel.",
          "Installed React Query state-caches reducing backend queries by roughly 30% on dashboard redraws.",
          "Contributed component structures and unit testing grids targeting high coverage metrics.",
        ],
      },
    ],
  },
];

export const personalProjectsData: Project[] = [
  {
    id: "fujifilm_cam",
    title: "Fujifilm Simulation Camera",
    category: "Personal Open-Source",
    description: "An impressive photo styling engine replicating Fujifilm's iconic film looks directly in browser engines via advanced fragment shading.",
    role: "Creator & Lead Designer",
    techStack: ["React", "TypeScript", "WebGL", "GLSL Shaders", "Tailwind CSS"],
    bulletPoints: [
      "Engineered a real-time WebGL frame buffer feeding image textures into custom film simulation matrices.",
      "Re-created 12+ legendary recipes (Classic Chrome, ACROS, Velvia) with precise LUT color matching & grain mapping.",
      "Configured dynamic camera triggers, file drag-and-drop actions, and slider settings regulating exposure and Kelvin balance.",
    ],
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800",
    color: "bg-neo-pink",
    shadow: "shadow-[10px_10px_0px_0px_#FF00FF]",
    githubUrl: "https://github.com/trantrungtien/fujifilm_cam",
  },
  {
    id: "douyin_proxy",
    title: "Douyin High-Speed Media Service",
    category: "Personal Open-Source",
    description: "An open media proxy server and scraping engine pulling HD video feeds from Douyin without watermarks.",
    role: "Fullstack Architect",
    techStack: ["Node.js", "Express", "TypeScript", "Redis Cache", "Axios"],
    bulletPoints: [
      "Designed dynamic scraping handlers analyzing response signatures to extract original video binaries without logos.",
      "Configured customized proxy controllers modifying HTTP request referrers and cookie tokens to secure clean chunked streams.",
      "Added Redis caching models for viral media URLs, safeguarding source endpoints against request bans.",
    ],
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800",
    color: "bg-neo-yellow",
    shadow: "shadow-[10px_10px_0px_0px_#FFFF00]",
    githubUrl: "https://github.com/trantrungtien/douyin_proxy",
  },
  {
    id: "nettruyenapi",
    title: "NetTruyen Novel Scraper & UI",
    category: "Personal Open-Source",
    description: "An elegant head-free scraping API service coupled with a mobile-optimized reader web-application.",
    role: "Backend & Parser Designer",
    techStack: ["NestJS", "Cheerio Scraper", "Next.js", "MySQL", "SWR caching"],
    bulletPoints: [
      "Coded high-concurrent DOM parser models running Cheerio, pulling volumes, links, and text layers cleanly.",
      "Built fully typed NestJS endpoints authenticated with API rate limits and structured with OpenAPI/Swagger.",
      "Coded a mobile-first UI with automatic page pre-fetching, custom reading modes, and dark layout themes.",
    ],
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=800",
    color: "bg-neo-green",
    shadow: "shadow-[10px_10px_0px_0px_#00FF00]",
    githubUrl: "https://github.com/trantrungtien/nettruyenapi",
  },
  {
    id: "Jewel_Sparkle",
    title: "Jewel Sparkle Lux Storefront",
    category: "Personal Open-Source",
    description: "An elegant interactive luxury e-commerce landing page crafted for highly satisfying browsing feel.",
    role: "Frontend Artisan",
    techStack: ["React", "Framer Motion", "Tailwind CSS", "Context State"],
    bulletPoints: [
      "Engineered beautiful geometric layouts with staggered entrances, hover physics, and product zoom boxes.",
      "Fitted with robust shopping cart handles, custom promo code models, and instant checkout states.",
    ],
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800",
    color: "bg-neo-orange",
    shadow: "shadow-[10px_10px_0px_0px_#FF6600]",
    githubUrl: "https://github.com/trantrungtien/Jewel_Sparkle",
  },
];

export const educationData = {
  institution: "University of Information and Communication Technology",
  period: "2018 - 2022",
  degree: "B.Sc. Software Engineering",
  location: "Hanoi, Vietnam",
};

export const certificationsData = [
  { name: "TOEIC 700", issuer: "ETS", year: "2026" },
];
