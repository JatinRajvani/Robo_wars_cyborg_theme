import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Crosshair, Cpu, Swords, AlertTriangle } from "lucide-react";

const ROBOT_DATA = [
  {
    id: "titan_x",
    name: "TITAN X",
    class: "Heavy Assault Vanguard",
    avatar: "/robots/titan_x.png",
    accentColor: "#00ffff",
    glowColor: "rgba(0, 255, 255, 0.4)",
    stats: {
      combat: 98,
      ai: 92,
      power: 95,
      defense: 96,
      speed: 82,
    },
    weapons: ["Railgun MK-V", "Heavy Plasma Cutter", "Aegis Energy Shield"],
    description: "Built for pure frontline dominance. Titan X features experimental titanium-carbide plating and a fusion core reactor powering a tactical shielding matrix.",
    registry: "REG-808-V",
    aiCore: "NeuroGate v9.4 (Quantum Core)",
  },
  {
    id: "cyber_phantom",
    name: "CYBER PHANTOM",
    class: "Stealth Infiltrator & Scout",
    avatar: "/robots/cyber_phantom.png",
    accentColor: "#7b61ff",
    glowColor: "rgba(123, 97, 255, 0.4)",
    stats: {
      combat: 90,
      ai: 99,
      power: 92,
      defense: 80,
      speed: 98,
    },
    weapons: ["Optical Camouflage v3", "Kinetic Nano-Blades", "EMP Singularity Launcher"],
    description: "The peak of stealth engineering. Cyber Phantom utilizes a light-bending active cloaking mesh and a high-frequency disruption field to disable adversaries unseen.",
    registry: "REG-991-P",
    aiCore: "ApexMind v11.1 (Neural Net)",
  },
  {
    id: "inferno_mk2",
    name: "INFERNO MK-II",
    class: "Pyrotech Area-Denial Unit",
    avatar: "/robots/inferno_mk_ii.png",
    accentColor: "#ff4d00",
    glowColor: "rgba(255, 77, 0, 0.4)",
    stats: {
      combat: 96,
      ai: 88,
      power: 98,
      defense: 94,
      speed: 84,
    },
    weapons: ["Dual Thermite Cannons", "Incendiary Mines", "Heat-Dissipation Shields"],
    description: "Engineered for absolute thermal devastation. Inferno MK-II turns the arena into a scorched battlefield using pressurized molten napalm and magnetic thermal arrays.",
    registry: "REG-412-I",
    aiCore: "IgnisOS v3.8 (Heuristic)",
  },
  {
    id: "steel_reaper",
    name: "STEEL REAPER",
    class: "Aerial Laser Striker",
    avatar: "/robots/steel_reaper.png",
    accentColor: "#ffb700",
    glowColor: "rgba(255, 183, 0, 0.4)",
    stats: {
      combat: 94,
      ai: 95,
      power: 91,
      defense: 85,
      speed: 95,
    },
    weapons: ["Rotary Laser Cannon", "Micro-Missile Pods", "Holographic Decoys"],
    description: "An ultra-maneuverable hover unit capable of delivering surgical air strikes. Features quad vector-thrusters and a predictive tracking algorithm.",
    registry: "REG-017-R",
    aiCore: "SkyEye v6.2 (Autonomous)",
  },
];

