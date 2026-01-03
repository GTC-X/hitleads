import React from "react";

export default function GSuiteQuoteFormZH() {
  return (
    <section className="w-full bg-[#F6F6F6]">
      <div className="max-w-6xl mx-auto px-6 py-14">
   

        {/* Title */}
        <h2 className="mt-4 text-center text-[32px] font-medium text-[#E3280B] tracking-[0.2px]">
          获取 GSuite 的免费报价
        </h2>

        {/* Form Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 max-w-[820px] mx-auto">
          {/* Left column */}
          <div className="space-y-4">
            <InputRow icon="user" placeholder="名字" />
            <InputRow icon="mail" placeholder="E-mail" />
            <InputRow icon="phone" placeholder="手机" />
            <InputRow icon="globe" placeholder="网址" />
          </div>

          {/* Right column */}
          <div className="space-y-4">
            <InputRow icon="building" placeholder="公司名称" />
            <InputRow icon="cloud" placeholder="云端IP" />
            <InputRow icon="doc" placeholder="要咨询电子邮件与存储解决方案" />

            {/* Button (same placement as screenshot) */}
            <div className="pt-1">
              <button
                type="button"
                style={{ boxShadow: "0px 0px 10px 0px #00000040" }}
                className="inline-flex h-[40px] items-center gap-2 rounded-[4px] bg-[#E3280B] px-8 text-[10px] font-semibold text-white hover:brightness-105 active:brightness-95"
              >
                SUBMIT
                <span className="text-[12px] leading-none">»</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Input with left icon */
function InputRow({ placeholder, icon }) {
  return (
    <div
      className="relative"
      style={{ boxShadow: "0px 0px 10px 0px #00000040" }}
    >
      <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#CFCFCF]">
        <Icon kind={icon} />
      </span>

      <input
        placeholder={placeholder}
        className="h-[40px] w-full rounded-[2px] border border-[#E9E9E9] bg-white pl-9 pr-3 text-[10px] text-[#666] placeholder:text-[#BFBFBF]  outline-none focus:border-[#FF4D4F]/40"
      />
    </div>
  );
}

/** Simple inline icons (match screenshot style: small red/grey icon left) */
function Icon({ kind }) {
  const common = {
    width: 14,
    height: 14,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  };

  const stroke = "#E73B2E";
  const muted = "#CFCFCF";

  switch (kind) {
    case "user":
      return (
        <svg {...common}>
          <path
            d="M12 12c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4Z"
            stroke={stroke}
            strokeWidth="2"
          />
          <path
            d="M4 21c1.8-4 14.2-4 16 0"
            stroke={stroke}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "mail":
      return (
        <svg {...common}>
          <path d="M4 6h16v12H4V6Z" stroke={stroke} strokeWidth="2" />
          <path
            d="M4 7l8 6 8-6"
            stroke={stroke}
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <path
            d="M7 3h4l1 5-3 2c1 3 3 5 6 6l2-3 5 1v4c-9 2-17-6-15-15Z"
            stroke={stroke}
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "globe":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" stroke={stroke} strokeWidth="2" />
          <path d="M3 12h18" stroke={stroke} strokeWidth="2" />
          <path
            d="M12 3c2.5 2.8 2.5 15.2 0 18"
            stroke={stroke}
            strokeWidth="2"
          />
        </svg>
      );
    case "building":
      return (
        <svg {...common}>
          <path d="M6 21V5h12v16" stroke={stroke} strokeWidth="2" />
          <path
            d="M9 8h2M9 11h2M9 14h2M13 8h2M13 11h2M13 14h2"
            stroke={stroke}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "cloud":
      return (
        <svg {...common}>
          <path
            d="M7 18h10a4 4 0 0 0 0-8 6 6 0 0 0-11-1A4 4 0 0 0 7 18Z"
            stroke={stroke}
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "doc":
      return (
        <svg {...common}>
          <path d="M8 3h7l3 3v15H8V3Z" stroke={stroke} strokeWidth="2" />
          <path
            d="M10 12h6M10 15h6"
            stroke={muted}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" stroke={muted} strokeWidth="2" />
        </svg>
      );
  }
}
