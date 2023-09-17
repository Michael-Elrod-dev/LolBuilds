import './globals.css'
import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hello World App',
  description: 'A simple Hello World application',
}

export default function RootLayout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <html lang="en" className={darkMode ? 'dark' : ''}>
      <body className={inter.className}>
        <nav>
          <a href="/profile">Profile</a>
          <a href="/champions">Champions</a>
          <a href="/players">Players</a>
          <a href="/items">Items</a>
          <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
        </nav>
        {children}
      </body>
    </html>
  )
}
