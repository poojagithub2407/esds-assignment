// App.jsx
import React from 'react'
import Header from './components/Header'
import { ThemeProvider } from './context/ThemeContext'

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen text-white bg-gradient-to-r from-blue-800 to-blue-300 dark:from-gray-800 dark:to-gray-600">
        <Header />
      </div>
    </ThemeProvider>
  )
}

export default App
