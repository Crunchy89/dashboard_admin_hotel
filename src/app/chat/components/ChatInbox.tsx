"use client";
import React, { useState } from "react";

interface ChatThread {
  id: string;
  user: string;
  preview: string;
  unread: number;
  time: string;
  isNew: boolean;
}

interface ChatMessage {
  id: string;
  from: "user" | "admin";
  text: string;
  time: string;
}

const chatThreads: ChatThread[] = [
  {
    id: "c1",
    user: "Nusantara Boutique Inn",
    preview: "Bagaimana cara pairing device baru?",
    unread: 2,
    time: "10:40",
    isNew: true,
  },
  {
    id: "c2",
    user: "Apartment Serenia",
    preview: "Paket Basic apakah support kamera?",
    unread: 1,
    time: "10:18",
    isNew: true,
  },
  {
    id: "c3",
    user: "Villa Melati",
    preview: "Terima kasih, sudah berhasil.",
    unread: 0,
    time: "09:55",
    isNew: false,
  },
  {
    id: "c4",
    user: "Grand Horizon Hotel",
    preview: "Minta jadwal teknisi untuk lantai 2",
    unread: 0,
    time: "Kemarin",
    isNew: false,
  },
];

const initialMessages: Record<string, ChatMessage[]> = {
  c1: [
    {
      id: "m1",
      from: "user",
      text: "Halo, kami user baru. Bagaimana cara pairing device baru?",
      time: "10:38",
    },
    {
      id: "m2",
      from: "user",
      text: "Sudah coba scan QR tapi gagal.",
      time: "10:40",
    },
  ],
  c2: [
    {
      id: "m1",
      from: "user",
      text: "Paket Basic apakah support kamera?",
      time: "10:18",
    },
  ],
  c3: [
    {
      id: "m1",
      from: "user",
      text: "Sensor sudah terpasang, masih error.",
      time: "09:40",
    },
    {
      id: "m2",
      from: "admin",
      text: "Silakan restart gateway lalu coba lagi ya.",
      time: "09:48",
    },
    {
      id: "m3",
      from: "user",
      text: "Terima kasih, sudah berhasil.",
      time: "09:55",
    },
  ],
  c4: [
    {
      id: "m1",
      from: "user",
      text: "Minta jadwal teknisi untuk lantai 2.",
      time: "Kemarin",
    },
    {
      id: "m2",
      from: "admin",
      text: "Baik, teknisi bisa datang Kamis pukul 10:00.",
      time: "Kemarin",
    },
  ],
};

export default function ChatInbox() {
  const [activeChat, setActiveChat] = useState(chatThreads[0].id);
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState(initialMessages);

  const activeThread = chatThreads.find((t) => t.id === activeChat)!;
  const activeMessages = messages[activeChat] || [];

  function sendMessage() {
    if (!draft.trim()) return;
    const next: ChatMessage = {
      id: crypto.randomUUID(),
      from: "admin",
      text: draft.trim(),
      time: new Date().toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setMessages((prev) => ({
      ...prev,
      [activeChat]: [...(prev[activeChat] || []), next],
    }));
    setDraft("");
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="grid h-[calc(100vh-220px)] min-h-[520px] grid-cols-1 lg:grid-cols-[320px_1fr]">
        {/* Thread list */}
        <div className="border-b border-gray-100 dark:border-gray-800 lg:border-b-0 lg:border-r">
          <div className="border-b border-gray-100 px-4 py-4 dark:border-gray-800">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
              Inbox Chat
            </h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Kelola pertanyaan dari user
            </p>
          </div>
          <div className="custom-scrollbar h-[calc(100%-76px)] space-y-2 overflow-y-auto p-3">
            {chatThreads.map((thread) => (
              <button
                key={thread.id}
                onClick={() => setActiveChat(thread.id)}
                className={`w-full rounded-xl border px-3 py-3 text-left transition ${
                  activeChat === thread.id
                    ? "border-brand-300 bg-brand-50 dark:border-brand-500/40 dark:bg-brand-500/10"
                    : "border-gray-100 hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-white/5"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <p className="truncate text-sm font-medium text-gray-800 dark:text-white/90">
                    {thread.user}
                  </p>
                  <span className="shrink-0 text-[11px] text-gray-400">
                    {thread.time}
                  </span>
                </div>
                <div className="mt-1 flex items-center justify-between gap-2">
                  <p className="truncate text-xs text-gray-500 dark:text-gray-400">
                    {thread.preview}
                  </p>
                  {thread.unread > 0 && (
                    <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-brand-500 px-1 text-[10px] font-semibold text-white">
                      {thread.unread}
                    </span>
                  )}
                </div>
                {thread.isNew && (
                  <span className="mt-1 inline-block text-[10px] font-medium text-success-600">
                    User baru
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Conversation */}
        <div className="flex min-h-0 flex-col">
          <div className="border-b border-gray-100 px-5 py-4 dark:border-gray-800">
            <h4 className="font-semibold text-gray-800 dark:text-white/90">
              {activeThread.user}
            </h4>
            <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">
              {activeThread.isNew
                ? "User baru — balas pertanyaan mereka"
                : "Percakapan aktif"}
            </p>
          </div>

          <div className="custom-scrollbar flex-1 space-y-3 overflow-y-auto p-5">
            {activeMessages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.from === "admin" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-sm ${
                    msg.from === "admin"
                      ? "bg-brand-500 text-white"
                      : "bg-gray-100 text-gray-800 dark:bg-white/5 dark:text-white/90"
                  }`}
                >
                  <p>{msg.text}</p>
                  <p
                    className={`mt-1 text-[10px] ${
                      msg.from === "admin" ? "text-white/70" : "text-gray-400"
                    }`}
                  >
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-100 p-4 dark:border-gray-800">
            <div className="flex gap-2">
              <input
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") sendMessage();
                }}
                placeholder="Tulis balasan untuk user..."
                className="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-800 outline-none focus:border-brand-300 dark:border-gray-700 dark:text-white/90"
              />
              <button
                onClick={sendMessage}
                className="h-11 shrink-0 rounded-lg bg-brand-500 px-5 text-sm font-medium text-white hover:bg-brand-600"
              >
                Kirim
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
