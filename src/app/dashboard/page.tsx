import type { Metadata } from "next";
import React from "react";
import InvestorMetrics from "./components/InvestorMetrics";
import RevenueProfitChart from "./components/RevenueProfitChart";
import SegmentRevenueChart from "./components/SegmentRevenueChart";
import ProfitBreakdownChart from "./components/ProfitBreakdownChart";
import UserDistributionChart from "./components/UserDistributionChart";
import CustomerMovementChart from "./components/CustomerMovementChart";

export const metadata: Metadata = {
  title: "Hasil & Revenue | Smart Hotel & Smart Home",
  description:
    "Laporan pertumbuhan revenue dan profit aplikasi Smart Hotel & Smart Home",
};

export default function SubscriptionDashboard() {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12">
        <InvestorMetrics />
      </div>

      <div className="col-span-12">
        <RevenueProfitChart />
      </div>

      <div className="col-span-12 xl:col-span-6">
        <CustomerMovementChart />
      </div>

      <div className="col-span-12 xl:col-span-6">
        <UserDistributionChart />
      </div>

      <div className="col-span-12 xl:col-span-6">
        <SegmentRevenueChart />
      </div>

      <div className="col-span-12 xl:col-span-6">
        <ProfitBreakdownChart />
      </div>
    </div>
  );
}
