import React from 'react'
import { BrowserRouter,Link,Route,Routes } from 'react-router-dom'
import { logo } from './assets'
import { Home, Posts } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center sm:px-8 bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-4 border-b border-purple-700 backdrop-blur-md shadow-lg">
        <Link to="/">
          <img src={logo} alt="logo" className="w-28 object-contain" />
        </Link>
        <Link to="/posts" className="font-inter font-medium bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-full">
          Create
        </Link>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-gradient-to-r from-purple-500 to-pink-500 min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}
export default App
