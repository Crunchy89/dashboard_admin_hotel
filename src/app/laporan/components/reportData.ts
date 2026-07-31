export type ReportProgress =
  | "Baru"
  | "Diproses"
  | "Menunggu User"
  | "Selesai";

export type ReportCategory = "User" | "Device Error" | "Disconnected";

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
    category: "User",
    subject: "Smart lock tidak merespons",
    hotel: "Skyline Business Hotel",
    room: "408",
    device: "Smart Lock B3",
    createdAt: "31 Jul 2026 · 10:12",
    progress: "Diproses",
  },
  {
    id: "RPT-1041",
    user: "Oceanview Suites",
    category: "Device Error",
    subject: "Sensor gerak error berulang",
    hotel: "Oceanview Suites",
    room: "312",
    device: "Motion Sensor Hall",
    createdAt: "31 Jul 2026 · 09:45",
    progress: "Baru",
  },
  {
    id: "RPT-1040",
    user: "Rumah Aruna",
    category: "Disconnected",
    subject: "Kamera pintu terputus",
    hotel: "Rumah Aruna",
    room: "Main Unit",
    device: "Camera Entrance",
    createdAt: "31 Jul 2026 · 09:20",
    progress: "Menunggu User",
  },
  {
    id: "RPT-1039",
    user: "Villa Melati",
    category: "User",
    subject: "Bantuan setup sensor baru",
    hotel: "Villa Melati",
    room: "Main Unit",
    device: "Smart Switch Panel",
    createdAt: "30 Jul 2026 · 16:40",
    progress: "Diproses",
  },
  {
    id: "RPT-1038",
    user: "Grand Horizon Hotel",
    category: "Device Error",
    subject: "Thermostat tidak sinkron",
    hotel: "Grand Horizon Hotel",
    room: "205",
    device: "Thermostat Zone 2",
    createdAt: "30 Jul 2026 · 14:10",
    progress: "Selesai",
  },
  {
    id: "RPT-1037",
    user: "Palm Garden Resort",
    category: "Disconnected",
    subject: "Gateway hub offline",
    hotel: "Palm Garden Resort",
    room: "Lobby",
    device: "Gateway Hub",
    createdAt: "30 Jul 2026 · 11:05",
    progress: "Baru",
  },
];

export const progressColor: Record<
  ReportProgress,
  "primary" | "warning" | "info" | "success"
> = {
  Baru: "primary",
  Diproses: "warning",
  "Menunggu User": "info",
  Selesai: "success",
};
