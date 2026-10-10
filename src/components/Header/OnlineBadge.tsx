import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";

export default function OnlineBadge() {
const [onlineCount, setOnlineCount] = useState<number>(0);

useEffect(() => {
  
  const wsUrl = import.meta.env.VITE_WS_URL || ""
  if (!wsUrl) return;
  const ws = new WebSocket(wsUrl);
  
  ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.event === "ONLINE_COUNT") {
          setOnlineCount(data.count);
        }
      } catch (err) {
        console.error("Failed to parse WS message", err);
      }
    };
    ws.onerror = (error) => {
      console.error("WebSocket Error:", error);
    };
    return () => {
      if (ws.readyState === WebSocket.OPEN) {
        ws.close();
      } else if (ws.readyState === WebSocket.CONNECTING) {
        ws.onopen = () => ws.close();
      }
    };
}, [])

  return (
    <button className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-sm text-white transition hover:bg-white/20">
      <FaUser className="text-[10px] sm:text-[15px]" />
      <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
      <span className="text-[10px] sm:text-[15px]">{onlineCount} online</span>
    </button>
  );
}