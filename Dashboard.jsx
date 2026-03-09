import { createContext, useContext, useState } from 'react'

const AppContext = createContext(null)

export const STORES = ['Kroger', 'Publix', 'Walmart', 'Target', 'Aldi', 'Whole Foods']

export const MOCK_BUDDIES = {
  Kroger: [
    { id: 1, name: 'Maria S.', rating: 4.9, deals: 23, avatar: '🧑‍🦱', status: 'active' },
    { id: 2, name: 'James T.', rating: 4.7, deals: 15, avatar: '👩‍🦰', status: 'active' },
  ],
  Publix: [
    { id: 3, name: 'DeShawn K.', rating: 5.0, deals: 31, avatar: '🧔', status: 'active' },
  ],
}

export const MOCK_DEALS = [
  { id: 1, item: 'Ragu Pasta Sauce', store: 'Kroger', price: '$3.99', postedBy: 'You', time: '2m ago', status: 'open' },
  { id: 2, item: 'Tropicana OJ (64oz)', store: 'Publix', price: '$5.49', postedBy: 'Maria S.', time: '1h ago', status: 'scheduled' },
]

export function AppProvider({ children }) {
  const [selectedStores, setSelectedStores] = useState([])
  const [zip, setZip] = useState('')
  const [activeStore, setActiveStore] = useState('Kroger')
  const [checkedIn, setCheckedIn] = useState(false)
  const [scheduleData, setScheduleData] = useState({ buddy: '', date: '', time: '' })
  const [deals, setDeals] = useState(MOCK_DEALS)
  const [chatMessages, setChatMessages] = useState([
    { id: 1, from: 'Maria S.', text: 'Hey! I saw your pasta sauce deal 👀', time: '2:31pm' },
    { id: 2, from: 'you', text: 'Yes! BOGO at Kroger, ends Sunday', time: '2:32pm' },
    { id: 3, from: 'Maria S.', text: "I'm in! When are you heading there?", time: '2:33pm' },
  ])

  const toggleStore = (s) => {
    setSelectedStores(prev =>
      prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]
    )
  }

  const addDeal = (deal) => {
    setDeals(prev => [{ ...deal, id: Date.now(), time: 'just now', status: 'open' }, ...prev])
  }

  const sendMessage = (text) => {
    const now = new Date()
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    setChatMessages(prev => [...prev, { id: Date.now(), from: 'you', text, time }])
  }

  const myStores = selectedStores.length > 0 ? selectedStores : ['Kroger', 'Publix']

  return (
    <AppContext.Provider value={{
      selectedStores, zip, setZip, toggleStore, myStores,
      activeStore, setActiveStore,
      checkedIn, setCheckedIn,
      scheduleData, setScheduleData,
      deals, addDeal,
      chatMessages, sendMessage,
    }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  return useContext(AppContext)
}
