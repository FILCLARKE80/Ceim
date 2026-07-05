import { Link, Outlet, useLocation } from 'react-router-dom'

export default function App() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div className="flex min-h-full flex-col">
      <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl">🧭</span>
            <div className="leading-tight">
              <div className="text-lg font-extrabold tracking-tight text-brand-700">Céim</div>
              <div className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
                Your path from school to career
              </div>
            </div>
          </Link>
          {!isHome && (
            <Link
              to="/"
              className="rounded-lg px-3 py-1.5 text-sm font-semibold text-brand-700 hover:bg-brand-50"
            >
              ← All careers
            </Link>
          )}
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6">
        <Outlet />
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-6 text-xs text-slate-500">
          <p>
            CAO points shown are <strong>2025 Round 1 figures</strong>, verified against the official CAO
            tables. Points change
            every year — always confirm the latest entry requirements on{' '}
            <a className="font-semibold text-brand-700 underline" href="https://www.cao.ie" target="_blank" rel="noreferrer">
              cao.ie
            </a>{' '}
            and each college’s website before making decisions.
          </p>
          <p className="mt-2">
            Salaries are indicative and shown as a percentage of the Irish average wage (≈ €50,000/yr,
            based on CSO average annual earnings). Figures are a rough guide, not a guarantee.
          </p>
          <p className="mt-2">Built to help Irish secondary-school students explore their options.</p>
        </div>
      </footer>
    </div>
  )
}
