import { useNavigate } from 'react-router-dom'
import { useApp, MOCK_BUDDIES } from '../context/AppContext'
import { BackHeader, MonoLabel, Card } from '../components/UI'
import { useToast } from '../components/Toast'

export default function Buddies() {
  const navigate = useNavigate()
  const { myStores } = useApp()
  const toast = useToast()

  const storesWithBuddies = myStores.filter(s => MOCK_BUDDIES[s])

  return (
    <div className="screen-scroll bg-cream px-5 pt-5">
      <BackHeader title="My Buddies" onBack={() => navigate('/dashboard')} />

      {storesWithBuddies.length === 0 && (
        <div className="text-center py-12">
          <p className="text-5xl mb-3">🤷</p>
          <p className="text-gray-400 text-sm">No buddies yet for your stores.</p>
        </div>
      )}

      {storesWithBuddies.map(store => (
        <div key={store} className="mb-6">
          <MonoLabel className="mb-2.5">{store}</MonoLabel>

          {MOCK_BUDDIES[store].map(b => (
            <Card key={b.id} className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-full bg-forest-100 flex items-center justify-center text-2xl flex-shrink-0">
                {b.avatar}
              </div>
              <div className="flex-1">
                <p className="font-black text-sm text-forest-800 m-0">{b.name}</p>
                <p className="text-xs text-gray-400 mt-0.5">⭐ {b.rating} · {b.deals} deals split</p>
              </div>
              <button
                onClick={() => toast(`Looking for a new buddy for ${store}…`)}
                className="border border-gray-200 bg-white rounded-lg px-2.5 py-1.5 text-xs font-mono text-gray-400 cursor-pointer active:bg-gray-50"
              >
                Replace
              </button>
            </Card>
          ))}

          <button
            onClick={() => toast('Looking for more buddies nearby…')}
            className="w-full py-3 rounded-xl border-2 border-dashed border-gray-200 bg-transparent font-serif text-sm text-gray-400 cursor-pointer active:bg-gray-50"
          >
            + Add Another Buddy
          </button>
        </div>
      ))}

      {/* Stores without buddies yet */}
      {myStores.filter(s => !MOCK_BUDDIES[s]).map(store => (
        <div key={store} className="mb-6">
          <MonoLabel className="mb-2.5">{store}</MonoLabel>
          <div className="bg-white rounded-2xl p-4 border border-dashed border-gray-200 text-center">
            <p className="text-3xl mb-2">🔍</p>
            <p className="text-sm text-gray-400 m-0">Finding buddies near you…</p>
            <button
              onClick={() => toast('Searching for buddies nearby…')}
              className="mt-3 px-4 py-2 rounded-full bg-forest-800 text-white text-xs font-mono font-bold border-none cursor-pointer"
            >
              Search Now
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
