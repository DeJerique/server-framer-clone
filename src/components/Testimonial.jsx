import { motion } from 'framer-motion'
import { testimonial } from '../data/content'

export default function Testimonial() {
  return (
    <section id="testimonial" style={{ padding: '60px 0 120px' }}>
      <div className="wrap">
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            maxWidth: 760,
            margin: '0 auto',
            textAlign: 'center',
            border: 'none',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(22px, 3.4vw, 34px)',
              fontWeight: 500,
              lineHeight: 1.35,
              letterSpacing: '-0.01em',
              marginBottom: 28,
            }}
          >
            “{testimonial.quote}”
          </p>
          <footer style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
            <span
              aria-hidden
              style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                background: 'var(--gradient)',
                display: 'inline-block',
              }}
            />
            <span style={{ fontSize: 14, color: 'var(--text-dim)' }}>
              <strong style={{ color: 'var(--text)', fontWeight: 500 }}>{testimonial.name}</strong>
              {'  '}
              {testimonial.role}
            </span>
          </footer>
        </motion.blockquote>
      </div>
    </section>
  )
}
