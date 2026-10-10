import { Link } from "react-router-dom";
import OnlineBadge from "./OnlineBadge";
import img1 from "../../assets/ks.svg";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between border-b border-white/10 bg-[#011223] px-4 backdrop-blur">
      <Link to="/" className="flex items-center">
        <img
          src={img1}
          alt="StreamPulse"
          className="h-8 w-25 sm:w-auto object-contain"
        />
      </Link>
      <OnlineBadge />
    </header>
  );
}