import { Header } from './Header'
import { Footer } from './Footer'
import CookieConsent from '../CookieConsent'

export const metadata = {
  title: 'Cookie Policy',
}

export default function Register() {
  return (
    <>
      <Header />
      <div className="container mx-auto max-w-2xl px-5 py-10">
        <div>
          <h1 className="text-3xl font-bold text-[#c30d23]">Cookie Policy</h1>
          <p className="text-gray-600">Ultimo aggiornamento: 18 maggio 2024</p>
        </div>
        <div className="mt-8">
          <div>
            <p className="text-gray-600">
              Tuttomeno.com ("noi", "nostro" o "sito") utilizza i cookie per
              migliorare l'esperienza dell'utente e garantire il corretto
              funzionamento del sito. La presente Cookie Policy spiega cosa sono
              i cookie, come li utilizziamo e le opzioni disponibili per
              gestirli.
            </p>
          </div>
          <div className="mt-8">
            <h1 className="text-2xl font-bold text-gray-700">
              1. Cosa sono i cookie?
            </h1>
            <p className="text-gray-600">
              I cookie sono piccoli file di testo che vengono memorizzati sul
              tuo dispositivo (computer, tablet, smartphone) quando visiti un
              sito web. Essi permettono al sito di ricordare le tue azioni e
              preferenze (come login, lingua, dimensioni dei caratteri e altre
              preferenze di visualizzazione) per un certo periodo di tempo, in
              modo da non doverle reinserire ogni volta che torni sul sito o
              navighi da una pagina all'altra.
            </p>
          </div>
          <div className="mt-8">
            <h1 className="text-2xl font-bold text-gray-700">
              2. Utilizzo dei cookie su Tuttomeno.com
            </h1>
            <p className="text-gray-600">
              Al momento, Tuttomeno.com non utilizza cookie per raccogliere,
              memorizzare o tracciare informazioni. Ci impegniamo a garantire
              che la tua esperienza sul nostro sito sia sicura e rispettosa
              della tua privacy.
            </p>
          </div>
          <div className="mt-8">
            <h1 className="text-2xl font-bold text-gray-700">
              3. Modifiche future alla Cookie Policy
            </h1>
            <p className="text-gray-600">
              Se in futuro dovessimo decidere di utilizzare i cookie,
              aggiorneremo questa Cookie Policy per riflettere tali cambiamenti.
              Ti informeremo adeguatamente e ti forniremo tutte le informazioni
              necessarie sulle nuove pratiche relative ai cookie, incluse le
              modalità di gestione e controllo dei cookie.
            </p>
          </div>
          <div className="mt-8">
            <h1 className="text-2xl font-bold text-gray-700">4. Contatti</h1>
            <p className="text-gray-600">
              Se hai domande o preoccupazioni riguardo alla nostra Cookie Policy
              o alle nostre pratiche in materia di privacy, puoi contattarci
              all'indirizzo email:{' '}
              <a href="mailto:info@tuttomeno.it" className="text-blue-500">
                info@tuttomeno.it
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <Footer />
      <CookieConsent />
    </>
  )
}
