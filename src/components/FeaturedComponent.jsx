"use client";

import { motion } from "framer-motion";
import { Bot, Cpu, Zap, Shield, Database, LayoutPanelLeft } from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "Project J.A.R.V.I.S.",
    desc: "Our proprietary 'Just A Rather Very Intelligent System'. Ask anything about hero weaknesses, origin stories, or combat history.",
    icon: <Bot className="w-12 h-12" />,
    color: "bg-red-600",
    tag: "EXPERIMENTAL",
  },
  {
    title: "Combat Analytics",
    desc: "Compare two legends in a simulated environment. We calculate victory probability based on 6 core power metrics.",
    icon: <Zap className="w-12 h-12" />,
    color: "bg-yellow-400",
    tag: "PREMIUM",
  },
  {
    title: "The Vault",
    desc: "A secured private database to store your 'High-Value' targets and favorite multiverse variants.",
    icon: <Database className="w-12 h-12" />,
    color: "bg-black",
    textColor: "text-white",
    tag: "SECURE",
  },
];

const FeaturesComponent = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-600">
      {/* SECTION 1: HERO HEADER */}
      <section className="relative py-20 px-6 border-b-8 border-black bg-zinc-900 overflow-hidden">
        {/* Animated Grid Background */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center"
          >
            <div className="bg-yellow-400 text-black px-3 py-1 font-black uppercase text-sm mb-6 -rotate-2">
              System Specifications v4.0
            </div>
            <h1 className="text-6xl md:text-9xl font-black uppercase italic tracking-tighter">
              The <span className="text-red-600">Arsenal</span>
            </h1>
            <p className="max-w-2xl text-zinc-400 font-bold mt-6 text-lg uppercase tracking-wide">
              Advanced tools designed for tracking, analyzing, and archiving the
              world's most powerful entities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: THE MAIN FEATURES */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-16">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-12`}
            >
              {/* Visual Panel */}
              <div
                className={`w-full md:w-1/2 h-80 ${f.color} border-4 border-black shadow-[15px_15px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center relative group overflow-hidden`}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className={f.textColor || "text-black"}
                >
                  {f.icon}
                </motion.div>
                {/* Floating Tag */}
                <div className="absolute top-4 left-4 bg-white text-black px-3 py-1 font-black text-xs border-2 border-black">
                  {f.tag}
                </div>
              </div>

              {/* Text Content */}
              <div className="w-full md:w-1/2">
                <h2 className="text-4xl md:text-6xl font-black uppercase mb-4 italic italic">
                  {f.title}
                </h2>
                <p className="text-zinc-400 font-bold text-lg leading-relaxed mb-8">
                  {f.desc}
                </p>
                <Link href="/auth/signup">
                  <motion.button
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4 text-yellow-400 font-black uppercase tracking-widest group"
                  >
                    <span>Request Access</span>
                    <div className="h-0.5 w-12 bg-yellow-400 group-hover:w-20 transition-all" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 3: JARVIS PREVIEW (Special Animation) */}
      <section className="bg-red-600 py-24 px-6 border-y-8 border-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="inline-block p-6 rounded-full bg-black mb-8 border-4 border-yellow-400"
          >
            <Cpu className="text-yellow-400 w-16 h-16" />
          </motion.div>
          <h3 className="text-black text-4xl md:text-6xl font-black uppercase mb-6 leading-none">
            "At your service, Sir."
          </h3>
          <p className="text-black font-bold text-xl mb-10">
            Jarvis isn't just a search bar. He's an AI trained on decades of
            comic history, ready to answer your most complex hero inquiries.
          </p>
          <Link href="/auth/signup">
            <button className="bg-black text-white px-10 py-4 font-black uppercase border-4 border-black hover:bg-yellow-400 hover:text-black transition-colors shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)]">
              Boot Up Jarvis
            </button>
          </Link>
        </div>
      </section>

      {/* FOOTER CTA */}
      <footer className="py-20 text-center">
        <h2 className="text-zinc-800 text-8xl font-black uppercase opacity-20 select-none mb-[-2rem]">
          HERO VAULT
        </h2>
        <Link
          href="/auth/signup"
          className="relative z-10 text-yellow-400 font-black uppercase hover:text-red-600 transition-colors underline decoration-4 underline-offset-8"
        >
          Create Your Free Account Today
        </Link>
      </footer>
    </div>
  );
};

export default FeaturesComponent;
