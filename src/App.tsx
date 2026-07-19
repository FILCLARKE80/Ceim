import { Link, Outlet, useLocation } from 'react-router-dom'
import { useTheme } from './theme'

function ThemeToggle() {
  const { theme, toggle } = useTheme()
  return (
    <button
      onClick={toggle}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 text-base text-ink transition hover:bg-slate-100 dark:border-white/15 dark:text-mist dark:hover:bg-white/10"
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  )
}

export default function App() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div className="flex min-h-full flex-col">
      <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-black/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl">🧭</span>
            <div className="leading-tight">
              <div className="font-display text-lg font-extrabold tracking-tight text-brand-700 dark:text-brand-300">
                Pathfinder
              </div>
              <div className="text-[11px] font-medium uppercase tracking-wide text-slate-400 dark:text-graphite">
                Your path from school to career
              </div>
            </div>
          </Link>
          <div className="flex items-center gap-2">
            {!isHome && (
              <Link
                to="/"
                className="rounded-lg px-3 py-1.5 text-sm font-semibold text-brand-700 hover:bg-brand-50 dark:text-brand-300 dark:hover:bg-white/10"
              >
                ← All careers
              </Link>
            )}
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6">
        <Outlet />
      </main>

      <footer className="mt-8 border-t border-slate-200 bg-white dark:border-white/10 dark:bg-[#0c0c0d]">
        <div className="mx-auto max-w-6xl px-4 py-8">
          <nav className="mb-4 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-ink dark:text-mist">
            <Link to="/about" className="hover:text-brand-600 dark:hover:text-brand-300">About</Link>
            <Link to="/data" className="hover:text-brand-600 dark:hover:text-brand-300">Data &amp; Sources</Link>
            <Link to="/legal" className="hover:text-brand-600 dark:hover:text-brand-300">Terms, Licensing &amp; Privacy</Link>
          </nav>
          <div className="space-y-2 text-xs text-graphite">
            <p>
              CAO points are <strong>2025 Round 1 figures</strong>, checked against the official CAO
              tables. Points change yearly — confirm the latest on{' '}
              <a className="font-semibold text-brand-600 hover:underline dark:text-brand-300" href="https://www.cao.ie" target="_blank" rel="noreferrer">
                cao.ie
              </a>
              . Salaries are indicative (shown vs the ≈ €50k CSO average wage). See{' '}
              <Link className="font-semibold text-brand-600 hover:underline dark:text-brand-300" to="/data">
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
