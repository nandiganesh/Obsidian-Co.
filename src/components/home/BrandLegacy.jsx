import { motion } from 'framer-motion'

function BrandLegacy() {
  return (
    <section className="border-t border-graphite/10 bg-stone/40 px-4 py-20 md:px-6">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-start">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs uppercase tracking-[0.26em] text-warmgray">Legacy &amp; Method</p>
          <h2 className="mt-4 font-display text-2xl text-graphite md:text-3xl">
            A studio built around
            <span className="block text-graphite/60">one material: stone.</span>
          </h2>
          <p className="mt-6 text-sm text-graphite/70 md:text-base">
            Obsidian &amp; Co. began as a sourcing partner for a handful of architects seeking a quieter, more disciplined
            approach to stone. Today, the studio operates globally, curating quarries, finishes, and fabricators into
            one coherent library.
          </p>
          <p className="mt-4 text-sm text-graphite/60">
            Every surface we specify is evaluated for origin, extraction practices, structural performance, and how it
            will age in real projects  not just in photography.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-4 md:grid-cols-2"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85, delay: 0.1 }}
        >
          <figure className="col-span-1 overflow-hidden rounded-2xl bg-white/70 shadow-subtle">
            <img
              src="https://images.unsplash.com/photo-1759742268934-dcc0ed3e9ba7?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb"
              alt="Architects reviewing large stone slabs in a workshop"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[2200ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:scale-105"
            />
          </figure>
          <div className="space-y-4">
            <figure className="overflow-hidden rounded-2xl bg-white/70 shadow-subtle">
              <img
                src="https://images.unsplash.com/photo-1757213576455-809f7df53283?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb"
                alt="Distant view of a quarry carved into a hillside"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[2200ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:scale-105"
              />
            </figure>
            <div className="grid grid-cols-2 gap-4 text-xs text-graphite/70">
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-warmgray">Quarries</p>
                <p className="mt-1 text-lg text-graphite">32+</p>
                <p className="mt-1 text-graphite/60">Personally audited across Europe, the Middle East, and South America.</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.22em] text-warmgray">Projects</p>
                <p className="mt-1 text-lg text-graphite">180+</p>
                <p className="mt-1 text-graphite/60">Residential, commercial, and hospitality spaces in 14 countries.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default BrandLegacy
