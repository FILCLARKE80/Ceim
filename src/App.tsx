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
              <div className="text-lg font-extrabold tracking-tight text-brand-700">Pathfinder</div>
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

      <footer className="mt-8 border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <nav className="mb-4 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-ink">
            <Link to="/" className="hover:text-brand-600">Careers</Link>
            <Link to="/about" className="hover:text-brand-600">About</Link>
            <Link to="/data" className="hover:text-brand-600">Data &amp; Sources</Link>
            <Link to="/legal" className="hover:text-brand-600">Terms, Licensing &amp; Privacy</Link>
            <a
              href="https://github.com/FILCLARKE80/Dataapp"
              target="_blank"
              rel="noreferrer"
              className="hover:text-brand-600"
            >
              GitHub
            </a>
          </nav>
          <div className="space-y-2 text-xs text-graphite">
            <p>
              CAO points are <strong>2025 Round 1 figures</strong>, checked against the official CAO
              tables. Points change yearly — confirm the latest on{' '}
              <a className="font-semibold text-brand-600 hover:underline" href="https://www.cao.ie" target="_blank" rel="noreferrer">
                cao.ie
              </a>
              . Salaries are indicative (shown vs the ≈ €50k CSO average wage). See{' '}
              <Link className="font-semibold text-brand-600 hover:underline" to="/data">
                Data &amp; Sources
              </Link>{' '}
              for full attributions.
            </p>
            <p>
              Pathfinder is an independent educational project — not affiliated with the CAO, CSO or any
              college. © {new Date().getFullYear()} Pathfinder · MIT-licensed code.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
