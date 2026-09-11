import type { Metadata } from 'next'
import { IMMVELA_URL } from '@/lib/site'

/**
 * Immvela's own privacy policy, served at www.immvela.com/legal/privacy.
 *
 * ── Why this exists as a separate document ──────────────────────────────────
 *
 * app.immvela.com/privacy 307s to this exact URL, and every platform review
 * form (Meta, TikTok, LinkedIn, Google/YouTube) fetches it and checks that it
 * describes the app in front of the reviewer. Until this page existed,
 * immvela.com/legal/privacy fell through middleware to the SNS policy — a
 * byte-identical copy titled "Privacy Policy | SNS Solutions" that declared
 * `canonical: https://www.sns-austria.com/legal/privacy`. It covered Immvela
 * well (its section 4 still does, for the SNS-domain audience), but it told
 * every crawler the real document lived on another company-branded domain,
 * which is the "why is a different company's policy covering this app?"
 * question a submission does not want to invite.
 *
 * The accepted cost is drift: two documents now describe overlapping
 * processing and can disagree. That was traded deliberately against the
 * reviewer question above. Anything changed here about tokens, engagement,
 * retention or deletion must be checked against section 4 of the SNS policy
 * (app/(en)/legal/privacy) and against /legal/data-deletion next door.
 *
 * ── Why BOTH languages are on one page, German first ────────────────────────
 *
 * Same reasoning as the app's /data-deletion page, and deliberately the same
 * shape. The two readers are a DACH agent and an English-speaking platform
 * reviewer; both arrive signed out at the one URL the app hard-codes, so
 * neither can be served by a locale preference. German leads because the
 * market is AT/DE/CH. Bilingual legal pages are ordinary here. This is not a
 * precedent for the rest of the site, which keeps using the locale layer —
 * /de/legal/privacy on this host renders this same page (middleware.ts) and
 * canonicalises here.
 *
 * ── What this deliberately does NOT say ─────────────────────────────────────
 *
 * Each omission is on purpose; adding one would describe a product that does
 * not exist, which is the expensive kind of wrong in this document.
 *
 *   • No claim about which legal basis applies, and no citation of any
 *     statute. That is counsel's to add.
 *   • No retention period for publication records. They are kept indefinitely
 *     (`event` rows, kept permanently by decision — a stated period is a
 *     product change first, wording second).
 *   • No monthly media wipe as a live feature. The job exists but is DRY-RUN
 *     by default and unarmed in production (IMMVELA_MEDIA_WIPE_ARMED absent is
 *     the intended state), so the text says retention is until you delete.
 *   • No automated account-deletion flow. Deletion is a hand-run script, so
 *     the text says "by hand".
 *   • No Data Deletion Callback. Meta accepts an instructions URL instead, and
 *     that is what SNS provides; a callback needs an erasure job behind it
 *     that does not exist, and one that silently does nothing is worse than
 *     none.
 *
 * ── The Google/YouTube round, 2026-09-10 ───────────────────────────────────
 *
 * Google OAuth verification bounced with: "Your privacy policy does not specify
 * any data protection mechanisms for sensitive data." Two sections answer it:
 *
 *   • "Schutz Ihrer Daten / How we protect your data" — the finding itself.
 *   • "Nutzung der YouTube API Services / Use of YouTube API Services" — NOT in
 *     the finding list, but a standing YouTube API Services Developer Policies
 *     §III.A.2 requirement the reviewer checks: the YouTube ToS link, the
 *     Google Privacy Policy link, what API data is used, and revocation via the
 *     Google security settings page. Publishing without it invites a second
 *     round.
 *
 * ⚠️ **The two scope names are load-bearing and must match three places on the
 * day the reviewer looks**: this page, the Cloud Console, and `YOUTUBE_SCOPES`.
 * The bounce included "scopes shown … different from the scopes configured", so
 * a drift here is the defect under review. Verified 2026-09-11 against the app
 * repo's `origin/main`: exactly `youtube.upload` + `youtube.readonly`. The
 * broad `auth/youtube` scope this page would have mis-stated was removed in
 * their PR #1260 — the handoff was written while it was still live and warned
 * the claim was false; it is true now, which is why it was re-checked rather
 * than trusted either way.
 *
 * ⚠️ **This policy must also be LINKED from the OAuth consent screen** in Google
 * Cloud Console. Google checks the link, not just the text, and nothing in this
 * repo can do that.
 *
 * ⚠️ **One bullet from the source draft is deliberately NOT published**: "Our
 * own access" (named staff, individual accounts, two-factor). It arrived marked
 * `‹confirm›`, nobody here can verify who holds the Supabase and Vercel
 * credentials or whether 2FA is enforced, and the draft's own instruction was
 * to make it true and publish it or cut it — never publish it unverified,
 * because Google reads a security section as a set of commitments. Cut. It goes
 * back in when a human confirms it.
 *
 * ── Every factual claim, verified against the app repo's main ───────────────
 *
 * Verified 2026-09-05. If one becomes false, this text becomes false.
 *
 *   • Tokens encrypted at rest — crypto/token-encryption.ts (AES-256-GCM).
 *   • Disconnecting hard-deletes the row and its tokens — connection.ts
 *     `deleteConnection`, a real DELETE, not a soft delete.
 *   • Insights scopes ARE requested — `read_insights` and
 *     `instagram_manage_insights` in modules/publishing/platforms/meta.ts.
 *     This is why the purpose sentence below says "and to read aggregate
 *     engagement figures" rather than the older "solely to publish": a
 *     reviewer reads the requested permission list beside this text, and
 *     "asks to read insights, says it only writes" reads as either an
 *     over-broad request or an inaccurate disclosure.
 *   • Engagement ingestion is live — worker/engagement-sweep.ts, armed in
 *     production since 2026-08-28. It emits aggregate per-post metrics only.
 *   • Listing text and the ADDRESS go to Anthropic — modules/quill/prompt.ts;
 *     the address is the listing's identity and is in the prompt.
 *   • Media in a private Supabase bucket, reached by short-lived signed URLs —
 *     modules/publishing/storage.ts.
 *   • Deleting a media asset cascades its `scheduled_post` rows
 *     (0011_publishing.sql) but NOT its `event` rows — retention.ts is
 *     explicit that `content.published` history survives a wipe "which is the
 *     point". Hence the split wording under Aufzeichnungen / Records.
 *   • Full account deletion is manual, within 30 days — no erasure job exists;
 *     docs/gdpr-erasure.md is a design document.
 *
 * For the sections added in the Google round, verified 2026-09-11 against
 * `origin/main`:
 *
 *   • exactly two YouTube scopes — `platforms/youtube.ts` `YOUTUBE_SCOPES`.
 *   • channel name and id read via `channels?part=snippet&mine=true` —
 *     `platforms/accounts.ts:318`.
 *   • view/like/comment totals and NOTHING else — `posting/insights/youtube.ts`
 *     `YOUTUBE_VIDEO_STATISTICS` is exactly those three. ⚠️ If that constant
 *     grows, this page is stale.
 *   • AES-256-GCM before storage — `crypto/token-encryption.ts`,
 *     `createCipheriv("aes-256-gcm", …)`.
 *   • key in the runtime environment, never in Postgres — same file, read from
 *     `process.env.TOKEN_ENCRYPTION_KEY`.
 *   • refuses to store rather than write plaintext — same file, throws when
 *     `NODE_ENV === "production"` and the key is unset. ⚠️ Development warns
 *     and writes plaintext, which is why the sentence is scoped to production.
 *   • row-level security enforces tenant separation — `supabase/migrations/`,
 *     RLS policies across ten migration files.
 *   • ⚠️ "encrypted at rest by Supabase" is the ONE claim here not verifiable
 *     from either repo — it is a property of their platform and plan. It is
 *     published because it is the substance of Google's finding, and flagged
 *     for a human to confirm.
 */

