'use client'

import { useEffect, useState } from 'react'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true')
    setVisible(false)
  }

  const handleReject = () => {
    // Aggiungi qui le azioni da eseguire se l'utente rifiuta i cookie
    setVisible(false)
  }

  if (!visible) {
    return null
  }

  return (
    <div className="fixed bottom-0 flex w-full items-center justify-between bg-gray-800 p-4 text-white">
      <p className="m-0">
        Questo sito utilizza i cookie per migliorare l&apos;esperienza
        dell&apos;utente.{' '}
        <a href="/cookie-policy" className="text-[#c30d23] underline">
          Leggi di più
        </a>
      </p>
      <div>
        <button
          onClick={handleAccept}
          className="mr-2 rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
        >
          Accetta
        </button>
        <button
          onClick={handleReject}
          className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
        >
          Rifiuta e continua
        </button>
      </div>
    </div>
  )
}
