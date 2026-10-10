import { useEffect, useState, Suspense } from "react";
import { Link, useSearchParams } from "react-router-dom";
import ParticleBackground from "../../Home/ParticleBackground";
import { getChannels } from "../../../services/ChannelDataapi";
import { CATEGORIES } from "../../../types/channel.types";
import type { Channel, ChannelCategory } from "../../../types/channel.types";

const PAGE_SIZE = 8;

function ChannelCard({ channel }: { channel: Channel }) {
  const [imgFailed, setImgFailed] = useState(false);
  const showImage = channel.image && !imgFailed;

  return (
    <Link
      to={`/channel-box/${channel.id}`}
      state={{ from: window.location.pathname + window.location.search }}
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-400/40 hover:shadow-[0_10px_40px_rgba(34,211,238,0.15)]"
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
            <span className="text-4xl font-black text-cyan-300/40">{channel.name.charAt(0)}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/80 via-transparent to-transparent" />
        <span className="absolute left-2.5 top-2.5 inline-flex items-center gap-1.5 rounded-full border border-red-400/30 bg-black/50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-red-300 backdrop-blur-md">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-400" />
          Live
        </span>
      </div>
      <div className="flex items-center justify-between gap-2 p-4">
        <h3 className="truncate text-sm font-semibold text-white transition-colors group-hover:text-cyan-300 sm:text-base">
          {channel.name}
        </h3>
        <svg className="h-4 w-4 shrink-0 text-cyan-300 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H6" />
        </svg>
      </div>
    </Link>
  );
}

function ChannelContent() {
  const [searchParams] = useSearchParams();
  const [channels, setChannels] = useState<Channel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const param = searchParams.get("category");
  const activeCategory: ChannelCategory =
    CATEGORIES.find((c) => c.toLowerCase() === param?.toLowerCase()) ?? CATEGORIES[0];

  useEffect(() => {
    getChannels()
      .then((response) => setChannels(response.data || response))
      .catch((err) => {
        console.error("Error fetching channels:", err);
        setError("We couldn't load the channels right now.");
      })
      .finally(() => setLoading(false));
  }, []);

  const filtered = channels.filter(
    (ch) => ch.category?.toLowerCase() === activeCategory.toLowerCase(),
  );

  const visibleChannels = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (

    <div className="flex flex-col md:flex-row items-start gap-8 w-full h-auto md:h-[calc(100vh-100px)] overflow-visible md:overflow-hidden">
      
     
      <aside className="w-full md:w-56 md:shrink-0 h-auto md:h-full flex flex-col justify-start">
        <Link
          to="/channel-box"
          className="mb-4 inline-flex items-center cursor-pointer gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/10 w-fit"
        >
          &larr; Back
        </Link>

        <nav className="no-scrollbar flex gap-2 overflow-x-auto pb-2 md:flex-col md:overflow-y-auto md:pb-0 pr-1">
          {CATEGORIES.map((category) => {
            const isActive = category === activeCategory;
            return (
              <Link
                key={category}
                to={`?category=${category}`}
                replace
                onClick={() => setVisibleCount(PAGE_SIZE)}
                className={`whitespace-nowrap rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                  isActive
                    ? "border-cyan-300/40 bg-cyan-300/15 text-cyan-200 shadow-[0_0_25px_rgba(114,221,247,0.15)]"
                    : "border-white/10 bg-white/[0.03] text-slate-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                {category}
              </Link>
            );
          })}
        </nav>
      </aside>

     
      <section className="min-w-0 flex-1 w-full h-auto md:h-full flex flex-col overflow-visible md:overflow-hidden">
        
        
        <div className="shrink-0 bg-[#030712] pb-4 pt-1 z-10">
          <h1 className="text-2xl font-black tracking-tight sm:text-3xl">
            <span className="bg-gradient-to-r from-cyan-200 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {activeCategory}
            </span>{" "}
            Channels
          </h1>
        </div>

       
        <div className="flex-1 overflow-visible md:overflow-y-auto no-scrollbar pr-0 md:pr-2 pt-2 pb-12">
          {loading && (
            <div className="flex items-center gap-3 py-20 text-cyan-300">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-cyan-500/20 border-t-cyan-400" />
              <p className="animate-pulse">Loading...</p>
            </div>
          )}

          {!loading && error && (
            <div className="rounded-2xl border border-red-400/20 bg-red-500/10 p-6 text-center text-red-300">
              {error}
            </div>
          )}

          {!loading && !error && filtered.length === 0 && (
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-10 text-center text-slate-400">
              No channels found in this category.
            </div>
          )}

          {!loading && !error && filtered.length > 0 && (
            <>
             
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
                {visibleChannels.map((channel) => (
                  <ChannelCard key={channel.id} channel={channel} />
                ))}
              </div>

              {hasMore && (
                <div className="mt-10 flex justify-center pb-8">
                  <button
                    onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
                    className="rounded-xl border cursor-pointer border-cyan-300/30 bg-cyan-300/10 px-8 py-3 text-sm font-bold text-cyan-200 transition hover:bg-cyan-300 hover:text-slate-950"
                  >
                    Load More
                  </button>
                </div>
              )}
            </>
          )}
        </div>

      </section>
    </div>
  );
}

export default function ChannelViewAll() {
  return (
    
    <main className="relative min-h-screen md:h-screen overflow-y-auto md:overflow-hidden bg-[#030712] pt-20 text-white">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ParticleBackground />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-4 sm:px-8 lg:px-12 h-auto md:h-full">
        <Suspense fallback={<div className="py-20 text-center text-cyan-300 animate-pulse">Loading category...</div>}>
          <ChannelContent />
        </Suspense>
      </div>
    </main>
  );
}