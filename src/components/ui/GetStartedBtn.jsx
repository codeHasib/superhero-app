"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function SwipeButton({
  className = "",
  secondText = "ENLIST NOW",
  firstText = "GET STARTED",
  firstClass = "bg-yellow-400 text-red-500",
  secondClass = "bg-white text-black",
  ...props
}) {
  const common = "block px-4 py-2 text-2xl font-bold duration-300 ease-in-out";

  return (
    <Link href={"/auth/signup"}>
      <button
        {...props}
        className={cn(
          "group relative min-w-fit overflow-hidden rounded-md",
          className,
        )}
      >
        <span
          className={cn(
            "absolute inset-0 translate-y-full group-hover:translate-y-0",
            common,
            secondClass,
          )}
        >
          {secondText}
        </span>

        <span
          className={cn("group-hover:-translate-y-full", common, firstClass)}
        >
          {firstText}
        </span>
      </button>
    </Link>
  );
}
