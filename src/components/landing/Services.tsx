import { motion } from "framer-motion";
import { BarChart3, Megaphone, Database, Globe, MapPin, Palette } from "lucide-react";

const services = [
{ icon: BarChart3, title: "Consultoria Comercial", desc: "Diagnóstico completo e planejamento estratégico para escalar suas vendas." },
{ icon: Megaphone, title: "Tráfego Pago", desc: "Campanhas otimizadas no Google e Meta ADS para gerar leads qualificados." },
{ icon: Database, title: "CRM", desc: "Organização e automação do seu funil de vendas com ferramentas inteligentes." },
{ icon: Globe, title: "Landing Pages", desc: "Páginas de alta conversão com design profissional e copywriting estratégico." },
{ icon: MapPin, title: "Google Meu Negócio", desc: "Otimização da sua presença local para atrair mais clientes na sua região." },
{ icon: Palette, title: "Design", desc: "Identidade visual e materiais gráficos que transmitem autoridade e profissionalismo." }];


const Services = () =>
<section id="servicos" className="py-24">
    <div className="section-container">
      <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center">

        <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-primary">
          Serviços
        </span>
        <h2 className="mt-4 font-heading text-3xl font-extrabold uppercase tracking-tight md:text-4xl">
          Soluções completas para o <span className="text-gradient">seu crescimento</span>
        </h2>
      </motion.div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) =>
      <motion.div
        key={s.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: i * 0.1 }}
        className="group border-gradient rounded-xl bg-card p-8 transition-all hover:bg-muted">

            <div className="h-12 w-12 rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20 items-center justify-center flex flex-row gap-0 mx-[120px]">
              <s.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mt-5 font-heading text-lg font-bold uppercase tracking-wider text-center">
              {s.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-center">
              {s.desc}
            </p>
          </motion.div>
      )}
      </div>
    </div>
  </section>;


export default Services;
