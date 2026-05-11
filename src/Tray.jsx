import './style.css';
import Button, { RoundButton } from './components/Button';
import FoodCard from './components/Card';
import { useState } from 'react';

export default function Tray (props) {
    
    if (props.check) {
        return (
        <div className='tray'>
            <div className="tray-header">
            <h1 className="tray_header__title">TRAY</h1>
            <RoundButton click={() => props.trayFunction(false)} svg={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" viewBox="0 0 256 256"><path d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"></path></svg>}/>
            </div>
            <FoodCard img="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=200&q=80" alt="Truffle Tagliatelle" name="Truffle Tagliatelle" des="Handmade ribbon pasta with seasonal black truffle, and brown butter." price="₦2,800"/>
            <FoodCard img="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&q=80" alt="Wagyu Bresaola Pizza" name="Wagyu Bresaola Pizza" des="Slow-cured wagyu beef, wild arugula, and aged balsamic glaze base." price="₦10,700"/>

            <div className="subtotal">
                <span className="subtotal__label">Subtotal</span>
                <span className="subtotal__amount" id="subtotal">&#8358;4,800</span>
            </div>

            <Button title="Place Order" btn="red-btn"/>
        </div>
    )
    }
}