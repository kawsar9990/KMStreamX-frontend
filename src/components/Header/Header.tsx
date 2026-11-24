import { Link } from "react-router-dom";
import OnlineBadge from "./OnlineBadge";
import img1 from "../../assets/ks.svg";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-14 border-b border-white/10 bg-[#011223] backdrop-blur">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-2 sm:px-4">
        <Link to="/" className="flex items-center">
          <img
            src={img1}
            alt="StreamPulse"
            className="h-8 w-auto object-contain"
          />
        </Link>
        <OnlineBadge />
      </div>
    </header>
  );
}