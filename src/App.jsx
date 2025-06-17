import Cards from './components/Dashboard/Cards'
import Header from './components/Header/Header'
import { ThemeProvider } from './context/ThemeContext'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen text-white bg-gradient-to-r from-blue-800 to-blue-300 dark:from-gray-800 dark:to-gray-600">
        <Header />
        <Dashboard/>
      </div>
    </ThemeProvider>
  )
}

export default App
