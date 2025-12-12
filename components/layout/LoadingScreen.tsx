import Image from "next/image";

const icons = [
  {
    name: "ai",
    src: "/loadingScreenIcons/ai.svg",
    w: 90,
    h: 90,
    top: 39,
    left: 156,
    size: 35,
  },
  {
    name: "inbox",
    src: "/loadingScreenIcons/inbox.svg",
    w: 80,
    h: 80,
    top: 199,
    left: 37,
    size: 29,
  },
  {
    name: "frame1",
    src: "/loadingScreenIcons/Frame.svg",
    w: 80,
    h: 80,
    top: 271.5,
    left: 201,
    size: 29,
  },
  {
    name: "workflow",
    src: "/loadingScreenIcons/workflow.svg",
    w: 90,
    h: 90,
    top: 144,
    left: 914,
    size: 39,
  },
  {
    name: "campaign",
    src: "/loadingScreenIcons/campaign.svg",
    w: 60,
    h: 60,
    top: 289,
    left: 1109,
    size: 25,
  },
  {
    name: "frame2",
    src: "/loadingScreenIcons/frame.svg",
    w: 80,
    h: 80,
    top: 39.5,
    left: 1131,
    size: 29,
  },
];

const LoadingScreen = () => {
  return (
    <div className="min-w-screen min-h-screen overflow-hidden flex items-center justify-center bg-[#0C0C0C]">
      <div className="absolute inset-0 bg-[#0c182e] overflow-hidden">
        <Image
          src="/assets/AI_RING.gif"
          fill
          alt="AI ring"
          className="object-cover blur-xl scale-125 opacity-60"
        />
      </div>

      <div className="w-[1440px] h-[869px] bg-[#0C0C0C] rounded-[20px] relative overflow-hidden">
        <div className="w-[1200px] h-[300px] absolute bottom-0 left-1/2 -translate-x-1/2 z-[150]">
          <Image
            src="/assets/dashboard-preview.png"
            fill
            alt="dashboard"
            className="object-contain"
          />
        </div>

        <div className="imageRight"></div>
        <div className="imageLeft"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[1392px] h-[820px] rounded-[24px] border-[2px] border-[#FFFFFF1A] bg-white/5 backdrop-blur-[60px] pt-[24px] pr-[80px] pb-[178px] pl-[80px] flex flex-col items-center relative z-[100]">
            {icons.map((icon, i) => (
              <div
                key={i}
                className="hex-button absolute"
                style={{
                  top: icon.top,
                  left: icon.left,
                  width: icon.w,
                  height: icon.h,
                }}
              >
                <Image
                  src={icon.src}
                  alt={icon.name}
                  width={icon.size}
                  height={icon.size}
                  className="hex-icon"
                />
              </div>
            ))}

            <div className="flex justify-center relative mt-16">
              <div className="w-[288px] h-[273px] relative">
                <Image
                  src="/assets/AI_RING.gif"
                  fill
                  alt="AI ring"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="text-center w-[530px] mt-10">
              <h1 className="text-[38px] font-bold text-white">
                Extracting Information...
              </h1>
              <p className="text-[18px] text-white opacity-90">
                We are extracting information from the above honey combs to your
                system
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
