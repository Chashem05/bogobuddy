import { useNavigate, useLocation } from 'react-router-dom'

const NAV_ITEMS = [
  { icon: '🏠', label: 'HOME',     path: '/dashboard' },
  { icon: '📣', label: 'POST',     path: '/post' },
  { icon: '📅', label: 'SCHEDULE', path: '/schedule' },
  { icon: '💬', label: 'CHAT',     path: '/chat' },
  { icon: '👥', label: 'BUDDIES',  path: '/buddies' },
]

export default function BottomNav() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <nav
      className="flex border-t border-gray-100 bg-white flex-shrink-0"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      {NAV_ITEMS.map(item => {
        const active = pathname === item.path
        return (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className="flex-1 flex flex-col items-center gap-0.5 py-2 border-none bg-transparent cursor-pointer"
          >
            <span className="text-xl leading-none">{item.icon}</span>
            <span className={`font-mono text-xs tracking-tight ${active ? 'text-forest-800 font-black' : 'text-gray-400'}`}>
              {item.label}
            </span>
          </button>
        )
      })}
    </nav>
  )
}
