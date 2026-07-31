"use client";

import { useLanguage } from "@/context/LanguageContext";

type MetricTone = "success" | "error";

function MetricGrid({
  items,
  columns = "xl:grid-cols-6",
}: {
  items: {
    label: string;
    value: string;
    change: string;
    tone?: MetricTone;
  }[];
  columns?: string;
}) {
  return (
    <div className={`grid grid-cols-2 gap-3 sm:grid-cols-3 ${columns}`}>
      {items.map((metric) => (
        <div
          key={metric.label}
          className="rounded-2xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-white/[0.03]"
        >
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {metric.label}
          </p>
          <p className="mt-2 text-lg font-bold text-gray-800 dark:text-white/90">
            {metric.value}
          </p>
          <p
            className={`mt-1 text-xs font-medium ${
              metric.tone === "error"
                ? "text-error-600 dark:text-error-500"
                : "text-success-600 dark:text-success-500"
            }`}
          >
            {metric.change}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function InvestorMetrics() {
  const { t } = useLanguage();

  const userMetrics: {
    label: string;
    value: string;
    change: string;
    tone?: MetricTone;
  }[] = [
    {
      label: t("dashboard.totalUser"),
      value: "12.486",
      change: `+14.2% ${t("dashboard.yoy")}`,
    },
    {
      label: t("dashboard.smartHotel"),
      value: "3.248",
      change: `26% ${t("dashboard.percentOfTotal")}`,
    },
    {
      label: t("dashboard.smartHome"),
      value: "9.238",
      change: `74% ${t("dashboard.percentOfTotal")}`,
    },
    {
      label: t("dashboard.newCustomers"),
      value: "1.842",
      change: `+18.6% ${t("dashboard.yoy")}`,
      tone: "success",
    },
    {
      label: t("dashboard.churnedCustomers"),
      value: "312",
      change: `${t("dashboard.churn")} 2.5%`,
      tone: "error",
    },
  ];

  const financeMetrics = [
    {
      label: t("dashboard.totalRevenue"),
      value: "Rp 4,82 M",
      change: `+42.6% ${t("dashboard.yoy")}`,
    },
    {
      label: t("dashboard.netProfit"),
      value: "Rp 2,85 M",
      change: `+73.8% ${t("dashboard.yoy")}`,
    },
    {
      label: t("dashboard.revenueHotel"),
      value: "Rp 2,65 M",
      change: `55% ${t("dashboard.percentOfTotal")}`,
    },
    {
      label: t("dashboard.revenueHome"),
      value: "Rp 2,17 M",
      change: `45% ${t("dashboard.percentOfTotal")}`,
    },
    {
      label: t("dashboard.mrr"),
      value: "Rp 402 jt",
      change: `+12.4% ${t("dashboard.mom")}`,
    },
    {
      label: t("dashboard.profitMargin"),
      value: "59%",
      change: `+8.2 ${t("dashboard.pts")}`,
    },
  ];

  return (
    <div className="space-y-4">
      <MetricGrid items={userMetrics} columns="xl:grid-cols-5" />
      <MetricGrid items={financeMetrics} columns="xl:grid-cols-6" />
    </div>
  );
}
