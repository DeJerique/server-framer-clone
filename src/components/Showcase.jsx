import { motion } from 'framer-motion'

const previews = [
  { name: 'Northwind Studio', palette: ['#5b7fff', '#a463f2'] },
  { name: 'Alto Journal', palette: ['#c8ff4d', '#5b7fff'] },
  { name: 'Kepler Labs', palette: ['#a463f2', '#c8ff4d'] },
]

export default function Showcase() {
  return (
    <section id="showcase" style={{ padding: '40px 0 120px' }}>
      <div className="wrap">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: 40,
            gap: 24,
            flexWrap: 'wrap',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(28px, 4vw, 42px)',
              fontWeight: 600,
              letterSpacing: '-0.01em',
            }}
          >
            Built on Sitecraft
          </h2>
          <a href="#" className="btn btn-ghost">
            Browse templates
          </a>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 20,
          }}
        >
          {previews.map((p) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              whileHover="hover"
              style={{
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                overflow: 'hidden',
                background: 'var(--bg-raised)',
              }}
            >
              <div
                style={{
                  height: 180,
                  position: 'relative',
                  overflow: 'hidden',
                  background: `linear-gradient(135deg, ${p.palette[0]}33, ${p.palette[1]}33)`,
                }}
              >
                <motion.div
                  variants={{ hover: { scale: 1.06 } }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: `radial-gradient(circle at 30% 30%, ${p.palette[0]}55, transparent 60%), radial-gradient(circle at 70% 70%, ${p.palette[1]}55, transparent 60%)`,
                  }}
                />
              </div>
              <div style={{ padding: '16px 18px' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 16 }}>{p.name}</p>
                <p style={{ color: 'var(--text-dim)', fontSize: 13, marginTop: 4 }}>Live template, open for editing</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
