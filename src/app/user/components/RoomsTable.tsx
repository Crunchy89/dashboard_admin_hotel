import Badge from "@/components/ui/badge/Badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface RoomRow {
  id: string;
  roomNumber: string;
  property: string;
  floor: string;
  type: string;
  devices: number;
  status: "Online" | "Offline" | "Maintenance";
}

const rooms: RoomRow[] = [
  {
    id: "RM-101",
    roomNumber: "101",
    property: "Grand Horizon Hotel",
    floor: "1",
    type: "Deluxe",
    devices: 4,
    status: "Online",
  },
  {
    id: "RM-205",
    roomNumber: "205",
    property: "Grand Horizon Hotel",
    floor: "2",
    type: "Suite",
    devices: 7,
    status: "Online",
  },
  {
    id: "RM-312",
    roomNumber: "312",
    property: "Oceanview Suites",
    floor: "3",
    type: "Ocean View",
    devices: 6,
    status: "Maintenance",
  },
  {
    id: "RM-408",
    roomNumber: "408",
    property: "Skyline Business Hotel",
    floor: "4",
    type: "Business",
    devices: 5,
    status: "Offline",
  },
  {
    id: "RM-012",
    roomNumber: "Main Unit",
    property: "Villa Melati",
    floor: "1",
    type: "Smart Home",
    devices: 18,
    status: "Online",
  },
  {
    id: "RM-518",
    roomNumber: "518",
    property: "Palm Garden Resort",
    floor: "5",
    type: "Garden View",
    devices: 5,
    status: "Online",
  },
];

const statusColor: Record<RoomRow["status"], "success" | "error" | "warning"> =
  {
    Online: "success",
    Offline: "error",
    Maintenance: "warning",
  };

export default function RoomsTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="border-b border-gray-100 dark:border-gray-800">
            <TableRow>
              {["Room", "Properti", "Lantai", "Tipe", "Device", "Status"].map(
                (h) => (
                  <TableCell
                    key={h}
                    isHeader
                    className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
                  >
                    {h}
                  </TableCell>
                )
              )}
            </TableRow>
          </TableHeader>
          <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
            {rooms.map((room) => (
              <TableRow key={room.id}>
                <TableCell className="px-5 py-4">
                  <p className="text-theme-sm font-medium text-gray-800 dark:text-white/90">
                    {room.roomNumber}
                  </p>
                  <p className="text-theme-xs text-gray-400">{room.id}</p>
                </TableCell>
                <TableCell className="px-5 py-4 text-theme-sm text-gray-500 dark:text-gray-400">
                  {room.property}
                </TableCell>
                <TableCell className="px-5 py-4 text-theme-sm text-gray-500 dark:text-gray-400">
                  {room.floor}
                </TableCell>
                <TableCell className="px-5 py-4 text-theme-sm text-gray-500 dark:text-gray-400">
                  {room.type}
                </TableCell>
                <TableCell className="px-5 py-4 text-theme-sm text-gray-800 dark:text-white/90">
                  {room.devices}
                </TableCell>
                <TableCell className="px-5 py-4">
                  <Badge size="sm" color={statusColor[room.status]}>
                    {room.status}
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
