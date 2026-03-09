import { useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { BackHeader, Label, Input, Button } from '../components/UI'
import { useToast } from '../components/Toast'

const ALL_BUDDIES = ['Maria S.', 'James T.', 'DeShawn K.']
const TIMES = ['8:00 AM', '10:00 AM', '12:00 PM', '2:00 PM', '4:00 PM', '6:00 PM']

export default function Schedule() {
  const navigate = useNavigate()
  const { scheduleData, setScheduleData } = useApp()
  const toast = useToast()

  const set = (k, v) => setScheduleData(s => ({ ...s, [k]: v }))
  const { buddy, date, time } = scheduleData
  const valid = buddy && date && time

  const handleSchedule = () => {
    if (!valid) { toast('Fill in all fields first!'); return }
    toast('Store run scheduled! ✅')
    setTimeout(() => navigate('/meetup'), 350)
  }

  return (
    <div className="screen-scroll bg-cream px-5 pt-5">
      <BackHeader title="Schedule Store Run" onBack={() => navigate('/dashboard')} />
      <p className="text-sm text-gray-500 mb-4">Pick a time to shop with your buddy.</p>

      <Label>Select Buddy</Label>
      <div className="flex flex-wrap gap-2 mb-1">
        {ALL_BUDDIES.map(b => (
          <button
            key={b}
            onClick={() => set('buddy', b)}
            className={`px-4 py-2 rounded-full border-2 font-serif text-sm font-semibold cursor-pointer transition-all
              ${buddy === b ? 'bg-forest-800 text-white border-forest-800' : 'bg-white text-gray-700 border-gray-200'}`}
          >
            {b}
          </button>
        ))}
      </div>

      <Label>Date</Label>
      <Input
        type="date"
        value={date}
        onChange={e => set('date', e.target.value)}
        min={new Date().toISOString().split('T')[0]}
      />

      <Label>Time</Label>
      <div className="flex flex-wrap gap-2 mt-1 mb-2">
        {TIMES.map(t => (
          <button
            key={t}
            onClick={() => set('time', t)}
            className={`px-3.5 py-2 rounded-full border-2 font-serif text-sm cursor-pointer transition-all
              ${time === t ? 'border-lime bg-green-50' : 'border-gray-200 bg-white text-gray-700'}`}
          >
            {t}
          </button>
        ))}
      </div>

      <Button variant={valid ? 'green' : 'grey'} disabled={!valid} onClick={handleSchedule} className="mt-4">
        📅 Send Invite to Buddy
      </Button>
    </div>
  )
}
