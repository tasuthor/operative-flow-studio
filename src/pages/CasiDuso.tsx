import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Users, BarChart3, Calendar, PhoneCall, Workflow, Clock } from "lucide-react";

const verticali = [
  {
    icon: Users,
    title: "CAF & Servizi",
    problemi: ["Centinaia di chiamate al giorno per stato pratiche", "Appuntamenti gestiti su carta o Excel", "Documenti richiesti più volte", "Personale sovraccaricato da attività ripetitive"],
    soluzione: "Flusso automatizzato: chiamata → qualifica → raccolta documenti → prenotazione appuntamento → reminder → conferma.",
    kpi: ["Riduzione 40–60% chiamate ripetitive", "Tempo medio risposta < 30 secondi", "+30% appuntamenti confermati senza intervento umano"],
    automazioni: ["Smistamento chiamate per tipo pratica", "Raccolta dati pre-appuntamento via voice", "Reminder automatici multi-canale", "Report settimanale volumi e performance"],
  },
  {
    icon: BarChart3,
    title: "Hospitality / B&B / Relais",
    problemi: ["Richieste info e prenotazioni a tutte le ore", "Conferme e modifiche gestite manualmente", "Check-in info ripetute", "Difficoltà a gestire periodi di alta stagione"],
    soluzione: "Sistema integrato: richiesta → disponibilità → prenotazione → conferma → info pre-arrivo → follow-up post-soggiorno.",
    kpi: ["Risposta 24/7 senza personale aggiuntivo", "Riduzione 50% tempo gestione prenotazioni", "+20% tasso di conversione richieste"],
    automazioni: ["Risposta automatica a richieste disponibilità", "Conferma e reminder prenotazione", "Info check-in e indicazioni automatiche", "Follow-up e richiesta recensione"],
  },
  {
    icon: Calendar,
    title: "Studi & Attività su appuntamento",
    problemi: ["Agenda gestita tra telefono, email e WhatsApp", "No-show frequenti senza reminder", "Follow-up post-visita inesistente", "Difficoltà a riempire slot vuoti"],
    soluzione: "Flusso completo: richiesta → slot disponibile → prenotazione → reminder → visita → follow-up → rebooking.",
    kpi: ["Riduzione 30–50% no-show", "Risparmio 8–12 ore/settimana su gestione agenda", "+25% rebooking automatico"],
    automazioni: ["Prenotazione telefonica automatica", "Reminder 24h e 1h prima dell'appuntamento", "Follow-up post-visita con survey", "Proposta rebooking slot vuoti"],
  },
];

const CasiDuso = () => (
  <Layout>
    <section className="py-24 bg-gradient-dark">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold md:text-5xl">Casi d'uso</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Ogni settore ha le sue sfide operative. Ecco come le affrontiamo con automazioni concrete.
          </p>
        </div>
      </div>
    </section>

    {verticali.map((v, i) => (
      <section key={v.title} className={`py-20 ${i % 2 === 1 ? "bg-gradient-dark" : ""}`}>
        <div className="container">
          <div className="flex items-center gap-3 mb-6">
            <v.icon size={32} className="text-tech-blue" />
            <h2 className="text-3xl font-bold">{v.title}</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold text-destructive uppercase tracking-wider mb-3">Problemi tipici</h3>
              <ul className="space-y-2">
                {v.problemi.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-destructive shrink-0" /> {p}
                  </li>
                ))}
              </ul>

              <h3 className="mt-6 text-sm font-semibold text-tech-blue uppercase tracking-wider mb-3">Soluzione</h3>
              <p className="text-sm text-foreground leading-relaxed">{v.soluzione}</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">KPI attesi</h3>
              <ul className="space-y-2 mb-6">
                {v.kpi.map((k) => (
                  <li key={k} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle2 size={14} className="text-primary shrink-0" /> {k}
                  </li>
                ))}
              </ul>

              <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">Esempi automazioni</h3>
              <ul className="space-y-2">
                {v.automazioni.map((a) => (
                  <li key={a} className="flex items-center gap-2 text-sm text-foreground">
                    <Workflow size={14} className="text-accent shrink-0" /> {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    ))}

    <section className="py-20">
      <div className="container text-center">
        <h2 className="text-3xl font-bold">Il tuo settore non è qui?</h2>
        <p className="mt-3 text-muted-foreground">Ogni attività con processi ripetitivi può beneficiare delle nostre soluzioni.</p>
        <div className="mt-6">
          <Link to="/contatti">
            <Button variant="hero" size="lg">Prenota una mappatura <ArrowRight size={18} /></Button>
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default CasiDuso;
