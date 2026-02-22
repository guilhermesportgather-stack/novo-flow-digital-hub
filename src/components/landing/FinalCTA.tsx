import { motion } from "framer-motion";

const FinalCTA = () =>
<section className="py-24">
    <div className="section-container">
      <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-2xl bg-card p-12 text-center md:p-20">

        {/* Glow */}
        <div className="pointer-events-none absolute inset-0 bg-primary/5" />
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-40 w-80 rounded-full bg-primary/20 blur-[100px]" />

        <h2 className="relative font-heading text-3xl font-extrabold uppercase tracking-tight md:text-5xl">
          Entre em uma nova fase no digital{" "}
          <span className="text-gradient">com a Novo Flow.</span>
        </h2>
        <p className="relative mt-6 mx-auto max-w-xl text-lg text-muted-foreground">
          Solicite um diagnóstico gratuito e descubra como podemos transformar o seu negócio.
        </p>
        <div className="relative mt-10 flex flex-wrap justify-center gap-4">
          <a

          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-lg bg-gradient-primary px-8 py-4 font-heading text-sm font-bold uppercase tracking-wider text-primary-foreground transition-shadow hover:glow-primary" href="https://api.whatsapp.com/send?phone=5541988642463&text=Eu%20quero%20saber%20mais%20sobre%20o%20novo%20flow%20para%20meu%20neg%C3%B3cio.">

            Falar com especialista
          </a>
          <a
          href="https://wa.me/5541999999999?text=Olá!%20Gostaria%20de%20agendar%20um%20diagnóstico."
          target="_blank"
          rel="noopener noreferrer"
          className="border-gradient inline-flex items-center rounded-lg bg-card px-8 py-4 font-heading text-sm font-bold uppercase tracking-wider text-foreground transition-colors hover:bg-muted">

            Agendar diagnóstico
          </a>
        </div>
      </motion.div>
    </div>
  </section>;


export default FinalCTA;