import styles from './Footer.module.css'
import RohapediaLogo from '../Logo/RohapediaLogo'

const SOCIALS = [
  { label: 'YouTube',   url: 'https://www.youtube.com/@rohapedia'  },
  { label: 'Instagram', url: 'https://www.instagram.com/rohapedia' },
  { label: 'Facebook',  url: 'https://www.facebook.com/rohapedia'  },
  { label: 'TikTok',    url: 'https://www.tiktok.com/@rohapedia'   },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="footer" className={styles.footer} role="contentinfo">
      <div className={styles.inner}>
        {/* Logo */}
        <div className={styles.logo}>
          <RohapediaLogo size={64} showText={false} className={styles.logoSvg} />
          <div className={styles.logoEn}>ROHAPEDIA</div>
          <div className={styles.logoAm} lang="am">ሮሃፒዲያ</div>
        </div>

        {/* Tagline */}
        <div className={styles.tagline}>
          <p className={styles.taglineEn}>Music · Stories · Culture · Heritage · Learning</p>
          <p className={styles.taglineAm} lang="am">ሙዚቃ · ታሪክ · ባህል · ቅርስ · ትምህርት</p>
        </div>

        {/* Socials */}
        <nav className={styles.socials} aria-label="Social media links">
          {SOCIALS.map(({ label, url }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>

      <div className={styles.bottom}>
        <p>&copy; {year} ROHAPEDIA | ሮሃፒዲያ. All rights reserved.</p>
      </div>
    </footer>
  )
}
