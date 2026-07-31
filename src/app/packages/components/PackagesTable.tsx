"use client";

import { useMemo, useState } from "react";
import Badge from "@/components/ui/badge/Badge";
import Button from "@/components/ui/button/Button";
import Label from "@/components/form/Label";
import Select from "@/components/form/Select";
import { Modal } from "@/components/ui/modal";
import { useModal } from "@/hooks/useModal";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type PackageStatus = "active" | "inactive";
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

const initialRows: PackageRow[] = [
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
    status: "inactive",
  },
];

const segmentLabels: Record<Segment, string> = {
  smartHotel: "Smart Hotel",
  smartHome: "Smart Home",
};

const statusLabels: Record<PackageStatus, string> = {
  active: "Active",
  inactive: "Inactive",
};

const statusColor: Record<PackageStatus, "success" | "error"> = {
  active: "success",
  inactive: "error",
};

const segmentKeys: Segment[] = ["smartHotel", "smartHome"];

const inputClassName =
  "h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:focus:border-brand-800";

function generateId(existingRows: PackageRow[], segment: Segment) {
  const prefix = segment === "smartHotel" ? "PKG-H" : "PKG-HM";
  const maxNum = existingRows.reduce((max, row) => {
    if (!row.id.startsWith(prefix)) return max;
    const suffix = row.id.replace(`${prefix}-`, "");
    const num = Number.parseInt(suffix.replace(/\D/g, ""), 10);
    return Number.isNaN(num) ? max : Math.max(max, num);
  }, 0);
  return `${prefix}-${String(maxNum + 1).padStart(3, "0")}`;
}

export default function PackagesTable() {
  const { isOpen, openModal, closeModal } = useModal();
  const [rows, setRows] = useState(initialRows);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formKey, setFormKey] = useState(0);
  const [name, setName] = useState("");
  const [segment, setSegment] = useState<Segment | "">("");
  const [limit, setLimit] = useState("");
  const [price, setPrice] = useState("");
  const [formError, setFormError] = useState("");

  const segmentOptions = useMemo(
    () =>
      segmentKeys.map((key) => ({
        value: key,
        label: segmentLabels[key],
      })),
    [],
  );

  const tableHeaders = [
    "Package",
    "Segment",
    "Limit",
    "Price",
    "Subscribers",
    "Status",
    "Actions",
  ];

  const isEditing = editingId !== null;

  function resetForm() {
    setEditingId(null);
    setName("");
    setSegment("");
    setLimit("");
    setPrice("");
    setFormError("");
    setFormKey((k) => k + 1);
  }

  function handleOpenCreate() {
    resetForm();
    openModal();
  }

  function handleOpenEdit(pkg: PackageRow) {
    setEditingId(pkg.id);
    setName(pkg.name);
    setSegment(pkg.segment);
    setLimit(pkg.limit);
    setPrice(pkg.price);
    setFormError("");
    setFormKey((k) => k + 1);
    openModal();
  }

  function handleCloseModal() {
    resetForm();
    closeModal();
  }

  function handleSave() {
    if (!name.trim() || !segment || !limit.trim() || !price.trim()) {
      setFormError("Please complete all fields before saving.");
      return;
    }

    if (isEditing && editingId) {
      setRows((prev) =>
        prev.map((row) =>
          row.id === editingId
            ? {
                ...row,
                name: name.trim(),
                segment,
                limit: limit.trim(),
                price: price.trim(),
              }
            : row,
        ),
      );
    } else {
      const newRow: PackageRow = {
        id: generateId(rows, segment),
        name: name.trim(),
        segment,
        limit: limit.trim(),
        price: price.trim(),
        subscribers: 0,
        status: "active",
      };
      setRows((prev) => [newRow, ...prev]);
    }

    handleCloseModal();
  }

  function handleToggleStatus(id: string) {
    setRows((prev) =>
      prev.map((row) =>
        row.id === id
          ? {
              ...row,
              status: row.status === "active" ? "inactive" : "active",
            }
          : row,
      ),
    );
  }

  function handleDelete(id: string) {
    const target = rows.find((row) => row.id === id);
    if (!target) return;
    if (
      !window.confirm(
        `Delete package "${target.name}"? This cannot be undone.`,
      )
    ) {
      return;
    }
    setRows((prev) => prev.filter((row) => row.id !== id));
  }

  return (
    <>
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
        <div className="flex flex-col gap-4 border-b border-gray-100 px-5 py-4 dark:border-gray-800 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
              Internal Packages
            </h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Manage subscription packages: create, edit, activate, or deactivate
            </p>
          </div>
          <Button size="sm" onClick={handleOpenCreate}>
            Add Package
          </Button>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="border-b border-gray-100 dark:border-gray-800">
              <TableRow>
                {tableHeaders.map((heading) => (
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
              {rows.map((pkg) => (
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
                  <TableCell className="px-5 py-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleOpenEdit(pkg)}
                      >
                        Edit
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleToggleStatus(pkg.id)}
                      >
                        {pkg.status === "active" ? "Deactivate" : "Activate"}
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDelete(pkg.id)}
                      >
                        Delete
                      </Button>
                    </div>
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
            handleSave();
          }}
        >
          <h4 className="mb-2 text-lg font-medium text-gray-800 dark:text-white/90">
            {isEditing ? "Edit Package" : "Add Package"}
          </h4>
          <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
            {isEditing
              ? "Update internal subscription package details"
              : "Create a new subscription package for Smart Hotel or Smart Home"}
          </p>

          <div
            key={formKey}
            className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2"
          >
            <div className="sm:col-span-2">
              <Label>Package Name</Label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Medium"
                className={inputClassName}
              />
            </div>
            <div>
              <Label>Segment</Label>
              <Select
                key={`segment-${formKey}-${segment}`}
                options={segmentOptions}
                placeholder="Select segment"
                defaultValue={segment}
                onChange={(value) => setSegment(value as Segment)}
              />
            </div>
            <div>
              <Label>Price</Label>
              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="e.g. Rp 6.5 jt / mo"
                className={inputClassName}
              />
            </div>
            <div className="sm:col-span-2">
              <Label>Limit</Label>
              <input
                type="text"
                value={limit}
                onChange={(e) => setLimit(e.target.value)}
                placeholder="e.g. 100 – 300 rooms"
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
              Cancel
            </Button>
            <Button size="sm" type="submit">
              {isEditing ? "Save Changes" : "Save Package"}
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
}
