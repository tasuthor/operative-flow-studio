import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border/50 bg-background">
    <div className="container py-12">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <Link to="/" className="font-heading text-xl font-bold tracking-tight">
            <span className="text-foreground">TAS</span>
            <span className="text-primary">UTHOR</span>
          </Link>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            AI Operational Systems Company.<br />
            Automazioni operative per PMI.
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold text-foreground">Navigazione</h4>
          <div className="flex flex-col gap-2">
            {[
              { label: "Home", path: "/" },
              { label: "Soluzioni", path: "/soluzioni" },
              { label: "Agendo", path: "/agendo" },
            ].map((l) => (
              <Link key={l.path} to={l.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold text-foreground">Risorse</h4>
          <div className="flex flex-col gap-2">
            {[
              { label: "Casi d'uso", path: "/casi-duso" },
              { label: "Metodo", path: "/metodo" },
              { label: "Contatti", path: "/contatti" },
            ].map((l) => (
              <Link key={l.path} to={l.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold text-foreground">Legale</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <span className="cursor-pointer hover:text-primary transition-colors">Privacy Policy</span>
            <span className="cursor-pointer hover:text-primary transition-colors">Cookie Policy</span>
            <span className="cursor-pointer hover:text-primary transition-colors">Termini di servizio</span>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-border/50 pt-6">
        <p className="text-xs text-muted-foreground text-center leading-relaxed">
          © {new Date().getFullYear()} TASUTHOR. Tutti i diritti riservati. I risultati descritti sono indicativi e dipendono dal contesto operativo specifico. Nessuna promessa di risultato assoluto.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
