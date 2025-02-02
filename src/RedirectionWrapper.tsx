/* eslint-disable no-console */
import React, { useEffect } from "react";

import usePopupStore from "@/stores/popup";

interface RedirectionWrapperProps {
  children: React.ReactNode;
}

export function RedirectionWrapper({ children }: RedirectionWrapperProps) {
  const { showPopup, setShowPopup } = usePopupStore(); // Get and update the popup state
  const popupShownAt = localStorage.getItem("popupShownAt");
  const currentTime = new Date().getTime();

  useEffect(() => {
    console.log("useEffect is running");
    console.log("popupShownAt:", popupShownAt);
    console.log("currentTime:", currentTime);

    if (
      !popupShownAt ||
      currentTime - parseInt(popupShownAt, 10) > 5 * 60 * 60 * 1000
    ) {
      console.log("Showing popup");
      setShowPopup(true);
    } else {
      console.log("Not showing popup");
      setShowPopup(false);
    }
  }, [setShowPopup, popupShownAt, currentTime]);

  console.log("showPopup:", showPopup); // Add this log to check the state value

  const handleClose = () => {
    setShowPopup(false);
    localStorage.setItem("popupShownAt", currentTime.toString()); // Set the current time when popup is closed
  };

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-[2000]">
          <div className="relative bg-purple-950 p-6 md:p-8 rounded-xl shadow-2xl text-center text-white w-11/12 md:w-3/4 lg:w-1/2 xl:w-2/5 2xl:max-w-2xl max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={handleClose}
              className="absolute top-0 right-0 mt-2 mr-2 text-white bg-transparent hover:bg-purple-700 p-1 rounded-full focus:outline-none"
              aria-label="Close modal"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h2 className="text-xl md:text-3xl font-bold mb-4 md:mb-6 text-purple-300">
              Please Consider Donating
            </h2>
            <div className="space-y-3 md:space-y-4 text-sm md:text-base leading-relaxed text-gray-300">
              <p>
                Support us by donating. Any amount helps. You can donate via
                Ko-Fi or Cryptocurrency.
              </p>
              <p>
                Your contribution will help us maintain and improve the
                platform.
              </p>
            </div>
            <div className="mt-6 flex justify-center space-x-4">
              <a
                href="https://ko-fi.com/vidbinge" // Replace with your Ko-Fi link
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black font-bold py-2 px-6 rounded-lg shadow-md hover:bg-gray-300 flex items-center space-x-2"
              >
                <img
                  src="/lightbar-images/kofi_symbol.svg" // Replace with the path to your SVG file
                  alt="Ko-Fi Icon"
                  className="w-5 h-5"
                />
                <span>Ko-Fi</span>
              </a>
              <a
                href="https://oxapay.com/donate/70461258" // Replace with your Ko-Fi link
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 text-black font-bold py-2 px-6 rounded-lg shadow-md hover:bg-yellow-600 flex items-center space-x-2"
              >
                <img
                  src="/lightbar-images/bitcoin_symbol.svg" // Replace with the path to your SVG file
                  alt="Crypto Icon"
                  className="w-5 h-5"
                />
                <span>Cryptocurrency</span>
              </a>
            </div>
          </div>
        </div>
      )}
      {children}
    </>
  );
}
