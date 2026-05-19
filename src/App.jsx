
import './style.css';
import Header from './Header';
import HomePage from './Homepage';
import ResturantPage from './UserUI/ResturantPage';
import OrderFoodPage from './UserUI/OrderFoodPage';
import Checkout from './UserUI/Checkout';
import { useState } from 'react';
import Tray from './Tray';
import Sucess, { Failure } from './UserUI/OrderStatus';
import OrderHistory from './UserUI/OrderHistory';
import OrderHistoryDetails from './UserUI/OrderHistoryDetails';
import { OrderHistoryCard } from './components/Card';
import GrowWithGo from './GrowWithGo';
import Login from './Login';
import Dashboard from './ResturantUI/Dashboard';
import AddProduct from './ResturantUI/AddProduct';
import EditMenu from './ResturantUI/EditMenu';


function App() {
  const [ currPage, setCurrPage ] = useState("editproduct")

  function handleNav(page) {
      setCurrPage(page);
      setIsTrayOpen(false);
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
      <Sucess navFunction={handleNav} current={currPage} />
      <OrderHistory navFunction={handleNav} current={currPage}/>
      <OrderHistoryDetails navFunction={handleNav} current={currPage}/>
      <Failure navFunction={handleNav} current={currPage} />
      <GrowWithGo navFunction={handleNav} current={currPage} />
      <Login navFunction={handleNav} current={currPage} />
      <Dashboard navFunction={handleNav} current={currPage}/>
      <AddProduct navFunction={handleNav} current={currPage}/>
      <EditMenu current={currPage} navFunction={handleNav} />
    </>
  )
}

export default App
