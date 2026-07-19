import ContentPage, { H2 } from '../components/ContentPage'
import { useDocumentTitle } from '../useDocumentTitle'

function Source({
  name,
  href,
  children,
}: {
  name: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-[#1c1c1e]">
      <h3 className="font-semibold text-ink dark:text-mist">
        {href ? (
          <a className="text-brand-600 hover:underline dark:text-brand-300" href={href} target="_blank" rel="noreferrer">
            {name}
          </a>
        ) : (
          name
        )}
      </h3>
      <p className="mt-1 text-sm text-slate-600 dark:text-graphite">{children}</p>
    </div>
  )
}

export default function DataPage() {
  useDocumentTitle('Data & Sources')
  return (
    <ContentPage
      title="Data &amp; Sources"
      subtitle="Where our information comes from, and how to verify it."
    >
      <p>
        Pathfinder brings together publicly available information to help students plan. The figures
        are <strong>indicative and provided for educational purposes</strong> — always confirm the
        latest details with the official sources below before making decisions.
      </p>

      <H2>CAO points &amp; courses</H2>
      <div className="space-y-3">
        <Source name="Central Applications Office (cao.ie)" href="https://www.cao.ie">
          Course points shown are <strong>2025 Round 1</strong> figures, checked against the official
          CAO points tables. Course codes, titles and points are the property of the CAO and the
          respective institutions. Pathfinder is not affiliated with or endorsed by the CAO. Points
          change every year and vary between offer rounds — always verify current points on cao.ie.
        </Source>
        <Source name="Higher-education institutions">
          Course names, codes, durations and entry requirements belong to the respective universities
          and colleges (Trinity College Dublin, UCD, UCC, University of Galway, DCU, UL, Maynooth, TU
          Dublin, RCSI, ATU and others). Check each institution’s website for authoritative details.
        </Source>
      </div>

      <H2>Salary information</H2>
      <div className="space-y-3">
        <Source name="Central Statistics Office (cso.ie)" href="https://www.cso.ie">
          Salaries are expressed as a percentage of the Irish average wage, using an approximate
          benchmark of <strong>€50,000</strong> based on CSO average annual earnings. Salary ranges are
          indicative estimates compiled from public job-market sources — they are a rough guide, not a
          guarantee of pay.
        </Source>
      </div>

      <H2>Subjects &amp; curriculum</H2>
      <div className="space-y-3">
        <Source name="NCCA / Curriculum Online (curriculumonline.ie)" href="https://www.curriculumonline.ie">
          Leaving Certificate subject descriptions are plain-language summaries based on the national
          curriculum set by the NCCA. For syllabus detail, see curriculumonline.ie and the State
          Examinations Commission (examinations.ie).
        </Source>
      </div>

      <H2>Software &amp; assets</H2>
      <div className="space-y-3">
        <Source name="Open-source libraries">
          Pathfinder is built with React, Vite, Tailwind CSS and React Flow (@xyflow/react) — all
          open-source under the MIT licence. Diagrams are powered by React Flow. Type is set in the
          system font (Apple SF / equivalent). Icons are standard Unicode emoji.
        </Source>
      </div>

      <p className="text-sm text-graphite">
        Trademarks and organisation names are used for identification only and remain the property of
        their respective owners.
      </p>
    </ContentPage>
  )
}
