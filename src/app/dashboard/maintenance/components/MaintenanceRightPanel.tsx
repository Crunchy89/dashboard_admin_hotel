"use client";

import Badge from "@/components/ui/badge/Badge";

type MaintenanceStatus = "scheduled" | "inProgress" | "completed";

const upcoming = [
  {
    hotel: "Grand Horizon",
    room: "101",
    device: "Smart Lock A1",
    whenType: "today" as const,
    time: "09:00",
    status: "scheduled" as MaintenanceStatus,
  },
  {
    hotel: "Oceanview",
    room: "312",
    device: "Motion Sensor",
    whenType: "tomorrow" as const,
    time: "10:00",
    status: "scheduled" as MaintenanceStatus,
  },
  {
    hotel: "Palm Garden",
    room: "518",
    device: "Gateway Hub",
    whenType: "date" as const,
    day: "5",
    month: "Aug",
    time: "15:00",
    status: "scheduled" as MaintenanceStatus,
  },
];

const stats: { status: MaintenanceStatus; value: string; color: string }[] = [
  { status: "scheduled", value: "5", color: "text-brand-500" },
  { status: "inProgress", value: "1", color: "text-warning-500" },
  { status: "completed", value: "1", color: "text-success-600" },
];

const statusLabels: Record<MaintenanceStatus, string> = {
  scheduled: "Scheduled",
  inProgress: "In Progress",
  completed: "Completed",
};

export default function MaintenanceRightPanel() {
  function formatWhen(item: (typeof upcoming)[number]) {
    if (item.whenType === "today") {
      return `Today · ${item.time}`;
    }
    if (item.whenType === "tomorrow") {
      return `Tomorrow · ${item.time}`;
    }
    return `${item.day} ${item.month} · ${item.time}`;
  }

  return (
    <div className="space-y-4 xl:sticky xl:top-24">
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Summary
        </h3>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {stats.map((item) => (
            <div
              key={item.status}
              className="rounded-xl bg-gray-50 px-2 py-3 text-center dark:bg-white/[0.02]"
            >
              <p className={`text-xl font-bold ${item.color}`}>{item.value}</p>
              <p className="mt-1 text-xs text-gray-400">
                {statusLabels[item.status]}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Upcoming
        </h3>
        <div className="mt-4 space-y-3">
          {upcoming.map((item) => (
            <div
              key={`${item.hotel}-${item.device}`}
              className="rounded-xl border border-gray-100 p-3 dark:border-gray-800"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                    {item.device}
                  </p>
                  <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
                    {item.hotel} · Room {item.room}
                  </p>
                </div>
                <Badge size="sm" color="primary">
                  {statusLabels[item.status]}
                </Badge>
              </div>
              <p className="mt-2 text-xs text-gray-400">{formatWhen(item)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
