'use client'
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Experience from './components/Experience/Experience';
import Tech from './components/Tech/Tech';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
export default function Home() {
    return(
    <div>
           <Navbar/>
           <Header/>
           <Experience/>
           <Tech/>
           <Education/>
           <Contact/>
    </div>
    )
}