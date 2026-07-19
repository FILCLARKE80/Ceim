import { useEffect } from 'react'

const DEFAULT = 'Pathfinder — Irish Career Pathways'

// Sets the document title for a route and restores the default on unmount.
// Helps browser tabs now, and per-page SEO once the app moves to clean URLs.
export function useDocumentTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} — Pathfinder` : DEFAULT
    return () => {
      document.title = DEFAULT
    }
  }, [title])
}
