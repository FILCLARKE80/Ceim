import { Link, useParams } from 'react-router-dom'
import { getCareer } from '../data/careers'
import { getSubject } from '../data/subjects'
import type { Importance, PostgradNeed } from '../data/types'
import PathwayFlow from '../components/PathwayFlow'
import SalaryBar from '../components/SalaryBar'

const IMPORTANCE_BADGE: Record<Importance, string> = {
  essential: 'bg-red-100 text-red-700',
  recommended: 'bg-amber-100 text-amber-700',
  helpful: 'bg-emerald-100 text-emerald-700',
}

const POSTGRAD_COPY: Record<PostgradNeed, { label: string; text: string; cls: string }> = {
  required: {
    label: 'Required',
    text: 'You must complete further study or professional training after your degree to work in this career.',
    cls: 'border-red-200 bg-red-50 text-red-800',
  },
  recommended: {
    label: 'Often needed',
    text: 'Not always essential, but most people qualify or progress via a masters, professional exams or chartership.',
    cls: 'border-amber-200 bg-amber-50 text-amber-800',
  },
  optional: {
    label: 'Optional',
    text: 'Your degree qualifies you to start this career. Postgraduate study is mainly for specialising or moving into research.',
    cls: 'border-emerald-200 bg-emerald-50 text-emerald-800',
  },
}

function PostgradBanner({ need }: { need: PostgradNeed }) {
  const c = POSTGRAD_COPY[need]
  return (
    <div className={`mb-3 rounded-2xl border p-3 text-sm ${c.cls}`}>
      <span className="badge mr-2 bg-white/70 font-semibold uppercase tracking-wide">{c.label}</span>
      {c.text}
    </div>
  )
}

export default function CareerPage() {
  const { careerId } = useParams()
  const career = careerId ? getCareer(careerId) : undefined

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

  return (
    <article className="space-y-8">
      {/* Hero */}
      <header className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-start gap-4">
          <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-brand-50 text-4xl">
            {career.icon}
          </span>
          <div>
            <span className="badge bg-brand-50 text-brand-700">{career.category}</span>
            <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-slate-900">
              {career.title}
            </h1>
            <p className="mt-2 max-w-3xl text-slate-600">{career.description}</p>
          </div>
        </div>
      </header>

      {/* Pathway flow chart */}
      <section>
        <h2 className="mb-1 text-xl font-bold text-slate-900">The pathway, visualised</h2>
        <p className="mb-3 text-sm text-slate-500">
          Left to right: the stages from Junior Cycle through to the jobs at the end. Drag to pan,
          scroll to zoom.
        </p>
        <PathwayFlow career={career} />
      </section>

      {/* Subjects */}
      <section>
        <h2 className="mb-1 text-xl font-bold text-slate-900">Leaving Cert subjects to consider</h2>
        <p className="mb-4 text-sm text-slate-500">
          Subjects that help on the way to this career, and how important each one is.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {career.seniorCycleSubjects.map((s) => {
            const subj = getSubject(s.subjectId)
            if (!subj) return null
            return (
              <div key={s.subjectId} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="mb-1 flex items-center justify-between gap-2">
                  <h3 className="font-bold text-slate-900">{subj.name}</h3>
                  <span className={`badge ${IMPORTANCE_BADGE[s.importance]}`}>{s.importance}</span>
                </div>
                <p className="text-sm text-slate-600">{subj.description}</p>
                {s.reason && (
                  <p className="mt-2 text-sm font-medium text-brand-700">Why: {s.reason}</p>
                )}
              </div>
            )
          })}
        </div>
        <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
          <strong>Leaving Cert note:</strong> {career.leavingCertNotes}
        </div>
      </section>

      {/* CAO Courses */}
      <section>
        <h2 className="mb-1 text-xl font-bold text-slate-900">College courses &amp; CAO points</h2>
        <p className="mb-4 text-sm text-slate-500">
          <strong>2025 Round 1</strong> points (Level 8 honours degrees unless noted), verified against the
          official CAO tables. Points change yearly — confirm the latest on{' '}
          <a className="text-brand-700 underline" href="https://www.cao.ie" target="_blank" rel="noreferrer">
            cao.ie
          </a>
          .
        </p>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="min-w-full divide-y divide-slate-200 text-sm">
            <thead className="bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3 font-semibold">Course</th>
                <th className="px-4 py-3 font-semibold">Institution</th>
                <th className="px-4 py-3 font-semibold">Code</th>
                <th className="px-4 py-3 font-semibold">Duration</th>
                <th className="px-4 py-3 text-right font-semibold">CAO points</th>
                <th className="px-4 py-3 font-semibold">Extra</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {career.collegeCourses.map((c) => (
                <tr key={c.code} className="hover:bg-slate-50">
                  <td className="px-4 py-3 font-medium text-slate-900">{c.name}</td>
                  <td className="px-4 py-3 text-slate-600">{c.institution}</td>
                  <td className="px-4 py-3 font-mono text-xs text-slate-500">{c.code}</td>
                  <td className="px-4 py-3 text-slate-600">{c.duration}</td>
                  <td className="px-4 py-3 text-right">
                    <span className="font-bold text-slate-900">
                      {c.caoPoints ?? '—'}
                    </span>
                    <span className="ml-1 text-[10px] text-slate-400">’{c.pointsYear.slice(2)}</span>
                  </td>
                  <td className="px-4 py-3 text-xs text-slate-500">{c.extraRequirements ?? '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Postgrad + Roles */}
      <section className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div>
          <h2 className="mb-3 text-xl font-bold text-slate-900">Postgrad &amp; training</h2>
          <PostgradBanner need={career.postgradNeed ?? 'optional'} />
          <ul className="space-y-3">
            {career.postgrad.map((p) => (
              <li key={p.name} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-semibold text-slate-900">{p.name}</h3>
                  <span className="badge bg-purple-100 text-purple-700">{p.type}</span>
                </div>
                <p className="mt-1 text-sm text-slate-600">{p.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-1 text-xl font-bold text-slate-900">Possible roles</h2>
          <p className="mb-3 text-sm text-slate-500">
            Pay shown as a <strong>% of the Irish average wage</strong> (≈ €50k). Green = above
            average, amber = below.
          </p>
          <ul className="space-y-3">
            {career.roles.map((r) => (
              <li key={r.title} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <h3 className="font-semibold text-slate-900">{r.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{r.description}</p>
                {r.salaryRange && <SalaryBar salaryRange={r.salaryRange} />}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Related */}
      {career.relatedCareers && career.relatedCareers.length > 0 && (
        <section>
          <h2 className="mb-3 text-xl font-bold text-slate-900">Related careers</h2>
          <div className="flex flex-wrap gap-2">
            {career.relatedCareers.map((rid) => {
              const rc = getCareer(rid)
              if (!rc) return null
              return (
                <Link
                  key={rid}
                  to={`/career/${rid}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm hover:border-brand-300 hover:text-brand-700"
                >
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
