"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Define the data type for chart entries
interface ChartData {
  name: string;
  Placed: number;
  NotPlaced: number;
}

// Dummy data for each department
const departmentData: { [key: string]: ChartData[] } = {
  CSE: [
    { name: "2018-19", Placed: 60, NotPlaced: 40 },
    { name: "2019-20", Placed: 70, NotPlaced: 40 },
    { name: "2020-21", Placed: 90, NotPlaced: 65 },
    { name: "2021-22", Placed: 90, NotPlaced: 45 },
    { name: "2022-23", Placed: 65, NotPlaced: 5 },
  ],
  ECE: [
    { name: "2018-19", Placed: 50, NotPlaced: 50 },
    { name: "2019-20", Placed: 60, NotPlaced: 40 },
    { name: "2020-21", Placed: 80, NotPlaced: 30 },
    { name: "2021-22", Placed: 85, NotPlaced: 15 },
    { name: "2022-23", Placed: 70, NotPlaced: 30 },
  ],
  EEE: [
    { name: "2018-19", Placed: 55, NotPlaced: 45 },
    { name: "2019-20", Placed: 65, NotPlaced: 35 },
    { name: "2020-21", Placed: 75, NotPlaced: 25 },
    { name: "2021-22", Placed: 80, NotPlaced: 20 },
    { name: "2022-23", Placed: 60, NotPlaced: 40 },
  ],
  IEM: [
    { name: "2018-19", Placed: 45, NotPlaced: 55 },
    { name: "2019-20", Placed: 55, NotPlaced: 45 },
    { name: "2020-21", Placed: 65, NotPlaced: 35 },
    { name: "2021-22", Placed: 70, NotPlaced: 30 },
    { name: "2022-23", Placed: 75, NotPlaced: 25 },
  ],
  ISE: [
    { name: "2018-19", Placed: 70, NotPlaced: 30 },
    { name: "2019-20", Placed: 80, NotPlaced: 20 },
    { name: "2020-21", Placed: 90, NotPlaced: 10 },
    { name: "2021-22", Placed: 85, NotPlaced: 15 },
    { name: "2022-23", Placed: 95, NotPlaced: 5 },
  ],
  TCE: [
    { name: "2018-19", Placed: 40, NotPlaced: 60 },
    { name: "2019-20", Placed: 50, NotPlaced: 50 },
    { name: "2020-21", Placed: 60, NotPlaced: 40 },
    { name: "2021-22", Placed: 70, NotPlaced: 30 },
    { name: "2022-23", Placed: 75, NotPlaced: 25 },
  ],
  CIVIL: [
    { name: "2018-19", Placed: 30, NotPlaced: 70 },
    { name: "2019-20", Placed: 40, NotPlaced: 60 },
    { name: "2020-21", Placed: 50, NotPlaced: 50 },
    { name: "2021-22", Placed: 55, NotPlaced: 45 },
    { name: "2022-23", Placed: 60, NotPlaced: 40 },
  ],
  MECH: [
    { name: "2018-19", Placed: 35, NotPlaced: 65 },
    { name: "2019-20", Placed: 45, NotPlaced: 55 },
    { name: "2020-21", Placed: 55, NotPlaced: 45 },
    { name: "2021-22", Placed: 65, NotPlaced: 35 },
    { name: "2022-23", Placed: 70, NotPlaced: 30 },
  ],
};

const StudentsPlacedChart: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>("CSE");
  const [chartData, setChartData] = useState<ChartData[]>(departmentData[selectedDepartment]);
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);

  const handleDepartmentChange = (dept: string) => {
    setSelectedDepartment(dept);
    setChartData(departmentData[dept]);
    setDropdownVisible(false); // Close dropdown after selecting a department
  };

  return (
    <div className="bg-white rounded-lg p-4 h-full relative">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">
          Placement Statistics - {selectedDepartment}
        </h1>
        <div className="relative z-50">
          <Image
            src="/moreDark.png"
            alt=""
            width={20}
            height={20}
            onClick={() => setDropdownVisible(!dropdownVisible)}
            className="cursor-pointer"
          />
          {dropdownVisible && (
            <ul
              className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
            >
              {Object.keys(departmentData).map((dept) => (
                <li
                  key={dept}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleDepartmentChange(dept)}
                >
                  {dept}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={chartData} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
          />
          <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
          <Tooltip
            contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
          />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
          />
          <Bar
            dataKey="Placed"
            fill="#FAE27C"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="NotPlaced"
            fill="#C3EBFA"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StudentsPlacedChart;
