import Badge from "@/components/ui/badge/Badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type PaymentStatus = "Lunas" | "Pending" | "Gagal" | "Overdue";
type Segment = "Smart Hotel" | "Smart Home";

interface PaymentRow {
  id: string;
  user: string;
  segment: Segment;
  packageName: string;
  period: string;
  amount: string;
  method: string;
  paidAt: string;
  status: PaymentStatus;
}

const payments: PaymentRow[] = [
  {
    id: "INV-2607-001",
    user: "Grand Horizon Hotel",
    segment: "Smart Hotel",
    packageName: "Medium",
    period: "Juli 2026",
    amount: "Rp 6.500.000",
    method: "Transfer Bank",
    paidAt: "01 Jul 2026",
    status: "Lunas",
  },
  {
    id: "INV-2607-002",
    user: "Oceanview Suites",
    segment: "Smart Hotel",
    packageName: "Large",
    period: "Juli 2026",
    amount: "Rp 12.000.000",
    method: "Virtual Account",
    paidAt: "02 Jul 2026",
    status: "Lunas",
  },
  {
    id: "INV-2607-003",
    user: "Villa Melati",
    segment: "Smart Home",
    packageName: "Premium",
    period: "Juli 2026",
    amount: "Rp 350.000",
    method: "E-Wallet",
    paidAt: "03 Jul 2026",
    status: "Lunas",
  },
  {
    id: "INV-2607-004",
    user: "Nusantara Boutique Inn",
    segment: "Smart Hotel",
    packageName: "Small",
    period: "Juli 2026",
    amount: "Rp 2.500.000",
    method: "Transfer Bank",
    paidAt: "-",
    status: "Pending",
  },
  {
    id: "INV-2607-005",
    user: "Rumah Aruna",
    segment: "Smart Home",
    packageName: "Standard",
    period: "Juli 2026",
    amount: "Rp 199.000",
    method: "Kartu Kredit",
    paidAt: "05 Jul 2026",
    status: "Lunas",
  },
  {
    id: "INV-2607-006",
    user: "Skyline Business Hotel",
    segment: "Smart Hotel",
    packageName: "Large",
    period: "Juli 2026",
    amount: "Rp 12.000.000",
    method: "Virtual Account",
    paidAt: "-",
    status: "Overdue",
  },
  {
    id: "INV-2607-007",
    user: "Palm Garden Resort",
    segment: "Smart Hotel",
    packageName: "Medium",
    period: "Juli 2026",
    amount: "Rp 6.500.000",
    method: "Transfer Bank",
    paidAt: "07 Jul 2026",
    status: "Lunas",
  },
  {
    id: "INV-2607-008",
    user: "Apartment Serenia",
    segment: "Smart Home",
    packageName: "Basic",
    period: "Juli 2026",
    amount: "Rp 99.000",
    method: "E-Wallet",
    paidAt: "-",
    status: "Gagal",
  },
  {
    id: "INV-2606-091",
    user: "CityLink Hotel Group",
    segment: "Smart Hotel",
    packageName: "Enterprise",
    period: "Juni 2026",
    amount: "Rp 45.000.000",
    method: "Transfer Bank",
    paidAt: "28 Jun 2026",
    status: "Lunas",
  },
  {
    id: "INV-2606-088",
    user: "Grand Horizon Hotel",
    segment: "Smart Hotel",
    packageName: "Medium",
    period: "Juni 2026",
    amount: "Rp 6.500.000",
    method: "Transfer Bank",
    paidAt: "01 Jun 2026",
    status: "Lunas",
  },
];

const statusColor: Record<
  PaymentStatus,
  "success" | "warning" | "error" | "primary"
> = {
  Lunas: "success",
  Pending: "warning",
  Gagal: "error",
  Overdue: "error",
};

const summary = [
  { label: "Total Tagihan Juli", value: "Rp 402 jt" },
  { label: "Sudah Dibayar", value: "Rp 372 jt" },
  { label: "Pending / Overdue", value: "Rp 30 jt" },
  { label: "Tingkat Koleksi", value: "92.5%" },
];

export default function MonthlyPaymentsTable() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
        {summary.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-white/[0.03]"
          >
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {item.label}
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
            Pembayaran Bulanan User
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Riwayat tagihan subscription per periode
          </p>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="border-b border-gray-100 dark:border-gray-800">
              <TableRow>
                {[
                  "Invoice",
                  "User",
                  "Paket",
                  "Periode",
                  "Nominal",
                  "Metode",
                  "Tanggal Bayar",
                  "Status",
                ].map((h) => (
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
              {payments.map((payment) => (
                <TableRow key={payment.id}>
                  <TableCell className="px-5 py-4">
                    <p className="text-theme-sm font-medium text-gray-800 dark:text-white/90">
                      {payment.id}
                    </p>
                    <p className="text-theme-xs text-gray-400">
                      {payment.segment}
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
                    {payment.method}
                  </TableCell>
                  <TableCell className="px-5 py-4 text-theme-sm text-gray-500 dark:text-gray-400">
                    {payment.paidAt}
                  </TableCell>
                  <TableCell className="px-5 py-4">
                    <Badge size="sm" color={statusColor[payment.status]}>
                      {payment.status}
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
