import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './components/pages/HeroSection'
import CategoryCard from './components/pages/CategoryCard'
import MarqueeBanner from './components/pages/MarqueeBanner'
import BestInPlump from './components/pages/BestInPlump'
import ProvenToPlump from './components/pages/ProvenToPlump'
import HeroJuicyLips from './components/pages/HeroJuicyLips'
import FeaturedIn from './components/pages/FeaturedIn'
import PlumpingKits from './components/pages/PlumpingKits'
import MadeToPlumpSection from './components/pages/MadeToPlumpSection'
import ProjectCosmetics from './components/pages/ProjectCosmetics'
import Footer from './components/common/Footer'

function App() {
  

  return (
    <>
    <HeroSection/>
    <CategoryCard/>
    <MarqueeBanner/>
    <BestInPlump/>
    <ProvenToPlump/>
    <HeroJuicyLips/>
    <FeaturedIn/>
    <PlumpingKits/>
    <MadeToPlumpSection/>
    <ProjectCosmetics/>
    <Footer/>
    </>
  )
}

export default App
