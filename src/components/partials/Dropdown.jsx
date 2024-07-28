import React, { useState } from "react";

const Dropdown = ({ data, func,name }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(name);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option.toUpperCase());
    setIsOpen(false); // Close the dropdown after selection
    func(option.toLowerCase()); // Call the passed function with the selected option
  };

  return (
    <div className="relative inline-block text-left z-20 min-w-[7vw] font-[moril]">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-none px-4 py-2 bg-zinc-900 text-sm font-medium text-white focus:outline-none"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded={isOpen}
          onClick={toggleDropdown}
        >
          {selectedOption}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-36 rounded-md bg-zinc-900"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            {data.map((item, index) => (
              <button
                key={index}
                className="block w-full text-left px-4 py-2 text-sm text-white font-[moril]"
                role="menuitem"
                onClick={() => handleOptionClick(item)}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
