import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { nav } from '../data/content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: scrolled ? 'rgba(10,10,15,0.75)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'background 0.3s ease, border-color 0.3s ease',
      }}
    >
      <nav className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
        <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 18 }}>
          <span
            style={{
              width: 22,
              height: 22,
              borderRadius: 6,
              background: 'var(--gradient)',
              display: 'inline-block',
            }}
          />
          Sitecraft
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="nav-links-desktop">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              style={{ fontSize: 14, color: 'var(--text-dim)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-dim)')}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <a href="#" className="btn btn-ghost btn-login-desktop">
            Log in
          </a>
          <a href="#pricing" className="btn btn-primary">
            Start for free
          </a>
        </div>
      </nav>
    </motion.header>
  )
}
