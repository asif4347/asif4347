import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { nav, stack } from "./data";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import AwardsSection from "./components/AwardsSection";
import ContactSection from "./components/ContactSection";

export default function MuhammadAsifPortfolio() {
    const [menuOpen, setMenuOpen] = useState(false);

    const particles = useMemo(
        () => Array.from({ length: 24 }, (_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            delay: Math.random() * 4,
            duration: 5 + Math.random() * 7,
        })),
        []
    );

    return (
        <div className="min-h-screen overflow-hidden bg-[#070710] text-white">
            {/* Background effects */}
            <div className="pointer-events-none fixed inset-0 z-0">
                <div className="absolute left-1/2 top-[-20rem] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-red-700/20 blur-[120px]" />
                <div className="absolute bottom-[-18rem] right-[-8rem] h-[36rem] w-[36rem] rounded-full bg-rose-800/20 blur-[110px]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:76px_76px] opacity-20" />
                {particles.map((p) => (
                    <motion.span key={p.id} className="absolute h-1 w-1 rounded-full bg-red-300/70" style={{ left: p.left, top: p.top }}
                        animate={{ y: [0, -26, 0], opacity: [0.2, 1, 0.2] }}
                        transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
                    />
                ))}
            </div>

            {/* Header */}
            <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#070710]/70 backdrop-blur-2xl">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
                    <a href="#home" className="flex items-center gap-3">
                        <img src="/assets/db076cc4-75d0-4f1a-8658-04e0b718f2e7.png" alt="Muhammad Asif" className="h-10 w-10 rounded-2xl object-cover shadow-lg shadow-red-950/50" />
                        <div>
                            <div className="font-bold leading-none">Muhammad Asif</div>
                            <div className="text-xs text-white/50">AI Systems Architect</div>
                        </div>
                    </a>
                    <nav className="hidden items-center gap-7 md:flex">
                        {nav.map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-white/60 transition hover:text-white">{item}</a>
                        ))}
                    </nav>
                    <div className="hidden md:block">
                        <a href="#contact" className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white hover:bg-white/[0.08]">Book a Call</a>
                    </div>
                    <button onClick={() => setMenuOpen(true)} className="rounded-xl border border-white/10 p-2 md:hidden">
                        <Menu className="h-5 w-5" />
                    </button>
                </div>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-xl md:hidden">
                        <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} className="ml-auto h-full w-80 border-l border-white/10 bg-[#0b0b16] p-6">
                            <button onClick={() => setMenuOpen(false)} className="mb-8 ml-auto block rounded-xl border border-white/10 p-2">
                                <X className="h-5 w-5" />
                            </button>
                            <div className="grid gap-4">
                                {nav.map((item) => (
                                    <a key={item} onClick={() => setMenuOpen(false)} href={`#${item.toLowerCase()}`} className="rounded-2xl bg-white/[0.04] px-4 py-4 text-white/80">{item}</a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Content */}
            <main className="relative z-10">
                <HeroSection />
                <AboutSection />
                <ProjectsSection />

                {/* Tech Stack */}
                <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
                    <div className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-7 lg:p-10">
                        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
                            <div>
                                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/70">
                                    <Sparkles className="h-4 w-4 text-red-300" />Technical Stack
                                </div>
                                <h2 className="mt-6 text-4xl font-black tracking-tight">The tools are not the flex. The architecture is.</h2>
                                <p className="mt-5 text-white/60">A practical stack for shipping real systems: backend, AI, cloud, automation, payments, messaging, and product interfaces.</p>
                            </div>
                            <div className="flex flex-wrap content-start gap-3">
                                {stack.map((item) => (
                                    <motion.span whileHover={{ y: -3 }} key={item} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/70 shadow-lg shadow-black/10">{item}</motion.span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <ExperienceSection />
                <AwardsSection />
                <ContactSection />
            </main>

            {/* Footer */}
            <footer className="relative z-10 border-t border-white/10 bg-[#070710]">
                <div className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
                    <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                        <p className="text-sm text-white/40">© {new Date().getFullYear()} Muhammad Asif. All rights reserved.</p>
                        <div className="flex gap-6">
                            <a href="https://linkedin.com/in/asif4347" target="_blank" rel="noreferrer" className="text-sm text-white/40 hover:text-white">LinkedIn</a>
                            <a href="https://github.com/asif4347" target="_blank" rel="noreferrer" className="text-sm text-white/40 hover:text-white">GitHub</a>
                            <a href="https://asif.engineer" target="_blank" rel="noreferrer" className="text-sm text-white/40 hover:text-white">Website</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
