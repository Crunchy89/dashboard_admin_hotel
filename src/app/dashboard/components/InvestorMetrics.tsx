"use client";

import { SummaryMetricGrid } from "@/components/dashboard/DashboardPanel";

type MetricTone = "success" | "error";

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
      <SummaryMetricGrid
        items={userMetrics}
        columns="xl:grid-cols-5"
        size="sm"
      />
      <SummaryMetricGrid
        items={financeMetrics}
        columns="xl:grid-cols-6"
        size="sm"
      />
    </div>
  );
}
