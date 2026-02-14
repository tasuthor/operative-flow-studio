import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Clock, Zap, ArrowRight, Calendar, BarChart3, PhoneCall, Bot, Workflow, CheckCircle2, Users, Target, Timer, ShieldCheck, HelpCircle, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import Layout from "@/components/layout/Layout";
import { useState } from "react";

/* ─── HERO ─── */
const HeroSection = () => (
  <section className="relative overflow-hidden py-24 md:py-32">
    <div className="absolute inset-0 z-0">
      <img src={heroBg} alt="" className="h-full w-full object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
    </div>
    <div className="container relative z-10">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-medium text-accent-foreground">
          <Bot size={14} className="text-accent" />
          Accesso anticipato AGENDO — su invito (posti limitati)
        </div>
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl leading-tight">
          Sistemi operativi AI<br />
          <span className="text-gradient-brand">per PMI che producono</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Implementiamo automazioni di processo con n8n e AI. Gestiamo chiamate e appuntamenti con AGENDO, il nostro voice agent. Risultati misurabili, messa in produzione rapida.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link to="/contatti">
            <Button variant="hero" size="lg">
              Prenota una mappatura (30 min)
              <ArrowRight size={18} />
            </Button>
          </Link>
          <Link to="/soluzioni">
            <Button variant="heroOutline" size="lg">
              Vedi cosa possiamo automatizzare
            </Button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { icon: Clock, label: "Ore di lavoro manuale risparmiate" },
            { icon: PhoneCall, label: "Chiamate gestite automaticamente" },
            { icon: Workflow, label: "Processi ordinati e misurabili" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3 rounded-lg border border-border/50 bg-card/50 p-4 backdrop-blur-sm">
              <Icon size={20} className="shrink-0 text-primary" />
              <span className="text-sm text-foreground">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ─── PROBLEMA ─── */
const ProblemaSection = () => (
  <section className="py-20 bg-gradient-dark">
    <div className="container">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Il problema che risolviamo</h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Entriamo dove si perde tempo. Ogni giorno, attività ripetitive sottraggono ore al lavoro che conta davvero.
        </p>
      </div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: Phone, text: "Chiamate perse o non ricontattate" },
          { icon: Calendar, text: "Appuntamenti gestiti a mano" },
          { icon: Target, text: "Lead non ricontattati in tempo" },
          { icon: Workflow, text: "Strumenti scollegati tra loro" },
        ].map(({ icon: Icon, text }) => (
          <div key={text} className="rounded-lg border border-border/50 bg-card p-6 card-hover">
            <Icon size={24} className="text-destructive mb-3" />
            <p className="text-sm text-foreground">{text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── COSA FACCIAMO ─── */
const CosaFacciamoSection = () => (
  <section className="py-20">
    <div className="container">
      <h2 className="text-center text-3xl font-bold md:text-4xl">Cosa facciamo</h2>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="rounded-xl border border-border/50 bg-gradient-teal p-8">
          <Workflow size={32} className="text-tech-blue mb-4" />
          <h3 className="text-xl font-semibold">Automazioni di processo con n8n</h3>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Colleghiamo CRM, calendari, gestionali e strumenti già in uso. Costruiamo flussi automatici: dal lead al follow-up, dalla richiesta allo smistamento, dai reminder agli appuntamenti.
          </p>
          <ul className="mt-4 space-y-2">
            {["Lead → follow-up → appuntamento", "Raccolta dati → smistamento automatico", "Report periodici automatici", "Reminder e notifiche intelligenti"].map((t) => (
              <li key={t} className="flex items-center gap-2 text-sm text-foreground">
                <CheckCircle2 size={14} className="text-tech-blue shrink-0" /> {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-border/50 bg-gradient-accent p-8">
          <Bot size={32} className="text-accent mb-4" />
          <h3 className="text-xl font-semibold">Automazioni telefoniche con AGENDO</h3>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Il nostro voice agent gestisce chiamate inbound e outbound, prende appuntamenti, raccoglie informazioni e si integra con i tuoi sistemi via API.
          </p>
          <ul className="mt-4 space-y-2">
            {["Gestione chiamate inbound 24/7", "Campagne outbound automatiche", "Prenotazione e rebooking appuntamenti", "Routing e integrazione CRM"].map((t) => (
              <li key={t} className="flex items-center gap-2 text-sm text-foreground">
                <CheckCircle2 size={14} className="text-accent shrink-0" /> {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

/* ─── AGENDO PREVIEW ─── */
const AgendoPreview = () => (
  <section className="py-20 bg-gradient-dark">
    <div className="container">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-medium text-accent-foreground">
          Beta privata · Accesso anticipato
        </div>
        <h2 className="text-3xl font-bold md:text-4xl">
          <span className="text-gradient-agendo">AGENDO</span> in 30 secondi
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Voice agent per chiamate inbound/outbound, gestione appuntamenti e integrazione con i tuoi sistemi. In evoluzione continua, accesso su invito.
        </p>
      </div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: PhoneCall, title: "Inbound", desc: "Risponde, qualifica, raccoglie dati e smista le chiamate in arrivo" },
          { icon: Phone, title: "Outbound", desc: "Campagne di richiamo, conferme appuntamento, follow-up automatici" },
          { icon: Calendar, title: "Agenda & Calendar", desc: "Prenota, modifica e cancella appuntamenti in autonomia" },
          { icon: Workflow, title: "CRM & Workflow", desc: "Si integra via API con n8n, CRM, gestionali e calendari" },
        ].map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-lg border border-accent/20 bg-card p-6 card-hover">
            <Icon size={24} className="text-accent mb-3" />
            <h4 className="font-semibold">{title}</h4>
            <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground">
          <strong className="text-foreground">Per chi è:</strong> attività con alto volume di telefonate e prenotazioni (CAF, hospitality, studi professionali).
        </p>
      </div>
    </div>
  </section>
);

/* ─── PROCESSO ─── */
const ProcessoSection = () => (
  <section className="py-20">
    <div className="container">
      <h2 className="text-center text-3xl font-bold md:text-4xl">Come lavoriamo</h2>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { step: "01", title: "Mappatura operativa", desc: "Call di 30–60 min per capire processi, strumenti e obiettivi.", time: "Giorno 1" },
          { step: "02", title: "Sprint implementazione", desc: "Costruiamo le automazioni e configuriamo AGENDO in 7–14 giorni.", time: "Giorni 2–14" },
          { step: "03", title: "Testing & ottimizzazione", desc: "Testing reale con dati veri, ottimizzazione per 2–4 settimane.", time: "Settimane 2–4" },
          { step: "04", title: "Estensione & scala", desc: "Nuovi flussi, pacchetti aggiuntivi, evoluzione con AGENDO.", time: "Continuo" },
        ].map(({ step, title, desc, time }) => (
          <div key={step} className="relative rounded-lg border border-border/50 bg-card p-6">
            <span className="text-3xl font-bold text-primary/20">{step}</span>
            <h4 className="mt-2 font-semibold">{title}</h4>
            <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            <span className="mt-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">{time}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── KPI ─── */
const KpiSection = () => (
  <section className="py-20 bg-gradient-dark">
    <div className="container">
      <h2 className="text-center text-3xl font-bold md:text-4xl">Risultati misurabili</h2>
      <p className="mt-4 text-center text-muted-foreground">Ogni progetto parte con una baseline e misura il prima/dopo.</p>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {[
          { icon: Timer, label: "Ore risparmiate/settimana" },
          { icon: PhoneCall, label: "Richieste gestite automaticamente" },
          { icon: Calendar, label: "Appuntamenti confermati" },
          { icon: Phone, label: "Riduzione chiamate perse" },
          { icon: Zap, label: "Tempo medio di risposta" },
        ].map(({ icon: Icon, label }) => (
          <div key={label} className="rounded-lg border border-border/50 bg-card p-5 text-center card-hover">
            <Icon size={24} className="mx-auto text-primary mb-2" />
            <p className="text-sm font-medium text-foreground">{label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── CASI D'USO TEASER ─── */
const CasiDusoTeaser = () => (
  <section className="py-20">
    <div className="container">
      <h2 className="text-center text-3xl font-bold md:text-4xl">Casi d'uso</h2>
      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {[
          { icon: Users, title: "CAF & Servizi", desc: "Gestione pratiche, smistamento chiamate, raccolta documenti e prenotazione appuntamenti." },
          { icon: BarChart3, title: "Hospitality", desc: "Prenotazioni, check-in info, conferme automatiche, gestione richieste ospiti 24/7." },
          { icon: Calendar, title: "Studi & Appuntamenti", desc: "Agende ordinate, reminder automatici, follow-up post-visita e raccolta feedback." },
        ].map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-xl border border-border/50 bg-card p-8 card-hover">
            <Icon size={28} className="text-tech-blue mb-4" />
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link to="/casi-duso">
          <Button variant="heroOutline">
            Vedi i casi d'uso <ArrowRight size={16} />
          </Button>
        </Link>
      </div>
    </div>
  </section>
);

/* ─── ACCESSO ANTICIPATO ─── */
const AccessoAnticipatoSection = () => (
  <section className="py-20 bg-gradient-accent">
    <div className="container">
      <div className="mx-auto max-w-2xl text-center">
        <ShieldCheck size={40} className="mx-auto text-accent mb-4" />
        <h2 className="text-3xl font-bold md:text-4xl">Vuoi partire con priorità alta?</h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Se hai un processo chiaro o un alto volume di chiamate, puoi richiedere l'accesso anticipato al nostro percorso pilota. Posti limitati, selezione su requisiti minimi.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-3 text-sm">
          {["Strumenti base (calendar/CRM)", "Referente operativo interno", "Disponibilità feedback breve"].map((r) => (
            <div key={r} className="flex items-center gap-2 justify-center text-foreground">
              <CheckCircle2 size={14} className="text-accent shrink-0" /> {r}
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link to="/contatti">
            <Button variant="accent" size="lg">
              Richiedi accesso anticipato <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

/* ─── FAQ ─── */
const faqData = [
  { q: "Dobbiamo cambiare gli strumenti che usiamo già?", a: "No. Ci integriamo con i tuoi strumenti attuali (CRM, calendario, gestionale) tramite API e n8n. Non serve cambiare nulla." },
  { q: "Quanto tempo serve per vedere i primi risultati?", a: "Dipende dalla complessità, ma in genere le prime automazioni sono operative in 7–14 giorni. Risultati misurabili entro 4 settimane." },
  { q: "AGENDO sostituisce il personale?", a: "No. AGENDO gestisce le attività ripetitive e a basso valore (smistamento chiamate, reminder, raccolta dati), liberando tempo per il lavoro che richiede competenza umana." },
  { q: "I dati sono al sicuro?", a: "Sì. Applichiamo best practice di sicurezza: accessi controllati, separazione dati tra clienti, logging delle operazioni." },
  { q: "Possiamo partire con un solo processo?", a: "Assolutamente sì. Anzi, consigliamo di partire da un processo specifico, validare i risultati e poi estendere." },
  { q: "Quanto costa?", a: "Dipende dal contesto e dalla complessità. La call di mappatura (30 min, gratuita) serve proprio a capire cosa serve e darti una stima chiara." },
];

const FaqSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <section className="py-20 bg-gradient-dark">
      <div className="container">
        <h2 className="text-center text-3xl font-bold md:text-4xl">Domande frequenti</h2>
        <div className="mx-auto mt-12 max-w-2xl space-y-3">
          {faqData.map((faq, i) => (
            <div key={i} className="rounded-lg border border-border/50 bg-card overflow-hidden">
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 p-5 text-left"
              >
                <span className="text-sm font-medium text-foreground">{faq.q}</span>
                <ChevronDown size={18} className={`shrink-0 text-muted-foreground transition-transform ${openIdx === i ? "rotate-180" : ""}`} />
              </button>
              {openIdx === i && (
                <div className="border-t border-border/50 px-5 pb-5 pt-3 animate-fade-in">
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── CTA FINALE ─── */
const CtaFinale = () => (
  <section className="py-20">
    <div className="container">
      <div className="mx-auto max-w-2xl rounded-2xl border border-primary/30 bg-card p-10 text-center glow-primary">
        <h2 className="text-3xl font-bold">Prenota una mappatura operativa</h2>
        <p className="mt-3 text-muted-foreground">
          30 minuti per capire dove stai perdendo tempo e come possiamo automatizzare i tuoi processi.
        </p>
        <div className="mt-6">
          <Link to="/contatti">
            <Button variant="hero" size="lg">
              Prenota ora (30 min, gratuita) <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

/* ─── PAGE ─── */
const Index = () => (
  <Layout>
    <HeroSection />
    <ProblemaSection />
    <CosaFacciamoSection />
    <AgendoPreview />
    <ProcessoSection />
    <KpiSection />
    <CasiDusoTeaser />
    <AccessoAnticipatoSection />
    <FaqSection />
    <CtaFinale />
  </Layout>
);

export default Index;
