"use client";

import Badge from "@/components/ui/badge/Badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useLanguage } from "@/context/LanguageContext";

type PaymentStatus = "paid" | "pending" | "failed" | "overdue";
type Segment = "smartHotel" | "smartHome";
type PaymentMethod = "bankTransfer" | "virtualAccount" | "eWallet" | "creditCard";

interface PaymentRow {
  id: string;
  user: string;
  segment: Segment;
  packageName: string;
  period: string;
  amount: string;
  method: PaymentMethod;
  paidAt: string;
  status: PaymentStatus;
}

const payments: PaymentRow[] = [
  {
    id: "INV-2607-001",
    user: "Grand Horizon Hotel",
    segment: "smartHotel",
    packageName: "Medium",
    period: "July 2026",
    amount: "Rp 6.500.000",
    method: "bankTransfer",
    paidAt: "01 Jul 2026",
    status: "paid",
  },
  {
    id: "INV-2607-002",
    user: "Oceanview Suites",
    segment: "smartHotel",
    packageName: "Large",
    period: "July 2026",
    amount: "Rp 12.000.000",
    method: "virtualAccount",
    paidAt: "02 Jul 2026",
    status: "paid",
  },
  {
    id: "INV-2607-003",
    user: "Villa Melati",
    segment: "smartHome",
    packageName: "Premium",
    period: "July 2026",
    amount: "Rp 350.000",
    method: "eWallet",
    paidAt: "03 Jul 2026",
    status: "paid",
  },
  {
    id: "INV-2607-004",
    user: "Nusantara Boutique Inn",
    segment: "smartHotel",
    packageName: "Small",
    period: "July 2026",
    amount: "Rp 2.500.000",
    method: "bankTransfer",
    paidAt: "-",
    status: "pending",
  },
  {
    id: "INV-2607-005",
    user: "Rumah Aruna",
    segment: "smartHome",
    packageName: "Standard",
    period: "July 2026",
    amount: "Rp 199.000",
    method: "creditCard",
    paidAt: "05 Jul 2026",
    status: "paid",
  },
  {
    id: "INV-2607-006",
    user: "Skyline Business Hotel",
    segment: "smartHotel",
    packageName: "Large",
    period: "July 2026",
    amount: "Rp 12.000.000",
    method: "virtualAccount",
    paidAt: "-",
    status: "overdue",
  },
  {
    id: "INV-2607-007",
    user: "Palm Garden Resort",
    segment: "smartHotel",
    packageName: "Medium",
    period: "July 2026",
    amount: "Rp 6.500.000",
    method: "bankTransfer",
    paidAt: "07 Jul 2026",
    status: "paid",
  },
  {
    id: "INV-2607-008",
    user: "Apartment Serenia",
    segment: "smartHome",
    packageName: "Basic",
    period: "July 2026",
    amount: "Rp 99.000",
    method: "eWallet",
    paidAt: "-",
    status: "failed",
  },
  {
    id: "INV-2606-091",
    user: "CityLink Hotel Group",
    segment: "smartHotel",
    packageName: "Enterprise",
    period: "June 2026",
    amount: "Rp 45.000.000",
    method: "bankTransfer",
    paidAt: "28 Jun 2026",
    status: "paid",
  },
  {
    id: "INV-2606-088",
    user: "Grand Horizon Hotel",
    segment: "smartHotel",
    packageName: "Medium",
    period: "June 2026",
    amount: "Rp 6.500.000",
    method: "bankTransfer",
    paidAt: "01 Jun 2026",
    status: "paid",
  },
];

const statusColor: Record<
  PaymentStatus,
  "success" | "warning" | "error" | "primary"
> = {
  paid: "success",
  pending: "warning",
  failed: "error",
  overdue: "error",
};

export default function MonthlyPaymentsTable() {
  const { t } = useLanguage();

  const summary = [
    { labelKey: "finance.totalBillJuly", value: "Rp 402 jt" },
    { labelKey: "finance.paidSummary", value: "Rp 372 jt" },
    { labelKey: "finance.pendingOverdueSummary", value: "Rp 30 jt" },
    { labelKey: "finance.collectionRate", value: "92.5%" },
  ];

  const tableHeadings = [
    t("common.invoice"),
    t("common.user"),
    t("common.package"),
    t("common.period"),
    t("finance.amount"),
    t("finance.method"),
    t("finance.paymentDate"),
    t("common.status"),
  ];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
        {summary.map((item) => (
          <div
            key={item.labelKey}
            className="rounded-2xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-white/[0.03]"
          >
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {t(item.labelKey)}
            </p>
            <p className="mt-2 text-lg font-bold text-gray-800 dark:text-white/90">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
        <div className="border-b border-gray-100 px-5 py-4 dark:border-gray-800">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            {t("finance.monthlyPayments")}
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {t("finance.paymentHistory")}
          </p>
        </div>

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
              {payments.map((payment) => (
                <TableRow key={payment.id}>
                  <TableCell className="px-5 py-4">
                    <p className="text-theme-sm font-medium text-gray-800 dark:text-white/90">
                      {payment.id}
                    </p>
                    <p className="text-theme-xs text-gray-400">
                      {t(`segments.${payment.segment}`)}
                    </p>
                  </TableCell>
                  <TableCell className="px-5 py-4 text-theme-sm text-gray-800 dark:text-white/90">
                    {payment.user}
                  </TableCell>
                  <TableCell className="px-5 py-4 text-theme-sm text-gray-500 dark:text-gray-400">
                    {payment.packageName}
                  </TableCell>
                  <TableCell className="px-5 py-4 text-theme-sm text-gray-500 dark:text-gray-400">
                    {payment.period}
                  </TableCell>
                  <TableCell className="px-5 py-4 text-theme-sm font-medium text-gray-800 dark:text-white/90">
                    {payment.amount}
                  </TableCell>
                  <TableCell className="px-5 py-4 text-theme-sm text-gray-500 dark:text-gray-400">
                    {t(`finance.${payment.method}`)}
                  </TableCell>
                  <TableCell className="px-5 py-4 text-theme-sm text-gray-500 dark:text-gray-400">
                    {payment.paidAt}
                  </TableCell>
                  <TableCell className="px-5 py-4">
                    <Badge size="sm" color={statusColor[payment.status]}>
                      {t(`status.${payment.status}`)}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
