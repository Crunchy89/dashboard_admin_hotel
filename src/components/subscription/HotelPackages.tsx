"use client";
import Badge from "../ui/badge/Badge";

type PackageStatus = "Populer" | "Aktif" | "Enterprise";

interface HotelPackage {
  name: string;
  rooms: string;
  price: string;
  subscribers: number;
  features: string[];
  status: PackageStatus;
  share: number;
}

const packages: HotelPackage[] = [
  {
    name: "Small",
    rooms: "< 100 kamar",
    price: "Rp 2.5jt / bln",
    subscribers: 1480,
    features: ["Akses app dasar", "Smart lock", "Support email"],
    status: "Populer",
    share: 45.6,
  },
  {
    name: "Medium",
    rooms: "100 – 300 kamar",
    price: "Rp 6.5jt / bln",
    subscribers: 980,
    features: ["Semua fitur Small", "Energy monitoring", "Support prioritas"],
    status: "Aktif",
    share: 30.2,
  },
  {
    name: "Large",
    rooms: "301 – 500 kamar",
    price: "Rp 12jt / bln",
    subscribers: 520,
    features: ["Semua fitur Medium", "Multi-property", "API integration"],
    status: "Aktif",
    share: 16.0,
  },
  {
    name: "Enterprise",
    rooms: "> 500 kamar",
    price: "Custom",
    subscribers: 268,
    features: ["Semua fitur Large", "Dedicated CSM", "SLA 99.9%"],
    status: "Enterprise",
    share: 8.2,
  },
];

const statusColor: Record<PackageStatus, "success" | "primary" | "warning"> = {
  Populer: "success",
  Aktif: "primary",
  Enterprise: "warning",
};

export default function HotelPackages() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] sm:p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Paket Smart Hotel
        </h3>
        <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
          Paket langganan berdasarkan jumlah kamar
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {packages.map((pkg) => (
          <div
            key={pkg.name}
            className="rounded-xl border border-gray-200 p-5 dark:border-gray-800"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <h4 className="text-base font-semibold text-gray-800 dark:text-white/90">
                  {pkg.name}
                </h4>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {pkg.rooms}
                </p>
              </div>
              <Badge color={statusColor[pkg.status]} size="sm">
                {pkg.status}
              </Badge>
            </div>

            <p className="mt-4 text-lg font-bold text-brand-500">{pkg.price}</p>

            <div className="mt-4 flex items-end justify-between">
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Subscriber
                </p>
                <p className="text-sm font-semibold text-gray-800 dark:text-white/90">
                  {pkg.subscribers.toLocaleString("id-ID")}
                </p>
              </div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {pkg.share}%
              </p>
            </div>

            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
              <div
                className="h-full rounded-full bg-brand-500"
                style={{ width: `${pkg.share}%` }}
              />
            </div>

            <ul className="mt-4 space-y-2">
              {pkg.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400"
                >
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
