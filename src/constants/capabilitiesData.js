export const CAPABILITIES_DATA = [
  {
    id: "systems-concurrency",
    index: "01",
    pillar: "SYSTEMS & CONCURRENCY",
    directive: "BACKEND ARCHITECTURE",
    summary:
      "Engineering low-latency backend services, multi-threaded pipelines, and concurrent distributed workers.",
    skills: ["Go (Golang)", "Node.js", "TypeScript", "gRPC / Protobuf", "REST APIs", "Microservices"],
    status: "PRIMARY FOCUS",
  },
  {
    id: "storage-streams",
    index: "02",
    pillar: "DATA PIPELINES & STORAGE",
    directive: "DISTRIBUTED PERSISTENCE",
    summary:
      "Real-time sensor telemetry, time-series storage, geospatial data indexing, and high-frequency message queues.",
    skills: ["PostgreSQL", "TimescaleDB", "PostGIS", "Redis", "RabbitMQ", "Apache Kafka", "MongoDB"],
    status: "HIGH THROUGHPUT",
  },
  {
    id: "cloud-devops",
    index: "03",
    pillar: "CLOUD & INFRASTRUCTURE",
    directive: "CONTAINERIZATION & DEVOPS",
    summary:
      "Automated CI/CD pipelines, container orchestration, edge deployments, and Linux system administration.",
    skills: ["Docker", "AWS (EC2, S3, RDS)", "Google Cloud", "CI/CD Pipelines", "Git", "Linux"],
    status: "PRODUCTION READY",
  },
  {
    id: "interfaces-viz",
    index: "04",
    pillar: "INTERFACE ARCHITECTURE",
    directive: "DATA VISUALIZATION & UI",
    summary:
      "Precision enterprise dashboards, interactive geospatial mapping, and performant web applications.",
    skills: ["React", "Next.js", "D3.js", "TailwindCSS", "Vite", "Framer Motion"],
    status: "MODERN WEB",
  },
];

export default CAPABILITIES_DATA;
