import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { CAREERS, CATEGORIES } from '../data/careers'

function Masthead() {
  return (
    <header className="pf-masthead pf-wrap">
      <div className="pf-dateline">
        <span>Irish Career Pathways</span>
        <span>·</span>
        <span>Est. 2025</span>
        <span>·</span>
        <span>The Guide</span>
      </div>
      <h1 className="pf-wordmark pf-rise" style={{ marginTop: 6 }}>
        Pathfinder
      </h1>
      <div className="pf-dateline" style={{ marginTop: 6 }}>
        <span>A student’s companion from first year to a first job</span>
      </div>
      <hr className="pf-rule-double" style={{ marginTop: 18 }} />
      <nav className="pf-nav" style={{ display: 'flex', justifyContent: 'center', gap: 26, padding: '12px 0' }}>
        <a href="#index">The Index</a>
        <a href="#/about">About</a>
        <Link to="/" style={{ color: 'var(--muted)' }}>
          ← Standard version
        </Link>
      </nav>
      <hr className="pf-rule" />
    </header>
  )
}

export default function ProspectusHome() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<string | null>(null)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return CAREERS.filter((c) => {
      const okCat = !category || c.category === category
      const okQ =
        !q ||
        c.title.toLowerCase().includes(q) ||
        c.shortDescription.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q) ||
        c.roles.some((r) => r.title.toLowerCase().includes(q))
      return okCat && okQ
    })
  }, [query, category])

  return (
    <div className="pf">
      <Masthead />

      {/* Leader */}
      <section className="pf-wrap" style={{ padding: '52px 28px 40px' }}>
        <div style={{ maxWidth: 900 }}>
          <div className="pf-kicker">The leader</div>
          <h2
            className="pf-display pf-rise"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 4.2rem)', marginTop: 14 }}
          >
            From a first-year timetable to a <span className="pf-italic pf-accent">life’s work.</span>
          </h2>
        </div>
        <div
          className="pf-dropcap"
          style={{ maxWidth: 620, marginTop: 26, fontSize: '1.14rem', columnGap: 40 }}
        >
          Choosing subjects at fifteen can decide what feels possible at twenty-five. This guide draws
          the whole line for you — the Junior Cycle groundwork, the Leaving Certificate subjects that
          matter, the CAO courses and the points they command, the postgraduate study some careers
          demand, and the work waiting at the end. Forty-eight careers, each mapped from the classroom
          to a calling.
        </div>
      </section>

      {/* Controls */}
      <section className="pf-wrap" id="index" style={{ paddingBottom: 8 }}>
        <hr className="pf-rule-strong" />
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 16,
            alignItems: 'baseline',
            justifyContent: 'space-between',
            padding: '18px 0',
          }}
        >
          <div className="pf-kicker">The Index — {filtered.length} careers</div>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search…"
            className="pf-display"
            style={{
              background: 'transparent',
              border: 0,
              borderBottom: '1px solid var(--rule-strong)',
              padding: '4px 2px',
              fontSize: '1.1rem',
              color: 'var(--ink)',
              outline: 'none',
              minWidth: 200,
            }}
          />
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 14px', paddingBottom: 6 }}>
          <FilterLink label="All" active={category === null} onClick={() => setCategory(null)} />
          {CATEGORIES.map((c) => (
            <FilterLink key={c} label={c} active={category === c} onClick={() => setCategory(c)} />
          ))}
        </div>
      </section>

      {/* Index grid */}
      <section className="pf-wrap" style={{ paddingBottom: 60 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            columnGap: 40,
          }}
        >
          {filtered.map((c, i) => (
            <Link key={c.id} to={`/prospectus/${c.id}`} className="pf-entry">
              <div style={{ display: 'flex', gap: 16 }}>
                <span className="pf-entry-num">{String(i + 1).padStart(2, '0')}</span>
                <div style={{ flex: 1 }}>
                  <div className="pf-kicker" style={{ marginBottom: 4 }}>
                    {c.category}
                  </div>
                  <div className="pf-entry-title">
                    {c.icon} {c.title}
                  </div>
                  <p className="pf-muted" style={{ fontSize: '0.95rem', marginTop: 4 }}>
                    {c.shortDescription}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="pf-muted" style={{ padding: '40px 0', textAlign: 'center' }}>
            No entries match “{query}”.
          </p>
        )}
      </section>

      {/* Colophon */}
      <footer style={{ borderTop: '1px solid var(--ink)' }}>
        <div className="pf-wrap" style={{ padding: '26px 28px 48px' }}>
          <div className="pf-dateline" style={{ justifyContent: 'flex-start', gap: 12 }}>
            <span>Pathfinder</span>
            <span>·</span>
            <span>Independent &amp; free</span>
          </div>
          <p className="pf-muted" style={{ fontSize: '0.85rem', marginTop: 12, maxWidth: 640 }}>
            CAO points are 2025 Round 1 figures, checked against the official tables. Not affiliated with
            the CAO, CSO or any college. An editorial preview of the Pathfinder guide.
          </p>
        </div>
      </footer>
    </div>
  )
}

function FilterLink({
  label,
  active,
  onClick,
}: {
  label: string
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      style={{
        background: 'none',
        border: 0,
        cursor: 'pointer',
        textTransform: 'uppercase',
        letterSpacing: '0.14em',
        fontSize: '0.7rem',
        fontWeight: active ? 700 : 500,
        color: active ? 'var(--accent)' : 'var(--muted)',
        borderBottom: active ? '1px solid var(--accent)' : '1px solid transparent',
        padding: '2px 0',
      }}
    >
      {label}
    </button>
  )
}
