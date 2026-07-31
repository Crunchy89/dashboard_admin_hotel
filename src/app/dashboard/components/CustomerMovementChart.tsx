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
  newCustomers: [98, 112, 125, 138, 146, 158, 165, 172, 180, 188, 195, 210],
  churnedCustomers: [22, 25, 24, 28, 26, 29, 27, 30, 28, 26, 24, 23],
};

const yearlyData = {
  newCustomers: [620, 980, 1240, 1520, 1842],
  churnedCustomers: [180, 240, 280, 295, 312],
};

export default function CustomerMovementChart() {
  const { t, locale } = useLanguage();
  const [period, setPeriod] = useState<Period>("yearly");
  const numberLocale = locale === "id" ? "id-ID" : "en-US";

  const monthlyCategories = useMemo(
    () => MONTH_KEYS.map((key) => t(`months.${key}`)),
    [t]
  );

  const monthlySeries = useMemo(
    () => [
      { name: t("dashboard.newCustomers"), data: monthlyData.newCustomers },
      {
        name: t("dashboard.churnedCustomers"),
        data: monthlyData.churnedCustomers,
      },
    ],
    [t]
  );

  const yearlySeries = useMemo(
    () => [
      { name: t("dashboard.newCustomers"), data: yearlyData.newCustomers },
      {
        name: t("dashboard.churnedCustomers"),
        data: yearlyData.churnedCustomers,
      },
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
          text: t("dashboard.customerCount"),
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
          formatter: (val: number) =>
            `${val.toLocaleString(numberLocale)} ${t("dashboard.customers")}`,
        },
      },
    }),
    [period, monthlyCategories, t, numberLocale]
  );

  const getButtonClass = (value: Period) =>
    period === value
      ? "shadow-theme-xs text-gray-900 dark:text-white bg-white dark:bg-gray-800"
      : "text-gray-500 dark:text-gray-400";

  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-5 pb-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
      <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            {t("dashboard.newVsChurn")}
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {t("dashboard.acquisitionVsChurn")}
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

      <div className="mb-4 grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-success-200 bg-success-50 px-3 py-2.5 dark:border-success-500/20 dark:bg-success-500/10">
          <p className="text-xs text-success-600 dark:text-success-500">
            {t("dashboard.newCustomers2026")}
          </p>
          <p className="mt-1 text-base font-bold text-success-700 dark:text-success-400">
            1.842
          </p>
        </div>
        <div className="rounded-xl border border-error-200 bg-error-50 px-3 py-2.5 dark:border-error-500/20 dark:bg-error-500/10">
          <p className="text-xs text-error-600 dark:text-error-500">
            {t("dashboard.churnedCustomers2026")}
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
