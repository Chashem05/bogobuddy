import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp, MOCK_BUDDIES } from '../context/AppContext'
import { BackHeader } from '../components/UI'

export default function Chat() {
  const navigate = useNavigate()
  const { activeStore, chatMessages, sendMessage } = useApp()
  const [input, setInput] = useState('')
  const messagesEndRef = useRef(null)

  const storeBuddyNames = (MOCK_BUDDIES[activeStore] || []).map(b => b.name).join(', ')

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [chatMessages])

  const handleSend = () => {
    if (!input.trim()) return
    sendMessage(input.trim())
    setInput('')
  }

  return (
    <div className="flex flex-col h-full bg-cream overflow-hidden">
      {/* Header */}
      <div className="px-5 pt-4 pb-3 border-b border-gray-100 bg-cream flex-shrink-0">
        <BackHeader
          title={`${activeStore} Buddies`}
          subtitle={storeBuddyNames || 'No buddies yet'}
          onBack={() => navigate('/dashboard')}
        />
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-2.5" style={{ WebkitOverflowScrolling: 'touch' }}>
        {chatMessages.map(m => (
          <div key={m.id} className={`flex ${m.from === 'you' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-[75%] px-3.5 py-2.5 text-sm leading-relaxed
                ${m.from === 'you'
                  ? 'bg-forest-800 text-white rounded-[18px_18px_4px_18px]'
                  : 'bg-white text-gray-800 rounded-[18px_18px_18px_4px] shadow-sm'
                }`}
            >
              {m.from !== 'you' && (
                <p className="text-xs font-bold text-green-600 m-0 mb-0.5">{m.from}</p>
              )}
              <p className="m-0">{m.text}</p>
              <p className={`text-xs mt-1 text-right ${m.from === 'you' ? 'text-white/40' : 'text-gray-300'}`}>
                {m.time}
              </p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div
        className="px-3.5 py-2.5 border-t border-gray-100 bg-white flex gap-2 flex-shrink-0"
        style={{ paddingBottom: 'calc(0.625rem + env(safe-area-inset-bottom, 0px))' }}
      >
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSend()}
          placeholder="Message your buddies…"
          className="flex-1 px-3.5 py-2.5 rounded-xl border border-gray-200 bg-white text-base outline-none focus:border-forest-800"
        />
        <button
          onClick={handleSend}
          className="w-11 h-11 bg-forest-800 text-white border-none rounded-xl text-lg cursor-pointer flex items-center justify-center flex-shrink-0 active:bg-forest-900"
        >
          ↑
        </button>
      </div>
    </div>
  )
}
