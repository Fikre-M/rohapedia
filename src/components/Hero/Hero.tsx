import styles from './Hero.module.css'
import RohapediaLogo from '../Logo/RohapediaLogo'

interface HeroProps {
  onScrollTo: (href: string) => void
}

export default function Hero({ onScrollTo }: HeroProps) {
  return (
    <section id="hero" className={styles.hero} aria-label="Hero">
      <div className={styles.watermark} aria-hidden="true">ሮሃ</div>

      <div className={styles.inner}>
        <div className={styles.eyebrow} aria-label="Ethiopian Creative Space">
          Ethiopian Creative Space
        </div>

        <p className={styles.greeting} lang="am">
          ሰላም ቤተሰብ 👋 — እንኳን ወደ ሮሃፒዲያ በደህና መጡ።
        </p>

        {/* Brand logo — large SVG emblem */}
        <div className={styles.logoWrap} aria-hidden="true">
          <RohapediaLogo size={160} showText={false} />
        </div>

        <h1 className={styles.headline}>ROHAPEDIA</h1>

        <p className={styles.subhead} lang="am">ሮሃፒዲያ</p>

        <div className={styles.divider} aria-hidden="true" />

        <p className={styles.descEn}>
          A creative Amharic space for music, stories, tourism, culture, heritage, science,
          education, and ideas worth remembering.
        </p>
        <p className={styles.descAm} lang="am">
          ሙዚቃን፣ ታሪክን፣ ባህልን፣ ቱሪዝምን፣ ትምህርትን፣ ሳይንስን፣ ትርጉም ያላቸው ሀሳቦች እና አዲስ እይታ እንጋራለን።
        </p>

        <div className={styles.buttons}>
          <a
            href="#content"
            className={styles.btnPrimary}
            onClick={(e) => { e.preventDefault(); onScrollTo('#content') }}
          >
            Explore Content
          </a>
          <a
            href="#subscribe"
            className={styles.btnOutline}
            onClick={(e) => { e.preventDefault(); onScrollTo('#subscribe') }}
            aria-label="Subscribe — አድርጉ"
          >
            🔔 Subscribe አድርጉ
          </a>
        </div>
      </div>

      <div className={styles.scrollIndicator} aria-hidden="true">
        <div className={styles.scrollLine} />
        <span>Scroll</span>
      </div>
    </section>
  )
}
