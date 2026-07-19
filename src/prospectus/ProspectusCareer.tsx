import { Link, useParams } from 'react-router-dom'
import { CAREERS, getCareer } from '../data/careers'
import { getSubject } from '../data/subjects'
import { parseSalaryRange, pctOfAverage } from '../data/salary'
import type { PostgradNeed } from '../data/types'

const ROMAN = ['I', 'II', 'III', 'IV', 'V']

const INST_SHORT: Record<string, string> = {
  'Trinity College Dublin': 'TCD',
  'University College Dublin': 'UCD',
  'University College Cork': 'UCC',
  'University of Galway': 'Galway',
  'Dublin City University': 'DCU',
  'University of Limerick': 'UL',
  'Maynooth University': 'Maynooth',
}
const shortInst = (n: string) => INST_SHORT[n] ?? n

const POSTGRAD_WORD: Record<PostgradNeed, string> = {
  required: 'Required',
  recommended: 'Often needed',
  optional: 'Optional',
}

function payLabel(range?: string): string | null {
  if (!range) return null
  const band = parseSalaryRange(range)
  if (!band) return null
  return `${pctOfAverage(band.min)}–${pctOfAverage(band.max)}% of the average wage`
}

export default function ProspectusCareer() {
  const { careerId } = useParams()
  const career = careerId ? getCareer(careerId) : undefined

  if (!career) {
    return (
      <div className="pf">
        <div className="pf-narrow" style={{ padding: '80px 28px', textAlign: 'center' }}>
          <p className="pf-display" style={{ fontSize: '1.6rem' }}>
            No such entry.
          </p>
          <Link to="/prospectus" className="pf-link">
            Return to the index
          </Link>
        </div>
      </div>
    )
  }

  const number = CAREERS.findIndex((c) => c.id === career.id) + 1
  const stages: { label: string; items: string }[] = [
    { label: '1st–3rd Year · Junior Cycle', items: career.juniorCycle.join(' · ') },
    {
      label: '5th–6th Year · Leaving Certificate',
      items: career.seniorCycleSubjects.map((s) => getSubject(s.subjectId)?.name ?? s.subjectId).join(' · '),
    },
    {
      label: 'College · The CAO',
      items: Array.from(new Set(career.collegeCourses.map((c) => `${c.name} (${shortInst(c.institution)})`))).join(' · '),
    },
    { label: 'Postgraduate & Training', items: career.postgrad.map((p) => p.name).join(' · ') },
    { label: 'The Work', items: career.roles.map((r) => r.title).join(' · ') },
  ]

  return (
    <div className="pf">
      {/* running head */}
      <div className="pf-wrap" style={{ paddingTop: 22 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <Link to="/prospectus" className="pf-display" style={{ fontSize: '1.2rem', textDecoration: 'none', color: 'var(--ink)' }}>
            Pathfinder
          </Link>
          <Link to="/prospectus" className="pf-kicker" style={{ textDecoration: 'none' }}>
            ← The Index
          </Link>
        </div>
        <hr className="pf-rule-double" style={{ marginTop: 12 }} />
      </div>

      {/* feature head */}
      <article className="pf-wrap" style={{ paddingBottom: 64 }}>
        <div style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center', paddingTop: 40 }}>
          <div className="pf-kicker">
            {career.category} · Entry No. {String(number).padStart(2, '0')}
          </div>
          <h1
            className="pf-display pf-rise"
            style={{ fontSize: 'clamp(2.6rem, 7vw, 5rem)', margin: '14px 0 0' }}
          >
            {career.title}
          </h1>
        </div>

        <div className="pf-narrow">
          <p
            className="pf-dropcap"
            style={{ fontSize: '1.2rem', marginTop: 30, textAlign: 'justify' }}
          >
            {career.description}
          </p>

          <div className="pf-meta" style={{ marginTop: 26, paddingTop: 16, borderTop: '1px solid var(--rule)' }}>
            <span>
              Postgrad — <strong>{POSTGRAD_WORD[career.postgradNeed ?? 'optional']}</strong>
            </span>
            <span>
              <strong>{career.collegeCourses.length}</strong> courses
            </span>
            <span>
              <strong>{career.roles.length}</strong> roles
            </span>
          </div>
        </div>

        {/* The Path */}
        <Section title="The Path">
          {stages.map((s, i) => (
            <div className="pf-stage" key={i}>
              <div className="pf-stage-num">{ROMAN[i]}</div>
              <div>
                <div className="pf-stage-label">{s.label}</div>
                <div className="pf-stage-items" style={{ marginTop: 4 }}>
                  {s.items || '—'}
                </div>
              </div>
            </div>
          ))}
        </Section>

        {/* Subjects */}
        <Section title="Subjects to weigh">
          {career.seniorCycleSubjects.map((s) => {
            const subj = getSubject(s.subjectId)
            if (!subj) return null
            return (
              <div key={s.subjectId} style={{ padding: '14px 0', borderTop: '1px solid var(--rule)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12 }}>
                  <span className="pf-display" style={{ fontSize: '1.2rem' }}>
                    {subj.name}
                  </span>
                  <span className="pf-kicker">{s.importance}</span>
                </div>
                <p className="pf-muted" style={{ fontSize: '0.98rem', marginTop: 4 }}>
                  {subj.description}
                  {s.reason ? ` — ${s.reason}` : ''}
                </p>
              </div>
            )
          })}
          <p className="pf-muted" style={{ fontSize: '0.9rem', marginTop: 16, fontStyle: 'italic' }}>
            {career.leavingCertNotes}
          </p>
        </Section>

        {/* Where to study */}
        <Section title="Where to study">
          <table className="pf-table">
            <thead>
              <tr>
                <th>Course</th>
                <th>Institution</th>
                <th>Code</th>
                <th style={{ textAlign: 'right' }}>Points ’25</th>
              </tr>
            </thead>
            <tbody>
              {career.collegeCourses.map((c) => (
                <tr key={c.code}>
                  <td className="pf-display" style={{ fontSize: '1.02rem' }}>{c.name}</td>
                  <td className="pf-muted">{c.institution}</td>
                  <td className="pf-muted" style={{ fontVariantNumeric: 'tabular-nums' }}>{c.code}</td>
                  <td className="pf-figure" style={{ textAlign: 'right' }}>{c.caoPoints ?? '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="pf-muted" style={{ fontSize: '0.82rem', marginTop: 12 }}>
            2025 CAO Round 1 points. Verify current figures at cao.ie.
          </p>
        </Section>

        {/* After the degree */}
        <Section title="After the degree">
          {career.postgrad.map((p) => (
            <div key={p.name} style={{ padding: '12px 0', borderTop: '1px solid var(--rule)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'baseline' }}>
                <span className="pf-display" style={{ fontSize: '1.1rem' }}>{p.name}</span>
                <span className="pf-kicker">{p.type}</span>
              </div>
              <p className="pf-muted" style={{ fontSize: '0.96rem', marginTop: 2 }}>{p.description}</p>
            </div>
          ))}
        </Section>

        {/* Where it leads */}
        <Section title="Where it leads">
          {career.roles.map((r) => {
            const pay = payLabel(r.salaryRange)
            return (
              <div key={r.title} style={{ padding: '14px 0', borderTop: '1px solid var(--rule)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'baseline' }}>
                  <span className="pf-display" style={{ fontSize: '1.15rem' }}>{r.title}</span>
                  {r.salaryRange && <span className="pf-figure pf-accent">{r.salaryRange}</span>}
                </div>
                <p className="pf-muted" style={{ fontSize: '0.96rem', marginTop: 2 }}>
                  {r.description}
                  {pay ? ` — ${pay}` : ''}
                </p>
              </div>
            )
          })}
        </Section>

        {/* Related */}
        {career.relatedCareers && career.relatedCareers.length > 0 && (
          <Section title="See also">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 28px' }}>
              {career.relatedCareers.map((rid) => {
                const rc = getCareer(rid)
                if (!rc) return null
                return (
                  <Link key={rid} to={`/prospectus/${rid}`} className="pf-display pf-link" style={{ fontSize: '1.1rem' }}>
                    {rc.icon} {rc.title}
                  </Link>
                )
              })}
            </div>
          </Section>
        )}
      </article>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="pf-narrow" style={{ marginTop: 46 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 6 }}>
        <span className="pf-kicker" style={{ whiteSpace: 'nowrap' }}>
          {title}
        </span>
        <hr className="pf-rule-strong" style={{ flex: 1 }} />
      </div>
      {children}
    </section>
  )
}
