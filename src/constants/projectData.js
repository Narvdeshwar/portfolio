
import { jspark, jsparkprime } from "../assets";

export const projectsData = [
  // --- Selected Work (Live Traffic & Clients) ---
  {
    slug: "jspark-ai",
    category: "selected",
    title: "JSPARK AI",
    description: "AI-driven landing page & company portfolio hub.",
    longDescription: "A comprehensive digital presence for an AI consultancy firm. Built with a focus on futuristic aesthetics and high-performance rendering.",
    image: jspark,
    technologies: ["React", "TailwindCSS", "Framer Motion", "Vite"],
    links: { live: "https://jspark.ai", github: "" },
    stats: { traffic: "12k/mo", status: "Live" }
  },
  {
    slug: "jspark-prime",
    category: "selected",
    title: "JSPARK Prime",
    description: "Premium client portfolio showcase platform.",
    longDescription: "A secondary platform for JSPARK, focusing on showcasing high-ticket client success stories with a minimal, luxury design language.",
    image: jsparkprime,
    technologies: ["Next.js", "React", "TailwindCSS"],
    links: { live: "https://jsparkprime.com/", github: "" },
    stats: { traffic: "5k/mo", status: "Live" }
  },
  {
    slug: "legal-check",
    category: "selected",
    title: "Legal Check Calc",
    description: "Complex legal calculation tools for financial compliance.",
    longDescription: "A suite of calculators for legal professionals to determine fees, interest, and compliance metrics. Optimized for accuracy and ease of use.",
    image: jspark, // Placeholder
    technologies: ["React", "TypeScript", "Vercel", "Shadcn UI"],
    links: { live: "https://legal-check-calculators.vercel.app/", github: "" },
    stats: { traffic: "2.5k/mo", status: "Beta" }
  },

  // --- Engineering Labs (Backend & Systems) ---
  {
    slug: "distributed-task-queue",
    category: "engineering",
    title: "Distributed Task Queue",
    description: "High-performance async task processing with RabbitMQ.",
    longDescription: "A robust system designed to handle thousands of concurrent tasks. It features a custom retry mechanism, dead-letter queues, and real-time monitoring via WebSockets.",
    image: jspark, // Placeholder
    technologies: ["Golang", "RabbitMQ", "Redis", "Docker", "MongoDB"],
    links: { live: "#", github: "https://github.com/Narvdeshwar/distributed-task-queue" },
    stats: { stars: "45", status: "Active" },
    architecture: {
      nodes: [
        { id: 'client', label: 'HTTP Clients', x: 5, y: 50, type: 'external' },
        { id: 'api', label: 'Go API Gateway', x: 30, y: 50, type: 'service' },
        { id: 'rmq', label: 'RabbitMQ Broker', x: 55, y: 20, type: 'queue' },
        { id: 'redis', label: 'Redis Cache', x: 55, y: 80, type: 'db' },
        { id: 'worker', label: 'Go Background Workers', x: 80, y: 50, type: 'service' },
        { id: 'db', label: 'Primary DB', x: 95, y: 50, type: 'db' }
      ],
      connections: [
        { from: 'client', to: 'api', label: 'Request' },
        { from: 'api', to: 'rmq', label: 'Enqueue' },
        { from: 'api', to: 'redis', label: 'Check' },
        { from: 'rmq', to: 'worker', label: 'Process' },
        { from: 'worker', to: 'db', label: 'Persist' }
      ]
    }
  },
  {
    slug: "saas-iot-platform",
    category: "engineering",
    title: "SaaS IoT Platform",
    description: "Real-time sensor ingestion pipeline handling 10k+ events/sec.",
    longDescription: "An industrial IoT solution capable of ingesting high-frequency sensor data. Uses TimescaleDB for efficient time-series storage and gRPC for internal service communication.",
    image: jsparkprime, // Placeholder
    technologies: ["Golang", "TimescaleDB", "gRPC", "Kafka"],
    links: { live: "#", github: "https://github.com/Narvdeshwar/iot-platform-core" },
    stats: { stars: "32", status: "Building" },
    architecture: {
      nodes: [
        { id: 'sensors', label: 'IoT Devices', x: 5, y: 50, type: 'external' },
        { id: 'kafka', label: 'Kafka Ingestion', x: 30, y: 50, type: 'queue' },
        { id: 'grpc', label: 'gRPC Processors', x: 55, y: 50, type: 'service' },
        { id: 'timescale', label: 'TimescaleDB', x: 85, y: 30, type: 'db' },
        { id: 'redis', label: 'Real-time Cache', x: 85, y: 70, type: 'db' }
      ],
      connections: [
        { from: 'sensors', to: 'kafka', label: 'Protobuf' },
        { from: 'kafka', to: 'grpc', label: 'Stream' },
        { from: 'grpc', to: 'timescale', label: 'Store' },
        { from: 'grpc', to: 'redis', label: 'Cache' }
      ]
    }
  },
  {
    slug: "ncrb-bi-dashboard",
    category: "engineering",
    title: "NCRB BI Dashboard",
    description: "Crime analytics intelligence dashboard for government agencies.",
    longDescription: "A data-heavy BI tool used for visualizing crime statistics across regions. Features include heatmaps, trend analysis charts, and automated PDF reporting.",
    image: jsparkprime, // Placeholder
    technologies: ["React", "D3.js", "Redux", "PostGIS"],
    links: { live: "#", github: "https://github.com/Narvdeshwar/ncrb-analytics" },
    stats: { stars: "28", status: "Stable" },
    architecture: {
      nodes: [
        { id: 'gov', label: 'Govt. API', x: 5, y: 50, type: 'external' },
        { id: 'etl', label: 'ETL Pipeline', x: 30, y: 50, type: 'service' },
        { id: 'postgis', label: 'PostGIS (Spatial)', x: 60, y: 50, type: 'db' },
        { id: 'dashboard', label: 'React / D3 Engine', x: 90, y: 50, type: 'service' }
      ],
      connections: [
        { from: 'gov', to: 'etl', label: 'Ingest' },
        { from: 'etl', to: 'postgis', label: 'Query' },
        { from: 'postgis', to: 'dashboard', label: 'Visualize' }
      ]
    }
  }
];

export default projectsData;
