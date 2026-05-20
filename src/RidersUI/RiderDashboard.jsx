import Button from '../components/Button';
import Subheader from '../components/Subheader';
import Tag from '../components/Tag';
import '../style.css';
import { OptionCard } from '../components/Card';

export default function RiderDashboard (props) {
    if (props.current === "riderdashboard") {
        return (
            <>
                <Subheader text="Rider Dashboard" click={() => props.navFunction("homepage")}/>
                <div className='page'>

                    <div class="profile" >
                        <div class="avatar-wrap">
                            <div class="avatar-placeholder"></div>
                        </div>
                        <div class="profile-info">
                            <p class="greeting">Ready to ride,</p>
                            <h2>Emeka Obi</h2>
                            <div className="live-badge"><span className="live-dot"></span>Online</div>
                        </div>
                    </div>
                    
                    <div className="stats" style={{width: '100%'}}>
                        <div className='stat'>
                            <div className="stat-label">TOTAL REVENUE</div>
                            <div className="stat-value" style={{fontWeight: '800', color: '#BB0020'}}>₦124,200</div>
                        </div>
                        <div className='stat'>
                            <div className="stat-label">TODAY</div>
                            <div className="stat-value">₦4,200</div>
                        </div>

                        <div className='stat'>
                            <div className="stat-label">DELIVERIES</div>
                            <div className="stat-value">116 </div>
                        </div>
                    </div>

                    <hr />

                    <div className="innerpage">
                        <OptionCard 
                            svg={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#bb0020" viewBox="0 0 256 256"><path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm52-84a12,12,0,0,1-12,12H140v28a12,12,0,0,1-24,0V140H88a12,12,0,0,1,0-24h28V88a12,12,0,0,1,24,0v28h28A12,12,0,0,1,180,128Z"></path></svg>}
                            title="View ride requests"
                            sub="pending and completed orders"
                            click={() => props.navFunction("pending")}
                        />

                        <OptionCard 
                            svg={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#bb0020" viewBox="0 0 256 256"><path d="M230.14,70.54,185.46,25.85a20,20,0,0,0-28.29,0L33.86,149.17A19.85,19.85,0,0,0,28,163.31V208a20,20,0,0,0,20,20H92.69a19.86,19.86,0,0,0,14.14-5.86L230.14,98.82a20,20,0,0,0,0-28.28ZM91,204H52V165l84-84,39,39ZM192,103,153,64l18.34-18.34,39,39Z"></path></svg>}
                            title="Edit Details"
                            sub="Modify your profile"
                            click={() => props.navFunction("editriderinfo")}
                        />
                    </div>
                </div>
            </>
        )
    }
}