export const metadata: Metadata = {
  // Absolute: the root layout's "%s | SNS Solutions" template would put the
  // wrong company in the title of the one document a reviewer reads to decide
  // whose app this is.
  title: { absolute: 'Datenschutzerklärung / Privacy Policy — Immvela' },
  description:
    'Wie Immvela verbundene Social-Media-Konten, Inhalte und Reichweitendaten verarbeitet. How Immvela processes connected social accounts, content and engagement data.',
  // Absolute to the Immvela origin: this document's home is immvela.com, not
  // the SNS domain. Both public paths on this host render it, so they share
  // one canonical rather than competing as duplicates.
  alternates: {
    canonical: `${IMMVELA_URL}/legal/privacy`,
    languages: {
      de: `${IMMVELA_URL}/legal/privacy`,
      en: `${IMMVELA_URL}/legal/privacy`,
      'x-default': `${IMMVELA_URL}/legal/privacy`,
    },
  },
}

const UPDATED_DE = '11. September 2026'
const UPDATED_EN = 'September 11, 2026'

// Same host now. The app served this page until the 2026-09-05 split put
// every legal document on the landing page and left the product with
// outward links only, so this is a relative path and costs no hop.
const DATA_DELETION_URL = '/legal/data-deletion'
const CONTACT = 'office@sns-austria.com'
// The exact revocation URL YouTube API Services Developer Policies §III.A.2
// names. Google checks that the policy carries it, so it is a constant rather
// than three hand-typed copies that can drift apart.
const GOOGLE_PERMISSIONS_URL = 'https://security.google.com/settings/security/permissions'

