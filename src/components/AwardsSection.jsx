import { motion } from "framer-motion";
import { Sparkles, Trophy, Play } from "lucide-react";
import { awards, awardImages } from "../data";

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

export default function AwardsSection() {
    return (
        <section id="awards" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/70">
                    <Sparkles className="h-4 w-4 text-red-300" />Awards & Certifications
                </div>
                <h2 className="mt-6 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">Celebrating achievements and professional credentials.</h2>
            </motion.div>

            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-12 grid gap-5 md:grid-cols-3">
                {awards.map((award) => (
                    <motion.div variants={fadeUp} key={award.title} className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur transition hover:-translate-y-1 hover:bg-white/[0.07]">
                        <div className="mb-4 text-4xl">{award.emoji}</div>
                        <h3 className="text-xl font-bold">{award.title}</h3>
                        <p className="mt-3 text-sm text-red-300">{award.org}</p>
                        <p className="mt-2 text-sm text-white/45">{award.date}</p>
                    </motion.div>
                ))}
            </motion.div>

            {/* YouTube Video */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04]">
                <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                    <iframe
                        className="absolute inset-0 h-full w-full"
                        src="https://www.youtube.com/embed/Dud5-8bZQ9E?start=13319"
                        title="Forttuna Award Video"
                        allowFullScreen
                        loading="lazy"
                    />
                </div>
            </motion.div>

            {/* Award Gallery */}
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-8 grid gap-5 md:grid-cols-3">
                {awardImages.map((img) => (
                    <motion.div variants={fadeUp} key={img.alt} className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04]">
                        <img src={img.src} alt={img.alt} className="h-64 w-full object-cover transition duration-500 hover:scale-105" loading="lazy" />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
