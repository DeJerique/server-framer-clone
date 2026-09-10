import { footerLinks } from '../data/content'

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '56px 0 40px' }}>
      <div
        className="wrap"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 40,
        }}
      >
        <div style={{ maxWidth: 260 }}>
          <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 17, marginBottom: 12 }}>
            <span style={{ width: 20, height: 20, borderRadius: 6, background: 'var(--gradient)', display: 'inline-block' }} />
            Sitecraft
          </a>
          <p style={{ color: 'var(--text-dim)', fontSize: 14, lineHeight: 1.6 }}>
            A visual canvas for building and shipping real websites by serverTech.
          </p>
        </div>

        <div style={{ display: 'flex', gap: 56, flexWrap: 'wrap' }}>
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p style={{ fontSize: 14, fontWeight: 500, marginBottom: 14 }}>{group}</p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {links.map((l) => (
                  <li key={l}>
                    <a href="#" style={{ color: 'var(--text-dim)', fontSize: 14 }}>
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="wrap" style={{ marginTop: 48, paddingTop: 24, borderTop: '1px solid var(--border)' }}>
        <p style={{ color: 'var(--text-dim)', fontSize: 13 }}>© {new Date().getFullYear()} A challenge. Built by serverTech.</p>
      </div>
    </footer>
  )
}
