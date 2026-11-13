import { worldMap } from "../../../../assets";

export default function WorldMapGraphic() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
      {/* Background Subtle Coordinate Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f1a_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f1a_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Real Geographically Accurate World Map SVG with Dot Matrix Landmasses */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={worldMap}
          onError={(e) => {
            e.currentTarget.src = `${import.meta.env.BASE_URL}world-map.svg`;
          }}
          alt="Real World Map"
          className="w-full h-full object-cover md:object-contain opacity-85 brightness-110"
          loading="eager"
        />
      </div>

      {/* Tactical Red & Cyan Clusters (Matching Toka Screenshot) */}
      <svg
        className="absolute inset-0 w-full h-full object-cover md:object-contain"
        viewBox="0 0 950 620"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <radialGradient id="redCluster" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ef4444" stopOpacity="0.95" />
            <stop offset="40%" stopColor="#ef4444" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="cyanCluster" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#4BE1C4" stopOpacity="0.95" />
            <stop offset="45%" stopColor="#4BE1C4" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#4BE1C4" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Real Coordinate Hotspots */}
        {/* North America (West Coast / Silicon Valley) */}
        <circle cx="160" cy="190" r="32" fill="url(#redCluster)" />
        <circle cx="160" cy="190" r="3.5" fill="#ef4444" />
        {/* North America (East Coast / NY) */}
        <circle cx="230" cy="180" r="28" fill="url(#cyanCluster)" />
        <circle cx="230" cy="180" r="3" fill="#4BE1C4" />

        {/* Europe (London / Frankfurt) */}
        <circle cx="485" cy="170" r="36" fill="url(#redCluster)" />
        <circle cx="485" cy="170" r="4" fill="#ef4444" />

        {/* Middle East */}
        <circle cx="560" cy="240" r="28" fill="url(#redCluster)" />
        <circle cx="560" cy="240" r="3" fill="#ef4444" />

        {/* India (Delhi / Bengaluru) */}
        <circle cx="660" cy="265" r="40" fill="url(#cyanCluster)" />
        <circle cx="660" cy="265" r="4.5" fill="#4BE1C4" />
        <circle cx="660" cy="265" r="16" stroke="#4BE1C4" strokeWidth="0.85" strokeDasharray="2 3" opacity="0.8" />

        {/* East Asia (Tokyo / Singapore) */}
        <circle cx="780" cy="210" r="34" fill="url(#redCluster)" />
        <circle cx="780" cy="210" r="4" fill="#ef4444" />
        <circle cx="730" cy="330" r="26" fill="url(#cyanCluster)" />
        <circle cx="730" cy="330" r="3" fill="#4BE1C4" />

        {/* Australia (Sydney) */}
        <circle cx="830" cy="450" r="30" fill="url(#redCluster)" />
        <circle cx="830" cy="450" r="3.5" fill="#ef4444" />
      </svg>

      {/* Subtle edge vignetting */}
      <div className="absolute inset-0 bg-radial from-transparent via-transparent to-[#000000]/60 pointer-events-none" />
    </div>
  );
}
