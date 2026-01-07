import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 2600)
  }

  return (
    <div className="bg-porcelain px-4 pb-20 pt-8 text-graphite md:px-6 md:pb-28 md:pt-12">
      <section className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:items-start">
        <div>
          <p className="text-xs uppercase tracking-[0.26em] text-warmgray">Contact</p>
          <h1 className="mt-4 font-display text-3xl text-graphite md:text-4xl">
            Showrooms, samples,
            <span className="block text-graphite/60">and project support.</span>
          </h1>
          <p className="mt-5 text-sm text-graphite/70 md:text-base">
            For catalog requests, project consultations, or to schedule a studio visit, share a brief outline of your
            project and timelines.
          </p>

          <div className="mt-8 grid gap-6 text-sm text-graphite/70 md:grid-cols-2">
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-warmgray">Showroom</p>
              <p className="mt-2 text-graphite">Obsidian &amp; Co. Studio</p>
              <p className="mt-1 text-graphite/70">Nariman Point</p>
              <p className="text-graphite/70">Mumbai, Maharashtra, India</p>
              <p className="mt-2 text-graphite/60">By appointment only.</p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-warmgray">Workshop &amp; Factory</p>
              <p className="mt-2 text-graphite">Obsidian Fabrication</p>
              <p className="mt-1 text-graphite/70">RIICO Industrial Area</p>
              <p className="text-graphite/70">Kishangarh, Rajasthan, India</p>
              <p className="mt-2 text-graphite/60">Large-format cutting, dry-lay, and packing.</p>
            </div>
          </div>

          <figure className="mt-8 overflow-hidden rounded-2xl bg-white/70 shadow-subtle">
            <img
              src="https://images.unsplash.com/photo-1464983953574-0892a716854b?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb"
              alt="Map placeholder indicating showroom location in Milan"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </figure>
        </div>

        <div>
          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-graphite/15 bg-white/80 p-5 text-graphite md:p-6 shadow-subtle"
          >
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.26em] text-warmgray">Inquiry</p>
              <p className="text-[11px] text-graphite/50">Catalog or consultation</p>
            </div>
            <div>
              <label className="block text-xs font-medium text-graphite/70" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 w-full rounded-md border border-graphite/20 bg-white px-3 py-2 text-sm text-graphite outline-none ring-0 transition-colors focus:border-graphite/70"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-graphite/70" htmlFor="studio">
                Studio / Practice
              </label>
              <input
                id="studio"
                name="studio"
                type="text"
                className="mt-1 w-full rounded-md border border-graphite/20 bg-white px-3 py-2 text-sm text-graphite outline-none ring-0 transition-colors focus:border-graphite/70"
              />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-xs font-medium text-graphite/70" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 w-full rounded-md border border-graphite/20 bg-white px-3 py-2 text-sm text-graphite outline-none ring-0 transition-colors focus:border-graphite/70"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-graphite/70" htmlFor="projectType">
                  Project type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  className="mt-1 w-full rounded-md border border-graphite/20 bg-white px-3 py-2 text-sm text-graphite outline-none ring-0 transition-colors focus:border-graphite/70"
                  defaultValue="Residential"
                >
                  <option className="bg-white" value="Residential">
                    Residential
                  </option>
                  <option className="bg-white" value="Commercial">
                    Commercial
                  </option>
                  <option className="bg-white" value="Hospitality">
                    Hospitality
                  </option>
                  <option className="bg-white" value="Other">
                    Other
                  </option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-graphite/70" htmlFor="request">
                Request
              </label>
              <select
                id="request"
                name="request"
                className="mt-1 w-full rounded-md border border-graphite/20 bg-white px-3 py-2 text-sm text-graphite outline-none ring-0 transition-colors focus-border-graphite/70"
                defaultValue="Catalog samples"
              >
                <option className="bg-white" value="Catalog samples">
                  Catalog samples
                </option>
                <option className="bg-white" value="Project consultation">
                  Project consultation
                </option>
                <option className="bg-white" value="Factory visit">
                  Factory visit
                </option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-graphite/70" htmlFor="message">
                Project notes
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 w-full rounded-md border border-graphite/20 bg-white px-3 py-2 text-sm text-graphite outline-none ring-0 transition-colors focus:border-graphite/70"
                placeholder="Location, timelines, approximate scale, and any specific stones under consideration."
              />
            </div>
            <div className="flex items-center justify-between pt-2">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-graphite px-6 py-2.5 text-[11px] font-medium uppercase tracking-[0.22em] text-porcelain transition-colors hover:bg-graphite/90"
              >
                Submit inquiry
              </button>
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.4 }}
                    className="text-xs text-graphite/70"
                    role="status"
                  >
                    Thank you. Your inquiry has been recorded.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact
