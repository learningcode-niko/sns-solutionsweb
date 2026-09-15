import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datenschutz',
  description:
    'Wie SNS Software Solutions GmbH personenbezogene Daten gemäß der EU-Datenschutz-Grundverordnung (DSGVO) verarbeitet.',
  alternates: {
    canonical: '/de/legal/privacy',
    languages: {
      en: '/legal/privacy',
      de: '/de/legal/privacy',
      'x-default': '/legal/privacy',
    },
  },
}

const UPDATED = '15. September 2026'

export default function PrivacyPageDe() {
  return (
    <article>
      <header className="mb-10 border-b border-sns-text/[0.08] pb-8">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-sns-indigo">
          Rechtliches
        </p>
        <h1 className="text-3xl font-bold tracking-[-0.02em] text-sns-text md:text-4xl">
          Datenschutzerklärung
        </h1>
        <p className="mt-3 font-mono text-sm text-sns-muted">
          Wie wir Ihre personenbezogenen Daten gemäß der EU-Datenschutz-
          Grundverordnung (DSGVO) verarbeiten.
        </p>
        <p className="mt-1 font-mono text-xs text-sns-faint">
          Zuletzt aktualisiert: {UPDATED}
        </p>
      </header>

      <div className="legal-prose">
        <h2>1. Verantwortlicher</h2>
        <p>Verantwortlicher für die Datenverarbeitung auf dieser Website ist:</p>
        <p>
          <strong>SNS Software Solutions GmbH</strong>
          <br />
          Schrötlgasse 8a, 1220 Wien, Österreich
          <br />
          E-Mail:{' '}
          <a href="mailto:office@sns-austria.com">office@sns-austria.com</a>
        </p>

        <h2>2. Überblick</h2>
        <p>
          Wir nehmen den Schutz Ihrer personenbezogenen Daten ernst und
          verarbeiten diese nur im Einklang mit den gesetzlichen
          Datenschutzvorschriften (DSGVO, österreichisches Datenschutzgesetz /
          DSG) und dieser Datenschutzerklärung.
        </p>
        <p>
          Diese Erklärung betrifft zwei verschiedene Dinge, und die
          Unterscheidung ist für Ihre Rechte wesentlich.{' '}
          <strong>Unsere Websites</strong> (sns-austria.com und immvela.com) sind
          Informationsseiten; dort erheben wir so wenige personenbezogene Daten
          wie möglich — es gelten die Abschnitte 3 sowie 5 bis 12.{' '}
          <strong>Immvela</strong>, die Plattform, in der sich unsere Kunden
          anmelden, ist etwas anderes: dort verarbeiten wir Daten überwiegend im
          Auftrag eines Kunden und nicht für eigene Zwecke, was ändert, an wen
          Sie ein Anliegen richten. Das regelt Abschnitt 4.
        </p>

        <h2>3. Hosting</h2>
        <p>
          Diese Website wird von <strong>Vercel Inc.</strong>, 340 S Lemon Ave
          #4133, Walnut, CA 91789, USA, gehostet. Beim Besuch der Website
          verarbeitet Vercel automatisch technische Verbindungsdaten (siehe
          „Server-Logfiles“ unten), um die Website sicher und zuverlässig
          bereitzustellen. Dies beruht auf unserem berechtigten Interesse an
          einer stabilen und sicheren Online-Präsenz (Art. 6 Abs. 1 lit. f
          DSGVO). Wir haben mit Vercel einen Auftragsverarbeitungsvertrag (AVV)
          geschlossen, und Übermittlungen in die USA sind durch die
          EU-Standardvertragsklauseln abgesichert.
        </p>

        <h2>4. Immvela (unsere Immobilien-Plattform)</h2>
        <p>
          Zusätzlich zu dieser Website betreibt SNS <strong>Immvela</strong> (
          <a href="https://www.immvela.com" target="_blank" rel="noopener noreferrer">
            immvela.com
          </a>
          , Anwendung unter app.immvela.com), eine modulare Plattform für
          Immobilienmakler und Maklerbüros in Österreich, Deutschland und der
          Schweiz. Immvela ist ein Produkt der SNS Software Solutions GmbH und
          keine eigene Rechtsperson; diese Datenschutzerklärung gilt für beide
          Domains. Module werden einzeln freigeschaltet, daher richtet sich die
          im Folgenden beschriebene Verarbeitung danach, welche Module ein
          Maklerbüro tatsächlich nutzt.
        </p>

        <h3>4.1 Verantwortlicher und Auftragsverarbeiter</h3>
        <p>
          Für die Daten, die ein Maklerbüro in Immvela über seine eigenen
          Objekte, Kunden und Interessenten einbringt, ist das{' '}
          <strong>Maklerbüro der Verantwortliche</strong> und{' '}
          <strong>SNS handelt als Auftragsverarbeiter</strong> nach dessen
          Weisung (Art. 28 DSGVO), auf Grundlage einer gesonderten schriftlichen
          Vereinbarung samt Auftragsverarbeitungsvertrag (AVV). Für die Konto-
          und Vertragsdaten des Maklerbüros selbst ist SNS Verantwortlicher.
        </p>
        <p>
          Jedes Maklerbüro ist ein eigener Mandant und eigener Verantwortlicher.
          Gehört ein Maklerbüro zu einem Franchise, haben die Franchise-Standorte{' '}
          <strong>keinen</strong> Zugriff auf die operativen Daten der jeweils
          anderen; ein Franchise kann Nachschlagematerial ausschließlich durch
          bewusste Freigabe nach unten teilen, niemals operative Datensätze zu
          Objekten oder Personen.
        </p>

        <h3>4.2 Daten, die wir im Auftrag von Kunden verarbeiten</h3>
        <ul>
          <li>
            Kontodaten der Nutzer des Maklerbüros: Name, E-Mail-Adresse, Rolle in
            der Organisation und bevorzugte Oberflächensprache.
          </li>
          <li>
            Objekt- und Inseratsdaten, einschließlich beschreibender und
            technischer Angaben wie Wohnfläche, Baujahr und Werte des
            Energieausweises.
          </li>
          <li>
            Kontakte, Leads und Abschlüsse, also personenbezogene Daten über
            Kauf-, Verkaufs- oder Mietinteressenten, die das Maklerbüro erfasst
            oder erhält.
          </li>
          <li>
            Dokumente, die das Maklerbüro hochlädt (zum Beispiel Energieausweise),
            und die daraus ausgelesenen Werte. Ausgelesene Werte werden dem
            Maklerbüro stets zur Bestätigung vorgelegt, bevor die Plattform sich
            darauf stützt.
          </li>
          <li>
            Medien, die das Maklerbüro hochlädt oder erzeugen lässt: Fotos,
            gestagte Bilder und Rundgangsaufnahmen.
          </li>
          <li>
            Texte, die die Plattform auf Weisung des Maklerbüros entwirft
            (Inseratstexte, Captions, Exposés), sowie die Überarbeitungen des
            Maklerbüros daran.
          </li>
          <li>
            Zugangstoken der verbundenen Veröffentlichungsplattformen, die
            ausschließlich dazu dienen, im Auftrag des Maklerbüros zu
            veröffentlichen und die dazugehörigen Interaktionsdaten abzurufen.
          </li>
          <li>
            Interaktionsdaten, die diese Plattformen zurückliefern (zum Beispiel
            Aufrufe, Reaktionen und Beitragsstatistiken).
          </li>
          <li>
            Aufzeichnungen über Aktivitäten in der Plattform, die festhalten,
            welches Modul welchen Datensatz erzeugt oder genutzt hat. Sie dienen
            dem Betrieb des Dienstes und dazu, die eigenen Daten des Maklerbüros
            modulübergreifend nutzbar zu machen.
          </li>
        </ul>

        <h3>4.3 Zweck und Rechtsgrundlage</h3>
        <p>
          Diese Daten werden ausschließlich verarbeitet, um die vom Maklerbüro
          freigeschalteten Funktionen bereitzustellen. Rechtsgrundlage ist die
          Erfüllung des Vertrags mit dem Maklerbüro (Art. 6 Abs. 1 lit. b DSGVO)
          sowie unser berechtigtes Interesse an der Erbringung der vereinbarten
          Leistung (Art. 6 Abs. 1 lit. f DSGVO). Verarbeitet ein Maklerbüro Daten
          über Dritte, etwa über Kaufinteressenten, ist das Maklerbüro für die
          Rechtsgrundlage dieser Verarbeitung verantwortlich.
        </p>

        <h3>4.4 KI-Verarbeitung, und worüber sie nicht entscheidet</h3>
        <p>
          Mehrere Immvela-Module erzeugen Texte oder Bilder mit KI. Für die
          Texterzeugung werden die betreffenden Inserats- und Objektdaten an{' '}
          <strong>Anthropic PBC</strong> (Claude-Modelle) als
          Unterauftragsverarbeiter übermittelt, ausschließlich zur Erstellung des
          vom Maklerbüro angeforderten Ergebnisses. Nach den kommerziellen
          API-Bedingungen von Anthropic werden über die API übermittelte Daten
          nicht zum Training der dortigen Modelle verwendet. Wir verkaufen
          Kundendaten nicht, nutzen sie nicht für Werbung und verwenden sie nicht
          zum Training eigener KI-Modelle.
        </p>
        <p>
          Zwei Grenzen sind in der Plattform selbst verankert und nicht bloß in
          dieser Erklärung. Sachangaben in erzeugten Texten stammen ausschließlich
          aus Daten, die das Maklerbüro bestätigt hat; die Plattform erfindet
          daher keine Objektangaben. Und KI-gestagte Bilder tragen den Hinweis
          „virtuell möbliert“ fest ins Bild gerendert, sodass ein gestagtes Foto
          überall dort als gestagt erkennbar bleibt, wo es veröffentlicht wird.
        </p>
        <p>
          <strong>Keine automatisierte Entscheidungsfindung.</strong> Immvela
          trifft keine Entscheidungen über Personen mit rechtlicher oder ähnlich
          erheblicher Wirkung im Sinne des Art. 22 DSGVO. Qualifiziert oder
          leitet ein Modul eine Anfrage weiter, sammelt und bereitet es
          Informationen für einen Menschen auf; es vereinbart keine Preise,
          Termine oder Vertragsbedingungen, und Verbindliches bestätigt stets ein
          Mensch.
        </p>

        <h3>4.5 Speicherung und Unterauftragsverarbeiter</h3>
        <p>
          Die Daten von Immvela werden in der Europäischen Union gespeichert:
        </p>
        <ul>
          <li>
            Datenbank, Authentifizierung und Dateispeicher:{' '}
            <strong>Supabase</strong>, gehostet in der EU (eu-central-1,
            Frankfurt, Deutschland)
          </li>
          <li>
            Anwendungs-Hosting: <strong>Vercel</strong> (zur Datenverarbeitung
            durch Vercel siehe Abschnitt 3)
          </li>
          <li>
            Verarbeitung von Hintergrundjobs: <strong>Trigger.dev</strong>
          </li>
          <li>
            KI-Texterzeugung: <strong>Anthropic PBC</strong> (siehe Abschnitt
            4.4)
          </li>
        </ul>
        <p>
          Soweit ein Unterauftragsverarbeiter eine Übermittlung außerhalb der
          EU/des EWR umfasst, ist diese durch einen
          Auftragsverarbeitungsvertrag und die EU-Standardvertragsklauseln
          abgesichert.
        </p>

        <h3>4.6 Verbundene Veröffentlichungsplattformen</h3>
        <p>
          Jede verbundene Plattform (Meta/Facebook/Instagram, LinkedIn,
          Google/YouTube, TikTok) verarbeitet Daten nach ihrer eigenen
          Datenschutzerklärung und ihren Entwicklerbedingungen. Unsere Nutzung
          der über diese Plattformen erlangten Daten entspricht den jeweiligen
          Entwicklerrichtlinien und Nutzungsbedingungen.
        </p>

        <h3>4.7 Aufbewahrung, Löschung von Medien und Löschanträge</h3>
        <p>
          Kunden- und Kontodaten werden für die Dauer der Vereinbarung gespeichert
          und innerhalb von 30 Tagen nach Trennung des Kontos oder Beendigung
          gelöscht, sofern keine gesetzliche Aufbewahrungspflicht besteht.
        </p>
        <p>
          Medien, die ein Maklerbüro hochlädt oder erzeugen lässt, bleiben
          gespeichert, bis das Maklerbüro sie löscht oder sein Konto gelöscht
          wird.{' '}
          <strong>
            Eine automatische Löschung von Mediendateien findet derzeit nicht
            statt.
          </strong>{' '}
          Das Löschen unserer Kopie entfernt nichts, was bereits auf einer
          Drittplattform veröffentlicht wurde; dort gilt die Aufbewahrung der
          jeweiligen Plattform.
        </p>
        <p>
          Sind Sie Kauf-, Verkaufs- oder Mietinteressent und hält ein Maklerbüro
          Ihre Daten in Immvela, ist dieses Maklerbüro Ihr Verantwortlicher und
          die richtige erste Anlaufstelle für einen Löschantrag. Leitet ein
          Maklerbüro einen solchen Antrag an uns weiter, löschen wir die
          Datensätze dieser Person plattformweit, einschließlich abgeleiteter
          Datensätze, aus Dokumenten ausgelesener Werte, erzeugter Dokumente und
          gespeicherter Dateien. Wir führen dies innerhalb von 30 Tagen manuell
          durch; einen automatisierten Löschvorgang gibt es in der Anwendung
          derzeit nicht. Wir können festhalten, dass ein Geschäftsvorfall
          stattgefunden hat, sofern dieser die Person nicht mehr identifiziert und
          eine gesetzliche Aufbewahrungspflicht besteht. Maklerbüros können
          jederzeit die Löschung oder Trennung verlangen, indem sie sich an{' '}
          <a href="mailto:office@sns-austria.com">office@sns-austria.com</a>{' '}
          wenden. Eine Schritt-für-Schritt-Anleitung zur Löschung der über eine
          verbundene Veröffentlichungsplattform erhaltenen Daten finden Sie
          unter{' '}
          <a
            href="https://www.immvela.com/legal/data-deletion"
            target="_blank"
            rel="noopener noreferrer"
          >
            immvela.com/legal/data-deletion
          </a>
          .
        </p>

        <h3>4.8 Datensicherheit</h3>
        <p>
          Wir haben technische und organisatorische Sicherheitsvorkehrungen
          getroffen, um die Vertraulichkeit und Integrität der in Immvela
          verarbeiteten Daten zu schützen. Diese gelten auch für alle Daten, die
          wir von verbundenen Veröffentlichungsplattformen einschließlich Google
          und YouTube erhalten.
        </p>
        <ul>
          <li>
            <strong>Übertragung.</strong> Der gesamte Datenverkehr, zwischen dem
            Browser des Nutzers und Immvela ebenso wie zwischen Immvela und den
            Schnittstellen der Plattformen, erfolgt ausschließlich verschlüsselt
            über TLS (HTTPS).
          </li>
          <li>
            <strong>Zugangstoken der verbundenen Konten.</strong> Zugriffs- und
            Erneuerungstoken verbundener Konten, einschließlich der von Google
            und YouTube ausgestellten, sind das schutzbedürftigste Datum, das
            wir halten. Sie werden vor dem Speichern mit AES-256-GCM
            verschlüsselt. Der Schlüssel liegt ausschließlich in der
            Laufzeitumgebung und niemals in der Datenbank: ein Datenbankauszug
            allein genügt nicht, um Zugriff auf ein verbundenes Konto zu
            erlangen. Fehlt der Schlüssel, so verweigert das System im
            Produktivbetrieb das Speichern, statt Token im Klartext abzulegen.
          </li>
          <li>
            <strong>Speicherung.</strong> Datenbank und Dateispeicher werden von
            Supabase in der Europäischen Union betrieben (eu-central-1,
            Frankfurt, Deutschland) und sind dort im Ruhezustand verschlüsselt.
          </li>
          <li>
            <strong>Trennung der Mandanten.</strong> Jeder Datensatz ist genau
            einer Organisation zugeordnet, und diese Trennung wird an zwei
            Stellen geprüft: von der Anwendung bei jedem Zugriff und zusätzlich
            von der Datenbank selbst auf Zeilenebene (Row-Level-Security). Für
            Dateien im Medienspeicher prüft sie die Anwendung.
          </li>
          <li>
            <strong>Mediendateien.</strong> Fotos und Videos liegen in nicht
            öffentlichem Speicher und sind ausschließlich über kurzlebige,
            signierte Links erreichbar; es gibt keine öffentlich abrufbare
            Adresse einer dieser Dateien.
          </li>
          <li>
            <strong>Weitergabe.</strong> Wir verkaufen keine Daten, verwenden
            sie nicht für Werbung und geben sie außer an die in Abschnitt 4.5
            genannten Auftragsverarbeiter und die verbundenen
            Veröffentlichungsplattformen (Abschnitt 4.6) nicht weiter. Von
            Google und YouTube erhaltene Daten werden nicht an unseren
            KI-Dienstleister übermittelt und nicht zum Training von KI-Modellen
            verwendet.
          </li>
        </ul>
        <p>
          Unsere Nutzung der von Google APIs erhaltenen Daten entspricht der
          Google API Services User Data Policy, einschließlich der
          Limited Use-Anforderungen.
        </p>

        <h3>4.9 Nutzung der YouTube API Services</h3>
        <p>
          Für die Veröffentlichung auf YouTube nutzt Immvela die{' '}
          <strong>YouTube API Services</strong>. Mit der Nutzung dieser
          Funktionen stimmen Sie den{' '}
          <a
            href="https://www.youtube.com/t/terms"
            target="_blank"
            rel="noopener noreferrer"
          >
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
          <strong>Die angefragten Berechtigungen.</strong> Beim Verbinden eines
          YouTube-Kontos fragen wir bei Google genau zwei Berechtigungen an,
          nicht mehr, als die Funktionen benötigen:
        </p>
        <ul>
          <li>
            <strong>youtube.upload</strong>, um in Immvela ausgewählte Videos
            auf Ihren Kanal hochzuladen;
          </li>
          <li>
            <strong>youtube.readonly</strong>, um Name und Kennung Ihres Kanals
            anzuzeigen und die Gesamtzahl der Aufrufe, Likes und Kommentare zu
            den über Immvela veröffentlichten Videos abzurufen.
          </li>
        </ul>
        <p>
          <strong>Welche YouTube-Daten wir speichern.</strong> Zugriffs- und
          Erneuerungstoken (verschlüsselt), Kennung und Name Ihres Kanals, die
          Kennungen der über Immvela hochgeladenen Videos, die genannten
          Gesamtzahlen samt Abrufzeitpunkt sowie die Gültigkeitsdauer des Tokens
          und die Liste der erteilten Berechtigungen. Nichts darüber hinaus:
          keine Kommentartexte, keine Namen von Kommentierenden, keine
          Auswertungen zum Publikum, kein Wiedergabeverlauf, keine
          Abonnentenlisten.
        </p>
        <p>
          <strong>Was wir damit nie tun.</strong> YouTube-Daten werden nicht für
          Werbung verwendet, nicht verkauft oder an Dritte weitergegeben, nicht
          an unseren KI-Dienstleister übermittelt und nicht zum Training von
          KI-Modellen verwendet.
        </p>
        <p>
          <strong>Zugriff widerrufen.</strong> Sie können den Zugriff von
          Immvela auf Ihr Google-Konto jederzeit und unabhängig von Immvela über
          die{' '}
          <a
            href="https://security.google.com/settings/security/permissions"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google-Sicherheitseinstellungen
          </a>{' '}
          entziehen. Unabhängig davon löscht das Trennen eines verbundenen
          Kontos in Immvela die dort gespeicherten Token.
        </p>

        <h2>5. Server-Logfiles</h2>
        <p>
          Unser Hosting-Anbieter erhebt und speichert automatisch Informationen
          in Server-Logfiles, die Ihr Browser an uns übermittelt. Diese können
          umfassen:
        </p>
        <ul>
          <li>Anonymisierte / gekürzte IP-Adresse</li>
          <li>Datum und Uhrzeit der Anfrage</li>
          <li>Browsertyp und -version</li>
          <li>Betriebssystem</li>
          <li>Referrer-URL</li>
        </ul>
        <p>
          Diese Daten werden nicht mit anderen Datenquellen zusammengeführt und
          dienen ausschließlich der Gewährleistung des Betriebs, der Sicherheit
          und der Fehlerbehebung. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f
          DSGVO.
        </p>

        <h2>6. Analyse</h2>
        <p>
          Wir verwenden <strong>Vercel Analytics</strong>, einen
          datenschutzfreundlichen, cookielosen Analysedienst von Vercel Inc. Er
          misst aggregierte, anonyme Nutzungsstatistiken (wie Seitenaufrufe)
          ohne Cookies und ohne einzelne Besucher zu verfolgen oder zu
          identifizieren. Es werden keine seitenübergreifenden Profile erstellt.
          Rechtsgrundlage ist unser berechtigtes Interesse am Verständnis und
          der Verbesserung der Nutzung unserer Website (Art. 6 Abs. 1 lit. f
          DSGVO).
        </p>

        <h2>7. Cookies</h2>
        <p>
          Diese Website setzt keine Tracking- oder Werbe-Cookies. Es wird nur die
          technisch notwendige Speicherung verwendet, die zur Darstellung der
          Seite erforderlich ist. Da wir keine nicht-essenziellen Cookies
          verwenden, ist kein Cookie-Consent-Banner erforderlich.
        </p>

        <h2>8. Kontakt (E-Mail & Kontaktformular)</h2>
        <p>
          Wenn Sie uns per E-Mail kontaktieren, werden die von Ihnen angegebenen
          Daten (Ihre E-Mail-Adresse und der Inhalt Ihrer Nachricht)
          ausschließlich zur Bearbeitung Ihrer Anfrage verarbeitet.
        </p>
        <p>
          Unsere Website bietet außerdem ein Kontaktformular. Wenn Sie es
          absenden, verarbeiten wir die von Ihnen eingegebenen Angaben, nämlich
          Ihren Namen, Ihre E-Mail-Adresse, optional Ihre Telefonnummer, die von
          Ihnen gewählte Art der Leistung und Ihre Nachricht, um Ihre Anfrage zu
          beantworten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Maßnahmen
          vor Vertragsabschluss) oder Art. 6 Abs. 1 lit. f DSGVO (unser
          berechtigtes Interesse an der Beantwortung von Anfragen).
        </p>
        <p>
          Kontaktformular-Übermittlungen werden in unserem Auftrag von{' '}
          <strong>EmailJS</strong> (
          <a href="https://www.emailjs.com" target="_blank" rel="noopener noreferrer">
            emailjs.com
          </a>
          ) als Auftragsverarbeiter an unser Postfach zugestellt. Soweit damit
          eine Datenübermittlung außerhalb der EU/des EWR verbunden ist, wird sie
          durch geeignete Maßnahmen wie die EU-Standardvertragsklauseln
          abgesichert.
        </p>
        <p>
          Diese Daten werden gelöscht, sobald sie nicht mehr benötigt werden und
          keine gesetzlichen Aufbewahrungspflichten der Löschung entgegenstehen.
        </p>

        <h2>9. Speicherdauer</h2>
        <p>
          Wir speichern personenbezogene Daten nur so lange, wie es für die oben
          genannten Zwecke erforderlich ist oder gesetzliche
          Aufbewahrungsfristen (z. B. nach Steuer- und Handelsrecht) es
          verlangen. Danach werden die Daten gelöscht.
        </p>

        <h2>10. Ihre Rechte</h2>
        <p>Nach der DSGVO haben Sie das Recht auf:</p>
        <ul>
          <li>Auskunft über Ihre personenbezogenen Daten (Art. 15)</li>
          <li>Berichtigung unrichtiger Daten (Art. 16)</li>
          <li>Löschung (Art. 17)</li>
          <li>Einschränkung der Verarbeitung (Art. 18)</li>
          <li>Datenübertragbarkeit (Art. 20)</li>
          <li>
            Widerspruch gegen die Verarbeitung auf Grundlage berechtigter
            Interessen (Art. 21)
          </li>
        </ul>
        <p>
          Zur Ausübung dieser Rechte kontaktieren Sie uns unter{' '}
          <a href="mailto:office@sns-austria.com">office@sns-austria.com</a>.
        </p>

        <h2>11. Beschwerderecht</h2>
        <p>
          Sie haben das Recht, sich bei einer Aufsichtsbehörde zu beschweren. In
          Österreich ist dies die Datenschutzbehörde, Barichgasse 40–42, 1030
          Wien,{' '}
          <a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer">
            dsb.gv.at
          </a>
          .
        </p>

        <h2>12. Änderungen dieser Erklärung</h2>
        <p>
          Wir können diese Datenschutzerklärung aktualisieren, um Änderungen
          unserer Praktiken abzubilden oder aus rechtlichen Gründen. Die jeweils
          aktuelle Fassung ist stets auf dieser Seite verfügbar.
        </p>
      </div>
    </article>
  )
}
