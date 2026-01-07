import { motion } from 'framer-motion'

function About() {
  return (
    <div className="bg-porcelain px-4 pb-20 pt-8 text-graphite md:px-6 md:pb-28 md:pt-12">
      <section className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-start">
        <div>
          <p className="text-xs uppercase tracking-[0.26em] text-warmgray">About</p>
          <h1 className="mt-4 font-display text-3xl text-graphite md:text-4xl">
            A studio for
            <span className="block text-graphite/60">architectural stone.</span>
          </h1>
          <p className="mt-5 text-sm text-graphite/70 md:text-base">
            Obsidian &amp; Co. operates as a material partner for architecture and interior studios working on ambitious residential, commercial, and hospitality projects across India. The practice is intentionally small, allowing each project to be personally stewarded from quarry selection through to final installation.
          </p>
          <p className="mt-4 text-sm text-graphite/60">
            The team brings together backgrounds in architecture, fabrication, and quarry operations, translating
            conceptual intent into specific stones, finishes, and detailing strategies.
          </p>
        </div>
        <div className="space-y-6">
          <motion.figure
            className="overflow-hidden rounded-2xl bg-white/70 shadow-subtle"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="https://images.unsplash.com/photo-1681997963595-5e462b76d19c?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb"
              alt="Studio library with shelves of stone samples and architectural models"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[2200ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:scale-105"
            />
          </motion.figure>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-warmgray">Sourcing</p>
              <p className="mt-2 text-sm text-graphite">Global quarry network</p>
              <p className="mt-2 text-xs text-graphite/60">
                Direct relationships with quarries across Rajasthan, Andhra Pradesh, Gujarat, and Tamil Nadu, audited for consistency and responsible extraction.
              </p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-warmgray">Craftsmanship</p>
              <p className="mt-2 text-sm text-graphite">Dedicated fabricators</p>
              <p className="mt-2 text-xs text-graphite/60">
                Partner workshops specialising in large-format stone, precision mitres, and complex junctions.
              </p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-warmgray">Quality control</p>
              <p className="mt-2 text-sm text-graphite">From block to site</p>
              <p className="mt-2 text-xs text-graphite/60">
                Slab selection, dry-lay reviews, and on-site inspections ensure each project meets both visual and
                technical intent.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
