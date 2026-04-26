"use client";

import { motion } from "framer-motion";
import { Cpu, ShieldAlert } from "lucide-react";

export default function AuthLoading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4">
      
      {/* 1. CENTRAL ANIMATED CORE */}
      <div className="relative flex items-center justify-center mb-12">
        {/* Pulsing Outer Ring */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.6, 0.3] 
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute w-40 h-40 border-4 border-dashed border-red-600 rounded-full"
        />
        
        {/* Rapid Inner Spin */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="absolute w-28 h-28 border-t-4 border-b-4 border-yellow-400 rounded-full"
        />

        {/* The Icon Core */}
        <motion.div
          animate={{ scale: [0.9, 1.1, 0.9] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="relative z-10 bg-black p-4 rounded-full border-4 border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]"
        >
          <Cpu className="w-12 h-12 text-white" />
        </motion.div>
      </div>

      {/* 2. STATUS TEXT */}
      <div className="text-center space-y-3">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-black uppercase italic tracking-tighter text-yellow-400"
        >
          Initializing <span className="text-red-600">Vault</span> Access
        </motion.h2>

        {/* Fake Terminal Logs */}
        <div className="flex flex-col items-center gap-1">
          <motion.p
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, times: [0, 0.2, 1] }}
            className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.3em]"
          >
             Verifying Biometrics...
          </motion.p>
          <motion.p
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5, times: [0, 0.2, 1] }}
            className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.3em]"
          >
             Connecting to Stark-Net...
          </motion.p>
        </div>
      </div>

      {/* 3. BOTTOM DECORATION */}
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: "200px" }}
        className="h-1 bg-red-600 mt-8 relative"
      >
        <motion.div 
          animate={{ x: [-100, 200] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-0 h-full w-10 bg-yellow-400 blur-sm"
        />
      </motion.div>
      
      <p className="mt-4 text-[10px] font-black uppercase text-zinc-600 italic">
        Classified Data • Level 7 Clearance Required
      </p>
    </div>
  );
}