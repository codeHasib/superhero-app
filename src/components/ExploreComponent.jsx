"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Lock, Search, Zap, Eye } from "lucide-react";

const ExploreComponent = ({ fetchedHeroes }) => {
  const [search, setSearch] = useState("");
  fetchedHeroes?.filter((h) =>
    h.name.toLowerCase().includes(search.toLowerCase()),
  );

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-10 relative overflow-hidden">
      {/* BACKGROUND TEXT DECORATION */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-5 select-none">
        <h1 className="text-[20vw] font-black uppercase leading-none">
          Classified Classified Classified
        </h1>
      </div>

      <header className="relative z-10 max-w-7xl mx-auto mb-16 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="inline-block bg-red-600 text-white px-4 py-1 font-black uppercase italic mb-4 -rotate-2 border-2 border-black">
            Public Access Limited
          </div>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter italic">
            Hero <span className="text-yellow-400">Database</span>
          </h1>
          <p className="text-zinc-400 font-bold max-w-2xl mt-4 uppercase text-sm md:text-base">
            You are currently viewing the public directory.{" "}
            <Link href="/auth/signup" className="text-red-500 underline">
              Sign up
            </Link>{" "}
            to unlock detailed dossiers, combat simulations, and private vaults.
          </p>
        </motion.div>

        {/* SEARCH BAR */}
        <div className="mt-10 relative max-w-md mx-auto md:mx-0">
          <input
            type="text"
            placeholder="Search Identity..."
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-zinc-900 border-4 border-black p-4 pl-12 font-black uppercase shadow-[6px_6px_0px_0px_rgba(234,179,8,1)] focus:outline-none focus:shadow-none transition-all"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-400" />
        </div>
      </header>

      {/* HERO GRID */}
      <motion.section
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {fetchedHeroes
          ?.filter((h) => h.name.toLowerCase().includes(search.toLowerCase()))
          .map((hero, idx) => (
            <motion.div
              key={hero.id}
              variants={item}
              whileHover={{ y: -10 }}
              className="group relative bg-zinc-900 border-2 border-zinc-800 hover:border-red-600 transition-colors cursor-help"
            >
              {/* HERO IMAGE */}
              <div className="relative h-72 w-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                <Image
                  src={hero.images.lg}
                  alt={hero.name}
                  fill
                  className="object-cover object-top scale-110 group-hover:scale-100 transition-transform duration-500"
                />

                {/* "LOCKED" OVERLAY */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Link
                    href="/auth/signup"
                    className="bg-yellow-400 text-black p-3 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                  >
                    <Lock size={24} />
                  </Link>
                </div>
              </div>

              {/* INFO PANEL */}
              <div className="p-4 border-t-4 border-black bg-zinc-900">
                <h3 className="text-xl font-black uppercase text-white truncate">
                  {hero.name}
                </h3>

                {/* CLASSIFIED STATS (Blurred for Non-Users) */}
                <div className="mt-3 flex gap-2">
                  <div className="h-4 w-full bg-zinc-800 relative overflow-hidden">
                    <div className="absolute inset-0 bg-red-600/30 blur-[4px]" />
                    <span className="absolute inset-0 flex items-center justify-center text-[8px] font-black uppercase opacity-50">
                      Classified
                    </span>
                  </div>
                  <div className="h-4 w-full bg-zinc-800 relative overflow-hidden">
                    <div className="absolute inset-0 bg-yellow-600/30 blur-[4px]" />
                    <span className="absolute inset-0 flex items-center justify-center text-[8px] font-black uppercase opacity-50">
                      Classified
                    </span>
                  </div>
                </div>
              </div>

              {/* FLOATING BADGE */}
              <div className="absolute -top-2 -right-2 bg-black border-2 border-red-600 text-red-600 text-[10px] font-black px-2 py-0.5 rotate-12 uppercase group-hover:rotate-0 transition-transform">
                Limited Data
              </div>
            </motion.div>
          ))}
      </motion.section>

      {/* BOTTOM CTA PANEL */}
      <motion.div
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl"
      >
        <div className="bg-yellow-400 border-4 border-black p-6 shadow-[10px_10px_0px_0px_rgba(220,38,38,1)] flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-black font-black uppercase text-xl italic leading-none">
              Want more than just a glimpse?
            </h4>
            <p className="text-black/80 font-bold text-xs uppercase mt-1">
              Unlock 500+ heroes and combat stats now.
            </p>
          </div>
          <Link href="/auth/signup">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-8 py-3 font-black uppercase text-sm border-2 border-white"
            >
              Join the Initiative
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ExploreComponent;
