"use client";
import { useMemo } from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { useLanguage } from "@/context/LanguageContext";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function UserDistributionChart() {
  const { t, locale } = useLanguage();
  const numberLocale = locale === "id" ? "id-ID" : "en-US";

  const smartHotelLabel = t("dashboard.smartHotel");
  const smartHomeLabel = t("dashboard.smartHome");

  const segments = useMemo(
    () => [
      { label: smartHotelLabel, value: 3248, percent: 26, color: "bg-brand-500" },
      { label: smartHomeLabel, value: 9238, percent: 74, color: "bg-brand-300" },
    ],
    [smartHotelLabel, smartHomeLabel]
  );

  const series = [3248, 9238];

  const options: ApexOptions = useMemo(
    () => ({
      colors: ["#465FFF", "#9CB9FF"],
      chart: {
        fontFamily: "Outfit, sans-serif",
        type: "donut",
        height: 300,
      },
      labels: [smartHotelLabel, smartHomeLabel],
      legend: { show: false },
      plotOptions: {
        pie: {
          donut: {
            size: "72%",
            labels: {
              show: true,
              name: {
                show: true,
                fontSize: "14px",
                fontWeight: 500,
                color: "#667085",
              },
              value: {
                show: true,
                fontSize: "24px",
                fontWeight: 700,
                color: "#1D2939",
                formatter: (val) => Number(val).toLocaleString(numberLocale),
              },
              total: {
                show: true,
                label: t("dashboard.totalUser"),
                fontSize: "14px",
                fontWeight: 500,
                color: "#667085",
                formatter: () => "12.486",
              },
            },
          },
        },
      },
      dataLabels: { enabled: false },
      stroke: { width: 0 },
      tooltip: {
        y: {
          formatter: (val: number) =>
            `${val.toLocaleString(numberLocale)} ${t("dashboard.users")}`,
        },
      },
    }),
    [smartHotelLabel, smartHomeLabel, numberLocale, t]
  );

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] sm:p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          {t("dashboard.userDistribution")}
        </h3>
        <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
          {t("dashboard.hotelVsHome")}
        </p>
      </div>

      <div className="flex justify-center">
        <ReactApexChart
          options={options}
          series={series}
          type="donut"
          height={300}
        />
      </div>

      <div className="mt-6 space-y-4">
        {segments.map((segment) => (
          <div
            key={segment.label}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <span
                className={`block h-3 w-3 rounded-full ${segment.color}`}
              />
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {segment.label}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-gray-800 dark:text-white/90">
                {segment.value.toLocaleString(numberLocale)}
              </span>
              <span className="text-sm text-gray-400">{segment.percent}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
