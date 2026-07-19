import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { CAREERS, CATEGORIES } from '../data/careers'
import { categoryStyle } from '../data/categories'

export default function HomePage() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<string | null>(null)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return CAREERS.filter((c) => {
      const matchesCategory = !category || c.category === category
      const matchesQuery =
        !q ||
        c.title.toLowerCase().includes(q) ||
        c.shortDescription.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q) ||
        c.roles.some((r) => r.title.toLowerCase().includes(q))
      return matchesCategory && matchesQuery
    })
  }, [query, category])

  return (
    <div>
      <section className="mb-8 rounded-3xl bg-ink px-6 py-14 text-center text-white sm:py-20">
        <h1 className="mx-auto max-w-4xl text-3xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
          <span className="sm:whitespace-nowrap">From first year to your career.</span>
          <br />
          <span className="text-brand-400">Mapped out.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-[#a1a1a6] sm:text-xl">
          Pick a career and see the full journey — Junior Cycle subjects, Leaving Cert choices, the CAO
          courses and points to aim for, postgrad options, and the jobs at the end.
        </p>
      </section>

      {/* How it works */}
      <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {[
          { n: '1', t: 'Pick a career', d: 'Search or browse 48 careers by category.' },
          { n: '2', t: 'Follow the path', d: 'See subjects, CAO points, courses and postgrad, step by step.' },
          { n: '3', t: 'See the jobs', d: 'The roles at the end, with pay vs the average wage.' },
        ].map((s) => (
          <div
            key={s.n}
            className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-[#1c1c1e]"
          >
            <div className="grid h-7 w-7 place-items-center rounded-full bg-brand-600 text-xs font-bold text-white">
              {s.n}
            </div>
            <h3 className="mt-2 text-sm font-semibold text-ink dark:text-mist">{s.t}</h3>
            <p className="mt-0.5 text-xs text-graphite">{s.d}</p>
          </div>
        ))}
      </div>

      <div className="mb-5">
        <div className="relative">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">🔍</span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search a career, e.g. doctor, software, teacher…"
            className="w-full rounded-full border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm shadow-sm focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100 dark:border-white/10 dark:bg-[#1c1c1e] dark:text-mist dark:placeholder:text-graphite dark:focus:ring-brand-500/30"
          />
        </div>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        <button
          onClick={() => setCategory(null)}
          className={`badge border transition ${
            category === null
              ? 'border-brand-500 bg-brand-600 text-white'
              : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50 dark:border-white/10 dark:bg-[#1c1c1e] dark:text-graphite dark:hover:bg-white/10'
          }`}
        >
          All
        </button>
        {CATEGORIES.map((cat) => {
          const cs = categoryStyle(cat)
          const active = category === cat
          return (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`badge border transition ${
                active
                  ? `${cs.chip} border-transparent`
                  : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50 dark:border-white/10 dark:bg-[#1c1c1e] dark:text-graphite dark:hover:bg-white/10'
              }`}
            >
              <span className="mr-1.5 inline-block h-2 w-2 rounded-full" style={{ background: cs.accent }} />
              {cat}
            </button>
          )
        })}
      </div>

      {filtered.length === 0 ? (
        <p className="py-12 text-center text-graphite">No careers match “{query}”. Try another search.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((career) => {
            const cs = categoryStyle(career.category)
            return (
              <Link
                key={career.id}
                to={`/career/${career.id}`}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 pl-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-[#1c1c1e]"
              >
                <span className="absolute inset-y-0 left-0 w-1.5" style={{ background: cs.accent }} />
                <div className="mb-3 flex items-center gap-3">
                  <span className={`grid h-11 w-11 place-items-center rounded-xl text-2xl ${cs.tile}`}>
                    {career.icon}
                  </span>
                  <div>
                    <h3 className="font-bold text-ink dark:text-mist">{career.title}</h3>
                    <span className="text-xs" style={{ color: cs.accent }}>
                      {career.category}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-slate-600 dark:text-graphite">{career.shortDescription}</p>
                <span className="mt-4 text-sm font-semibold text-brand-600 dark:text-brand-300">
                  View pathway →
                </span>
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}
