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

const yearlyCategories = ["2022", "2023", "2024", "2025", "2026"];

const monthlySeries = [
  {
    name: "Smart Hotel",
    data: [0.14, 0.15, 0.17, 0.18, 0.19, 0.21, 0.22, 0.23, 0.24, 0.25, 0.26, 0.28],
  },
  {
    name: "Smart Home",
    data: [0.14, 0.16, 0.17, 0.19, 0.20, 0.21, 0.23, 0.24, 0.25, 0.26, 0.27, 0.28],
  },
];

const yearlySeries = [
  {
    name: "Smart Hotel",
    data: [0.38, 0.72, 1.15, 1.84, 2.65],
  },
  {
    name: "Smart Home",
    data: [0.44, 0.74, 1.09, 1.54, 2.17],
  },
];

export default function SegmentRevenueChart() {
  const [period, setPeriod] = useState<Period>("yearly");

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
      height: 320,
      type: "bar",
      stacked: true,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "45%",
        borderRadius: 6,
        borderRadiusApplication: "end",
      },
    },
    dataLabels: { enabled: false },
    stroke: {
      show: true,
      width: 3,
      colors: ["transparent"],
    },
    xaxis: {
      categories: period === "monthly" ? monthlyCategories : yearlyCategories,
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      title: {
        text: "Revenue (Rp miliar)",
        style: { fontSize: "12px", color: "#98A2B3" },
      },
      labels: {
        style: { fontSize: "12px", colors: ["#6B7280"] },
      },
    },
    grid: {
      yaxis: { lines: { show: true } },
    },
    fill: { opacity: 1 },
    tooltip: {
      y: {
        formatter: (val: number) => `Rp ${val.toFixed(2)} M`,
      },
    },
  };

  const getButtonClass = (value: Period) =>
    period === value
      ? "shadow-theme-xs text-gray-900 dark:text-white bg-white dark:bg-gray-800"
      : "text-gray-500 dark:text-gray-400";

  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-5 pb-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
      <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Revenue Smart Hotel vs Smart Home
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Kontribusi pendapatan per segmen (Rp miliar)
          </p>
        </div>
        <div className="flex items-center gap-0.5 rounded-lg bg-gray-100 p-0.5 dark:bg-gray-900">
          <button
            onClick={() => setPeriod("monthly")}
            className={`rounded-md px-3 py-2 text-theme-sm font-medium ${getButtonClass(
              "monthly"
            )}`}
          >
            Bulanan
          </button>
          <button
            onClick={() => setPeriod("yearly")}
            className={`rounded-md px-3 py-2 text-theme-sm font-medium ${getButtonClass(
              "yearly"
            )}`}
          >
            Tahunan
          </button>
        </div>
      </div>

      <Chart
        options={options}
        series={period === "monthly" ? monthlySeries : yearlySeries}
        type="bar"
        height={320}
      />
    </div>
  );
}
