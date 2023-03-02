import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Questions from './pages/Questions/Questions'
import Auth from './pages/Auth/Auth'
import Home from './pages/Home/Home'
import AskQuestion from './components/AskQuestion/AskQuestion'
import DisplayQuestions from './pages/Questions/DisplayQuestions'
import Tags from './pages/Tags/Tags'
import Users from './pages/Users/Users'
const AllRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Auth' element={<Auth />} />
            <Route path='/Questions' element={<Questions />} />
            <Route path='/Questions/:id' element={<DisplayQuestions />} />
            <Route path='/AskQuestion' element={<AskQuestion />} />
            <Route path='/Tags' element={<Tags />} />
            <Route path='/Users' element={<Users />} />
        </Routes>
    )
}

export default AllRouter