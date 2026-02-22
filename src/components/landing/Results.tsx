import { motion } from "framer-motion";

const stats = [
  { value: "+100", label: "Sites criados" },
  { value: "+100", label: "Negócios otimizados" },
  { value: "+50K", label: "Visualizações no Google" },
];

const Results = () => (
  <section id="resultados" className="py-24 bg-card/50">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-primary">
          Resultados
        </span>
        <h2 className="mt-4 font-heading text-3xl font-extrabold uppercase tracking-tight md:text-4xl">
          Números que <span className="text-gradient">falam por nós</span>
        </h2>
      </motion.div>

      <div className="mt-16 grid gap-8 sm:grid-cols-3">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="flex flex-col items-center text-center"
          >
            <span className="font-heading text-5xl font-extrabold text-gradient glow-text md:text-6xl">
              {s.value}
            </span>
            <span className="mt-3 font-heading text-sm font-bold uppercase tracking-wider text-muted-foreground">
              {s.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Results;
