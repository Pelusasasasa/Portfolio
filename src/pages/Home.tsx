import React from 'react'
import { NavBar } from '../components/NavBar'
import { About } from '../components/About'

export const Home = () => {
  return (
    <>
        <div>
            <NavBar/>
        </div>
        <div id='sobreMi'>
            <About/>
        </div>
    </>
  )
}
