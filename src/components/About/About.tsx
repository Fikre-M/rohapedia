import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className={styles.section} aria-label="About ROHAPEDIA">
      <div className={styles.inner}>

        {/* Left — text */}
        <div className={styles.text}>
          <div className={styles.sectionLabel}>About</div>

          <h2 className={styles.headline}>
            A space built for<br />
            <em>Ethiopian curiosity.</em>
          </h2>

          <p className={styles.paragraph}>
            ROHAPEDIA takes its name from{' '}
            <span className={styles.goldText}>Roha</span> — the ancient name of Lalibela, the
            sacred highland city of Ethiopia known for its monolithic rock-hewn churches and its
            place at the heart of Ethiopian civilization. Roha represents depth, permanence, and
            wonder carved from stone. That is the spirit we carry into every piece of content we
            create.
          </p>

          <p className={styles.paragraph}>
            We are a creative Amharic YouTube channel dedicated to producing original music,
            animated stories, travel and tourism content, cultural education, heritage
            documentation, and ideas worth sharing. Our mission is simple: create content that is
            beautiful, honest, and worth remembering.
          </p>

          <p className={styles.paragraph}>
            We believe Ethiopian stories, sounds, and knowledge deserve a platform that treats them
            with care and ambition — not noise, not filler, only what matters.
          </p>

          <p className={`${styles.paragraph} ${styles.paragraphAm}`} lang="am">
            ሮሃፒዲያ ለኢትዮጵያዊ ፈጠራ፣ ለሙዚቃ፣ ለታሪክ፣ ለባህልና ለዕውቀት የተሰራ የፈጠራ ቦታ ነው። ሮሃ — የላሊበላ ጥንታዊ ስም
            — ጥልቀትን፣ ቋሚነትን እና ድንቅ ነገርን ይወክላል። ያ ነው የምንሸከመው ምልክት።
          </p>
        </div>

        {/* Right — stats */}
        <div className={styles.stats} role="list">

          {/* Large stat */}
          <div className={styles.statCard} role="listitem">
            <div className={styles.statNumber} aria-label="7 content categories">7</div>
            <div className={styles.statLabelEn}>Content categories</div>
            <div className={styles.statLabelAm} lang="am">የይዘት ዓይነቶች</div>
          </div>

          {/* Row of two small stats */}
          <div className={styles.statsRow}>
            <div className={styles.statCard} role="listitem">
              <div className={styles.statNumberSm}>Weekly</div>
              <div className={styles.statLabelEn}>New releases</div>
              <div className={styles.statLabelAm} lang="am">አዲስ ይዘት</div>
            </div>
            <div className={styles.statCard} role="listitem">
              <div className={styles.statNumberSm}>100%</div>
              <div className={styles.statLabelEn}>Original content</div>
              <div className={styles.statLabelAm} lang="am">ዋናው ይዘት</div>
            </div>
          </div>

          {/* Wide origin card */}
          <div className={styles.statCard} role="listitem">
            <div className={styles.statWideAm} lang="am">ሮሃ → ሮሃፒዲያ</div>
            <div className={styles.statWideEn}>
              Named for ancient Lalibela<br />
              <span lang="am">ከጥንታዊ ላሊበላ የወሰደው ስም</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
