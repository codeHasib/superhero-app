"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import icon from "../../public/heroVault.png";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa6";
import { motion } from "framer-motion"; // Added Motion

const Form = () => {
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    console.log(data);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      name: userData.name,
      email: userData.email,
      password: userData.password,
    });

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Successfully registered");
    window.location.href = "/dashboard";
  };

  return (
    <div className="min-h-[80vh] flex justify-center items-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <form
          onSubmit={onSubmit}
          className="bg-zinc-900 rounded-none border-4 p-6 md:p-8 border-black -rotate-1 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] max-w-md w-full"
        >
          {/* Header Section */}
          <div className="flex flex-col gap-3 items-center justify-center mb-8">
            <motion.h2
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              className="text-3xl text-center text-red-600 font-black uppercase italic tracking-tighter"
            >
              Welcome To Hero Vault
            </motion.h2>

            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                className="rounded-full border-4 border-yellow-400 shadow-lg"
                height={90}
                width={90}
                src={icon}
                alt="Hero Vault Icon"
              />
            </motion.div>

            <div className="p-2 bg-yellow-400 border-2 border-black -rotate-2 mt-2">
              <p className="text-black font-bold text-sm text-center uppercase">
                Enroll in the World of Heroes
              </p>
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            <fieldset className="flex flex-col gap-1">
              <label className="text-yellow-400 font-black uppercase text-xs">
                Identity (Name)
              </label>
              <input
                type="text"
                name="name"
                className="py-3 px-4 bg-black text-white border-2 border-black border-b-4 border-b-red-600 focus:outline-none focus:border-yellow-400 transition-colors"
                placeholder="Tony Stark"
                required
              />
            </fieldset>

            <fieldset className="flex flex-col gap-1">
              <label className="text-yellow-400 font-black uppercase text-xs">
                Comms (Email)
              </label>
              <input
                type="email"
                name="email"
                className="py-3 px-4 bg-black text-white border-2 border-black border-b-4 border-b-red-600 focus:outline-none focus:border-yellow-400 transition-colors"
                placeholder="hero@vault.com"
                required
              />
            </fieldset>

            <fieldset className="flex flex-col gap-1">
              <label className="text-yellow-400 font-black uppercase text-xs">
                Secret Key (Password)
              </label>
              <input
                type="password"
                name="password"
                className="py-3 px-4 bg-black text-white border-2 border-black border-b-4 border-b-red-600 focus:outline-none focus:border-yellow-400 transition-colors"
                placeholder="••••••••"
                required
              />
            </fieldset>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 mt-8">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-4 border-2 border-black border-b-6 border-b-black shadow-[4px_4px_0px_0px_rgba(234,179,8,1)] uppercase tracking-widest"
              type="submit"
            >
              ENLIST NOW
            </motion.button>

            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-zinc-700"></div>
              <span className="flex-shrink mx-4 text-zinc-500 font-bold text-xs">
                OR CONNECT VIA
              </span>
              <div className="flex-grow border-t border-zinc-700"></div>
            </div>

            <motion.button
              type="button" // Important: prevents form submission
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-3 w-full bg-white text-black font-black py-3 border-2 border-black border-b-4 border-b-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase text-sm"
              onClick={handleGoogleSignIn}
            >
              Sign In With Google <FaGoogle className="text-red-600" />
            </motion.button>
          </div>

          <p className="text-zinc-400 text-center mt-6 font-bold text-xs">
            ALREADY ENLISTED?{" "}
            <Link
              className="text-yellow-400 hover:text-red-500 underline decoration-2 underline-offset-4 transition-colors"
              href={"/auth/signin"}
            >
              SIGN IN
            </Link>
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default Form;
