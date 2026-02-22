import { motion } from "framer-motion";
import { Target, Users, TrendingUp } from "lucide-react";

const highlights = [
  { icon: Target, label: "Estratégia sob medida" },
  { icon: Users, label: "Atendimento humanizado" },
  { icon: TrendingUp, label: "Resultados mensuráveis" },
];

const About = () => (
  <section id="sobre" className="py-24">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl text-center"
      >
        <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-primary">
          Sobre nós
        </span>
        <h2 className="mt-4 font-heading text-3xl font-extrabold uppercase tracking-tight md:text-4xl">
          Transformamos negócios através do <span className="text-gradient">digital</span>
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          A Novo Flow nasceu com o propósito de ajudar empresas a entrarem em uma nova fase no digital.
          Oferecemos estratégias personalizadas, combinando tecnologia avançada com atendimento humano,
          para que cada cliente alcance resultados reais e previsíveis. De Curitiba para todo o Brasil.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-6 sm:grid-cols-3">
        {highlights.map((h, i) => (
          <motion.div
            key={h.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="border-gradient flex flex-col items-center gap-4 rounded-xl bg-card p-8 text-center"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <h.icon className="h-6 w-6 text-primary" />
            </div>
            <span className="font-heading text-sm font-bold uppercase tracking-wider">
              {h.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
