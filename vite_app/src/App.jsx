import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Swords, Cpu, Trophy, Play, Download, Menu, X, 
  CheckCircle, Target, Radio, Sparkles, MessageCircle
} from "lucide-react";
import HUDOverlay from "./components/HUDOverlay";
import RobotSelector from "./components/RobotSelector";
import CommandCenter from "./components/CommandCenter";
import Timeline from "./components/Timeline";
import AnimatedCounter from "./components/AnimatedCounter";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [trailerOpen, setTrailerOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [selectedArenaPart, setSelectedArenaPart] = useState("center");
  
  // Registration form state
  const [formData, setFormData] = useState({
    teamName: "",
    leaderName: "",
    college: "",
    category: "Robot Combat Arena",
  });
  const [isRegistered, setIsRegistered] = useState(false);
  const [generatedPassId, setGeneratedPassId] = useState("");

  const arenaDetails = {
    center: {
      title: "Tactical Combat Hub (Center)",
      hazardLevel: "MAXIMUM (Class 5)",
      description: "The primary combat ring. Built from reinforced steel-mesh plating over a high-induction charging system. Features pressure-sensitive hazard tiles and central rotating grinders.",
      dimensions: "15m x 15m Octagon",
      systemStatus: "ONLINE [SAFE_LOOP_ACTIVE]",
    },
    shields: {
      title: "Energy Wall Barriers",
      hazardLevel: "HIGH (Class 3)",
      description: "Electro-magnetic force field generators positioned around the perimeter. Absorbs impact kinetic energy and deflects projectile debris back into the combat zone.",
      dimensions: "3m Height Barrier Grid",
      systemStatus: "ACTIVE [CAP_LEVEL: 98.4%]",
    },
    hazards: {
      title: "Thermal Hazard Gates",
      hazardLevel: "CRITICAL (Class 5)",
      description: "Automated flame traps and pneumatic pit hazards. Controlled by the cyborg coordinator's AI core to punish idle robots and force high-speed engagement.",
      dimensions: "4x Zonal Outlets",
      systemStatus: "STANDBY [READY_TO_FIRE]",
    },
    drones: {
      title: "Drone Aerial Grid",
      hazardLevel: "MODERATE (Class 2)",
      description: "Ceiling-mounted electromagnetic guide rails for the Drone Warfare League. Facilitates 3D tactical flight path mapping and real-time recharging nodes.",
      dimensions: "10m Clearance Height",
      systemStatus: "MONITORING [8 NODES ONLINE]",
    },
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (!formData.teamName || !formData.leaderName || !formData.college) return;
    
    // Simulate generation of register code
    const uniqueId = `RW-${Math.floor(Math.random() * 90000 + 10000)}-${formData.category.slice(0, 3).toUpperCase()}`;
    setGeneratedPassId(uniqueId);
    setIsRegistered(true);
  };

  return (
    <div className="bg-[#050816] text-white min-h-screen relative font-inter overflow-hidden">
      {/* 1. HUD & Glowing Background effects */}
      <HUDOverlay />
      
      {/* 2. Glassmorphic Fixed Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#050816]/70 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded bg-gradient-to-br from-[#00ffff] to-[#7b61ff] flex items-center justify-center p-[1px] shadow-[0_0_15px_rgba(0,255,255,0.4)]">
              <div className="w-full h-full bg-[#050816] rounded-[3px] flex items-center justify-center">
                <Swords className="w-4 h-4 text-[#00ffff] group-hover:rotate-12 transition-transform" />
              </div>
            </div>
            <span className="font-orbitron font-black tracking-wider text-sm md:text-base text-white">
              ROBO<span className="text-[#00ffff]">WARS</span>
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 font-rajdhani text-xs tracking-[0.2em] font-semibold text-[#b8c1cc]/80">
            <a href="#categories" className="hover:text-white transition-colors uppercase">Categories</a>
            <a href="#robots" className="hover:text-white transition-colors uppercase">Featured Robots</a>
            <a href="#arena" className="hover:text-white transition-colors uppercase">The Arena</a>
            <a href="#dashboard" className="hover:text-white transition-colors uppercase">Command Center</a>
            <a href="#timeline" className="hover:text-white transition-colors uppercase">Timeline</a>
            <a href="#stats" className="hover:text-white transition-colors uppercase">Stats</a>
          </nav>

          {/* Register CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => {
                setIsRegistered(false);
                setFormData({ teamName: "", leaderName: "", college: "", category: "Robot Combat Arena" });
                setRegisterOpen(true);
              }}
              className="px-5 py-2 font-rajdhani text-xs font-bold tracking-widest text-[#050816] bg-[#00ffff] rounded shadow-[0_0_15px_rgba(0,255,255,0.4)] hover:shadow-[0_0_25px_rgba(0,255,255,0.8)] transition-all duration-300 border border-[#00ffff] hover:scale-105 active:scale-95 cursor-pointer"
            >
              REGISTER TEAM
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-[#00ffff] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="lg:hidden absolute top-20 left-0 right-0 bg-[#050816]/95 border-b border-slate-800 p-6 flex flex-col gap-6 font-rajdhani text-sm tracking-widest font-semibold text-[#b8c1cc]/80 shadow-2xl"
            >
              <a href="#categories" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors py-1">CATEGORIES</a>
              <a href="#robots" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors py-1">FEATURED ROBOTS</a>
              <a href="#arena" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors py-1">THE ARENA</a>
              <a href="#dashboard" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors py-1">COMMAND CENTER</a>
              <a href="#timeline" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors py-1">TIMELINE</a>
              <a href="#stats" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors py-1">STATS</a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setRegisterOpen(true);
                }}
                className="w-full py-3 text-center bg-[#00ffff] text-[#050816] font-bold rounded shadow-lg"
              >
                REGISTER TEAM
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* 3. HERO SECTION */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Cinematic Video Loop */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/Initial_Scene_-_2026-06-23_202606231204.mp4" type="video/mp4" />
          </video>
          {/* Dark cinematic overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050816]/75 via-[#050816]/65 to-[#050816]" />
          <div className="absolute inset-0 bg-[#050816]/20 backdrop-blur-[1px]" />
          {/* Subtle grid backdrop overlay */}
          <div className="absolute inset-0 cyber-grid-fine opacity-20 pointer-events-none" />
        </div>

        {/* Hero Content Box */}
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#00ffff]/20 bg-[#00ffff]/5 font-rajdhani text-[11px] font-bold tracking-[0.2em] text-[#00ffff] uppercase mb-8 shadow-[0_0_15px_rgba(0,255,255,0.08)]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ffff] animate-pulse" />
            India's Largest Robotics Championship
          </motion.div>

          {/* Main Title Heading */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-orbitron font-black text-5xl md:text-8xl tracking-tight text-white leading-none text-shadow-cyan select-none"
          >
            ROBO WARS <span className="text-[#00ffff]">2026</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-orbitron font-black text-xl md:text-3xl tracking-[0.4em] uppercase text-[#7b61ff] mt-5 mb-6"
          >
            BUILD. BATTLE. DOMINATE.
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-2xl font-inter text-xs md:text-sm text-[#b8c1cc] leading-relaxed mb-10"
          >
            Step into the future of robotics and engineering. Witness elite combat robots, AI-powered machines, and the most advanced robotics championship ever created.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <button
              onClick={() => {
                setIsRegistered(false);
                setFormData({ teamName: "", leaderName: "", college: "", category: "Robot Combat Arena" });
                setRegisterOpen(true);
              }}
              className="px-8 py-3.5 bg-gradient-to-r from-[#00ffff] to-[#7b61ff] text-[#050816] font-rajdhani font-bold text-xs tracking-widest rounded shadow-[0_0_20px_rgba(0,255,255,0.4)] hover:shadow-[0_0_35px_rgba(123,97,255,0.7)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 uppercase cursor-pointer"
            >
              Register Team
            </button>
            <button
              onClick={() => setTrailerOpen(true)}
              className="px-8 py-3.5 bg-slate-900/60 border border-slate-700/80 text-white font-rajdhani font-bold text-xs tracking-widest rounded hover:bg-slate-800/60 transition-all duration-300 flex items-center justify-center gap-2 uppercase hover:border-[#00ffff]/40 cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 text-[#00ffff] fill-[#00ffff]/20" />
              Watch Trailer
            </button>
          </motion.div>
        </div>

        {/* Below Hero Quick Stats Overlay */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/5 bg-gradient-to-t from-[#050816] to-transparent py-8">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="font-orbitron font-black text-2xl md:text-3xl text-[#00ffff]">
                <AnimatedCounter end={500} suffix="+" />
              </div>
              <div className="font-rajdhani text-[10px] text-[#b8c1cc]/50 uppercase tracking-[0.2em] mt-1">Teams</div>
            </div>
            <div>
              <div className="font-orbitron font-black text-2xl md:text-3xl text-white">
                <AnimatedCounter end={100} suffix="+" />
              </div>
              <div className="font-rajdhani text-[10px] text-[#b8c1cc]/50 uppercase tracking-[0.2em] mt-1">Colleges</div>
            </div>
            <div>
              <div className="font-orbitron font-black text-2xl md:text-3xl text-[#7b61ff]">
                <AnimatedCounter end={500000} prefix="₹" />
              </div>
              <div className="font-rajdhani text-[10px] text-[#b8c1cc]/50 uppercase tracking-[0.2em] mt-1">Prize Pool</div>
            </div>
            <div>
              <div className="font-orbitron font-black text-2xl md:text-3xl text-white">
                <AnimatedCounter end={10000} suffix="+" />
              </div>
              <div className="font-rajdhani text-[10px] text-[#b8c1cc]/50 uppercase tracking-[0.2em] mt-1">Participants</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION 2 — EVENT CATEGORIES */}
      <section id="categories" className="py-24 bg-[#0a0f1c]/50 relative">
        <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-rajdhani text-xs font-bold tracking-[0.25em] text-[#00ffff] uppercase">ARENA DISCIPLINES</span>
            <h2 className="font-orbitron font-black text-3xl md:text-5xl text-white tracking-tight mt-2.5">
              EVENT CATEGORIES
            </h2>
            <div className="w-12 h-[2px] bg-[#7b61ff] mx-auto mt-4" />
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Robot Combat Arena",
                icon: Swords,
                desc: "High-octane metal-shredding gladiatorial combat. Custom heavy-duty battle robots armed with flippers, spinning disks, and vertical weapons slugging it out inside an enclosed steel arena.",
                glow: "rgba(0, 255, 255, 0.15)",
                borderColor: "rgba(0, 255, 255, 0.2)",
              },
              {
                title: "Autonomous AI Challenge",
                icon: Cpu,
                desc: "Battle of algorithms. Fully autonomous machines navigating mazes, solving spatial puzzles, and out-maneuvering adversaries purely based on heuristic neural network inputs.",
                glow: "rgba(123, 97, 255, 0.15)",
                borderColor: "rgba(123, 97, 255, 0.2)",
              },
              {
                title: "Drone Warfare League",
                icon: Target,
                desc: "Aerial mechanical warfare. High-speed racing and combat drones navigating three-dimensional obstacle fields, performing target acquisition drills in fully caged vertical grids.",
                glow: "rgba(0, 255, 255, 0.15)",
                borderColor: "rgba(0, 255, 255, 0.2)",
              },
              {
                title: "Robo Soccer Championship",
                icon: Trophy,
                desc: "Precision control and teamwork. Multi-robot soccer tournaments showcasing coordination protocols, rapid speed maneuvers, and heuristic ball-tracking sensors.",
                glow: "rgba(123, 97, 255, 0.15)",
                borderColor: "rgba(123, 97, 255, 0.2)",
              },
              {
                title: "Engineering Innovation Contest",
                icon: Sparkles,
                desc: "Breakthrough concepts. Showcase of novel mechanisms, soft robotics, bionic structures, and medical-grade robotic components built by collegiate research clusters.",
                glow: "rgba(0, 255, 255, 0.15)",
                borderColor: "rgba(0, 255, 255, 0.2)",
              },
              {
                title: "Cyber Robotics Showcase",
                icon: Radio,
                desc: "Human-robot interfaces. High-end exoskeleton controls, virtual reality synchronization loops, and neural cybernetic systems operating industrial hardware in real-time.",
                glow: "rgba(123, 97, 255, 0.15)",
                borderColor: "rgba(123, 97, 255, 0.2)",
              },
            ].map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  whileHover={{ y: -8, scale: 1.01 }}
                  className="cyber-glass rounded-xl p-6 transition-all duration-300 relative group overflow-hidden"
                  style={{
                    boxShadow: `inset 0 0 12px rgba(255, 255, 255, 0.01)`,
                    borderColor: "rgba(30, 41, 59, 0.8)",
                  }}
                >
                  {/* Glowing background glow on hover */}
                  <div 
                    className="absolute -right-24 -top-24 w-48 h-48 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ backgroundColor: cat.glow }}
                  />

                  {/* Corner Accent Brackets */}
                  <div className="corner-bracket absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-300">
                    <div className="corner-bottom" />
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-slate-900 rounded border border-slate-800 text-[#00ffff] group-hover:text-white group-hover:border-[#00ffff]/40 group-hover:shadow-[0_0_15px_rgba(0,255,255,0.2)] transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-orbitron font-bold text-sm tracking-wide text-white group-hover:text-[#00ffff] transition-colors">
                      {cat.title}
                    </h3>
                  </div>

                  <p className="font-inter text-xs text-[#b8c1cc] leading-relaxed">
                    {cat.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. SECTION 3 — FEATURED ROBOTS */}
      <section id="robots" className="py-24 bg-[#050816] relative border-t border-slate-900">
        <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-rajdhani text-xs font-bold tracking-[0.25em] text-[#7b61ff] uppercase">DIAGNOSTIC DISPLAY</span>
            <h2 className="font-orbitron font-black text-3xl md:text-5xl text-white tracking-tight mt-2.5">
              FEATURED ROBOTS
            </h2>
            <div className="w-12 h-[2px] bg-[#00ffff] mx-auto mt-4" />
          </div>

          {/* Robot Selector Component */}
          <RobotSelector />
        </div>
      </section>

      {/* 6. SECTION 4 — THE ARENA (Interactive SVG Diagram) */}
      <section id="arena" className="py-24 bg-[#0a0f1c]/50 relative border-t border-slate-900">
        <div className="absolute inset-0 dot-grid opacity-25 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-rajdhani text-xs font-bold tracking-[0.25em] text-[#00ffff] uppercase">ARENA CONFIGURATION</span>
            <h2 className="font-orbitron font-black text-3xl md:text-5xl text-white tracking-tight mt-2.5">
              THE BATTLE ARENA
            </h2>
            <div className="w-12 h-[2px] bg-[#7b61ff] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Interactive SVG Arena Blueprint */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[450px] aspect-square rounded-full border border-slate-800 bg-[#050816]/65 flex items-center justify-center p-6 shadow-inner relative">
                {/* HUD rings */}
                <div className="absolute inset-4 border border-slate-800 rounded-full border-dashed animate-hud-rotate" />
                <div className="absolute inset-16 border border-[#7b61ff]/10 rounded-full border-dotted" />
                <div className="absolute inset-0 cyber-grid-fine opacity-20 rounded-full" />
                
                {/* SVG Blueprint */}
                <svg viewBox="0 0 100 100" className="w-full h-full relative z-10">
                  {/* Outer Octagon */}
                  <polygon
                    points="30,10 70,10 90,30 90,70 70,90 30,90 10,70 10,30"
                    fill="none"
                    stroke="rgba(123, 97, 255, 0.25)"
                    strokeWidth="0.75"
                  />

                  {/* Active Arena Area Circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="34"
                    fill="none"
                    stroke={selectedArenaPart === "center" ? "#00ffff" : "rgba(0, 255, 255, 0.2)"}
                    strokeWidth={selectedArenaPart === "center" ? "1.5" : "0.75"}
                    className="transition-all duration-300 drop-shadow-[0_0_6px_#00ffff]"
                    onClick={() => setSelectedArenaPart("center")}
                    style={{ cursor: "pointer" }}
                  />

                  {/* Corner Shields Nodes */}
                  {[
                    { cx: 30, cy: 10, id: "shields" },
                    { cx: 70, cy: 10, id: "shields" },
                    { cx: 90, cy: 30, id: "shields" },
                    { cx: 90, cy: 70, id: "shields" },
                    { cx: 70, cy: 90, id: "shields" },
                    { cx: 30, cy: 90, id: "shields" },
                    { cx: 10, cy: 70, id: "shields" },
                    { cx: 10, cy: 30, id: "shields" },
                  ].map((node, i) => (
                    <circle
                      key={i}
                      cx={node.cx}
                      cy={node.cy}
                      r="2.5"
                      fill={selectedArenaPart === "shields" ? "#7b61ff" : "#1e293b"}
                      stroke={selectedArenaPart === "shields" ? "#ffffff" : "rgba(123, 97, 255, 0.4)"}
                      strokeWidth="0.5"
                      className="transition-all duration-300 cursor-pointer"
                      onClick={() => setSelectedArenaPart("shields")}
                    />
                  ))}

                  {/* Hazard Gate Zones (crosshairs) */}
                  {[
                    { cx: 50, cy: 22, id: "hazards" },
                    { cx: 50, cy: 78, id: "hazards" },
                    { cx: 22, cy: 50, id: "hazards" },
                    { cx: 78, cy: 50, id: "hazards" },
                  ].map((node, i) => (
                    <g
                      key={i}
                      className="cursor-pointer transition-all duration-300"
                      onClick={() => setSelectedArenaPart("hazards")}
                    >
                      <circle
                        cx={node.cx}
                        cy={node.cy}
                        r="3"
                        fill="none"
                        stroke={selectedArenaPart === "hazards" ? "#ff4d00" : "rgba(255, 77, 0, 0.3)"}
                        strokeWidth="0.75"
                      />
                      <line
                        x1={node.cx - 5}
                        y1={node.cy}
                        x2={node.cx + 5}
                        y2={node.cy}
                        stroke={selectedArenaPart === "hazards" ? "#ff4d00" : "rgba(255, 77, 0, 0.3)"}
                        strokeWidth="0.5"
                      />
                      <line
                        x1={node.cx}
                        y1={node.cy - 5}
                        x2={node.cx}
                        y2={node.cy + 5}
                        stroke={selectedArenaPart === "hazards" ? "#ff4d00" : "rgba(255, 77, 0, 0.3)"}
                        strokeWidth="0.5"
                      />
                    </g>
                  ))}

                  {/* Aerial Guide Rails */}
                  <path
                    d="M 28 28 L 72 28 L 72 72 L 28 72 Z"
                    fill="none"
                    stroke={selectedArenaPart === "drones" ? "#ffb700" : "rgba(255, 183, 0, 0.15)"}
                    strokeWidth={selectedArenaPart === "drones" ? "1.5" : "0.75"}
                    strokeDasharray="2,2"
                    className="transition-all duration-300 cursor-pointer"
                    onClick={() => setSelectedArenaPart("drones")}
                  />
                </svg>

                {/* Center Core HUD label */}
                <div className="absolute font-mono text-[9px] text-[#b8c1cc]/25 bottom-4">
                  TAP GRAPHICS TO EXPLORE SECTORS
                </div>
              </div>
            </div>

            {/* Interactive Data Panel */}
            <div className="lg:col-span-6">
              <div className="flex gap-2.5 mb-6 overflow-x-auto pb-2 scrollbar-none font-rajdhani text-xs tracking-wider font-semibold">
                {Object.keys(arenaDetails).map((key) => (
                  <button
                    key={key}
                    onClick={() => setSelectedArenaPart(key)}
                    className={`px-4 py-2 rounded border transition-all duration-200 uppercase whitespace-nowrap cursor-pointer ${
                      selectedArenaPart === key
                        ? "bg-[#00ffff]/10 border-[#00ffff] text-[#00ffff] font-bold"
                        : "bg-slate-900/40 border-slate-800 text-[#b8c1cc]/50 hover:border-slate-700"
                    }`}
                  >
                    {key}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedArenaPart}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.25 }}
                  className="cyber-glass rounded-xl p-6 border-slate-800/80 relative"
                >
                  {/* Corner bracket accent */}
                  <div className="corner-bracket absolute inset-0">
                    <div className="corner-bottom" />
                  </div>

                  <div className="flex items-center justify-between gap-4 border-b border-slate-800 pb-3.5 mb-4">
                    <div>
                      <span className="font-mono text-[9px] text-[#b8c1cc]/40 uppercase">ARENA_SECTOR_SPECS</span>
                      <h3 className="font-orbitron font-bold text-lg text-white mt-1">
                        {arenaDetails[selectedArenaPart].title}
                      </h3>
                    </div>
                    <div className="text-right">
                      <div className="font-mono text-[8px] text-[#b8c1cc]/40">HAZARD LEVEL</div>
                      <div className="font-rajdhani text-xs font-bold text-rose-500 mt-1">
                        {arenaDetails[selectedArenaPart].hazardLevel}
                      </div>
                    </div>
                  </div>

                  <p className="font-inter text-xs text-[#b8c1cc] leading-relaxed mb-6">
                    {arenaDetails[selectedArenaPart].description}
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#050816] p-3 rounded border border-slate-900">
                      <div className="font-mono text-[8px] text-[#b8c1cc]/30">DIMENSIONS</div>
                      <div className="font-rajdhani text-xs font-bold text-white mt-1">
                        {arenaDetails[selectedArenaPart].dimensions}
                      </div>
                    </div>
                    <div className="bg-[#050816] p-3 rounded border border-slate-900">
                      <div className="font-mono text-[8px] text-[#b8c1cc]/30">SYSTEM HARDWARE</div>
                      <div className="font-rajdhani text-xs font-bold text-[#00ffff] mt-1">
                        {arenaDetails[selectedArenaPart].systemStatus}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECTION 5 — COMMAND CENTER (Live Dashboard) */}
      <section id="dashboard" className="py-24 bg-[#050816] relative border-t border-slate-900">
        <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-rajdhani text-xs font-bold tracking-[0.25em] text-[#7b61ff] uppercase">SYSTEMS TELEMETRY</span>
            <h2 className="font-orbitron font-black text-3xl md:text-5xl text-white tracking-tight mt-2.5">
              THE COMMAND CENTER
            </h2>
            <div className="w-12 h-[2px] bg-[#00ffff] mx-auto mt-4" />
          </div>

          {/* CommandCenter Component */}
          <CommandCenter />
        </div>
      </section>

      {/* 8. SECTION 6 — EVENT TIMELINE */}
      <section id="timeline" className="py-24 bg-[#0a0f1c]/50 relative border-t border-slate-900">
        <div className="absolute inset-0 dot-grid opacity-25 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-rajdhani text-xs font-bold tracking-[0.25em] text-[#00ffff] uppercase">TOURNAMENT roadmap</span>
            <h2 className="font-orbitron font-black text-3xl md:text-5xl text-white tracking-tight mt-2.5">
              EVENT TIMELINE
            </h2>
            <div className="w-12 h-[2px] bg-[#7b61ff] mx-auto mt-4" />
          </div>

          {/* Timeline Component */}
          <Timeline />
        </div>
      </section>

      {/* 9. SECTION 7 — STATISTICS */}
      <section id="stats" className="py-24 bg-[#050816] relative border-t border-slate-900">
        <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 text-center">
            <div className="cyber-glass rounded-xl p-5 border-slate-800">
              <div className="font-orbitron font-black text-4xl text-[#00ffff] leading-none">
                <AnimatedCounter end={500} suffix="+" />
              </div>
              <div className="font-rajdhani text-xs text-[#b8c1cc] font-semibold tracking-wider mt-3">TEAMS</div>
            </div>
            <div className="cyber-glass rounded-xl p-5 border-slate-800">
              <div className="font-orbitron font-black text-4xl text-white leading-none">
                <AnimatedCounter end={100} suffix="+" />
              </div>
              <div className="font-rajdhani text-xs text-[#b8c1cc] font-semibold tracking-wider mt-3">INSTITUTIONS</div>
            </div>
            <div className="cyber-glass rounded-xl p-5 border-slate-800">
              <div className="font-orbitron font-black text-4xl text-[#7b61ff] leading-none">
                <AnimatedCounter end={5} suffix="L+" prefix="₹" />
              </div>
              <div className="font-rajdhani text-xs text-[#b8c1cc] font-semibold tracking-wider mt-3">PRIZE POOL</div>
            </div>
            <div className="cyber-glass rounded-xl p-5 border-slate-800">
              <div className="font-orbitron font-black text-4xl text-white leading-none">
                <AnimatedCounter end={10000} suffix="+" />
              </div>
              <div className="font-rajdhani text-xs text-[#b8c1cc] font-semibold tracking-wider mt-3">PARTICIPANTS</div>
            </div>
            <div className="cyber-glass rounded-xl p-5 border-slate-800 col-span-2 lg:col-span-1">
              <div className="font-orbitron font-black text-4xl text-[#00ffff] leading-none">
                <AnimatedCounter end={50} suffix="+" />
              </div>
              <div className="font-rajdhani text-xs text-[#b8c1cc] font-semibold tracking-wider mt-3">INDUSTRY EXPERTS</div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. SECTION 8 — TESTIMONIALS */}
      <section className="py-24 bg-[#0a0f1c]/50 relative border-t border-slate-900">
        <div className="absolute inset-0 dot-grid opacity-25 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-rajdhani text-xs font-bold tracking-[0.25em] text-[#7b61ff] uppercase">LOGGED COMMS</span>
            <h2 className="font-orbitron font-black text-3xl md:text-5xl text-white tracking-tight mt-2.5">
              TESTIMONIALS
            </h2>
            <div className="w-12 h-[2px] bg-[#00ffff] mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "ROBO WARS was the peak of our engineering college career. The intensity of the final combat matches, the live crowd roar, and high-frequency laser warfare are absolutely unmatched.",
                author: "Vikram Sen",
                role: "Lead Designer, Team Excalibur",
                origin: "IIT Bombay",
              },
              {
                quote: "The autonomous AI challenge pushed our computational algorithms to the absolute limit. Seeing the robots take split-second evasion decisions in real-time was breathtaking.",
                author: "Dr. Ananya Mehta",
                role: "Research Head, AI Lab",
                origin: "BITS Pilani",
              },
              {
                quote: "Supporting this championship has allowed us to witness elite tech talent and mechanical craftsmanship. The level of innovation here matches global standards.",
                author: "Rajesh K.",
                role: "Director of Engineering",
                origin: "Cyberdyne Systems",
              },
            ].map((t, idx) => (
              <div
                key={idx}
                className="cyber-glass rounded-xl p-6 border-slate-800 flex flex-col justify-between relative overflow-hidden group hover:border-[#7b61ff]/40 transition-colors duration-300"
              >
                <MessageCircle className="absolute -right-3 -top-3 w-20 h-20 text-white/5 pointer-events-none" />
                <p className="font-inter text-xs text-[#b8c1cc] leading-relaxed italic mb-8 relative z-10">
                  "{t.quote}"
                </p>
                <div className="border-t border-slate-800/80 pt-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-xs font-bold text-[#00ffff]">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-orbitron text-xs font-bold text-white tracking-wider">{t.author}</h4>
                    <div className="font-rajdhani text-[10px] text-[#b8c1cc]/50 tracking-widest mt-0.5 uppercase">
                      {t.role} | {t.origin}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. SECTION 9 — SPONSORS */}
      <section className="py-16 bg-[#050816] relative border-t border-slate-900">
        <div className="absolute inset-0 cyber-grid opacity-5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-8">
            <span className="font-rajdhani text-[10px] text-[#b8c1cc]/40 tracking-[0.3em] uppercase">POWERED BY LEADING TECHNOLOGY PARTNERS</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            {[
              "TESLA CO.", "CYBERDYNE", "NVIDIA CORP", "BOSTON ROBOTICS"
            ].map((sp, idx) => (
              <div
                key={idx}
                className="py-4 border border-slate-900/60 bg-slate-950/40 rounded flex items-center justify-center font-orbitron font-extrabold text-sm tracking-[0.25em] text-[#b8c1cc]/25 hover:text-[#00ffff] hover:border-[#00ffff]/20 hover:bg-[#00ffff]/5 transition-all duration-300 select-none cursor-pointer"
              >
                {sp}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. SECTION 10 — FINAL CTA (Dramatic Finish) */}
      <section id="cta" className="py-28 bg-[#0a0f1c]/90 border-t border-slate-900 relative overflow-hidden flex items-center justify-center">
        {/* Glowing red-cyan background lights */}
        <div className="absolute -left-64 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#7b61ff]/15 blur-[120px]" />
        <div className="absolute -right-64 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#00ffff]/10 blur-[120px]" />

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
          <span className="font-rajdhani text-xs font-bold tracking-[0.3em] text-[#00ffff] uppercase">ARE YOU READY FOR THE CLASH?</span>
          <h2 className="font-orbitron font-black text-3xl md:text-6xl text-white tracking-tight mt-4 leading-tight uppercase">
            ARE YOU READY FOR <br />ROBO WARS 2026?
          </h2>
          <p className="max-w-2xl font-inter text-xs md:text-sm text-[#b8c1cc] leading-relaxed mt-6 mb-10">
            Join the next generation of robotics innovators and compete in India's most advanced robotics championship. Create. Compete. Dominate.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button
              onClick={() => {
                setIsRegistered(false);
                setFormData({ teamName: "", leaderName: "", college: "", category: "Robot Combat Arena" });
                setRegisterOpen(true);
              }}
              className="px-8 py-4 bg-[#00ffff] text-[#050816] font-rajdhani font-bold text-xs tracking-widest rounded shadow-[0_0_20px_rgba(0,255,255,0.4)] hover:shadow-[0_0_35px_rgba(0,255,255,0.8)] hover:scale-105 active:scale-95 transition-all duration-300 uppercase cursor-pointer"
            >
              Register Team
            </button>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert("Rulebook PDF file has started downloading (Mock). Check browser downloads.");
              }}
              className="px-8 py-4 bg-slate-900/60 border border-slate-700/80 text-white font-rajdhani font-bold text-xs tracking-widest rounded hover:bg-slate-800/60 transition-all duration-300 flex items-center justify-center gap-2 uppercase hover:border-[#7b61ff]/40 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-[#7b61ff]" />
              Download Rulebook
            </a>
          </div>
        </div>
      </section>

      {/* 13. FOOTER */}
      <footer className="bg-[#050816] border-t border-slate-950 py-12 relative z-10 text-center">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 font-rajdhani text-xs tracking-[0.2em] font-semibold text-[#b8c1cc]/50">
          <div>© 2026 ROBO WARS INC. ALL SECURITY CREDENTIALS SECURED.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">OS MODULE</a>
            <a href="#" className="hover:text-white transition-colors">SECURITY KEYS</a>
            <a href="#" className="hover:text-white transition-colors">TERMS OF ENGAGEMENT</a>
          </div>
        </div>
      </footer>

      {/* 14. MODAL: Watching Video Trailer */}
      <AnimatePresence>
        {trailerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl aspect-video bg-[#0a0f1c] rounded-xl border border-slate-800/85 overflow-hidden shadow-2xl p-[1px] bg-gradient-to-br from-[#00ffff]/20 to-[#7b61ff]/20"
            >
              <button
                onClick={() => setTrailerOpen(false)}
                className="absolute top-4 right-4 z-10 p-2 bg-slate-950/80 rounded-full border border-slate-800 text-white hover:text-[#00ffff] transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
              
              <video
                src="/Initial_Scene_-_2026-06-23_202606231204.mp4"
                controls
                autoPlay
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 15. MODAL: Holographic Registration Form */}
      <AnimatePresence>
        {registerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              className="w-full max-w-lg bg-[#0a0f1c]/95 border border-slate-800 p-6 rounded-xl relative shadow-2xl overflow-hidden clip-hud-card"
            >
              {/* Top border indicator line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00ffff] to-[#7b61ff]" />

              <button
                onClick={() => setRegisterOpen(false)}
                className="absolute top-4 right-4 p-2 bg-slate-900 border border-slate-800 rounded-full text-[#b8c1cc] hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>

              {!isRegistered ? (
                <>
                  <div className="mb-6">
                    <span className="font-rajdhani text-[10px] font-bold tracking-[0.2em] text-[#00ffff] uppercase">ARENA SIGN-UP PROTOCOL</span>
                    <h3 className="font-orbitron font-black text-xl text-white tracking-wide mt-1">
                      REGISTRATION UNIT
                    </h3>
                  </div>

                  <form onSubmit={handleRegisterSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="font-rajdhani text-xs font-bold text-[#b8c1cc]/70 tracking-wider">TEAM CALLSIGN</label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. TEAM TITANS"
                        value={formData.teamName}
                        onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                        className="bg-slate-950/80 border border-slate-800 rounded p-2.5 font-mono text-xs text-white focus:outline-none focus:border-[#00ffff]/60"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="font-rajdhani text-xs font-bold text-[#b8c1cc]/70 tracking-wider">COMMANDER NAME</label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. Commander Jatin"
                        value={formData.leaderName}
                        onChange={(e) => setFormData({ ...formData, leaderName: e.target.value })}
                        className="bg-slate-950/80 border border-slate-800 rounded p-2.5 font-mono text-xs text-white focus:outline-none focus:border-[#00ffff]/60"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="font-rajdhani text-xs font-bold text-[#b8c1cc]/70 tracking-wider">INSTITUTION</label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. IIT Delhi"
                        value={formData.college}
                        onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                        className="bg-slate-950/80 border border-slate-800 rounded p-2.5 font-mono text-xs text-white focus:outline-none focus:border-[#00ffff]/60"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="font-rajdhani text-xs font-bold text-[#b8c1cc]/70 tracking-wider">ARENA DIVISION</label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="bg-slate-950/85 border border-slate-800 rounded p-2.5 font-rajdhani text-xs font-semibold text-white focus:outline-none focus:border-[#00ffff]/60 cursor-pointer"
                      >
                        <option value="Robot Combat Arena">Robot Combat Arena</option>
                        <option value="Autonomous AI Challenge">Autonomous AI Challenge</option>
                        <option value="Drone Warfare League">Drone Warfare League</option>
                        <option value="Robo Soccer Championship">Robo Soccer Championship</option>
                        <option value="Engineering Innovation Contest">Engineering Innovation Contest</option>
                        <option value="Cyber Robotics Showcase">Cyber Robotics Showcase</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="mt-4 w-full py-3.5 bg-gradient-to-r from-[#00ffff] to-[#7b61ff] text-[#050816] font-rajdhani font-black text-xs tracking-widest rounded shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:shadow-[0_0_25px_rgba(123,97,255,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase cursor-pointer"
                    >
                      GENERATE COMBAT PASS
                    </button>
                  </form>
                </>
              ) : (
                <div className="flex flex-col items-center py-4 text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500 flex items-center justify-center mb-4">
                    <CheckCircle className="w-6 h-6 text-emerald-500" />
                  </div>

                  <span className="font-rajdhani text-[10px] font-bold tracking-[0.2em] text-[#00ffff] uppercase">ARENA ACCESS AUTHORIZED</span>
                  <h3 className="font-orbitron font-black text-xl text-white tracking-wide mt-1">
                    COMBAT PASS ISSUED
                  </h3>

                  {/* High-tech custom pass visual */}
                  <div className="w-full mt-6 bg-[#050816] rounded border border-slate-800 p-4 font-mono text-left relative overflow-hidden">
                    <div className="absolute inset-0 cyber-grid-fine opacity-10" />
                    <div className="absolute right-3 top-3 w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    
                    <div className="border-b border-slate-800/80 pb-2 mb-3 flex justify-between text-[8px] text-[#b8c1cc]/40">
                      <span>ROBO WARS SECURITY DEPT</span>
                      <span>SECURE LOG: ON</span>
                    </div>

                    <div className="flex flex-col gap-2 text-[10px]">
                      <div>
                        <span className="text-[#b8c1cc]/40">CALLSIGN:</span> <span className="text-white font-bold">{formData.teamName.toUpperCase()}</span>
                      </div>
                      <div>
                        <span className="text-[#b8c1cc]/40">COMMANDER:</span> <span className="text-[#00ffff]">{formData.leaderName.toUpperCase()}</span>
                      </div>
                      <div>
                        <span className="text-[#b8c1cc]/40">ACADEMY:</span> <span className="text-white">{formData.college.toUpperCase()}</span>
                      </div>
                      <div>
                        <span className="text-[#b8c1cc]/40">DIVISION:</span> <span className="text-[#7b61ff] font-bold">{formData.category.toUpperCase()}</span>
                      </div>
                    </div>

                    <div className="border-t border-slate-800/80 pt-3 mt-4 flex items-center justify-between">
                      <div>
                        <div className="text-[7px] text-[#b8c1cc]/30">UNIQUE PASS ID</div>
                        <div className="text-[10px] font-bold text-white tracking-wider mt-0.5">{generatedPassId}</div>
                      </div>
                      {/* Mock barcode block */}
                      <div className="flex flex-col gap-0.5">
                        <div className="h-6 w-24 bg-slate-900 border border-slate-800 flex items-center justify-around px-2 opacity-60">
                          {Array.from({ length: 16 }).map((_, idx) => (
                            <div
                              key={idx}
                              className="h-full bg-[#00ffff]"
                              style={{ width: `${idx % 3 === 0 ? "3px" : "1px"}` }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex gap-3 w-full">
                    <button
                      onClick={() => window.print()}
                      className="flex-1 py-2.5 bg-slate-900 border border-slate-800 text-white font-rajdhani font-bold text-xs tracking-widest rounded hover:bg-slate-800 transition-colors uppercase cursor-pointer"
                    >
                      Print Pass
                    </button>
                    <button
                      onClick={() => setRegisterOpen(false)}
                      className="flex-1 py-2.5 bg-[#00ffff] text-[#050816] font-rajdhani font-bold text-xs tracking-widest rounded shadow hover:shadow-lg transition-all uppercase cursor-pointer"
                    >
                      Complete
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
