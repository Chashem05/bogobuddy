import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp, STORES } from '../context/AppContext'
import { StepBar, Button, Chip, Input } from '../components/UI'

export default function Onboarding() {
  const [step, setStep] = useState(0)
  const { zip, setZip, selectedStores, toggleStore } = useApp()
  const navigate = useNavigate()

  if (step === 0) return <Splash onStart={() => setStep(1)} />
  if (step === 1) return <ZipStep zip={zip} setZip={setZip} onNext={() => setStep(2)} />
  if (step === 2) return <StoresStep selected={selectedStores} toggle={toggleStore} onNext={() => setStep(3)} />
  return <MatchedStep onDone={() => navigate('/dashboard')} />
}

function Splash({ onStart }) {
  return (
    <div
      className="flex flex-col items-center justify-center text-center px-8 min-h-screen"
      style={{ background: 'linear-gradient(160deg, #1b4332 0%, #2d6a4f 100%)' }}
    >
      <div className="text-8xl mb-5 animate-fade-in">🛒</div>
      <h1
        className="text-5xl font-black text-white leading-none mb-4 animate-slide-up"
        style={{ animationDelay: '0.1s', opacity: 0 }}
      >
        Bogo<br />Buddy
      </h1>
      <p
        className="text-white/70 text-lg leading-relaxed max-w-xs animate-slide-up"
        style={{ animationDelay: '0.2s', opacity: 0 }}
      >
        Split BOGO deals with a neighbor.<br />Shop smarter, save together.
      </p>
      <div
        className="w-full max-w-xs mt-8 animate-slide-up"
        style={{ animationDelay: '0.3s', opacity: 0 }}
      >
        <Button variant="lime" onClick={onStart}>Get Started →</Button>
      </div>
    </div>
  )
}

function ZipStep({ zip, setZip, onNext }) {
  const valid = zip.length >= 5
  return (
    <div className="bg-cream min-h-screen p-6">
      <StepBar current={1} total={3} />
      <h2 className="text-2xl font-black text-forest-800 mb-2">What's your zip code?</h2>
      <p className="text-gray-500 text-sm mb-6">We'll match you with buddies nearby.</p>
      <label className="block font-mono text-xs tracking-widest text-gray-400 uppercase mb-1.5">ZIP CODE</label>
      <Input
        type="tel"
        inputMode="numeric"
        maxLength={5}
        placeholder="e.g. 33511"
        value={zip}
        onChange={e => setZip(e.target.value)}
        autoFocus
      />
      <Button variant={valid ? 'green' : 'grey'} disabled={!valid} onClick={onNext}>
        Next →
      </Button>
    </div>
  )
}

function StoresStep({ selected, toggle, onNext }) {
  const valid = selected.length > 0
  return (
    <div className="bg-cream min-h-screen p-6">
      <StepBar current={2} total={3} />
      <h2 className="text-2xl font-black text-forest-800 mb-2">Where do you shop?</h2>
      <p className="text-gray-500 text-sm mb-4">Select all your regular stores.</p>
      <div className="mt-2">
        {STORES.map(s => (
          <Chip key={s} selected={selected.includes(s)} onClick={() => toggle(s)}>{s}</Chip>
        ))}
      </div>
      <Button variant={valid ? 'green' : 'grey'} disabled={!valid} onClick={onNext} className="mt-8">
        Next →
      </Button>
    </div>
  )
}

function MatchedStep({ onDone }) {
  return (
    <div className="bg-cream min-h-screen p-6 flex flex-col items-center justify-center text-center">
      <StepBar current={3} total={3} />
      <div className="text-6xl mb-5">🎉</div>
      <h2 className="text-2xl font-black text-forest-800 mb-3">You're all set!</h2>
      <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
        We found <strong className="text-forest-800">3 buddies</strong> near you across your stores. Time to start saving!
      </p>
      <div className="w-full max-w-xs mt-8">
        <Button variant="green" onClick={onDone}>Meet My Buddies →</Button>
      </div>
    </div>
  )
}
