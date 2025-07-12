import { NavBar } from '../components/NavBar'
import { About } from '../components/About'
import { Header } from '../components/Header'
import Skill from '../components/Skill'
import { Project } from '../components/Project'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'

export const Home = () => {
  return (
    <div className='w-full'>
      <NavBar/>
      <Header />
      <About/>
      <Skill/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  )
}
