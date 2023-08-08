"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import ChevronIcon from "./icons/chevron-icon";
import { useRef, useEffect } from "react";
import HamburgerIcon from "./icons/hamburger-icon";
import CrossIcon from "./icons/cross-icon";

const Navbar = ({expandNavbar, setExpandNavbar}) => {
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);
  const blackBgRef = useRef(null);

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
      subtitle: [
        {
          name: "Futsal",
          url: "futsal",
        },
        {
          name: "Basket",
          url: "basket",
        },
      ],
    },
    {
      name: "Summit",
      url: "/summit",
    },
  ];

  // Close Navbar when user clicks on black background stuffs
  useEffect(() => {
    function handleClickOutside(event) {
      // If Userclick is in the black background stuff
      if (blackBgRef.current && blackBgRef.current.contains(event.target)) {
        setExpandNavbar(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setExpandNavbar]);

  return (
    <nav className="sticky left-0 right-0 top-0 flex justify-between  z-20  w-full bg-custom-blue-dark py-3 px-7 lg:px-10 xl:px-16 2xl:px-24 lg:py-3">
      {/* Logo */}
      <Image
        src="/logo.png"
        alt="Logo Byte"
        width={1920}
        height={1080}
        className="w-[35px] lg:w-[50px] aspect-square rounded-full"
      />

      {/* Hamburger button to popUp menu on mobile  */}
      <button
        onClick={() => setExpandNavbar(!expandNavbar)}
        aria-label="Hamburger Button"
      >
        <HamburgerIcon
          size={35}
          className="fill-white w-[35px] h-[35px] flex lg:hidden"
        />
      </button>

      {/* Container for mapping links */}
      <ul
        className={`fixed right-0 top-0 z-10 flex h-full w-7/12 flex-col gap-5 lg:gap-16 xl:gap-20 2xl:gap-28 bg-custom-blue px-10 sm:px-20 md:px-24 max-lg:py-10 font-montserrat text-base font-semibold duration-300 ease-in-out lg:static lg:h-auto lg:flex-1 lg:justify-center lg:translate-x-0 lg:flex-row lg:items-center lg:border-none lg:bg-transparent xl:text-xl ${
          expandNavbar ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setExpandNavbar(false)}
          className="ml-auto block lg:hidden"
        >
          <CrossIcon size={20} className="fill-white" />
        </button>
        {path.map((item) => {
          // If the button have subtitle to mapping with dropdown
          return item.subtitle ? (
            <li
              key={item.name}
              className={`relative hover:fill-custom-yellow ${
                pathname.toLowerCase().startsWith(item.url.toLowerCase()) ||
                pathname === item.url
                  ? "text-custom-yellow"
                  : "text-white"
              } hover:text-custom-yellow group/container`}
            >
              {/* Render parrent dropdown */}
              <button
                className="flex items-center justify-center gap-3"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => setIsHovered(!isHovered)}
              >
                <ChevronIcon
                  size={30}
                  className={`${
                    isHovered ? "rotate-180" : "rotate-0"
                  } transition duration-300 ease-in-out w-[20px] hover:fill-custom-yellow aspect-square fill-white group-hover/container:fill-custom-yellow`}
                />
                {item.name}
              </button>
              {/* Container dropdown content */}
              <ul
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={` lg:bg-custom-yellow flex flex-col lg:items-center lg:justify-center lg:w-[150px] ${
                  isHovered
                    ? "flex translate-y-0 static opacity-100 pointer-events-auto"
                    : "-translate-y-1/2 absolute -z-10 opacity-0 pointer-events-none"
                }  lg:absolute transition-all duration-300 rounded-md gap-3 p-3`}
              >
                {/* Mapping dropdown content */}
                {item.subtitle.map((subitem, index) => (
                  <Link key={index} href={`/cup/${subitem.url}`}>
                    <li
                      className={`${
                        pathname.includes(subitem.url)
                          ? "text-custom-yellow"
                          : "text-white"
                      } text-base px-3 lg:px-0 lg:text-xl lg:text-custom-blue hover:lg:text-custom-pink w-full  duration-300 transition-all`}
                    >
                      {subitem.name}
                    </li>
                  </Link>
                ))}
              </ul>
            </li>
          ) : (
            // If the path has no subtitle
            <Link key={item.name} href={item.url}>
              <li
                className={`${
                  pathname.toLowerCase().startsWith(item.url.toLowerCase()) ||
                  pathname === item.url
                    ? "text-custom-yellow"
                    : "text-white"
                } hover:text-custom-yellow`}
              >
                {item.name}
              </li>
            </Link>
          );
        })}
      </ul>
      {/* Black background on mobile behind click detail navbar */}
      {expandNavbar && (
        <div
          ref={blackBgRef}
          className="fixed inset-0 z-0 h-full w-full bg-opacity-40 bg-black lg:hidden"
        />
      )}
    </nav>
  );
};

export default Navbar;
