import Badge from "@/components/ui/badge/Badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type UserStatus = "Aktif" | "Trial" | "Nonaktif";
type Segment = "Smart Hotel" | "Smart Home";

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
    segment: "Smart Hotel",
    packageName: "Medium",
    rooms: 180,
    devices: 420,
    status: "Aktif",
  },
  {
    id: "USR-002",
    name: "Oceanview Suites",
    email: "it@oceanview.id",
    segment: "Smart Hotel",
    packageName: "Large",
    rooms: 420,
    devices: 980,
    status: "Aktif",
  },
  {
    id: "USR-003",
    name: "Villa Melati",
    email: "melati@mail.com",
    segment: "Smart Home",
    packageName: "Premium",
    rooms: 1,
    devices: 18,
    status: "Aktif",
  },
  {
    id: "USR-004",
    name: "Nusantara Boutique Inn",
    email: "admin@nusantara.inn",
    segment: "Smart Hotel",
    packageName: "Small",
    rooms: 64,
    devices: 150,
    status: "Trial",
  },
  {
    id: "USR-005",
    name: "Rumah Aruna",
    email: "aruna@home.id",
    segment: "Smart Home",
    packageName: "Standard",
    rooms: 1,
    devices: 12,
    status: "Aktif",
  },
  {
    id: "USR-006",
    name: "Skyline Business Hotel",
    email: "tech@skyline.hotel",
    segment: "Smart Hotel",
    packageName: "Large",
    rooms: 360,
    devices: 840,
    status: "Nonaktif",
  },
];

const statusColor: Record<UserStatus, "success" | "warning" | "error"> = {
  Aktif: "success",
  Trial: "warning",
  Nonaktif: "error",
};

export default function UsersTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="border-b border-gray-100 dark:border-gray-800">
            <TableRow>
              {[
                "User",
                "Segmen",
                "Paket",
                "Room",
                "Device",
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
                  {user.segment}
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
                    {user.status}
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
