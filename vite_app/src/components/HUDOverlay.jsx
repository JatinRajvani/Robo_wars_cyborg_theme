import { useEffect, useState, useRef } from "react";

export default function HUDOverlay() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [particles] = useState(() => 
    Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100 + 100, // Start below screen
      size: Math.random() * 3 + 1,
      speed: Math.random() * 1.5 + 0.5,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.7 + 0.3,
    }))
  );
  const containerRef = useRef(null);

  // Track mouse coordinates
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-40 overflow-hidden"
    >
      {/* Mouse follow radial glow background */}
      <div 
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px] transition-all duration-300 ease-out opacity-25"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, #00ffff 0%, #7b61ff 60%, transparent 100%)",
        }}
      />

      {/* Grid Scanline sweeping line */}
      <div className="absolute inset-0 bg-transparent pointer-events-none overflow-hidden">
        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#00ffff]/20 to-transparent animate-scanline-move shadow-[0_0_8px_#00ffff]" />
      </div>

      {/* Floating cyber particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-[#00ffff] shadow-[0_0_6px_#00ffff]"
            style={{
              left: `${p.x}%`,
              bottom: `-20px`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              opacity: p.opacity,
              animation: `float-particle ${8 + p.speed * 4}s linear infinite`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Top Left Status Ring */}
      <div className="absolute top-6 left-8 font-rajdhani text-xs tracking-[0.2em] text-[#00ffff]/60 flex flex-col gap-1 select-none hidden md:flex">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>LINK STATE: SECURE [NODE_08]</span>
        </div>
        <div className="font-mono text-[9px] text-[#b8c1cc]/40">SYS_TEMP: 38.4°C // VOLTAGE: OK</div>
      </div>

      {/* Top Right Coordinate HUD */}
      <div className="absolute top-6 right-8 font-mono text-[10px] text-[#7b61ff]/60 text-right select-none hidden md:flex flex-col gap-0.5">
        <div>COORDINATES // X: {Math.round(mousePos.x)} | Y: {Math.round(mousePos.y)}</div>
        <div className="tracking-wider text-[#b8c1cc]/30">ROBOWARS_OS V2.026</div>
      </div>

      {/* Bottom Left Frame Elements */}
      <div className="absolute bottom-8 left-8 select-none hidden lg:flex items-end gap-3 text-[#00ffff]/30">
        <div className="h-10 w-[1px] bg-gradient-to-t from-[#00ffff]/60 to-transparent" />
        <div className="font-rajdhani text-xs tracking-widest leading-none">
          <div className="text-[#00ffff]/70 font-semibold mb-1">ARENA LINK: OK</div>
          <div className="text-[10px] text-[#b8c1cc]/40">TELEM_LATENCY: 4.8ms</div>
        </div>
      </div>

      {/* Bottom Right HUD Bracket */}
      <div className="absolute bottom-8 right-8 select-none hidden lg:flex items-end gap-3 text-[#7b61ff]/40">
        <div className="font-rajdhani text-xs tracking-widest text-right leading-none">
          <div className="text-[#7b61ff]/70 font-semibold mb-1">AI STRATEGY NODE</div>
          <div className="text-[10px] text-[#b8c1cc]/40">SYNCING_DATA_STREAM</div>
        </div>
        <div className="h-10 w-[1px] bg-gradient-to-t from-[#7b61ff]/60 to-transparent" />
      </div>

      {/* Global particle vertical translation keyframe style */}
      <style>{`
        @keyframes float-particle {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          90% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-110vh) translateX(50px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
