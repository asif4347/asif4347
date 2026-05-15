import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles, Download } from "lucide-react";
import { stats, socialLinks } from "../data";

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

const socialIcons = {
    LinkedIn: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
    ),
    GitHub: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
    ),
    Twitter: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
    ),
    Instagram: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
    ),
};

export default function HeroSection() {
    return (
        <section id="home" className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-5 pt-28 lg:grid-cols-[1.1fr_.9fr] lg:px-8">
            <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-3xl">
                <motion.div variants={fadeUp}>
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/70 shadow-2xl shadow-red-950/20">
                        <Sparkles className="h-4 w-4 text-red-300" />
                        Founder · Director of Software Engineering · AI Product Builder
                    </div>
                </motion.div>
                <motion.h1 variants={fadeUp} className="mt-7 text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
                    I build AI systems that turn messy operations into revenue engines.
                </motion.h1>
                <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
                    I'm Muhammad Asif — a full-stack and AI systems architect helping companies design, build, launch, and scale SaaS products, automation platforms, and cloud-native systems across real estate, healthcare, logistics, fintech, and ecommerce.
                </motion.p>
                <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-4 sm:flex-row">
                    <a href="#contact">
                        <motion.button whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }} className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-red-500 via-rose-500 to-red-700 px-6 py-4 text-sm font-bold text-white shadow-2xl shadow-red-950/50">
                            Work With Me <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </motion.button>
                    </a>
                    <a href="/assets/Muhammad Asif Resume.pdf" download>
                        <motion.button whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }} className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4 text-sm font-bold text-white backdrop-blur hover:bg-white/[0.07]">
                            <Download className="h-4 w-4" /> Download CV
                        </motion.button>
                    </a>
                </motion.div>
                <motion.div variants={fadeUp} className="mt-8 flex items-center gap-3">
                    {socialLinks.map((link) => (
                        <a key={link.name} href={link.url} target="_blank" rel="noreferrer" title={link.name}
                           className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/60 transition hover:bg-white/[0.1] hover:text-white">
                            {link.type === "img" ? (
                                <img src={link.img} alt={link.name} className="h-5 w-5 object-contain" />
                            ) : socialIcons[link.name] ? socialIcons[link.name] : null}
                        </a>
                    ))}
                </motion.div>
                <motion.div variants={fadeUp} className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                    {stats.map((stat) => (
                        <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur">
                            <div className="text-3xl font-black text-white">{stat.value}</div>
                            <div className="mt-2 text-xs leading-5 text-white/50">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="relative mx-auto hidden w-full max-w-md lg:block">
                <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.05] p-2 shadow-2xl shadow-red-950/40 backdrop-blur-2xl">
                    <img src="/assets/db076cc4-75d0-4f1a-8658-04e0b718f2e7.png" alt="Muhammad Asif" className="w-full rounded-[2rem] object-cover" />
                </div>
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 24, repeat: Infinity, ease: "linear" }} className="absolute inset-4 -z-10 rounded-full border border-red-300/20" />
                <motion.div animate={{ rotate: -360 }} transition={{ duration: 32, repeat: Infinity, ease: "linear" }} className="absolute -inset-4 -z-10 rounded-full border border-white/10" />
            </motion.div>
        </section>
    );
}
