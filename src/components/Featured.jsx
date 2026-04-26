import { motion } from "framer-motion";
import { ShieldCheck, Heart, Zap, Search } from "lucide-react";
import Link from "next/link";
import { FaRobot } from "react-icons/fa6";

const benefits = [
  {
    title: "500+ Heroes",
    desc: "Access the full database of legends, from street-level vigilantes to cosmic entities.",
    icon: <Search className="w-8 h-8" />,
    color: "bg-yellow-400",
  },
  {
    title: "Power Comparison",
    desc: "Analyze stats side-by-side. Who wins? Strength, Speed, and Intelligence metrics compared.",
    icon: <Zap className="w-8 h-8" />,
    color: "bg-red-600",
  },
  {
    title: "Secret Vault",
    desc: "Save your favorite heroes to your personal 'Favorites' list for quick access.",
    icon: <Heart className="w-8 h-8" />,
    color: "bg-black",
    textColor: "text-white",
  },
  {
    title: "Jarvis AI",
    desc: "Get your personal Jarvis and ask whatever you want to ask about heroes.",
    icon: <FaRobot className="w-8 h-8" />,
    color: "bg-blue-400",
    textColor: "text-white",
  },
];

const Featured = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const panelVariants = {
    hidden: { y: 50, opacity: 0, rotate: -2 },
    visible: {
      y: 0,
      opacity: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <section className="py-24 bg-zinc-100 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black uppercase italic tracking-tighter text-black">
            Unlock <span className="text-red-600">Premium</span> Clearance
          </h2>
          <p className="text-zinc-600 font-bold mt-2">
            Sign up for free and take control of the multiverse.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={panelVariants}
              whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? 1 : -1 }}
              className={`${benefit.color} ${benefit.textColor || "text-black"} p-8 border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between h-80 relative overflow-hidden`}
            >
              {/* Halftone Pattern Overlay */}
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, currentColor 1px, transparent 1px)",
                  backgroundSize: "10px 10px",
                }}
              />

              <div className="z-10">
                <div className="mb-4 bg-white/20 inline-block p-3 border-2 border-black">
                  {benefit.icon}
                </div>
                <h3 className="text-3xl font-black uppercase leading-none mb-4">
                  {benefit.title}
                </h3>
                <p className="font-bold text-sm leading-tight opacity-90">
                  {benefit.desc}
                </p>
              </div>

              <div className="z-10 mt-auto self-end text-xs font-black uppercase tracking-widest bg-white/30 px-2">
                Clearance: Level 1
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* REPEATING GET STARTED BUTTON */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 flex flex-col items-center gap-4"
        >
          <Link href={"/auth/signup"}>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative bg-red-600 text-white font-black text-3xl px-12 py-5 uppercase border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <span className="relative z-10">Get Started Now!</span>
              <div className="absolute inset-0 bg-yellow-400 translate-x-0 translate-y-0 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform -z-10 border-2 border-black" />
            </motion.button>
          </Link>
          <span className="text-xs font-black uppercase text-zinc-400 italic">
            No credit card required • Instant Access
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Featured;
