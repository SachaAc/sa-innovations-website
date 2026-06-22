import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  Monitor,
  Pencil,
  Rocket,
  KeyRound,
  CalendarClock,
  Handshake,
  Gift,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";
import { toast } from "sonner";

import logoAsset from "@/assets/sa-logo.png.asset.json";
import { Reveal } from "@/components/landing/Reveal";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SA Innovations — Webdesign op maat voor ondernemers" },
      {
        name: "description",
        content:
          "Moderne, persoonlijke websites voor MKB en professionals. Geen templates — maatwerk dat past bij jouw merk. Vraag een gratis consult aan.",
      },
      { property: "og:title", content: "SA Innovations — Webdesign op maat" },
      {
        property: "og:description",
        content:
          "Strakke, persoonlijke websites voor ondernemers. Van eerste idee tot live website.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "SA Innovations",
          description:
            "Webdesignbureau dat moderne, persoonlijke websites bouwt voor MKB en ondernemers.",
          areaServed: "NL",
        }),
      },
    ],
  }),
  component: Index,
});

const NAV = [
  { href: "#diensten", label: "Wat ik doe" },
  { href: "#waarom", label: "Waarom SA Innovations" },
  { href: "#contact", label: "Contact" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Diensten />
        <Waarom />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

/* ---------- Navbar ---------- */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full backdrop-blur transition-all ${
        scrolled
          ? "bg-background/90 border-b border-border"
          : "bg-background/60"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2" aria-label="SA Innovations — home">
          <img src={logoAsset.url} alt="SA Innovations" className="h-10 w-auto" />
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {NAV.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-foreground/70 transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden rounded-md p-2 text-foreground"
          aria-label={open ? "Sluit menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-6 py-4">
            {NAV.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base text-foreground/80 hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-background pt-16 pb-28 md:pt-24 md:pb-40"
    >
      {/* soft pink wash bottom */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-accent"
      />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <img
            src={logoAsset.url}
            alt="SA Innovations logo"
            className="mx-auto mb-10 h-28 w-auto md:h-36"
          />
        </Reveal>

        <Reveal delay={120}>
          <h1 className="text-balance text-4xl leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Jouw website. <span className="italic">Jouw eigendom.</span>
            <br className="hidden md:block" /> Jouw succes.
          </h1>
        </Reveal>

        <Reveal delay={220}>
          <p className="mx-auto mt-8 max-w-2xl text-base text-foreground/70 md:text-lg">
            SA Innovations bouwt moderne, persoonlijke websites die écht bij jou passen —
            van eerste idee tot live website.
          </p>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-10 flex flex-col items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium tracking-wide text-primary-foreground transition-all hover:gap-3 hover:shadow-lg"
            >
              Vraag een gratis consult aan
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <div className="mt-6 flex items-center gap-3" aria-hidden>
              <span className="h-px w-12 bg-pink" />
              <span className="h-1.5 w-1.5 rounded-full bg-pink" />
              <span className="h-px w-12 bg-pink" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Wat ik doe ---------- */
const DIENSTEN = [
  {
    icon: Monitor,
    title: "Moderne webdesign",
    body: "Strak, snel en volledig responsive op elk apparaat.",
  },
  {
    icon: Pencil,
    title: "Persoonlijk maatwerk",
    body: "Geen standaardoplossingen, maar een website die echt bij jou past.",
  },
  {
    icon: Rocket,
    title: "Van idee tot live",
    body: "Ik begeleid je van het eerste gesprek tot de lancering.",
  },
];

function Diensten() {
  return (
    <section id="diensten" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-foreground/50">
              Wat ik doe
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 text-3xl md:text-5xl">
              Websites die werken — <span className="italic">en er goed uitzien</span>
            </h2>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-6 text-foreground/70">
              Ik bouw op maat gemaakte websites voor ondernemers en bedrijven die
              professioneel online aanwezig willen zijn. Geen templates. Geen compromissen.
              Gewoon een website die past bij wie jij bent.
            </p>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-6 md:grid-cols-3">
          {DIENSTEN.map((d, i) => (
            <Reveal as="li" key={d.title} delay={i * 120}>
              <article className="group h-full rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)]">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-accent">
                  <d.icon size={24} className="text-foreground" />
                </div>
                <h3 className="font-serif text-2xl">{d.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">{d.body}</p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Waarom ---------- */
const WAAROM = [
  {
    icon: KeyRound,
    title: "U blijft altijd eigenaar",
    body: "Van uw website, uw domeinnaam en uw data. Ik bouw, ú bezit.",
  },
  {
    icon: CalendarClock,
    title: "7 dagen per week bereikbaar",
    body: "Vragen of een update nodig? Ik sta klaar, ook in het weekend.",
  },
  {
    icon: Handshake,
    title: "Persoonlijk contact",
    body: "Geen ticketsysteem. Ik denk actief met u mee en verder dan alleen de opdracht.",
  },
  {
    icon: Gift,
    title: "Gratis eerste consult",
    body: "Een vrijblijvend online gesprek van 30 minuten. Daarna ontvangt u een offerte op maat.",
  },
];

function Waarom() {
  return (
    <section id="waarom" className="bg-accent py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-foreground/50">
              Waarom SA Innovations
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 text-3xl md:text-5xl">
              Wat mij <span className="italic">anders</span> maakt
            </h2>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-6 md:grid-cols-2">
          {WAAROM.map((w, i) => (
            <Reveal as="li" key={w.title} delay={i * 100}>
              <article className="relative h-full overflow-hidden rounded-2xl bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)]">
                <span
                  aria-hidden
                  className="absolute left-0 top-0 h-full w-1 bg-pink"
                />
                <div className="flex items-start gap-5">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent">
                    <w.icon size={20} className="text-foreground" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-serif text-xl md:text-2xl">{w.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                      {w.body}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitting(true);

    try {
      const response = await fetch(
        "https://formspree.io/f/mjgqvrjk",
        {
          method: "POST",
          body: new FormData(e.currentTarget),
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        toast.success(
          "Bedankt! Ik neem zo snel mogelijk contact met u op."
        );

        e.currentTarget.reset();
      } else {
        toast.error(
          "Er is iets misgegaan. Probeer het later opnieuw."
        );
      }
    } catch {
      toast.error(
        "Er is iets misgegaan. Probeer het later opnieuw."
      );
    }

    setSubmitting(false);
  };

  return (
    <section id="contact" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-foreground/50">Contact</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 text-3xl md:text-5xl">
              Laten we <span className="italic">kennismaken</span>
            </h2>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-6 text-foreground/70">
              Plan een gratis consult van 30 minuten of stel gerust uw vraag.
            </p>
          </Reveal>
        </div>

        <Reveal delay={240}>
          <form
            onSubmit={onSubmit}
            className="mt-12 rounded-2xl border border-border bg-card p-6 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.25)] md:p-10"
            noValidate
          >
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Naam" name="naam" required />
              <Field label="E-mailadres" name="email" type="email" required />
              <Field label="Telefoonnummer" name="telefoon" type="tel" className="md:col-span-2" />
              <div className="md:col-span-2">
                <label htmlFor="bericht" className="mb-2 block text-sm text-foreground/70">
                  Bericht <span className="text-foreground/40">*</span>
                </label>
                <textarea
                  id="bericht"
                  name="bericht"
                  required
                  rows={5}
                  className="w-full resize-y rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-foreground/40 focus:border-foreground"
                  placeholder="Vertel kort waar ik je mee kan helpen…"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium tracking-wide text-primary-foreground transition-all hover:shadow-lg disabled:opacity-60 md:w-auto"
            >
              {submitting ? "Versturen…" : "Verstuur bericht"}
              <ArrowRight size={16} />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={name} className="mb-2 block text-sm text-foreground/70">
        {label} {required && <span className="text-foreground/40">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-foreground/40 focus:border-foreground"
      />
    </div>/* ---------- Contact ---------- */
  function Contact() {
    const [submitting, setSubmitting] = useState(false);

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setSubmitting(true);
      const data = new FormData(e.currentTarget);
      const naam = String(data.get("naam") || "").trim();
      const email = String(data.get("email") || "").trim();
      const bericht = String(data.get("bericht") || "").trim();
      if (!naam || !email || !bericht) {
        toast.error("Vul a.u.b. alle verplichte velden in.");
        setSubmitting(false);
        return;
      }
      setTimeout(() => {
        toast.success("Bedankt! Ik neem zo snel mogelijk contact met u op.");
        (e.target as HTMLFormElement).reset();
        setSubmitting(false);
      }, 400);
    };

    return (
      <section id="contact" className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.25em] text-foreground/50">Contact</p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-4 text-3xl md:text-5xl">
                Laten we <span className="italic">kennismaken</span>
              </h2>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-6 text-foreground/70">
                Plan een gratis consult van 30 minuten of stel gerust uw vraag.
              </p>
            </Reveal>
          </div>

          <Reveal delay={240}>
            <form
              onSubmit={onSubmit}
              className="mt-12 rounded-2xl border border-border bg-card p-6 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.25)] md:p-10"
              noValidate
            >
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Naam" name="naam" required />
                <Field label="E-mailadres" name="email" type="email" required />
                <Field label="Telefoonnummer" name="telefoon" type="tel" className="md:col-span-2" />
                <div className="md:col-span-2">
                  <label htmlFor="bericht" className="mb-2 block text-sm text-foreground/70">
                    Bericht <span className="text-foreground/40">*</span>
                  </label>
                  <textarea
                    id="bericht"
                    name="bericht"
                    required
                    rows={5}
                    className="w-full resize-y rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-foreground/40 focus:border-foreground"
                    placeholder="Vertel kort waar ik je mee kan helpen…"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium tracking-wide text-primary-foreground transition-all hover:shadow-lg disabled:opacity-60 md:w-auto"
              >
                {submitting ? "Versturen…" : "Verstuur bericht"}
                <ArrowRight size={16} />
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    );
  }

  function Field({
                   label,
                   name,
                   type = "text",
                   required = false,
                   className = "",
                 }: {
    label: string;
    name: string;
    type?: string;
    required?: boolean;
    className?: string;
  }) {
    return (
      <div className={className}>
        <label htmlFor={name} className="mb-2 block text-sm text-foreground/70">
          {label} {required && <span className="text-foreground/40">*</span>}
        </label>
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-foreground/40 focus:border-foreground"
        />
      </div>
    );
  }
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-background py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center">
        <img src={logoAsset.url} alt="SA Innovations" className="h-12 w-auto" />
        <p className="font-serif text-lg italic text-foreground/80">
          Modern. Persoonlijk. Van u.
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {NAV.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-foreground/60 transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-xs text-foreground/50">
          © 2026 SA Innovations — Alle rechten voorbehouden
        </p>
      </div>
    </footer>
  );
}
