import { useState, useEffect, useCallback } from 'react'
import styles from './Nav.module.css'
import RohapediaLogo from '../Logo/RohapediaLogo'

const NAV_LINKS = [
  { label: 'Content', href: '#content' },
  { label: 'About',   href: '#about'   },
]

export default function Nav() {
  const [menuOpen, setMenuOpen]   = useState(false)
  const [scrolled, setScrolled]   = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const smoothScroll = useCallback((href: string) => {
    const target = document.querySelector(href)
    if (target) {
      const top = (target as HTMLElement).getBoundingClientRect().top + window.scrollY - 72
      window.scrollTo({ top, behavior: 'smooth' })
    }
    setMenuOpen(false)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`} aria-label="Main navigation">
      {/* Logo */}
      <a
        href="#hero"
        className={styles.logo}
        aria-label="ROHAPEDIA home"
        onClick={(e) => { e.preventDefault(); smoothScroll('#hero') }}
      >
        <RohapediaLogo size={52} showText={false} className={styles.logoSvg} />
        <div className={styles.logoText}>
          <span className={styles.logoEn}>ROHAPEDIA</span>
          <span className={styles.logoAm} lang="am">ሮሃፒዲያ</span>
        </div>
      </a>

      {/* Desktop links */}
      <ul className={styles.links} role="list">
        {NAV_LINKS.map(({ label, href }) => (
          <li key={href}>
            <a
              href={href}
              onClick={(e) => { e.preventDefault(); smoothScroll(href) }}
            >
              {label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#subscribe"
            className={styles.cta}
            onClick={(e) => { e.preventDefault(); smoothScroll('#subscribe') }}
            aria-label="Subscribe to ROHAPEDIA"
          >
            Subscribe
          </a>
        </li>
      </ul>

      {/* Hamburger */}
      <button
        className={styles.hamburger}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        aria-controls="nav-mobile"
        onClick={() => setMenuOpen((o) => !o)}
      >
        <span />
        <span />
        <span />
      </button>

      {/* Mobile menu */}
      <div
        id="nav-mobile"
        className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}
        role="menu"
      >
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            role="menuitem"
            onClick={(e) => { e.preventDefault(); smoothScroll(href) }}
          >
            {label}
          </a>
        ))}
        <a
          href="#subscribe"
          className={styles.mobileCta}
          role="menuitem"
          onClick={(e) => { e.preventDefault(); smoothScroll('#subscribe') }}
        >
          Subscribe
        </a>
      </div>
    </nav>
  )
}
