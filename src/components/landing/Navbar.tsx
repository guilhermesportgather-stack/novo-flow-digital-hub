import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
{ label: "Sobre", href: "#sobre" },
{ label: "Serviços", href: "#servicos" },
{ label: "Diferenciais", href: "#diferenciais" },
{ label: "Resultados", href: "#resultados" },
{ label: "Processo", href: "#processo" }];


const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="section-container flex h-16 items-center justify-between">
        <a href="#" className="font-heading text-xl font-bold tracking-tight">NOVO
          <span className="text-gradient">FLOW digital </span>
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) =>
          <a
            key={l.href}
            href={l.href}
            className="font-body text-sm text-muted-foreground transition-colors hover:text-primary">

              {l.label}
            </a>
          )}
          <a

            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-gradient-primary px-5 py-2 font-heading text-xs font-bold uppercase tracking-wider text-primary-foreground transition-shadow hover:glow-primary" href="https://api.whatsapp.com/send?phone=5541988642463&text=Eu%20quero%20saber%20mais%20sobre%20o%20novo%20flow%20para%20meu%20neg%C3%B3cio.">

            Falar com especialista
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open &&
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="border-b border-border bg-background md:hidden">

            <div className="section-container flex flex-col gap-4 py-6">
              {navLinks.map((l) =>
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-body text-sm text-muted-foreground transition-colors hover:text-primary">

                  {l.label}
                </a>
            )}
              <a
              href="https://wa.me/5541999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-lg bg-gradient-primary px-5 py-3 text-center font-heading text-xs font-bold uppercase tracking-wider text-primary-foreground">

                Falar com especialista
              </a>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </nav>);

};

export default Navbar;
