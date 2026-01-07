import { memo, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { projects } from '../../data/projects'

const MotionFigure = motion.figure

const FeaturedProjectsSection = memo(function FeaturedProjectsSection() {
  const featured = useMemo(() => projects.slice(0, 3), [])

  return (
    <section className="border-t border-graphite/10 bg-porcelain px-4 py-20 md:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.26em] text-warmgray">Featured Projects</p>
            <h2 className="mt-4 font-display text-2xl text-graphite md:text-3xl">
              <img src="https://images.unsplash.com/photo-1759742268934-dcc0ed3e9ba7?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb" alt="Stone in context." />
              Stone in context.
            </h2>
          </div>
          <Link
            to="/projects"
            className="text-xs uppercase tracking-[0.22em] text-graphite/60 underline decoration-graphite/30 decoration-1 underline-offset-4 transition-colors hover:text-graphite hover:decoration-graphite"
          >
            View full project gallery
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((project, index) => (
            <MotionFigure
              key={project.slug}
              className="group relative flex h-72 flex-col overflow-hidden rounded-2xl bg-white/70 shadow-subtle md:h-80"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: index * 0.06 }}
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
              </figcaption>
            </MotionFigure>
          ))}
        </div>
      </div>
    </section>
  )
})

export default FeaturedProjectsSection
