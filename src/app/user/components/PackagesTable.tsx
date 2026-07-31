import Badge from "@/components/ui/badge/Badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface PackageRow {
  id: string;
  name: string;
  segment: "Smart Hotel" | "Smart Home";
  limit: string;
  price: string;
  subscribers: number;
  status: "Aktif" | "Draft";
}

const packages: PackageRow[] = [
  {
    id: "PKG-H-S",
    name: "Small",
    segment: "Smart Hotel",
    limit: "< 100 kamar",
    price: "Rp 2.5 jt / bln",
    subscribers: 1480,
    status: "Aktif",
  },
  {
    id: "PKG-H-M",
    name: "Medium",
    segment: "Smart Hotel",
    limit: "100 – 300 kamar",
    price: "Rp 6.5 jt / bln",
    subscribers: 980,
    status: "Aktif",
  },
  {
    id: "PKG-H-L",
    name: "Large",
    segment: "Smart Hotel",
    limit: "301 – 500 kamar",
    price: "Rp 12 jt / bln",
    subscribers: 520,
    status: "Aktif",
  },
  {
    id: "PKG-H-E",
    name: "Enterprise",
    segment: "Smart Hotel",
    limit: "> 500 kamar",
    price: "Custom",
    subscribers: 268,
    status: "Aktif",
  },
  {
    id: "PKG-HM-B",
    name: "Basic",
    segment: "Smart Home",
    limit: "1 unit",
    price: "Rp 99 rb / bln",
    subscribers: 4120,
    status: "Aktif",
  },
  {
    id: "PKG-HM-S",
    name: "Standard",
    segment: "Smart Home",
    limit: "1 unit",
    price: "Rp 199 rb / bln",
    subscribers: 3180,
    status: "Aktif",
  },
  {
    id: "PKG-HM-P",
    name: "Premium",
    segment: "Smart Home",
    limit: "1 unit",
    price: "Rp 350 rb / bln",
    subscribers: 1938,
    status: "Draft",
  },
];

export default function PackagesTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="border-b border-gray-100 dark:border-gray-800">
            <TableRow>
              {["Paket", "Segmen", "Batas", "Harga", "Subscriber", "Status"].map(
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
            {packages.map((pkg) => (
              <TableRow key={pkg.id}>
                <TableCell className="px-5 py-4">
                  <p className="text-theme-sm font-medium text-gray-800 dark:text-white/90">
                    {pkg.name}
                  </p>
                  <p className="text-theme-xs text-gray-400">{pkg.id}</p>
                </TableCell>
                <TableCell className="px-5 py-4 text-theme-sm text-gray-500 dark:text-gray-400">
                  {pkg.segment}
                </TableCell>
                <TableCell className="px-5 py-4 text-theme-sm text-gray-500 dark:text-gray-400">
                  {pkg.limit}
                </TableCell>
                <TableCell className="px-5 py-4 text-theme-sm text-gray-800 dark:text-white/90">
                  {pkg.price}
                </TableCell>
                <TableCell className="px-5 py-4 text-theme-sm text-gray-800 dark:text-white/90">
                  {pkg.subscribers.toLocaleString("id-ID")}
                </TableCell>
                <TableCell className="px-5 py-4">
                  <Badge
                    size="sm"
                    color={pkg.status === "Aktif" ? "success" : "warning"}
                  >
                    {pkg.status}
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
