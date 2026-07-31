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
    name: "Pelanggan Baru",
    data: [98, 112, 125, 138, 146, 158, 165, 172, 180, 188, 195, 210],
  },
  {
    name: "Pelanggan Berhenti",
    data: [22, 25, 24, 28, 26, 29, 27, 30, 28, 26, 24, 23],
  },
];

const yearlySeries = [
  {
    name: "Pelanggan Baru",
    data: [620, 980, 1240, 1520, 1842],
  },
  {
    name: "Pelanggan Berhenti",
    data: [180, 240, 280, 295, 312],
  },
];

export default function CustomerMovementChart() {
  const [period, setPeriod] = useState<Period>("yearly");

  const options: ApexOptions = {
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "left",
      fontFamily: "Outfit",
    },
    colors: ["#12B76A", "#F04438"],
    chart: {
      fontFamily: "Outfit, sans-serif",
      height: 320,
      type: "bar",
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
        text: "Jumlah pelanggan",
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
        formatter: (val: number) => `${val.toLocaleString("id-ID")} pelanggan`,
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
            Pelanggan Baru vs Berhenti
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Pertumbuhan akuisisi dibanding churn
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

      <div className="mb-4 grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-success-200 bg-success-50 px-3 py-2.5 dark:border-success-500/20 dark:bg-success-500/10">
          <p className="text-xs text-success-600 dark:text-success-500">
            Pelanggan Baru 2026
          </p>
          <p className="mt-1 text-base font-bold text-success-700 dark:text-success-400">
            1.842
          </p>
        </div>
        <div className="rounded-xl border border-error-200 bg-error-50 px-3 py-2.5 dark:border-error-500/20 dark:bg-error-500/10">
          <p className="text-xs text-error-600 dark:text-error-500">
            Pelanggan Berhenti 2026
          </p>
          <p className="mt-1 text-base font-bold text-error-700 dark:text-error-400">
            312
          </p>
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
