"use client";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function MonthlySubscriptionChart() {
  const options: ApexOptions = {
    colors: ["#465fff", "#9CB9FF"],
    chart: {
      fontFamily: "Outfit, sans-serif",
      type: "bar",
      height: 280,
      toolbar: { show: false },
      stacked: false,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "45%",
        borderRadius: 5,
        borderRadiusApplication: "end",
      },
    },
    dataLabels: { enabled: false },
    stroke: {
      show: true,
      width: 4,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
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
      ],
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "left",
      fontFamily: "Outfit",
    },
    yaxis: {
      title: { text: undefined },
    },
    grid: {
      yaxis: { lines: { show: true } },
    },
    fill: { opacity: 1 },
    tooltip: {
      y: {
        formatter: (val: number) => `${val} langganan baru`,
      },
    },
  };

  const series = [
    {
      name: "Smart Hotel",
      data: [42, 55, 48, 72, 68, 85, 90, 78, 95, 110, 102, 118],
    },
    {
      name: "Smart Home",
      data: [120, 145, 138, 160, 175, 190, 210, 195, 230, 250, 245, 268],
    },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-5 pt-5 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6 sm:pt-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Langganan Baru per Bulan
        </h3>
        <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
          Jumlah aktivasi langganan baru sepanjang tahun
        </p>
      </div>

      <div className="max-w-full overflow-x-auto custom-scrollbar">
        <div className="-ml-5 min-w-[650px] xl:min-w-full pl-2">
          <ReactApexChart
            options={options}
            series={series}
            type="bar"
            height={280}
          />
        </div>
      </div>
    </div>
  );
}
