"use client";

import Badge from "@/components/ui/badge/Badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useLanguage } from "@/context/LanguageContext";

type DeviceStatus = "online" | "offline" | "error";

interface DeviceRow {
  id: string;
  name: string;
  type: string;
  property: string;
  room: string;
  firmware: string;
  status: DeviceStatus;
}

const devices: DeviceRow[] = [
  {
    id: "DEV-1001",
    name: "Smart Lock A1",
    type: "Door Lock",
    property: "Grand Horizon Hotel",
    room: "101",
    firmware: "v2.4.1",
    status: "online",
  },
  {
    id: "DEV-1002",
    name: "Thermostat Zone 2",
    type: "HVAC",
    property: "Grand Horizon Hotel",
    room: "205",
    firmware: "v1.8.0",
    status: "online",
  },
  {
    id: "DEV-2044",
    name: "Motion Sensor Hall",
    type: "Sensor",
    property: "Oceanview Suites",
    room: "312",
    firmware: "v3.1.2",
    status: "error",
  },
  {
    id: "DEV-3102",
    name: "Smart Switch Panel",
    type: "Switch",
    property: "Villa Melati",
    room: "Main Unit",
    firmware: "v2.0.5",
    status: "online",
  },
  {
    id: "DEV-3108",
    name: "Camera Entrance",
    type: "Camera",
    property: "Rumah Aruna",
    room: "Main Unit",
    firmware: "v4.2.0",
    status: "offline",
  },
  {
    id: "DEV-4501",
    name: "Gateway Hub",
    type: "Gateway",
    property: "Palm Garden Resort",
    room: "Lobby",
    firmware: "v5.0.1",
    status: "online",
  },
];

const statusColor: Record<DeviceRow["status"], "success" | "error" | "warning"> =
  {
    online: "success",
    offline: "error",
    error: "warning",
  };

export default function DevicesTable() {
  const { t } = useLanguage();

  const tableHeadings = [
    t("common.device"),
    t("user.type"),
    t("user.property"),
    t("common.room"),
    t("common.firmware"),
    t("common.status"),
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="border-b border-gray-100 dark:border-gray-800">
            <TableRow>
              {tableHeadings.map((heading) => (
                <TableCell
                  key={heading}
                  isHeader
                  className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                >
                  {heading}
                </TableCell>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
            {devices.map((device) => (
              <TableRow key={device.id}>
                <TableCell className="px-5 py-4">
                  <p className="text-theme-sm font-medium text-gray-800 dark:text-white/90">
                    {device.name}
                  </p>
                  <p className="text-theme-xs text-gray-400">{device.id}</p>
                </TableCell>
                <TableCell className="px-5 py-4 text-theme-sm text-gray-500 dark:text-gray-400">
                  {device.type}
                </TableCell>
                <TableCell className="px-5 py-4 text-theme-sm text-gray-500 dark:text-gray-400">
                  {device.property}
                </TableCell>
                <TableCell className="px-5 py-4 text-theme-sm text-gray-500 dark:text-gray-400">
                  {device.room}
                </TableCell>
                <TableCell className="px-5 py-4 text-theme-sm text-gray-800 dark:text-white/90">
                  {device.firmware}
                </TableCell>
                <TableCell className="px-5 py-4">
                  <Badge size="sm" color={statusColor[device.status]}>
                    {t(`status.${device.status}`)}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
