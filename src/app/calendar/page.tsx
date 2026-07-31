import InstallationSetup from "./components/InstallationSetup";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Setup Tanggal Pemasangan | Smart Hotel Admin",
  description:
    "Atur tanggal pemasangan perangkat dan aplikasi smart hotel",
};

export default function page() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Setup Tanggal Pemasangan" />
      <InstallationSetup />
    </div>
  );
}
