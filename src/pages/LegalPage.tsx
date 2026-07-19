import ContentPage, { H2 } from '../components/ContentPage'
import { Link } from 'react-router-dom'

export default function LegalPage() {
  return (
    <ContentPage title="Terms, Licensing &amp; Privacy" subtitle="The important small print — kept short.">
      <H2>Disclaimer</H2>
      <p>
        Pathfinder is provided for <strong>general information and educational purposes only</strong>.
        It is not professional career, financial, or educational guidance. CAO points, salaries,
        course details and requirements are indicative, can change at any time, and may contain errors.
        Nothing here should be relied upon for decisions without confirming it against the official
        sources on our{' '}
        <Link className="font-semibold text-brand-600 hover:underline" to="/data">
          Data &amp; Sources
        </Link>{' '}
        page. Pathfinder and its contributors accept no liability for decisions made based on this
        information. The service is provided “as is”, without warranty of any kind.
      </p>

      <H2>Trademarks &amp; affiliation</H2>
      <p>
        Pathfinder is an independent project and is <strong>not affiliated with or endorsed by</strong>{' '}
        the CAO, the CSO, the Department of Education, or any university or college. Organisation names,
        course titles and codes are trademarks or property of their respective owners and are used for
        identification and educational reference only.
      </p>

      <H2>Licensing</H2>
      <p>
        <strong>Source code:</strong> released under the MIT Licence — you’re free to use, modify and
        share it with attribution. See the{' '}
        <a
          className="font-semibold text-brand-600 hover:underline"
          href="https://github.com/FILCLARKE80/Dataapp/blob/main/LICENSE"
          target="_blank"
          rel="noreferrer"
        >
          LICENSE
        </a>{' '}
        file in the repository.
      </p>
      <p>
        <strong>Content &amp; data:</strong> the written descriptions and the compiled dataset are made
        available for personal and educational use. The underlying facts (such as CAO points and course
        details) are owned by their original sources and remain subject to those sources’ terms.
      </p>

      <H2>Privacy</H2>
      <p>
        Pathfinder is a <strong>static website that collects no personal data</strong>. There are no
        accounts, no cookies, no analytics and no third-party trackers. We don’t know who you are and we
        don’t want to. Our hosting provider may process standard, anonymised server logs (such as IP
        address and request time) purely to serve the site securely — this is standard for any website
        and is not used by us to identify you.
      </p>

      <p className="text-sm text-graphite">
        Questions? Reach us via the{' '}
        <a
          className="font-semibold text-brand-600 hover:underline"
          href="https://github.com/FILCLARKE80/Dataapp"
          target="_blank"
          rel="noreferrer"
        >
          project’s GitHub repository
        </a>
        .
      </p>
    </ContentPage>
  )
}
