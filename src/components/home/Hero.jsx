import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section
      className="relative flex min-h-[90vh] items-center overflow-hidden bg-porcelain"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div
          className="h-full w-full bg-[url('https://images.unsplash.com/photo-1757213576455-809f7df53283?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb')] bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-porcelain via-porcelain/92 to-porcelain/10" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-24 md:flex-row md:items-center md:justify-between md:px-6">
        <div className="max-w-xl">
          <motion.p
            className="mb-6 text-xs uppercase tracking-[0.26em] text-warmgray"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Quietly present since 1998
          </motion.p>
          <motion.h1
            id="hero-heading"
            className="font-display text-4xl leading-tight text-graphite sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            Stone, Curated
            <span className="block text-graphite/60">with Intent.</span>
          </motion.h1>
          <motion.p
            className="mt-6 max-w-xl text-sm text-graphite/70 md:text-base"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
          >
            Obsidian &amp; Co. sources and curates rare natural stone for architects, designers,
            and spaces that demand permanence.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
          >
            <Link
              to="/materials"
              className="inline-flex items-center justify-center rounded-full bg-graphite px-6 py-2.5 text-xs font-medium uppercase tracking-[0.22em] text-porcelain transition-colors hover:bg-graphite/90"
            >
              Explore Collection
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center rounded-full border border-graphite/30 px-6 py-2.5 text-xs font-medium uppercase tracking-[0.22em] text-graphite/70 transition-colors hover:border-graphite hover:text-graphite"
            >
              View Projects
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="mt-10 grid flex-1 grid-cols-2 gap-4 md:mt-0 md:max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="space-y-4">
            <figure className="overflow-hidden rounded-2xl bg-white/60 shadow-subtle">
              <img
                src="https://images.unsplash.com/photo-1681997963595-5e462b76d19c?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb"
                alt="Close-up of a veined stone slab surface"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[2500ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:scale-105"
              />
            </figure>
            <figure className="overflow-hidden rounded-2xl bg-white/60 shadow-subtle">
              <img
                src="https://images.unsplash.com/photo-1758448721205-8465cebc26af?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb"
                alt="Lobby floor in deep stone with soft lighting"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[2500ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:scale-105"
              />
            </figure>
          </div>
          <div className="mt-10 space-y-4 md:mt-16">
            <figure className="overflow-hidden rounded-2xl bg-white/60 shadow-subtle">
              <img
                src="https://images.unsplash.com/photo-1759742268934-dcc0ed3e9ba7?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb"
                alt="Architectural staircase carved in stone"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[2500ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:scale-105"
              />
            </figure>
            <div className="rounded-2xl border border-graphite/10 bg-white/70 p-4 text-xs text-graphite/70">
              Designed for studios who treat materials as a primary architectural gesture, not a finishing layer.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
