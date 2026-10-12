import styles from './Manifesto.module.css'

export default function Manifesto() {
  return (
    <section id="manifesto" className={styles.section} aria-label="Manifesto">
      <div className={styles.inner}>
        <blockquote className={styles.quoteEn}>
          &ldquo;Culture is not what we remember &mdash; it is what we{' '}
          <em>choose to keep alive</em>.&rdquo;
        </blockquote>
        <div className={styles.divider} aria-hidden="true" />
        <p className={styles.quoteAm} lang="am">
          ባህል የምናስታውሰው ብቻ አይደለም — ህያው ለማድረግ የምንመርጠው ነው።
        </p>
      </div>
    </section>
  )
}
