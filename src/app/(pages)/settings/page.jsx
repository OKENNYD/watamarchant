'use client';
import { useState, useRef } from "react";
import { IoGlobe } from "react-icons/io5";

export default function Settings() {
  const [isToggle, setIsToggle] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleRef = useRef(null);

  const handleToggleClick = () => {
    setIsToggle((prev) => !prev);
    if (toggleRef.current) {
      toggleRef.current.checked = !isToggle;
    }
  };

  const handleSave = () => {
    console.log("Settings saved:", {
      isToggle,
      selectedLanguage,
      isDarkMode,
    });
  };

  return (
    <div className="w-full flex flex-col gap-4 p-4">
      {/* Toggle Setting */}
      <div className="w-1/2 text-xl text-slate-600 rounded-full px-4 py-2 flex items-center justify-between bg-white shadow-md">
        <IoGlobe />
        <label
          htmlFor="toggle"
          onClick={handleToggleClick}
          className={`duration-300 w-12 h-6 rounded-full bg-secondary p-1 flex cursor-pointer`}
        >
          <input
            ref={toggleRef}
            className="hidden"
            type="checkbox"
            id="toggle"
          />
          <div
            className={`h-full w-auto aspect-square rounded-full bg-white transform ${
              isToggle ? "translate-x-0" : "translate-x-full"
            }`}
          ></div>
        </label>
      </div>

      {/* Language Selection */}
      <div className="w-1/2 text-xl text-slate-600 rounded-full px-4 flex items-center justify-between bg-white shadow-md">
        <label htmlFor="language" className="font-semibold text-base">
          Language:
        </label>
        <select
          id="language"
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
          className="rounded-md border-none outline-none p-2"
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
        </select>
      </div>

      {/* Dark Mode Toggle */}
      <div className="w-1/2 text-xl text-slate-600 rounded-full px-4 py-2 flex items-center justify-between bg-white shadow-md">
        <label htmlFor="darkMode" className="font-semibold text-base">
          Dark Mode:
        </label>
        <label
          htmlFor="toggle"
          onClick={handleToggleClick}
          className={`duration-300 w-12 h-6 rounded-full bg-secondary p-1 flex cursor-pointer`}
        >
          <input
            ref={toggleRef}
            className="hidden"
            type="checkbox"
            id="toggle"
          />
          <div
            className={`h-full w-auto aspect-square rounded-full bg-white transform ${
              isToggle ? "translate-x-0" : "translate-x-full"
            }`}
          ></div>
        </label>
      </div>

      {/* Save Button */}
      <button
        type="button"
        onClick={handleSave}
        className="font-semibold text-lg text-slate-100 bg-primary rounded-full w-1/2 h-10 shadow-md hover:bg-primary-dark transition"
      >
        Save
      </button>
    </div>
  );
}