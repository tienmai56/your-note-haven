import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Target,
  NotebookPen,
  History,
  Check,
  Plus,
  Flame,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import heroImg from "@/assets/hero-reflection.jpg";
import disciplineImg from "@/assets/section-discipline.jpg";
import logo from "@/assets/mat-mind-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mat Mind — Train BJJ with purpose" },
      {
        name: "description",
        content:
          "A reflection journal for jiu-jitsu practitioners. Set goals, plan tasks before class, and reflect against them after. Train with intention, not just attendance.",
      },
      { property: "og:title", content: "Mat Mind — Train BJJ with purpose" },
      {
        property: "og:description",
        content:
          "Set goals, plan tasks before class, and reflect after. Train with intention, not just attendance.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Landing,
});

function Wordmark() {
  return (
    <a href="#top" className="flex items-center gap-2 group">
      <img
        src={logo}
        alt="Mat Mind logo"
        width={32}
        height={32}
        className="h-8 w-8 rounded-lg"
      />
      <span className="font-heading font-extrabold tracking-tight text-base">
        Mat Mind
      </span>
    </a>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Wordmark />
        <a
          href="#waitlist"
          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          Join waitlist →
        </a>
      </div>
    </header>
  );
}

function GoalMock() {
  return (
    <div className="relative">
      <div className="absolute -inset-8 rounded-3xl bg-primary/20 blur-3xl" aria-hidden />
      <div className="relative rounded-2xl border border-border bg-card shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between border-b border-border px-5 py-3">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-primary" />
            <span className="font-heading text-sm font-semibold">Leg Locks</span>
          </div>
          <span className="text-xs text-muted-foreground">Week 3</span>
        </div>

        <div className="px-5 py-4 space-y-3">
          {[
            { label: "Entry from half guard", count: 4, done: true },
            { label: "Controlling two legs", count: 2, done: true },
            { label: "Finishing mechanics", count: 1, done: false },
          ].map((t) => (
            <div
              key={t.label}
              className="flex items-center justify-between rounded-lg border border-border/70 bg-background/40 px-3 py-2.5"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`grid place-items-center h-5 w-5 rounded border ${
                    t.done
                      ? "bg-primary border-primary text-primary-foreground"
                      : "border-border"
                  }`}
                >
                  {t.done && <Check className="h-3 w-3" strokeWidth={3} />}
                </div>
                <span className="text-sm">{t.label}</span>
              </div>
              <span className="text-xs text-muted-foreground tabular-nums">
                {t.count}×
              </span>
            </div>
          ))}

          <div className="rounded-lg border border-primary/30 bg-primary/5 p-3">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-medium text-muted-foreground">
                Tue · Reflection
              </span>
              <Flame className="h-3.5 w-3.5 text-primary" />
            </div>
            <p className="text-sm leading-relaxed">
              Hit the entry twice in rolling, lost the second leg both times. Need to
              cross-face earlier.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroPhone() {
  const entries = [
    {
      n: 1,
      text:
        "Hit the half-guard entry twice in rolling. Lost the second leg both times — need to cross-face earlier.",
    },
    {
      n: 2,
      text:
        "Stayed calm under mount instead of bridging blind. Framed, recovered half. First time it actually worked.",
    },
    {
      n: 3,
      text:
        "Got smashed from side control again. Hips were flat. Plan: drill shrimp + underhook entry Thursday.",
    },
  ];
  return (
    <div className="relative mx-auto w-[300px] sm:w-[340px]">
      <div className="absolute -inset-10 rounded-[3rem] bg-primary/20 blur-3xl" aria-hidden />
      <div className="relative rounded-[2.75rem] border border-border bg-card p-2.5 shadow-2xl">
        <div className="relative rounded-[2.25rem] bg-[oklch(0.18_0.03_270)] text-white overflow-hidden h-[640px]">
          <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-black/80" />
          <div className="flex items-center justify-between px-6 pt-4 text-[11px] font-medium text-white/80">
            <span>22:19</span>
            <span>● ●</span>
          </div>
          <div className="flex items-center justify-between px-5 mt-3">
            <div className="h-7 w-7 rounded-full bg-white/10 grid place-items-center text-xs">⌕</div>
            <span className="font-heading font-bold">Mat Mind</span>
            <div className="h-7 w-7 rounded-full bg-white/10 grid place-items-center text-xs">⚙</div>
          </div>
          <div className="px-6 mt-4 text-center">
            <p className="italic text-[13px] leading-snug text-white/85">
              "Reflection without a preset goal is like grading a test without a rubric."
            </p>
            <p className="mt-1.5 text-[11px] text-white/50">— Mat Mind</p>
          </div>
          <div className="mt-4 flex items-center justify-between px-6 text-[11px] text-white/70">
            <span>▣ 142 Sessions</span>
            <span style={{ color: "var(--mint)" }}>♡ 12 Breakthroughs</span>
          </div>
          <div className="mx-4 mt-3 rounded-xl overflow-hidden border border-white/10">
            <img src={heroImg} alt="" className="w-full h-28 object-cover" />
          </div>
          <div className="mt-3 px-5 space-y-2.5">
            {entries.map((e) => (
              <div key={e.n} className="flex gap-3">
                <span
                  className="font-heading text-xl font-bold leading-none mt-0.5"
                  style={{ color: "var(--mint)" }}
                >
                  {e.n}
                </span>
                <p className="text-[11.5px] leading-snug text-white/85">{e.text}</p>
              </div>
            ))}
          </div>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-4 rounded-full bg-black/50 backdrop-blur px-5 py-2.5 border border-white/10">
            <span className="text-[10px] text-white/70">Entries</span>
            <span
              className="grid place-items-center h-8 w-8 rounded-full text-black font-bold"
              style={{ background: "var(--mint)" }}
            >
              +
            </span>
            <span className="text-[10px] text-white/70">Calendar</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="border-b border-border/60">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:py-24 md:gap-16 items-center">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
            <span aria-hidden>★</span> Free Beta · iOS
          </span>
          <h1 className="mt-6 font-heading text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.02] tracking-tight">
            Train with
            <br />
            <span style={{ color: "var(--coral, oklch(0.72 0.16 35))" }}>
              purpose
            </span>
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground leading-relaxed">
            A beautifully crafted reflection journal for jiu-jitsu. Set goals,
            plan tasks before class, and reflect honestly after — so every roll
            adds up to real progress.
          </p>
          <p className="mt-5 text-sm font-medium text-muted-foreground/80">
            No ads. No subscriptions. No paywalls.
          </p>
          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="h-14 rounded-2xl px-7 text-base font-bold tracking-wide shadow-lg hover:opacity-90"
              style={{
                background: "var(--coral, oklch(0.72 0.16 35))",
                color: "white",
              }}
            >
              <a href="#waitlist">JOIN WAITLIST</a>
            </Button>
          </div>
        </div>

        <div className="relative">
          <HeroPhone />
        </div>
      </div>
    </section>
  );
}

function Features() {
  const items = [
    {
      emoji: "🎯",
      title: "Set up Goals & Tasks",
      body: "Break a goal into specific tasks. Schedule which days to work on each. Walk into class knowing exactly what you're hunting for.",
    },
    {
      emoji: "📝",
      title: "Reflect",
      body: "After class, capture what worked, where you got stuck, and how it felt. Tied to the session, not floating notes.",
    },
    {
      emoji: "💬",
      title: "Get Feedback",
      body: "See the gap between what you planned and what you actually did. Patterns over time become the lesson.",
    },
    {
      emoji: "🔒",
      title: "Completely Private",
      body: "Your entries stay on your device. No accounts, no tracking, no ads. Protect your journal with Face ID or Touch ID.",
    },
  ];

  return (
    <section className="border-b border-border/60 bg-card/30">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight">
            What you can do with Mat Mind
          </h2>
          <p className="mt-4 text-muted-foreground text-base md:text-lg">
            Everything you need for a meaningful training practice, nothing you don't.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl bg-background p-7 shadow-sm border border-border/40 transition-all hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="text-3xl mb-5" aria-hidden>
                {f.emoji}
              </div>
              <h3 className="font-heading text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-[15px] text-muted-foreground leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function Banner() {
  return (
    <section className="border-b border-border/60">
      <div className="relative h-[280px] md:h-[400px] overflow-hidden">
        <img
          src={disciplineImg}
          alt="A worn jiu-jitsu belt next to a notebook and pen"
          width={1920}
          height={1080}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/20" />
        <div className="relative mx-auto max-w-6xl h-full px-6 flex items-center">
          <blockquote className="max-w-lg">
            <p className="font-heading text-2xl md:text-4xl font-semibold leading-tight">
              "Reflection without a preset goal is like grading a test without a rubric."
            </p>
            <footer className="mt-4 text-sm text-muted-foreground">
              The reason we built this.
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Set a goal",
      body: "Pick a theme you want to improve — leg locks, guard retention, surviving from mount. Break it into specific tasks.",
    },
    {
      n: "02",
      title: "Plan the week",
      body: "Schedule which tasks to work on which days. Walk into class knowing what you're hunting for.",
    },
    {
      n: "03",
      title: "Reflect after class",
      body: "Check off what you actually drilled. Note where you got stuck. Carry the adjustment into next session.",
    },
  ];

  return (
    <section id="how" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
            How it works
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3">
            A loop that turns mat time into measurable progress.
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="relative">
              <div className="font-heading text-5xl font-bold text-primary/30 mb-4 tabular-nums">
                {s.n}
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PhoneFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`relative w-[260px] rounded-[2rem] border border-border bg-card p-2 shadow-2xl ${className}`}
    >
      <div className="absolute left-1/2 top-2 z-10 h-4 w-20 -translate-x-1/2 rounded-b-2xl bg-background/80" />
      <div className="rounded-[1.6rem] bg-background overflow-hidden h-[520px]">
        {children}
      </div>
    </div>
  );
}

