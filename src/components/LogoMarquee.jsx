import { motion } from 'framer-motion'
import { logos } from '../data/content'

export default function LogoMarquee() {
  const track = [...logos, ...logos]

  return (
    <section style={{ padding: '40px 0 80px', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div
        style={{
          overflow: 'hidden',
          maskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)',
        }}
      >
        <motion.div
          style={{ display: 'flex', gap: 64, width: 'max-content' }}
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 22, ease: 'linear', repeat: Infinity }}
        >
          {track.map((name, i) => (
            <span
              key={`${name}-${i}`}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 20,
                color: 'var(--text-dim)',
                whiteSpace: 'nowrap',
              }}
            >
              {name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
