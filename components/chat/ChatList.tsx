"use client";

import { useState, useMemo } from "react";
import type { ChatPreview } from "@/lib/types";
import AvatarCircle from "../ui/AvatarCircle";
import Skeleton from "../ui/Skeleton";
import { Search, Filter } from "lucide-react";
import Image from "next/image";
type Props = {
  chats: ChatPreview[];
  activeChatId: number | null;
  onSelectChat: (id: number) => void;
  loading: boolean;
};

export default function ChatList({
  chats,
  activeChatId,
  onSelectChat,
  loading,
}: Props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<"newest" | "oldest">("newest");

  const filteredChats = useMemo(() => {
    let filtered = chats.filter(
      (chat) =>
        chat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        chat.rolePreview.toLowerCase().includes(searchTerm.toLowerCase())
    );

    filtered.sort((a, b) => {
      const timeA = new Date(`2025-08-28 ${a.time}`).getTime();
      const timeB = new Date(`2025-08-28 ${b.time}`).getTime();
      return sortBy === "newest" ? timeB - timeA : timeA - timeB;
    });

    return filtered;
  }, [chats, searchTerm, sortBy]);
  return (
    <section className="flex h-full flex-col border-r border-subtle bg-[#FFFFFFB2]">
      <header className="flex items-center justify-between border-b border-subtle px-4 py-3 h-[61px]">
        <h2 className="text-[12px] flex items-center gap-2 font-semibold text-gray-900">
          <Image
            src={"/assets/minimize-menu.svg"}
            width={20}
            height={20}
            alt="chat details icon"
          />
          Michael Johnson
        </h2>
        <span>
          <Image
            src={"/assets/edit.svg"}
            width={20}
            height={20}
            alt="chat details icon"
          />
        </span>
      </header>

      <div className="border-b border-subtle px-4 py-2">
        <div className="flex items-center gap-2 rounded-full  px-3 py-1.5">
          <Search className="h-3.5 w-3.5 text-gray-400" />
          <input
            placeholder="Search Chat"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-transparent text-[11px] outline-none placeholder:text-gray-400"
            aria-label="Search chats"
          />
        </div>
        <div className="mt-3 flex items-center justify-between text-[11px] text-gray-500">
          <div className="flex items-center gap-2">
            <span className="font-medium text-gray-800">Open</span>
            <span className="rounded-full bg-gray-100 px-2 py-0.5">
              {filteredChats.length}
            </span>
          </div>
          <button
            onClick={() => setSortBy(sortBy === "newest" ? "oldest" : "newest")}
            className="flex items-center gap-1"
            aria-label={`Sort by ${sortBy === "newest" ? "oldest" : "newest"}`}
          >
            <span>{sortBy === "newest" ? "Newest" : "Oldest"}</span>
            <Filter className="h-3 w-3 text-gray-400" />
          </button>
        </div>
      </div>

      <div className="flex-1 space-y-1 overflow-y-auto px-2 py-2">
        {loading
          ? Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-xl px-3 py-2"
              >
                <Skeleton className="h-9 w-9 rounded-full" />
                <div className="min-w-0 flex-1 space-y-1">
                  <Skeleton className="h-3 w-32" />
                  <Skeleton className="h-3 w-40" />
                </div>
                <Skeleton className="h-3 w-8" />
              </div>
            ))
          : filteredChats.map((chat) => (
              <button
                key={chat.id}
                onClick={() => onSelectChat(chat.id)}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left ${
                  chat.id === activeChatId ? "bg-gray-100" : "hover:bg-gray-50"
                }`}
              >
                <AvatarCircle name={chat.name} />
                <div className="min-w-0 flex-1">
                  <div className="mb-0.5 flex items-center justify-between">
                    <p className="truncate text-xs font-medium text-gray-900">
                      {chat.name}
                    </p>
                    <span className="text-[10px] text-gray-400">
                      {chat.time}
                    </span>
                  </div>
                  <p className="truncate text-[11px] text-gray-500">
                    {chat.rolePreview}
                  </p>
                </div>
              </button>
            ))}
      </div>
    </section>
  );
}
