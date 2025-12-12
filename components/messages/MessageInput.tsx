import Image from "next/image";
export default function MessageInput() {
  return (
    <div className=" px-2 py-3">
      <div
        className="
        w-full
          flex flex-col
          bg-white
          rounded-[5.61px]
          border-[0.7px] border-[#D8DEE4]
          p-[5.61px]
          shadow-[0px_4.91px_20.35px_0px_rgba(100,100,111,0.20)]
           h-[81.4px]
        "
      >
        <div className="px-3 py-1">
          <input
            placeholder="Type something…."
            className="w-full bg-transparent text-xs outline-none placeholder:text-gray-400"
          />
        </div>

        <div className="mt-[2.81px] flex items-center justify-between text-gray-500">
          <div className="flex items-center gap-3 px-3">
            <Image
              src={"/assets/image.svg"}
              width={15}
              height={15}
              alt="image"
            />
            <Image
              src={"/assets/play.svg"}
              width={15}
              height={15}
              alt="image"
            />{" "}
            <Image
              src={"/assets/list.svg"}
              width={15}
              height={15}
              alt="image"
            />{" "}
            <Image
              src={"/assets/share.svg"}
              width={15}
              height={15}
              alt="image"
            />{" "}
          </div>

          <div className="flex items-center gap-2 px-3">
            <Image
              src={"/assets/strike.svg"}
              width={15}
              height={15}
              alt="image"
            />
            <Image
              src={"/assets/mice.svg"}
              width={15}
              height={15}
              alt="image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
