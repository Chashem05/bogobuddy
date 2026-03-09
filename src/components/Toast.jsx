import { useState, useEffect, useCallback } from 'react'

let toastFn = null

export function useToast() {
  return useCallback((msg) => {
    if (toastFn) toastFn(msg)
  }, [])
}

export function ToastProvider() {
  const [toast, setToast] = useState(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    toastFn = (msg) => {
      setToast(msg)
      setVisible(true)
      setTimeout(() => setVisible(false), 2400)
    }
    return () => { toastFn = null }
  }, [])

  if (!toast) return null

  return (
    <div
      className={`fixed top-16 left-1/2 z-50 pointer-events-none transition-all duration-250
        ${visible ? 'opacity-100 -translate-x-1/2 translate-y-0' : 'opacity-0 -translate-x-1/2 -translate-y-2'}`}
      style={{ transitionProperty: 'opacity, transform' }}
    >
      <div className="bg-lime text-black font-mono font-bold text-sm px-5 py-2.5 rounded-full shadow-lg whitespace-nowrap">
        {toast}
      </div>
    </div>
  )
}
