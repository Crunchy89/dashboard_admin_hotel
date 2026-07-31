"use client";

import Badge from "@/components/ui/badge/Badge";
import {
  DashboardPanel,
  TableHeadRow,
} from "@/components/dashboard/DashboardPanel";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type UserStatus = "active" | "trial" | "inactive";
type Segment = "smartHotel" | "smartHome";

interface UserRow {
  id: string;
  name: string;
  email: string;
  segment: Segment;
  packageName: string;
  rooms: number;
  devices: number;
  status: UserStatus;
}

const users: UserRow[] = [
  {
    id: "USR-001",
    name: "Grand Horizon Hotel",
    email: "ops@grandhorizon.id",
    segment: "smartHotel",
    packageName: "Medium",
    rooms: 180,
    devices: 420,
    status: "active",
  },
  {
    id: "USR-002",
    name: "Oceanview Suites",
    email: "it@oceanview.id",
    segment: "smartHotel",
    packageName: "Large",
    rooms: 420,
    devices: 980,
    status: "active",
  },
  {
    id: "USR-003",
    name: "Villa Melati",
    email: "melati@mail.com",
    segment: "smartHome",
    packageName: "Premium",
    rooms: 1,
    devices: 18,
    status: "active",
  },
  {
    id: "USR-004",
    name: "Nusantara Boutique Inn",
    email: "admin@nusantara.inn",
    segment: "smartHotel",
    packageName: "Small",
    rooms: 64,
    devices: 150,
    status: "trial",
  },
  {
    id: "USR-005",
    name: "Rumah Aruna",
    email: "aruna@home.id",
    segment: "smartHome",
    packageName: "Standard",
    rooms: 1,
    devices: 12,
    status: "active",
  },
  {
    id: "USR-006",
    name: "Skyline Business Hotel",
    email: "tech@skyline.hotel",
    segment: "smartHotel",
    packageName: "Large",
    rooms: 360,
    devices: 840,
    status: "inactive",
  },
];

const segmentLabels: Record<Segment, string> = {
  smartHotel: "Smart Hotel",
  smartHome: "Smart Home",
};

const statusLabels: Record<UserStatus, string> = {
  active: "Active",
  trial: "Trial",
  inactive: "Inactive",
};

const statusColor: Record<UserStatus, "success" | "warning" | "error"> = {
  active: "success",
  trial: "warning",
  inactive: "error",
};

export default function UsersTable() {
  const tableHeadings = [
    "User",
    "Segment",
    "Package",
    "Room",
    "Device",
    "Status",
  ];

  return (
    <DashboardPanel>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="border-b border-gray-100 dark:border-gray-800">
            <TableHeadRow headings={tableHeadings} />
          </TableHeader>
          <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="px-5 py-4">
                  <p className="text-theme-sm font-medium text-gray-800 dark:text-white/90">
                    {user.name}
                  </p>
                  <p className="text-theme-xs text-gray-400">
                    {user.id} · {user.email}
                  </p>
                </TableCell>
                <TableCell className="px-5 py-4 text-theme-sm text-gray-500 dark:text-gray-400">
                  {segmentLabels[user.segment]}
                </TableCell>
                <TableCell className="px-5 py-4 text-theme-sm text-gray-500 dark:text-gray-400">
                  {user.packageName}
                </TableCell>
                <TableCell className="px-5 py-4 text-theme-sm text-gray-800 dark:text-white/90">
                  {user.rooms}
                </TableCell>
                <TableCell className="px-5 py-4 text-theme-sm text-gray-800 dark:text-white/90">
                  {user.devices}
                </TableCell>
                <TableCell className="px-5 py-4">
                  <Badge size="sm" color={statusColor[user.status]}>
                    {statusLabels[user.status]}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </DashboardPanel>
  );
}
