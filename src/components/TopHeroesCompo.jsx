"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Crown, TrendingUp, Lock } from "lucide-react";

const TopHeroes = ({ heroes }) => {
  // Taking the first 10 heroes as "Top" for this example
  const topTier = heroes?.slice(0, 10) || [];

  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* 1. HEADER SECTION */}
      <header className="max-w-7xl mx-auto py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-red-600 text-black font-black px-4 py-1 uppercase italic mb-6 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
        >
          <Crown size={20} />
          Current Meta: S-Tier
        </motion.div>

        <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter italic leading-none">
          Top <span className="text-yellow-400">Legends</span>
        </h1>
        <p className="text-zinc-500 font-bold mt-6 uppercase tracking-[0.2em]">
          The most searched and analyzed entities this week
        </p>
      </header>

      {/* 2. THE LEADERBOARD GRID */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 pb-20">
        {topTier.map((hero, index) => (
          <motion.div
            key={hero.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative flex flex-col md:flex-row bg-zinc-900 border-4 border-black hover:border-yellow-400 transition-colors shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden"
          >
            {/* Rank Number (Floating) */}
            <div className="absolute top-0 left-0 bg-yellow-400 text-black font-black text-4xl px-4 py-2 z-20 border-b-4 border-r-4 border-black italic">
              #{index + 1}
            </div>

            {/* Hero Image Section */}
            <div className="relative w-full md:w-48 h-64 md:h-auto bg-zinc-800">
              <Image
                src={hero.images.lg}
                alt={hero.name}
                fill
                className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>

            {/* Hero Details Section */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-red-600 font-black text-xs uppercase mb-1">
                  <TrendingUp size={14} /> High Activity
                </div>
                <h2 className="text-4xl font-black uppercase italic group-hover:text-yellow-400 transition-colors leading-none">
                  {hero.name}
                </h2>
                <p className="text-zinc-500 font-bold text-xs mt-2 uppercase tracking-widest">
                  Alias: {hero.biography.fullName || "Unknown"}
                </p>
              </div>

              {/* Locked Stats Teaser */}
              <div className="mt-6">
                <div className="flex justify-between text-[10px] font-black uppercase text-zinc-400 mb-1">
                  <span>Combat Efficiency</span>
                  <span className="text-yellow-400 italic">Locked</span>
                </div>
                <div className="h-4 w-full bg-black border border-zinc-800 relative">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "75%" }}
                    className="h-full bg-zinc-800 flex items-center justify-center"
                  >
                    <Lock size={10} className="text-zinc-600" />
                  </motion.div>
                </div>
              </div>

              <Link href="/auth/signup" className="mt-6 block">
                <button className="w-full py-2 bg-black text-white font-black uppercase text-xs border-2 border-zinc-700 hover:bg-white hover:text-black transition-all">
                  View Full Intelligence Report
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </section>

      {/* 3. CALL TO ACTION FOOTER */}
      <motion.section
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        className="max-w-4xl mx-auto bg-yellow-400 border-8 border-black p-10 text-center mb-20 -rotate-1 shadow-[15px_15px_0px_0px_rgba(220,38,38,1)]"
      >
        <h3 className="text-black text-5xl font-black uppercase italic leading-none mb-4">
          Want the full list?
        </h3>
        <p className="text-black font-bold text-lg mb-8 uppercase tracking-tight">
          Over 500+ identities are waiting to be uncovered in the main vault.
        </p>
        <Link href="/auth/signup">
          <button className="bg-black text-white px-12 py-5 font-black uppercase text-2xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(255,255,255,0.3)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
            Sign Up For Free Access
          </button>
        </Link>
      </motion.section>
    </div>
  );
};

export default TopHeroes;