import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Use',
  description:
    'Terms governing the use of the SNS Software Solutions GmbH website.',
  alternates: {
    canonical: '/legal/terms',
    languages: {
      en: '/legal/terms',
      de: '/de/legal/terms',
      'x-default': '/legal/terms',
    },
  },
}

const UPDATED = 'September 15, 2026'

export default function TermsPage() {
  return (
    <article>
      <header className="mb-10 border-b border-sns-text/[0.08] pb-8">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-sns-indigo">
          Legal
        </p>
        <h1 className="text-3xl font-bold tracking-[-0.02em] text-sns-text md:text-4xl">
          Terms of Use
        </h1>
        <p className="mt-3 font-mono text-sm text-sns-muted">
          The terms governing your use of this website.
        </p>
        <p className="mt-1 font-mono text-xs text-sns-faint">
          Last updated: {UPDATED}
        </p>
      </header>

      <div className="legal-prose">
        <h2>1. Scope</h2>
        <p>
          These Terms of Use govern your access to and use of the websites
          operated by <strong>SNS Software Solutions GmbH</strong> (“SNS”,
          “we”, “us”), namely sns-austria.com and immvela.com. By accessing or
          using either website, you agree to these terms. If you do not agree,
          please do not use them.
        </p>
        <p>
          These terms cover the use of the websites themselves. Any provision of
          software development or other services by SNS is governed by a
          separate written agreement concluded with the respective client. Use of
          Immvela, or of any other application SNS provides, by an authorized
          client is governed by the separate service agreement and Data
          Processing Agreement (AVV) between SNS and that client, not by these
          Terms of Use. Section 4 below sets out the terms that apply in addition
          to that agreement.
        </p>

        <h2>2. Use of the website</h2>
        <p>
          This website is provided for general information about SNS and its
          services. You agree to use it only for lawful purposes and not to:
        </p>
        <ul>
          <li>
            interfere with or disrupt the website, its servers, or connected
            networks;
          </li>
          <li>
            attempt to gain unauthorised access to any part of the website or
            related systems;
          </li>
          <li>
            use automated means to scrape, harvest, or overload the website in a
            way that impairs its operation;
          </li>
          <li>misuse the website to transmit malware or unlawful content.</li>
        </ul>

        <h2>3. Intellectual property</h2>
        <p>
          All content on this website — including text, graphics, logos, the SNS
          name and mark, design, and code — is the property of SNS Software
          Solutions GmbH or its licensors and is protected by copyright and
          other intellectual property laws. You may not reproduce, distribute,
          modify, or create derivative works from any part of this website
          without our prior written consent.
        </p>

        <h2>4. Immvela and other client applications</h2>
        <p>
          Access to <strong>Immvela</strong> and to any other application SNS
          provides to a client is governed by a separate written agreement.
          Nothing on this website or in these Terms grants a right of access, and
          where the separate agreement conflicts with these Terms, that agreement
          prevails.
        </p>

        <h3>4.1 Early access</h3>
        <p>
          Immvela is offered module by module and parts of it are in early
          access. Early-access functionality is provided as-is, may change or be
          withdrawn, and carries no availability commitment. Descriptions of
          modules that are in development are statements of current intent, not
          a promise of a delivery date, a feature set, or a price.
        </p>

        <h3>4.2 Client content and connected accounts</h3>
        <p>
          The client is solely responsible for the content it publishes through
          the application, for holding the rights and permissions needed to
          publish it, and for operating its own connected accounts. SNS acts on
          the client’s instructions and is not responsible for content decisions
          made by the client’s authorized users. Use of connected platforms is
          additionally governed by each platform’s own developer terms and
          policies (Meta, LinkedIn, Google/YouTube, TikTok), and the client is
          responsible for complying with those terms.
        </p>
        <p>
          Immvela publishes to YouTube using the YouTube API Services.{' '}
          <strong>
            By using those features, you agree to be bound by the{' '}
            <a
              href="https://www.youtube.com/t/terms"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube Terms of Service
            </a>
            .
          </strong>{' '}
          The{' '}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Privacy Policy
          </a>{' '}
          applies to data Google receives, and access granted to Immvela can be
          withdrawn at any time through the{' '}
          <a
            href="https://security.google.com/settings/security/permissions"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google security settings page
          </a>
          .
        </p>

        <h3>4.3 AI-generated output is a draft, not advice</h3>
        <p>
          Text, images and documents the platform generates are drafts for the
          client to review. The client is responsible for checking output before
          publishing it or relying on it. Where the platform states a factual
          value it takes that value only from data the client has confirmed; it
          does not independently verify that the confirmed value is correct.
        </p>
        <p>
          Nothing produced by the platform constitutes legal, tax, financial or
          valuation advice, and it does not replace a professional appraisal, a
          survey, or advice from a qualified adviser.
        </p>

        <h3>4.4 Virtually staged images</h3>
        <p>
          Where the platform generates a virtually staged image it applies a
          disclosure label to the image. The client must not remove, crop out or
          obscure that label. Virtual staging adds furnishing and styling only
          and must not be used to conceal or misrepresent the condition of a
          property, including defects such as damage or damp. The client remains
          responsible for the accuracy of the impression its listings give.
        </p>

        <h3>4.5 No automated commitments</h3>
        <p>
          The platform does not agree prices, appointments or contractual terms
          with third parties on a client’s behalf. Where a module handles an
          enquiry it gathers and prepares information; anything binding is
          confirmed by a person.
        </p>

        <h3>4.6 The client’s own statutory duties</h3>
        <p>
          Using the platform does not transfer the client’s regulatory
          obligations to SNS. In particular, disclosure duties for property
          advertisements — for example energy-certificate information under the
          Austrian EAVG or the German GEG — remain the client’s responsibility,
          as do the client’s duties as a data controller under the GDPR.
        </p>

        <h2>5. No warranty</h2>
        <p>
          This website is provided “as is” and “as available”. While we take
          care to keep the information accurate and up to date, we make no
          warranties or representations, express or implied, as to its
          accuracy, completeness, reliability, or availability. We may modify,
          suspend, or discontinue the website (in whole or in part) at any time
          without notice.
        </p>

        <h2>6. Limitation of liability</h2>
        <p>
          To the extent permitted by applicable law, SNS shall not be liable for
          any indirect, incidental, or consequential damages arising from your
          use of, or inability to use, this website. Liability for slight
          negligence is excluded. This does not limit any liability that cannot
          be excluded or limited under mandatory Austrian law, including
          liability for personal injury or for intent and gross negligence.
        </p>

        <h2>7. External links</h2>
        <p>
          This website may contain links to third-party websites. We have no
          control over, and accept no responsibility for, the content,
          policies, or practices of any third-party sites. Accessing linked
          sites is at your own risk.
        </p>

        <h2>8. Changes to these terms</h2>
        <p>
          We may revise these Terms of Use from time to time. The version
          published on this page at the time of your visit applies. Continued
          use of the website after changes constitutes acceptance of the revised
          terms.
        </p>

        <h2>9. Governing law & jurisdiction</h2>
        <p>
          These Terms of Use are governed by the laws of the Republic of
          Austria, excluding its conflict-of-law rules and the UN Convention on
          Contracts for the International Sale of Goods (CISG). To the extent
          permitted by law, the competent courts of Vienna, Austria, shall have
          exclusive jurisdiction. Mandatory consumer protection provisions of
          the country in which a consumer is resident remain unaffected.
        </p>

        <h2>10. Contact</h2>
        <p>
          SNS Software Solutions GmbH — Vienna, Austria
          <br />
          Email:{' '}
          <a href="mailto:office@sns-austria.com">
            office@sns-austria.com
          </a>
        </p>
        <p>
          For full company details, see our{' '}
          <a href="/legal/imprint">Imprint</a>.
        </p>
      </div>
    </article>
  )
}
