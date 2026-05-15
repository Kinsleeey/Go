import '../style.css';
import Subheader from '../components/Subheader';
import FoodCard from '../components/Card';
import Tag from '../components/Tag';
import Button from '../components/Button';

export default function OrderHistoryDetails (props) {
    if (props.current === "orderhistorydetails") {
        return (
            <>
                <Subheader text="Order Detail" click={() => props.navFunction("orderhistory")}/>
                <div class='page'>
                    <div class="od-header">
                        <h1>Mamma Mia <br />Pizzeria</h1>
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
                        <div class="od-row">
                            <span>Subtotal</span>
                            <span class="amount">₦4,500</span>
                        </div>
                        <div class="od-row">
                            <span>Delivery Fee</span>
                            <span class="amount">₦500</span>
                        </div>
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
                                <span class="info-label">Name</span>
                                <span class="info-value">John Doe</span>
                            </div>
                            <div class="info-row">
                                <span class="info-label">Address</span>
                                <span class="info-value">12 Oguta Road, Onitsha</span>
                            </div>
                            <div class="info-row">
                                <span class="info-label">Contact</span>
                                <span class="info-value">+234 800 000 0000</span>
                            </div>
                            <div class="info-row">
                                <span class="info-label">Transaction Ref</span>
                                <span class="info-value">TXN-00482910</span>
                            </div>
                        </div>
                        <div class="tracking-box">
                            <div class="tracking-label">Tracking ID</div>
                            <div class="tracking-id">BK-293-XP</div>
                            <Tag text='Show this ID to your rider to collect your delivery' />
                        </div>
                    </div>
                    <Button title="Re-order" btn="red-btn" click={() => props.navFunction("checkout")} />
                </div>
            </>
        )
    }
}