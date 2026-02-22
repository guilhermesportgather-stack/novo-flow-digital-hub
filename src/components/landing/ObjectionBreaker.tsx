import { motion } from "framer-motion";
import { ShieldCheck, CircleDollarSign, HelpCircle } from "lucide-react";

const objections = [
{
  icon: ShieldCheck,
  question: "\"E se for golpe?\"",
  answer: "Trabalhamos com contrato, CNPJ ativo e entregas documentadas. Transparência é a base de tudo."
},
{
  icon: CircleDollarSign,
  question: "\"Será que vale o investimento?\"",
  answer: "Cada real investido é rastreado. Mostramos métricas reais para você acompanhar o retorno."
},
{
  icon: HelpCircle,
  question: "\"Não entendo nada de digital.\"",
  answer: "Você não precisa entender. A gente cuida de tudo e explica cada passo de forma simples."
}];


const ObjectionBreaker = () =>
<section className="py-24">
    <div className="section-container">
      <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center">

        <span className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-primary">
          Sem preocupações
        </span>
        <h2 className="mt-4 font-heading text-3xl font-extrabold uppercase tracking-tight md:text-4xl">
          Respondemos suas <span className="text-gradient">maiores dúvidas</span>
        </h2>
      </motion.div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {objections.map((o, i) =>
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: i * 0.15 }}
        className="border-gradient rounded-xl bg-card p-8">

            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 mx-[120px]">
              <o.icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="mt-5 font-heading text-base font-bold text-center">
              {o.question}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-center">
              {o.answer}
            </p>
          </motion.div>
      )}
      </div>
    </div>
  </section>;


export default ObjectionBreaker;