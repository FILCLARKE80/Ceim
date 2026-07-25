import { useEffect } from 'react'

const DEFAULT_TITLE = 'Pathfinder — Irish Career Pathways'
const DEFAULT_DESC =
  'Explore 48 careers for Irish students — from first year and the Leaving Cert to CAO courses, points, postgrad and jobs. Free, independent career guidance.'

function setMeta(name: string, content: string) {
  let el = document.querySelector(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

// Sets the document title and meta description for a route, restoring the
// defaults on unmount. Drives per-page SEO now that the app uses clean URLs.
export function useDocumentTitle(title?: string, description?: string) {
  useEffect(() => {
    document.title = title ? `${title} — Pathfinder` : DEFAULT_TITLE
    setMeta('description', description ?? DEFAULT_DESC)
    return () => {
      document.title = DEFAULT_TITLE
      setMeta('description', DEFAULT_DESC)
    }
  }, [title, description])
}
