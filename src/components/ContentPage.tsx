import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

export default function ContentPage({
  title,
  subtitle,
  children,
}: {
  title: string
  subtitle?: string
  children: ReactNode
}) {
  return (
    <div className="mx-auto max-w-3xl">
      <Link to="/" className="text-sm font-semibold text-brand-600 hover:underline">
        ← Back to careers
      </Link>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink dark:text-mist sm:text-4xl">{title}</h1>
      {subtitle && <p className="mt-2 text-lg text-graphite">{subtitle}</p>}
      <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-slate-700 dark:text-slate-300">
        {children}
      </div>
    </div>
  )
}

export function H2({ children }: { children: ReactNode }) {
  return <h2 className="pt-4 text-xl font-semibold text-ink dark:text-mist">{children}</h2>
}
