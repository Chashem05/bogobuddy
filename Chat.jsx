@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  -webkit-tap-highlight-color: transparent;
  box-sizing: border-box;
}

html, body, #root {
  height: 100%;
  height: -webkit-fill-available;
  overflow: hidden;
}

body {
  background: #1b4332;
  font-family: Georgia, serif;
  margin: 0;
  padding: 0;
}

input, select, textarea, button {
  font-family: Georgia, serif;
}

/* Custom scrollbar */
::-webkit-scrollbar { width: 0; background: transparent; }

.screen-scroll {
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  flex: 1;
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

.animate-slide-up {
  animation: slideUp 0.25s ease forwards;
}

.animate-fade-in {
  animation: fadeIn 0.2s ease forwards;
}
