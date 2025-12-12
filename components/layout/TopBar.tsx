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
        h-[39.3px]
        px-[11.23px] py-[7.02px]
        bg-white
        rounded-[11.23px]
      "
    >
      <div className="flex items-center gap-[5.61px] flex-1">
        <div className="flex items-center pr-[16.84px]">
          <Image
            src="/assets/logo-horiz.svg"
            width={64.56}
            height={22.46}
            alt="logo"
          />
        </div>

        {nav.map((item) => {
          const isActive = item.active;

          return (
            <div
              key={item.item}
              className={`
                flex items-center gap-[5.61px]
                h-[23.86px]
                px-[7.02px]
                rounded-[5.61px]
                text-[9.82px]
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
              />
              <span>{item.item}</span>
            </div>
          );
        })}
      </div>

      <div className="flex items-center gap-[5.61px]">
        <div
          className="
            flex items-center justify-center
            w-[29.47px] h-[25.26px]
            rounded-[5.61px]
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
          />
        </div>

        <div className="flex items-center gap-[5.61px] px-[8.42px] h-[25.26px]">
          <div className="flex items-center justify-center w-[19.65px] h-[19.65px] rounded-full bg-[#FE3265] text-white text-[9.82px] font-[656]">
            M
          </div>
          <span className="text-[9.82px] font-semibold text-black">
            Michael Johnson
          </span>
        </div>
      </div>
    </header>
  );
}
