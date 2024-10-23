
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks , setBookmarks] = useState([]);

  const handelBookmarks = (blog) =>{
    const newBookmarks = [...bookmarks , blog];
    setBookmarks(newBookmarks)
  }

  return (
    <>
      <Header></Header>
      <main className='md:flex max-w-7xl mx-auto py-4 gap-5'>
        <Blogs handelBookmarks={handelBookmarks}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </main>
    </>
  )
}

export default App
