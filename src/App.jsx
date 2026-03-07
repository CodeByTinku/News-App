import './App.css'
import Category from './component/Category'
import Footer from './component/Footer'
import Navbar from './component/Navbar'
import News from './page/News'

import { useNewsContext } from './context/NewsContext'

function App() {
  const { theme } = useNewsContext();

  return (
    <div data-theme={theme} className="min-h-screen">
      <Navbar className={'sticky top-0 z-20'} />

      <Category className="py-10 sticky top-14 z-10 bg-base-100" />

      <News className={'pb-10'} />

      <Footer />
    </div>
  )
}

export default App
