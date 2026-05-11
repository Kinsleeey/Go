
import './style.css';
import Header from './Header';
import HomePage from './Homepage';
import ResturantPage from './UserUI/ResturantPage';
import OrderFoodPage from './UserUI/OrderFoodPage';
import { useState } from 'react';


function App() {
  const [ currPage, setCurrPage ] = useState("homepage")

  function handleNav(page) {
      setCurrPage(page);
      console.log(`i've changed the page to ${page}`)
  }

  return (
    <>
      <Header />
      <HomePage navFunction={handleNav} current={currPage}/>
      <ResturantPage navFunction={handleNav} current={currPage}/>
      <OrderFoodPage navFunction={handleNav} current={currPage}/>
    </>
  )
}

export default App
