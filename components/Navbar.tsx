"use client";

import Link from "next/link";
import { BsSearch } from "react-icons/bs";

export default function Navbar() {
  return (
    <>
      <nav className="bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <Link href="/" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-slate-200">
              Travel Advisor
            </span>
          </Link>
          <div className="flex md:order-2 items-center space-x-3">
            <div className="text-slate-300">Explore new places</div>
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                <BsSearch className="text-gray-400" />
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full outline-none p-2 pl-8 text-sm border rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search..."
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
