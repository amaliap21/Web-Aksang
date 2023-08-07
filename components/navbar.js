"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  // Define the path data as an array of objects
  const path = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Exhibition",
      url: "/exhibition",
    },
    {
      name: "Cup",
      url: "/cup",
    },
    {
      name: "Summit",
      url: "/summit",
    },
  ];

  return (
    <nav className="flex items-center gap-[600px] bg-custom-blue-dark px-10 py-3">
      <Image
        src="/logo.png"
        alt="Logo Byte"
        width={1920}
        height={1080}
        className="w-[50px] aspect-square rounded-full"
      />
      <ul className="flex gap-28 items-center justify-center font-semibold font-montserrat text-xl">
        {path.map((item) => (
          <Link key={item.name} href={item.url}>
            <li
              className={`${
                pathname.startsWith(item.url) || pathname===item.url
                  ? "text-custom-yellow"
                  : "text-white"
              }`}
            >
              {item.name}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
