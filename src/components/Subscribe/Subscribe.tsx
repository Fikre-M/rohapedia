import styles from './Subscribe.module.css'

interface Platform {
  emoji: string
  label: string
  url: string
}

const PLATFORMS: Platform[] = [
  { emoji: '▶',  label: 'YouTube',   url: 'https://www.youtube.com/@rohapedia'   },
  { emoji: '📷', label: 'Instagram', url: 'https://www.instagram.com/rohapedia'  },
  { emoji: '📘', label: 'Facebook',  url: 'https://www.facebook.com/rohapedia'   },
  { emoji: '🎵', label: 'TikTok',    url: 'https://www.tiktok.com/@rohapedia'    },
]

export default function Subscribe() {
  return (
    <section id="subscribe" className={styles.section} aria-label="Subscribe">
      <div className={styles.inner}>
        <h2 className={styles.headline}>Join the community.</h2>

        <p className={styles.subhead} lang="am">ቤተሰባችንን ይቀላቀሉ።</p>

        <p className={styles.descEn}>
          Every week, original music, short animated stories, Ethiopian travel and tourism,
          cultural wisdom, and educational ideas — crafted with care and intention.
        </p>

        <p className={styles.descAm} lang="am">
          በየሳምንቱ አዲስ ሙዚቃ፣ አጭር አኒሜሽን ታሪኮች፣ የቱሪዝም መረጃዎች፣ እና የባህልና የትምህርት ይዘቶችን ይከታተሉ።
        </p>

        <div className={styles.buttons}>
          {PLATFORMS.map(({ emoji, label, url }) => (
            <a
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.platformBtn}
              aria-label={`Follow on ${label}`}
            >
              {emoji} {label}
            </a>
          ))}
        </div>

        <p className={styles.note}>
          🔔 Subscribe አድርጉ — No noise. No filler. Only what matters.
        </p>
      </div>
    </section>
  )
}
