import { motion } from "framer-motion";
import { Search, Lightbulb, Rocket, BarChart, Settings } from "lucide-react";

const steps = [
  { icon: Search, title: "Diagnóstico", desc: "Analisamos seu negócio, mercado e concorrência." },
  { icon: Lightbulb, title: "Estratégia", desc: "Criamos um plano personalizado com metas claras." },
  { icon: Rocket, title: "Execução", desc: "Implementamos tudo com agilidade e qualidade." },
  { icon: BarChart, title: "Monitoramento", desc: "Acompanhamos métricas em tempo real." },
  { icon: Settings, title: "Otimização", desc: "Ajustamos continuamente para maximizar resultados." },
];

const Process = () => (
  <section id="processo" className="py-24 bg-card/50">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-primary">
          Processo
        </span>
        <h2 className="mt-4 font-heading text-3xl font-extrabold uppercase tracking-tight md:text-4xl">
          Como <span className="text-gradient">funciona</span>
        </h2>
      </motion.div>

      <div className="mt-16 flex flex-col gap-0 md:flex-row md:gap-0">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="relative flex flex-1 flex-col items-center text-center px-4 py-8"
          >
            {/* Connector line */}
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-12 right-0 h-[2px] w-1/2 bg-gradient-to-r from-primary/50 to-transparent translate-x-1/2" />
            )}
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground font-heading font-bold text-lg">
              {i + 1}
            </div>
            <h3 className="mt-5 font-heading text-sm font-bold uppercase tracking-wider">
              {s.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Process;
