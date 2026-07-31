export type ReportProgress = "new" | "processing" | "waitingUser" | "done";

export type ReportCategory = "user" | "deviceError" | "disconnected";

export interface UserReport {
  id: string;
  user: string;
  category: ReportCategory;
  subject: string;
  hotel: string;
  room?: string;
  device?: string;
  createdAt: string;
  progress: ReportProgress;
}

export const userReports: UserReport[] = [
  {
    id: "RPT-1042",
    user: "Skyline Business Hotel",
    category: "user",
    subject: "Smart lock not responding",
    hotel: "Skyline Business Hotel",
    room: "408",
    device: "Smart Lock B3",
    createdAt: "31 Jul 2026 · 10:12",
    progress: "processing",
  },
  {
    id: "RPT-1041",
    user: "Oceanview Suites",
    category: "deviceError",
    subject: "Motion sensor recurring error",
    hotel: "Oceanview Suites",
    room: "312",
    device: "Motion Sensor Hall",
    createdAt: "31 Jul 2026 · 09:45",
    progress: "new",
  },
  {
    id: "RPT-1040",
    user: "Rumah Aruna",
    category: "disconnected",
    subject: "Entrance camera disconnected",
    hotel: "Rumah Aruna",
    room: "Main Unit",
    device: "Camera Entrance",
    createdAt: "31 Jul 2026 · 09:20",
    progress: "waitingUser",
  },
  {
    id: "RPT-1039",
    user: "Villa Melati",
    category: "user",
    subject: "Help setting up new sensor",
    hotel: "Villa Melati",
    room: "Main Unit",
    device: "Smart Switch Panel",
    createdAt: "30 Jul 2026 · 16:40",
    progress: "processing",
  },
  {
    id: "RPT-1038",
    user: "Grand Horizon Hotel",
    category: "deviceError",
    subject: "Thermostat not syncing",
    hotel: "Grand Horizon Hotel",
    room: "205",
    device: "Thermostat Zone 2",
    createdAt: "30 Jul 2026 · 14:10",
    progress: "done",
  },
  {
    id: "RPT-1037",
    user: "Palm Garden Resort",
    category: "disconnected",
    subject: "Gateway hub offline",
    hotel: "Palm Garden Resort",
    room: "Lobby",
    device: "Gateway Hub",
    createdAt: "30 Jul 2026 · 11:05",
    progress: "new",
  },
];

export const progressColor: Record<
  ReportProgress,
  "primary" | "warning" | "info" | "success"
> = {
  new: "primary",
  processing: "warning",
  waitingUser: "info",
  done: "success",
};

export const categoryColorMap: Record<
  ReportCategory,
  "primary" | "error" | "warning"
> = {
  user: "primary",
  deviceError: "error",
  disconnected: "warning",
};

export const categoryLabels: Record<ReportCategory, string> = {
  user: "User",
  deviceError: "Device Error",
  disconnected: "Disconnected",
};

export const progressLabels: Record<ReportProgress, string> = {
  new: "New",
  processing: "Processing",
  waitingUser: "Waiting for User",
  done: "Done",
};
