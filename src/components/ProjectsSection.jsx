import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ChevronRight, Rocket, Award } from "lucide-react";
import { projects } from "../data";

export default function ProjectsSection() {
    const [activeProject, setActiveProject] = useState(projects[0]);

    return (
        <section id="projects" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
                <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/70">
                        <Sparkles className="h-4 w-4 text-red-300" />Featured Projects
                    </div>
                    <h2 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl">Innovative solutions across multiple industries.</h2>
                    <p className="mt-5 text-white/60">These projects show the real pattern: lead intelligence, automation, cloud architecture, SaaS operations, and product delivery.</p>
                    <div className="mt-8 grid gap-3 max-h-[600px] overflow-y-auto pr-2">
                        {projects.map((project) => (
                            <button key={project.name} onClick={() => setActiveProject(project)} className={`flex items-center justify-between rounded-2xl border p-4 text-left transition ${activeProject.name === project.name ? "border-red-400/40 bg-red-500/10" : "border-white/10 bg-white/[0.04] hover:bg-white/[0.07]"}`}>
                                <div>
                                    <div className="font-bold">{project.name}</div>
                                    <div className="mt-1 text-sm text-white/45">{project.tag}</div>
                                </div>
                                <ChevronRight className="h-5 w-5 shrink-0 text-white/40" />
                            </button>
                        ))}
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div key={activeProject.name} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.35 }} className="rounded-[2.5rem] border border-white/10 bg-white/[0.05] p-7 shadow-2xl shadow-black/30 backdrop-blur lg:sticky lg:top-28">
                        <div className="flex items-start justify-between gap-5">
                            <div>
                                <div className="text-sm font-semibold uppercase tracking-[0.3em] text-red-300">{activeProject.tag}</div>
                                <h3 className="mt-4 text-4xl font-black">{activeProject.name}</h3>
                            </div>
                            <div className="hidden h-16 w-16 items-center justify-center rounded-3xl bg-red-500/15 text-red-300 sm:flex">
                                <Rocket className="h-8 w-8" />
                            </div>
                        </div>
                        <p className="mt-7 text-lg leading-8 text-white/65">{activeProject.description}</p>
                        <div className="mt-7 rounded-3xl border border-red-300/20 bg-red-500/10 p-5">
                            <div className="flex items-center gap-3 text-red-200">
                                <Award className="h-5 w-5" />
                                <span className="font-bold">Business Impact</span>
                            </div>
                            <p className="mt-3 leading-7 text-white/65">{activeProject.impact}</p>
                        </div>
                        <div className="mt-7 flex flex-wrap gap-3">
                            {activeProject.stack.map((s) => (
                                <span key={s} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/65">{s}</span>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
