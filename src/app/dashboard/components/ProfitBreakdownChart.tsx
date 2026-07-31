"use client";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function ProfitBreakdownChart() {
  const options: ApexOptions = {
    colors: ["#465FFF", "#9CB9FF", "#12B76A"],
    chart: {
      fontFamily: "Outfit, sans-serif",
      type: "bar",
      height: 320,
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "48%",
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
      categories: ["2023", "2024", "2025", "2026"],
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      title: {
        text: "Rp miliar",
        style: { fontSize: "12px", color: "#98A2B3" },
      },
      labels: {
        style: { fontSize: "12px", colors: ["#6B7280"] },
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "left",
      fontFamily: "Outfit",
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

  const series = [
    {
      name: "Revenue",
      data: [2.24, 3.38, 4.12, 4.82],
    },
    {
      name: "Biaya Operasional",
      data: [0.82, 1.33, 1.66, 1.97],
    },
    {
      name: "Keuntungan Bersih",
      data: [1.42, 2.05, 2.46, 2.85],
    },
  ];

  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-5 pb-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
      <div className="mb-5">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Revenue vs Keuntungan Bersih
        </h3>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Perbandingan pendapatan, biaya, dan laba bersih (Rp miliar)
        </p>
      </div>

      <Chart options={options} series={series} type="bar" height={320} />
    </div>
  );
}
