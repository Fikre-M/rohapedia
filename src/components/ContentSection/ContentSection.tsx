import styles from './ContentSection.module.css'

interface ContentCard {
  icon: string
  title: string
  desc: string
}

const CARDS: ContentCard[] = [
  {
    icon: '🎵',
    title: 'Original Music',
    desc: 'AI-assisted Amharic and instrumental compositions rooted in Ethiopian scales, history, and soul.',
  },
  {
    icon: '🎬',
    title: 'Animated Stories',
    desc: 'Short animated narratives bringing Ethiopian folklore, history, and modern life to vivid life.',
  },
  {
    icon: '🗺️',
    title: 'Travel and Tourism',
    desc: 'Ethiopian places, landscapes, and travel stories told with depth and local perspective.',
  },
  {
    icon: '📚',
    title: 'Language and Culture',
    desc: 'Amharic words, proverbs, cultural meanings, and the living wisdom of Ethiopian heritage.',
  },
  {
    icon: '🏛️',
    title: 'Heritage and History',
    desc: 'Ethiopian heritage, untold historical stories, and inspiring figures from across the ages.',
  },
  {
    icon: '🔬',
    title: 'Science and Learning',
    desc: 'Educational ideas, science made accessible, and a new perspective on how we understand the world.',
  },
  {
    icon: '🎧',
    title: 'Calm Sounds',
    desc: 'Ambient and reflective sounds for reading, working, resting — an Ethiopian sonic landscape.',
  },
]

export default function ContentSection() {
  return (
    <section id="content" className={styles.section} aria-label="Content categories">
      <div className={styles.header}>
        <div className={styles.sectionLabel}>What we create</div>
        <h2 className={styles.headline}>Every week, something worth your time.</h2>
      </div>

      <div className={styles.grid} role="list">
        {CARDS.map(({ icon, title, desc }) => (
          <article key={title} className={styles.card} role="listitem">
            <span className={styles.cardIcon} aria-hidden="true">{icon}</span>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardDesc}>{desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
