import type { Metadata } from "next";
import React from "react";
import SubscriptionMetrics from "@/components/subscription/SubscriptionMetrics";
import SubscriptionGrowthChart from "@/components/subscription/SubscriptionGrowthChart";
import MonthlySubscriptionChart from "@/components/subscription/MonthlySubscriptionChart";
import UserDistributionChart from "@/components/subscription/UserDistributionChart";
import HotelPackages from "@/components/subscription/HotelPackages";
import HomePackages from "@/components/subscription/HomePackages";
import RecentSubscriptions from "@/components/subscription/RecentSubscriptions";

export const metadata: Metadata = {
  title: "Dashboard Subscription | Smart Hotel & Smart Home",
  description:
    "Dashboard admin untuk sistem subscription Smart Hotel dan Smart Home",
};

export default function SubscriptionDashboard() {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6">
      <div className="col-span-12">
        <div className="mb-2">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white/90 md:text-2xl">
            Dashboard Subscription
          </h1>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Overview pertumbuhan langganan Smart Hotel & Smart Home
          </p>
        </div>
      </div>

      <div className="col-span-12">
        <SubscriptionMetrics />
      </div>

      <div className="col-span-12 xl:col-span-8">
        <SubscriptionGrowthChart />
      </div>

      <div className="col-span-12 xl:col-span-4">
        <UserDistributionChart />
      </div>

      <div className="col-span-12 xl:col-span-7">
        <MonthlySubscriptionChart />
      </div>

      <div className="col-span-12 xl:col-span-5">
        <HomePackages />
      </div>

      <div className="col-span-12">
        <HotelPackages />
      </div>

      <div className="col-span-12">
        <RecentSubscriptions />
      </div>
    </div>
  );
}
