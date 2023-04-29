import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer';
import Main from '../components/Main'
import SinglePage from './SinglePage';


function Home() {
  return (
    <div>
       {/* <SinglePage/> */}
        <Header/>
        <Main/>
        <Footer/>
        </div>
  )
}

export default Home