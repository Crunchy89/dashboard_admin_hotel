import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import Badge from "../ui/badge/Badge";

type SubStatus = "Aktif" | "Trial" | "Expired";
type Segment = "Smart Hotel" | "Smart Home";

interface Subscription {
  id: string;
  name: string;
  segment: Segment;
  packageName: string;
  roomsOrUnits: string;
  amount: string;
  status: SubStatus;
}

const tableData: Subscription[] = [
  {
    id: "SUB-1042",
    name: "Grand Horizon Hotel",
    segment: "Smart Hotel",
    packageName: "Medium",
    roomsOrUnits: "180 kamar",
    amount: "Rp 6.5jt",
    status: "Aktif",
  },
  {
    id: "SUB-1041",
    name: "Villa Melati Residence",
    segment: "Smart Home",
    packageName: "Premium",
    roomsOrUnits: "1 unit",
    amount: "Rp 350rb",
    status: "Aktif",
  },
  {
    id: "SUB-1040",
    name: "Oceanview Suites",
    segment: "Smart Hotel",
    packageName: "Large",
    roomsOrUnits: "420 kamar",
    amount: "Rp 12jt",
    status: "Trial",
  },
  {
    id: "SUB-1039",
    name: "Rumah Aruna",
    segment: "Smart Home",
    packageName: "Standard",
    roomsOrUnits: "1 unit",
    amount: "Rp 199rb",
    status: "Aktif",
  },
  {
    id: "SUB-1038",
    name: "CityLink Hotel Group",
    segment: "Smart Hotel",
    packageName: "Enterprise",
    roomsOrUnits: "850 kamar",
    amount: "Custom",
    status: "Aktif",
  },
  {
    id: "SUB-1037",
    name: "Apartment Serenia",
    segment: "Smart Home",
    packageName: "Basic",
    roomsOrUnits: "1 unit",
    amount: "Rp 99rb",
    status: "Expired",
  },
];

const statusColor: Record<SubStatus, "success" | "warning" | "error"> = {
  Aktif: "success",
  Trial: "warning",
  Expired: "error",
};

export default function RecentSubscriptions() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Langganan Terbaru
        </h3>
        <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
          Daftar aktivasi subscription terbaru
        </p>
      </div>

      <div className="max-w-full overflow-x-auto">
        <Table>
          <TableHeader className="border-gray-100 dark:border-gray-800 border-y">
            <TableRow>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                ID / Nama
              </TableCell>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Segmen
              </TableCell>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Paket
              </TableCell>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Skala
              </TableCell>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Biaya
              </TableCell>
              <TableCell
                isHeader
                className="py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Status
              </TableCell>
            </TableRow>
          </TableHeader>

          <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
            {tableData.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="py-3">
                  <div>
                    <p className="font-medium text-gray-800 text-theme-sm dark:text-white/90">
                      {item.name}
                    </p>
                    <p className="text-gray-500 text-theme-xs dark:text-gray-400">
                      {item.id}
                    </p>
                  </div>
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  {item.segment}
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  {item.packageName}
                </TableCell>
                <TableCell className="py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  {item.roomsOrUnits}
                </TableCell>
                <TableCell className="py-3 text-gray-800 text-theme-sm dark:text-white/90">
                  {item.amount}
                </TableCell>
                <TableCell className="py-3">
                  <Badge size="sm" color={statusColor[item.status]}>
                    {item.status}
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
