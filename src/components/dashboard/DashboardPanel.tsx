import type { ReactNode } from "react";
import { TableCell, TableRow } from "@/components/ui/table";

export function DashboardPanel({
  title,
  description,
  action,
  children,
  className = "",
}: {
  title?: string;
  description?: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  const hasHeader = Boolean(title || description || action);

  return (
    <div
      className={`overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] ${className}`}
    >
      {hasHeader ? (
        <div className="flex flex-col gap-4 border-b border-gray-100 px-5 py-4 dark:border-gray-800 sm:flex-row sm:items-center sm:justify-between">
          <div>
            {title ? (
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                {title}
              </h3>
            ) : null}
            {description ? (
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {description}
              </p>
            ) : null}
          </div>
          {action}
        </div>
      ) : null}
      {children}
    </div>
  );
}

export function SummaryMetricCard({
  label,
  value,
  sub,
  change,
  tone = "neutral",
  valueClassName = "text-gray-800 dark:text-white/90",
  size = "md",
}: {
  label: string;
  value: string;
  sub?: string;
  change?: string;
  tone?: "success" | "error" | "neutral";
  valueClassName?: string;
  size?: "sm" | "md";
}) {
  const changeClass =
    tone === "error"
      ? "text-error-600 dark:text-error-500"
      : tone === "success"
        ? "text-success-600 dark:text-success-500"
        : "text-gray-500 dark:text-gray-400";

  return (
    <div
      className={`rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] ${
        size === "sm" ? "p-4" : "p-5"
      }`}
    >
      <p
        className={
          size === "sm"
            ? "text-xs text-gray-500 dark:text-gray-400"
            : "text-sm text-gray-500 dark:text-gray-400"
        }
      >
        {label}
      </p>
      <p
        className={`mt-2 font-semibold ${valueClassName} ${
          size === "sm" ? "text-lg font-bold" : "text-2xl"
        }`}
      >
        {value}
      </p>
      {change ? (
        <p className={`mt-1 text-xs font-medium ${changeClass}`}>{change}</p>
      ) : null}
      {sub ? (
        <p className="mt-1 text-xs font-medium text-gray-500 dark:text-gray-400">
          {sub}
        </p>
      ) : null}
    </div>
  );
}

export function SummaryMetricGrid({
  items,
  columns = "sm:grid-cols-3",
  size = "md",
}: {
  items: {
    label: string;
    value: string;
    sub?: string;
    change?: string;
    tone?: "success" | "error" | "neutral";
    valueClassName?: string;
  }[];
  columns?: string;
  size?: "sm" | "md";
}) {
  return (
    <div
      className={`grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4 ${columns}`}
    >
      {items.map((item) => (
        <SummaryMetricCard key={item.label} {...item} size={size} />
      ))}
    </div>
  );
}

export function TableHeadRow({ headings }: { headings: string[] }) {
  return (
    <TableRow>
      {headings.map((heading) => (
        <TableCell
          key={heading}
          isHeader
          className="px-5 py-3 text-start text-theme-xs font-medium text-gray-500 dark:text-gray-400"
        >
          {heading}
        </TableCell>
      ))}
    </TableRow>
  );
}
