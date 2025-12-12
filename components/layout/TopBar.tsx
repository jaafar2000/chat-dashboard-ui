import Image from "next/image";

export default function TopBar() {
  const nav = [
    { item: "Inbox", image: "inbox.svg", active: true },
    { item: "Contacts", image: "Frame.svg" },
    { item: "AI Employees", image: "ai.svg" },
    { item: "Workflows", image: "workflow.svg" },
    { item: "Campaigns", image: "campaign.svg" },
  ];

  return (
    <header
      className="
        flex items-center
        h-[39.3px] md:h-[50px] lg:h-[60px]
        px-3 md:px-4 lg:px-5
        py-2 md:py-2.5 lg:py-3
        bg-white
        rounded-[11.23px] md:rounded-[15px] lg:rounded-[20px]
      "
    >
      <div className="flex items-center gap-[5.61px] flex-1">
        <div className="flex items-center pr-[16.84px] md:pr-5 lg:pr-6">
          <Image
            src="/assets/logo-horiz.svg"
            width={64.56}
            height={22.46}
            alt="logo"
            className="md:w-20 md:h-7 lg:w-24 lg:h-8"
          />
        </div>

        {nav.map((item) => {
          const isActive = item.active;

          return (
            <div
              key={item.item}
              className={`
                flex items-center gap-[5.61px] md:gap-2 lg:gap-2.5
                h-6 md:h-7 lg:h-8
                px-[7.02px] md:px-2.5 lg:px-3
                rounded-md md:rounded-lg lg:rounded-lg
                text-[9.82px] md:text-[12px] lg:text-[14px]
                font-[556]
                cursor-pointer
                border
                transition-all duration-150
                ${
                  isActive
                    ? "bg-[#EFF2F2] border-[#D8DEE4] text-black"
                    : "bg-transparent border-transparent text-black hover:bg-[#EFF2F2] hover:border-[#D8DEE4]"
                }
              `}
            >
              <Image
                src={`/assets/${item.image}`}
                width={14.04}
                height={14.04}
                alt={item.item}
                className="md:w-4 md:h-4 lg:w-4.5 lg:h-4.5"
              />
              <span className="hidden md:inline">{item.item}</span>
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-[5.61px]">
        <div
          className="
            flex items-center justify-center
            w-7 h-6 md:w-8 md:h-7 lg:w-9 lg:h-8
            rounded-md md:rounded-lg lg:rounded-lg
            cursor-pointer
            border border-transparent
            hover:bg-[#EFF2F2] hover:border-[#D8DEE4]
          "
        >
          <Image
            src="/assets/Vector.svg"
            width={14.04}
            height={14.04}
            alt="settings"
            className="md:w-4 md:h-4 lg:w-4.5 lg:h-4.5"
          />
        </div>

        <div className="flex items-center gap-[5.61px] md:gap-2 lg:gap-2.5 px-[8.42px] md:px-3 lg:px-4 h-6 md:h-7 lg:h-8">
          <div className="flex items-center justify-center w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 rounded-full bg-[#FE3265] text-white text-xs md:text-sm lg:text-base font-semibold">
            M
          </div>
          <span className="text-xs md:text-sm lg:text-base font-semibold text-black hidden md:inline">
            Michael Johnson
          </span>
        </div>
      </div>
    </header>
  );
}
