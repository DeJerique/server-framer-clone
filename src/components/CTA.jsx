import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="pricing" style={{ padding: '0 0 120px' }}>
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'relative',
            borderRadius: 24,
            padding: '72px 40px',
            textAlign: 'center',
            overflow: 'hidden',
            background: 'linear-gradient(135deg, #14141c, #0a0a0f)',
            border: '1px solid var(--border)',
          }}
        >
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(circle at 50% 0%, rgba(91,127,255,0.25), transparent 55%)',
              pointerEvents: 'none',
            }}
          />
          <div style={{ position: 'relative' }}>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(28px, 4vw, 44px)',
                fontWeight: 600,
                letterSpacing: '-0.01em',
                marginBottom: 18,
              }}
            >
              Your next site starts on a blank canvas.
            </h2>
            <p style={{ color: 'var(--text-dim)', fontSize: 16, marginBottom: 32 }}>
              Free while you're building. Pay only when you publish.
            </p>
            <a href="#" className="btn btn-accent" style={{ padding: '14px 30px', fontSize: 15 }}>
              Start for free
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
