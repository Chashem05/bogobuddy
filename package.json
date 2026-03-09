import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp, STORES } from '../context/AppContext'
import { BackHeader, Label, Input, Select, Button } from '../components/UI'
import { useToast } from '../components/Toast'

export default function PostDeal() {
  const navigate = useNavigate()
  const { myStores, addDeal } = useApp()
  const toast = useToast()

  const [form, setForm] = useState({ store: myStores[0] || 'Kroger', item: '', price: '', note: '' })
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const handlePost = () => {
    if (!form.item.trim()) { toast('Enter an item name first!'); return }
    addDeal(form)
    toast('Deal posted! Buddies notified 🔔')
    setTimeout(() => navigate('/dashboard'), 350)
  }

  return (
    <div className="screen-scroll bg-cream px-5 pt-5">
      <BackHeader title="Post a Deal" onBack={() => navigate('/dashboard')} />
      <p className="text-sm text-gray-500 mb-2">Spotted a BOGO? Let your buddies know!</p>

      <Label>Store</Label>
      <Select value={form.store} onChange={e => set('store', e.target.value)}>
        {myStores.map(s => <option key={s}>{s}</option>)}
      </Select>

      <Label>Item Name</Label>
      <Input
        placeholder="e.g. Ragu Pasta Sauce"
        value={form.item}
        onChange={e => set('item', e.target.value)}
      />

      <Label>Price (each)</Label>
      <Input
        placeholder="e.g. $3.99"
        inputMode="decimal"
        value={form.price}
        onChange={e => set('price', e.target.value)}
      />

      <Label>Note (optional)</Label>
      <Input
        placeholder="e.g. Aisle 7, ends Sunday"
        value={form.note}
        onChange={e => set('note', e.target.value)}
      />

      <Button variant="green" onClick={handlePost} className="mt-6">
        📣 Notify My Buddies
      </Button>
    </div>
  )
}
