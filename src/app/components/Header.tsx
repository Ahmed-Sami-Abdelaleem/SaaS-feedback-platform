import React from "react";
import Image from "next/image";
function Header() {
  return (
    <header className=" backdrop-blur-md fixed top-0 left-0 right-0 z-50 px-12 md:px-16">
      <div className="flex  items-center justify-between border-b border-gray-400/20">
        <div className="flex items-center gap-12">
          <a className="" href="#">
            <span className="sr-only">Home</span>
            <Image src="/logo.png" alt="logo" width={80} height={40} />
          </a>
        </div>

        <div className="flex gap-4">
          <a
            className="rounded-md bg-black px-5 py-2.5 text-sm font-medium text-white shadow"
            href="#"
          >
            Login
          </a>

          <div className="flex">
            <a
              className="rounded-md bg-black px-5 py-2.5 text-sm font-medium text-white shadow"
              href="#"
            >
              Register
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
