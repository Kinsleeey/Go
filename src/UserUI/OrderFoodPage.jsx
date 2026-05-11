import '../style.css';
import Subheader from '../components/Subheader';
import { ResturantCard } from '../components/Card';

export default function OrderFoodPage (props) {
    if(props.current === "orderfoodpage") {
        return (
            <>
                <Subheader text="Order food" click={() => props.navFunction("homepage")}/>

                <div class="hero">
                    <h1>What are you<br /><span>craving?</span></h1>
                    <div className="search">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#BB0020" viewBox="0 0 256 256"><path d="M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z"></path></svg>
                        <input type="text" placeholder="Search for restaurant..." readonly />
                    </div>
                </div>
                <div className='setion resturant-grid-section'>
                    <div className='resturant-grid'>
                        <ResturantCard img="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&q=80" alt="The Burger Loft" rating="4.8" name="The Burger Loft" time="15–25 min" click={() => props.navFunction("resturantpage")}/>
                        <ResturantCard img="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&q=80" alt="Pizza Express" rating="4.5" name="Pizza Express" time="10–20 min"/>
                        <ResturantCard img="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=300&q=80" alt="More" rating="4.6" name="Mo's Kitchen" time="5–15 min"/>
                        <ResturantCard img="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&q=80" alt="The Burger Loft" rating="4.8" name="The Burger Loft" time="15–25 min"/>
                        <ResturantCard img="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&q=80" alt="Pizza Express" rating="4.5" name="Pizza Express" time="10–20 min"/>
                        <ResturantCard img="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=300&q=80" alt="More" rating="4.6" name="Mo's Kitchen" time="5–15 min"/>
                    </div>
                </div>
                
            </>
        )
    }
}