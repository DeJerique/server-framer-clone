import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const ref = useRef(null)
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const sx = useSpring(mx, { stiffness: 60, damping: 20 })
  const sy = useSpring(my, { stiffness: 60, damping: 20 })
  const blobX = useTransform(sx, [0, 1], ['20%', '80%'])
  const blobY = useTransform(sy, [0, 1], ['10%', '70%'])

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width)
    my.set((e.clientY - rect.top) / rect.height)
  }

  return (
    <section
      id="top"
      ref={ref}
      onMouseMove={handleMove}
      style={{
        position: 'relative',
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        paddingTop: 68,
      }}
    >
      <motion.div
        aria-hidden
        style={{
          position: 'absolute',
          width: 560,
          height: 560,
          borderRadius: '50%',
          left: blobX,
          top: blobY,
          translateX: '-50%',
          translateY: '-50%',
          background: 'radial-gradient(circle, rgba(91,127,255,0.35) 0%, rgba(164,99,242,0.18) 45%, transparent 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }}
      />

      <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
        <motion.div variants={container} initial="hidden" animate="show" style={{ maxWidth: 720 }}>
          <motion.div
            variants={item}
            className="eyebrow"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              border: '1px solid var(--border)',
              borderRadius: 100,
              padding: '6px 14px',
              marginBottom: 28,
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent-lime)' }} />
            Now in open beta
          </motion.div>

          <motion.h1
            variants={item}
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: 'clamp(40px, 6vw, 76px)',
              lineHeight: 1.03,
              letterSpacing: '-0.02em',
              marginBottom: 24,
            }}
          >
            Design sites that move like the real thing.
          </motion.h1>

          <motion.p
            variants={item}
            style={{
              fontSize: 'clamp(16px, 2vw, 19px)',
              color: 'var(--text-dim)',
              lineHeight: 1.6,
              maxWidth: 520,
              marginBottom: 36,
            }}
          >
            Sitecraft is a visual canvas for building production websites — with animation,
            responsive layout, and clean React underneath every frame you draw.
          </motion.p>

          <motion.div variants={item} style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="#pricing" className="btn btn-accent" style={{ padding: '13px 26px', fontSize: 15 }}>
              Start building — it's free
            </a>
            <a href="#showcase" className="btn btn-ghost" style={{ padding: '13px 26px', fontSize: 15 }}>
              See it in motion
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
