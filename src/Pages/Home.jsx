import React from "react";
import DropDownOption from "../components/Ui/DropDownOption";
import SideBanner from "../components/SideBanner";
import LineChart from "../components/Ui/LineChart";

function Home() {
  return (
    <div>
      <div className="my-4">
        <div className="flex gap-3">
          <button>
            <h2 className="font-bold">Unread Massages</h2>
          </button>
          <button>
            <h2 className="font-bold">New Orders</h2>
          </button>
          <button>
            <h2 className="font-bold">Sales in last 30 Day</h2>
          </button>
          <button>
            <h2 className="font-bold">Advertising</h2>
          </button>
        </div>
      </div>
      <div className="text-black lg:grid grid-cols-1 md:grid-cols-4 gap-3 sm:flex sm:flex-col">
        <div className="col-span-3 pb-5 bg-white rounded-xl">
          <div className="text-black p-5 flex justify-between">
            <h1 className="text-3xl font-bold">Overview</h1>
            <DropDownOption />
          </div>
          <div className="flex gap-3 p-4 m-4 rounded-xl bg-slate-100">
            <div className="w-full">
              <div className="bg-white p-5 rounded-xl shadow-md">
                <h1 className="text-xl font-bold">Customers</h1>
                <div className="flex justify-between">
                  <div className="text-2xl font-bold">1,00,000</div>
                  <div className="text-green-500">+ 8%</div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="bg-transparent p-5 rounded-xl">
                <h1 className="text-xl font-bold">Income</h1>
                <div className="flex justify-between">
                  <div className="text-2xl font-bold">$3424100</div>
                  <div className="text-green-500">+ 20%</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 mb-8">
            <LineChart />
          </div>
        </div>
        <div className="p-5 bg-white rounded-xl text-black">
          <SideBanner />
        </div>
      </div>
    </div>
  );
}

export default Home;
