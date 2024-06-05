import React, { useState, useEffect } from "react";
import DropDownOption from "../components/Ui/DropDownOption";
import SideBanner from "../components/SideBanner";
import LineChart from "../components/Ui/LineChart";
import sampleData from "../data/sampleData.json";

function Home() {
  const [customersAmount, setCustomersAmount] = useState(0);
  const [income, setIncome] = useState(0);
  const [prevCustomersAmount, setPrevCustomersAmount] = useState(0);
  const [prevIncome, setPrevIncome] = useState(0);
  const [customersChange, setCustomersChange] = useState(0);
  const [incomeChange, setIncomeChange] = useState(0);

  useEffect(() => {
    const fetchData = () => {
      const fetchedCustomersAmount = sampleData.ItemsStock[0].customersAmount;
      const fetchedIncome = sampleData.ItemsStock[0].income;

      const customersChange =
        prevCustomersAmount !== 0
          ? ((fetchedCustomersAmount - prevCustomersAmount) /
              prevCustomersAmount) *
            100
          : 0;
      const incomeChange =
        prevIncome !== 0
          ? ((fetchedIncome - prevIncome) / prevIncome) * 100
          : 0;

      setCustomersAmount(fetchedCustomersAmount);
      setIncome(fetchedIncome);

      console.log("Customers Change:", customersChange.toFixed(2) + "%");
      console.log("Income Change:", incomeChange.toFixed(2) + "%");

      setCustomersChange(customersChange);
      setIncomeChange(incomeChange);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="my-4">
        <div className="flex gap-3">
          <button>
            <h2 className="font-bold">Unread Messages</h2>
          </button>
          <button>
            <h2 className="font-bold">New Orders</h2>
          </button>
          <button>
            <h2 className="font-bold">Sales in last 30 Days</h2>
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
                  <div className="text-2xl font-bold">{customersAmount}</div>
                  <div
                    className={`text-${
                      customersChange >= 0 ? "green" : "red"
                    }-500`}
                  >
                    {customersChange.toFixed(2)} %{" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="bg-transparent p-5 rounded-xl">
                <h1 className="text-xl font-bold">Income</h1>
                <div className="flex justify-between">
                  <div className="text-2xl font-bold">LKR {income}</div>
                  <div
                    className={`text-${
                      incomeChange >= 0 ? "green" : "red"
                    }-500`}
                  >
                    {incomeChange.toFixed(2)} %{" "}
                  </div>
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
