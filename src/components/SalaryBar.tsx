import { IRISH_AVERAGE_SALARY, parseSalaryRange, pctOfAverage } from '../data/salary'

// Visual scale caps at 400% of the average so the bars stay readable.
const SCALE_MAX = 400

function euro(n: number) {
  return `€${Math.round(n / 1000)}k`
}

export default function SalaryBar({ salaryRange }: { salaryRange: string }) {
  const band = parseSalaryRange(salaryRange)
  if (!band) {
    return <span className="text-sm text-slate-500">{salaryRange}</span>
  }

  const minPct = pctOfAverage(band.min)
  const maxPct = pctOfAverage(band.max)

  // Map a percentage-of-average value onto its position (0–100%) along the
  // fixed 0 → SCALE_MAX scale, so the bands and the average marker share one
  // coordinate system.
  const toX = (pct: number) => (Math.min(pct, SCALE_MAX) / SCALE_MAX) * 100
  const left = toX(minPct)
  const right = toX(maxPct)
  const width = Math.max(right - left, 1.5)
  const avgMarker = toX(100)

  const aboveAverage = minPct >= 100

  return (
    <div className="mt-3">
      <div className="flex items-baseline justify-between gap-2">
        <span
          className={`badge ${
            aboveAverage ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
          }`}
        >
          {minPct}%–{maxPct}% of average wage
        </span>
        <span className="text-xs text-slate-400">
          {euro(band.min)}–{euro(band.max)}
        </span>
      </div>

      {/* scale: 0 — 400% of the national average */}
      <div className="relative mt-2 h-2.5 w-full rounded-full bg-slate-100">
        {/* average marker at 100% */}
        <div
          className="absolute top-1/2 z-10 h-3.5 w-0.5 -translate-y-1/2 bg-slate-500"
          style={{ left: `${avgMarker}%` }}
          title="Irish average wage (100%)"
        />
        {/* salary range band */}
        <div
          className={`absolute top-0 h-2.5 rounded-full ${
            aboveAverage ? 'bg-emerald-400' : 'bg-amber-400'
          }`}
          style={{ left: `${left}%`, width: `${width}%` }}
        />
      </div>
      <div className="relative mt-1 h-3.5 text-[10px] text-slate-400">
        <span className="absolute left-0">0%</span>
        <span
          className="absolute -translate-x-1/2 font-medium text-slate-500"
          style={{ left: `${avgMarker}%` }}
        >
          avg (€{Math.round(IRISH_AVERAGE_SALARY / 1000)}k)
        </span>
        <span className="absolute right-0">{SCALE_MAX}%+</span>
      </div>
    </div>
  )
}
