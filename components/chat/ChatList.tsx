"use client";

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
            className="w-full bg-transparent text-[11px] outline-none placeholder:text-gray-400"
          />
        </div>
        <div className="mt-3 flex items-center justify-between text-[11px] text-gray-500">
          <div className="flex items-center gap-2">
            <span className="font-medium text-gray-800">Open</span>
            <span className="rounded-full bg-gray-100 px-2 py-0.5">
              {chats.length}
            </span>
          </div>
          <button className="flex items-center gap-1">
            <span>Newest</span>
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
          : chats.map((chat) => (
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
