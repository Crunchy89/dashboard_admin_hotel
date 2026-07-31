"use client";
import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { useLanguage } from "@/context/LanguageContext";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

type Period = "monthly" | "yearly";

const MONTH_KEYS = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
] as const;

const yearlyCategories = ["2022", "2023", "2024", "2025", "2026"];

const monthlyData = {
  revenue: [0.28, 0.31, 0.34, 0.37, 0.39, 0.42, 0.45, 0.47, 0.49, 0.51, 0.53, 0.56],
  netProfit: [0.14, 0.16, 0.18, 0.2, 0.22, 0.24, 0.26, 0.28, 0.3, 0.32, 0.34, 0.36],
};

const yearlyData = {
  revenue: [0.82, 1.46, 2.24, 3.38, 4.82],
  netProfit: [0.32, 0.78, 1.42, 2.05, 2.85],
};

export default function RevenueProfitChart() {
  const { t } = useLanguage();
  const [period, setPeriod] = useState<Period>("yearly");

  const monthlyCategories = useMemo(
    () => MONTH_KEYS.map((key) => t(`months.${key}`)),
    [t]
  );

  const monthlySeries = useMemo(
    () => [
      { name: t("dashboard.revenue"), data: monthlyData.revenue },
      { name: t("dashboard.netProfit"), data: monthlyData.netProfit },
    ],
    [t]
  );

  const yearlySeries = useMemo(
    () => [
      { name: t("dashboard.revenue"), data: yearlyData.revenue },
      { name: t("dashboard.netProfit"), data: yearlyData.netProfit },
    ],
    [t]
  );

  const options: ApexOptions = useMemo(
    () => ({
      legend: {
        show: true,
        position: "top",
        horizontalAlign: "left",
        fontFamily: "Outfit",
      },
      colors: ["#465FFF", "#12B76A"],
      chart: {
        fontFamily: "Outfit, sans-serif",
        height: 340,
        type: "area",
        toolbar: { show: false },
      },
      stroke: {
        curve: "smooth",
        width: [3, 3],
      },
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 0.45,
          opacityTo: 0.05,
        },
      },
      markers: {
        size: 0,
        hover: { size: 6 },
      },
      grid: {
        xaxis: { lines: { show: false } },
        yaxis: { lines: { show: true } },
      },
      dataLabels: { enabled: false },
      tooltip: {
        shared: true,
        y: {
          formatter: (val: number) => `Rp ${val.toFixed(2)} M`,
        },
      },
      xaxis: {
        type: "category",
        categories: period === "monthly" ? monthlyCategories : yearlyCategories,
        axisBorder: { show: false },
        axisTicks: { show: false },
      },
      yaxis: {
        labels: {
          style: { fontSize: "12px", colors: ["#6B7280"] },
          formatter: (val: number) => `${val.toFixed(1)}`,
        },
        title: {
          text: t("dashboard.idrBillion"),
          style: { fontSize: "12px", color: "#98A2B3" },
        },
      },
    }),
    [period, monthlyCategories, t]
  );

  const getButtonClass = (value: Period) =>
    period === value
      ? "shadow-theme-xs text-gray-900 dark:text-white bg-white dark:bg-gray-800"
      : "text-gray-500 dark:text-gray-400";

  const summaryItems = [
    {
      label: t("dashboard.revenue2026"),
      value: "Rp 4,82 M",
      tone: "text-brand-500",
    },
    {
      label: t("dashboard.netProfit"),
      value: "Rp 2,85 M",
      tone: "text-success-600",
    },
    {
      label: t("dashboard.yoyRevenue"),
      value: "+42.6%",
      tone: "text-success-600",
    },
    {
      label: t("dashboard.profitMargin"),
      value: "59%",
      tone: "text-success-600",
    },
  ];

  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-5 pb-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            {t("dashboard.revenueGrowth")}
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {t("dashboard.financeResult")}
          </p>
        </div>
        <div className="flex items-center gap-0.5 rounded-lg bg-gray-100 p-0.5 dark:bg-gray-900">
          <button
            onClick={() => setPeriod("monthly")}
            className={`rounded-md px-3 py-2 text-theme-sm font-medium ${getButtonClass(
              "monthly"
            )}`}
          >
            {t("dashboard.monthly")}
          </button>
          <button
            onClick={() => setPeriod("yearly")}
            className={`rounded-md px-3 py-2 text-theme-sm font-medium ${getButtonClass(
              "yearly"
            )}`}
          >
            {t("dashboard.yearly")}
          </button>
        </div>
      </div>

      <div className="mb-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {summaryItems.map((item) => (
          <div
            key={item.label}
            className="rounded-xl border border-gray-100 bg-gray-50/80 px-3 py-2.5 dark:border-gray-800 dark:bg-white/[0.02]"
          >
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {item.label}
            </p>
            <p className={`mt-1 text-base font-bold ${item.tone}`}>
              {item.value}
            </p>
          </div>
        ))}
      </div>

      <div className="max-w-full overflow-x-auto custom-scrollbar">
        <div className="min-w-[560px] xl:min-w-full">
          <Chart
            options={options}
            series={period === "monthly" ? monthlySeries : yearlySeries}
            type="area"
            height={340}
          />
        </div>
      </div>
    </div>
  );
}
