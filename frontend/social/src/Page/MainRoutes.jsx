import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import UserForm from './UserForm'
import PostForm from './PostForm'

const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/users' element={<UserForm/>}/>
            <Route path='/postusers' element={<PostForm/>}/>
        </Routes>
    </div>
  )
}

export default MainRoutes