import { useState, useEffect } from "react";

export default function LiveClock({ timezone = "Asia/Kolkata", label = "IST" }) {
  const [timeStr, setTimeStr] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString("en-US", {
        timeZone: timezone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      setTimeStr(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [timezone]);

  return (
    <span className="font-plex-caption text-[#A6A6A6] tracking-[0.84px]">
      {timeStr ? `${timeStr} ${label}` : `--:--:-- ${label}`}
    </span>
  );
}
