import { useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { BackHeader, Button } from '../components/UI'
import { useToast } from '../components/Toast'

export default function Meetup() {
  const navigate = useNavigate()
  const { scheduleData, checkedIn, setCheckedIn, setActiveStore } = useApp()
  const toast = useToast()

  const buddy = scheduleData.buddy || 'Maria S.'
  const timeStr = scheduleData.time || '10:00 AM'
  const dateStr = scheduleData.date
    ? new Date(scheduleData.date + 'T12:00:00').toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })
    : 'Sunday, March 15'

  const handleCheckIn = () => {
    setCheckedIn(true)
    toast('Checked in! 📍')
  }

  return (
    <div className="screen-scroll bg-cream px-5 pt-5">
      <BackHeader title="Live Meetup" onBack={() => navigate('/dashboard')} />

      {/* Run card */}
      <div
        className="rounded-2xl p-5 mb-5 text-center text-white"
        style={{ background: 'linear-gradient(135deg, #1b4332, #2d6a4f)' }}
      >
        <p className="font-mono text-xs tracking-widest text-white/60 mb-1">TODAY'S RUN</p>
        <h3 className="text-xl font-black text-white m-0">Kroger · Brandon</h3>
        <p className="text-white/80 text-sm mt-2">{dateStr} · {timeStr}</p>
        <p className="text-lime font-bold text-sm mt-1">with {buddy}</p>
      </div>

      {/* BOGO target */}
      <div className="bg-amber-50 rounded-2xl p-4 mb-4 border border-amber-200">
        <p className="font-mono text-xs tracking-widest text-amber-700 mb-1">BOGO TARGET</p>
        <p className="font-black text-base text-forest-800 m-0">Ragu Pasta Sauce</p>
        <p className="text-xs text-gray-400 mt-1">$3.99 each · You save $3.99 total</p>
      </div>

      {/* Check-in */}
      <p className="font-mono text-xs tracking-widest text-gray-400 uppercase mb-2.5">ARRIVAL CHECK-IN</p>
      <div className="flex gap-2.5 mb-4">
        <CheckInCard
          name="You"
          arrived={checkedIn}
          onCheck={handleCheckIn}
        />
        <CheckInCard
          name={buddy}
          arrived={false}
          pending
        />
      </div>

      {checkedIn && (
        <div className="bg-forest-100 rounded-2xl p-4 border border-green-300 mb-3 animate-slide-up">
          <p className="font-bold text-forest-800 text-sm m-0">✅ You're checked in!</p>
          <p className="text-gray-500 text-xs mt-1">Waiting for {buddy} to arrive… sent a ping!</p>
        </div>
      )}

      <Button
        variant="green"
        onClick={() => { setActiveStore('Kroger'); navigate('/chat') }}
      >
        💬 Chat with {buddy}
      </Button>
    </div>
  )
}

function CheckInCard({ name, arrived, onCheck, pending }) {
  return (
    <div className={`flex-1 bg-white rounded-2xl p-3.5 text-center border-2 transition-all ${arrived ? 'border-lime' : 'border-gray-100'}`}>
      <p className="font-black text-sm text-forest-800 m-0 mb-2">{name}</p>
      <button
        onClick={!pending && !arrived ? onCheck : undefined}
        className={`rounded-full px-4 py-1.5 text-xs font-mono font-bold border-none
          ${arrived ? 'bg-lime text-black' : 'bg-gray-100 text-gray-400'}
          ${pending ? 'cursor-default' : 'cursor-pointer'}`}
      >
        {arrived ? '✓ HERE' : pending ? 'Pending…' : "I'm Here!"}
      </button>
    </div>
  )
}
