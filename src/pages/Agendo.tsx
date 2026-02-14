import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Bot, PhoneCall, Phone, Calendar, Workflow, ShieldCheck, CheckCircle2, ArrowRight, Users, BarChart3 } from "lucide-react";

const AgendoPage = () => (
  <Layout>
    {/* Hero */}
    <section className="py-24 bg-gradient-accent">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-medium text-accent-foreground">
            Beta privata · Accesso anticipato su invito
          </div>
          <h1 className="text-4xl font-bold md:text-5xl">
            <span className="text-gradient-agendo">AGENDO</span>
          </h1>
          <p className="mt-2 text-xl text-muted-foreground">Il voice agent che gestisce le tue chiamate e i tuoi appuntamenti.</p>
          <div className="mt-8">
            <Link to="/contatti">
              <Button variant="accent" size="lg">Richiedi accesso anticipato <ArrowRight size={18} /></Button>
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* Cosa fa */}
    <section className="py-20">
      <div className="container">
        <h2 className="text-center text-3xl font-bold">Cosa fa AGENDO</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: PhoneCall, title: "Inbound", desc: "Risponde alle chiamate in arrivo, qualifica l'interlocutore, raccoglie dati e smista verso il reparto corretto." },
            { icon: Phone, title: "Outbound", desc: "Esegue campagne di follow-up, conferme appuntamento, richiami e notifiche telefoniche automatiche." },
            { icon: Calendar, title: "Agenda & Calendar", desc: "Prenota, modifica e cancella appuntamenti in autonomia, sincronizzandosi con il tuo calendario." },
            { icon: Workflow, title: "Routing & CRM", desc: "Si integra con CRM e gestionali via API. Ogni interazione viene loggata e resa disponibile nel flusso." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-lg border border-accent/20 bg-card p-6 card-hover">
              <Icon size={28} className="text-accent mb-3" />
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Integrazioni */}
    <section className="py-20 bg-gradient-dark">
      <div className="container">
        <h2 className="text-center text-3xl font-bold">Come si integra</h2>
        <p className="mt-4 text-center text-muted-foreground">AGENDO si collega ai tuoi strumenti tramite API e n8n.</p>
        <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
          {[
            { label: "n8n", desc: "Orchestrazione flussi e automazioni" },
            { label: "ElevenLabs", desc: "Sintesi vocale naturale" },
            { label: "Retell AI", desc: "Conversazione telefonica AI" },
            { label: "CRM / Gestionali", desc: "Sincronizzazione dati clienti" },
            { label: "Google Calendar / Outlook", desc: "Gestione appuntamenti in tempo reale" },
            { label: "Webhook & API", desc: "Connessione con qualsiasi sistema" },
          ].map(({ label, desc }) => (
            <div key={label} className="flex items-start gap-3 rounded-lg border border-border/50 bg-card p-4">
              <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-tech-blue" />
              <div>
                <p className="text-sm font-medium text-foreground">{label}</p>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Use case */}
    <section className="py-20">
      <div className="container">
        <h2 className="text-center text-3xl font-bold">Per chi è AGENDO</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {[
            { icon: Users, title: "CAF & Servizi", desc: "Alto volume di chiamate per pratiche, documenti e appuntamenti." },
            { icon: BarChart3, title: "Hospitality", desc: "Prenotazioni, info, conferme e gestione ospiti in tempo reale." },
            { icon: Calendar, title: "Studi professionali", desc: "Agende piene, reminder, follow-up e raccolta feedback." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-border/50 bg-card p-8 card-hover">
              <Icon size={28} className="text-accent mb-4" />
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Sicurezza */}
    <section className="py-20 bg-gradient-dark">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <ShieldCheck size={40} className="mx-auto text-tech-blue mb-4" />
          <h2 className="text-3xl font-bold">Sicurezza & Controllo</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            AGENDO è progettato con attenzione alla sicurezza dei dati e al controllo delle operazioni.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 text-left">
            {[
              "Separazione dati tra clienti",
              "Ruoli e accessi controllati",
              "Logging completo delle interazioni",
              "Infrastruttura cloud conforme",
            ].map((t) => (
              <div key={t} className="flex items-center gap-2 text-sm text-foreground">
                <CheckCircle2 size={14} className="text-tech-blue shrink-0" /> {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20">
      <div className="container text-center">
        <h2 className="text-3xl font-bold">Vuoi provare AGENDO?</h2>
        <p className="mt-3 text-muted-foreground">Accesso anticipato su invito. Posti limitati.</p>
        <div className="mt-6">
          <Link to="/contatti">
            <Button variant="accent" size="lg">Richiedi accesso anticipato <ArrowRight size={18} /></Button>
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default AgendoPage;
