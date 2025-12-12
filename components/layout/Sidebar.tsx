"use client";

import { useState } from "react";
import type { SidebarUser } from "@/lib/types";
import Skeleton from "../ui/Skeleton";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

type Props = {
  users: SidebarUser[];
  loading: boolean;
};

export default function Sidebar({ users, loading }: Props) {
  return (
    <aside className="flex h-full flex-col bg-[#FFFFFFB2] px-3 pt-4 pb-3 text-xs border-subtle">
      <CollapsibleSection title="Inbox" defaultOpen>
        <SidebarItem label="My Inbox" count={3} icon="/assets/my_inbox.svg" />
        <SidebarItem label="All" count={28} icon="/assets/all.svg" />
        <SidebarItem
          label="Unassigned"
          count={5}
          icon="/assets/unassigned.svg"
        />
      </CollapsibleSection>

      <CollapsibleSection title="Teams" defaultOpen>
        <SidebarItem label="Sales" count={7} icon="/assets/sales.svg" />
        <SidebarItem
          label="Customer Support"
          count={16}
          icon="/assets/sales.svg"
        />
      </CollapsibleSection>

      <CollapsibleSection title="Users" defaultOpen>
        {loading
          ? Array.from({ length: 8 }).map((_, i) => <SkeletonUser key={i} />)
          : users.map((u) => (
              <SidebarItem
                key={u.id}
                label={u.name}
                icon="/assets/user_avatar.svg"
                count={u.messages}
              />
            ))}
      </CollapsibleSection>

      <CollapsibleSection title="Channels">
        <button className="flex flex-col h-8 w-full items-center gap-2 rounded-lg px-2 text-xs text-gray-700 hover:bg-white hover:shadow-[0px_1.4px_8.42px_0px_#E7EBEC] hover:border-[0.7px_solid_#D8DEE4] border border-transparent transition">
          <SidebarItem label="Fit4Life" icon="/assets/whatsapp.svg" />
          <SidebarItem label="Fit4Life" icon="/assets/instgram.svg" />
          <span className="flex-1 truncate"></span>
        </button>
      </CollapsibleSection>
    </aside>
  );
}

function CollapsibleSection({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="mb-4">
      <button
        className="flex w-full items-center justify-between mb-2 text-[10px] font-semibold uppercase tracking-wide text-gray-700"
        onClick={() => setOpen((prev) => !prev)}
      >
        {title}
        <ChevronDown
          className={`h-3 w-3 transition-transform ${
            open ? "rotate-0" : "-rotate-180"
          }`}
        />
      </button>

      {open && <div className="space-y-1">{children}</div>}
    </div>
  );
}

type SidebarItemProps = {
  label: string;
  count?: number;
  icon: string;
};

function SidebarItem({ label, count, icon }: SidebarItemProps) {
  return (
    <div
      className="
        flex h-8 w-full items-center justify-between
        rounded-lg px-2 text-xs transition
        text-gray-700 bg-transparent border border-transparent
        hover:bg-white
        hover:shadow-[0px_1.4px_8.42px_0px_#E7EBEC]
        hover:border-[0.7px_solid_#D8DEE4]
      "
    >
      <div className="flex items-center gap-2">
        <Image src={icon} width={20} height={20} alt={`${label} icon`} />
        <span className="truncate">{label}</span>
      </div>

      {typeof count === "number" && (
        <span className="ml-2 rounded-full bg-gray-100 text-gray-500 px-2 text-[10px]">
          {count}
        </span>
      )}
    </div>
  );
}

function SkeletonUser() {
  return (
    <div className="flex h-8 items-center justify-between rounded-lg px-2">
      <div className="flex items-center gap-2">
        <Skeleton className="h-6 w-6 rounded-full" />
        <Skeleton className="h-3 w-28" />
      </div>
      <Skeleton className="h-4 w-6 rounded-full" />
    </div>
  );
}
