import '../style.css';
import Button from '../components/Button';
import Subheader from '../components/Subheader';
import Tag from '../components/Tag';

export default function Checkout (props) {

    if (props.current === "checkout") {
        return (
            <>
                <Subheader text="Checkout"/>
                <div class="checkoutpage">

                    <div class="amount-section">
                        <div class="amount-label">TOTAL AMOUNT</div>
                        <div class="amount-row">
                            <div class="amount-value">&#8358;5,300</div>
                            <Tag text="Due" />
                        </div>
                    </div>

                    <hr />

                    <div class="fields">
                        <div class="field">
                            <label>Full Name</label>
                            <input type="text" placeholder="John Doe" />
                        </div>

                        <div class="field">
                            <label>Delivery Address</label>
                            <input type="text" placeholder="123 Awka Road..." />
                        </div>

                        <div class="field">
                            <label>Contact Number</label>
                            <input type="tel" placeholder="+234 800 000 0000" />
                        </div>

                        <div class="toggle-row">
                        <span class="toggle-label">Save details for next time</span>
                        <div class="toggle"></div>
                        </div>
                    </div>

                    <hr />
                </div>

            </>
        )
    }
}