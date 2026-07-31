"use client";

import { useState } from "react";
import Badge from "@/components/ui/badge/Badge";
import Button from "@/components/ui/button/Button";
import Label from "@/components/form/Label";
import Select from "@/components/form/Select";
import { Modal } from "@/components/ui/modal";
import { useModal } from "@/hooks/useModal";
import { useLanguage } from "@/context/LanguageContext";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type MaintenanceStatus = "scheduled" | "inProgress" | "completed";

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

const initialRows: MaintenanceRow[] = [
  {
    id: "MNT-001",
    hotel: "Grand Horizon Hotel",
    room: "101",
    device: "Smart Lock A1",
    deviceType: "Door Lock",
    scheduleDate: "2026-08-01",
    time: "09:00",
    technician: "Andi Pratama",
    status: "scheduled",
  },
  {
    id: "MNT-002",
    hotel: "Grand Horizon Hotel",
    room: "205",
    device: "Thermostat Zone 2",
    deviceType: "HVAC",
    scheduleDate: "2026-08-02",
    time: "13:30",
    technician: "Budi Santoso",
    status: "inProgress",
  },
  {
    id: "MNT-003",
    hotel: "Oceanview Suites",
    room: "312",
    device: "Motion Sensor Hall",
    deviceType: "Sensor",
    scheduleDate: "2026-08-04",
    time: "10:00",
    technician: "Citra Lestari",
    status: "scheduled",
  },
  {
    id: "MNT-004",
    hotel: "Palm Garden Resort",
    room: "518",
    device: "Gateway Hub",
    deviceType: "Gateway",
    scheduleDate: "2026-08-05",
    time: "15:00",
    technician: "Dedi Kurniawan",
    status: "scheduled",
  },
  {
    id: "MNT-005",
    hotel: "Villa Melati",
    room: "Main Unit",
    device: "Smart Switch Panel",
    deviceType: "Switch",
    scheduleDate: "2026-08-07",
    time: "11:00",
    technician: "Eka Putri",
    status: "completed",
  },
  {
    id: "MNT-006",
    hotel: "CityLink Hotel Group",
    room: "Lobby",
    device: "Camera Entrance",
    deviceType: "Camera",
    scheduleDate: "2026-08-10",
    time: "08:30",
    technician: "Fajar Nugroho",
    status: "scheduled",
  },
  {
    id: "MNT-007",
    hotel: "Skyline Business Hotel",
    room: "408",
    device: "Smart Lock B3",
    deviceType: "Door Lock",
    scheduleDate: "2026-08-12",
    time: "14:00",
    technician: "Andi Pratama",
    status: "scheduled",
  },
];

const hotelOptions = [
  { value: "Grand Horizon Hotel", label: "Grand Horizon Hotel" },
  { value: "Oceanview Suites", label: "Oceanview Suites" },
  { value: "CityLink Hotel Group", label: "CityLink Hotel Group" },
  { value: "Palm Garden Resort", label: "Palm Garden Resort" },
  { value: "Skyline Business Hotel", label: "Skyline Business Hotel" },
  { value: "Villa Melati", label: "Villa Melati" },
];

const deviceTypeOptions = [
  { value: "Door Lock", label: "Door Lock" },
  { value: "HVAC", label: "HVAC" },
  { value: "Sensor", label: "Sensor" },
  { value: "Gateway", label: "Gateway" },
  { value: "Switch", label: "Switch" },
  { value: "Camera", label: "Camera" },
];

const statusColor: Record<MaintenanceStatus, "primary" | "warning" | "success"> =
  {
    scheduled: "primary",
    inProgress: "warning",
    completed: "success",
  };

const monthKeys = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
] as const;

function formatScheduleDate(isoDate: string, t: (key: string) => string) {
  const [year, month, day] = isoDate.split("-");
  const monthLabel = t(`months.${monthKeys[Number(month) - 1]}`);
  return `${day} ${monthLabel} ${year}`;
}

function generateId(existingRows: MaintenanceRow[]) {
  const maxNum = existingRows.reduce((max, row) => {
    const num = Number(row.id.replace("MNT-", ""));
    return Number.isNaN(num) ? max : Math.max(max, num);
  }, 0);
  return `MNT-${String(maxNum + 1).padStart(3, "0")}`;
}

const inputClassName =
  "h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:focus:border-brand-800";

