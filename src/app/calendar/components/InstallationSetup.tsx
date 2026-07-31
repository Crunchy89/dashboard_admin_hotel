"use client";
import React, { useState } from "react";
import Badge from "@/components/ui/badge/Badge";
import Button from "@/components/ui/button/Button";
import Label from "@/components/form/Label";
import Select from "@/components/form/Select";

type InstallType = "perangkat" | "aplikasi" | "keduanya";

interface SetupRow {
  id: string;
  hotel: string;
  packageName: string;
  rooms: string;
  type: InstallType;
  startDate: string;
  endDate: string;
  status: "Draft" | "Terjadwal" | "Berjalan";
}

const initialRows: SetupRow[] = [
  {
    id: "1",
    hotel: "Grand Horizon Hotel",
    packageName: "Medium",
    rooms: "180 kamar",
    type: "keduanya",
    startDate: "2026-08-01",
    endDate: "2026-08-12",
    status: "Terjadwal",
  },
  {
    id: "2",
    hotel: "Oceanview Suites",
    packageName: "Large",
    rooms: "420 kamar",
    type: "perangkat",
    startDate: "2026-08-02",
    endDate: "2026-08-10",
    status: "Berjalan",
  },
  {
    id: "3",
    hotel: "Nusantara Boutique Inn",
    packageName: "Small",
    rooms: "64 kamar",
    type: "aplikasi",
    startDate: "2026-08-03",
    endDate: "2026-08-09",
    status: "Draft",
  },
];

const hotelOptions = [
  { value: "Grand Horizon Hotel", label: "Grand Horizon Hotel" },
  { value: "Oceanview Suites", label: "Oceanview Suites" },
  { value: "CityLink Hotel Group", label: "CityLink Hotel Group" },
  { value: "Nusantara Boutique Inn", label: "Nusantara Boutique Inn" },
  { value: "Palm Garden Resort", label: "Palm Garden Resort" },
  { value: "Skyline Business Hotel", label: "Skyline Business Hotel" },
];

const typeOptions = [
  { value: "perangkat", label: "Pemasangan perangkat" },
  { value: "aplikasi", label: "Setup aplikasi" },
  { value: "keduanya", label: "Perangkat + Aplikasi" },
];

const statusColor: Record<
  SetupRow["status"],
  "warning" | "success" | "primary"
> = {
  Draft: "warning",
  Terjadwal: "primary",
  Berjalan: "success",
};

export default function InstallationSetup() {
  const [rows, setRows] = useState(initialRows);
  const [formKey, setFormKey] = useState(0);
  const [hotel, setHotel] = useState("");
  const [type, setType] = useState<InstallType | "">("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [savedMessage, setSavedMessage] = useState("");

  function handleSave() {
    if (!hotel || !type || !startDate || !endDate) {
      setSavedMessage("Lengkapi semua field sebelum menyimpan.");
      return;
    }

    const newRow: SetupRow = {
      id: crypto.randomUUID(),
      hotel,
      packageName: "Custom",
      rooms: "-",
      type,
      startDate,
      endDate,
      status: "Terjadwal",
    };

    setRows((prev) => [newRow, ...prev]);
    setHotel("");
    setType("");
    setStartDate("");
    setEndDate("");
    setFormKey((k) => k + 1);
    setSavedMessage("Jadwal pemasangan berhasil disimpan.");
  }

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] sm:p-6">
        <div className="mb-5">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Setup Tanggal Pemasangan
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Atur rentang tanggal pemasangan perangkat dan aplikasi per hotel
          </p>
        </div>

        <div
          key={formKey}
          className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4"
        >
          <div>
            <Label>Hotel</Label>
            <Select
              options={hotelOptions}
              placeholder="Pilih hotel"
              onChange={(value) => setHotel(value)}
            />
          </div>
          <div>
            <Label>Jenis pemasangan</Label>
            <Select
              options={typeOptions}
              placeholder="Pilih jenis"
              onChange={(value) => setType(value as InstallType)}
            />
          </div>
          <div>
            <Label>Tanggal mulai</Label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:focus:border-brand-800"
            />
          </div>
          <div>
            <Label>Tanggal selesai</Label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:focus:border-brand-800"
            />
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <Button size="sm" onClick={handleSave}>
            Simpan Jadwal
          </Button>
          {savedMessage && (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {savedMessage}
            </p>
          )}
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
        <div className="border-b border-gray-200 px-5 py-4 dark:border-gray-800 sm:px-6">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Daftar Jadwal Pemasangan
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-gray-100 dark:border-gray-800">
                {[
                  "Hotel",
                  "Paket",
                  "Jenis",
                  "Mulai",
                  "Selesai",
                  "Status",
                ].map((heading) => (
                  <th
                    key={heading}
                    className="px-5 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-400 sm:px-6"
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.id}
                  className="border-b border-gray-100 last:border-b-0 dark:border-gray-800"
                >
                  <td className="px-5 py-4 sm:px-6">
                    <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                      {row.hotel}
                    </p>
                    <p className="text-xs text-gray-400">{row.rooms}</p>
                  </td>
                  <td className="px-5 py-4 text-sm text-gray-500 dark:text-gray-400 sm:px-6">
                    {row.packageName}
                  </td>
                  <td className="px-5 py-4 text-sm capitalize text-gray-500 dark:text-gray-400 sm:px-6">
                    {row.type}
                  </td>
                  <td className="px-5 py-4 text-sm text-gray-500 dark:text-gray-400 sm:px-6">
                    {row.startDate}
                  </td>
                  <td className="px-5 py-4 text-sm text-gray-500 dark:text-gray-400 sm:px-6">
                    {row.endDate}
                  </td>
                  <td className="px-5 py-4 sm:px-6">
                    <Badge size="sm" color={statusColor[row.status]}>
                      {row.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
