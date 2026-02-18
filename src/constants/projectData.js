
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
    challenges: "Handling spike-heavy traffic without overloading the MongoDB instance was the biggest challenge. Implementing a back-pressure mechanism with RabbitMQ helped stabilize the flow.",
    decisions: "Chose RabbitMQ over Kafka due to the need for granular message-level acknowledgments and complex routing requirements typical of our task types.",
    codeSnippet: `// Custom retry logic with exponential backoff
func (w *Worker) retry(task *Task) {
    backoff := time.Duration(1 << task.RetryCount) * time.Second
    time.Sleep(backoff)
    w.queue.Publish(task)
}`,
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
    challenges: "Ingesting 10k+ events/sec required a non-blocking gRPC server architecture. We optimized Protobuf serialization to reduce payload overhead by 40%.",
    decisions: "Used TimescaleDB because it's built on PostgreSQL but optimized for time-series data, allowing us to keep SQL familiarity while gaining massive performance in time-based queries.",
    codeSnippet: `// High-frequency sensor data ingestion
func (s *Server) Ingest(stream pb.IoT_IngestServer) error {
    for {
        event, err := stream.Recv()
        go s.process(event) // Non-blocking
    }
}`,
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
    challenges: "Visualizing million+ data points on a browser heatmap without lagging. Implemented a canvas-based rendering engine for D3 instead of SVG.",
    decisions: "PostGIS was essential for spatial queries, allowing us to find crime clusters within specific radius and administrative boundaries efficiently.",
    codeSnippet: `// Spatial query for crime clustering
SELECT ST_ClusterKMeans(geom, 5) OVER() 
FROM crime_reports 
WHERE city = 'Delhi';`,
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
  },
  {
    slug: "go-logstreamer",
    category: "engineering",
    title: "Go LogStreamer",
    description: "High-performance, concurrent log processing pipeline built in Go.",
    longDescription: "A specialized tool designed for low-latency log ingestion and processing. Built with a worker-pool architecture and zero-allocation logging principles to handle extreme throughput.",
    image: jspark, // Placeholder
    technologies: ["Golang", "Concurrency", "Channels", "Worker Pools"],
    links: { live: "#", github: "https://github.com/Narvdeshwar/go-logstreamer" },
    stats: { throughput: "~1M lines/sec", status: "Production Ready" },
    challenges: "Achieving million-line-per-second throughput required optimizing the scanner buffer and minimizing garbage collection pressure. Zero-allocation parsing was key.",
    decisions: "Chose a semaphore-based worker pool to strictly control resource consumption while maintaining maximum possible throughput across CPU cores.",
    codeSnippet: `// Worker pool dispatcher
func (p *Pipeline) Run(ctx context.Context) {
    for i := 0; i < p.workerCount; i++ {
        go p.worker(ctx)
    }
    p.dispatch(ctx)
}`,
    architecture: {
      nodes: [
        { id: 'source', label: 'Log Files / Streams', x: 5, y: 50, type: 'external' },
        { id: 'scanner', label: 'Fast Scanner', x: 30, y: 50, type: 'service' },
        { id: 'pool', label: 'Worker Pool (Semaphores)', x: 60, y: 50, type: 'queue' },
        { id: 'sink', label: 'Structured Sink (JSON/DB)', x: 90, y: 50, type: 'service' }
      ],
      connections: [
        { from: 'source', to: 'scanner', label: 'IO Stream' },
        { from: 'scanner', to: 'pool', label: 'Raw Lines' },
        { from: 'pool', to: 'sink', label: 'Processed JSON' }
      ]
    }
  },
  {
    slug: "event-notification-service",
    category: "engineering",
    title: "Event Notification Hub",
    description: "Scalable microservice for real-time notification dispatching.",
    longDescription: "An event-driven service that orchestrates multi-channel notifications (Push, Email, SMS) with guaranteed delivery and intelligent retry mechanisms.",
    image: jsparkprime, // Placeholder
    technologies: ["Golang", "RabbitMQ", "Redis", "Microservices"],
    links: { live: "#", github: "https://github.com/Narvdeshwar/Event-Notification-Service" },
    stats: { latency: "<50ms", status: "Active" },
    challenges: "Ensuring idempotency across multiple notification providers to prevent duplicate alerts during network flakiness was the primary hurdle.",
    decisions: "Implemented a Redis-backed locking mechanism to track event IDs and ensure 'at-least-once' delivery without 'more-than-once' annoyance.",
    codeSnippet: `// Event dispatcher with locking
func (d *Dispatcher) Dispatch(event *Event) error {
    if exists := d.cache.Check(event.ID); exists {
        return nil // Already processed
    }
    return d.provider.Send(event)
}`,
    architecture: {
      nodes: [
        { id: 'producers', label: 'Upstream Services', x: 5, y: 50, type: 'external' },
        { id: 'mq', label: 'Message Queue', x: 30, y: 50, type: 'queue' },
        { id: 'hub', label: 'Notification Hub', x: 60, y: 50, type: 'service' },
        { id: 'redis', label: 'Idempotency Store', x: 60, y: 80, type: 'db' },
        { id: 'providers', label: 'External Gateways', x: 90, y: 50, type: 'external' }
      ],
      connections: [
        { from: 'producers', to: 'mq', label: 'Trigger' },
        { from: 'mq', to: 'hub', label: 'Consume' },
        { from: 'hub', to: 'redis', label: 'Lock/Sync' },
        { from: 'hub', to: 'providers', label: 'Dispatch' }
      ]
    }
  },
  {
    slug: "restaurant-backend",
    category: "engineering",
    title: "Restaurant OS (API)",
    description: "Comprehensive backend architecture for modern restaurant management.",
    longDescription: "A production-grade REST API featuring complex resource management, role-based access control (RBAC), and automated inventory tracking.",
    image: jspark, // Placeholder
    technologies: ["Node.js", "Express", "MongoDB", "JWT", "TypeScript"],
    links: { live: "#", github: "https://github.com/Narvdeshwar/Restaurant-Backend" },
    stats: { endpoints: "45+", status: "Stable" },
    challenges: "Designing a flexible menu aggregation system that could handle thousands of modifiers and dynamic pricing variations with ease.",
    decisions: "Adopted a strict MVC architecture with a dependency injection layer to ensure the core business logic remains unit-testable and decoupled from the database.",
    codeSnippet: `// Decoupled Controller Logic
export const createOrder = async (req: Request, res: Response) => {
    const order = await OrderService.process(req.body);
    return res.status(201).json(order);
};`,
    architecture: {
      nodes: [
        { id: 'client', label: 'Staff/Customer UI', x: 5, y: 50, type: 'external' },
        { id: 'auth', label: 'JWT Gateway', x: 30, y: 50, type: 'service' },
        { id: 'logic', label: 'Core MVC Engine', x: 60, y: 50, type: 'service' },
        { id: 'mongo', label: 'MongoDB Cluster', x: 90, y: 50, type: 'db' }
      ],
      connections: [
        { from: 'client', to: 'auth', label: 'HTTPS' },
        { from: 'auth', to: 'logic', label: 'Verified Request' },
        { from: 'logic', to: 'mongo', label: 'CRUD' }
      ]
    }
  }
];

export default projectsData;
