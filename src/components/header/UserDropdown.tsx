"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Dropdown } from "../ui/dropdown/Dropdown";
import { DropdownItem } from "../ui/dropdown/DropdownItem";
import { Modal } from "../ui/modal";
import Label from "../form/Label";
import Input from "../form/input/InputField";
import Button from "../ui/button/Button";
import { useLanguage } from "@/context/LanguageContext";

export default function UserDropdown() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isPasswordOpen, setIsPasswordOpen] = useState(false);

  function toggleDropdown(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  }

  function closeDropdown() {
    setIsOpen(false);
  }

  function openChangePassword() {
    closeDropdown();
    setIsPasswordOpen(true);
  }

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center text-gray-700 dark:text-gray-400 dropdown-toggle"
      >
        <span className="block mr-1 font-medium text-theme-sm">admin</span>

        <svg
          className={`stroke-gray-500 dark:stroke-gray-400 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          width="18"
          height="20"
          viewBox="0 0 18 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.3125 8.65625L9 13.3437L13.6875 8.65625"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <Dropdown
        isOpen={isOpen}
        onClose={closeDropdown}
        className="absolute right-0 mt-[17px] flex w-[240px] flex-col rounded-2xl border border-gray-200 bg-white p-3 shadow-theme-lg dark:border-gray-800 dark:bg-gray-dark"
      >
        <div className="px-3 py-2">
          <span className="block text-xs text-gray-500 dark:text-gray-400">
            {t("header.username")}
          </span>
          <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
            admin
          </span>
        </div>

        <ul className="flex flex-col gap-1 pt-2 border-t border-gray-200 dark:border-gray-800">
          <li>
            <DropdownItem
              onItemClick={openChangePassword}
              className="flex w-full items-center gap-3 px-3 py-2 font-medium text-gray-700 rounded-lg group text-theme-sm hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300"
            >
              {t("header.changePassword")}
            </DropdownItem>
          </li>
        </ul>

        <Link
          href="/signin"
          className="flex items-center gap-3 px-3 py-2 mt-1 font-medium text-error-600 rounded-lg group text-theme-sm hover:bg-error-50 dark:text-error-500 dark:hover:bg-white/5"
        >
          {t("header.logout")}
        </Link>
      </Dropdown>

      <Modal
        isOpen={isPasswordOpen}
        onClose={() => setIsPasswordOpen(false)}
        className="max-w-[480px] p-6"
      >
        <h4 className="mb-1 text-lg font-semibold text-gray-800 dark:text-white/90">
          {t("header.changePassword")}
        </h4>
        <p className="mb-5 text-sm text-gray-500 dark:text-gray-400">
          {t("header.changePasswordDesc")}
        </p>
        <div className="space-y-4">
          <div>
            <Label>{t("header.oldPassword")}</Label>
            <Input type="password" placeholder="••••••••" />
          </div>
          <div>
            <Label>{t("header.newPassword")}</Label>
            <Input type="password" placeholder="••••••••" />
          </div>
          <div>
            <Label>{t("header.confirmPassword")}</Label>
            <Input type="password" placeholder="••••••••" />
          </div>
        </div>
        <div className="flex items-center justify-end gap-3 mt-6">
          <Button
            size="sm"
            variant="outline"
            onClick={() => setIsPasswordOpen(false)}
          >
            {t("common.cancel")}
          </Button>
          <Button size="sm" onClick={() => setIsPasswordOpen(false)}>
            {t("common.save")}
          </Button>
        </div>
      </Modal>
    </div>
  );
}
