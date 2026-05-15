import '../style.css';
import Tag from '../components/Tag';
import Button from '../components/Button';
import Subheader from '../components/Subheader';

export function Failure (props) {
    return (
        <div className='page'>
            <div className='s-hero'>
                <div class="check-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" viewBox="0 0 256 256"><path d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"></path></svg>
                </div>
                <h1>Payment Failed</h1>
                <p class="subtitle">Something went wrong. Please try again.</p>
            </div>
            <div style={{width: '100%', display:'flex', gap: '16px', flexDirection: 'column'}}>
                <Button btn="red-btn" title="Try Again" svg={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#ffffff" viewBox="0 0 256 256"><path d="M244,56v48a12,12,0,0,1-12,12H184a12,12,0,1,1,0-24H201.1l-19-17.38c-.13-.12-.26-.24-.38-.37A76,76,0,1,0,127,204h1a75.53,75.53,0,0,0,52.15-20.72,12,12,0,0,1,16.49,17.45A99.45,99.45,0,0,1,128,228h-1.37A100,100,0,1,1,198.51,57.06L220,76.72V56a12,12,0,0,1,24,0Z"></path></svg>} click={() => props.navFunction("checkout")}/>
                <Button btn="white-btn" title="Back to Home" click={() => props.navFunction("homepage")}/>
            </div>
        </div>
    )
    
}


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

                <Button btn="red-btn" title="Track Order" click={() => props.navFunction("orderhistory")}/>
                <Button btn="white-btn" title="Back to Home" click={() => props.navFunction("homepage")}/>
            </div>
        )
    }
}
