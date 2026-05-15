import { motion } from "framer-motion";
import { Sparkles, CheckCircle2 } from "lucide-react";
import { skillCategories } from "../data";

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

export default function AboutSection() {
    return (
        <section id="about" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/70">
                    <Sparkles className="h-4 w-4 text-red-300" />About Me
                </div>
                <h2 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl">A visionary software leader with deep expertise.</h2>
                <p className="mt-5 text-white/60">A visionary software leader with deep expertise in AI-driven SaaS, web & mobile ecosystems, and DevOps automation.</p>
            </motion.div>

            <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1fr]">
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
                    <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur">
                        <h3 className="text-2xl font-black">Professional Summary</h3>
                        <p className="mt-4 leading-7 text-white/65">
                            Muhammad Asif is a visionary software leader and full-stack architect with deep expertise in AI-driven SaaS, web & mobile app ecosystems, and DevOps automation. He currently serves as <strong className="text-white">Director of Software Engineering</strong> at Datamart Inc (California, USA), where he leads engineering teams in delivering cutting-edge AI and cloud solutions.
                        </p>
                        <p className="mt-4 leading-7 text-white/65">
                            Asif has directed large-scale teams across continents, designed complex AI/ML-powered backends, and delivered end-to-end SaaS solutions for industries including real estate, healthcare, logistics, fintech, and fashion commerce.
                        </p>
                    </div>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04]">
                    <img src="/assets/Muhammad Asif (1).jpg" alt="Muhammad Asif" className="w-full rounded-[2rem] object-contain" />
                </motion.div>
            </div>

            {/* Skills Grid */}
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-16">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/70">
                    <Sparkles className="h-4 w-4 text-red-300" />Core Expertise
                </div>
                <h2 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl">Comprehensive technical skills across modern stacks.</h2>
                <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {skillCategories.map((cat) => (
                        <motion.div variants={fadeUp} key={cat.title} className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition hover:-translate-y-1 hover:bg-white/[0.07]">
                            <div className="mb-4 text-3xl">{cat.emoji}</div>
                            <h3 className="text-xl font-bold">{cat.title}</h3>
                            <ul className="mt-4 space-y-2">
                                {cat.skills.map((skill) => (
                                    <li key={skill} className="flex items-center gap-2 text-sm text-white/55">
                                        <CheckCircle2 className="h-4 w-4 shrink-0 text-red-300" />
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
