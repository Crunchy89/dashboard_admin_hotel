"use client";

import { useMemo, useState } from "react";
import Badge from "@/components/ui/badge/Badge";
import Button from "@/components/ui/button/Button";
import Label from "@/components/form/Label";
import FileInput from "@/components/form/input/FileInput";
import { Modal } from "@/components/ui/modal";
import { useModal } from "@/hooks/useModal";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type PaymentStatus = "paidThisMonth" | "unpaidThisMonth";
type StaffRole = "technician" | "programmer" | "hr" | "admin" | "manager";

interface SalaryRow {
  id: string;
  staffId: string;
  name: string;
  role: StaffRole;
  salary: number;
  bankName: string;
  bankAccount: string;
  accountHolder: string;
  status: PaymentStatus;
  paidAt?: string;
  proofFileName?: string;
}

const CURRENT_YEAR = 2026;
const CURRENT_MONTH = 7;

const monthLabels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
] as const;

const roleLabels: Record<StaffRole, string> = {
  technician: "Technician",
  programmer: "Programmer",
  hr: "HR",
  admin: "Admin",
  manager: "Manager",
};

const statusLabels: Record<PaymentStatus, string> = {
  paidThisMonth: "Paid This Month",
  unpaidThisMonth: "Unpaid This Month",
};

const initialRows: SalaryRow[] = [
  {
    id: "SLR-001",
    staffId: "STF-001",
    name: "Andi Pratama",
    role: "technician",
    salary: 8500000,
    bankName: "BCA",
    bankAccount: "1234567890",
    accountHolder: "Andi Pratama",
    status: "unpaidThisMonth",
  },
  {
    id: "SLR-002",
    staffId: "STF-002",
    name: "Budi Santoso",
    role: "programmer",
    salary: 12000000,
    bankName: "Mandiri",
    bankAccount: "9876543210",
    accountHolder: "Budi Santoso",
    status: "paidThisMonth",
    paidAt: "2026-07-28",
    proofFileName: "bukti-gaji-budi-juli.pdf",
  },
  {
    id: "SLR-003",
    staffId: "STF-003",
    name: "Citra Lestari",
    role: "hr",
    salary: 9000000,
    bankName: "BNI",
    bankAccount: "1122334455",
    accountHolder: "Citra Lestari",
    status: "unpaidThisMonth",
  },
  {
    id: "SLR-004",
    staffId: "STF-004",
    name: "Dedi Kurniawan",
    role: "manager",
    salary: 15000000,
    bankName: "BCA",
    bankAccount: "5566778899",
    accountHolder: "Dedi Kurniawan",
    status: "paidThisMonth",
    paidAt: "2026-07-29",
    proofFileName: "transfer-dedi-juli.png",
  },
  {
    id: "SLR-005",
    staffId: "STF-005",
    name: "Eka Putri",
    role: "admin",
    salary: 10000000,
    bankName: "Permata",
    bankAccount: "6677889900",
    accountHolder: "Eka Putri",
    status: "unpaidThisMonth",
  },
];

const statusColor: Record<PaymentStatus, "success" | "warning"> = {
  paidThisMonth: "success",
  unpaidThisMonth: "warning",
};

function formatRupiah(amount: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
}

function formatPeriodLabel(year: number, month: number) {
  const monthLabel = monthLabels[month - 1];
  return `${monthLabel} ${year}`;
}

function formatDateLabel(isoDate: string) {
  const [year, month, day] = isoDate.split("-");
  const monthLabel = monthLabels[Number(month) - 1];
  return `${day} ${monthLabel} ${year}`;
}