function Section({
  lang,
  title,
  children,
}: {
  lang: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section lang={lang} className="mt-9 first:mt-0">
      <h2 className="mb-2.5 text-[1.05rem] font-semibold tracking-[-0.01em] text-[color:var(--im-ink)]">
        {title}
      </h2>
      <div className="im-legal-prose">{children}</div>
    </section>
  )
}

export default function ImmvelaPrivacyPage() {
  return (
    <div className="immvela-theme relative min-h-dvh">
      {/* Cream as a FIXED layer rather than a background on the scrolling
          wrapper — the same shape the Immvela landing uses, and for a reason
          a selector-level check cannot see.

          <body> carries `bg-sns-bg`, the SNS site's cool porcelain (#eef0f7).
          A background on this wrapper stops where the wrapper stops, so an
          overscroll bounce shows a band of porcelain against Immvela's warm
          cream — two near-whites that disagree, which reads as a rendering
          fault rather than a colour choice. Fixed + inset-0 covers the whole
          viewport including the bounce, and covers SiteShell's SNS particle
          field (also fixed, z-0) consistently at every scroll position.

          No <ImmvelaField /> here, unlike the landing: drifting particles
          behind a legal document are a distraction and a canvas this page has
          no use for. The ground is the part that has to be right. */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[#f2f1e8]" aria-hidden="true" />

      <div className="relative z-10">
        <header className="border-b border-[color:var(--im-line)] px-5 md:px-10">
          <div className="mx-auto flex h-14 max-w-3xl items-center justify-between">
            <a href="/" className="im-wordmark text-lg" aria-label="Immvela">
              Immvela<span className="dot">.</span>
            </a>
            <a
              href="/"
              className="font-mono text-xs uppercase tracking-widest text-[color:var(--im-muted)] transition-colors duration-300 hover:text-[color:var(--im-green)]"
            >
              ← Zur Website
            </a>
          </div>
        </header>

        <main className="mx-auto w-full max-w-3xl px-5 pb-24 pt-12 md:pt-16">
          <div className="mb-10 border-b border-[color:var(--im-line)] pb-8">
            <p className="im-eyebrow mb-3 font-mono text-xs uppercase tracking-[0.2em]">Immvela</p>
            <h1 className="text-3xl font-bold tracking-[-0.02em] text-[color:var(--im-ink)] md:text-4xl">
              Datenschutzerklärung <span className="text-[color:var(--im-faint)]">/</span> Privacy
              Policy
            </h1>
            <p className="mt-3 font-mono text-sm text-[color:var(--im-muted)]">
              Immvela — SNS Software Solutions GmbH, Wien
            </p>
            <p className="mt-1 font-mono text-xs text-[color:var(--im-faint)]">
              Stand / Last updated: {UPDATED_DE} · {UPDATED_EN}
            </p>
          </div>

          {/* ── German, first: the market's default language ─────────────── */}
          <div lang="de">
            <Section lang="de" title="Verantwortlicher">
              <p>
                <strong>SNS Software Solutions GmbH</strong>
                <br />
                Schrötlgasse 8a, 1220 Wien, Österreich
                <br />
                E-Mail: <a href={`mailto:${CONTACT}`}>{CONTACT}</a>
              </p>
              <p>
                Immvela ist die Software-Plattform der SNS Software Solutions GmbH für
                Immobilienmaklerinnen und -makler und keine eigene Rechtsperson. Diese Erklärung
                beschreibt, welche Daten wir in Immvela verarbeiten. Vollständige Angaben zum
                Unternehmen finden Sie im <a href="/legal/imprint">Impressum</a>.
              </p>
            </Section>

            <Section lang="de" title="Verbundene Social-Media-Konten und Veröffentlichung">
              <p>
                Wenn Sie ein Konto bei Instagram, Facebook, LinkedIn, TikTok oder YouTube mit
                Immvela verbinden, speichern wir den von der Plattform ausgestellten Zugriffs-Token,
                gegebenenfalls einen Erneuerungs-Token, die Kontokennung der Plattform sowie den
                angezeigten Kontonamen. Die Token werden vor dem Speichern verschlüsselt.
              </p>
              <p>
                Wir verwenden sie <strong>ausschließlich für drei Zwecke</strong>: um in Ihrem
                Auftrag Beiträge zu veröffentlichen, um zu diesen Beiträgen aggregierte Kennzahlen
                der Plattform abzurufen, und um die Gültigkeit der Verbindung aufrechtzuerhalten.
              </p>
              <p>
                Die Kennzahlen sind <strong>Gesamtwerte je Beitrag und Plattform</strong> — etwa
                Aufrufe, Reichweite, Reaktionen, Kommentare, geteilte Inhalte und Klicks, jeweils
                als Anzahl — und werden unter der Bezeichnung gespeichert, die die jeweilige
                Plattform dafür verwendet. Wir rufen dazu{' '}
                <strong>keine Angaben zu einzelnen Personen</strong> ab: keine Namen von
                Kommentierenden, keine Kommentartexte und keine Auswertungen zur Zusammensetzung
                Ihres Publikums. Wir lesen keine privaten Nachrichten und keine Kontaktlisten.
              </p>
            </Section>

            <Section lang="de" title="Nutzung der YouTube API Services">
              <p>
                Für die Veröffentlichung auf YouTube nutzt Immvela die{' '}
                <strong>YouTube API Services</strong>. Mit der Nutzung dieser Funktionen stimmen Sie
                den{' '}
                <a href="https://www.youtube.com/t/terms" target="_blank" rel="noopener noreferrer">
                  YouTube Terms of Service
                </a>{' '}
                zu. Ergänzend gilt die{' '}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google-Datenschutzerklärung
                </a>
                .
              </p>
              <p>
                <strong>Welche Berechtigungen wir anfragen.</strong> Wenn Sie ein YouTube-Konto
                verbinden, fragen wir bei Google genau zwei Berechtigungen an — nicht mehr, als die
                Funktionen benötigen:
              </p>
              <ul>
                <li>
                  <strong>youtube.upload</strong> — um Videos, die Sie in Immvela dafür auswählen,
                  in Ihren Kanal hochzuladen;
                </li>
                <li>
                  <strong>youtube.readonly</strong> — um den Namen und die Kennung Ihres Kanals
                  anzuzeigen und um zu den über Immvela veröffentlichten Videos die Gesamtzahlen für
                  Aufrufe, „Gefällt mir“ und Kommentare abzurufen.
                </li>
              </ul>
              <p>
                <strong>Welche YouTube-Daten wir speichern.</strong> Das Zugriffs- und das
                Erneuerungstoken (verschlüsselt), die Kennung und den Namen Ihres Kanals, die
                Kennung der über Immvela hochgeladenen Videos sowie die genannten Gesamtzahlen mit
                dem Zeitpunkt ihres Abrufs. Mehr nicht: keine Kommentartexte, keine Namen von
                Kommentierenden, keine Angaben zur Zusammensetzung Ihres Publikums, keine
                Wiedergabeverläufe, keine Abonnentenlisten.
              </p>
              <p>
                <strong>Wofür wir sie nicht verwenden.</strong> YouTube-Daten werden nicht für
                Werbung verwendet, nicht an Dritte verkauft oder weitergegeben, nicht an unseren
                KI-Dienstleister übermittelt und nicht zum Training von KI-Modellen verwendet.
              </p>
              <p>
                <strong>Zugriff widerrufen.</strong> Sie können den Zugriff von Immvela auf Ihr
                Google-Konto jederzeit und unabhängig von Immvela entziehen — über die{' '}
                <a href={GOOGLE_PERMISSIONS_URL} target="_blank" rel="noopener noreferrer">
                  Google-Sicherheitseinstellungen
                </a>
                . Zusätzlich löschen Sie die bei uns gespeicherten Token, indem Sie die Verbindung
                in Immvela unter <em>Verlag → Verbundene Konten</em> trennen (Abschnitt „Löschung“).
              </p>
            </Section>

            <Section lang="de" title="Inhalte, die Sie anlegen">
              <p>
                Objektdaten, Adressen, hochgeladene Fotos und Videos, Bildtexte und geplante
                Beiträge. Mediendateien liegen in einem nicht öffentlichen Speicher; der Zugriff
                erfolgt über kurzlebige signierte Links.
              </p>
            </Section>

            <Section lang="de" title="Texterstellung mit KI">
              <p>
                Wenn Sie einen Text erzeugen lassen, übermitteln wir die dafür nötigen Objektdaten —{' '}
                <strong>einschließlich der Objektadresse</strong> und der von Ihnen bestätigten
                Objektangaben — an unseren KI-Dienstleister Anthropic. Die erzeugten Texte und ein
                Nutzungsnachweis werden bei uns gespeichert. Daten aus verbundenen
                Social-Media-Konten sind davon nicht betroffen; sie werden nicht an Anthropic
                übermittelt.
              </p>
            </Section>

            <Section lang="de" title="Aufzeichnungen">
              <p>
                Wir speichern, <em>dass</em> ein Beitrag veröffentlicht wurde, mit Zeitpunkt und
                Kanal, sowie die dazu abgerufenen aggregierten Kennzahlen. Diese Aufzeichnungen
                enthalten keine Zugangsdaten und keine Angaben zu einzelnen Kommentierenden oder zu
                Ihrem Publikum; sie sind Ihrem Konto zugeordnet.
              </p>
              <p>
                Sie <strong>bleiben bestehen</strong>, wenn Sie eine Mediendatei löschen oder eine
                Kontoverbindung trennen. Beim Löschen einer Mediendatei entfallen die zugehörigen
                geplanten Beiträge in Immvela; die Aufzeichnung einer bereits erfolgten
                Veröffentlichung bleibt erhalten.
              </p>
            </Section>

            <Section lang="de" title="Auftragsverarbeiter">
              <p>
                Supabase (Datenbank und Dateispeicher), Vercel (Hosting), Trigger.dev
                (Hintergrundaufträge) und Anthropic (Texterstellung).
              </p>
              <p>
                Beiträge, die Sie veröffentlichen, werden an die von Ihnen gewählte Plattform
                übermittelt und unterliegen dort deren eigenen Bestimmungen.
              </p>
            </Section>

            <Section lang="de" title="Schutz Ihrer Daten">
              <p>
                Wir treffen technische und organisatorische Maßnahmen, um die von uns verarbeiteten
                Daten zu schützen. Im Einzelnen:
              </p>
              <ul>
                <li>
                  <strong>Übertragung.</strong> Der gesamte Datenverkehr — zwischen Ihrem Browser
                  und Immvela ebenso wie zwischen Immvela und den Schnittstellen der Plattformen —
                  erfolgt ausschließlich verschlüsselt über TLS (HTTPS).
                </li>
                <li>
                  <strong>Zugriffstoken der verbundenen Konten.</strong> Diese Token sind das
                  schutzbedürftigste Datum, das wir halten, und werden vor dem Speichern mit{' '}
                  <strong>AES-256-GCM</strong> verschlüsselt. Der Schlüssel liegt ausschließlich in
                  der Laufzeitumgebung und niemals in der Datenbank: ein Datenbankauszug allein
                  genügt nicht, um Zugriff auf Ihre Konten zu erlangen. Fehlt der Schlüssel, so
                  verweigert das System im Produktivbetrieb das Speichern, statt Token im Klartext
                  abzulegen.
                </li>
                <li>
                  <strong>Speicherung.</strong> Datenbank und Dateispeicher werden von Supabase
                  betrieben und sind dort im Ruhezustand verschlüsselt.
                </li>
                <li>
                  <strong>Trennung der Mandanten.</strong> Jeder Datensatz ist genau einer
                  Organisation zugeordnet. Diese Trennung wird von der Datenbank selbst auf
                  Zeilenebene durchgesetzt (Row-Level-Security) und nicht erst von der Anwendung,
                  sodass ein Fehler in der Anwendung sie nicht aufheben kann.
                </li>
                <li>
                  <strong>Mediendateien.</strong> Fotos und Videos liegen in nicht öffentlichem
                  Speicher und sind ausschließlich über kurzlebige, signierte Links erreichbar; es
                  gibt keine öffentlich abrufbare Adresse einer Ihrer Dateien.
                </li>
                <li>
                  <strong>Weitergabe.</strong> Wir verkaufen keine Daten und geben sie außer an die
                  oben genannten Auftragsverarbeiter nicht weiter.
                </li>
              </ul>
            </Section>

            <Section lang="de" title="Speicherdauer">
              <p>
                Ihre Inhalte bleiben gespeichert, bis Sie sie in Immvela löschen oder Ihr Konto
                gelöscht wird.{' '}
                <strong>
                  Eine automatische Löschung von Mediendateien findet derzeit nicht statt.
                </strong>{' '}
                Ein bereits veröffentlichter Beitrag bleibt auf der jeweiligen Plattform bestehen
                und ist dort von Ihnen zu entfernen.
              </p>
            </Section>

            <Section lang="de" title="Löschung">
              <p>
                Eine Verbindung trennen Sie jederzeit selbst unter{' '}
                <em>Verlag → Verbundene Konten</em>; der gespeicherte Eintrag wird damit
                einschließlich der Token endgültig gelöscht — nicht deaktiviert.
              </p>
              <p>
                Unabhängig davon können Sie den Zugriff bei der jeweiligen Plattform selbst
                widerrufen — bei Google unter{' '}
                <a href={GOOGLE_PERMISSIONS_URL} target="_blank" rel="noopener noreferrer">
                  security.google.com/settings/security/permissions
                </a>
                .
              </p>
              <p>
                Für die Löschung Ihres gesamten Kontos schreiben Sie an{' '}
                <a href={`mailto:${CONTACT}`}>{CONTACT}</a> von der E-Mail-Adresse Ihres Kontos. Wir
                führen sie <strong>innerhalb von 30 Tagen manuell</strong> durch und bestätigen die
                Löschung; eine Schaltfläche dafür gibt es in der Anwendung derzeit nicht.
              </p>
              <p>
                Ausführliche Anleitung:{' '}
                <a href={DATA_DELETION_URL}>immvela.com/legal/data-deletion</a>.
              </p>
            </Section>

            <Section lang="de" title="Daten Ihrer eigenen Kundinnen und Kunden">
              <p>
                Angaben, die Sie zu Interessentinnen und Interessenten in Immvela erfassen,
                verarbeiten wir in Ihrem Auftrag. Für diese Daten bleiben Sie verantwortlich;
                Anfragen dazu richten Sie bitte an uns über die oben genannte Adresse.
              </p>
            </Section>
          </div>

          <hr className="my-12 border-[color:var(--im-line)]" />

          {/* ── English, for platform reviewers ──────────────────────────── */}
          <div lang="en">
            <Section lang="en" title="Controller">
              <p>
                <strong>SNS Software Solutions GmbH</strong>
                <br />
                Schrötlgasse 8a, 1220 Vienna, Austria
                <br />
                Email: <a href={`mailto:${CONTACT}`}>{CONTACT}</a>
              </p>
              <p>
                Immvela is SNS Software Solutions GmbH&apos;s software platform for real-estate
                agents and is not a separate legal entity. This policy describes the data we process
                in Immvela. Full company details are in the <a href="/legal/imprint">imprint</a>.
              </p>
            </Section>

            <Section lang="en" title="Connected social accounts and publishing">
              <p>
                When you connect an Instagram, Facebook, LinkedIn, TikTok or YouTube account to
                Immvela, we store the access token issued by that platform, a refresh token where
                one is issued, the platform&apos;s account identifier, and the account&apos;s
                display name. Tokens are encrypted before they are stored.
              </p>
              <p>
                We use them <strong>solely for three purposes</strong>: to publish posts on your
                behalf, to retrieve aggregate engagement figures from the platform for those posts,
                and to keep the connection valid.
              </p>
              <p>
                Those figures are <strong>totals per post and per platform</strong> — such as views,
                reach, reactions, comments, shares and clicks, each as a count — and are stored
                under the name the platform itself gives each metric. We retrieve{' '}
                <strong>nothing about individual people</strong> in the process: no commenter names,
                no comment text, and no audience breakdowns. We do not read private messages or
                contact lists.
              </p>
            </Section>

            <Section lang="en" title="Use of YouTube API Services">
              <p>
                Immvela uses <strong>YouTube API Services</strong> to publish to YouTube. By using
                those features you agree to be bound by the{' '}
                <a href="https://www.youtube.com/t/terms" target="_blank" rel="noopener noreferrer">
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
                <strong>The permissions we request.</strong> When you connect a YouTube account we
                ask Google for exactly two permissions — no more than the features require:
              </p>
              <ul>
                <li>
                  <strong>youtube.upload</strong> — to upload videos you select in Immvela to your
                  channel;
                </li>
                <li>
                  <strong>youtube.readonly</strong> — to show your channel&apos;s name and
                  identifier, and to retrieve the total view, like and comment counts for videos
                  published through Immvela.
                </li>
              </ul>
              <p>
                <strong>What YouTube data we store.</strong> The access token and refresh token
                (encrypted), your channel&apos;s identifier and name, the identifiers of videos
                uploaded through Immvela, and the totals named above together with the time they
                were retrieved. Nothing further: no comment text, no commenter names, no audience
                breakdowns, no watch history, no subscriber lists.
              </p>
              <p>
                <strong>What we never do with it.</strong> YouTube data is not used for advertising,
                is not sold or disclosed to third parties, is not sent to our AI provider, and is
                not used to train AI models.
              </p>
              <p>
                <strong>Revoking access.</strong> You can withdraw Immvela&apos;s access to your
                Google account at any time, independently of Immvela, through the{' '}
                <a href={GOOGLE_PERMISSIONS_URL} target="_blank" rel="noopener noreferrer">
                  Google security settings page
                </a>
                . Separately, disconnecting the account in Immvela under{' '}
                <em>Verlag → Connected accounts</em> deletes the tokens we hold (see “Deletion”).
              </p>
            </Section>

            <Section lang="en" title="Content you create">
              <p>
                Property details, addresses, uploaded photos and videos, captions, and scheduled
                posts. Media files are held in non-public storage and are reached through
                short-lived signed links.
              </p>
            </Section>

            <Section lang="en" title="AI text generation">
              <p>
                When you generate text, we send the property details needed for it —{' '}
                <strong>including the property address</strong> and the property attributes you have
                confirmed — to our AI provider, Anthropic. The generated text and a record of the
                generation are stored by us. Data from connected social accounts is not part of this
                and is not sent to Anthropic.
              </p>
            </Section>

            <Section lang="en" title="Records">
              <p>
                We store the fact <em>that</em> a post was published, with its time and channel,
                together with the aggregate figures retrieved for it. These records contain no
                credentials and nothing about individual commenters or your audience; they are
                attributed to your account.
              </p>
              <p>
                They <strong>remain</strong> when you delete a media file or disconnect an account.
                Deleting a media file removes the scheduled posts tied to it within Immvela; the
                record of a publication that already happened is kept.
              </p>
            </Section>

            <Section lang="en" title="Processors">
              <p>
                Supabase (database and file storage), Vercel (hosting), Trigger.dev (background
                jobs) and Anthropic (text generation).
              </p>
              <p>
                Posts you publish are transmitted to the platform you select and are then subject to
                that platform&apos;s own terms.
              </p>
            </Section>

            <Section lang="en" title="How we protect your data">
              <p>
                We maintain technical and organisational controls over the data we process.
                Specifically:
              </p>
              <ul>
                <li>
                  <strong>In transit.</strong> All traffic — between your browser and Immvela, and
                  between Immvela and the platforms&apos; APIs — is encrypted with TLS (HTTPS).
                </li>
                <li>
                  <strong>Connected-account access tokens.</strong> These are the most sensitive
                  data we hold, and they are encrypted with <strong>AES-256-GCM</strong> before they
                  are stored. The key exists only in the runtime environment and never in the
                  database, so a database dump on its own does not yield access to your accounts. If
                  the key is absent, the system refuses to store tokens in production rather than
                  falling back to plaintext.
                </li>
                <li>
                  <strong>At rest.</strong> The database and file storage are operated by Supabase
                  and are encrypted at rest there.
                </li>
                <li>
                  <strong>Tenant separation.</strong> Every record belongs to exactly one
                  organisation, and that separation is enforced by the database itself at row level
                  (row-level security) rather than by the application, so an application fault
                  cannot lift it.
                </li>
                <li>
                  <strong>Media files.</strong> Photos and videos are held in non-public storage and
                  are reachable only through short-lived signed links; no file of yours has a
                  publicly retrievable address.
                </li>
                <li>
                  <strong>Disclosure.</strong> We do not sell data, and we disclose it to no one
                  beyond the processors named above.
                </li>
              </ul>
            </Section>

            <Section lang="en" title="Retention">
              <p>
                Your content is retained until you delete it in Immvela or your account is deleted.{' '}
                <strong>There is currently no automatic deletion of media files.</strong> A post
                already published remains on the platform concerned and is removed by you there.
              </p>
            </Section>

            <Section lang="en" title="Deletion">
              <p>
                You can disconnect an account yourself at any time under{' '}
                <em>Verlag → Connected accounts</em>; this permanently deletes the stored record
                including its tokens — it does not merely deactivate them.
              </p>
              <p>
                Independently of that, you can revoke access at the platform itself — for Google at{' '}
                <a href={GOOGLE_PERMISSIONS_URL} target="_blank" rel="noopener noreferrer">
                  security.google.com/settings/security/permissions
                </a>
                .
              </p>
              <p>
                To delete your entire account, email <a href={`mailto:${CONTACT}`}>{CONTACT}</a>{' '}
                from your account&apos;s email address. We carry this out{' '}
                <strong>by hand within 30 days</strong> and confirm once it is done; there is
                currently no button for it in the application.
              </p>
              <p>
                Full instructions: <a href={DATA_DELETION_URL}>immvela.com/legal/data-deletion</a>.
              </p>
            </Section>

            <Section lang="en" title="Your own customers' data">
              <p>
                Details you record about prospective buyers or tenants in Immvela are processed on
                your behalf. You remain responsible for that data; please direct requests about it
                to us at the address above.
              </p>
            </Section>
          </div>

          <nav className="mt-14 flex flex-wrap gap-x-5 gap-y-2 border-t border-[color:var(--im-line)] pt-8">
            <a
              href="/legal/imprint"
              className="font-mono text-xs text-[color:var(--im-muted)] transition-colors duration-300 hover:text-[color:var(--im-green)]"
            >
              Impressum / Imprint
            </a>
            <a
              href="/legal/terms"
              className="font-mono text-xs text-[color:var(--im-muted)] transition-colors duration-300 hover:text-[color:var(--im-green)]"
            >
              Nutzungsbedingungen / Terms
            </a>
            <a
              href={DATA_DELETION_URL}
              className="font-mono text-xs text-[color:var(--im-muted)] transition-colors duration-300 hover:text-[color:var(--im-green)]"
            >
              Datenlöschung / Data deletion
            </a>
          </nav>
        </main>
      </div>
    </div>
  )
}
