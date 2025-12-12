import type { Message } from "@/lib/types";
import Image from "next/image";

export default function MessageBubble({ message }: { message: Message }) {
  const isUser = message.from === "user";

  return (
    <div
      className={`flex w-full mb-3 ${isUser ? "justify-start" : "justify-end"}`}
    >
      <div className="flex items-start gap-2 max-w-[65%]">
        {!isUser && (
          <div className="flex flex-col items-center mt-0.5 shrink-0">
            <span className="text-[10px] text-gray-400">{message.time}</span>

            <div className="relative w-3 h-3 mt-0.5">
              <Image
                src="/assets/read.svg"
                alt="read"
                fill
                className="object-contain opacity-70"
              />
            </div>
          </div>
        )}

        <div
          className={`rounded-[10px] px-4 py-2 text-xs leading-relaxed ${
            isUser
              ? "bg-white text-gray-800 shadow-sm"
              : "bg-[#dcd0ff] text-gray-900"
          }`}
        >
          {message.text}
        </div>

        {isUser && (
          <div className="flex flex-col items-center mt-0.5 shrink-0">
            <span className="text-[10px] text-gray-400">{message.time}</span>
          </div>
        )}
      </div>
    </div>
  );
}
