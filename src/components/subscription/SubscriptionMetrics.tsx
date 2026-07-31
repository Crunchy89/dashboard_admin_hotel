"use client";
import React from "react";
import Badge from "../ui/badge/Badge";
import {
  ArrowUpIcon,
  BoxIconLine,
  DollarLineIcon,
  GroupIcon,
} from "@/icon";

const metrics = [
  {
    label: "Total User",
    value: "12,486",
    change: "14.2%",
    icon: GroupIcon,
  },
  {
    label: "Smart Hotel",
    value: "3,248",
    change: "9.8%",
    icon: BoxIconLine,
  },
  {
    label: "Smart Home",
    value: "9,238",
    change: "16.4%",
    icon: GroupIcon,
  },
  {
    label: "Langganan Aktif",
    value: "10,972",
    change: "11.5%",
    icon: DollarLineIcon,
  },
];

export default function SubscriptionMetrics() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4 md:gap-6">
      {metrics.map((metric) => {
        const Icon = metric.icon;
        return (
          <div
            key={metric.label}
            className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
              <Icon className="text-gray-800 size-6 dark:text-white/90" />
            </div>

            <div className="flex items-end justify-between mt-5">
              <div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {metric.label}
                </span>
                <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
                  {metric.value}
                </h4>
              </div>
              <Badge color="success">
                <ArrowUpIcon />
                {metric.change}
              </Badge>
            </div>
          </div>
        );
      })}
    </div>
  );
}
