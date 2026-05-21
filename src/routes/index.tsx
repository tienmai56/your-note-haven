import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {} from "lucide-react";
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
import disciplineImg from "@/assets/section-discipline.jpg";
import logo from "@/assets/mat-mind-logo.png";
import appGoals from "@/assets/app-goals.png";
import appPlan from "@/assets/app-plan.png";
import appShare from "@/assets/app-share.png";

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


function HeroPhone() {
  return (
    <div className="relative mx-auto w-[300px] sm:w-[360px]">
      <div className="absolute -inset-12 rounded-[3rem] bg-primary/20 blur-3xl" aria-hidden />
      <img
        src={appGoals}
        alt="Mat Mind app showing active jiu-jitsu goals: Pin Side Control, Mount Escape, Over Under Pass"
        width={1276}
        height={2204}
        className="relative w-full h-auto drop-shadow-2xl"
      />
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

function PreviewMockups() {
  const shots = [
    {
      src: appGoals,
      alt: "Active Goals screen with Pin Side Control, Mount Escape, Over Under Pass",
      caption: "Goals — break a theme into specific tasks.",
      offset: "md:translate-y-8",
    },
    {
      src: appPlan,
      alt: "Plan screen with calendar and reflection on Pin Side Control",
      caption: "Plan — schedule what to hunt for, then reflect.",
      offset: "",
    },
    {
      src: appShare,
      alt: "Share preview formatted as a letter to a training partner asking for feedback",
      caption: "Share — ask a partner or coach for feedback.",
      offset: "md:translate-y-8",
    },
  ];

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

        <div className="relative grid gap-10 md:grid-cols-3 md:gap-6 items-start justify-items-center">
          {shots.map((s) => (
            <figure key={s.caption} className={`w-full max-w-[300px] ${s.offset}`}>
              <img
                src={s.src}
                alt={s.alt}
                width={1276}
                height={2204}
                loading="lazy"
                className="w-full h-auto drop-shadow-2xl"
              />
              <figcaption className="mt-5 text-center text-sm text-muted-foreground">
                {s.caption}
              </figcaption>
            </figure>
          ))}
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
