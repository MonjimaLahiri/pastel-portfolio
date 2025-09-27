import { useEffect, useState } from "react";
import { Moon, Sun, ArrowUpRight, Mail, Github, Linkedin, Download } from "lucide-react";

/**
 * Pastel Portfolio – React Starter
 * - Clean, minimal UI with playful pastel accents
 * - Mobile-first responsive layout
 * - Light/Dark themes with a toggle (persisted in localStorage)
 * - Sections: Header/Nav, Hero, Featured Projects, About, Footer
 * - Easy to tweak: edit the PALETTE and DATA objects below
 */

const PALETTE = {
  accent1: "#92FF81", // green
  accent2: "#ABE7F3", // blue
  accent3: "#C5A1FF", // purple
  accent4: "#F78BD1", // pink
  accent5: "#FE8094", // coral
  accent6: "#FFDC58", // yellow
};

const DATA = {
  name: "Your Name",
  title: "UX / Product / Frontend",
  blurb:
    "I craft intuitive, accessible interfaces and ship thoughtful product experiences.",
  email: "you@example.com",
  socials: [
    { label: "GitHub", href: "https://github.com/yourhandle", icon: Github },
    { label: "LinkedIn", href: "https://linkedin.com/in/yourhandle", icon: Linkedin },
  ],
  projects: [
    {
      title: "Project One",
      summary: "A short one-liner about impact and what you built.",
      tags: ["UX Research", "Next.js", "Figma"],
      href: "#",
      accent: "accent2",
    },
    {
      title: "Project Two",
      summary: "Outcome-focused blurb with metrics if possible.",
      tags: ["Frontend", "Accessibility", "React"],
      href: "#",
      accent: "accent4",
    },
    {
      title: "Project Three",
      summary: "Brief problem → approach → result.",
      tags: ["Product", "Data Viz", "Testing"],
      href: "#",
      accent: "accent3",
    },
  ],
};

export default function PastelPortfolioStarter() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const stored = typeof window !== "undefined" && localStorage.getItem("theme");
    const next = stored === "dark" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors">
      <Theming />
      <SiteHeader onToggle={toggleTheme} theme={theme} />
      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Hero />
        <SectionDivider />
        <FeaturedProjects />
        <SectionDivider subtle />
        <About />
      </main>
      <Footer />
    </div>
  );
}

// THEME
function Theming() {
  return (
    <style>{`
      :root[data-theme='light'] {
        --bg: #fbfbfd;
        --text: #0f1221;
        --muted: #5a6171;
        --card: #ffffff;
        --card-border: rgba(15, 18, 33, 0.08);
        --ring: rgba(15, 18, 33, 0.1);
        --shadow: 0 8px 30px rgba(15, 18, 33, 0.08);
      }
      :root[data-theme='dark'] {
        --bg: #0d0f16;
        --text: #e9eaf0;
        --muted: #a7adc0;
        --card: #11131c;
        --card-border: rgba(233, 234, 240, 0.08);
        --ring: rgba(233, 234, 240, 0.12);
        --shadow: 0 12px 40px rgba(0,0,0,0.55);
      }

      :root {
        --accent1: ${PALETTE.accent1};
        --accent2: ${PALETTE.accent2};
        --accent3: ${PALETTE.accent3};
        --accent4: ${PALETTE.accent4};
        --accent5: ${PALETTE.accent5};
        --accent6: ${PALETTE.accent6};
      }

      .focus-ring { outline: none; }
      .focus-ring:focus-visible { box-shadow: 0 0 0 4px var(--ring); border-radius: 9999px; }

      .g-accent {
        background-image: linear-gradient(135deg, var(--accent5), var(--accent4), var(--accent3));
      }
      .card {
        background: var(--card);
        border: 1px solid var(--card-border);
        box-shadow: var(--shadow);
      }
    `}</style>
  );
}

// HEADER
function SiteHeader({ onToggle, theme }) {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-[color:var(--bg)]/70 border-b border-[var(--card-border)]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-lg focus-ring">{DATA.name}</a>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <a className="hover:opacity-80 focus-ring" href="#work">Work</a>
          <a className="hover:opacity-80 focus-ring" href="#about">About</a>
          <a className="hover:opacity-80 focus-ring" href="#contact">Contact</a>
          <a className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm border border-[var(--card-border)] hover:opacity-90 focus-ring" href="#resume">
            <Download className="w-4 h-4" /> Resume
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={onToggle} />
        </div>
      </div>
    </header>
  );
}

function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      aria-label="Toggle theme"
      onClick={onToggle}
      className="focus-ring inline-flex items-center justify-center w-10 h-10 rounded-full border border-[var(--card-border)]"
    >
      {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
}

