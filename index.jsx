import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowRight,
    Award,
    Bot,
    BriefcaseBusiness,
    Building2,
    CheckCircle2,
    ChevronRight,
    CloudCog,
    Code2,
    ExternalLink,
    Globe2,
    Layers3,
    Linkedin,
    Mail,
    Menu,
    Rocket,
    ShieldCheck,
    Sparkles,
    TrendingUp,
    X,
} from "lucide-react";

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
};

const nav = ["Home", "Proof", "Projects", "Experience", "Contact"];

const stats = [
    { label: "Years building products", value: "10+" },
    { label: "Projects shipped", value: "50+" },
    { label: "Engineers led", value: "20+" },
    { label: "Industries served", value: "7+" },
];

const proof = [
    {
        icon: Bot,
        title: "AI Revenue Systems",
        body: "Built AI-driven lead engagement and qualification systems for real estate, CRM, SaaS, and service businesses.",
    },
    {
        icon: CloudCog,
        title: "Cloud & DevOps Architecture",
        body: "Designed scalable deployments using Django, Docker, GCP, AWS, CI/CD, Redis, PostgreSQL, and modern cloud workflows.",
    },
    {
        icon: BriefcaseBusiness,
        title: "Founder-Level Delivery",
        body: "Leads projects from idea, scope, architecture, team execution, QA, launch, and client-facing delivery.",
    },
    {
        icon: TrendingUp,
        title: "Business-First Engineering",
        body: "Focuses on products that increase speed, conversion, automation, revenue visibility, and operational leverage.",
    },
];

const projects = [
    {
        name: "RubyOrbit",
        tag: "AI Revenue Intelligence",
        description:
            "An AI-powered lead engagement platform that turns website visitors and cold real estate leads into qualified conversations and booked meetings.",
        impact: "24/7 qualification, lead scoring, chat automation, CRM sync, and calendar booking.",
        stack: ["AI Agents", "Django", "React", "CRM APIs", "Calendar APIs"],
    },
    {
        name: "Datamart AI Delivery Systems",
        tag: "Engineering Leadership",
        description:
            "Delivery, staff augmentation, and AI automation systems built around SaaS, real estate, healthcare, fintech, and enterprise software teams.",
        impact: "Positioned around faster product delivery, lower engineering cost, and revenue-critical software execution.",
        stack: ["Architecture", "Team Leadership", "DevOps", "SaaS", "Cloud"],
    },
    {
        name: "PocketISAi",
        tag: "Real Estate AI Assistant",
        description:
            "AI inside-sales assistant trained around real estate lead conversations to follow up, qualify, and improve engagement.",
        impact: "Created a foundation for AI-powered ISA workflows and automated lead nurturing.",
        stack: ["OpenAI", "Django", "React Native", "SMS", "CRM"],
    },
    {
        name: "Elite Med Labs Middleware",
        tag: "Healthcare Automation",
        description:
            "Middleware for automating HL7-style healthcare data flow between labs, doctors, admins, and patient-facing systems.",
        impact: "Reduced manual operations and improved data flow reliability in medical workflows.",
        stack: ["Django", "AWS", "APIs", "Healthcare", "Automation"],
    },
    {
        name: "LimouCloud",
        tag: "Logistics SaaS",
        description:
            "Reservation, dispatch, driver, passenger, payroll, and invoicing platform for limousine and transportation businesses.",
        impact: "Multi-role SaaS architecture for operators, drivers, passengers, dispatchers, and accounting teams.",
        stack: ["Django", "PostgreSQL", "Mobile Apps", "Stripe", "Role Permissions"],
    },
    {
        name: "AI Proposal Generator",
        tag: "Automation Platform",
        description:
            "Multi-agent proposal generation system for parsing RFPs, designing solutions, estimating cost, validating quality, and preparing client-ready proposals.",
        impact: "Converts messy sales inputs into structured, high-quality proposal workflows.",
        stack: ["n8n", "LLMs", "PostgreSQL", "RAG", "Google Drive"],
    },
];

