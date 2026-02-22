import { motion } from "framer-motion";
import { Fingerprint, HeartHandshake, Cpu, FileCheck, FlaskConical } from "lucide-react";

const diffs = [
  { icon: Fingerprint, title: "Estratégia personalizada", desc: "Cada negócio é único. Criamos planos sob medida para seus objetivos." },
  { icon: HeartHandshake, title: "Atendimento humano", desc: "Você fala com pessoas reais que entendem o seu negócio." },
  { icon: Cpu, title: "Tecnologia avançada", desc: "Ferramentas de ponta para automação, análise e otimização." },
  { icon: FileCheck, title: "Contrato e entrega garantida", desc: "Transparência total com prazos e entregas bem definidos." },
  { icon: FlaskConical, title: "Metodologia comprovada", desc: "Processo validado que já ajudou mais de 100 negócios a crescer." },
];

const Differentials = () => (
  <section id="diferenciais" className="py-24">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-primary">
          Diferenciais
        </span>
        <h2 className="mt-4 font-heading text-3xl font-extrabold uppercase tracking-tight md:text-4xl">
          Por que escolher a <span className="text-gradient">Novo Flow?</span>
        </h2>
      </motion.div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {diffs.map((d, i) => (
          <motion.div
            key={d.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex gap-4"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <d.icon className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-heading text-base font-bold uppercase tracking-wider">
                {d.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {d.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Differentials;
