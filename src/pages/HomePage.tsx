import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { CAREERS, CATEGORIES } from '../data/careers'

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
      <section className="mb-8 rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 px-6 py-10 text-white shadow-sm">
        <h1 className="max-w-2xl text-3xl font-extrabold leading-tight sm:text-4xl">
          From first year to your career — mapped out.
        </h1>
        <p className="mt-3 max-w-2xl text-brand-50">
          Pick a career and see the full journey: Junior Cycle subjects, Leaving Cert choices, the CAO
          courses and points to aim for, postgrad options, and the jobs at the end — all as interactive
          flow charts and network graphs.
        </p>
      </section>

      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
            🔍
          </span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search a career, e.g. doctor, software, teacher…"
            className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm shadow-sm focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-100"
          />
        </div>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        <button
          onClick={() => setCategory(null)}
          className={`badge border ${
            category === null
              ? 'border-brand-500 bg-brand-50 text-brand-700'
              : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
          }`}
        >
          All
        </button>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`badge border ${
              category === cat
                ? 'border-brand-500 bg-brand-50 text-brand-700'
                : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="py-12 text-center text-slate-500">
          No careers match “{query}”. Try another search.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((career) => (
            <Link
              key={career.id}
              to={`/career/${career.id}`}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-2xl">
                  {career.icon}
                </span>
                <div>
                  <h3 className="font-bold text-slate-900 group-hover:text-brand-700">
                    {career.title}
                  </h3>
                  <span className="text-xs text-slate-400">{career.category}</span>
                </div>
              </div>
              <p className="text-sm text-slate-600">{career.shortDescription}</p>
              <span className="mt-4 text-sm font-semibold text-brand-600">
                View pathway →
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
