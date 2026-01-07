import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { PROJECT_CATEGORIES, projects } from '../data/projects'

function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = useMemo(() => ['All', ...PROJECT_CATEGORIES], [])

  const filtered = useMemo(
    () =>
      activeCategory === 'All'
        ? projects
        : projects.filter((project) => project.category === activeCategory),
    [activeCategory]
  )

  return (
    <div className="bg-porcelain px-4 pb-16 pt-8 text-graphite md:px-6 md:pb-24 md:pt-12">
      <section className="mx-auto max-w-6xl">
        <header className="mb-10 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.26em] text-warmgray">Projects</p>
          <h1 className="mt-4 font-display text-3xl text-graphite md:text-4xl">Stone in practice.</h1>
          <p className="mt-4 text-sm text-graphite/70 md:text-base">
            Selected residential, commercial, and hospitality projects where stone operates as a primary architectural
            gesture rather than applied finish.
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
          {filtered.map((project, index) => (
            <motion.figure
              key={project.slug}
              className="group relative flex h-72 flex-col overflow-hidden rounded-2xl bg-white/70 shadow-subtle md:h-80"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: index * 0.05 }}
            >
              <img
                src={project.heroImage}
                alt={project.name}
                loading="lazy"
                className="h-full w-full flex-1 object-cover transition-transform duration-[2200ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-105"
              />
              <figcaption className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-graphite/80 via-graphite/15 to-transparent p-4 text-porcelain">
                <div className="flex items-center justify-between text-[11px] text-porcelain/80">
                  <span className="uppercase tracking-[0.22em]">{project.category}</span>
                  <span>{project.location}</span>
                </div>
                <div className="mt-2 text-sm text-porcelain">{project.name}</div>
                <p className="mt-2 line-clamp-2 text-xs text-porcelain/80">{project.summary}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Projects
