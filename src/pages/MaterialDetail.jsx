import { useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { materials } from '../data/materials'

function MaterialDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()

  const material = useMemo(() => materials.find((m) => m.slug === slug), [slug])

  if (!material) {
    return (
      <div className="bg-porcelain px-4 py-16 text-graphite md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm text-graphite/70">Material not found.</p>
          <button
            type="button"
            onClick={() => navigate('/materials')}
            className="mt-4 text-[11px] uppercase tracking-[0.22em] text-graphite/60 underline underline-offset-4 hover:text-graphite"
          >
            Back to materials
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-porcelain text-graphite">
      <section className="relative mb-10 overflow-hidden border-b border-graphite/10">
        <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-16 md:px-6 md:pb-16 md:pt-20">
          <button
            type="button"
            onClick={() => navigate('/materials')}
            className="mb-6 text-[11px] uppercase tracking-[0.22em] text-graphite/60 underline underline-offset-4 hover:text-graphite"
          >
            Materials
          </button>
          <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.26em] text-warmgray">{material.category}</p>
              <h1 className="mt-3 font-display text-3xl text-graphite md:text-4xl">{material.name}</h1>
              <p className="mt-3 text-sm text-graphite/70 md:text-base">{material.description}</p>
              <dl className="mt-6 grid grid-cols-2 gap-4 text-xs text-graphite/70 md:text-sm">
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.22em] text-warmgray">Origin</dt>
                  <dd className="mt-1">{material.origin}</dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.22em] text-warmgray">Tone</dt>
                  <dd className="mt-1">{material.tone}</dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.22em] text-warmgray">Finish</dt>
                  <dd className="mt-1">{material.finish}</dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.22em] text-warmgray">Applications</dt>
                  <dd className="mt-1 text-xs text-graphite/60">{material.applications.join(', ')}</dd>
                </div>
              </dl>
            </div>
            <motion.figure
              className="relative h-64 overflow-hidden rounded-2xl bg-white/70 shadow-subtle md:h-80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={material.heroImage}
                alt={material.name}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </motion.figure>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 md:px-6">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="space-y-6">
            <div>
              <h2 className="text-xs uppercase tracking-[0.26em] text-warmgray">Characteristics</h2>
              <ul className="mt-3 space-y-2 text-sm text-graphite/70">
                {material.characteristics.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xs uppercase tracking-[0.26em] text-warmgray">Suggested applications</h2>
              <ul className="mt-3 space-y-2 text-sm text-graphite/70">
                {material.applications.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {material.gallery.map((src, index) => (
              <motion.figure
                key={src}
                className="overflow-hidden rounded-2xl bg-white/80 shadow-subtle"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: index * 0.05 }}
              >
                <img
                  src={src}
                  alt={`${material.name} application ${index + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[2200ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:scale-105"
                />
              </motion.figure>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default MaterialDetail
