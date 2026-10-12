import styles from './TaglineStrip.module.css'

export default function TaglineStrip() {
  return (
    <div className={styles.strip} role="complementary" aria-label="Tagline">
      <p className={styles.text}>
        No noise. No filler. &mdash; Only music, stories, culture, learning, and ideas worth
        remembering.
      </p>
    </div>
  )
}
