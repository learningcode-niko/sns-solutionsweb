import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How SNS Software Solutions GmbH processes personal data on its websites and in the Immvela platform, in accordance with the EU General Data Protection Regulation (GDPR).',
  alternates: {
    canonical: '/legal/privacy',
    languages: {
      en: '/legal/privacy',
      de: '/de/legal/privacy',
      'x-default': '/legal/privacy',
    },
  },
}

const UPDATED = 'September 15, 2026'

export default function PrivacyPage() {
  return (
    <article>
      <header className="mb-10 border-b border-sns-text/[0.08] pb-8">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-sns-indigo">
          Legal
        </p>
        <h1 className="text-3xl font-bold tracking-[-0.02em] text-sns-text md:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-3 font-mono text-sm text-sns-muted">
          How we handle your personal data under the EU General Data Protection
          Regulation (GDPR / DSGVO).
        </p>
        <p className="mt-1 font-mono text-xs text-sns-faint">
          Last updated: {UPDATED}
        </p>
      </header>

      <div className="legal-prose">
        <h2>1. Controller</h2>
        <p>
          The controller responsible for data processing on this website is:
        </p>
        <p>
          <strong>SNS Software Solutions GmbH</strong>
          <br />
          Schrötlgasse 8a, 1220 Vienna, Austria
          <br />
          Email:{' '}
          <a href="mailto:office@sns-austria.com">
            office@sns-austria.com
          </a>
        </p>

        <h2>2. Overview</h2>
        <p>
          We take the protection of your personal data seriously and process it
          only in accordance with statutory data protection regulations (GDPR,
          Austrian Data Protection Act / DSG) and this privacy policy.
        </p>
        <p>
          This policy covers two different things, and the distinction matters
          for your rights. <strong>Our websites</strong> (sns-austria.com and
          immvela.com) are informational, and we collect as little personal data
          as possible there — Sections 3 and 5 to 12 apply.{' '}
          <strong>Immvela</strong>, the platform our clients sign in to, is
          different: there we mostly process data on a client’s behalf rather
          than our own, which changes who you should address a request to.
          Section 4 covers it.
        </p>

        <h2>3. Hosting</h2>
        <p>
          This website is hosted by <strong>Vercel Inc.</strong>, 340 S Lemon
          Ave #4133, Walnut, CA 91789, USA. When you visit the site, Vercel
          automatically processes technical connection data (see “Server log
          files” below) to deliver the website securely and reliably. This is
          based on our legitimate interest in a stable and secure online
          presence (Art. 6(1)(f) GDPR). We have concluded a data processing
          agreement (DPA) with Vercel, and transfers to the USA are safeguarded
          by the EU Standard Contractual Clauses.
        </p>

        <h2>4. Immvela (our real-estate platform)</h2>
        <p>
          In addition to this website, SNS operates <strong>Immvela</strong> (
          <a href="https://www.immvela.com" target="_blank" rel="noopener noreferrer">
            immvela.com
          </a>
          , application at app.immvela.com), a modular platform for real-estate
          agents and brokerages in Austria, Germany and Switzerland. Immvela is
          a product of SNS Software Solutions GmbH and not a separate legal
          entity; this privacy policy covers both domains. Modules are enabled
          individually, so which of the processing described below actually
          applies depends on the modules a given brokerage uses.
        </p>

        <h3>4.1 Who is controller, and who is processor</h3>
        <p>
          For the data a brokerage puts into Immvela about its own properties,
          clients and prospects, the <strong>brokerage is the controller</strong>{' '}
          and <strong>SNS acts as processor</strong> on its instructions
          (Art. 28 GDPR), under a separate written agreement including a Data
          Processing Agreement (AVV). For the brokerage’s own account and
          contract data, SNS is the controller.
        </p>
        <p>
          Each brokerage is a separate tenant and its own controller. Where a
          brokerage belongs to a franchise, franchise offices do{' '}
          <strong>not</strong> have access to each other’s operational data;
          a franchise can share reference material downward only by deliberate
          publication, never operational records about properties or people.
        </p>

        <h3>4.2 Data we process on behalf of clients</h3>
        <ul>
          <li>
            Account data for the brokerage’s users: name, email address, role
            within the organisation, and interface-language preference.
          </li>
          <li>
            Property and listing records, including descriptive and technical
            attributes such as floor area, year of construction and energy
            certificate values.
          </li>
          <li>
            Contacts, leads and deals — that is, personal data about prospective
            buyers, sellers or tenants that the brokerage enters or receives.
          </li>
          <li>
            Documents the brokerage uploads (for example energy performance
            certificates) and the values read out of them. Extracted values are
            always shown to the brokerage for confirmation before the platform
            relies on them.
          </li>
          <li>
            Media the brokerage uploads or has generated: photographs, staged
            images and walkthrough footage.
          </li>
          <li>
            Text the platform drafts on the brokerage’s instruction (listing
            copy, captions, Exposé documents) and the brokerage’s edits to it.
          </li>
          <li>
            Access tokens issued by connected publishing platforms, used solely
            to publish on the brokerage’s behalf and to retrieve the resulting
            engagement data.
          </li>
          <li>
            Engagement data returned by those platforms (for example views,
            reactions and post statistics).
          </li>
          <li>
            Records of platform activity showing which module produced or used
            which record, used to operate the service and to make the
            brokerage’s own data reusable across modules.
          </li>
        </ul>

        <h3>4.3 Purpose and legal basis</h3>
        <p>
          This data is processed solely to provide the functions the brokerage
          has enabled. The legal basis is performance of the agreement with the
          brokerage (Art. 6(1)(b) GDPR) and our legitimate interest in providing
          the contracted service (Art. 6(1)(f) GDPR). Where a brokerage
          processes data about third parties such as prospective buyers, the
          brokerage is responsible for the legal basis for that processing.
        </p>

        <h3>4.4 AI processing, and what it does not decide</h3>
        <p>
          Several Immvela modules generate text or images using AI. For text
          generation, the relevant listing and property data is transmitted to{' '}
          <strong>Anthropic PBC</strong> (Claude models) acting as a
          sub-processor, solely to produce the output the brokerage asked for.
          Under Anthropic’s commercial API terms, data submitted through the API
          is not used to train their models. We do not sell client data, use it
          for advertising, or use it to train AI models of our own.
        </p>
        <p>
          Two limits are built into the platform rather than left to policy.
          Factual values in generated text are taken only from data the
          brokerage has confirmed, so the platform does not invent property
          specifications. And AI-staged images carry a “virtually staged” label
          rendered into the image itself, so a staged photograph stays
          identifiable as staged wherever it is published.
        </p>
        <p>
          <strong>No automated decision-making.</strong> Immvela does not make
          decisions about individuals that have legal or similarly significant
          effects within the meaning of Art. 22 GDPR. Where a module qualifies
          or routes an enquiry, it gathers and prepares information for a person
          to act on; it does not agree prices, appointments or contractual terms,
          and anything binding is confirmed by a human.
        </p>

        <h3>4.5 Storage and sub-processors</h3>
        <p>Immvela’s data is stored in the European Union:</p>
        <ul>
          <li>
            Database, authentication and file storage:{' '}
            <strong>Supabase</strong>, hosted in the EU (eu-central-1,
            Frankfurt, Germany)
          </li>
          <li>
            Application hosting: <strong>Vercel</strong> (see Section 3 for
            Vercel’s data handling)
          </li>
          <li>
            Background job processing: <strong>Trigger.dev</strong>
          </li>
          <li>
            AI text generation: <strong>Anthropic PBC</strong> (see Section 4.4)
          </li>
        </ul>
        <p>
          Where a sub-processor involves a transfer outside the EU/EEA, that
          transfer is covered by a data processing agreement and safeguarded by
          the EU Standard Contractual Clauses.
        </p>

        <h3>4.6 Connected publishing platforms</h3>
        <p>
          Each connected platform (Meta/Facebook/Instagram, LinkedIn,
          Google/YouTube, TikTok) processes data under its own privacy policy and
          developer terms. Our use of data obtained through these platforms
          complies with each platform’s respective developer policies and terms
          of service.
        </p>

        <h3>4.7 Retention, media deletion and erasure requests</h3>
        <p>
          Client and account data is retained for the duration of the agreement
          and deleted within 30 days of account disconnection or termination,
          except where retention is required by law.
        </p>
        <p>
          Media a brokerage uploads or has generated is retained until the
          brokerage deletes it or its account is deleted.{' '}
          <strong>
            There is currently no automatic deletion of media files.
          </strong>{' '}
          Deleting our copy does not remove anything already published to a
          third-party platform, which remains subject to that platform’s own
          retention.
        </p>
        <p>
          If you are a buyer, seller or tenant whose data a brokerage holds in
          Immvela, that brokerage is your controller and is the right first point
          of contact for an erasure request. When a brokerage passes such a
          request to us, we erase that person’s records across the platform,
          including derived records, values extracted from documents, generated
          documents and stored files. We carry this out by hand, within 30 days;
          there is currently no automated erasure flow in the application. We may retain a record that a business
          event occurred where it no longer identifies the person and statutory
          retention applies. Brokerages may request deletion or disconnection at
          any time by contacting{' '}
          <a href="mailto:office@sns-austria.com">office@sns-austria.com</a>.
          Step-by-step instructions for deleting the data obtained through a
          connected publishing platform are at{' '}
          <a
            href="https://www.immvela.com/legal/data-deletion"
            target="_blank"
            rel="noopener noreferrer"
          >
            immvela.com/legal/data-deletion
          </a>
          .
        </p>

        <h3>4.8 Data security</h3>
        <p>
          We maintain technical and organisational security procedures to
          protect the confidentiality and integrity of the data processed in
          Immvela. These apply equally to all data we receive from connected
          publishing platforms, including Google and YouTube.
        </p>
        <ul>
          <li>
            <strong>In transit.</strong> All traffic, between the user’s browser
            and Immvela and between Immvela and the platforms’ APIs, is
            encrypted with TLS (HTTPS).
          </li>
          <li>
            <strong>Connected-account access tokens.</strong> Access and refresh
            tokens for connected accounts, including those issued by Google and
            YouTube, are the most sensitive data we hold. They are encrypted
            with AES-256-GCM before they are stored. The key exists only in the
            runtime environment and never in the database, so a database dump on
            its own does not yield access to a connected account. If the key is
            absent, the system refuses to store tokens in production rather than
            falling back to plaintext.
          </li>
          <li>
            <strong>At rest.</strong> The database and file storage are operated
            by Supabase in the European Union (eu-central-1, Frankfurt, Germany)
            and are encrypted at rest there.
          </li>
          <li>
            <strong>Tenant separation.</strong> Every record belongs to exactly
            one organisation, and that separation is checked in two places: by
            the application on every access, and again by the database itself at
            row level (row-level security). For files in media storage it is
            enforced by the application.
          </li>
          <li>
            <strong>Media files.</strong> Photos and videos are held in
            non-public storage and are reachable only through short-lived signed
            links; no such file has a publicly retrievable address.
          </li>
          <li>
            <strong>Disclosure.</strong> We do not sell data, do not use it for
            advertising, and do not disclose it beyond the processors named in
            section 4.5 and the connected publishing platforms in section 4.6.
            Data received from Google and YouTube is not sent to our AI provider
            and is not used to train AI models.
          </li>
        </ul>
        <p>
          Immvela’s use of information received from Google APIs adheres to the
          Google API Services User Data Policy, including the Limited Use
          requirements.
        </p>

        <h3>4.9 Use of YouTube API Services</h3>
        <p>
          Immvela uses the <strong>YouTube API Services</strong> to publish to
          YouTube. By using those features you agree to be bound by the{' '}
          <a
            href="https://www.youtube.com/t/terms"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube Terms of Service
          </a>
          . The{' '}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Privacy Policy
          </a>{' '}
          applies in addition to this policy.
        </p>
        <p>
          <strong>The permissions we request.</strong> When a YouTube account is
          connected we ask Google for exactly two permissions, no more than the
          features require:
        </p>
        <ul>
          <li>
            <strong>youtube.upload</strong>, to upload videos selected in
            Immvela to your channel;
          </li>
          <li>
            <strong>youtube.readonly</strong>, to show your channel’s name and
            identifier, and to retrieve the total view, like and comment counts
            for videos published through Immvela.
          </li>
        </ul>
        <p>
          <strong>What YouTube data we store.</strong> The access token and
          refresh token (encrypted), your channel’s identifier and name, the
          identifiers of videos uploaded through Immvela, the totals named above
          together with the time they were retrieved, and the token’s expiry
          time and the list of permissions granted. Nothing further: no comment
          text, no commenter names, no audience breakdowns, no watch history, no
          subscriber lists.
        </p>
        <p>
          <strong>What we never do with it.</strong> YouTube data is not used
          for advertising, is not sold or disclosed to third parties, is not
          sent to our AI provider, and is not used to train AI models.
        </p>
        <p>
          <strong>Revoking access.</strong> You can withdraw Immvela’s access to
          your Google account at any time, independently of Immvela, through the{' '}
          <a
            href="https://security.google.com/settings/security/permissions"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google security settings page
          </a>
          . Separately, disconnecting a connected account in Immvela deletes the
          tokens held there.
        </p>

        <h2>5. Server log files</h2>
        <p>
          Our hosting provider automatically collects and stores information in
          server log files that your browser transmits to us. These may
          include:
        </p>
        <ul>
          <li>Anonymised / abbreviated IP address</li>
          <li>Date and time of the request</li>
          <li>Browser type and version</li>
          <li>Operating system</li>
          <li>Referrer URL</li>
        </ul>
        <p>
          This data is not merged with other data sources and is used solely to
          ensure operation, security, and troubleshooting. The legal basis is
          Art. 6(1)(f) GDPR.
        </p>

        <h2>6. Analytics</h2>
        <p>
          We use <strong>Vercel Analytics</strong>, a privacy-friendly,
          cookieless analytics service provided by Vercel Inc. It measures
          aggregated, anonymous usage statistics (such as page views) without
          using cookies and without tracking or identifying individual
          visitors. No cross-site profiles are created. The legal basis is our
          legitimate interest in understanding and improving the use of our
          website (Art. 6(1)(f) GDPR).
        </p>

        <h2>7. Cookies</h2>
        <p>
          This website does not set tracking or advertising cookies. Only
          technically necessary storage required to display the site may be
          used. Because we do not use non-essential cookies, no cookie consent
          banner is required.
        </p>

        <h2>8. Contact (email &amp; contact form)</h2>
        <p>
          If you contact us by email, the data you provide (your email address
          and the content of your message) is processed solely to handle your
          enquiry.
        </p>
        <p>
          Our website also provides a contact form. When you submit it, we
          process the details you enter, namely your name, email address,
          optional phone number, the type of service you select, and your
          message, in order to respond to your enquiry. The legal basis is Art.
          6(1)(b) GDPR (steps prior to entering a contract) or Art. 6(1)(f) GDPR
          (our legitimate interest in responding to enquiries).
        </p>
        <p>
          Contact form submissions are delivered to our mailbox on our behalf
          by <strong>EmailJS</strong> (
          <a
            href="https://www.emailjs.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            emailjs.com
          </a>
          ), acting as a processor. Where this involves a transfer of data
          outside the EU/EEA, it is safeguarded by appropriate measures such as
          the EU Standard Contractual Clauses.
        </p>
        <p>
          This data is deleted once it is no longer required and no statutory
          retention obligations prevent deletion.
        </p>

        <h2>9. Data retention</h2>
        <p>
          We store personal data only for as long as necessary for the purposes
          described above or as required by statutory retention periods (e.g.
          under tax and commercial law). After that, the data is deleted.
        </p>

        <h2>10. Your rights</h2>
        <p>Under the GDPR you have the right to:</p>
        <ul>
          <li>access to your personal data (Art. 15)</li>
          <li>rectification of inaccurate data (Art. 16)</li>
          <li>erasure (Art. 17)</li>
          <li>restriction of processing (Art. 18)</li>
          <li>data portability (Art. 20)</li>
          <li>
            object to processing based on legitimate interests (Art. 21)
          </li>
        </ul>
        <p>
          To exercise any of these rights, contact us at{' '}
          <a href="mailto:office@sns-austria.com">
            office@sns-austria.com
          </a>
          .
        </p>

        <h2>11. Right to lodge a complaint</h2>
        <p>
          You have the right to lodge a complaint with a supervisory authority.
          In Austria this is the Austrian Data Protection Authority
          (Datenschutzbehörde), Barichgasse 40–42, 1030 Vienna,{' '}
          <a
            href="https://www.dsb.gv.at"
            target="_blank"
            rel="noopener noreferrer"
          >
            dsb.gv.at
          </a>
          .
        </p>

        <h2>12. Changes to this policy</h2>
        <p>
          We may update this privacy policy to reflect changes to our practices
          or for legal reasons. The current version is always available on this
          page.
        </p>
      </div>
    </article>
  )
}
