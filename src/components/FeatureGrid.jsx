import { motion } from 'framer-motion'
import { features } from '../data/content'

const spanMap = {
  lg: 'span 7',
  md: 'span 5',
  sm: 'span 4',
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const card = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function FeatureGrid() {
  return (
    <section id="features" style={{ padding: '120px 0' }}>
      <div className="wrap">
        <div style={{ maxWidth: 560, marginBottom: 56 }}>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: 600,
              letterSpacing: '-0.01em',
              marginBottom: 16,
            }}
          >
            Everything the browser can do, on your canvas.
          </h2>
          <p style={{ color: 'var(--text-dim)', fontSize: 17, lineHeight: 1.6 }}>
            No separate prototyping tool. No handoff. What you draw is what ships.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 16,
          }}
          className="feature-grid"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={card}
              whileHover={{ borderColor: 'rgba(255,255,255,0.22)', y: -3 }}
              style={{
                gridColumn: spanMap[f.size] || 'span 4',
                background: 'var(--bg-raised)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                padding: 28,
                minHeight: f.size === 'lg' ? 260 : 200,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                transition: 'border-color 0.2s ease',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 20,
                  fontWeight: 600,
                  marginBottom: 10,
                }}
              >
                {f.title}
              </h3>
              <p style={{ color: 'var(--text-dim)', fontSize: 15, lineHeight: 1.55 }}>{f.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
