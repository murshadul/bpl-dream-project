
import './App.css'
import Navbar from '../src/Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Players from './Components/HomePage/Players/Players'
import { Suspense } from 'react'

const fetchPlayer=async()=>{
  const res=await fetch("/data.json")
  return res.json();
}

function App() {
 const PlayersPromise=fetchPlayer();

  return (
    <>
   
<Navbar></Navbar>
 <Banner></Banner>
 <Suspense fallback={<span className="loading loading-spinner text-error"></span>}>
  <Players PlayersPromise={PlayersPromise}></Players>
 </Suspense>

 
    </>
  )
}

export default App
