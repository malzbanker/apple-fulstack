import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import './css/bootstrap.css'
import './css/styles.css'
import './App.css'
import Nav from './Components/Nav/Nav'
// import Alert from './Components/Alert/Alert'
// import First from './Components/First/First'
// import Second from './Components/Second/Second'
// import Thrid from './Components/Thrid/Thrid'
// import Forth from './Components/Forth/Forth'
// import Fifth from './Components/Fifth/Fifth'
// import Six from './Components/Six/Six'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'
import Four04 from './Pages/Four04/Four04'
import Mac from './Pages/Mac/Mac'
import Iphone from './Pages/Iphone/Iphone'
import Ipad from './Pages/Ipad/Ipad'
import Watch from './Pages/Watch/Watch'
import Tv from './Pages/Tv/Tv'
import Music from './Pages/Music/Music'
import Suport from './Pages/Suport/Suport'
import Search from './Pages/Search/Search'
import Cart from './Pages/Cart/Cart'
import ShearedLayout from './Pages/ShearedLayout'
import Pagelayout from './Components/Pagelayout'

function App() {
  

  return (
    <>
     
      <Routes>
        <Route path="/" element={<ShearedLayout/> }>
          
        
        <Route path="/main" element={ <Main/>} />
        <Route path="Mac" element={<Mac />} />
          <Route path="iphone" element={<Iphone />} />
          <Route path="iphone/:productID" element={<Pagelayout/>}/>
        <Route path="Ipad" element={<Ipad />} />
        <Route path="Watch" element={<Watch />} />
        <Route path="Tv" element={<Tv />} />
        <Route path="Music" element={<Music />} />
        <Route path="Suport" element={<Suport />} />
        <Route path="Search" element={<Search />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="*" element={ <Four04 />} />
       
        </Route>
        </Routes>
 
    </>
  )
}

export default App
