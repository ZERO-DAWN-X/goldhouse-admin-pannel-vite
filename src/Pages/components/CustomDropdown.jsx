import React, { useState } from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const CustomDropdown = ({ label, options, value, onChange, name }) => {
  const selectedOption =
    options.find((option) => option.value === value)?.label || "Select";

  const handleOptionClick = (option) => {
    onChange({ target: { name, value: option.value } });
  };

  return (
    <Menu as="div" className="relative inline-block text-left w-full">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-lg bg-gray-200 px-5 py-2 text-sm font-bold text-gray-900 shadow-sm hover:bg-gray-50">
          {label}: {selectedOption}
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </MenuButton>
      </div>

      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems className="absolute left-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {options.map((option) => (
              <MenuItem key={option.value}>
                {({ active }) => (
                  <div
                    onClick={() => handleOptionClick(option)}
                    className={classNames(
                      active ? "bg-gray-400 text-white" : "text-gray-700",
                      "cursor-pointer flex items-center px-4 py-2 text-sm"
                    )}
                  >
                    {option.label}
                  </div>
                )}
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  );
};

export default CustomDropdown;
