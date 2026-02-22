import googleLogo from "https://github.com/guilhermesportgather-stack/novo-flow-digital-hub/blob/917dea8be62906267d4807dc960538c4d1f274bc/Logo-google-icon-PNG.png";

const clientLogos = [
  { name: "Google", src: googleLogo },
  { name: "Logo 2", src: null },
  { name: "Logo 3", src: null },
  { name: "Logo 4", src: null },
  { name: "Logo 5", src: null },
];

const Footer = () =>
<footer className="border-t border-border py-12">
    <div className="section-container">
      <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
        <div>
          <span className="font-heading text-lg font-bold tracking-tight">
            NOVO <span className="text-gradient">FLOW</span>
          </span>
          <p className="mt-1 text-xs text-muted-foreground">
            Estratégias digitais para uma nova fase no digital
          </p>
        </div>
        <div className="text-center md:text-right">
          <p className="text-xs text-muted-foreground">Novo Flow Digital | Atendimento para todo o Brasil</p>
          <p className="mt-1 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Novo Flow. Todos os direitos reservados.
          </p>
        </div>
      </div>

      {/* Space for client logos */}
      <div className="mt-12 border-t border-border pt-8">
        <p className="text-center text-xs uppercase tracking-wider text-muted-foreground">
          Empresas que conectam tecnologia com Novo Flow
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-8 opacity-30">
          {["Logo 1", "Logo 2", "Logo 3", "Logo 4", "Logo 5"].map((l) =>
        <div
          key={l}
          className="flex h-10 w-24 items-center justify-center rounded border border-border text-xs text-muted-foreground">

              {l}
            </div>
        )}
        </div>
      </div>
    </div>
  </footer>;


export default Footer;
