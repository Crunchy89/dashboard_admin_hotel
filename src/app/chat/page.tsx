import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import ChatInbox from "./components/ChatInbox";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Messages | Smart Hotel Admin",
  description: "Reply to messages and questions from users",
};

export default function ChatPage() {
  return (
    <div>
      <PageBreadcrumb pageTitleKey="nav.chat" />
      <ChatInbox />
    </div>
  );
}
