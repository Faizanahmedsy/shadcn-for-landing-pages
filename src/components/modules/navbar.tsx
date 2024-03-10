import React from "react";
import { NavigationMenuDemo } from "./navbar-dropdown";
// import { ThemeToggle } from "../theme-toggle";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between  px-32 py-5 fixed top-0 right-0 left-0 dark:bg-black bg-white z-50">
      <div className="font-bold text-teal-700">Road Craft</div>
      <div className="flex items-center">
        <NavigationMenuDemo />
        {/* <ThemeToggle /> */}
      </div>
    </nav>
  );
}
