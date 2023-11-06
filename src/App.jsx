import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AllBlogs from './pages/AllBlogs/AllBlogs'
import CreateBlogs from './pages/CreateBlogs/CreateBlogs'
import EditBlogs from './pages/EditBlogs/EditBlogs'
import SingleBlogs from './pages/SingleBlogs/SingleBlogs'

const App = () => {
  return (
   
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AllBlogs />} />
      <Route path='/CreateBlogs' element={<CreateBlogs/>} />
      <Route path='/EditBlogs' element={<EditBlogs />} />
      <Route path='SingleBlogs' element={<SingleBlogs />} />
    </Routes>
    
    </BrowserRouter>
  )
}

export default App