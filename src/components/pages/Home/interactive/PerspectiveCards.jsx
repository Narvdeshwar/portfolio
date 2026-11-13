export default function PerspectiveCards() {
  const pillars = [
    {
      title: "BACKEND ARCHITECTURE",
      desc: "Writing clean, fast server code in Go and Node that handles high traffic smoothly without slowdowns.",
    },
    {
      title: "SMART DATA FLOW",
      desc: "Designing fast database queries with PostgreSQL and Redis caching so information loads in milliseconds.",
    },
    {
      title: "CLOUD INFRASTRUCTURE",
      desc: "Running software reliably in Docker containers and cloud servers that stay online 24/7.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
      {pillars.map((p) => (
        <div key={p.title} className="flex flex-col gap-2.5">
          <div className="flex items-center gap-1.5 font-plex-caption text-xs text-[#4BE1C4]">
            <span>+</span>
            <span>{p.title}</span>
          </div>
          <p className="text-sm text-[#A6A6A6] leading-relaxed">
            {p.desc}
          </p>
        </div>
      ))}
    </div>
  );
}
