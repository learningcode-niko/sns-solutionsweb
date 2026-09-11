import type { Metadata } from 'next'
import { IMMVELA_URL } from '@/lib/site'

/**
 * Immvela's data-deletion instructions, served at
 * www.immvela.com/legal/data-deletion.
 *
 * ── Why this page moved here ────────────────────────────────────────────────
 *
 * It used to be served by the app at `app.immvela.com/data-deletion`. The
 * overseer split the two properties on 2026-09-05 — `immvela.com` is the
 * landing page, `app.immvela.com` is the product — and decided nothing legal
 * belongs on the product. The app now carries outward links only, so this is
 * the fourth and last document that landed here.
 *
 * ⚠️ **ORDERING.** The app's copy is deleted in a separate pull request that
 * must not merge until this page is live, and a human must update the Meta app
 * configuration at the same time: Meta requires a working data-deletion URL for
 * the review this whole effort exists to pass, and its dashboard may still
 * point at `app.immvela.com/data-deletion`. Publish here first; the removal
 * merges second.
 *
 * ── What it may and may not promise ─────────────────────────────────────────
 *
 * The platforms ask about data obtained through THEIR APIs — the connection,
 * the tokens, the account identity. That is a much narrower question than a
 * full GDPR erasure of an agent's contacts and leads, where Immvela is a
 * processor and the fan-out is unbuilt.
 *
 * The narrow question has a real, built answer: `deleteConnection` hard-deletes
 * the `platform_connection` row, encrypted tokens included, so disconnecting
 * genuinely removes it. That is why this page can describe a self-serve
 * deletion without over-promising. Everything it cannot do self-serve is named
 * as a manual request instead of implied to be automatic.
 *
 * ⚠️ **No Data Deletion Callback.** Meta offers a callback as an alternative to
 * an instructions URL; SNS provides the URL. A callback needs a handler that
 * processes a `signed_request` identifying a real user, and an erasure job
 * behind it that does not exist. Shipping one that silently does nothing is
 * worse than not offering one. Nothing on this static page can receive such a
 * POST, which is the property rather than an accident.
 *
 * ── Why BOTH languages, German first ────────────────────────────────────────
 *
 * The two readers are a DACH agent and an English-speaking platform reviewer,
 * and both arrive signed out, so neither can be served by a locale preference.
 * Same shape as `/legal/privacy` next door, and the shape the app's copy used.
 *
 * ── Provenance: every factual claim, and where it was read ──────────────────
 *
 * Verified against the app repo's `main` on 2026-09-05. The handoff warns that
 * once this page leaves the app repo nobody here can check it against the code
 * — so each claim names its source, and any future edit that cannot cite one
 * must be escalated rather than reworded.
 *
 *   • tokens encrypted at rest — `crypto/token-encryption.ts`, AES-256-GCM.
 *   • disconnecting hard-deletes the row and its tokens — `connection.ts`
 *     `deleteConnection`, a real DELETE, not a soft delete.
 *   • the tokens also READ aggregate engagement — `read_insights` and
 *     `instagram_manage_insights` in `modules/publishing/platforms/meta.ts`,
 *     ingested by `worker/engagement-sweep.ts`, armed in production since
 *     2026-08-28. ⚠️ One of the two claims the handoff flagged as dated; this
 *     is the re-verified state, not the draft's "solely to publish".
 *   • aggregate only, never per-person — the sweep emits per-post totals and
 *     no per-person rows.
 *   • publication and engagement records survive a disconnect — `event` rows,
 *     kept permanently by decision; `retention.ts` is explicit that
 *     `content.published` history survives a wipe, "which is the point".
 *   • ⚠️ The second dated claim, re-verified: a media wipe job now EXISTS
 *     (`worker/wipe-sweep.ts`) but is DRY-RUN by default and unarmed in
 *     production — `worker-env.ts` says absent is the INTENDED state for
 *     `IMMVELA_MEDIA_WIPE_ARMED`. So this page still describes no automatic
 *     deletion, which remains true; it is true for a different reason than
 *     when the draft was written, and that is why it had to be re-checked.
 *   • full account deletion is manual, within 30 days — no erasure job exists;
 *     `docs/gdpr-erasure.md` is a design document.
 */

export const metadata: Metadata = {
  title: { absolute: 'Datenlöschung / Data deletion — Immvela' },
  description:
    'Wie Sie in Immvela gespeicherte Plattformdaten löschen. How to delete platform data stored in Immvela.',
  alternates: {
    canonical: `${IMMVELA_URL}/legal/data-deletion`,
    languages: {
      de: `${IMMVELA_URL}/legal/data-deletion`,
      en: `${IMMVELA_URL}/legal/data-deletion`,
      'x-default': `${IMMVELA_URL}/legal/data-deletion`,
    },
  },
}

const UPDATED_DE = '5. September 2026'
const UPDATED_EN = 'September 5, 2026'
const CONTACT = 'office@sns-austria.com'

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

