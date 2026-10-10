import { Link } from "react-router-dom";

export default function About() {
return (
    <main className="relative min-h-screen overflow-hidden bg-[#030712] px-5 py-16 text-white sm:px-8 lg:px-12">

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-20 h-64 w-64 animate-pulse rounded-full bg-cyan-400/10 blur-[100px]" />
        <div className="absolute bottom-20 right-1/4 h-64 w-64 animate-pulse rounded-full bg-blue-500/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-5xl">

        <div className="mt-14 text-center sm:mt-20">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
            About KMStreamX
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Stream.
            <span className="text-cyan-300"> Discover.</span>
            <br />
            Enjoy.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            KMStreamX is a modern streaming platform made for discovering
            live TV channels and enjoying entertainment in a simple way.
          </p>
        </div>


        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {[
            {
              number: "01",
              title: "Live TV",
              text: "Watch your favorite channels in one simple place.",
            },
            {
              number: "02",
              title: "Easy to Use",
              text: "Clean interface designed to keep everything simple.",
            },
            {
              number: "03",
              title: "Any Device",
              text: "Responsive experience across mobile, tablet and desktop.",
            },
          ].map((item) => (
            <div
              key={item.number}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-cyan-400/[0.04]"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-cyan-300">
                  {item.number}
                </span>

                <span className="h-2 w-2 rounded-full bg-cyan-300 opacity-40 transition-all duration-500 group-hover:scale-150 group-hover:opacity-100" />
              </div>

              <h2 className="mt-8 text-xl font-bold">{item.title}</h2>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                {item.text}
              </p>
            </div>
          ))}
        </div>


        <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-white">
                Built for better streaming.
              </p>

              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                Our goal is simple — make finding and watching live
                entertainment faster, cleaner and more enjoyable.
              </p>
            </div>

            <Link
              to="/channel-box"
              className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-cyan-300 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:scale-105 hover:bg-cyan-200"
            >
              Explore Channels
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}