import type { Message, ContactDetails } from "@/lib/types";
import MessageBubble from "./MessageBubble";
import MessageInput from "./MessageInput";
import Skeleton from "../ui/Skeleton";
import AvatarCircle from "../ui/AvatarCircle";
import Image from "next/image";
type Props = {
  messages: Message[];
  loading: boolean;
  contact: ContactDetails | null;
};

export default function MessageView({ messages, loading, contact }: Props) {
  const displayName = contact
    ? `${contact.firstName} ${contact.lastName}`
    : "Unknown";
  const company = contact?.company || "Unknown";

  return (
    <section className="flex h-full flex-col bg-[#f5f5f7] relative">
      <header className="flex items-center justify-between border-b border-subtle bg-panel px-5 py-3">
        <div className="flex items-center gap-3">
          <AvatarCircle name={displayName} />
          <div>
            <h2 className="text-xs font-semibold text-gray-900">
              {displayName}
            </h2>
            <p className="text-[10px] text-gray-400">{company}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <Image
            src={"/assets/chat01.svg"}
            height={30}
            width={30}
            alt="chat01"
          />
          <Image
            src={"/assets/chat02.svg"}
            height={30}
            width={30}
            alt="chat01"
          />
          <Image
            src={"/assets/chat03.svg"}
            height={30}
            width={30}
            alt="chat01"
          />
        </div>
      </header>

      <div className="flex-1 space-y-4 overflow-y-auto bg-[#f5f5f7] px-10 py-6">
        <div className="flex justify-center">
          <span className="rounded-full bg-gray-100 px-3 py-1 text-[10px] text-gray-500">
            28 August 2025
          </span>
        </div>

        {loading
          ? Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className={`flex ${
                  i % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <Skeleton className="mt-1 h-14 w-[45%] rounded-2xl" />
              </div>
            ))
          : messages.map((m) => <MessageBubble key={m.id} message={m} />)}
      </div>

      <MessageInput />
    </section>
  );
}
