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
import {
  categoryColorMap,
  progressColor,
  userReports,
} from "./reportData";

export default function ReportsTable() {
  const { t } = useLanguage();

  const tableHeadings = [
    t("reports.id"),
    t("reports.userHotel"),
    t("reports.category"),
    t("reports.subject"),
    t("common.device"),
    t("reports.time"),
    t("reports.progress"),
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="border-b border-gray-100 px-5 py-4 dark:border-gray-800">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          {t("reports.listTitle")}
        </h3>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          {t("reports.listDesc")}
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
            {userReports.map((report) => (
              <TableRow key={report.id}>
                <TableCell className="px-5 py-4 text-theme-sm text-gray-500 dark:text-gray-400">
                  {report.id}
                </TableCell>
                <TableCell className="px-5 py-4">
                  <p className="text-theme-sm font-medium text-gray-800 dark:text-white/90">
                    {report.user}
                  </p>
                  {report.room && (
                    <p className="text-theme-xs text-gray-400">
                      {t("reports.roomPrefix")} {report.room}
                    </p>
                  )}
                </TableCell>
                <TableCell className="px-5 py-4">
                  <Badge size="sm" color={categoryColorMap[report.category]}>
                    {t(`reports.categories.${report.category}`)}
                  </Badge>
                </TableCell>
                <TableCell className="px-5 py-4 text-theme-sm text-gray-500 dark:text-gray-400">
                  {report.subject}
                </TableCell>
                <TableCell className="px-5 py-4 text-theme-sm text-gray-500 dark:text-gray-400">
                  {report.device || "-"}
                </TableCell>
                <TableCell className="px-5 py-4 text-theme-sm text-gray-500 dark:text-gray-400">
                  {report.createdAt}
                </TableCell>
                <TableCell className="px-5 py-4">
                  <Badge size="sm" color={progressColor[report.progress]}>
                    {t(`status.${report.progress}`)}
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
