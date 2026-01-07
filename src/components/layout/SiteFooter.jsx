import { Instagram, Linkedin, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'

function SiteFooter() {
  return (
    <footer className="border-t border-graphite/10 bg-stone/40 text-graphite">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 md:flex-row md:items-end md:justify-between md:px-6 md:py-12">
        <div className="max-w-md space-y-4">
          <p className="text-xs uppercase tracking-[0.22em] text-ash">Obsidian &amp; Co.</p>
          <p className="text-sm text-graphite/70">
            A material-first studio dedicated to rare stone, architectural surfaces, and projects that demand permanence.
          </p>
        </div>
        <div className="flex flex-1 flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="flex gap-10 text-xs text-graphite/70">
            <div className="space-y-2">
              <p className="font-medium text-graphite">Navigation</p>
              <div className="flex flex-col gap-1">
                <Link to="/materials" className="transition-colors hover:text-graphite">
                  Materials
                </Link>
                <Link to="/projects" className="transition-colors hover:text-graphite">
                  Projects
                </Link>
                <Link to="/about" className="transition-colors hover:text-graphite">
                  About
                </Link>
                <Link to="/contact" className="transition-colors hover:text-graphite">
                  Contact
                </Link>
              </div>
            </div>
            <div className="space-y-2">
              <p className="font-medium text-graphite">Presence</p>
              <div className="flex flex-col gap-1">
                <button className="flex items-center gap-2 text-left transition-colors hover:text-graphite" type="button">
                  <Instagram className="h-4 w-4" /> Instagram
                </button>
                <button className="flex items-center gap-2 text-left transition-colors hover:text-graphite" type="button">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </button>
                <button className="flex items-center gap-2 text-left transition-colors hover:text-graphite" type="button">
                  <Globe className="h-4 w-4" /> Architectural Press
                </button>
              </div>
            </div>
          </div>
          <div className="space-y-2 text-right text-[11px] text-graphite/50">
            <p>&copy; {new Date().getFullYear()} Obsidian &amp; Co.</p>
            <p>Quietly crafted for architects, designers, and luxury developers.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
