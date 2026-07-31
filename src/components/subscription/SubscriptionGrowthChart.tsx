"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

type Period = "monthly" | "yearly";

const monthlyCategories = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Mei",
  "Jun",
  "Jul",
  "Agu",
  "Sep",
  "Okt",
  "Nov",
  "Des",
];

const yearlyCategories = ["2021", "2022", "2023", "2024", "2025", "2026"];

const monthlySeries = [
  {
    name: "Smart Hotel",
    data: [86, 92, 110, 128, 145, 160, 178, 195, 210, 235, 250, 268],
  },
  {
    name: "Smart Home",
    data: [210, 245, 280, 320, 355, 390, 430, 470, 510, 560, 610, 650],
  },
];

const yearlySeries = [
  {
    name: "Smart Hotel",
    data: [420, 680, 980, 1450, 2100, 3248],
  },
  {
    name: "Smart Home",
    data: [980, 1650, 2800, 4200, 6800, 9238],
  },
];

export default function SubscriptionGrowthChart() {
  const [period, setPeriod] = useState<Period>("monthly");

  const options: ApexOptions = {
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "left",
      fontFamily: "Outfit",
    },
    colors: ["#465FFF", "#9CB9FF"],
    chart: {
      fontFamily: "Outfit, sans-serif",
      height: 310,
      type: "area",
      toolbar: { show: false },
    },
    stroke: {
      curve: "smooth",
      width: [2, 2],
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
      },
    },
    markers: {
      size: 0,
      strokeColors: "#fff",
      strokeWidth: 2,
      hover: { size: 6 },
    },
    grid: {
      xaxis: { lines: { show: false } },
      yaxis: { lines: { show: true } },
    },
    dataLabels: { enabled: false },
    tooltip: { enabled: true },
    xaxis: {
      type: "category",
      categories: period === "monthly" ? monthlyCategories : yearlyCategories,
      axisBorder: { show: false },
      axisTicks: { show: false },
      tooltip: { enabled: false },
    },
    yaxis: {
      labels: {
        style: {
          fontSize: "12px",
          colors: ["#6B7280"],
        },
      },
    },
  };

  const getButtonClass = (value: Period) =>
    period === value
      ? "shadow-theme-xs text-gray-900 dark:text-white bg-white dark:bg-gray-800"
      : "text-gray-500 dark:text-gray-400";

  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-5 pb-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
      <div className="flex flex-col gap-5 mb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Pertumbuhan Penyewaan
          </h3>
          <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
            Pertumbuhan langganan aplikasi Smart Hotel & Smart Home
          </p>
        </div>
        <div className="flex items-center gap-0.5 rounded-lg bg-gray-100 p-0.5 dark:bg-gray-900">
          <button
            onClick={() => setPeriod("monthly")}
            className={`px-3 py-2 font-medium rounded-md text-theme-sm hover:text-gray-900 dark:hover:text-white ${getButtonClass(
              "monthly"
            )}`}
          >
            Bulanan
          </button>
          <button
            onClick={() => setPeriod("yearly")}
            className={`px-3 py-2 font-medium rounded-md text-theme-sm hover:text-gray-900 dark:hover:text-white ${getButtonClass(
              "yearly"
            )}`}
          >
            Tahunan
          </button>
        </div>
      </div>

      <div className="max-w-full overflow-x-auto custom-scrollbar">
        <div className="min-w-[650px] xl:min-w-full">
          <Chart
            options={options}
            series={period === "monthly" ? monthlySeries : yearlySeries}
            type="area"
            height={310}
          />
        </div>
      </div>
    </div>
  );
}
