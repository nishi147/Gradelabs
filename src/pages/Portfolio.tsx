import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Play, Film, Camera, ShoppingBag } from "lucide-react";
import Reveal from "@/components/Reveal";

type Cat = "all" | "real-estate" | "ecommerce" | "cinematic";

const projects: { title: string; cat: Exclude<Cat, "all">; desc: string; icon: any; tone: string }[] = [
  { title: "Hilltop Residences", cat: "real-estate", desc: "Cinematic pitch reel for a luxury hillside development.", icon: Camera, tone: "from-zinc-700 to-zinc-900" },
  { title: "Coastal Estates", cat: "real-estate", desc: "Aerial + interior walkthrough for beachfront property launch.", icon: Camera, tone: "from-sky-900/40 to-zinc-900" },
  { title: "Urban Lofts Pitch", cat: "real-estate", desc: "Boutique developer reel showcasing four city apartments.", icon: Camera, tone: "from-zinc-800 to-black" },
  { title: "Lumera Skincare", cat: "ecommerce", desc: "Full e-commerce transformation: imagery, listings and storefront.", icon: ShoppingBag, tone: "from-amber-900/40 to-zinc-900" },
  { title: "Aether Watches", cat: "cinematic", desc: "Cinematic product film shot on Alexa Mini with macro detail work.", icon: Film, tone: "from-zinc-800 to-black" },
  { title: "Northwind Coffee", cat: "ecommerce", desc: "Marketplace product transformation across 28 SKUs.", icon: ShoppingBag, tone: "from-orange-900/30 to-zinc-900" },
  { title: "Obsidian Fragrance", cat: "cinematic", desc: "Slow-motion bottle hero shoot with custom lighting design.", icon: Film, tone: "from-zinc-900 to-black" },
  { title: "Vantage Audio", cat: "cinematic", desc: "Studio product film for a high-end speaker manufacturer.", icon: Film, tone: "from-zinc-700 to-zinc-900" },
];

const filters: { id: Cat; label: string }[] = [
  { id: "all", label: "All work" },
  { id: "real-estate", label: "Real Estate Pitch Reels" },
  { id: "ecommerce", label: "E-commerce Transformations" },
  { id: "cinematic", label: "Cinematic Product Shoots" },
];

const Portfolio = () => {
  const [cat, setCat] = useState<Cat>("all");
  const filtered = cat === "all" ? projects : projects.filter((p) => p.cat === cat);

  return (
    <div>
      <section className="pt-12 pb-16">
        <div className="container">
          <Reveal>
            <p className="eyebrow mb-8">Selected Work</p>
            <h1 className="font-serif-display text-5xl md:text-7xl lg:text-8xl leading-[1.02] max-w-5xl">
              A library of <em>visual</em> case studies.
            </h1>
            <p className="mt-10 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Real projects across real estate, e-commerce and cinematic product work —
              shot, edited and finished entirely in-house.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-12 flex flex-wrap gap-2">
              {filters.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setCat(f.id)}
                  className={`px-5 py-2.5 rounded-full text-sm transition-all border ${
                    cat === f.id
                      ? "bg-foreground text-background border-foreground"
                      : "bg-transparent text-muted-foreground border-border hover:text-foreground hover:border-foreground"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* GRID */}
      <section className="py-12">
        <div className="container">
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => (
                <motion.div
                  key={p.title}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.5, delay: i * 0.04 }}
                  className="group cursor-pointer"
                >
                  {/* Visual placeholder */}
                  <div className={`relative aspect-[4/5] bg-gradient-to-br ${p.tone} overflow-hidden rounded-sm mb-4 border border-border`}>
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.7 }}
                    >
                      <p.icon className="h-12 w-12 text-foreground/40" strokeWidth={1.2} />
                    </motion.div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-foreground/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                      <div>
                        <p className="text-sm text-background/80 leading-relaxed mb-3">{p.desc}</p>
                        <div className="inline-flex items-center gap-2 text-background text-sm">
                          View project <ArrowUpRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-1">{filters.find(f => f.id === p.cat)?.label}</p>
                      <h3 className="font-serif-display text-xl group-hover:italic transition-all">{p.title}</h3>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors mt-1" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* SHOWREEL */}
      <section className="py-32">
        <div className="container">
          <Reveal>
            <div className="relative aspect-[16/9] overflow-hidden rounded-sm group cursor-pointer surface-soft border border-border">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Play className="h-7 w-7 text-primary-foreground ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between text-background">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] opacity-70 mb-2">Showreel · 2025</p>
                  <h3 className="font-serif-display text-3xl md:text-4xl">A year behind the lens</h3>
                </div>
                <span className="hidden md:inline border border-background/30 px-4 py-2 rounded-full text-xs">02:34</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 surface-soft">
        <div className="container">
          <Reveal>
            <h2 className="font-serif-display text-4xl md:text-7xl leading-[1.05] max-w-4xl">
              Your project could be <em>next.</em>
            </h2>
            <p className="mt-6 text-muted-foreground max-w-md">
              We take on a small number of new clients each quarter to keep craft at the highest level.
            </p>
            <Link to="/contact" className="btn-primary mt-10">
              Book a Pitch <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
