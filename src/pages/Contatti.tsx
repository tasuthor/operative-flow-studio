import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

const Contatti = () => {
  const [form, setForm] = useState({
    nome: "", azienda: "", settore: "", problema: "", strumenti: "", volume: "", email: "", telefono: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder — in production connect to backend
    alert("Grazie! Ti contatteremo entro 24 ore per fissare la mappatura.");
  };

  return (
    <Layout>
      <section className="py-24 bg-gradient-dark">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold md:text-5xl">Prenota la tua mappatura</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              30 minuti per analizzare i tuoi processi e capire dove possiamo portare valore. Gratuita, senza impegno.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-3">
            {/* Info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Contattaci</h2>
              <div className="space-y-4">
                {[
                  { icon: Mail, label: "info@tasuthor.com" },
                  { icon: Phone, label: "+39 XXX XXX XXXX" },
                  { icon: MapPin, label: "Italia" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Icon size={18} className="text-primary shrink-0" /> {label}
                  </div>
                ))}
              </div>

              <div className="rounded-lg border border-border/50 bg-card p-6">
                <h3 className="font-semibold text-sm">Calendario</h3>
                <p className="mt-2 text-xs text-muted-foreground">
                  Embed calendario in arrivo. Per ora, compila il form e ti proporremo uno slot entro 24h.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { key: "nome", label: "Nome e cognome", type: "text" },
                    { key: "azienda", label: "Azienda", type: "text" },
                    { key: "email", label: "Email", type: "email" },
                    { key: "telefono", label: "Telefono", type: "tel" },
                  ].map(({ key, label, type }) => (
                    <div key={key}>
                      <label className="mb-1.5 block text-xs font-medium text-foreground">{label}</label>
                      <input
                        type={type}
                        required
                        value={(form as any)[key]}
                        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                        className="w-full rounded-md border border-border bg-muted px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-medium text-foreground">Settore</label>
                  <select
                    value={form.settore}
                    onChange={(e) => setForm({ ...form, settore: e.target.value })}
                    className="w-full rounded-md border border-border bg-muted px-3 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="">Seleziona...</option>
                    <option>CAF / Servizi</option>
                    <option>Hospitality / B&B</option>
                    <option>Studio professionale</option>
                    <option>Retail / Commercio</option>
                    <option>Artigianato strutturato</option>
                    <option>Altro</option>
                  </select>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-medium text-foreground">Problema principale</label>
                  <textarea
                    rows={3}
                    value={form.problema}
                    onChange={(e) => setForm({ ...form, problema: e.target.value })}
                    className="w-full rounded-md border border-border bg-muted px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                    placeholder="Descrivi brevemente il processo o la sfida principale..."
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-foreground">Strumenti usati</label>
                    <input
                      type="text"
                      value={form.strumenti}
                      onChange={(e) => setForm({ ...form, strumenti: e.target.value })}
                      className="w-full rounded-md border border-border bg-muted px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="CRM, calendario, gestionale..."
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-foreground">Volume chiamate/settimana</label>
                    <input
                      type="text"
                      value={form.volume}
                      onChange={(e) => setForm({ ...form, volume: e.target.value })}
                      className="w-full rounded-md border border-border bg-muted px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Es: 50-100"
                    />
                  </div>
                </div>

                <p className="text-xs text-muted-foreground">
                  Ti contattiamo solo per la richiesta. I tuoi dati non vengono condivisi con terze parti.
                </p>

                <Button variant="hero" size="lg" type="submit" className="w-full sm:w-auto">
                  Prenota la mappatura <ArrowRight size={18} />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contatti;
