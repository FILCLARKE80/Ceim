// Reference point for expressing salaries relative to the national average.
// Based on CSO average annual earnings in Ireland (~€50,000, approximate, 2024).
// Update this single figure to re-base every percentage in the app.
export const IRISH_AVERAGE_SALARY = 50000

export interface SalaryBand {
  min: number
  max: number
}

// Pulls the numeric euro figures out of a human salary string such as
// "€90k–€180k", "€150k–€250k+" or "Variable — €30k–€200k+".
export function parseSalaryRange(raw: string): SalaryBand | null {
  const matches = [...raw.matchAll(/€\s*(\d+(?:\.\d+)?)\s*k/gi)].map((m) =>
    Math.round(parseFloat(m[1]) * 1000),
  )
  if (matches.length === 0) return null
  const first = matches[0]
  const last = matches[matches.length - 1]
  return { min: Math.min(first, last), max: Math.max(first, last) }
}

export function pctOfAverage(value: number): number {
  return Math.round((value / IRISH_AVERAGE_SALARY) * 100)
}