export default function MaintenanceTable() {
  const { t } = useLanguage();
  const { isOpen, openModal, closeModal } = useModal();
  const [rows, setRows] = useState(initialRows);
  const [formKey, setFormKey] = useState(0);
  const [hotel, setHotel] = useState("");
  const [room, setRoom] = useState("");
  const [device, setDevice] = useState("");
  const [deviceType, setDeviceType] = useState("");
  const [scheduleDate, setScheduleDate] = useState("");
  const [time, setTime] = useState("");
  const [technician, setTechnician] = useState("");
  const [formError, setFormError] = useState("");

  const tableHeaders = [
    "ID",
    t("common.hotel"),
    t("common.room"),
    t("common.device"),
    t("maintenance.schedule"),
    t("maintenance.technician"),
    t("common.status"),
  ];

  function resetForm() {
    setHotel("");
    setRoom("");
    setDevice("");
    setDeviceType("");
    setScheduleDate("");
    setTime("");
    setTechnician("");
    setFormError("");
    setFormKey((k) => k + 1);
  }

  function handleOpenModal() {
    resetForm();
    openModal();
  }

  function handleCloseModal() {
    resetForm();
    closeModal();
  }

  function handleAddSchedule() {
    if (
      !hotel ||
      !room ||
      !device ||
      !deviceType ||
      !scheduleDate ||
      !time ||
      !technician
    ) {
      setFormError(t("common.fillAllFields"));
      return;
    }

    const newRow: MaintenanceRow = {
      id: generateId(rows),
      hotel,
      room,
      device,
      deviceType,
      scheduleDate,
      time,
      technician,
      status: "scheduled",
    };

    setRows((prev) => [newRow, ...prev]);
    handleCloseModal();
  }

  return (
    <>
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
        <div className="flex flex-col gap-4 border-b border-gray-100 px-5 py-4 dark:border-gray-800 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
              {t("maintenance.title")}
            </h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              {t("maintenance.description")}
            </p>
          </div>
          <Button size="sm" onClick={handleOpenModal}>
            {t("maintenance.addSchedule")}
          </Button>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="border-b border-gray-100 dark:border-gray-800">
              <TableRow>
                {tableHeaders.map((h) => (
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
                    {formatScheduleDate(row.scheduleDate, t)} · {row.time}
                  </TableCell>
                  <TableCell className="px-5 py-4 text-theme-sm text-gray-500 dark:text-gray-400">
                    {row.technician}
                  </TableCell>
                  <TableCell className="px-5 py-4">
                    <Badge size="sm" color={statusColor[row.status]}>
                      {t(`status.${row.status}`)}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onClose={handleCloseModal}
        className="max-w-[640px] p-5 lg:p-10"
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddSchedule();
          }}
        >
          <h4 className="mb-2 text-lg font-medium text-gray-800 dark:text-white/90">
            {t("maintenance.addModalTitle")}
          </h4>
          <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
            {t("maintenance.addModalDesc")}
          </p>

          <div key={formKey} className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <Label>{t("common.hotel")}</Label>
              <Select
                options={hotelOptions}
                placeholder={t("common.selectHotel")}
                onChange={setHotel}
              />
            </div>
            <div>
              <Label>{t("common.room")}</Label>
              <input
                type="text"
                value={room}
                onChange={(e) => setRoom(e.target.value)}
                placeholder={t("maintenance.roomPlaceholder")}
                className={inputClassName}
              />
            </div>
            <div>
              <Label>{t("common.device")}</Label>
              <input
                type="text"
                value={device}
                onChange={(e) => setDevice(e.target.value)}
                placeholder={t("maintenance.devicePlaceholder")}
                className={inputClassName}
              />
            </div>
            <div>
              <Label>{t("maintenance.deviceType")}</Label>
              <Select
                options={deviceTypeOptions}
                placeholder={t("common.selectType")}
                onChange={setDeviceType}
              />
            </div>
            <div>
              <Label>{t("maintenance.technician")}</Label>
              <input
                type="text"
                value={technician}
                onChange={(e) => setTechnician(e.target.value)}
                placeholder={t("maintenance.technicianPlaceholder")}
                className={inputClassName}
              />
            </div>
            <div>
              <Label>{t("maintenance.date")}</Label>
              <input
                type="date"
                value={scheduleDate}
                onChange={(e) => setScheduleDate(e.target.value)}
                className={inputClassName}
              />
            </div>
            <div>
              <Label>{t("maintenance.time")}</Label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className={inputClassName}
              />
            </div>
          </div>

          {formError && (
            <p className="mt-4 text-sm text-error-500">{formError}</p>
          )}

          <div className="mt-6 flex w-full items-center justify-end gap-3">
            <Button
              size="sm"
              variant="outline"
              type="button"
              onClick={handleCloseModal}
            >
              {t("common.cancel")}
            </Button>
            <Button size="sm" type="submit">
              {t("maintenance.saveSchedule")}
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
}
