import { Link, useParams } from 'react-router-dom'
import { getCareer } from '../data/careers'
import { getSubject } from '../data/subjects'
import { categoryStyle } from '../data/categories'
import type { Importance, PostgradNeed } from '../data/types'
import PathwayFlow from '../components/PathwayFlow'
import SalaryBar from '../components/SalaryBar'
import { useDocumentTitle } from '../useDocumentTitle'

const IMPORTANCE_BADGE: Record<Importance, string> = {
  essential: 'bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-300',
  recommended: 'bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300',
  helpful: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300',
}

const POSTGRAD_COPY: Record<PostgradNeed, { label: string; text: string; cls: string }> = {
  required: {
    label: 'Required',
    text: 'You must complete further study or professional training after your degree to work in this career.',
    cls: 'border-red-200 bg-red-50 text-red-800 dark:border-red-500/25 dark:bg-red-500/10 dark:text-red-200',
  },
  recommended: {
    label: 'Often needed',
    text: 'Not always essential, but most people qualify or progress via a masters, professional exams or chartership.',
    cls: 'border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-500/25 dark:bg-amber-500/10 dark:text-amber-200',
  },
  optional: {
    label: 'Optional',
    text: 'Your degree qualifies you to start this career. Postgraduate study is mainly for specialising or moving into research.',
    cls: 'border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-500/25 dark:bg-emerald-500/10 dark:text-emerald-200',
  },
}

const CARD = 'rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-[#1c1c1e]'

function PostgradBanner({ need }: { need: PostgradNeed }) {
  const c = POSTGRAD_COPY[need]
  return (
    <div className={`mb-3 rounded-2xl border p-3 text-sm ${c.cls}`}>
      <span className="badge mr-2 bg-white/70 font-semibold uppercase tracking-wide dark:bg-white/15">
        {c.label}
      </span>
      {c.text}
    </div>
  )
}