export default function RobotSelector() {
  const [selectedRobot, setSelectedRobot] = useState(ROBOT_DATA[0]);

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
      {/* LEFT COLUMN: Avatar List (Selection Menu) */}
      <div className="lg:col-span-3 flex flex-row lg:flex-col gap-4 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 scrollbar-none">
        {ROBOT_DATA.map((robot) => {
          const isSelected = selectedRobot.id === robot.id;
          return (
            <button
              key={robot.id}
              onClick={() => setSelectedRobot(robot)}
              className={`flex-shrink-0 w-48 lg:w-full text-left p-4 rounded-lg transition-all duration-300 relative border clip-hud-card ${
                isSelected
                  ? "bg-[#0a0f1c]/90 border-t-2"
                  : "bg-[#0a0f1c]/40 border-slate-800 hover:border-slate-700 hover:bg-[#0a0f1c]/60"
              }`}
              style={{
                borderTopColor: isSelected ? robot.accentColor : "rgba(30, 41, 59, 1)",
                boxShadow: isSelected ? `0 0 20px ${robot.glowColor}` : "none",
              }}
            >
              {/* Highlight bar indicator */}
              {isSelected && (
                <div
                  className="absolute left-0 top-0 bottom-0 w-1"
                  style={{ backgroundColor: robot.accentColor }}
                />
              )}

              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded border border-slate-700 bg-slate-900 overflow-hidden flex-shrink-0">
                  <img
                    src={robot.avatar}
                    alt={robot.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <div>
                  <div className="font-orbitron font-bold text-xs tracking-wider text-white">
                    {robot.name}
                  </div>
                  <div className="font-rajdhani text-[10px] text-[#b8c1cc]/60 uppercase tracking-widest mt-0.5">
                    {robot.registry}
                  </div>
                </div>
              </div>

              {/* Status lights on cards */}
              <div className="absolute right-3 top-3 flex gap-1">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    backgroundColor: robot.accentColor,
                    boxShadow: `0 0 6px ${robot.accentColor}`,
                  }}
                />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
              </div>
            </button>
          );
        })}
      </div>

      {/* CENTER COLUMN: Large Cinematic Robot Display */}
      <div className="lg:col-span-5 relative cyber-glass rounded-xl overflow-hidden min-h-[400px] flex items-center justify-center p-6 border-slate-800">
        {/* Holographic frame bracket details */}
        <div className="corner-bracket absolute inset-0">
          <div className="corner-bottom" />
        </div>

        {/* Tactical HUD overlays */}
        <div className="absolute top-4 left-4 font-mono text-[9px] text-[#b8c1cc]/30 leading-none">
          SYSTEM_PREVIEW_3D // ACTIVE_FEED
        </div>
        <div className="absolute top-4 right-4 font-mono text-[9px] text-right text-[#b8c1cc]/30 leading-none">
          MODEL: {selectedRobot.registry}
        </div>

        {/* Selected Robot Image with Animated HUD Reticle behind */}
        <div className="relative w-full max-w-[320px] aspect-square flex items-center justify-center z-10">
          {/* Animated Tech Rings */}
          <div 
            className="absolute inset-0 border border-dashed rounded-full animate-hud-rotate"
            style={{ 
              borderColor: `${selectedRobot.accentColor}25`,
            }}
          />
          <div 
            className="absolute inset-6 border border-dotted rounded-full animate-hud-rotate" 
            style={{ 
              borderColor: `${selectedRobot.accentColor}30`, 
              animationDirection: "reverse" 
            }}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedRobot.id}
              initial={{ opacity: 0, scale: 0.85, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: -10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full h-full p-2 relative flex items-center justify-center"
            >
              <img
                src={selectedRobot.avatar}
                alt={selectedRobot.name}
                className="w-full h-full object-contain rounded-lg drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] filter brightness-105"
              />
              {/* Scanline element inside the hologram box */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#00ffff]/0 via-[#00ffff]/5 to-[#7b61ff]/0 opacity-30 mix-blend-overlay" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Diagnostic log overlays */}
        <div className="absolute bottom-4 left-4 right-4 flex justify-between font-mono text-[9px] text-[#b8c1cc]/40">
          <div>WEAPON_PODS: ONLINE</div>
          <div className="text-right">CALIBRATION: 100%</div>
        </div>
      </div>

      {/* RIGHT COLUMN: Robot Stats & Diagnostics */}
      <div className="lg:col-span-4 flex flex-col gap-6 justify-between">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedRobot.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-4"
          >
            {/* Robot Header */}
            <div>
              <div 
                className="font-rajdhani text-[11px] font-semibold uppercase tracking-widest"
                style={{ color: selectedRobot.accentColor }}
              >
                {selectedRobot.class}
              </div>
              <h3 className="font-orbitron font-black text-3xl text-white mt-1 tracking-tight">
                {selectedRobot.name}
              </h3>
              <p className="font-inter text-xs text-[#b8c1cc] leading-relaxed mt-2.5">
                {selectedRobot.description}
              </p>
            </div>

            {/* Performance Stats Panel */}
            <div className="cyber-glass rounded-lg p-4 border-slate-800">
              <div className="font-rajdhani text-[10px] text-[#b8c1cc]/40 tracking-wider mb-3 flex justify-between">
                <span>TACTICAL EVALUATION</span>
                <span>OS VERSION: 8.8.2</span>
              </div>
              
              <div className="flex flex-col gap-3">
                {/* Combat rating */}
                <div>
                  <div className="flex justify-between font-rajdhani text-xs font-semibold text-white mb-1">
                    <span className="flex items-center gap-1.5"><Swords className="w-3.5 h-3.5 text-rose-500" /> COMBAT RATING</span>
                    <span style={{ color: selectedRobot.accentColor }}>{selectedRobot.stats.combat}%</span>
                  </div>
                  <div className="h-1.5 bg-slate-900 rounded overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${selectedRobot.stats.combat}%` }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="h-full"
                      style={{ backgroundColor: selectedRobot.accentColor }}
                    />
                  </div>
                </div>

                {/* AI level */}
                <div>
                  <div className="flex justify-between font-rajdhani text-xs font-semibold text-white mb-1">
                    <span className="flex items-center gap-1.5"><Cpu className="w-3.5 h-3.5 text-cyan-400" /> COGNITIVE AI LEVEL</span>
                    <span style={{ color: selectedRobot.accentColor }}>{selectedRobot.stats.ai}%</span>
                  </div>
                  <div className="h-1.5 bg-slate-900 rounded overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${selectedRobot.stats.ai}%` }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="h-full"
                      style={{ backgroundColor: selectedRobot.accentColor }}
                    />
                  </div>
                </div>

                {/* Power score */}
                <div>
                  <div className="flex justify-between font-rajdhani text-xs font-semibold text-white mb-1">
                    <span className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5 text-yellow-400" /> POWER SCORE</span>
                    <span style={{ color: selectedRobot.accentColor }}>{selectedRobot.stats.power}%</span>
                  </div>
                  <div className="h-1.5 bg-slate-900 rounded overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${selectedRobot.stats.power}%` }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="h-full"
                      style={{ backgroundColor: selectedRobot.accentColor }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Weapon systems & Hardware details */}
            <div className="grid grid-cols-2 gap-4">
              <div className="cyber-glass rounded-lg p-3 border-slate-800 flex flex-col gap-2">
                <span className="font-rajdhani text-[10px] text-[#b8c1cc]/40 tracking-wider flex items-center gap-1">
                  <Crosshair className="w-3 h-3 text-[#00ffff]" /> WEAPON LOADOUT
                </span>
                <ul className="flex flex-col gap-1 font-mono text-[9px] text-[#b8c1cc]">
                  {selectedRobot.weapons.map((w, idx) => (
                    <li key={idx} className="flex items-center gap-1">
                      <span className="w-1 h-1 bg-[#00ffff] rounded-full" />
                      {w}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="cyber-glass rounded-lg p-3 border-slate-800 flex flex-col gap-2">
                <span className="font-rajdhani text-[10px] text-[#b8c1cc]/40 tracking-wider flex items-center gap-1">
                  <Cpu className="w-3 h-3 text-[#7b61ff]" /> NEURAL ARCHITECTURE
                </span>
                <div className="font-mono text-[9px] text-[#b8c1cc]">
                  <div className="truncate font-semibold">{selectedRobot.aiCore}</div>
                  <div className="text-[#b8c1cc]/40 mt-1">BUS_FREQ: 5.4 GHz</div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Tactical status warning alert */}
        <div className="cyber-glass rounded-lg p-3 border-amber-500/20 bg-amber-500/5 flex items-start gap-2.5">
          <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
          <div className="font-mono text-[9px] text-amber-200/80 leading-normal">
            <strong>ARENA COMBAT ADVISORY:</strong> Weapon systems have active thermal sensors. Calibrate fire suppressors before deployment. Direct laser combat requires Category 3 safety specs.
          </div>
        </div>
      </div>
    </div>
  );
}
