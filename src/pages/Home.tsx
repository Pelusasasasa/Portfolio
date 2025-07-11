import React from 'react'
import { NavBar } from '../components/NavBar'
import { About } from '../components/About'
import { Header } from '../components/Header'

export const Home = () => {
  return (
    <>
        <div>
            <NavBar/>
        </div>
        <div>
          <Header />
        </div>
        <div id='sobreMi'>
            <About/>
        </div>
    </>
  )
}
