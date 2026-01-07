import { memo } from 'react'
import { motion } from 'framer-motion'
import { materials } from '../../data/materials'

const MotionFigure = motion.figure

const MaterialHighlights = memo(function MaterialHighlights() {
  const featured = materials.slice(0, 4)

  return (
    <section className="border-t border-graphite/10 bg-porcelain px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.26em] text-warmgray">Material Highlights</p>
            <h2 className="mt-4 font-display text-2xl text-graphite md:text-3xl">
              Rare surfaces for<br />
              committed architecture.
            </h2>
          </div>
          <p className="max-w-md text-sm text-graphite/70">
            A focused selection of marbles, granites, onyx, gemstones, and engineered surfaces, each vetted for architectural
            performance and long-term relevance.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {featured.map((material, index) => (
            <MotionFigure
              key={material.slug}
              className="group relative flex h-64 flex-col overflow-hidden rounded-2xl bg-white/70 shadow-subtle md:h-80"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: index * 0.05 }}
            >
              <img
                src={material.heroImage}
                alt={material.name}
                loading="lazy"
                className="h-full w-full flex-1 object-cover transition-transform duration-[2000ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105"
              />
              <figcaption className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-graphite/70 via-graphite/10 to-transparent p-4 text-porcelain">
                <div className="text-[11px] uppercase tracking-[0.22em] text-porcelain/80">
                  {material.category}
                </div>
                <div className="mt-1 text-sm text-porcelain">{material.name}</div>
                <div className="mt-1 text-[11px] text-porcelain/80">{material.origin}</div>
              </figcaption>
            </MotionFigure>
          ))}
        </div>
      </div>
    </section>
  )
})

export default MaterialHighlights
