import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import { ToastProvider } from './components/Toast'
import BottomNav from './components/BottomNav'

import Onboarding from './screens/Onboarding'
import Dashboard  from './screens/Dashboard'
import PostDeal   from './screens/PostDeal'
import Schedule   from './screens/Schedule'
import Meetup     from './screens/Meetup'
import Chat       from './screens/Chat'
import Buddies    from './screens/Buddies'

const NO_NAV_ROUTES = ['/', '/onboarding']

function Layout() {
  const { pathname } = useLocation()
  const showNav = !NO_NAV_ROUTES.includes(pathname)

  return (
    <div
      className="flex flex-col bg-cream overflow-hidden relative"
      style={{
        height: '100dvh',
        maxWidth: 480,
        margin: '0 auto',
        boxShadow: '0 0 60px rgba(0,0,0,0.3)',
      }}
    >
      <ToastProvider />

      <div className={`flex flex-col flex-1 overflow-hidden ${showNav ? 'pb-0' : ''}`}>
        <Routes>
          <Route path="/"           element={<Navigate to="/onboarding" replace />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/dashboard"  element={<Dashboard />} />
          <Route path="/post"       element={<PostDeal />} />
          <Route path="/schedule"   element={<Schedule />} />
          <Route path="/meetup"     element={<Meetup />} />
          <Route path="/chat"       element={<Chat />} />
          <Route path="/buddies"    element={<Buddies />} />
          <Route path="*"           element={<Navigate to="/onboarding" replace />} />
        </Routes>
      </div>

      {showNav && <BottomNav />}
    </div>
  )
}

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </AppProvider>
  )
}
