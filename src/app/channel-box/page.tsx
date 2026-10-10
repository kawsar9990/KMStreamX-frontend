import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ParticleBackground from "../Home/ParticleBackground";
import { getChannels } from "../../services/ChannelDataapi";
import type { Channel } from "../../types/channel.types";

const CATEGORIES = ["News", "Sports", "Entertainment", "Movies", "Music", "Kids", "Religious"];

function ChannelCard({ channel }: { channel: Channel }) {
  const [imgFailed, setImgFailed] = useState(false);
  const showImage = channel.image && !imgFailed;

return (
    <Link
      to={`/channel-box/${channel.id}`}
      state={{ from: window.location.pathname + window.location.search }}
      rel="noopener noreferrer"
      className="group cursor-pointer flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400/40 hover:shadow-[0_10px_40px_rgba(34,211,238,0.15)]"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
        {showImage ? (
          <img
            src={channel.image!}
            alt={channel.name}
            loading="lazy"
            decoding="async"
            onError={() => setImgFailed(true)}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
            <span className="text-4xl font-black text-cyan-300/40">
              {channel.name.charAt(0)}
            </span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/80 via-transparent to-transparent" />

        <span className="absolute left-2.5 top-2.5 inline-flex items-center gap-1.5 rounded-full border border-red-400/30 bg-black/50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-red-300 backdrop-blur-md">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-400" />
          Live
        </span>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-300/90 text-slate-950 shadow-[0_0_30px_rgba(114,221,247,0.5)]">
            <svg className="ml-0.5 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-2 p-4">
        <h3 className="truncate text-sm font-semibold text-white transition-colors group-hover:text-cyan-300 sm:text-base">
          {channel.name}
        </h3>
        <svg
          className="h-4 w-4 shrink-0 text-cyan-300 transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H6" />
        </svg>
      </div>
    </Link>
  );
}


function ErrorState({ message, onRetry }: { message: string; onRetry: () => void }) {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#030712] px-5 text-white">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/10 blur-[120px]" />

      <div className="relative z-10 w-full max-w-md rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center backdrop-blur-xl">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-red-400/20 bg-red-500/10">
          <svg className="h-8 w-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
          </svg>
        </div>

        <h2 className="text-2xl font-black tracking-tight">Something went wrong</h2>
        <p className="mt-2 text-sm leading-6 text-slate-400">{message}</p>
        <p className="mt-1 text-xs text-slate-500">Please check your connection and try again.</p>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button
            onClick={onRetry}
            className="rounded-xl cursor-pointer bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 shadow-[0_0_30px_rgba(114,221,247,0.2)] transition hover:scale-105 hover:bg-cyan-200"
          >
            Try Again
          </button>
          <Link
            to="/"
            className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}


export default function ChannelBox() {
  const [channels, setChannels] = useState<Channel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadData = useCallback(async () => {
    try {
      const response = await getChannels();
      const channelList = response.data || response;
      setChannels(channelList);
    } catch (err) {
      console.error("Error fetching channels:", err);
      setError("We couldn't load the channels right now.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void Promise.resolve().then(loadData);
  }, [loadData]);

  if (loading) {
    return (
      <div className="relative min-h-screen bg-[#030712] flex flex-col items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ParticleBackground />
        </div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="relative flex items-center justify-center">
            <div className="h-16 w-16 rounded-full border-4 border-cyan-500/20 border-t-cyan-400 animate-spin" />
            <div className="absolute h-8 w-8 rounded-full border-4 border-blue-500/20 border-b-blue-400 animate-spin" style={{ animationDirection: "reverse", animationDuration: "0.8s" }} />
          </div>
          <p className="mt-4 text-cyan-300 font-medium tracking-wide animate-pulse">Loading TV Channels...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return <ErrorState message={error} onRetry={loadData} />;
  }

  return (
    <main className="relative min-h-screen overflow-hidden pt-10 md:pt-15 lg:pt-20 bg-[#030712] text-white">
      <div className="absolute inset-0 z-0">
        <ParticleBackground />
      </div>

      <div className="relative z-10 py-10 px-5 sm:px-8 lg:px-12 max-w-7xl mx-auto">

        <div className="space-y-12">
          {CATEGORIES.map((category) => {
            const filteredChannels = channels
              .filter((ch) => ch.category?.toLowerCase() === category.toLowerCase())
              .slice(0, 4);

            if (filteredChannels.length === 0) return null;

            return (
              <section key={category} className="w-full">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold tracking-wide text-cyan-300">{category}</h2>
                  <Link
                      to={`/channel-box/view-all?category=${category}`}
                      className="text-xs sm:text-sm font-semibold text-slate-400 hover:text-cyan-300 transition-colors"
                    >
                      View All &rarr;
                    </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                  {filteredChannels.map((channel) => (
                    <ChannelCard key={channel.id} channel={channel} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
}