export default function ImmvelaDataDeletionPage() {
  return (
    <div className="immvela-theme relative min-h-dvh">
      {/* Cream as a FIXED layer, not a background on the scrolling wrapper —
          <body> carries the SNS site's cool porcelain (#eef0f7), so a wrapper
          background stops where the wrapper stops and an overscroll bounce
          shows a band of the wrong near-white. Same reasoning as
          /legal/privacy next door. */}
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
              Datenlöschung <span className="text-[color:var(--im-faint)]">/</span> Data deletion
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
            <Section lang="de" title="Verbundene Konten und was wir dazu speichern">
              <p>
                Wenn Sie ein Social-Media-Konto mit Immvela verbinden, speichern wir den
                Zugriffs-Token (verschlüsselt), die Kontokennung der Plattform und den angezeigten
                Kontonamen. Diese Daten benötigen wir, um in Ihrem Auftrag zu veröffentlichen, um
                die Gültigkeit der Verbindung aufrechtzuerhalten und um{' '}
                <strong>zusammengefasste Reichweitenzahlen</strong> zu Ihren Beiträgen abzurufen —
                Summenwerte je Plattform und je Beitrag (etwa Aufrufe, Reaktionen, Kommentaranzahl),
                niemals personenbezogene Daten zu einzelnen Nutzerinnen und Nutzern: keine Namen von
                Kommentierenden, keine Kommentartexte, keine Auswertungen nach Zielgruppenmerkmalen.
              </p>
              <p>
                <strong>Sie löschen diese Daten selbst, sofort:</strong> Öffnen Sie in Immvela{' '}
                <em>Verlag → Verbundene Konten</em> und trennen Sie das Konto. Damit wird der
                gespeicherte Eintrag mitsamt Token endgültig gelöscht — nicht deaktiviert.
              </p>
              <p>
                Was dabei bestehen bleibt: Aufzeichnungen darüber, <em>dass</em> ein Beitrag
                veröffentlicht wurde (Zeitpunkt, Kanal), sowie die dazu abgerufenen
                zusammengefassten Reichweitenzahlen. Sie enthalten keine Zugangsdaten und keine
                personenbezogenen Daten zu einzelnen Nutzerinnen und Nutzern. Bereits
                veröffentlichte Beiträge liegen bei der jeweiligen Plattform und werden dort von
                Ihnen entfernt.
              </p>
            </Section>

            <Section lang="de" title="Löschung Ihres gesamten Immvela-Kontos">
              <p>
                Schreiben Sie uns an <a href={`mailto:${CONTACT}`}>{CONTACT}</a> von der
                E-Mail-Adresse Ihres Kontos. Wir löschen Ihr Konto und die zugehörigen Daten
                innerhalb von <strong>30 Tagen</strong> und bestätigen die Löschung.
              </p>
              <p>
                Dieser Schritt wird von uns manuell ausgeführt; es gibt dafür derzeit keine
                Schaltfläche in der Anwendung.
              </p>
            </Section>
          </div>

          <hr className="my-12 border-[color:var(--im-line)]" />

          {/* ── English, for platform reviewers ──────────────────────────── */}
          <div lang="en">
            <Section lang="en" title="Connected accounts, and what we store for them">
              <p>
                When you connect a social media account to Immvela, we store the access token
                (encrypted), the platform&apos;s account identifier, and the account&apos;s display
                name. We need these to publish on your behalf, to keep the connection valid, and to
                read <strong>aggregate engagement figures</strong> for your posts — totals per
                platform and per post (for example views, reactions, comment counts), never personal
                data about individual users: no commenter names, no comment text, no audience
                breakdowns.
              </p>
              <p>
                <strong>You can delete this yourself, immediately:</strong> in Immvela, open{' '}
                <em>Verlag → Connected accounts</em> and disconnect the account. This permanently
                deletes the stored record and its tokens — it does not merely deactivate them.
              </p>
              <p>
                What remains afterwards: records that a post <em>was</em> published (time and
                channel), together with the aggregate engagement figures retrieved for it. They
                contain no credentials and no personal data about individual users. Posts already
                published live on the platform itself and are removed by you there.
              </p>
            </Section>

            <Section lang="en" title="Deleting your entire Immvela account">
              <p>
                Email <a href={`mailto:${CONTACT}`}>{CONTACT}</a> from your account&apos;s email
                address. We delete your account and its data within <strong>30 days</strong> and
                confirm once it is done.
              </p>
              <p>
                We carry this out by hand; there is currently no button for it in the application.
              </p>
            </Section>
          </div>

          <nav className="mt-14 flex flex-wrap gap-x-5 gap-y-2 border-t border-[color:var(--im-line)] pt-8">
            <a
              href="/legal/privacy"
              className="font-mono text-xs text-[color:var(--im-muted)] transition-colors duration-300 hover:text-[color:var(--im-green)]"
            >
              Datenschutzerklärung / Privacy policy
            </a>
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
          </nav>
        </main>
      </div>
    </div>
  )
}
