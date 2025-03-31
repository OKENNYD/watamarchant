"use client";
import { useRef, useState } from "react";
import { X } from "lucide-react";

export default function Multiselect({defaultValue,option}) {
  const [selectedItems, setSelectedItems] = useState([]); // Selected items
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown visibility
  const options = ["apple", "banana", "orange", "grape", "mango", "pineapple"]; // Original options
  const [filteredOptions, setFilteredOptions] = useState(options); // Filtered options
  const searchRef = useRef(null);

  // Handle input in the search field
  const handleInput = (e) => {
    const searchValue = e.target.value.toLowerCase();
    // Filter the original options based on the search input
    const filtered = options.filter(
      (option) =>
        option.toLowerCase().includes(searchValue) &&
        !selectedItems.includes(option) // Exclude already selected items
    );
    setFilteredOptions(filtered);
  };

  // Handle selecting an item from the dropdown
  const handleSelect = (item) => {
    setSelectedItems((prev) => [...prev, item]); // Add the item to the selected list
    setFilteredOptions((prev) => prev.filter((a) => a !== item)); // Remove the item from the dropdown
  };

  // Handle removing a selected item
  const handleRemove = (item) => {
    setSelectedItems((prev) => prev.filter((i) => i !== item)); // Remove the item from the selected list
    setFilteredOptions((prev) => [...prev, item]); // Add the item back to the dropdown
  };

  return (
    <div
      className="w-1/2 text-base text-dim relative cursor-pointer"
      onMouseLeave={() => setIsDropdownOpen(false)}
    >
      <div
        className="gap-1 flex w-full min-h-10 bg-gray-50 rounded-2xl flex-wrap p-2"
        onClick={() => setIsDropdownOpen(true)}
      >
        {selectedItems.map((item, i) => (
          <span
            key={i}
            className="w-auto h-fit pb-1 rounded-full gap-1 px-2 bg-secondary text-white flex text-base items-center cursor-pointer"
          >
            {item}
            <X
              size={15}
              onClick={(e) => {
                e.stopPropagation(); // Prevent the dropdown from closing
                handleRemove(item); // Remove the selected item
              }}
            />
          </span>
        ))}
        <input type="text" className='w-full h-5 bg-transparent outline-none' onInput={handleInput} ref={searchRef} placeholder="Choose Tags"/>
      </div>
      {isDropdownOpen && (
        <ul className="w-full max-h-48 overflow-y-auto mt-2 p-2 rounded-lg bg-white shadow-lg border border-gray-200 scroll-none">
          {filteredOptions.map((item, i) => (
            <li
              className="hover:bg-gray-100 rounded-lg p-2 capitalize cursor-pointer"
              onClick={() => handleSelect(item)} // Handle selecting an item
              key={i}
            >
              {item}
            </li>
          ))}
          {/* Show a message if no options are available */}
          {filteredOptions.length === 0 && (
            <li className="text-dim p-2">No options available</li>
          )}
        </ul>
      )}
    </div>
  );
}