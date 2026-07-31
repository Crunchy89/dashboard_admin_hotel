"use client";
import Badge from "../ui/badge/Badge";

const homePackages = [
  {
    name: "Basic",
    price: "Rp 99rb / bln",
    subscribers: 4120,
    share: 44.6,
    description: "Kontrol lampu & kunci pintu",
  },
  {
    name: "Standard",
    price: "Rp 199rb / bln",
    subscribers: 3180,
    share: 34.4,
    description: "Plus sensor keamanan & kamera",
  },
  {
    name: "Premium",
    price: "Rp 350rb / bln",
    subscribers: 1938,
    share: 21.0,
    description: "Full automation + energy insight",
  },
];

export default function HomePackages() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] sm:p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Paket Smart Home
        </h3>
        <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
          Distribusi langganan untuk pengguna rumah
        </p>
      </div>

      <div className="space-y-4">
        {homePackages.map((pkg) => (
          <div
            key={pkg.name}
            className="rounded-xl border border-gray-200 p-4 dark:border-gray-800"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold text-gray-800 dark:text-white/90">
                    {pkg.name}
                  </h4>
                  <Badge size="sm" color="info">
                    {pkg.share}%
                  </Badge>
                </div>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {pkg.description}
                </p>
              </div>
              <p className="shrink-0 text-sm font-semibold text-brand-500">
                {pkg.price}
              </p>
            </div>

            <div className="mt-3 flex items-center justify-between text-sm">
              <span className="text-gray-500 dark:text-gray-400">
                {pkg.subscribers.toLocaleString("id-ID")} subscriber
              </span>
            </div>
            <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
              <div
                className="h-full rounded-full bg-brand-300"
                style={{ width: `${pkg.share}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