export default function CareerPage() {
  const { careerId } = useParams()
  const career = careerId ? getCareer(careerId) : undefined
  useDocumentTitle(
    career ? `${career.title} — career path, subjects & CAO points` : undefined,
    career
      ? `How to become a ${career.title} in Ireland: Leaving Cert subjects, CAO courses and 2025 points, postgrad options and roles. ${career.shortDescription}`
      : undefined,
  )

  if (!career) {
    return (
      <div className="py-16 text-center">
        <p className="text-lg font-semibold">Career not found.</p>
        <Link to="/" className="mt-3 inline-block text-brand-600 underline">
          Back to all careers
        </Link>
      </div>
    )
  }

  const cs = categoryStyle(career.category)

  return (
    <article className="space-y-8">
      {/* Hero */}
      <header className={`relative overflow-hidden p-6 ${CARD}`}>
        <span className="absolute inset-x-0 top-0 h-1.5" style={{ background: cs.accent }} />
        <div className="flex items-start gap-4">
          <span className={`grid h-16 w-16 shrink-0 place-items-center rounded-2xl text-4xl ${cs.tile}`}>
            {career.icon}
          </span>
          <div>
            <span className={`badge ${cs.chip}`}>{career.category}</span>
            <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-ink dark:text-mist">
              {career.title}
            </h1>
            <p className="mt-2 max-w-3xl text-slate-600 dark:text-graphite">{career.description}</p>
          </div>
        </div>
      </header>

      {/* Pathway flow chart */}
      <section>
        <h2 className="mb-1 text-xl font-bold text-ink dark:text-mist">The pathway, visualised</h2>
        <p className="mb-3 text-sm text-graphite">
          Left to right: the stages from Junior Cycle through to the jobs at the end. Drag to pan,
          scroll to zoom.
        </p>
        <PathwayFlow career={career} />
      </section>

      {/* Subjects */}
      <section>
        <h2 className="mb-1 text-xl font-bold text-ink dark:text-mist">Leaving Cert subjects to consider</h2>
        <p className="mb-4 text-sm text-graphite">
          Subjects that help on the way to this career, and how important each one is.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {career.seniorCycleSubjects.map((s) => {
            const subj = getSubject(s.subjectId)
            if (!subj) return null
            return (
              <div key={s.subjectId} className={`${CARD} p-4`}>
                <div className="mb-1 flex items-center justify-between gap-2">
                  <h3 className="font-bold text-ink dark:text-mist">{subj.name}</h3>
                  <span className={`badge ${IMPORTANCE_BADGE[s.importance]}`}>{s.importance}</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-graphite">{subj.description}</p>
                {s.reason && (
                  <p className="mt-2 text-sm font-medium text-brand-700 dark:text-brand-300">Why: {s.reason}</p>
                )}
              </div>
            )
          })}
        </div>
        <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800 dark:border-amber-500/25 dark:bg-amber-500/10 dark:text-amber-200">
          <strong>Leaving Cert note:</strong> {career.leavingCertNotes}
        </div>
      </section>

      {/* CAO Courses */}
      <section>
        <h2 className="mb-1 text-xl font-bold text-ink dark:text-mist">College courses &amp; CAO points</h2>
        <p className="mb-4 text-sm text-graphite">
          <strong>2025 Round 1</strong> points (Level 8 honours degrees unless noted), verified against the
          official CAO tables. Points change yearly — confirm the latest on{' '}
          <a className="text-brand-600 underline dark:text-brand-300" href="https://www.cao.ie" target="_blank" rel="noreferrer">
            cao.ie
          </a>
          .
        </p>
        <div className={`overflow-x-auto ${CARD}`}>
          <table className="min-w-full divide-y divide-slate-200 text-sm dark:divide-white/10">
            <thead className="bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500 dark:bg-white/5 dark:text-graphite">
              <tr>
                <th className="px-4 py-3 font-semibold">Course</th>
                <th className="px-4 py-3 font-semibold">Institution</th>
                <th className="px-4 py-3 font-semibold">Code</th>
                <th className="px-4 py-3 font-semibold">Duration</th>
                <th className="px-4 py-3 text-right font-semibold">CAO points</th>
                <th className="px-4 py-3 font-semibold">Extra</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-white/5">
              {career.collegeCourses.map((c) => (
                <tr key={c.code} className="hover:bg-slate-50 dark:hover:bg-white/5">
                  <td className="px-4 py-3 font-medium text-ink dark:text-mist">{c.name}</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-graphite">{c.institution}</td>
                  <td className="px-4 py-3 font-mono text-xs text-slate-500 dark:text-graphite">{c.code}</td>
                  <td className="px-4 py-3 text-slate-600 dark:text-graphite">{c.duration}</td>
                  <td className="px-4 py-3 text-right">
                    <span className="font-bold text-ink dark:text-mist">{c.caoPoints ?? '—'}</span>
                    <span className="ml-1 text-[10px] text-slate-400">’{c.pointsYear.slice(2)}</span>
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-500 dark:text-graphite">{c.extraRequirements ?? '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Postgrad + Roles */}
      <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div>
          <h2 className="mb-3 text-xl font-bold text-ink dark:text-mist">Postgrad &amp; training</h2>
          <PostgradBanner need={career.postgradNeed ?? 'optional'} />
          <ul className="space-y-3">
            {career.postgrad.map((p) => (
              <li key={p.name} className={`${CARD} p-4`}>
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-semibold text-ink dark:text-mist">{p.name}</h3>
                  <span className="badge bg-purple-100 text-purple-700 dark:bg-purple-500/15 dark:text-purple-300">
                    {p.type}
                  </span>
                </div>
                <p className="mt-1 text-sm text-slate-600 dark:text-graphite">{p.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-1 text-xl font-bold text-ink dark:text-mist">Possible roles</h2>
          <p className="mb-3 text-sm text-graphite">
            Pay shown as a <strong>% of the Irish average wage</strong> (≈ €50k). Green = above
            average, amber = below.
          </p>
          <ul className="space-y-3">
            {career.roles.map((r) => (
              <li key={r.title} className={`${CARD} p-4`}>
                <h3 className="font-semibold text-ink dark:text-mist">{r.title}</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-graphite">{r.description}</p>
                {r.salaryRange && <SalaryBar salaryRange={r.salaryRange} />}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Related */}
      {career.relatedCareers && career.relatedCareers.length > 0 && (
        <section>
          <h2 className="mb-3 text-xl font-bold text-ink dark:text-mist">Related careers</h2>
          <div className="flex flex-wrap gap-2">
            {career.relatedCareers.map((rid) => {
              const rc = getCareer(rid)
              if (!rc) return null
              const rcs = categoryStyle(rc.category)
              return (
                <Link
                  key={rid}
                  to={`/career/${rid}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-[#1c1c1e] dark:text-mist"
                >
                  <span className="h-2 w-2 rounded-full" style={{ background: rcs.accent }} />
                  <span>{rc.icon}</span>
                  {rc.title}
                </Link>
              )
            })}
          </div>
        </section>
      )}
    </article>
  )
}
