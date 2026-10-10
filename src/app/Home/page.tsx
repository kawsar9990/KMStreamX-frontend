import { Link } from "react-router-dom";
import ParticlesBackground from "./ParticleBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030712] text-white">

      <div className="absolute inset-0">
        <ParticlesBackground />
      </div>


      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[120px]" />

        <div className="absolute -left-40 top-0 h-[400px] w-[400px] rounded-full bg-cyan-400/10 blur-[100px]" />

        <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]" />
      </div>


      <section className="relative z-10 flex min-h-screen items-center px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mx-auto max-w-5xl text-center">

            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/5 px-4 py-2 text-sm text-cyan-200 backdrop-blur-xl">
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />

              KMStreamX Live TV
            </div>

    
        <h1 className="text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl xl:text-7xl">
           Welcome to
          <br />
          <span className="bg-gradient-to-r from-cyan-200 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
           KMStreamX.
          </span>
        </h1>



     
            <p className="mx-auto mt-8 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8 md:text-xl">
              Discover and watch your favorite TV channels in one beautiful
              streaming platform. Fast, simple and available whenever you
              want.
            </p>

        
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/channel-box"
                className="group flex min-h-14 w-full items-center justify-center rounded-xl bg-cyan-300 px-8 text-base font-bold text-slate-950 shadow-[0_0_35px_rgba(114,221,247,0.25)] transition duration-300 hover:scale-105 hover:bg-cyan-200 hover:shadow-[0_0_60px_rgba(114,221,247,0.35)] sm:w-auto"
              >
                <span>Explore TV Channels</span>

                <svg
                  className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>

              <Link
                to="/about"
                className="flex min-h-14 w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 px-8 text-base font-semibold text-white backdrop-blur-xl transition duration-300 hover:border-cyan-300/30 hover:bg-white/10 sm:w-auto"
              >
                Learn More
              </Link>
            </div>

        
            <div className="mx-auto mt-20 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
                <p className="text-3xl font-bold text-cyan-300">100+</p>
                <p className="mt-1 text-sm text-slate-400">
                  TV Channels
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
                <p className="text-3xl font-bold text-cyan-300">24/7</p>
                <p className="mt-1 text-sm text-slate-400">
                  Live Streaming
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
                <p className="text-3xl font-bold text-cyan-300">HD</p>
                <p className="mt-1 text-sm text-slate-400">
                  Quality Streaming
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}