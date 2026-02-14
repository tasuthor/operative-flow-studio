import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, FileText, Users, MessageSquare, Settings, Workflow } from "lucide-react";

const Metodo = () => (
  <Layout>
    <section className="py-24 bg-gradient-dark">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold md:text-5xl">Il nostro metodo</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Un percorso strutturato per portare le automazioni in produzione nel minor tempo possibile, con risultati misurabili.
          </p>
        </div>
      </div>
    </section>

    {/* 4 step */}
    <section className="py-20">
      <div className="container">
        <h2 className="text-center text-3xl font-bold">Come lavoriamo</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { step: "01", title: "Mappatura operativa", desc: "Call gratuita di 30–60 minuti. Analizziamo i tuoi processi, strumenti e colli di bottiglia. Identifichiamo le automazioni con il maggior impatto.", color: "text-primary" },
            { step: "02", title: "Sprint implementazione", desc: "In 7–14 giorni costruiamo le automazioni, configuriamo AGENDO e colleghiamo i tuoi strumenti. Tutto testato prima del go-live.", color: "text-tech-blue" },
            { step: "03", title: "Testing reale", desc: "2–4 settimane di utilizzo con dati reali. Monitoriamo i KPI, raccogliamo feedback e ottimizziamo i flussi.", color: "text-accent" },
            { step: "04", title: "Estensione", desc: "Nuovi processi, nuovi flussi, evoluzione AGENDO. Pacchetti scalabili in base alle esigenze.", color: "text-primary" },
          ].map(({ step, title, desc, color }) => (
            <div key={step} className="rounded-lg border border-border/50 bg-card p-6">
              <span className={`text-3xl font-bold ${color} opacity-30`}>{step}</span>
              <h3 className="mt-2 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Cosa consegniamo */}
    <section className="py-20 bg-gradient-dark">
      <div className="container">
        <h2 className="text-center text-3xl font-bold">Cosa consegniamo</h2>
        <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2">
          {[
            { icon: Workflow, label: "Automazioni operative", desc: "Flussi n8n funzionanti e documentati" },
            { icon: FileText, label: "Documentazione", desc: "Schema flussi, configurazioni, accessi" },
            { icon: Users, label: "Training", desc: "Sessione operativa per il tuo team" },
            { icon: Settings, label: "Monitoraggio", desc: "Dashboard KPI e alert automatici" },
          ].map(({ icon: Icon, label, desc }) => (
            <div key={label} className="flex items-start gap-3 rounded-lg border border-border/50 bg-card p-5">
              <Icon size={20} className="mt-0.5 text-primary shrink-0" />
              <div>
                <p className="text-sm font-medium text-foreground">{label}</p>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Governance */}
    <section className="py-20">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <MessageSquare size={40} className="mx-auto text-tech-blue mb-4" />
          <h2 className="text-3xl font-bold">Governance</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Call settimanale breve per allineamento. Feedback loop continuo. Report KPI condiviso. Nessun meeting inutile.
          </p>
        </div>
      </div>
    </section>

    {/* Requisiti minimi */}
    <section className="py-20 bg-gradient-dark">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold">Requisiti minimi per partire</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 text-left">
            {[
              "Almeno un processo ripetitivo identificato",
              "Strumenti base in uso (calendar, CRM o gestionale)",
              "Un referente operativo interno",
              "Disponibilità per call settimanale breve",
            ].map((r) => (
              <div key={r} className="flex items-center gap-2 text-sm text-foreground">
                <CheckCircle2 size={14} className="text-primary shrink-0" /> {r}
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link to="/contatti">
              <Button variant="hero" size="lg">Prenota la mappatura <ArrowRight size={18} /></Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Metodo;
