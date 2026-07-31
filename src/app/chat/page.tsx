import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import ChatInbox from "./components/ChatInbox";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Chat | Smart Hotel Admin",
  description: "Balas pesan dan pertanyaan dari user",
};

export default function ChatPage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Chat" />
      <ChatInbox />
    </div>
  );
}
