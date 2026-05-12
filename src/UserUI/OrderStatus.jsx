import '../style.css';
import Tag from '../components/Tag';
import Button from '../components/Button';
import Subheader from '../components/Subheader';

export default function Sucess (props) {

    if (props.current === "sucess") {
        return (
            <div className='page'> 
                <div className="s-hero">
                    <div className="check-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="#ffffff" viewBox="0 0 256 256"><path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path></svg>
                    </div>
                    <h1>Order Placed</h1>
                    <p>Sit tight, your food is on its way.</p>
                </div>

                <div className="s-card">
                    <div className="detail-row">
                        <span className="detail-row__label">Name</span>
                        <span className="detail-row__value">Alex Rivera</span>
                    </div>
                    <div className="detail-row">
                        <span className="detail-row__label">Contact</span>
                        <span className="detail-row__value">+1 (555) 012-3456</span>
                    </div>
                    <div className="detail-row">
                        <span className="detail-row__label">Address</span>
                        <span className="detail-row__value">824 Broadway, New York, NY 10003</span>
                    </div>
                    <div className="detail-row">
                        <span className="detail-row__label">Amount Paid</span>
                        <span className="detail-row__value">$42.80</span>
                    </div>
                    <div className="detail-row">
                        <span className="detail-row__label">Transaction Ref</span>
                        <span className="detail-row__value">#TRX-99021-GO</span>
                    </div>
                    <div className="detail-row">
                        <span className="detail-row__label">Estimated Arrival</span>
                        <span className="detail-row__value detail-row__value--red">12:45 PM (25 mins)</span>
                    </div>
                </div>

                <div className="tracking-card">
                    <div className="tracking-label">TRACKING ID</div>
                    <div className="tracking-id">BK-293-XP</div>
                    <Tag text="Show this ID to your rider to collect your delivery"/>
                </div>

                <Button btn="red-btn" title="Track Order" click={() => props.navFunction("trackorder")}/>
                <Button btn="white-btn" title="Back to Home" click={() => props.navFunction("homepage")}/>
            </div>
        )
    }
}
