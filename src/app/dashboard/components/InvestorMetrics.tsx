"use client";

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
  const userMetrics: {
    label: string;
    value: string;
    change: string;
    tone?: MetricTone;
  }[] = [
    {
      label: "Total User",
      value: "12.486",
      change: "+14.2% YoY",
    },
    {
      label: "Smart Hotel",
      value: "3.248",
      change: "26% of total",
    },
    {
      label: "Smart Home",
      value: "9.238",
      change: "74% of total",
    },
    {
      label: "New Customers",
      value: "1.842",
      change: "+18.6% YoY",
      tone: "success",
    },
    {
      label: "Churned Customers",
      value: "312",
      change: "Churn 2.5%",
      tone: "error",
    },
  ];

  const financeMetrics = [
    {
      label: "Total Revenue",
      value: "Rp 4,82 M",
      change: "+42.6% YoY",
    },
    {
      label: "Net Profit",
      value: "Rp 2,85 M",
      change: "+73.8% YoY",
    },
    {
      label: "Revenue Hotel",
      value: "Rp 2,65 M",
      change: "55% of total",
    },
    {
      label: "Revenue Home",
      value: "Rp 2,17 M",
      change: "45% of total",
    },
    {
      label: "MRR",
      value: "Rp 402 jt",
      change: "+12.4% MoM",
    },
    {
      label: "Profit Margin",
      value: "59%",
      change: "+8.2 pts",
    },
  ];

  return (
    <div className="space-y-4">
      <MetricGrid items={userMetrics} columns="xl:grid-cols-5" />
      <MetricGrid items={financeMetrics} columns="xl:grid-cols-6" />
    </div>
  );
}
