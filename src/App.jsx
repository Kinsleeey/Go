
import './style.css';
import Header from './Header';
import HomePage from './Homepage';
import ResturantPage from './UserUI/ResturantPage';
import OrderFoodPage from './UserUI/OrderFoodPage';
import Checkout from './UserUI/Checkout';
import { useState } from 'react';
import Tray from './Tray';


function App() {
  const [ currPage, setCurrPage ] = useState("homepage")

  function handleNav(page) {
      setCurrPage(page);
      console.log(`i've changed the page to ${page}`)
  }

  const [isTrayOpen, setIsTrayOpen] = useState(false);

  function handleClick (what) {
      setIsTrayOpen(what);
  }

  return (
    <>
      <Header />
      <HomePage navFunction={handleNav} current={currPage}/>
      <ResturantPage navFunction={handleNav} current={currPage} trayFunction={handleClick}/>
      <OrderFoodPage navFunction={handleNav} current={currPage}/>
      <Tray trayFunction={handleClick} check={isTrayOpen} navFunction={handleNav}/>
      <Checkout navFunction={handleNav} current={currPage}/>
    </>
  )
}

export default App
