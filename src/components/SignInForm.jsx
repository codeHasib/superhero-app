"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import icon from "../../public/heroVault.png";
import Link from "next/link";

const SignInForm = () => {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());
    const { data, error } = await authClient.signIn.email({
      email: userData.email, // required
      password: userData.password,
      rememberMe: true,
      callbackURL: "/dashboard",
    });
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Successfully registered");
    window.location.href = "/dashboard";
  };
  return (
    <div className="min-h-[80vh] flex justify-center items-center">
      <form
        onSubmit={onSubmit}
        className="fieldset bg-base-200 rounded-box border-7 p-4 border-black -rotate-1"
      >
        <div className="flex flex-col gap-3 items-center justify-center my-5">
          <h2 className="text-2xl text-center text-red-400 font-bold">
            Welcome Back
          </h2>
          <Image
            className="rounded-full"
            height={90}
            width={90}
            src={icon}
            alt="Hero Vault Icon"
          ></Image>
          <div className="p-4 bg-black rounded-4xl">
            <p className="text-yellow-300 text-center">
              Login to explore the world of Super Heroes
            </p>
          </div>
        </div>
        <fieldset className="fieldset">
          <label className="label text-white text-[16px]">Email</label>
          <input
            type="email"
            name="email"
            className="py-2 px-2 validator bg-black border-b-4 border-b-red-500"
            placeholder="Email"
            required
          />
          <p className="validator-hint hidden">Required</p>
        </fieldset>

        <label className="fieldset">
          <span className="label text-white text-[16px]">Password</span>
          <input
            type="password"
            name="password"
            className="py-2 px-2 validator bg-black border-b-4 border-b-red-500"
            placeholder="Password"
            required
          />
          <span className="validator-hint hidden">Required</span>
        </label>

        <button
          className="btn bg-yellow-300 border-2 border-black border-b-6 border-b-black text-black mt-4"
          type="submit"
        >
          SIGN IN
        </button>
        <p className="text-yellow-400 text-center">
          NOT ENLISTED YET?{" "}
          <Link className="font-semibold text-red-400" href={"/auth/signup"}>
            SIGN UP
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignInForm;
