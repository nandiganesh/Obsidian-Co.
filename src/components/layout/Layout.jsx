import { useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './Navbar'
import SiteFooter from './SiteFooter'

function Layout({ children }) {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-porcelain text-graphite smooth-scroll">
      <Navbar />
      <main className="pt-20 md:pt-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      <SiteFooter />
    </div>
  )
}

export default Layout
