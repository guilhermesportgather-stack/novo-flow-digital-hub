import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Maria S.", role: "Lojista", text: "A Novo Flow transformou minha loja. Hoje tenho clientes novos toda semana!" },
  { name: "Carlos R.", role: "Autônomo", text: "Finalmente entendi o digital. Profissionais incríveis e resultados reais." },
  { name: "Ana P.", role: "Empresária", text: "Atendimento humano e tecnologia de ponta. Recomendo para qualquer negócio." },
];

const Testimonials = () => (
  <section className="py-24">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-primary">
          Depoimentos
        </span>
        <h2 className="mt-4 font-heading text-3xl font-extrabold uppercase tracking-tight md:text-4xl">
          O que nossos clientes <span className="text-gradient">dizem</span>
        </h2>
      </motion.div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="border-gradient rounded-xl bg-card p-8"
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground italic">
              "{t.text}"
            </p>
            <div className="mt-6">
              <p className="font-heading text-sm font-bold">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
