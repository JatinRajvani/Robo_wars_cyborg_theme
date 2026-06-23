import { useState, useEffect, useRef } from "react";
import { Activity, Terminal, Radio, Network } from "lucide-react";

// Predefined terminal log entries
const TERMINAL_MESSAGES = [
  "CONNECTING TO ARENA SERVER [NODE_ALPHA]...",
  "ESTABLISHING PROTOCOL QUANTUM_SECURE_V4...",
  "AI COMMAND: Initiating heuristic tactical mapping.",
  "TELEMETRY: Titan X core temperature rising (41°C).",
  "AI DECISION: Steel Reaper ordered to altitude 15m.",
  "TACTICAL ALERT: Active electromagnetic jamming detected in Sector C.",
  "TELEMETRY: Inferno MK-II fuel pressure nominal at 104.2 Bar.",
  "AI COMMAND: Recalibrating radar array parameters.",
  "NEURAL STRATEGY: Cyber Phantom cloaking index: 98.4%.",
  "SYSTEM STATUS: 4 combatants detected inside bounds.",
  "AI DECISION: Rerouting battery energy to main railgun capacitor.",
  "TELEMETRY: Steel Reaper target lock: 100%.",
  "TACTICAL WARNING: Kinetic barrier at 42% charge in Battle Zone 1.",
  "AI COMMAND: Execute defensive pattern Gamma-Delta.",
];

