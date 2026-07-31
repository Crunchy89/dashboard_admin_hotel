"use client";

import Badge from "@/components/ui/badge/Badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type PackageStatus = "active" | "draft";
type Segment = "smartHotel" | "smartHome";

interface PackageRow {
  id: string;
  name: string;
  segment: Segment;
  limit: string;
  price: string;
  subscribers: number;
  status: PackageStatus;
}

const packages: PackageRow[] = [
  {
    id: "PKG-H-S",
    name: "Small",
    segment: "smartHotel",
    limit: "< 100 rooms",
    price: "Rp 2.5 jt / mo",
    subscribers: 1480,
    status: "active",
  },
  {
    id: "PKG-H-M",
    name: "Medium",
    segment: "smartHotel",
    limit: "100 – 300 rooms",
    price: "Rp 6.5 jt / mo",
    subscribers: 980,
    status: "active",
  },
  {
    id: "PKG-H-L",
    name: "Large",
    segment: "smartHotel",
    limit: "301 – 500 rooms",
    price: "Rp 12 jt / mo",
    subscribers: 520,
    status: "active",
  },
  {
    id: "PKG-H-E",
    name: "Enterprise",
    segment: "smartHotel",
    limit: "> 500 rooms",
    price: "Custom",
    subscribers: 268,
    status: "active",
  },
  {
    id: "PKG-HM-B",
    name: "Basic",
    segment: "smartHome",
    limit: "1 unit",
    price: "Rp 99 rb / mo",
    subscribers: 4120,
    status: "active",
  },
  {
    id: "PKG-HM-S",
    name: "Standard",
    segment: "smartHome",
    limit: "1 unit",
    price: "Rp 199 rb / mo",
    subscribers: 3180,
    status: "active",
  },
  {
    id: "PKG-HM-P",
    name: "Premium",
    segment: "smartHome",
    limit: "1 unit",
    price: "Rp 350 rb / mo",
    subscribers: 1938,
    status: "draft",
  },
];

const segmentLabels: Record<Segment, string> = {
  smartHotel: "Smart Hotel",
  smartHome: "Smart Home",
};

const statusLabels: Record<PackageStatus, string> = {
  active: "Active",
  draft: "Draft",
};

const statusColor: Record<PackageStatus, "success" | "warning"> = {
  active: "success",
  draft: "warning",
};

export default function PackagesTable() {
  const tableHeadings = [
    "Package",
    "Segment",
    "Limit",
    "Price",
    "Subscribers",
    "Status",
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
            {packages.map((pkg) => (
              <TableRow key={pkg.id}>
                <TableCell className="px-5 py-4">
                  <p className="text-theme-sm font-medium text-gray-800 dark:text-white/90">
                    {pkg.name}
                  </p>
                  <p className="text-theme-xs text-gray-400">{pkg.id}</p>
                </TableCell>
                <TableCell className="px-5 py-4 text-theme-sm text-gray-500 dark:text-gray-400">
                  {segmentLabels[pkg.segment]}
                </TableCell>
                <TableCell className="px-5 py-4 text-theme-sm text-gray-500 dark:text-gray-400">
                  {pkg.limit}
                </TableCell>
                <TableCell className="px-5 py-4 text-theme-sm text-gray-800 dark:text-white/90">
                  {pkg.price}
                </TableCell>
                <TableCell className="px-5 py-4 text-theme-sm text-gray-800 dark:text-white/90">
                  {pkg.subscribers.toLocaleString("en-US")}
                </TableCell>
                <TableCell className="px-5 py-4">
                  <Badge size="sm" color={statusColor[pkg.status]}>
                    {statusLabels[pkg.status]}
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
