import { motion } from "framer-motion";
import { Sparkles, Mail, Phone, MapPin, Globe, Download, ExternalLink, Linkedin, Code2 } from "lucide-react";

export default function ContactSection() {
    return (
        <section id="contact" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
            <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-br from-red-600/20 via-white/[0.06] to-black p-8 shadow-2xl shadow-red-950/30 lg:p-12">
                <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-red-500/20 blur-3xl" />
                <div className="relative grid gap-10 lg:grid-cols-[1fr_.8fr] lg:items-start">
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/70">
                            <Sparkles className="h-4 w-4 text-red-300" />Get In Touch
                        </div>
                        <h2 className="mt-6 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">Let's discuss your next project or opportunity.</h2>
                        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">Bring the messy business problem. I'll help shape the architecture, product strategy, delivery plan, team structure, and execution path.</p>
                    </div>
                    <div className="grid gap-4">
                        <a href="mailto:moh.asif4347@gmail.com" className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.06] p-5 hover:bg-white/[0.1]">
                            <div className="flex items-center gap-4"><Mail className="h-6 w-6 text-red-300" /><div><div className="text-xs text-white/45">Email</div><span className="font-bold">moh.asif4347@gmail.com</span></div></div>
                            <ExternalLink className="h-5 w-5 text-white/40 group-hover:text-white" />
                        </a>
                        <a href="tel:+923218337902" className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.06] p-5 hover:bg-white/[0.1]">
                            <div className="flex items-center gap-4"><Phone className="h-6 w-6 text-red-300" /><div><div className="text-xs text-white/45">Phone</div><span className="font-bold">+92 321 8337902</span></div></div>
                            <ExternalLink className="h-5 w-5 text-white/40 group-hover:text-white" />
                        </a>
                        <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                            <MapPin className="h-6 w-6 text-red-300" /><div><div className="text-xs text-white/45">Location</div><span className="font-bold">Lahore, Pakistan</span></div>
                        </div>
                        <a href="https://asif4347.com" target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.06] p-5 hover:bg-white/[0.1]">
                            <div className="flex items-center gap-4"><Globe className="h-6 w-6 text-red-300" /><div><div className="text-xs text-white/45">Website</div><span className="font-bold">asif4347.com</span></div></div>
                            <ExternalLink className="h-5 w-5 text-white/40 group-hover:text-white" />
                        </a>
                        <a href="https://www.linkedin.com/in/muhammad-asif-bscs" target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.06] p-5 hover:bg-white/[0.1]">
                            <div className="flex items-center gap-4"><Linkedin className="h-6 w-6 text-red-300" /><span className="font-bold">LinkedIn Profile</span></div>
                            <ExternalLink className="h-5 w-5 text-white/40 group-hover:text-white" />
                        </a>
                        <a href="https://github.com/asif4347" target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.06] p-5 hover:bg-white/[0.1]">
                            <div className="flex items-center gap-4"><Code2 className="h-6 w-6 text-red-300" /><span className="font-bold">GitHub / asif4347</span></div>
                            <ExternalLink className="h-5 w-5 text-white/40 group-hover:text-white" />
                        </a>
                        <div className="flex gap-3">
                            <a href="/assets/Muhammad Asif Resume.pdf" download className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-red-500 via-rose-500 to-red-700 p-4 text-sm font-bold text-white shadow-2xl shadow-red-950/50 hover:opacity-90">
                                <Download className="h-4 w-4" /> Resume
                            </a>
                            <a href="/assets/Muhammad Asif (3).pdf" download className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm font-bold text-white hover:bg-white/[0.07]">
                                <Download className="h-4 w-4" /> Award Certificate
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
