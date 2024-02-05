import Link from 'next/link'

import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'
import { SlimLayout } from '@/components/SlimLayout'
import { Header } from './Header'
import { Footer } from './Footer'

export const metadata = {
  title: 'Privacy Policy',
}

export default function Register() {
  return (
    <>
      <Header />
      <div class="container mx-auto max-w-2xl py-10">
        <div>
          <h1 class="text-3xl font-bold text-blue-500">Privacy Policy</h1>
          <p class="text-gray-600">Ultimo aggiornamento: 5 febbraio 2024</p>
        </div>
        <div class="mt-8">
          <div>
            <h1 class="text-2xl font-bold text-gray-700">
              Informazioni raccolte
            </h1>
            <p class="text-gray-600">
              Quando visiti Tuttomeno.com e fornisci i tuoi dati di contatto
              tramite i nostri moduli o altri strumenti di comunicazione
              disponibili, potremmo raccogliere le seguenti informazioni
              personali:
            </p>
            <ul class="ml-8 list-disc">
              <li>Nome</li>
              <li>Indirizzo email</li>
              <li>Numero di telefono</li>
              <li>Altre informazioni di contatto</li>
            </ul>
          </div>
          <div class="mt-8">
            <h1 class="text-2xl font-bold text-gray-700">
              Utilizzo delle informazioni
            </h1>
            <p class="text-gray-600">
              Utilizziamo le informazioni personali raccolte per le seguenti
              finalità:
            </p>
            <ul class="ml-8 list-disc">
              <li>
                Per contattarti e fornirti assistenza in merito ai servizi
                offerti da Tuttomeno.com.
              </li>
              <li>
                Per inviarti comunicazioni informative riguardanti i nostri
                servizi, quali aggiornamenti, offerte speciali o promozioni.
              </li>
              <li>
                Per migliorare la tua esperienza utente e personalizzare il
                contenuto offerto su Tuttomeno.com.
              </li>
              <li>
                Per rispondere alle tue richieste e fornirti il supporto
                necessario.
              </li>
            </ul>
          </div>
          <div class="mt-8">
            <h1 class="text-2xl font-bold text-gray-700">
              Condivisione delle informazioni
            </h1>
            <p class="text-gray-600">
              Non condivideremo, venderemo o affitteremo le tue informazioni
              personali a terze parti senza il tuo consenso, tranne nei casi
              previsti dalla legge o come descritto nella presente Privacy
              Policy.
            </p>
          </div>
          <div class="mt-8">
            <h1 class="text-2xl font-bold text-gray-700">
              Protezione delle informazioni
            </h1>
            <p class="text-gray-600">
              Adottiamo misure di sicurezza appropriate per proteggere le tue
              informazioni personali da accessi non autorizzati, modifiche,
              divulgazioni o distruzioni non autorizzate.
            </p>
          </div>
          <div class="mt-8">
            <h1 class="text-2xl font-bold text-gray-700">
              Modifiche alla Privacy Policy
            </h1>
            <p class="text-gray-600">
              Possiamo aggiornare periodicamente questa Privacy Policy per
              riflettere le modifiche nelle nostre pratiche relative alla
              privacy. Ti consigliamo di rivedere regolarmente questa
              informativa per essere informato su come proteggiamo le tue
              informazioni personali.
            </p>
          </div>
          <div class="mt-8">
            <h1 class="text-2xl font-bold text-gray-700">Contatti</h1>
            <p class="text-gray-600">
              Se hai domande, dubbi o richieste riguardanti questa Privacy
              Policy o il modo in cui trattiamo le tue informazioni personali,
              contattaci all&apos;indirizzo email{' '}
              <a href="mailto:info@tuttomeno.it" class="text-blue-500">
                info@tuttomeno.it
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
