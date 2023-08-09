import React from 'react'
import SwipeDrawer from './SwipeDrawer'
import { Box } from '@mui/material'
import Notes from './Notes'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Archives from './archive/Archives'
import Trashs from './trash/Trashs'
const Header = () => {
  return (
    <Box style={{display:'flex', width:'100%'}}>
    <Router>
      <SwipeDrawer/>
      <Routes>
      <Route path='/' element={<Notes/>}/>
      <Route path='/archive' element={<Archives/>}/>
      <Route path='/delete' element={<Trashs/>}/>
      </Routes>
      </Router>
    </Box>
  )
}

export default Header
