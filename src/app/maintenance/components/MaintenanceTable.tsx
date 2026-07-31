import Badge from "@/components/ui/badge/Badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type MaintenanceStatus = "Terjadwal" | "Berjalan" | "Selesai";

interface MaintenanceRow {
  id: string;
  hotel: string;
  room: string;
  device: string;
  deviceType: string;
  scheduleDate: string;
  time: string;
  technician: string;
  status: MaintenanceStatus;
}

const rows: MaintenanceRow[] = [
  {
    id: "MNT-001",
    hotel: "Grand Horizon Hotel",
    room: "101",
    device: "Smart Lock A1",
    deviceType: "Door Lock",
    scheduleDate: "01 Agu 2026",
    time: "09:00",
    technician: "Andi Pratama",
    status: "Terjadwal",
  },
  {
    id: "MNT-002",
    hotel: "Grand Horizon Hotel",
    room: "205",
    device: "Thermostat Zone 2",
    deviceType: "HVAC",
    scheduleDate: "02 Agu 2026",
    time: "13:30",
    technician: "Budi Santoso",
    status: "Berjalan",
  },
  {
    id: "MNT-003",
    hotel: "Oceanview Suites",
    room: "312",
    device: "Motion Sensor Hall",
    deviceType: "Sensor",
    scheduleDate: "04 Agu 2026",
    time: "10:00",
    technician: "Citra Lestari",
    status: "Terjadwal",
  },
  {
    id: "MNT-004",
    hotel: "Palm Garden Resort",
    room: "518",
    device: "Gateway Hub",
    deviceType: "Gateway",
    scheduleDate: "05 Agu 2026",
    time: "15:00",
    technician: "Dedi Kurniawan",
    status: "Terjadwal",
  },
  {
    id: "MNT-005",
    hotel: "Villa Melati",
    room: "Main Unit",
    device: "Smart Switch Panel",
    deviceType: "Switch",
    scheduleDate: "07 Agu 2026",
    time: "11:00",
    technician: "Eka Putri",
    status: "Selesai",
  },
  {
    id: "MNT-006",
    hotel: "CityLink Hotel Group",
    room: "Lobby",
    device: "Camera Entrance",
    deviceType: "Camera",
    scheduleDate: "10 Agu 2026",
    time: "08:30",
    technician: "Fajar Nugroho",
    status: "Terjadwal",
  },
  {
    id: "MNT-007",
    hotel: "Skyline Business Hotel",
    room: "408",
    device: "Smart Lock B3",
    deviceType: "Door Lock",
    scheduleDate: "12 Agu 2026",
    time: "14:00",
    technician: "Andi Pratama",
    status: "Terjadwal",
  },
];

const statusColor: Record<MaintenanceStatus, "primary" | "warning" | "success"> =
  {
    Terjadwal: "primary",
    Berjalan: "warning",
    Selesai: "success",
  };

export default function MaintenanceTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="border-b border-gray-100 px-5 py-4 dark:border-gray-800">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Jadwal Maintenance
        </h3>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Daftar perawatan berdasarkan hotel, room, dan device
        </p>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="border-b border-gray-100 dark:border-gray-800">
            <TableRow>
              {[
                "ID",
                "Hotel",
                "Room",
                "Device",
                "Jadwal",
                "Teknisi",
                "Status",
              ].map((h) => (
                <TableCell
                  key={h}
                  isHeader
                  className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                >
                  {h}
                </TableCell>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="px-5 py-4 text-theme-sm text-gray-500 dark:text-gray-400">
                  {row.id}
                </TableCell>
                <TableCell className="px-5 py-4 text-theme-sm font-medium text-gray-800 dark:text-white/90">
                  {row.hotel}
                </TableCell>
                <TableCell className="px-5 py-4 text-theme-sm text-gray-500 dark:text-gray-400">
                  {row.room}
                </TableCell>
                <TableCell className="px-5 py-4">
                  <p className="text-theme-sm font-medium text-gray-800 dark:text-white/90">
                    {row.device}
                  </p>
                  <p className="text-theme-xs text-gray-400">{row.deviceType}</p>
                </TableCell>
                <TableCell className="px-5 py-4 text-theme-sm text-gray-500 dark:text-gray-400">
                  {row.scheduleDate} · {row.time}
                </TableCell>
                <TableCell className="px-5 py-4 text-theme-sm text-gray-500 dark:text-gray-400">
                  {row.technician}
                </TableCell>
                <TableCell className="px-5 py-4">
                  <Badge size="sm" color={statusColor[row.status]}>
                    {row.status}
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