function formatTodayIso() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export default function SalaryTable() {
  const { isOpen, openModal, closeModal } = useModal();
  const [rows, setRows] = useState(initialRows);
  const [selectedRow, setSelectedRow] = useState<SalaryRow | null>(null);
  const [proofFile, setProofFile] = useState<File | null>(null);
  const [formError, setFormError] = useState("");

  const periodLabel = useMemo(
    () => formatPeriodLabel(CURRENT_YEAR, CURRENT_MONTH),
    []
  );

  const paidCount = rows.filter((row) => row.status === "paidThisMonth").length;
  const unpaidCount = rows.length - paidCount;
  const totalSalary = rows.reduce((sum, row) => sum + row.salary, 0);
  const paidSalary = rows
    .filter((row) => row.status === "paidThisMonth")
    .reduce((sum, row) => sum + row.salary, 0);

  const tableHeaders = [
    "Employee",
    "Role",
    "Salary",
    "Bank Account",
    "Status",
    "Action",
  ];

  function handleOpenPayModal(row: SalaryRow) {
    setSelectedRow(row);
    setProofFile(null);
    setFormError("");
    openModal();
  }

  function handleCloseModal() {
    setSelectedRow(null);
    setProofFile(null);
    setFormError("");
    closeModal();
  }

  function handleConfirmPayment() {
    if (!selectedRow) return;

    if (!proofFile) {
      setFormError("Please upload salary transfer proof first.");
      return;
    }

    setRows((prev) =>
      prev.map((row) =>
        row.id === selectedRow.id
          ? {
              ...row,
              status: "paidThisMonth",
              paidAt: formatTodayIso(),
              proofFileName: proofFile.name,
            }
          : row
      )
    );
    handleCloseModal();
  }

  return (
    <>
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[
          {
            label: "Period",
            value: periodLabel,
            sub: "Internal employee salaries",
          },
          {
            label: "Paid",
            value: `${paidCount} / ${rows.length}`,
            sub: formatRupiah(paidSalary),
          },
          {
            label: "Unpaid",
            value: String(unpaidCount),
            sub: formatRupiah(totalSalary - paidSalary),
          },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03]"
          >
            <p className="text-sm text-gray-500 dark:text-gray-400">{item.label}</p>
            <p className="mt-2 text-xl font-semibold text-gray-800 dark:text-white/90">
              {item.value}
            </p>
            <p className="mt-1 text-sm text-gray-400">{item.sub}</p>
          </div>
        ))}
      </div>

      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
        <div className="border-b border-gray-100 px-5 py-4 dark:border-gray-800">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Internal Employee Salaries
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Salary payment status for {periodLabel}
          </p>
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
                  <TableCell className="px-5 py-4">
                    <p className="text-theme-sm font-medium text-gray-800 dark:text-white/90">
                      {row.name}
                    </p>
                    <p className="text-theme-xs text-gray-400">{row.staffId}</p>
                  </TableCell>
                  <TableCell className="px-5 py-4 text-theme-sm text-gray-500 dark:text-gray-400">
                    {roleLabels[row.role]}
                  </TableCell>
                  <TableCell className="px-5 py-4 text-theme-sm font-medium text-gray-800 dark:text-white/90">
                    {formatRupiah(row.salary)}
                  </TableCell>
                  <TableCell className="px-5 py-4">
                    <p className="text-theme-sm text-gray-500 dark:text-gray-400">
                      {row.bankName} · {row.bankAccount}
                    </p>
                    <p className="text-theme-xs text-gray-400">
                      a/n {row.accountHolder}
                    </p>
                  </TableCell>
                  <TableCell className="px-5 py-4">
                    <Badge size="sm" color={statusColor[row.status]}>
                      {statusLabels[row.status]}
                    </Badge>
                    {row.status === "paidThisMonth" && row.paidAt && (
                      <p className="mt-1 text-theme-xs text-gray-400">
                        {formatDateLabel(row.paidAt)}
                      </p>
                    )}
                  </TableCell>
                  <TableCell className="px-5 py-4">
                    {row.status === "unpaidThisMonth" ? (
                      <Button size="sm" onClick={() => handleOpenPayModal(row)}>
                        Pay
                      </Button>
                    ) : (
                      <p className="text-theme-xs text-gray-400">
                        {row.proofFileName}
                      </p>
                    )}
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
        {selectedRow && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleConfirmPayment();
            }}
          >
            <h4 className="mb-2 text-lg font-medium text-gray-800 dark:text-white/90">
              Pay Employee Salary
            </h4>
            <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
              Upload salary transfer proof to the employee bank account for period{" "}
              {periodLabel}
            </p>

            <div className="space-y-4 rounded-xl border border-gray-100 bg-gray-50 p-4 dark:border-gray-800 dark:bg-white/[0.02]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                    {selectedRow.name}
                  </p>
                  <p className="text-xs text-gray-400">
                    {selectedRow.staffId} · {roleLabels[selectedRow.role]}
                  </p>
                </div>
                <p className="text-sm font-semibold text-brand-500">
                  {formatRupiah(selectedRow.salary)}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Destination account</p>
                <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                  {selectedRow.bankName} · {selectedRow.bankAccount}
                </p>
                <p className="text-xs text-gray-400">
                  a/n {selectedRow.accountHolder}
                </p>
              </div>
            </div>

            <div className="mt-5">
              <Label>Transfer Proof</Label>
              <FileInput
                onChange={(e) => {
                  setProofFile(e.target.files?.[0] ?? null);
                  setFormError("");
                }}
              />
              <p className="mt-2 text-xs text-gray-400">
                Format: PDF, JPG, or PNG
              </p>
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
                Confirm Payment
              </Button>
            </div>
          </form>
        )}
      </Modal>
    </>
  );
}