// HERO
function Hero() {
  return (
    <section id="home" className="pt-14 sm:pt-20 lg:pt-28 pb-10">
      <div className="rounded-3xl p-1 g-accent">
        <div className="rounded-[22px] card px-6 sm:px-10 py-10 sm:py-14">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="flex-1">
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--card-border)] bg-[var(--bg)]/60 px-3 py-1 text-xs">
                <span className="inline-block size-2 rounded-full" style={{ background: "var(--accent6)" }} />
                Available for opportunities
              </span>
              <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                {DATA.name}
              </h1>
              <p className="mt-3 sm:mt-4 text-lg sm:text-xl text-[var(--muted)]">{DATA.title}</p>
              <p className="mt-5 max-w-2xl leading-relaxed">{DATA.blurb}</p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href="#work"
                  className="focus-ring inline-flex items-center gap-2 rounded-full px-4 py-2 font-medium text-[color:var(--text)]"
                  style={{ background: `linear-gradient(135deg, var(--accent2), var(--accent4))` }}
                >
                  View Work <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${DATA.email}`}
                  className="focus-ring inline-flex items-center gap-2 rounded-full px-4 py-2 border border-[var(--card-border)]"
                >
                  <Mail className="w-4 h-4" /> Contact
                </a>
              </div>
            </div>

            <div className="w-full md:w-80 lg:w-96">
              <div className="relative aspect-square rounded-2xl overflow-hidden card">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(90% 90% at 20% 20%, var(--accent2), transparent 60%)," +
                      "radial-gradient(110% 110% at 80% 30%, var(--accent3), transparent 60%)," +
                      "radial-gradient(120% 120% at 40% 80%, var(--accent5), transparent 60%)",
                    filter: "blur(4px)",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-xl px-4 py-2 text-xs font-medium border border-[var(--card-border)] bg-[var(--bg)]/60 backdrop-blur">
                    Pastel • Minimal • Playful
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// FEATURED PROJECTS
function FeaturedProjects() {
  return (
    <section id="work" className="py-12">
      <header className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Featured Work</h2>
          <p className="mt-1 text-[var(--muted)]">Selected projects and case studies</p>
        </div>
        <a
          href="#"
          className="hidden sm:inline-flex items-center gap-2 text-sm focus-ring border border-[var(--card-border)] rounded-full px-3 py-1.5"
        >
          All projects <ArrowUpRight className="w-4 h-4" />
        </a>
      </header>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {DATA.projects.map((p, i) => (
          <a key={i} href={p.href} className="group focus-ring">
            <article className="card rounded-2xl overflow-hidden h-full flex flex-col">
              <div className="relative aspect-[16/10]">
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, var(--${p.accent}), transparent 40%), linear-gradient(0deg, transparent, rgba(0,0,0,0.05))`,
                  }}
                />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-2 text-sm text-[var(--muted)] flex-1">{p.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs rounded-full px-2 py-1 border border-[var(--card-border)] bg-[var(--bg)]/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </a>
        ))}
      </div>
    </section>
  );
}

// ABOUT
function About() {
  return (
    <section id="about" className="py-12">
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">About</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 card rounded-2xl p-6">
          <p className="leading-relaxed">
            I’m a designer/developer focused on simple, human-centered products. I enjoy
            research-backed decisions, crisp UI, and fast, accessible frontends. I’ve worked across
            startups and labs—owning discovery, prototyping, and delivery.
          </p>
          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            <li>• UX Research & Testing</li>
            <li>• Interaction & Visual Design</li>
            <li>• React / Next.js / TypeScript</li>
            <li>• Data Viz & Experimentation</li>
          </ul>
        </div>
        <div className="card rounded-2xl p-6">
          <h3 className="font-medium">Contact</h3>
          <a id="contact" href={`mailto:${DATA.email}`} className="mt-3 inline-flex items-center gap-2 focus-ring">
            <Mail className="w-4 h-4" /> {DATA.email}
          </a>
          <div className="mt-4 flex items-center gap-3">
            {DATA.socials.map(({ label, href, icon: Icon }, i) => (
              <a key={i} aria-label={label} href={href} className="focus-ring inline-flex items-center justify-center w-9 h-9 rounded-full border border-[var(--card-border)]">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// DIVIDER & FOOTER
function SectionDivider({ subtle = false }) {
  return (
    <div className="my-12">
      <div
        className={`h-[1px] w-full ${subtle ? "bg-[var(--card-border)]" : "bg-gradient-to-r"}`}
        style={subtle ? {} : { backgroundImage: "linear-gradient(90deg, var(--accent1), var(--accent2), var(--accent6))" }}
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="mt-20 border-t border-[var(--card-border)]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[var(--muted)]">© {new Date().getFullYear()} {DATA.name}. All rights reserved.</p>
        <div className="flex items-center gap-3">
          {DATA.socials.map(({ label, href, icon: Icon }, i) => (
            <a key={i} aria-label={label} href={href} className="focus-ring inline-flex items-center justify-center w-9 h-9 rounded-full border border-[var(--card-border)]">
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