const timeline = [
    {
        role: "Director of Software Engineering",
        company: "Datamart Inc. · California",
        period: "2024 — Present",
        points: [
            "Leads AI, SaaS, cloud, and delivery initiatives across multiple client industries.",
            "Builds productized systems around automation, AI workflows, backend architecture, and DevOps.",
            "Positions Datamart as a delivery partner for SaaS, real estate, healthcare, fintech, and ecommerce companies.",
        ],
    },
    {
        role: "Founder / Product Architect",
        company: "RubyOrbit",
        period: "2024 — Present",
        points: [
            "Designing AI revenue intelligence tools for real estate teams and CRM platforms.",
            "Building chat, lead scoring, qualification, booking, and mobile follow-up workflows.",
            "Turning cold lead chaos into prioritized, actionable pipeline intelligence.",
        ],
    },
    {
        role: "Full-Stack & Cloud Architect",
        company: "Client Projects & SaaS Builds",
        period: "2016 — 2024",
        points: [
            "Delivered Django, React, Next.js, React Native, automation, and cloud projects across global clients.",
            "Built systems for healthcare, logistics, restaurants, proctoring, CRM, events, and AI products.",
            "Managed backend architecture, APIs, integrations, deployment pipelines, and production operations.",
        ],
    },
];

const stack = [
    "Python", "Django", "FastAPI", "Flask", "React", "Next.js", "React Native", "Node.js", "PostgreSQL", "MongoDB", "Redis", "Docker", "AWS", "GCP", "OpenAI", "RAG", "Pinecone", "n8n", "Stripe", "Twilio", "CI/CD", "Cloudflare"
];

function SectionLabel({ children }) {
    return (
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/70 shadow-2xl shadow-red-950/20">
            <Sparkles className="h-4 w-4 text-red-300" />
            {children}
        </div>
    );
}

function MagneticButton({ children, variant = "primary" }) {
    return (
        <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className={
                variant === "primary"
                    ? "group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-red-500 via-rose-500 to-red-700 px-6 py-4 text-sm font-bold text-white shadow-2xl shadow-red-950/50"
                    : "group inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4 text-sm font-bold text-white backdrop-blur hover:bg-white/[0.07]"
            }
        >
            {children}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </motion.button>
    );
}

