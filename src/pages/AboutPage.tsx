import ContentPage, { H2 } from '../components/ContentPage'
import { Link } from 'react-router-dom'

export default function AboutPage() {
  return (
    <ContentPage
      title="About Pathfinder"
      subtitle="A free, independent guide to career pathways for Irish secondary-school students."
    >
      <p>
        Choosing subjects and thinking about a career can feel overwhelming when you’re still in
        school. <strong>Pathfinder</strong> exists to make that journey clearer. Pick any career and
        you’ll see the whole route mapped out — from first year, through the Junior Cycle and Leaving
        Certificate, into college via the CAO, on to postgraduate options and the jobs at the end.
      </p>

      <H2>Who it’s for</H2>
      <p>
        Pathfinder is built for <strong>students</strong> exploring their options, and it’s just as
        useful for <strong>parents</strong> and <strong>guidance counsellors</strong> having those
        conversations. Everything is presented visually — interactive flow charts and network graphs —
        so the connections between subjects, courses and careers are easy to follow.
      </p>

      <H2>What you’ll find for each career</H2>
      <ul className="list-disc space-y-1 pl-5">
        <li>Recommended Junior Cycle focus and Leaving Cert subjects, with how important each one is</li>
        <li>Indicative CAO courses, codes and points to aim for</li>
        <li>Whether a postgraduate qualification is required, commonly needed, or optional</li>
        <li>The roles you could end up in, with pay shown as a percentage of the average Irish wage</li>
      </ul>

      <H2>Independent and free</H2>
      <p>
        Pathfinder is an independent educational project. It is <strong>not affiliated with, or
        endorsed by</strong>, the Central Applications Office (CAO), the Central Statistics Office
        (CSO), the Department of Education, or any university or college. It’s free to use, carries no
        advertising, and collects no personal data.
      </p>

      <H2>Accuracy &amp; feedback</H2>
      <p>
        We work hard to keep the information accurate — CAO points are checked against the official
        tables — but courses and points change every year, so always confirm the latest details with
        the official sources listed on our{' '}
        <Link className="font-semibold text-brand-600 hover:underline" to="/data">
          Data &amp; Sources
        </Link>{' '}
        page. Spotted something that looks wrong? We’d love to hear about it via the project’s{' '}
        <a
          className="font-semibold text-brand-600 hover:underline"
          href="https://github.com/FILCLARKE80/Dataapp"
          target="_blank"
          rel="noreferrer"
        >
          GitHub repository
        </a>
        .
      </p>

      <p className="text-sm text-graphite">
        See also our{' '}
        <Link className="font-semibold text-brand-600 hover:underline" to="/legal">
          Terms, Licensing &amp; Privacy
        </Link>
        .
      </p>
    </ContentPage>
  )
}
