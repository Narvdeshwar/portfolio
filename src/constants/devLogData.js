export const devLogEntries = [
  {
    id: 1,
    date: "Feb 2026",
    title: "Why Concurrent Pipelines? (Golang)",
    topic: "Architecture",
    content: "Sequential processing is for hobbyists. In production, we need a worker-pool pattern with semaphores to handle 1M+ lines without blowing up memory.",
    impact: "Impact: 40% reduction in processing latency."
  },
  {
    id: 2,
    date: "Jan 2026",
    title: "The Redis Idempotency Lock",
    topic: "Backend",
    content: "Network flakiness is real. Implementing a distributed lock with a 30s TTL ensures your notification service doesn't spam users twice.",
    impact: "Impact: Erased duplicate alert bugs completely."
  },
  {
    id: 3,
    date: "Dec 2025",
    title: "SVG vs Canvas Rendering",
    topic: "Performance",
    content: "When visualizing million+ data points for NCRB datasets, SVG DOM nodes become a bottleneck. Offloading to Canvas is non-negotiable for fluid UI.",
    impact: "Impact: Maintain 60fps on complex heatmaps."
  }
];
