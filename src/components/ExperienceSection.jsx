import { motion } from "framer-motion";
import { Sparkles, ShieldCheck } from "lucide-react";
import { timeline } from "../data";

export default function ExperienceSection() {
    return (
        <section id="experience" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/70">
                <Sparkles className="h-4 w-4 text-red-300" />Professional Experience
            </div>
            <h2 className="mt-6 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">Leadership roles and key contributions across multiple organizations.</h2>
            <div className="mt-12 grid gap-6">
                {timeline.map((item, index) => (
                    <motion.div key={item.role + item.company} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
                        <div className="grid gap-5 lg:grid-cols-[.35fr_.65fr]">
                            <div>
                                <div className="text-sm font-semibold text-red-300">{item.period}</div>
                                <h3 className="mt-3 text-2xl font-black">{item.role}</h3>
                                <p className="mt-2 text-white/50">{item.company}</p>
                            </div>
                            <div className="grid gap-3">
                                {item.points.map((p) => (
                                    <div key={p} className="flex gap-3 text-white/65">
                                        <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-red-300" />
                                        <span>{p}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
