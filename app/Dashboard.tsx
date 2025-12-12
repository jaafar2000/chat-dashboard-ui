"use client";

import { useEffect, useState } from "react";
import TopBar from "@/components/layout/TopBar";
import Sidebar from "@/components/layout/Sidebar";
import ChatList from "@/components/chat/ChatList";
import MessageView from "@/components/messages/MessageView";
import DetailsPanel from "@/components/details/DetailsPanel";
import LoadingScreen from "@/components/layout/LoadingScreen";

import type {
  SidebarUser,
  ChatPreview,
  Message,
  ContactDetails,
} from "@/lib/types";

import { fetchMessages, fetchContact } from "@/lib/api";

type Props = {
  sidebarUsers: SidebarUser[];
  chats: ChatPreview[];
};

const Dashboard = ({ sidebarUsers, chats }: Props) => {
  const [activeChatId, setActiveChatId] = useState<number | null>(
    chats[0]?.id ?? null
  );

  const [messages, setMessages] = useState<Message[]>([]);
  const [contact, setContact] = useState<ContactDetails | null>(null);
  const [loadingMessages, setLoadingMessages] = useState(true);
  const [loadingContact, setLoadingContact] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!activeChatId) return;

    async function loadChat() {
      try {
        setError(null);
        setLoadingMessages(true);
        setLoadingContact(true);

        const [msgs, contact] = await Promise.all([
          fetchMessages(activeChatId!),
          fetchContact(activeChatId!),
        ]);

        setMessages(msgs);
        setContact(contact);
      } catch (err) {
        console.error("Error loading chat:", err);
        setError("Failed to load chat");
      } finally {
        setLoadingMessages(false);
        setLoadingContact(false);
      }
    }

    loadChat();
  }, [activeChatId]);

  const isInitialLoading =
    loadingMessages && loadingContact && messages.length === 0;

  if (isInitialLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="flex h-screen flex-col bg-app-bg">
      <TopBar />

      {error && (
        <div
          className="border-b border-red-200 bg-red-50 px-4 py-2 text-center text-[11px] text-red-700"
          role="alert"
          aria-live="polite"
        >
          {error}
        </div>
      )}

      <main
        className="grid h-full grid-cols-[260px_5px_340px_5px_minmax(0,1fr)_5px_320px] px-5 pb-4 pt-1"
        role="main"
      >
        <Sidebar users={sidebarUsers} loading={false} />
        <div />
        <ChatList
          chats={chats}
          activeChatId={activeChatId}
          onSelectChat={setActiveChatId}
          loading={false}
        />
        <div />
        <MessageView
          messages={messages}
          loading={loadingMessages}
          contact={contact}
        />
        <div />
        <DetailsPanel contact={contact} loading={loadingContact} />
      </main>
    </div>
  );
};

export default Dashboard;
