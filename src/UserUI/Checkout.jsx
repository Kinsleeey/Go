import '../style.css';
import Button from '../components/Button';
import Subheader from '../components/Subheader';
import Tag from '../components/Tag';

export default function Checkout (props) {

    if (props.current === "checkout") {
        return (
            <>
                <Subheader text="Checkout" click={() => props.navFunction("resturantpage")}/>
                <div className="checkoutpage">

                    <div className="amount-section">
                        <div className="amount-label">Total Amount</div>
                        <div className="amount-row">
                            <div className="amount-value">&#8358;5,300</div>
                            <Tag text="Due" />
                        </div>
                    </div>

                    <hr />

                    <div className="fields">
                        <div className="field">
                            <label>Full Name</label>
                            <input type="text" placeholder="John Doe" />
                        </div>

                        <div className="field">
                            <label>Delivery Address</label>
                            <input type="text" placeholder="123 Awka Road..." />
                        </div>

                        <div className="field">
                            <label>Contact Number</label>
                            <input type="tel" placeholder="+234 800 000 0000" />
                        </div>

                        <div className="toggle-row">
                        <span className="toggle-label">Save details for next time</span>
                        <div className="toggle"></div>
                        </div>
                    </div>

                    <hr />

                    <div className='optional-shipping'>
                        <div className="fee-label">Shipping Fee</div>

                        <div className="fee-row">
                            <span className="fee-row__label">Base Fee</span>
                            <span className="fee-row__amount">&#8358;500</span>
                        </div>

                    <div className='custom-fee'>
                        <div className="custom-fee-title">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#bb0020" viewBox="0 0 256 256"><path d="M219.71,117.38a12,12,0,0,0-7.25-8.52L161.28,88.39l10.59-70.61a12,12,0,0,0-20.64-10l-112,120a12,12,0,0,0,4.31,19.33l51.18,20.47L84.13,238.22a12,12,0,0,0,20.64,10l112-120A12,12,0,0,0,219.71,117.38ZM113.6,203.55l6.27-41.77a12,12,0,0,0-7.41-12.92L68.74,131.37,142.4,52.45l-6.27,41.77a12,12,0,0,0,7.41,12.92l43.72,17.49Z"></path></svg>
                        Add Custom Fee (Optional)
                        </div>

                        <div className="custom-fee-sub">A higher fee gets you a faster rider</div>

                        <div className="custom-input">
                            <span>&#8358;</span>
                            <input type="number" placeholder="Enter additional amount" />
                        </div>
                    </div>
                        

                        <div className="shipping-total">
                            <span className="shipping-total__label">Total Shipping</span>
                            <span className="shipping-total__amount">&#8358;500</span>
                        </div>
                    </div>

                    <hr />

                    <div className='summary'>
                        <div className="summary-row">
                            <span className="fee-row__label">Subtotal</span>
                            <span className="fee-row__amount">&#8358;4,800</span>
                        </div>

                        <div className="summary-row">
                            <span className="fee-row__label">Shipping</span>
                            <span className="fee-row__amount">&#8358;500</span>
                        </div>

                        <div className="summary-row summary-row--total" style={{marginTop: "8px"}}>
                            <span className="shipping-total__label">Total</span>
                            <span className="shipping-total__amount">&#8358;5,300</span>
                        </div>

                    </div>
                    
                    <hr />

                    <div className="paystack">
                        <span className="green-dot"></span>
                        Secured by Paystack
                    </div>

                    <Button title='Make Payment' btn='red-btn'/>
                    <Button title='Go back to Resturant' btn='white-btn'/>
                </div>

            </>
        )
    }
}