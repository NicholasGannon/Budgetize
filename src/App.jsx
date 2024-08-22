import './App.css'
import Header from './components/Header'
import Dashboard from './components/Dashboard'

export default function App() {
  return (
    <div className='container-xl mx-auto px-4'>
      <Header />
      <Dashboard />
    </div>
  )
}
