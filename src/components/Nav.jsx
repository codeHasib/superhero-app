"use client";

import { signOut, useSession } from "@/lib/auth-client";
import Link from "next/link";
import LoadingNav from "./LoadingNav";
import { usePathname, useRouter } from "next/navigation";

const Nav = () => {
  const { data, isPending } = useSession();

  const user = data?.user;

  const pathName = usePathname();

  const router = useRouter();

  async function getOut() {
    await signOut();
    router.push("/");
  }

  const loggedOutLinks = (
    <>
      <li>
        {" "}
        <Link
          className={
            pathName === "/explore"
              ? "underline text-yellow-300 uppercase font-extrabold"
              : "uppercase font-extrabold"
          }
          href={"/explore"}
        >
          Explore
        </Link>
      </li>
      <li>
        <Link
          className={
            pathName === "/features"
              ? "underline text-yellow-300 uppercase font-extrabold"
              : "uppercase font-extrabold"
          }
          href={"/features"}
        >
          Features
        </Link>
      </li>
      <li>
        <Link
          className={
            pathName === "/topheroes"
              ? "underline text-yellow-300 uppercase font-extrabold"
              : "uppercase font-extrabold"
          }
          href={"/topheroes"}
        >
          Top Heroes
        </Link>
      </li>
    </>
  );
  const loggedLinks = (
    <>
      <li>
        {" "}
        <Link
          className={
            pathName === "/dashboard"
              ? "underline text-yellow-300 uppercase font-extrabold"
              : "uppercase font-extrabold"
          }
          href={"/dashboard"}
        >
          Dashboard
        </Link>
      </li>
      <li>
        <Link
          className={
            pathName === "/favorites"
              ? "underline text-yellow-300 uppercase font-extrabold"
              : "uppercase font-extrabold"
          }
          href={"/favorites"}
        >
          Favorites
        </Link>
      </li>
      <li>
        <Link
          className={
            pathName === "/compare"
              ? "underline text-yellow-300 uppercase font-extrabold"
              : "uppercase font-extrabold"
          }
          href={"/compare"}
        >
          Compare
        </Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-red-900 border-b-6 border-black text-white font-bold">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-yellow-300 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
            >
              {isPending ? (
                <LoadingNav></LoadingNav>
              ) : data ? (
                loggedLinks
              ) : (
                loggedOutLinks
              )}
            </ul>
          </div>
          <Link
            href={"/"}
            className="btn btn-ghost text-2xl font-extrabold text-yellow-400 text-shadow-2xs"
          >
            HeroVault
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {isPending ? (
              <LoadingNav></LoadingNav>
            ) : data ? (
              loggedLinks
            ) : (
              loggedOutLinks
            )}
          </ul>
        </div>
        <div className="navbar-end">
          {isPending ? (
            <LoadingNav></LoadingNav>
          ) : data ? (
            <>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="avatar avatar-placeholder"
                >
                  <div className="text-red-700 font-extrabold w-10 rounded-full cursor-pointer bg-yellow-300">
                    <span className="text-lg">
                      {user.name[0].toUpperCase()}
                    </span>
                  </div>
                </div>
                <ul
                  tabIndex="-1"
                  className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                >
                  <li>
                    <button
                      onClick={() => getOut()}
                      className="btn btn-error text-white font-extrabold"
                    >
                      Sign-Out
                    </button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <Link
                className={pathName === "/auth/signin" ? "hidden" : ""}
                href={"/auth/signin"}
              >
                <button className="lg:inline-block md:inline-block hidden btn mr-3 bg-yellow-400 text-red-600 font-bold">
                  Sign In
                </button>
              </Link>
              <Link
                className={pathName === "/auth/signup" ? "hidden" : ""}
                href={"/auth/signup"}
              >
                <button className="btn btn-accent">Get Started</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