export default function MuhammadAsifPortfolio() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeProject, setActiveProject] = useState(projects[0]);

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
            <div className="pointer-events-none fixed inset-0 z-0">
                <div className="absolute left-1/2 top-[-20rem] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-red-700/20 blur-[120px]" />
                <div className="absolute bottom-[-18rem] right-[-8rem] h-[36rem] w-[36rem] rounded-full bg-rose-800/20 blur-[110px]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:76px_76px] opacity-20" />
                {particles.map((p) => (
                    <motion.span
                        key={p.id}
                        className="absolute h-1 w-1 rounded-full bg-red-300/70"
                        style={{ left: p.left, top: p.top }}
                        animate={{ y: [0, -26, 0], opacity: [0.2, 1, 0.2] }}
                        transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
                    />
                ))}
            </div>

            <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#070710]/70 backdrop-blur-2xl">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
                    <a href="#home" className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-red-400 to-red-800 shadow-lg shadow-red-950/50">
                            <span className="font-black">MA</span>
                        </div>
                        <div>
                            <div className="font-bold leading-none">Muhammad Asif</div>
                            <div className="text-xs text-white/50">AI Systems Architect</div>
                        </div>
                    </a>

                    <nav className="hidden items-center gap-7 md:flex">
                        {nav.map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-white/60 transition hover:text-white">
                                {item}
                            </a>
                        ))}
                    </nav>

                    <div className="hidden md:block">
                        <a href="#contact" className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white hover:bg-white/[0.08]">
                            Book a Call
                        </a>
                    </div>

                    <button onClick={() => setMenuOpen(true)} className="rounded-xl border border-white/10 p-2 md:hidden">
                        <Menu className="h-5 w-5" />
                    </button>
                </div>
            </header>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-xl md:hidden"
                    >
                        <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} className="ml-auto h-full w-80 border-l border-white/10 bg-[#0b0b16] p-6">
                            <button onClick={() => setMenuOpen(false)} className="mb-8 ml-auto block rounded-xl border border-white/10 p-2">
                                <X className="h-5 w-5" />
                            </button>
                            <div className="grid gap-4">
                                {nav.map((item) => (
                                    <a key={item} onClick={() => setMenuOpen(false)} href={`#${item.toLowerCase()}`} className="rounded-2xl bg-white/[0.04] px-4 py-4 text-white/80">
                                        {item}
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <main className="relative z-10">
                <section id="home" className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-5 pt-28 lg:grid-cols-[1.1fr_.9fr] lg:px-8">
                    <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-3xl">
                        <motion.div variants={fadeUp}>
                            <SectionLabel>Founder · Director of Software Engineering · AI Product Builder</SectionLabel>
                        </motion.div>
                        <motion.h1 variants={fadeUp} className="mt-7 text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
                            I build AI systems that turn messy operations into revenue engines.
                        </motion.h1>
                        <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg leading-8 text-white/65">
                            I’m Muhammad Asif — a full-stack and AI systems architect helping companies design, build, launch, and scale SaaS products, automation platforms, and cloud-native systems across real estate, healthcare, logistics, fintech, and ecommerce.
                        </motion.p>
                        <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-4 sm:flex-row">
                            <MagneticButton>Work With Me</MagneticButton>
                            <MagneticButton variant="secondary">View Projects</MagneticButton>
                        </motion.div>
                        <motion.div variants={fadeUp} className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                            {stats.map((stat) => (
                                <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur">
                                    <div className="text-3xl font-black text-white">{stat.value}</div>
                                    <div className="mt-2 text-xs leading-5 text-white/50">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="relative mx-auto w-full max-w-xl">
                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 24, repeat: Infinity, ease: "linear" }} className="absolute inset-8 rounded-full border border-red-300/20" />
                        <motion.div animate={{ rotate: -360 }} transition={{ duration: 32, repeat: Infinity, ease: "linear" }} className="absolute inset-0 rounded-full border border-white/10" />
                        <div className="relative rounded-[2.5rem] border border-white/10 bg-white/[0.05] p-5 shadow-2xl shadow-red-950/40 backdrop-blur-2xl">
                            <div className="rounded-[2rem] border border-white/10 bg-[#0e0e1c] p-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="h-3 w-3 rounded-full bg-red-400" />
                                        <div className="h-3 w-3 rounded-full bg-yellow-300" />
                                        <div className="h-3 w-3 rounded-full bg-green-300" />
                                    </div>
                                    <span className="text-xs text-white/40">revenue-os.js</span>
                                </div>
                                <div className="mt-7 rounded-3xl bg-black/35 p-5 font-mono text-sm leading-8 text-white/70">
                                    <p><span className="text-red-300">const</span> asif = &#123;</p>
                                    <p className="pl-5">role: <span className="text-emerald-300">"AI Systems Architect"</span>,</p>
                                    <p className="pl-5">focus: <span className="text-emerald-300">"Revenue Intelligence"</span>,</p>
                                    <p className="pl-5">ships: [<span className="text-emerald-300">"SaaS"</span>, <span className="text-emerald-300">"AI Agents"</span>, <span className="text-emerald-300">"Cloud"</span>],</p>
                                    <p className="pl-5">mission: <span className="text-emerald-300">"Build systems that sell, scale, and survive."</span></p>
                                    <p>&#125;</p>
                                </div>
                                <div className="mt-5 grid gap-3">
                                    {["High Priority Lead Detected", "AI Qualification Complete", "Meeting Booked", "Pipeline Risk Reduced"].map((item, i) => (
                                        <motion.div key={item} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 + i * 0.12 }} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                                            <span className="text-sm text-white/70">{item}</span>
                                            <CheckCircle2 className="h-5 w-5 text-red-300" />
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </section>

                <section id="proof" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-2xl">
                        <SectionLabel>Proof of Direction</SectionLabel>
                        <h2 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl">Not just a developer. A product operator who understands revenue.</h2>
                        <p className="mt-5 text-white/60">The strongest portfolio is not a list of tools. It is proof that you can turn technology into measurable business advantage.</p>
                    </motion.div>

                    <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                        {proof.map((item) => (
                            <motion.div variants={fadeUp} key={item.title} className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition hover:-translate-y-1 hover:bg-white/[0.07]">
                                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/15 text-red-300">
                                    <item.icon className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold">{item.title}</h3>
                                <p className="mt-4 text-sm leading-7 text-white/55">{item.body}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </section>

                <section id="projects" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
                    <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
                        <div>
                            <SectionLabel>Selected Work</SectionLabel>
                            <h2 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl">Systems with commercial gravity.</h2>
                            <p className="mt-5 text-white/60">These projects show the real pattern: lead intelligence, automation, cloud architecture, SaaS operations, and product delivery.</p>
                            <div className="mt-8 grid gap-3">
                                {projects.map((project) => (
                                    <button key={project.name} onClick={() => setActiveProject(project)} className={`flex items-center justify-between rounded-2xl border p-4 text-left transition ${activeProject.name === project.name ? "border-red-400/40 bg-red-500/10" : "border-white/10 bg-white/[0.04] hover:bg-white/[0.07]"}`}>
                                        <div>
                                            <div className="font-bold">{project.name}</div>
                                            <div className="mt-1 text-sm text-white/45">{project.tag}</div>
                                        </div>
                                        <ChevronRight className="h-5 w-5 text-white/40" />
                                    </button>
                                ))}
                            </div>
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div key={activeProject.name} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.35 }} className="rounded-[2.5rem] border border-white/10 bg-white/[0.05] p-7 shadow-2xl shadow-black/30 backdrop-blur">
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

                <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
                    <div className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-7 lg:p-10">
                        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
                            <div>
                                <SectionLabel>Technical Stack</SectionLabel>
                                <h2 className="mt-6 text-4xl font-black tracking-tight">The tools are not the flex. The architecture is.</h2>
                                <p className="mt-5 text-white/60">A practical stack for shipping real systems: backend, AI, cloud, automation, payments, messaging, and product interfaces.</p>
                            </div>
                            <div className="flex flex-wrap content-start gap-3">
                                {stack.map((item) => (
                                    <motion.span whileHover={{ y: -3 }} key={item} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/70 shadow-lg shadow-black/10">
                                        {item}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section id="experience" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
                    <SectionLabel>Experience</SectionLabel>
                    <h2 className="mt-6 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">A career built at the intersection of software, leadership, and AI products.</h2>
                    <div className="mt-12 grid gap-6">
                        {timeline.map((item, index) => (
                            <motion.div key={item.role} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
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

                <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
                    <div className="grid gap-5 md:grid-cols-3">
                        {[
                            { icon: Building2, title: "For Founders", text: "I help convert product ideas into launchable SaaS systems with clear architecture and execution plans." },
                            { icon: Layers3, title: "For Teams", text: "I bring structure to messy delivery, codebases, DevOps, roadmap decisions, and engineering workflows." },
                            { icon: Globe2, title: "For Investors", text: "I explain products in business language: traction, risks, cost, delivery, scale, and defensibility." },
                        ].map((card) => (
                            <div key={card.title} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-7">
                                <card.icon className="h-8 w-8 text-red-300" />
                                <h3 className="mt-5 text-2xl font-black">{card.title}</h3>
                                <p className="mt-4 leading-7 text-white/55">{card.text}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="contact" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
                    <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-br from-red-600/20 via-white/[0.06] to-black p-8 shadow-2xl shadow-red-950/30 lg:p-12">
                        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-red-500/20 blur-3xl" />
                        <div className="relative grid gap-10 lg:grid-cols-[1fr_.8fr] lg:items-end">
                            <div>
                                <SectionLabel>Let’s Build</SectionLabel>
                                <h2 className="mt-6 max-w-3xl text-4xl font-black tracking-tight sm:text-6xl">Need an AI product, SaaS platform, or engineering system that actually ships?</h2>
                                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">Bring the messy business problem. I’ll help shape the architecture, product strategy, delivery plan, team structure, and execution path.</p>
                            </div>
                            <div className="grid gap-4">
                                <a href="mailto:asif@a2ksols.com" className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.06] p-5 hover:bg-white/[0.1]">
                                    <div className="flex items-center gap-4">
                                        <Mail className="h-6 w-6 text-red-300" />
                                        <span className="font-bold">asif@a2ksols.com</span>
                                    </div>
                                    <ExternalLink className="h-5 w-5 text-white/40 group-hover:text-white" />
                                </a>
                                <a href="https://www.linkedin.com/in/muhammad-asif-bscs" target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.06] p-5 hover:bg-white/[0.1]">
                                    <div className="flex items-center gap-4">
                                        <Linkedin className="h-6 w-6 text-red-300" />
                                        <span className="font-bold">LinkedIn Profile</span>
                                    </div>
                                    <ExternalLink className="h-5 w-5 text-white/40 group-hover:text-white" />
                                </a>
                                <a href="https://github.com/asif4347" target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.06] p-5 hover:bg-white/[0.1]">
                                    <div className="flex items-center gap-4">
                                        <Code2 className="h-6 w-6 text-red-300" />
                                        <span className="font-bold">GitHub / asif4347</span>
                                    </div>
                                    <ExternalLink className="h-5 w-5 text-white/40 group-hover:text-white" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