export default function CommandCenter() {
  const [logs, setLogs] = useState([
    "ROBOWARS OPERATING SYSTEM v2.026",
    "INITIALIZATION COMPLETE. WAITING FOR ARENA TELEMETRY...",
  ]);
  const [analyticsData, setAnalyticsData] = useState([40, 50, 45, 60, 55, 70, 65, 80, 75, 90, 85, 95, 80, 85, 90]);
  const [cpuLoad, setCpuLoad] = useState(48);
  const [netLatency, setNetLatency] = useState(4.2);
  const [coreIntegrity, setCoreIntegrity] = useState(100);
  const [activeFeeds, setActiveFeeds] = useState({
    droneFeed: true,
    neuralStrategy: true,
    sensorGrid: false,
  });

  const consoleRef = useRef(null);

  // Auto-scroll terminal log
  useEffect(() => {
    if (consoleRef.current) {
      consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
    }
  }, [logs]);

  // Telemetry updates simulation
  useEffect(() => {
    const timer = setInterval(() => {
      // Add new log message at random intervals
      if (Math.random() > 0.4) {
        const randomMsg = TERMINAL_MESSAGES[Math.floor(Math.random() * TERMINAL_MESSAGES.length)];
        const timestamp = new Date().toLocaleTimeString();
        setLogs((prev) => [...prev.slice(-30), `[${timestamp}] ${randomMsg}`]);
      }

      // Update charts data
      setAnalyticsData((prev) => {
        const nextVal = Math.max(10, Math.min(100, prev[prev.length - 1] + (Math.random() * 20 - 10)));
        return [...prev.slice(1), nextVal];
      });

      // Fluctuate CPU and Latency metrics
      setCpuLoad((prev) => Math.max(30, Math.min(95, Math.round(prev + (Math.random() * 10 - 5)))));
      setNetLatency((prev) => parseFloat(Math.max(1.5, Math.min(12, prev + (Math.random() * 1.6 - 0.8))).toFixed(1)));
      setCoreIntegrity((prev) => Math.max(85, Math.min(100, Math.round(prev + (Math.random() * 2 - 1)))));
    }, 1200);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full grid grid-cols-1 xl:grid-cols-3 gap-6 items-stretch">
      {/* COLUMN 1: Real-Time Battle Analytics (Fluctuating Telemetry Chart) */}
      <div className="cyber-glass rounded-xl p-5 border-slate-800 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-[#00ffff] animate-pulse" />
              <h3 className="font-orbitron font-bold text-sm tracking-wider text-white">
                BATTLE TELEMETRY
              </h3>
            </div>
            <span className="font-rajdhani text-[10px] bg-[#00ffff]/10 text-[#00ffff] px-2 py-0.5 rounded border border-[#00ffff]/20">
              LIVE
            </span>
          </div>

          <p className="font-inter text-xs text-[#b8c1cc] leading-relaxed mb-4">
            Continuous real-time tracking of thermal outputs and electrostatic barrier interference levels across all active combat sectors.
          </p>

          {/* SVG Telemetry Chart */}
          <div className="w-full h-32 bg-slate-950/60 rounded border border-slate-800/80 p-2 relative overflow-hidden flex items-end">
            <div className="absolute inset-0 cyber-grid-fine opacity-20 pointer-events-none" />
            <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
              <defs>
                <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00ffff" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#00ffff" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Area fill */}
              <path
                d={`M 0 40 ${analyticsData
                  .map((val, idx) => `L ${(idx / (analyticsData.length - 1)) * 100} ${40 - val * 0.35}`)
                  .join(" ")} L 100 40 Z`}
                fill="url(#chartGlow)"
              />

              {/* Line path */}
              <path
                d={analyticsData
                  .map((val, idx) => `${idx === 0 ? "M" : "L"} ${(idx / (analyticsData.length - 1)) * 100} ${40 - val * 0.35}`)
                  .join(" ")}
                fill="none"
                stroke="#00ffff"
                strokeWidth="1"
                className="drop-shadow-[0_0_4px_#00ffff]"
              />
            </svg>
            <div className="absolute top-2 left-2 text-[8px] font-mono text-[#b8c1cc]/40">AMP_Y: SIG_LEVEL</div>
          </div>
        </div>

        {/* Diagnostic readings grid */}
        <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-slate-800/60">
          <div className="bg-slate-950/40 p-2 rounded text-center">
            <div className="font-mono text-[9px] text-[#b8c1cc]/40">BANDWIDTH</div>
            <div className="font-rajdhani text-sm font-bold text-white mt-1">948 Mbps</div>
          </div>
          <div className="bg-slate-950/40 p-2 rounded text-center">
            <div className="font-mono text-[9px] text-[#b8c1cc]/40">LATENCY</div>
            <div className="font-rajdhani text-sm font-bold text-[#00ffff] mt-1">{netLatency} ms</div>
          </div>
          <div className="bg-slate-950/40 p-2 rounded text-center">
            <div className="font-mono text-[9px] text-[#b8c1cc]/40">PACKET_LOSS</div>
            <div className="font-rajdhani text-sm font-bold text-rose-500 mt-1">0.00%</div>
          </div>
        </div>
      </div>

      {/* COLUMN 2: Neural Strategy & AI Monitor (Command Console) */}
      <div className="cyber-glass rounded-xl p-5 border-slate-800 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#7b61ff]" />
              <h3 className="font-orbitron font-bold text-sm tracking-wider text-white">
                TACTICAL COMMAND FEED
              </h3>
            </div>
            <span className="font-mono text-[8px] text-[#7b61ff]/60 tracking-widest uppercase">
              STREAM://AUTH_08
            </span>
          </div>

          <p className="font-inter text-xs text-[#b8c1cc] leading-relaxed mb-4">
            Secure algorithmic shell monitoring robotic sub-system decisions and neural strategy routing models during active battle drills.
          </p>

          {/* Audio Equalizer visualizer */}
          <div className="flex items-end justify-between h-12 bg-slate-950/60 rounded border border-slate-800/80 p-2.5 mb-4 relative overflow-hidden">
            <div className="absolute inset-0 cyber-grid-fine opacity-10" />
            <div className="absolute top-1 left-2 text-[7px] font-mono text-[#7b61ff]/60 tracking-wider">CYBORG_VOICE_OUT // ANALYZING_WAV</div>
            {Array.from({ length: 28 }).map((_, idx) => (
              <div
                key={idx}
                className="w-[3px] bg-[#7b61ff] rounded-t-sm"
                style={{
                  height: '25%',
                  backgroundColor: idx % 4 === 0 ? '#00ffff' : idx % 2 === 0 ? '#7b61ff' : '#ff4d00',
                  animation: `eq-bar-anim ${0.6 + (idx % 5) * 0.15}s ease-in-out infinite alternate`,
                  animationDelay: `${idx * 0.04}s`
                }}
              />
            ))}
          </div>

          {/* Terminal Console */}
          <div ref={consoleRef} className="w-full h-36 bg-slate-950/90 rounded border border-slate-800/80 p-3 font-mono text-[10px] text-[#b8c1cc] overflow-y-auto flex flex-col gap-1.5 scrollbar-thin select-none">
            {logs.map((log, index) => (
              <div key={index} className="leading-relaxed border-l-2 pl-2 border-slate-800 hover:border-[#7b61ff]/50">
                {log.includes("ALERT") || log.includes("WARNING") ? (
                  <span className="text-amber-400">{log}</span>
                ) : log.includes("AI DECISION") ? (
                  <span className="text-[#00ffff]">{log}</span>
                ) : (
                  <span>{log}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Network & Node mapping simulation */}
        <div className="mt-4 pt-4 border-t border-slate-800/60 flex justify-between items-center text-xs font-mono">
          <div className="flex items-center gap-2 text-[#7b61ff]">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>TRANSMITTING FREQ...</span>
          </div>
          <span className="text-[10px] text-[#b8c1cc]/40">BUFFER: OK</span>
        </div>
      </div>

      {/* COLUMN 3: Cyborg Command Vitals (AI Core Monitoring) */}
      <div className="cyber-glass rounded-xl p-5 border-slate-800 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
            <div className="flex items-center gap-2">
              <Network className="w-4 h-4 text-[#7b61ff]" />
              <h3 className="font-orbitron font-bold text-sm tracking-wider text-white">
                SYS INTEGRATION PANEL
              </h3>
            </div>
            <span className="font-mono text-[9px] text-[#b8c1cc]/40">CYBORG_CORE: ON</span>
          </div>

          <p className="font-inter text-xs text-[#b8c1cc] leading-relaxed mb-4">
            Main node grid settings. Access sub-system override toggles and monitor global hardware capacity allocations.
          </p>

          {/* Vitals & System load progress bars */}
          <div className="flex flex-col gap-3.5">
            <div>
              <div className="flex justify-between text-xs font-rajdhani font-semibold text-[#b8c1cc] mb-1">
                <span>TACTICAL COMPUTATION CORES</span>
                <span className="text-white font-mono">{cpuLoad}%</span>
              </div>
              <div className="h-1.5 bg-slate-900 rounded overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#7b61ff] to-[#00ffff] transition-all duration-500"
                  style={{ width: `${cpuLoad}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-rajdhani font-semibold text-[#b8c1cc] mb-1">
                <span>SIGNAL SYNAPSE SYNCHRONIZATION</span>
                <span className="text-white font-mono">{coreIntegrity}%</span>
              </div>
              <div className="h-1.5 bg-slate-900 rounded overflow-hidden">
                <div
                  className="h-full bg-[#00ffff] transition-all duration-500"
                  style={{ width: `${coreIntegrity}%` }}
                />
              </div>
            </div>
          </div>

          {/* Sonar Radar sweep panel */}
          <div className="mt-4 pt-4 border-t border-slate-800/60 flex items-center gap-4">
            {/* Circular Radar Scan */}
            <div className="relative w-20 h-20 rounded-full border border-[#00ffff]/20 bg-slate-950/70 flex items-center justify-center overflow-hidden flex-shrink-0">
              <div className="absolute inset-0 cyber-grid-fine opacity-15" />
              {/* Concentric rings */}
              <div className="absolute inset-3 border border-dashed border-[#00ffff]/15 rounded-full" />
              <div className="absolute inset-6 border border-dotted border-[#00ffff]/25 rounded-full" />
              {/* Scanning sweep */}
              <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-gradient-to-t from-transparent via-[#00ffff]/45 to-[#00ffff] origin-bottom -translate-x-1/2 animate-hud-rotate" />
              {/* Flickering blips */}
              <div className="absolute w-1.5 h-1.5 rounded-full bg-[#00ffff] shadow-[0_0_6px_#00ffff] animate-pulse" style={{ top: '25%', left: '30%' }} />
              <div className="absolute w-1.5 h-1.5 rounded-full bg-[#7b61ff] shadow-[0_0_6px_#7b61ff] animate-ping" style={{ bottom: '30%', right: '25%', animationDuration: '3s' }} />
            </div>

            {/* Sonar Readout */}
            <div className="flex-1 font-mono text-[8px] text-[#b8c1cc]/60 flex flex-col gap-1 leading-normal">
              <div className="text-[#00ffff] font-bold tracking-widest uppercase">AI_ARENA_SCANNER V1.0</div>
              <div className="flex justify-between border-b border-slate-900 pb-0.5">
                <span>[TGT_01] TITAN_X</span> <span className="text-[#00ffff] font-bold">LOCK_OK</span>
              </div>
              <div className="flex justify-between border-b border-slate-900 pb-0.5">
                <span>[TGT_02] CYBER_PHANTOM</span> <span className="text-[#7b61ff]">STEALTH_INDEX_99%</span>
              </div>
              <div className="flex justify-between">
                <span>[TGT_03] STEEL_REAPER</span> <span className="text-amber-400">ALTITUDE_15M</span>
              </div>
            </div>
          </div>
        </div>

        {/* CSS Keyframes for Equalizer */}
        <style>{`
          @keyframes eq-bar-anim {
            0% { height: 15%; }
            100% { height: 90%; }
          }
        `}</style>

        {/* Dashboard Feed Controls */}
        <div className="mt-4 pt-4 border-t border-slate-800/60 flex flex-col gap-2.5">
          <div className="text-[10px] font-mono text-[#b8c1cc]/40 uppercase tracking-wider">Tactical Feeds Toggles</div>
          <div className="grid grid-cols-3 gap-2">
            {Object.keys(activeFeeds).map((feedKey) => (
              <button
                key={feedKey}
                onClick={() =>
                  setActiveFeeds((prev) => ({
                    ...prev,
                    [feedKey]: !prev[feedKey],
                  }))
                }
                className={`py-1.5 px-1 text-[9px] font-mono rounded text-center transition-all duration-200 border cursor-pointer select-none ${
                  activeFeeds[feedKey]
                    ? "bg-[#7b61ff]/15 border-[#7b61ff]/50 text-white font-bold"
                    : "bg-slate-950/60 border-slate-800 text-[#b8c1cc]/40 hover:border-slate-700"
                }`}
              >
                {feedKey.replace(/([A-Z])/g, "_$1").toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
