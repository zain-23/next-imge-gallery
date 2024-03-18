import Link from "next/link";
import React from "react";
import Search from "./Search";

const Navbar = () => {
  return (
    <nav className="w-full bg-black">
      <div className="max-w-7xl mx-auto px-3 py-4">
        <div className="flex sm:flex-row flex-col justify-between items-center gap-4">
          <Link href={"/"} className="sm:text-2xl text-base text-white">
            Next.Js Image Gallery
          </Link>
          <Search />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
