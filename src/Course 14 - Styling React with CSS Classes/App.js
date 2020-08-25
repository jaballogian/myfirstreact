import React from 'react'
import Header from './Components/Header'
import MainContent from './Components/MainContent'
import Footer from './Components/Footer'
// import './Style.css' // first way to import css file

function App(){
    return(
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

export default App