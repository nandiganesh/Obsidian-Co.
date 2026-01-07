import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { MATERIAL_CATEGORIES, materials } from '../data/materials'

function Materials() {
  const [activeCategory, setActiveCategory] = useState('All')
  const navigate = useNavigate()

  const categories = useMemo(() => ['All', ...MATERIAL_CATEGORIES], [])

  const filtered = useMemo(
    () =>
      activeCategory === 'All'
        ? materials
        : materials.filter((material) => material.category === activeCategory),
    [activeCategory]
  )

  return (
    <div className="bg-porcelain px-4 pb-16 pt-8 text-graphite md:px-6 md:pb-24 md:pt-12">
      <section className="mx-auto max-w-6xl">
        <header className="mb-10 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.26em] text-warmgray">Materials Library</p>
          <h1 className="mt-4 font-display text-3xl text-graphite md:text-4xl">Curated stone and surfaces.</h1>
          <p className="mt-4 text-sm text-graphite/70 md:text-base">
            A working catalog of stones currently in circulation. Each listing is supported by origin data, performance
            notes, and guidance on application.
          </p>
        </header>

        <div className="mb-10 flex flex-wrap gap-3 border-b border-graphite/10 pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full border px-4 py-1.5 text-[11px] uppercase tracking-[0.22em] transition-colors ${
                activeCategory === cat
                  ? 'border-graphite bg-graphite text-porcelain'
                  : 'border-graphite/20 bg-white text-graphite/60 hover:border-graphite/50 hover:text-graphite'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {filtered.map((material, index) => (
            <motion.button
              key={material.slug}
              type="button"
              onClick={() => navigate(`/materials/${material.slug}`)}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-graphite/10 bg-white/80 text-left shadow-subtle"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: index * 0.04 }}
            >
              <div className="relative h-52 overflow-hidden bg-graphite/10 md:h-56">
                <img
                  src={material.heroImage}
                  alt={material.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[2200ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-graphite/70 via-graphite/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="flex flex-1 flex-col p-4">
                <div className="text-[11px] uppercase tracking-[0.22em] text-warmgray">{material.category}</div>
                <div className="mt-2 text-sm text-graphite">{material.name}</div>
                <div className="mt-1 text-[11px] text-graphite/60">{material.origin}</div>
                <p className="mt-3 line-clamp-3 text-xs text-graphite/70">{material.description}</p>
                <span className="mt-4 text-[11px] uppercase tracking-[0.22em] text-graphite/60">
                  View material
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Materials
