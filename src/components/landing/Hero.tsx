import { motion } from "framer-motion";
import heroImg from "@/assets/hero-dashboard.png";

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
    {/* Ambient glow */}
    <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[150px]" />

    <div className="section-container grid gap-12 lg:grid-cols-2 lg:gap-8 items-center py-20">
      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="font-heading text-4xl font-extrabold uppercase leading-tight tracking-tight md:text-5xl lg:text-6xl">
          Seu negócio já percebeu que precisa do digital.{" "}
          <span className="text-gradient">Mas ainda não sabe por onde começar.</span>
        </h1>
        <p className="mt-6 max-w-lg text-lg text-muted-foreground leading-relaxed">
          A Novo Flow cria estratégias digitais personalizadas para aumentar seu faturamento com previsibilidade.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="https://wa.me/5541999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg bg-gradient-primary px-8 py-4 font-heading text-sm font-bold uppercase tracking-wider text-primary-foreground transition-shadow hover:glow-primary"
          >
            Falar com especialista
          </a>
          <a
            href="#processo"
            className="border-gradient inline-flex items-center rounded-lg bg-card px-8 py-4 font-heading text-sm font-bold uppercase tracking-wider text-foreground transition-colors hover:bg-muted"
          >
            Agendar diagnóstico
          </a>
        </div>
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative flex justify-center"
      >
        <div className="animate-float">
          <img
            src={heroImg}
            alt="Dashboard digital futurista com gráficos e métricas de marketing"
            className="w-full max-w-lg rounded-2xl"
          />
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
