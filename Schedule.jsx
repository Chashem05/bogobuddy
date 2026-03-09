import { useNavigate } from 'react-router-dom'
import { useApp, MOCK_BUDDIES } from '../context/AppContext'
import { Card, MonoLabel, Badge, Button } from '../components/UI'
import { useToast } from '../components/Toast'

export default function Dashboard() {
  const { myStores, deals, setActiveStore } = useApp()
  const navigate = useNavigate()
  const toast = useToast()

  return (
    <div className="screen-scroll bg-cream px-5 pt-5 pb-4">
      {/* Header */}
      <div className="flex justify-between items-start mb-5">
        <div>
          <MonoLabel>GOOD MORNING</MonoLabel>
          <h2 className="text-2xl font-black text-forest-800 mt-1">My Stores</h2>
        </div>
        <button
          onClick={() => toast('Profile coming soon!')}
          className="w-10 h-10 rounded-full bg-forest-800 border-none text-lg cursor-pointer flex items-center justify-center"
        >
          👤
        </button>
      </div>

      {/* Store cards */}
      {myStores.map(store => (
        <Card key={store}>
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-base font-black text-forest-800 m-0">{store}</h3>
              <p className="text-xs text-gray-400 mt-0.5">
                {(MOCK_BUDDIES[store] || []).length} buddy{(MOCK_BUDDIES[store] || []).length !== 1 ? 's' : ''} matched
              </p>
            </div>
            <div className="flex gap-2">
              <ActionChip onClick={() => navigate('/schedule')}>📅 Schedule</ActionChip>
              <ActionChip onClick={() => { setActiveStore(store); navigate('/chat') }}>💬 Chat</ActionChip>
            </div>
          </div>
        </Card>
      ))}

      {/* Recent deals */}
      <MonoLabel className="mt-2 mb-2.5">RECENT DEALS</MonoLabel>
      {deals.map(d => (
        <div
          key={d.id}
          className={`rounded-xl px-3.5 py-3 mb-2 flex justify-between items-center border
            ${d.status === 'scheduled' ? 'bg-forest-100 border-green-300' : 'bg-white border-gray-100'}`}
        >
          <div>
            <p className="font-bold text-sm text-forest-800 m-0">{d.item}</p>
            <p className="text-xs text-gray-400 mt-0.5">{d.store} · {d.price} each · {d.time}</p>
          </div>
          <Badge status={d.status} />
        </div>
      ))}

      <Button variant="lime" onClick={() => navigate('/post')} className="mt-3 text-base font-black">
        + Post a BOGO Deal
      </Button>
    </div>
  )
}

function ActionChip({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-2.5 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-xs cursor-pointer font-serif text-gray-600 whitespace-nowrap active:bg-gray-100"
    >
      {children}
    </button>
  )
}
