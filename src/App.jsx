import "./App.css";
import Header from "./components/Header";
import SideNavBar from "./components/SideNavBar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { FaToggleOn } from "react-icons/fa";
import { FaToggleOff } from "react-icons/fa6";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="bg-gray-200 pb-3">
      <div
        className={`sm:w-60 fixed hidden ${
          sidebarOpen ? "lg:block md:block" : "lg:hidden"
        } transition-all duration-300 ease-in-out`}
      >
        <SideNavBar />
      </div>
      <div
        className={`sm:ml-60 ${
          sidebarOpen ? "lg:ml-60 md:ml-60 sm:ml-0" : "md:ml-0 sm:ml-0"
        } transition-all duration-300 ease-in-out`}
      >
        <Header
          toggleButton={
            <i
              className="text-gray-500 hover:text-gray-800 transition duration-300 ease-in-out cursor-pointer text-[30px]"
              onClick={toggleSidebar}
            >
              {sidebarOpen ? <FaToggleOn /> : <FaToggleOff />}
            </i>
          }
        />
      </div>
      <main
        className={`sm:ml-64 sm:mr-4 my-4 ${
          sidebarOpen ? "lg:ml-64 md:ml-64 sm:ml-4 m-4" : "md:ml-4 sm:ml-4"
        }`}
      >
        <Outlet />
      </main>
    </div>
  );
}

export default App;
