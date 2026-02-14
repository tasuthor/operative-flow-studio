import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Workflow, Bot, CheckCircle2, ArrowRight, Zap, Clock, BarChart3 } from "lucide-react";

const Soluzioni = () => (
  <Layout>
    {/* Hero */}
    <section className="py-24 bg-gradient-dark">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold md:text-5xl">Le nostre soluzioni</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Due pilastri operativi per ridurre il lavoro manuale e aumentare la capacità della tua attività.
          </p>
        </div>
      </div>
    </section>

    {/* Automazioni n8n */}
    <section className="py-20">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div>
            <Workflow size={40} className="text-tech-blue mb-4" />
            <h2 className="text-3xl font-bold">Automazioni di processo con n8n</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Colleghiamo i tuoi strumenti e costruiamo flussi automatici che eliminano le attività ripetitive. Ogni automazione è misurabile, documentata e scalabile.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Gestione lead: dalla ricezione al follow-up automatico",
                "Smistamento richieste: raccolta dati, assegnazione, notifica",
                "Report automatici: KPI, performance, stato processi",
                "Reminder e conferme: appuntamenti, scadenze, rinnovi",
                "Sincronizzazione strumenti: CRM ↔ calendario ↔ gestionale",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle2 size={14} className="mt-0.5 shrink-0 text-tech-blue" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: Clock, label: "Risparmio tempo", val: "5–15 ore/settimana" },
              { icon: Zap, label: "Tempo setup", val: "7–14 giorni" },
              { icon: BarChart3, label: "ROI tipico", val: "< 60 giorni" },
              { icon: Workflow, label: "Integrazioni", val: "400+ app supportate" },
            ].map(({ icon: Icon, label, val }) => (
              <div key={label} className="rounded-lg border border-border/50 bg-card p-5">
                <Icon size={20} className="text-tech-blue mb-2" />
                <p className="text-xs text-muted-foreground">{label}</p>
                <p className="text-lg font-semibold text-foreground">{val}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* AGENDO */}
    <section className="py-20 bg-gradient-accent">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="order-2 md:order-1 grid gap-4 sm:grid-cols-2">
            {[
              { label: "Chiamate inbound", desc: "Risposta, qualifica, smistamento" },
              { label: "Chiamate outbound", desc: "Follow-up, conferme, campagne" },
              { label: "Gestione agenda", desc: "Prenotazione, modifica, cancellazione" },
              { label: "Integrazione API", desc: "n8n, CRM, calendari, gestionali" },
            ].map(({ label, desc }) => (
              <div key={label} className="rounded-lg border border-accent/20 bg-card p-5">
                <p className="text-sm font-semibold text-foreground">{label}</p>
                <p className="mt-1 text-xs text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
          <div className="order-1 md:order-2">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-medium text-accent-foreground">
              Beta privata · Accesso anticipato
            </div>
            <Bot size={40} className="text-accent mb-4" />
            <h2 className="text-3xl font-bold">AGENDO — Voice Agent</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Il nostro voice agent proprietario gestisce le chiamate telefoniche della tua attività, prende appuntamenti e si integra con i tuoi sistemi. Accesso su invito, posti limitati.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Pacchetti */}
    <section className="py-20">
      <div className="container">
        <h2 className="text-center text-3xl font-bold">Pacchetti</h2>
        <p className="mt-4 text-center text-muted-foreground">Ogni percorso parte dalla mappatura operativa. Costi su valutazione.</p>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {[
            { title: "Automation Sprint", desc: "Un processo critico automatizzato in 14 giorni. Ideale per partire e validare.", features: ["1 flusso n8n completo", "Integrazione 2–3 strumenti", "Documentazione e training", "Supporto 30 giorni"] },
            { title: "Operations Automation", desc: "Più processi collegati per un sistema operativo completo. Per chi vuole scalare.", features: ["3–5 flussi n8n integrati", "Dashboard KPI", "Ottimizzazione continua", "Supporto dedicato"] },
            { title: "AGENDO Early Access", desc: "Voice agent per chiamate e appuntamenti. Accesso anticipato su invito.", features: ["Setup voice agent", "Integrazione calendario/CRM", "Training e ottimizzazione", "Evoluzione roadmap inclusa"] },
          ].map(({ title, desc, features }) => (
            <div key={title} className="rounded-xl border border-border/50 bg-card p-8 flex flex-col card-hover">
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground flex-1">{desc}</p>
              <ul className="mt-4 space-y-2">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle2 size={14} className="text-primary shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <div className="mt-6 text-center text-sm text-muted-foreground">Su valutazione</div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/contatti">
            <Button variant="hero" size="lg">Prenota una mappatura <ArrowRight size={18} /></Button>
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Soluzioni;
