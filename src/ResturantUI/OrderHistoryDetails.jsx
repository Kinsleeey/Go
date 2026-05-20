import '../style.css';
import Subheader from '../components/Subheader';
import Button from '../components/Button';
import FoodCard from '../components/Card';
import Tag from '../components/Tag';


export default function ResturantOrderHistoryDetails (props) {
    if (props.current === "resturantorderhistorydetails") {
        return (
            <>
                <Subheader text="Order Detail" click={() => props.navFunction("resturantorderhistory")}/>
                <div class='page'>
                    <div class="od-header">
                        <h1>Order <span className='red'>#0012</span></h1>
                        <p class="od-meta">April 24, 2026 · 3:42 PM <span class="dot">•</span> <span class="delivered">Delivered</span></p>
                    </div>
                    <hr />
                    <div class='od-sect'>
                        <p class="od-sect-title">Items Ordered</p>
                        <div class="od-items">
                            <FoodCard btn="none" qty="x5" img="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&q=80" alt="Wagyu Bresaola Pizza" name="Wagyu Bresaola Pizza" des="Slow-cured wagyu beef, wild arugula, and aged balsamic glaze base." price="₦10,700" />
                            <FoodCard btn="none" qty="x5" img="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&q=80" alt="Wagyu Bresaola Pizza" name="Wagyu Bresaola Pizza" des="Slow-cured wagyu beef, wild arugula, and aged balsamic glaze base." price="₦10,700" />
                            <FoodCard btn="none" qty="x5" img="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&q=80" alt="Wagyu Bresaola Pizza" name="Wagyu Bresaola Pizza" des="Slow-cured wagyu beef, wild arugula, and aged balsamic glaze base." price="₦10,700" />
                        </div>
                    </div>
                    <div class="od-totals">
                        <div class="od-row od-total">
                            <span>Total Paid</span>
                            <span class="amount">₦5,000</span>
                        </div>
                    </div>
                    <hr />
                    <div class='od-sect'>
                        <p class="od-sect-title">Delivered To</p>
                        <div class='info-rows'>
                            <div class="info-row">
                                <span class="info-label">Customer Name</span>
                                <span class="info-value">John Doe</span>
                            </div>
                        </div>
                    </div>
                    <Button title="Go Back" btn="red-btn" click={() => props.navFunction("resturantorderhistory")} />
                </div>
            </>
        )
    }
}