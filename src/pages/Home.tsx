import React from 'react'
import { NavBar } from '../components/NavBar'
import { About } from '../components/About'
import { Header } from '../components/Header'
import Skill from '../components/Skill'

export const Home = () => {
  return (
    <div className='w-full'>
      <NavBar/>
      <Header />
      <About/>
      <Skill/>
    </div>
  )
}