function PreviewMockups() {
  return (
    <section className="border-b border-border/60 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Inside the app
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3">
            One quiet screen for goals. Another for planning. Another for honesty.
          </h2>
        </div>

        <div className="relative flex flex-wrap items-start justify-center gap-8 md:gap-4">
          {/* Goals list */}
          <PhoneFrame className="md:translate-y-6">
            <div className="px-4 pt-8 pb-4">
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                Goals
              </div>
              <h4 className="font-heading text-xl font-bold mb-5">Working on</h4>
              <div className="space-y-2">
                {[
                  { name: "Leg locks", tasks: 3 },
                  { name: "Guard retention", tasks: 4 },
                  { name: "Mount attacks", tasks: 2 },
                  { name: "Surviving", tasks: 1 },
                ].map((g) => (
                  <div
                    key={g.name}
                    className="flex items-center justify-between rounded-lg border border-border/60 bg-card/60 px-3 py-2.5"
                  >
                    <span className="text-sm font-medium">{g.name}</span>
                    <span className="text-xs text-muted-foreground">{g.tasks} tasks</span>
                  </div>
                ))}
                <button className="flex items-center gap-2 text-sm text-muted-foreground px-3 py-2.5 w-full">
                  <Plus className="h-3.5 w-3.5" /> Add goal
                </button>
              </div>
            </div>
          </PhoneFrame>

          {/* Plan training */}
          <PhoneFrame>
            <div className="px-4 pt-8 pb-4">
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                Plan
              </div>
              <h4 className="font-heading text-xl font-bold mb-1">Tuesday</h4>
              <p className="text-xs text-muted-foreground mb-5">Jan 14 · No-gi class</p>
              <div className="space-y-2">
                {[
                  { label: "Entry from half guard", on: true },
                  { label: "Controlling two legs", on: true },
                  { label: "Finishing mechanics", on: false },
                  { label: "Frames from mount", on: false },
                ].map((t) => (
                  <div
                    key={t.label}
                    className={`flex items-center justify-between rounded-lg border px-3 py-2.5 ${
                      t.on
                        ? "border-primary/40 bg-primary/10"
                        : "border-border/60 bg-card/60"
                    }`}
                  >
                    <span className="text-sm">{t.label}</span>
                    <div
                      className={`h-4 w-4 rounded border ${
                        t.on ? "bg-primary border-primary" : "border-border"
                      }`}
                    />
                  </div>
                ))}
              </div>
              <button className="mt-5 w-full rounded-md bg-primary text-primary-foreground py-2.5 text-sm font-medium">
                Save plan
              </button>
            </div>
          </PhoneFrame>

          {/* Timeline */}
          <PhoneFrame className="md:translate-y-6">
            <div className="px-4 pt-8 pb-4">
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                Task timeline
              </div>
              <h4 className="font-heading text-lg font-bold mb-5">Entry from half guard</h4>
              <div className="space-y-3">
                {[
                  {
                    date: "Thu · Jan 16",
                    done: true,
                    note: "Cleaner this time. Cross-faced first.",
                  },
                  { date: "Tue · Jan 14", done: true, note: "Lost the leg twice." },
                  { date: "Sun · Jan 12", done: false },
                ].map((e) => (
                  <div key={e.date} className="border-l-2 border-border pl-3">
                    <div className="flex items-center gap-2 mb-1">
                      <div
                        className={`h-3 w-3 rounded-full -ml-[1.1rem] border-2 border-background ${
                          e.done ? "bg-primary" : "bg-muted"
                        }`}
                      />
                      <span className="text-xs text-muted-foreground">{e.date}</span>
                    </div>
                    {e.note && (
                      <p className="text-sm leading-snug text-foreground/90">{e.note}</p>
                    )}
                    {!e.note && (
                      <p className="text-xs italic text-muted-foreground">Missed</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </PhoneFrame>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    {
      q: "Is it free?",
      a: "Free during the beta. We'll introduce a low-cost pro tier later for cloud sync and history export.",
    },
    {
      q: "When does it launch?",
      a: "Closed beta in the coming weeks. Waitlist members get first access.",
    },
    {
      q: "iOS or Android?",
      a: "iOS first. Android is on the roadmap once the iOS app is stable.",
    },
    {
      q: "Does my data sync between devices?",
      a: "v1 stores data locally on-device. iCloud sync is planned for an early update.",
    },
    {
      q: "Is there a web version?",
      a: "Not at launch. The reflection habit works best as a quick mobile capture.",
    },
  ];
  return (
    <section className="border-b border-border/60">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <div className="mb-10">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
            FAQ
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3">
            Questions, answered.
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {items.map((item, i) => (
            <AccordionItem key={item.q} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-heading text-base font-semibold">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email.");
      return;
    }
    setSubmitted(true);
    toast.success("You're on the list. We'll be in touch.");
    setEmail("");
  };

  return (
    <section id="waitlist" className="border-b border-border/60">
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h2 className="font-heading text-3xl md:text-5xl font-bold leading-tight">
          Start training with intention.
        </h2>
        <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
          Join the waitlist and we'll let you know when the beta opens.
        </p>
        <form
          onSubmit={onSubmit}
          className="mt-8 flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
        >
          <Input
            type="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-11 bg-card border-border"
          />
          <Button type="submit" size="lg" className="font-medium">
            {submitted ? "You're in" : "Join waitlist"}
          </Button>
        </form>
        <p className="mt-3 text-xs text-muted-foreground">
          No spam. One email when the beta opens.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
        <Wordmark />
        <span>Train with purpose.</span>
        <span>© {new Date().getFullYear()} Mat Mind</span>
      </div>
    </footer>
  );
}

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster />
      <Nav />
      <main>
        <Hero />
        <Features />
        <Banner />
        <HowItWorks />
        <PreviewMockups />
        <FAQ />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}
