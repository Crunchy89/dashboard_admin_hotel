"use client";

import { useMemo, useState } from "react";
import {
  DashboardPanel,
  TableHeadRow,
} from "@/components/dashboard/DashboardPanel";
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

type StaffStatus = "active" | "inactive";
type StaffRole = "technician" | "programmer" | "hr" | "admin" | "manager";
type StaffDepartment =
  | "engineering"
  | "humanResources"
  | "operations"
  | "finance"
  | "management";

interface StaffRow {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: StaffRole;
  department: StaffDepartment;
  status: StaffStatus;
}

const initialRows: StaffRow[] = [
  {
    id: "STF-001",
    name: "Andi Pratama",
    email: "andi.pratama@company.id",
    phone: "0812-3456-7890",
    role: "technician",
    department: "operations",
    status: "active",
  },
  {
    id: "STF-002",
    name: "Budi Santoso",
    email: "budi.santoso@company.id",
    phone: "0813-9876-5432",
    role: "programmer",
    department: "engineering",
    status: "active",
  },
  {
    id: "STF-003",
    name: "Citra Lestari",
    email: "citra.lestari@company.id",
    phone: "0821-1122-3344",
    role: "hr",
    department: "humanResources",
    status: "active",
  },
  {
    id: "STF-004",
    name: "Dedi Kurniawan",
    email: "dedi.kurniawan@company.id",
    phone: "0856-7788-9900",
    role: "manager",
    department: "management",
    status: "active",
  },
  {
    id: "STF-005",
    name: "Eka Putri",
    email: "eka.putri@company.id",
    phone: "0817-4455-6677",
    role: "admin",
    department: "management",
    status: "active",
  },
  {
    id: "STF-006",
    name: "Fajar Nugroho",
    email: "fajar.nugroho@company.id",
    phone: "0819-2233-4455",
    role: "technician",
    department: "operations",
    status: "inactive",
  },
];

const roleLabels: Record<StaffRole, string> = {
  technician: "Technician",
  programmer: "Programmer",
  hr: "HR",
  admin: "Admin",
  manager: "Manager",
};

const departmentLabels: Record<StaffDepartment, string> = {
  engineering: "Engineering",
  humanResources: "Human Resources",
  operations: "Operations",
  finance: "Finance",
  management: "Management",
};

const statusLabels: Record<StaffStatus, string> = {
  active: "Active",
  inactive: "Inactive",
};

const roleKeys: StaffRole[] = [
  "technician",
  "programmer",
  "hr",
  "admin",
  "manager",
];

const departmentKeys: StaffDepartment[] = [
  "engineering",
  "humanResources",
  "operations",
  "finance",
  "management",
];

const statusColor: Record<StaffStatus, "success" | "error"> = {
  active: "success",
  inactive: "error",
};

const roleColor: Record<StaffRole, "primary" | "warning" | "success" | "error"> =
  {
    admin: "error",
    manager: "warning",
    technician: "primary",
    programmer: "success",
    hr: "primary",
  };

function generateId(existingRows: StaffRow[]) {
  const maxNum = existingRows.reduce((max, row) => {
    const num = Number(row.id.replace("STF-", ""));
    return Number.isNaN(num) ? max : Math.max(max, num);
  }, 0);
  return `STF-${String(maxNum + 1).padStart(3, "0")}`;
}

const inputClassName =
  "h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:focus:border-brand-800";

export default function StaffTable() {
  const { isOpen, openModal, closeModal } = useModal();
  const [rows, setRows] = useState(initialRows);
  const [formKey, setFormKey] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState<StaffRole | "">("");
  const [department, setDepartment] = useState<StaffDepartment | "">("");
  const [formError, setFormError] = useState("");

  const roleOptions = useMemo(
    () =>
      roleKeys.map((key) => ({
        value: key,
        label: roleLabels[key],
      })),
    []
  );

  const departmentOptions = useMemo(
    () =>
      departmentKeys.map((key) => ({
        value: key,
        label: departmentLabels[key],
      })),
    []
  );

  const tableHeaders = ["Staff", "Contact", "Role", "Division", "Status"];

  function resetForm() {
    setName("");
    setEmail("");
    setPhone("");
    setRole("");
    setDepartment("");
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

  function handleAddStaff() {
    if (!name || !email || !phone || !role || !department) {
      setFormError("Please complete all fields before saving.");
      return;
    }

    const newRow: StaffRow = {
      id: generateId(rows),
      name,
      email,
      phone,
      role,
      department,
      status: "active",
    };

    setRows((prev) => [newRow, ...prev]);
    handleCloseModal();
  }

  return (
    <>
      <DashboardPanel
        title="Internal Employee List"
        description="Manage internal company team: technicians, programmers, HR, and more"
        action={
          <Button size="sm" onClick={handleOpenModal}>
            Add Staff
          </Button>
        }
      >
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="border-b border-gray-100 dark:border-gray-800">
              <TableHeadRow headings={tableHeaders} />
            </TableHeader>
            <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell className="px-5 py-4">
                    <p className="text-theme-sm font-medium text-gray-800 dark:text-white/90">
                      {row.name}
                    </p>
                    <p className="text-theme-xs text-gray-400">{row.id}</p>
                  </TableCell>
                  <TableCell className="px-5 py-4">
                    <p className="text-theme-sm text-gray-500 dark:text-gray-400">
                      {row.email}
                    </p>
                    <p className="text-theme-xs text-gray-400">{row.phone}</p>
                  </TableCell>
                  <TableCell className="px-5 py-4">
                    <Badge size="sm" color={roleColor[row.role]}>
                      {roleLabels[row.role]}
                    </Badge>
                  </TableCell>
                  <TableCell className="px-5 py-4 text-theme-sm text-gray-500 dark:text-gray-400">
                    {departmentLabels[row.department]}
                  </TableCell>
                  <TableCell className="px-5 py-4">
                    <Badge size="sm" color={statusColor[row.status]}>
                      {statusLabels[row.status]}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </DashboardPanel>

      <Modal
        isOpen={isOpen}
        onClose={handleCloseModal}
        className="max-w-[640px] p-5 lg:p-10"
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddStaff();
          }}
        >
          <h4 className="mb-2 text-lg font-medium text-gray-800 dark:text-white/90">
            Add Internal Employee
          </h4>
          <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
            Add an internal company employee, not hotel staff
          </p>

          <div key={formKey} className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <Label>Name</Label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full name"
                className={inputClassName}
              />
            </div>
            <div>
              <Label>Email</Label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="nama@company.id"
                className={inputClassName}
              />
            </div>
            <div>
              <Label>Phone</Label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="08xx-xxxx-xxxx"
                className={inputClassName}
              />
            </div>
            <div>
              <Label>Role</Label>
              <Select
                options={roleOptions}
                placeholder="Select role"
                onChange={(value) => setRole(value as StaffRole)}
              />
            </div>
            <div>
              <Label>Division</Label>
              <Select
                options={departmentOptions}
                placeholder="Select division"
                onChange={(value) => setDepartment(value as StaffDepartment)}
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
              Save Staff
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
}
