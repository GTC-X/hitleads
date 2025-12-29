import React, { useMemo, useState } from "react";

/**
 * Pixel-style radial "APPs" hub with hover tooltips (Tailwind only)
 * - Center red node
 * - 12 outer nodes with light gray circles + connector lines
 * - Hover any node => tooltip near that node (like screenshot)
 *
 * Tip: Replace labels/content with your real Chinese copy.
 */
export default function AppsRadialMap() {
  const [activeId, setActiveId] = useState(null);

  // 12 nodes around a circle (degrees + small radius tweaks for organic look)
  const nodes = useMemo(
    () => [
      { id: "n1", label: "文案1", deg: 18, r: 220, tooltip: "影响汇率的因素包括：宏观经济数据、政策预期、风险情绪等。", tipAlign: "right" },
      { id: "n2", label: "文案1", deg: 50, r: 205, tooltip: "示例说明文字，可替换为真实内容。", tipAlign: "right" },
      { id: "n3", label: "文案1", deg: 85, r: 210, tooltip: "示例说明文字，可替换为真实内容。", tipAlign: "right" },
      { id: "n4", label: "文案1", deg: 122, r: 220, tooltip: "示例说明文字，可替换为真实内容。", tipAlign: "bottom" },
      { id: "n5", label: "文案1", deg: 155, r: 200, tooltip: "示例说明文字，可替换为真实内容。", tipAlign: "left" },
      { id: "n6", label: "文案1", deg: 190, r: 215, tooltip: "示例说明文字，可替换为真实内容。", tipAlign: "left" },
      { id: "n7", label: "文案1", deg: 220, r: 210, tooltip: "示例说明文字，可替换为真实内容。", tipAlign: "left" },
      { id: "n8", label: "文案1", deg: 252, r: 225, tooltip: "示例说明文字，可替换为真实内容。", tipAlign: "bottom" },
      { id: "n9", label: "文案1", deg: 285, r: 210, tooltip: "示例说明文字，可替换为真实内容。", tipAlign: "right" },
      { id: "n10", label: "文案1", deg: 315, r: 220, tooltip: "示例说明文字，可替换为真实内容。", tipAlign: "right" },
      { id: "n11", label: "文案1", deg: 345, r: 205, tooltip: "示例说明文字，可替换为真实内容。", tipAlign: "right" },
      { id: "n12", label: "文案1", deg: 0, r: 235, tooltip: "示例说明文字，可替换为真实内容。", tipAlign: "right" },
    ],
    []
  );

  const center = { x: 420, y: 200 }; // tuned to match screenshot composition
  const centerRadius = 64;

  const polarToXY = (deg, r) => {
    const rad = (deg * Math.PI) / 180;
    return {
      x: center.x + Math.cos(rad) * r,
      y: center.y + Math.sin(rad) * r,
    };
  };

  const activeNode = nodes.find((n) => n.id === activeId);

  return (
    <section className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Canvas */}
        <div className="relative h-[420px] w-full overflow-hidden rounded-[6px] bg-white">
          {/* soft background vignette */}
          <div className="pointer-events-none absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-[#F4FBFF]" />
          <div className="pointer-events-none absolute -left-20 -top-20 h-[420px] w-[420px] rounded-full bg-[#F7FBFF]" />

          {/* SVG lines + circles */}
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 900 420">
            {/* connector lines */}
            {nodes.map((n) => {
              const p = polarToXY(n.deg, n.r);
              // line ends slightly before outer circle edge
              const endX = center.x + (p.x - center.x) * 0.85;
              const endY = center.y + (p.y - center.y) * 0.85;

              return (
                <line
                  key={`l-${n.id}`}
                  x1={center.x}
                  y1={center.y}
                  x2={endX}
                  y2={endY}
                  stroke="#E9E9E9"
                  strokeWidth="2"
                />
              );
            })}

            {/* center */}
            <circle cx={center.x} cy={center.y} r={centerRadius} fill="#F04B4B" />
            <text
              x={center.x}
              y={center.y - 6}
              textAnchor="middle"
              fontSize="18"
              fontWeight="700"
              fill="#FFFFFF"
              fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto"
            >
              APPS
            </text>
            <text
              x={center.x}
              y={center.y + 18}
              textAnchor="middle"
              fontSize="10"
              fontWeight="500"
              fill="#FFECEC"
              fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto"
            >
              尽享多终端交易
            </text>

            {/* outer circles */}
            {nodes.map((n) => {
              const p = polarToXY(n.deg, n.r);
              return (
                <g key={`c-${n.id}`}>
                  <circle
                    cx={p.x}
                    cy={p.y}
                    r="32"
                    fill="#FFFFFF"
                    stroke={activeId === n.id ? "#DADADA" : "#EFEFEF"}
                    strokeWidth="2"
                  />
                  <circle
                    cx={p.x}
                    cy={p.y}
                    r="31"
                    fill="none"
                    stroke="#F7F7F7"
                    strokeWidth="2"
                  />
                </g>
              );
            })}
          </svg>

          {/* Interactive hover zones + labels */}
          {nodes.map((n) => {
            const p = polarToXY(n.deg, n.r);
            return (
              <div
                key={n.id}
                className="absolute"
                style={{ left: p.x, top: p.y, transform: "translate(-50%, -50%)" }}
                onMouseEnter={() => setActiveId(n.id)}
                onMouseLeave={() => setActiveId(null)}
              >
                {/* invisible hit area */}
                <button
                  type="button"
                  className="group relative flex h-[70px] w-[70px] items-center justify-center rounded-full focus:outline-none"
                  aria-label={n.label}
                >
                  {/* subtle hover ring */}
                  <span className="pointer-events-none absolute inset-0 rounded-full ring-0 ring-[#E3E3E3] transition group-hover:ring-2" />
                </button>

                {/* label under dot */}
                <div className="mt-2 text-center text-[10px] text-[#7B7B7B]">
                  {n.label}
                </div>
              </div>
            );
          })}

          {/* Tooltip (single) */}
          {activeNode && (() => {
            const p = polarToXY(activeNode.deg, activeNode.r);
            const align = activeNode.tipAlign || "right";

            const pos = (() => {
              // default: top-right of node
              if (align === "right") return { left: p.x + 55, top: p.y - 55 };
              if (align === "left") return { left: p.x - 260, top: p.y - 55 };
              if (align === "bottom") return { left: p.x - 110, top: p.y + 55 };
              return { left: p.x + 55, top: p.y - 55 };
            })();

            return (
              <div
                className="absolute z-20"
                style={{ left: pos.left, top: pos.top }}
              >
                <div className="w-[240px] rounded-[6px] bg-[#F3C44E] px-4 py-3 text-[10px] leading-[1.55] text-[#3D2E17] shadow-[0_12px_26px_rgba(0,0,0,0.12)]">
                  {activeNode.tooltip}
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    </section>
  );
}
