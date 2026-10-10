import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import ParticleBackground from "../../Home/ParticleBackground";
import { getChannels } from "../../../services/ChannelDataapi";
import type { Channel } from "../../../types/channel.types";



export default function ChannelDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  const [channel, setChannel] = useState<Channel | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [isVideoLoading, setIsVideoLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    getChannels()
      .then((response) => {
        const list: Channel[] = response.data || response;
        const found = list.find((ch) => String(ch.id) === id);
        if (found) {
          setChannel(found);
        } else {
          setError("Channel not found!");
        }
      })
      .catch((err) => {
        console.error("Error loading channel:", err);
        setError("Failed to load channel details.");
      })
      .finally(() => setLoading(false));
  }, [id]);


  const handleBack = () => {
    window.scrollTo(0, 0);
    if (location.state && location.state.from) {
    navigate(location.state.from);
  } else {
    navigate(-1);
  }
  };



  if (loading) {
    return (
      <main className="relative min-h-screen bg-[#030712] flex items-center justify-center text-cyan-300">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-cyan-500/20 border-t-cyan-400" />
          <p className="animate-pulse">Loading Channel...</p>
        </div>
      </main>
    );
  }

  if (error || !channel) {
    return (
      <main className="relative min-h-screen bg-[#030712] flex flex-col items-center justify-center text-white px-5">
        <div className="rounded-2xl border border-red-400/20 bg-red-500/10 p-6 text-center text-red-300 max-w-md w-full">
          <p className="mb-4">{error || "Channel could not be found."}</p>
          <button
            onClick={handleBack}
            className="rounded-xl bg-white/10 cursor-pointer px-4 py-2 text-sm font-semibold hover:bg-white/20 transition"
          >
            &larr; Go Back
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030712] pt-20 pb-12 text-white">
      <div className="absolute inset-0 z-0">
        <ParticleBackground />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6">
        <button
          onClick={handleBack}
          className="mb-4 inline-flex items-center cursor-pointer gap-2 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/10"
        >
          &larr; Back
        </button>

        <div className="flex flex-col gap-4">
          <div className="relative aspect-video w-full max-h-[72vh] overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl">
            {isVideoLoading && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-950/80 backdrop-blur-sm gap-2">
                <div className="h-8 w-8 animate-spin rounded-full border-3 border-cyan-500/20 border-t-cyan-400" />
                <span className="text-xs font-semibold text-cyan-300 animate-pulse">Connecting Live Stream...</span>
              </div>
            )}

            {channel.channelLink ? (
              <video
                src={channel.channelLink}
                autoPlay
                muted={false}
                controls
                playsInline
                onPlaying={() => setIsVideoLoading(false)}
                className="h-full w-full object-fill bg-black select-none"
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="flex h-full w-full items-center justify-center text-slate-500">
                Stream not available
              </div>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400">
                <span>{channel.category || "General"}</span>
              </div>
              <h1 className="text-[12px] font-black text-white sm:text-2xl mt-1 uppercase tracking-wide">
                {channel.name}
              </h1>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-red-300 backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
              <span className="text-[10px] sm:text-[13px]">Watching Live</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}