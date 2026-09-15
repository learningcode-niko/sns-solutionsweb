import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nutzungsbedingungen',
  description:
    'Die Bedingungen für die Nutzung der Website der SNS Software Solutions GmbH',
  alternates: {
    canonical: '/de/legal/terms',
    languages: {
      en: '/legal/terms',
      de: '/de/legal/terms',
      'x-default': '/legal/terms',
    },
  },
}

const UPDATED = '15. September 2026'

export default function TermsPageDe() {
  return (
    <article>
      <header className="mb-10 border-b border-sns-text/[0.08] pb-8">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-sns-indigo">
          Rechtliches
        </p>
        <h1 className="text-3xl font-bold tracking-[-0.02em] text-sns-text md:text-4xl">
          Nutzungsbedingungen
        </h1>
        <p className="mt-3 font-mono text-sm text-sns-muted">
          Die Bedingungen für die Nutzung dieser Website.
        </p>
        <p className="mt-1 font-mono text-xs text-sns-faint">
          Zuletzt aktualisiert: {UPDATED}
        </p>
      </header>

      <div className="legal-prose">
        <h2>1. Geltungsbereich</h2>
        <p>
          Diese Nutzungsbedingungen regeln Ihren Zugriff auf und die Nutzung der
          Websites, die von <strong>SNS Software Solutions GmbH</strong>{' '}
          („SNS“, „wir“, „uns“) betrieben werden, nämlich sns-austria.com und
          immvela.com. Durch den Zugriff auf oder die Nutzung einer dieser
          Websites stimmen Sie diesen Bedingungen zu. Wenn Sie nicht
          einverstanden sind, nutzen Sie sie bitte nicht.
        </p>
        <p>
          Diese Bedingungen betreffen die Nutzung der Websites selbst. Die
          Erbringung von Softwareentwicklung oder anderen Leistungen durch SNS
          richtet sich nach einer gesonderten schriftlichen Vereinbarung mit dem
          jeweiligen Kunden. Die Nutzung von Immvela oder einer anderen von SNS
          bereitgestellten Anwendung durch einen autorisierten Kunden richtet
          sich nach der gesonderten Dienstleistungsvereinbarung und dem
          Auftragsverarbeitungsvertrag (AVV) zwischen SNS und diesem Kunden,
          nicht nach diesen Nutzungsbedingungen. Abschnitt 4 enthält die
          Bedingungen, die zusätzlich zu dieser Vereinbarung gelten.
        </p>

        <h2>2. Nutzung der Website</h2>
        <p>
          Diese Website dient der allgemeinen Information über SNS und seine
          Leistungen. Sie verpflichten sich, sie nur zu rechtmäßigen Zwecken zu
          nutzen und nicht:
        </p>
        <ul>
          <li>
            die Website, ihre Server oder verbundene Netzwerke zu stören oder zu
            beeinträchtigen;
          </li>
          <li>
            zu versuchen, sich unbefugten Zugang zu Teilen der Website oder
            verbundenen Systemen zu verschaffen;
          </li>
          <li>
            automatisierte Mittel einzusetzen, um die Website zu scrapen,
            auszulesen oder so zu überlasten, dass ihr Betrieb beeinträchtigt
            wird;
          </li>
          <li>
            die Website zu missbrauchen, um Schadsoftware oder rechtswidrige
            Inhalte zu übertragen.
          </li>
        </ul>

        <h2>3. Geistiges Eigentum</h2>
        <p>
          Alle Inhalte dieser Website, einschließlich Texte, Grafiken, Logos,
          des Namens und Zeichens SNS, des Designs und des Codes, sind Eigentum
          der SNS Software Solutions GmbH oder ihrer Lizenzgeber und durch
          Urheberrecht und andere Rechte des geistigen Eigentums geschützt. Sie
          dürfen keinen Teil dieser Website ohne unsere vorherige schriftliche
          Zustimmung vervielfältigen, verbreiten, verändern oder daraus
          abgeleitete Werke erstellen.
        </p>

        <h2>4. Immvela und andere Kundenanwendungen</h2>
        <p>
          Der Zugang zu <strong>Immvela</strong> und zu jeder anderen Anwendung,
          die SNS einem Kunden bereitstellt, richtet sich nach einer gesonderten
          schriftlichen Vereinbarung. Weder diese Website noch diese Bedingungen
          begründen einen Anspruch auf Zugang; widerspricht die gesonderte
          Vereinbarung diesen Bedingungen, so gilt jene Vereinbarung.
        </p>

        <h3>4.1 Early Access</h3>
        <p>
          Immvela wird Modul für Modul angeboten und Teile davon befinden sich im
          Early Access. Early-Access-Funktionen werden „wie besehen“
          bereitgestellt, können sich ändern oder entfallen und beinhalten keine
          Verfügbarkeitszusage. Beschreibungen von Modulen in Entwicklung geben
          die derzeitige Absicht wieder und sind keine Zusage über Liefertermin,
          Funktionsumfang oder Preis.
        </p>

        <h3>4.2 Inhalte des Kunden und verbundene Konten</h3>
        <p>
          Der Kunde ist allein verantwortlich für die Inhalte, die er über die
          Anwendung veröffentlicht, dafür, dass er über die erforderlichen Rechte
          und Berechtigungen verfügt, sowie für den Betrieb seiner eigenen
          verbundenen Konten. SNS handelt nach den Weisungen des Kunden und ist
          nicht verantwortlich für inhaltliche Entscheidungen der autorisierten
          Nutzer des Kunden. Die Nutzung verbundener Plattformen unterliegt
          zusätzlich deren jeweiligen Entwicklerbedingungen und -richtlinien
          (Meta, LinkedIn, Google/YouTube, TikTok), und der Kunde ist für die
          Einhaltung dieser Bedingungen verantwortlich.
        </p>
        <p>
          Für die Veröffentlichung auf YouTube nutzt Immvela die YouTube API
          Services.{' '}
          <strong>
            Mit der Nutzung dieser Funktionen erklären Sie sich damit
            einverstanden, an die{' '}
            <a
              href="https://www.youtube.com/t/terms"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube Terms of Service
            </a>{' '}
            gebunden zu sein.
          </strong>{' '}
          Für die von Google erhaltenen Daten gilt die{' '}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google-Datenschutzerklärung
          </a>
          ; der Immvela erteilte Zugriff kann jederzeit über die{' '}
          <a
            href="https://security.google.com/settings/security/permissions"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google-Sicherheitseinstellungen
          </a>{' '}
          entzogen werden.
        </p>

        <h3>4.3 KI-Ergebnisse sind Entwürfe, keine Beratung</h3>
        <p>
          Texte, Bilder und Dokumente, die die Plattform erzeugt, sind Entwürfe
          zur Prüfung durch den Kunden. Der Kunde ist dafür verantwortlich,
          Ergebnisse zu prüfen, bevor er sie veröffentlicht oder sich darauf
          verlässt. Gibt die Plattform einen Sachwert an, so stammt dieser
          ausschließlich aus Daten, die der Kunde bestätigt hat; sie prüft nicht
          eigenständig, ob der bestätigte Wert zutrifft.
        </p>
        <p>
          Nichts, was die Plattform erzeugt, stellt eine rechtliche,
          steuerliche, finanzielle oder bewertungsbezogene Beratung dar, und es
          ersetzt weder ein Gutachten noch eine Bewertung noch die Beratung durch
          eine qualifizierte Fachperson.
        </p>

        <h3>4.4 Virtuell möblierte Bilder</h3>
        <p>
          Erzeugt die Plattform ein virtuell möbliertes Bild, versieht sie das
          Bild mit einem Hinweis. Der Kunde darf diesen Hinweis nicht entfernen,
          wegschneiden oder verdecken. Virtuelles Staging ergänzt ausschließlich
          Möblierung und Gestaltung und darf nicht dazu verwendet werden, den
          Zustand eines Objekts zu verschleiern oder falsch darzustellen,
          einschließlich Mängeln wie Schäden oder Feuchtigkeit. Für den Eindruck,
          den seine Inserate vermitteln, bleibt der Kunde verantwortlich.
        </p>

        <h3>4.5 Keine automatisierten Zusagen</h3>
        <p>
          Die Plattform vereinbart im Namen eines Kunden keine Preise, Termine
          oder Vertragsbedingungen mit Dritten. Bearbeitet ein Modul eine
          Anfrage, sammelt und bereitet es Informationen auf; Verbindliches
          bestätigt ein Mensch.
        </p>

        <h3>4.6 Eigene gesetzliche Pflichten des Kunden</h3>
        <p>
          Die Nutzung der Plattform überträgt die regulatorischen Pflichten des
          Kunden nicht auf SNS. Insbesondere bleiben Angabepflichten für
          Immobilienanzeigen — etwa Angaben zum Energieausweis nach dem
          österreichischen EAVG oder dem deutschen GEG — Sache des Kunden, ebenso
          wie seine Pflichten als Verantwortlicher nach der DSGVO.
        </p>

        <h2>5. Keine Gewährleistung</h2>
        <p>
          Diese Website wird „wie besehen“ und „wie verfügbar“ bereitgestellt.
          Wir bemühen uns, die Informationen richtig und aktuell zu halten,
          geben jedoch keine ausdrücklichen oder stillschweigenden Zusicherungen
          oder Gewährleistungen hinsichtlich ihrer Richtigkeit, Vollständigkeit,
          Zuverlässigkeit oder Verfügbarkeit. Wir können die Website (ganz oder
          teilweise) jederzeit ohne Vorankündigung ändern, aussetzen oder
          einstellen.
        </p>

        <h2>6. Haftungsbeschränkung</h2>
        <p>
          Soweit nach geltendem Recht zulässig, haftet SNS nicht für indirekte,
          zufällige oder Folgeschäden, die aus Ihrer Nutzung oder
          Nichtnutzbarkeit dieser Website entstehen. Die Haftung für leichte
          Fahrlässigkeit ist ausgeschlossen. Dies beschränkt keine Haftung, die
          nach zwingendem österreichischem Recht nicht ausgeschlossen oder
          beschränkt werden kann, einschließlich der Haftung für Personenschäden
          oder für Vorsatz und grobe Fahrlässigkeit.
        </p>

        <h2>7. Externe Links</h2>
        <p>
          Diese Website kann Links zu Websites Dritter enthalten. Wir haben keine
          Kontrolle über die Inhalte, Richtlinien oder Praktiken von Websites
          Dritter und übernehmen dafür keine Verantwortung. Der Zugriff auf
          verlinkte Seiten erfolgt auf eigenes Risiko.
        </p>

        <h2>8. Änderungen dieser Bedingungen</h2>
        <p>
          Wir können diese Nutzungsbedingungen von Zeit zu Zeit überarbeiten. Es
          gilt die zum Zeitpunkt Ihres Besuchs auf dieser Seite veröffentlichte
          Fassung. Die fortgesetzte Nutzung der Website nach Änderungen gilt als
          Zustimmung zu den überarbeiteten Bedingungen.
        </p>

        <h2>9. Anwendbares Recht & Gerichtsstand</h2>
        <p>
          Diese Nutzungsbedingungen unterliegen dem Recht der Republik Österreich
          unter Ausschluss seiner Kollisionsnormen und des UN-Kaufrechts (CISG).
          Soweit gesetzlich zulässig, sind die zuständigen Gerichte in Wien,
          Österreich, ausschließlich zuständig. Zwingende
          Verbraucherschutzbestimmungen des Landes, in dem ein Verbraucher seinen
          Wohnsitz hat, bleiben unberührt.
        </p>

        <h2>10. Kontakt</h2>
        <p>
          SNS Software Solutions GmbH, Wien, Österreich
          <br />
          E-Mail:{' '}
          <a href="mailto:office@sns-austria.com">office@sns-austria.com</a>
        </p>
        <p>
          Vollständige Unternehmensdetails finden Sie in unserem{' '}
          <a href="/de/legal/imprint">Impressum</a>.
        </p>
      </div>
    </article>
  )
}
