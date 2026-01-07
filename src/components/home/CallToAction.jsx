import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function CallToAction() {
  return (
    <section className="border-y border-graphite/10 bg-white px-4 py-16 text-graphite md:px-6 md:py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.26em] text-warmgray">Work with Obsidian &amp; Co.</p>
          <h2 className="mt-4 font-display text-2xl md:text-3xl">
            Specify stone with
            <span className="block text-warmgray">a dedicated material partner.</span>
          </h2>
          <p className="mt-4 max-w-xl text-sm text-warmgray/90">
            For concept-stage studies or fully coordinated tender packages, the studio supports architects and designers
            with samples, technical data, and fabrication partners.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7 }}
        >
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-graphite px-10 py-4 text-base font-semibold uppercase tracking-[0.22em] text-porcelain shadow-lg shadow-graphite/10 ring-2 ring-graphite/10 transition-all hover:bg-black hover:scale-105 focus:outline-none focus:ring-4 focus:ring-graphite/20"
          >
            Request a consultation
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default CallToAction
