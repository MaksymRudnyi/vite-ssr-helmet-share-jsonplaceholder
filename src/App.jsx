import { Route, Routes} from 'react-router-dom'
import './App.css'
import { Home, User, Post, Album} from './pages'
import { Footer } from './components/Footer.jsx'

function App({fullUrl, users, posts, albums}) {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Home users={users}/>} />
        <Route path="/user/:id" element={<User users={users}/>} />
        <Route path="/post/:id" element={<Post posts={posts}/>} />
        <Route path="/album/:id" element={<Album albums={albums}/>} />
      </Routes>
      <Footer fullUrl={fullUrl}/>
    </>
  )
}

export default App
