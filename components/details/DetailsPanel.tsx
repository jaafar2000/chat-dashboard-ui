"use client";

import { useState } from "react";
import Image from "next/image";
import type { ContactDetails } from "@/lib/types";
import { ChevronDown } from "lucide-react";

export default function DetailsPanel({
  contact,
  loading,
}: {
  contact: ContactDetails | null;
  loading: boolean;
}) {
  const [open, setOpen] = useState({
    chat: true,
    contact: true,
    labels: true,
    notes: true,
    otherChats: true,
  });

  const toggle = (key: keyof typeof open) =>
    setOpen((p) => ({ ...p, [key]: !p[key] }));

  return (
    <aside className="flex h-full flex-col rounded-2xl bg-white shadow-sm overflow-hidden">
      <header className="flex items-center justify-between border-b border-gray-200 px-4 py-3 h-[61px]">
        <h2 className="text-[12px] font-semibold text-black">Details</h2>
        <div className="flex items-center justify-center w-6 h-6 rounded-full border border-gray-300">
          <Image
            src="/assets/minimize-menu.svg"
            width={14}
            height={14}
            alt="minimize"
          />
        </div>
      </header>

      <div className="flex-1 overflow-y-auto text-xs text-black">
        <Section
          title="Chat Data"
          isOpen={open.chat}
          onClick={() => toggle("chat")}
        >
          <div className="space-y-2 px-4">
            <Row label="Assignee" value="James West" />
            <Row label="Team" value="Sales Team" />
          </div>
        </Section>

        <Section
          title="Contact Data"
          isOpen={open.contact}
          onClick={() => toggle("contact")}
        >
          {loading ? (
            <div className="px-4 space-y-2">
              <Skeleton w="80px" />
              <Skeleton w="120px" />
              <Skeleton w="140px" />
              <Skeleton w="100px" />
            </div>
          ) : !contact ? (
            <p className="px-4 text-gray-400 text-[11px]">
              No contact selected.
            </p>
          ) : (
            <div className="px-4 space-y-2">
              <Row label="First Name" value={contact.firstName} />
              <Row label="Last Name" value={contact.lastName} />
              <Row label="Phone" value={contact.phone} />
              <Row label="Email" value={contact.email} highlight />
              <Row label="City" value={contact.city} />
              <button className="text-[#2563eb] text-[11px] font-medium">
                See all
              </button>
            </div>
          )}
        </Section>

        <Section
          title="Contact Labels"
          isOpen={open.labels}
          onClick={() => toggle("labels")}
        >
          <div className="px-4 py-1 flex flex-wrap gap-2">
            <Pill text="Closed Won" />
            <Pill text="Chicago" />
            <button className="flex items-center justify-center w-6 h-6 rounded-full border border-gray-300 text-gray-500">
              +
            </button>
          </div>
        </Section>

        <Section
          title="Notes"
          isOpen={open.notes}
          onClick={() => toggle("notes")}
        >
          <div className="px-4 space-y-2">
            <button className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-left text-gray-500 text-[11px]">
              Add a note
            </button>

            <div className="rounded-lg bg-[#F5E096] px-3 py-2 text-[11px]">
              Strong potential for future upgrades
            </div>
          </div>
        </Section>

        <Section
          title="Other Chats"
          isOpen={open.otherChats}
          onClick={() => toggle("otherChats")}
        >
          <div className="mx-4 my-2 flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2">
            <div className="flex items-center gap-2">
              <span className="h-5 w-5 rounded-full flex items-center justify-center text-white text-[9px] bg-gradient-to-br from-purple-600 to-orange-400">
                IG
              </span>
              <div>
                <p className="font-medium text-gray-800">Fit4Life</p>
                <p className="text-[10px] text-gray-500">On my way!</p>
              </div>
            </div>
            <span className="text-[10px] text-gray-400">08/08/25</span>
          </div>
        </Section>
      </div>
    </aside>
  );
}

function Section({
  title,
  isOpen,
  onClick,
  children,
}: {
  title: string;
  isOpen: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-gray-200 pb-2">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between px-4 py-2"
      >
        <h3 className="text-[10px] font-semibold uppercase tracking-wide text-gray-600">
          {title}
        </h3>
        <ChevronDown
          className={`h-3 w-3 text-gray-500 transition-transform ${
            isOpen ? "" : "rotate-180"
          }`}
        />
      </button>

      {isOpen && <div className="mt-1">{children}</div>}
    </div>
  );
}

function Row({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex justify-between text-[11px]">
      <span className="text-gray-400">{label}</span>
      <span
        className={`max-w-[60%] text-right ${
          highlight ? "font-medium text-[#2563eb]" : "text-gray-800"
        }`}
      >
        {value}
      </span>
    </div>
  );
}

function Pill({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center rounded-full bg-[#E5F1FC] border border-[#007AEC40] px-2 py-1 text-[10px] font-semibold text-[#007AEC]">
      {text}
    </span>
  );
}

function Skeleton({ w }: { w: string }) {
  return (
    <div
      className={`h-3 rounded bg-gray-200 animate-pulse`}
      style={{ width: w }}
    />
  );
}
