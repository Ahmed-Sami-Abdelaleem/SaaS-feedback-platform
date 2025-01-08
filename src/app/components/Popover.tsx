"use client"; 

import { useState } from "react";
import FeedbackForm from "./FeedBackForm";

export default function PopoverButton() {
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);

  const togglePopover = () => {
    setIsPopoverVisible(!isPopoverVisible);
  };

  return (
    <>
      {/* Button */}
      <button
        onClick={togglePopover}
        className="fixed bottom-6 right-6 z-50 bg-black text-white px-4 py-2 rounded-lg hover:bg-slate-900 hover:scale-105 focus:outline-none"
      >
        Feedback
      </button>

      {/* Popover */}
      {isPopoverVisible && (
        <div className="fixed z-10 bottom-16 right-5 bg-white border border-gray-200 shadow-lg rounded-lg p-4 w-96 text-center">
         <FeedbackForm onClose={togglePopover} />
        </div>
      )}
    </>
  );
}