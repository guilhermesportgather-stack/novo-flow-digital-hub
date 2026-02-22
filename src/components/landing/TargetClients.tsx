import { motion } from "framer-motion";
import { User, Store, Wrench, Building2 } from "lucide-react";

const targets = [
  { icon: User, title: "Autônomos", desc: "Profissionais que querem construir autoridade e atrair clientes online." },
  { icon: Store, title: "Lojistas", desc: "Lojas físicas e online que precisam de visibilidade e vendas constantes." },
  { icon: Wrench, title: "Prestadores de Serviço", desc: "Profissionais que dependem de indicação e querem escalar." },
  { icon: Building2, title: "Empresas", desc: "Negócios que buscam estruturar sua presença digital com profissionalismo." },
];

const TargetClients = () => (
  <section className="py-24 bg-card/50">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-primary">
          Para quem é
        </span>
        <h2 className="mt-4 font-heading text-3xl font-extrabold uppercase tracking-tight md:text-4xl">
          Atendemos quem quer <span className="text-gradient">crescer de verdade</span>
        </h2>
      </motion.div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {targets.map((t, i) => (
          <motion.div
            key={t.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col items-center text-center rounded-xl bg-card p-8 border border-border"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              <t.icon className="h-7 w-7 text-primary" />
            </div>
            <h3 className="mt-5 font-heading text-base font-bold uppercase tracking-wider">
              {t.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {t.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TargetClients;
