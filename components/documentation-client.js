"use client";
import { useState, useEffect } from "react";
import DocumentationCard from "@/components/documentation-card";
import React from "react";
import Pagination from "./pagination";
import ChevronIcon from "./icons/chevron-icon";

const DocumentationClient = ({ documentationData }) => {
  const [listPerPage, setListPerPage] = useState(3); // Number of list per page
  const [currentPage, setCurrentPage] = useState(1); // Current page
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1280) {
        setListPerPage(2); // Change to 2 items per page for mobile devices
      } else {
        setListPerPage(3); // Change back to 3 items per page for larger screens
      }
    };

    // Initial call and event listener for viewport changes
    handleResize();
    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // Calculate the starting and ending indices of list for the current page
  const indexOfLastCard = currentPage * listPerPage;
  const indexOfFirstCard = indexOfLastCard - listPerPage;
  const currentList = documentationData.slice(
    indexOfFirstCard,
    indexOfLastCard
  );
  const numberPage = Math.ceil(documentationData.length / listPerPage);
  const handlePreviousClick = () => {
    const newPage = ((currentPage - 2 + numberPage) % numberPage) + 1;
    setCurrentPage(newPage);
  };

  const handleNextClick = () => {
    const newPage = (currentPage % numberPage) + 1;
    setCurrentPage(newPage);
  };
  return (
    <section className="px-3 sm:px-24 md:px-32 lg:px-12 2xl:px-40 text-center mt-[70px] lg:mt-[150px] flex flex-col gap-10 lg:gap-14">
      {/* Display the section title */}
      <h3 className="text-custom-yellow text-2xl lg:text-[40px] font-montserrat font-bold">
        Dokumentasi
      </h3>
      <div className="flex gap-5 sm:gap-10 md:gap-14 lg:gap-10 2xl:gap-20 3xl:mx-16 items-center justify-center relative">
        {/* Display previous page button */}
        <button
          onClick={handlePreviousClick}
          aria-label="Previous Button"
          className="px-2 transition absolute z-10 top-[80px] md:top-[110px] lg:top-[220px] left-0 duration-300 hover:scale-125 hover:drop-shadow-[0px_0px_4px_#FFFFFF]"
        >
          <ChevronIcon className="stroke-white rotate-180 w-[20px] h-[20px] lg:w-[45px] lg:h-[45px]" />
        </button>
        {/* Display documentation cards */}
        {currentList.map((data, index) => (
          <DocumentationCard
            key={index}
            imageUrl={data.imageUrl}
            alt={data.alt}
            eventName={data.eventName}
          />
        ))}
        {/* Display next page button */}
        <button
          onClick={handleNextClick}
          aria-label="Next Button"
          className="px-2 transition right-0 absolute z-10 top-[80px] md:top-[110px] lg:top-[220px] duration-300 hover:scale-125 hover:drop-shadow-[0px_0px_4px_#FFFFFF]"
        >
          <ChevronIcon className="stroke-white w-[20px] h-[20px] lg:w-[45px] lg:h-[45px]" />
        </button>
      </div>
      <div className="flex w-full items-center justify-center pb-10 lg:pb-24">
        {/* Display pagination component */}
        <Pagination
          numberPage={numberPage}
          setCurrentNumberPage={setCurrentPage}
          currentNumberPage={currentPage}
          primaryColor="blue"
        />
      </div>
    </section>
  );
};

export default DocumentationClient;
