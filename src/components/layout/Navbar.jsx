import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Materials', to: '/materials' },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-graphite/10 bg-porcelain/95 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full border border-graphite/10 bg-gradient-to-br from-stone/50 to-transparent" />
          <div className="leading-tight">
            <span className="block text-xs uppercase tracking-[0.22em] text-ash">
              Obsidian &amp; Co.
            </span>
            <span className="block text-sm text-graphite/80">Curated Stone Studio</span>
          </div>
        </div>

        <div className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `group text-xs font-medium uppercase tracking-[0.22em] transition-colors ${
                  isActive ? 'text-graphite' : 'text-graphite/60 hover:text-graphite'
                }`
              }
            >
              <span className="relative inline-flex flex-col items-center">
                <span>{item.label}</span>
                <span className="mt-1 h-px w-6 origin-center scale-x-0 bg-graphite/60 transition-transform duration-300 group-hover:scale-x-100" />
              </span>
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-graphite/15 p-2 text-graphite md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-graphite/10 bg-porcelain px-4 pb-6 pt-2 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col space-y-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-xs font-medium uppercase tracking-[0.22em] transition-colors ${
                    isActive ? 'text-graphite' : 'text-graphite/60 hover:text-graphite'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
