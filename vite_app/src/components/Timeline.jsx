import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Calendar, Cpu, Trophy, Swords, Zap, Users } from "lucide-react";

const TIMELINE_STEPS = [
  {
    phase: "PHASE 01",
    title: "Registration Opens",
    date: "JULY 15, 2026",
    description: "Form your teams, draft technical blueprints, and submit robot CAD specifications. Early registration grants access to official simulator packages.",
    icon: Users,
    color: "#00ffff",
  },
  {
    phase: "PHASE 02",
    title: "Qualification Round",
    date: "SEP 01, 2026",
    description: "Virtual AI testing and arena compliance certification. Teams must pass core locomotion, weapon safety loops, and wireless link sanity audits.",
    icon: Cpu,
    color: "#7b61ff",
  },
  {
    phase: "PHASE 03",
    title: "Regional Battles",
    date: "OCT 10, 2026",
    description: "Zonal offline arenas in metropolitan clusters. Double-elimination format, leading to top regional contenders advancing to the finals pool.",
    icon: Swords,
    color: "#00ffff",
  },
  {
    phase: "PHASE 04",
    title: "Semi Finals",
    date: "NOV 10, 2026",
    description: "The elite 16 custom-built battle robots face off under standard double-elimination parameters in a high-intensity closed stadium format.",
    icon: Zap,
    color: "#7b61ff",
  },
  {
    phase: "PHASE 05",
    title: "National Championship",
    date: "DEC 06, 2026",
    description: "Main stadium combats with fully active hazard gates, pit traps, and aerial drone intervention zones. National broadcast coverage starts.",
    icon: Swords,
    color: "#00ffff",
  },
  {
    phase: "PHASE 06",
    title: "Grand Finale",
    date: "DEC 23, 2026",
    description: "The ultimate automated warfare showdown. Winners take home the ROBO WARS championship trophy, elite industry sponsorships, and the grand prize pool.",
    icon: Trophy,
    color: "#ffb700",
  },
];

export default function Timeline() {
  const containerRef = useRef(null);

  // Track scroll position of the timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  // Smooth out progress value
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const indicatorTop = useTransform(scaleY, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative w-full max-w-4xl mx-auto py-12 px-4 md:px-0">
      {/* Central Progress Line */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-900 -translate-x-1/2">
        <motion.div
          className="absolute top-0 bottom-0 left-0 right-0 origin-top bg-gradient-to-b from-[#00ffff] via-[#7b61ff] to-[#ffb700]"
          style={{ scaleY }}
        />
        {/* Glowing circuit traveler signal dot */}
        <motion.div
          className="absolute w-3 h-3 rounded-full bg-[#00ffff] -translate-x-1/2 z-20 pointer-events-none"
          style={{
            top: indicatorTop,
            boxShadow: "0 0 8px #00ffff, 0 0 16px #00ffff",
          }}
        />
      </div>

      {/* Timeline Steps */}
      <div className="flex flex-col gap-12 md:gap-16">
        {TIMELINE_STEPS.map((step, idx) => {
          const Icon = step.icon;
          const isEven = idx % 2 === 0;

          return (
            <div
              key={idx}
              className={`flex flex-col md:flex-row items-start md:items-center relative w-full ${
                isEven ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Left/Right Card */}
              <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="cyber-glass p-5 md:p-6 rounded-xl border-slate-800/80 hover:border-slate-700/80 transition-all duration-300 relative group overflow-hidden"
                >
                  {/* Subtle hover gradient */}
                  <div 
                    className="absolute -right-24 -top-24 w-48 h-48 rounded-full blur-[80px] opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                    style={{ backgroundColor: step.color }}
                  />

                  {/* Corner Accent Brackets */}
                  <div className="corner-bracket-purple">
                    <div className="corner-bracket absolute inset-0 opacity-40 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="corner-bottom" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="flex items-center justify-between gap-4 border-b border-slate-800/60 pb-3 mb-3">
                    <div>
                      <span 
                        className="font-rajdhani text-[10px] font-bold tracking-widest uppercase"
                        style={{ color: step.color }}
                      >
                        {step.phase}
                      </span>
                      <h4 className="font-orbitron font-bold text-base text-white tracking-wide mt-0.5">
                        {step.title}
                      </h4>
                    </div>
                    <div 
                      className="p-2 rounded border border-slate-800 bg-slate-900/60 group-hover:border-[#00ffff]/30 group-hover:shadow-[0_0_8px_rgba(0,255,255,0.15)] transition-all duration-300"
                      style={{ color: step.color }}
                    >
                      <Icon className="w-4 h-4 group-hover:rotate-[360deg] transition-transform duration-700 ease-out" />
                    </div>
                  </div>

                  <p className="font-inter text-xs text-[#b8c1cc] leading-relaxed">
                    {step.description}
                  </p>

                  <div className="mt-4 flex items-center gap-1.5 font-mono text-[9px] text-[#b8c1cc]/50">
                    <Calendar className="w-3 h-3" />
                    <span>CAL_EST: {step.date}</span>
                  </div>
                </motion.div>
              </div>

              {/* Node Dot on the timeline */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-6 h-6 flex items-center justify-center z-10">
                <motion.div
                  initial={{ scale: 0.6, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="w-3.5 h-3.5 rounded-full border bg-slate-950 transition-all duration-300"
                  style={{
                    borderColor: step.color,
                    boxShadow: `0 0 10px ${step.color}`,
                  }}
                  whileHover={{ scale: 1.3 }}
                />
              </div>

              {/* Date Column on opposite side */}
              <div className="hidden md:block w-1/2 px-8 text-right font-orbitron font-extrabold text-sm tracking-wider text-[#b8c1cc]/20 group-hover:text-[#b8c1cc]/40 select-none">
                {step.date}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
