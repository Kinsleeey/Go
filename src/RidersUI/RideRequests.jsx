import Button from '../components/Button';
import Subheader from '../components/Subheader';
import Tag from '../components/Tag';
import { RideRequestCard } from '../components/Card';
import '../style.css';

export default function Completed (props) {
    if (props.current === "completed") {
        return (
            <>
                <Subheader text="Ride Requests" click={() => props.navFunction("riderdashboard")}/>
                <div className='page'>
                    <div style={{width: '100%'}}><h1 style={{fontSize: '28px'}}>Delivery Requests</h1></div>
                    <div className='innerpage'>
                        <div className="stats" style={{width: '100%'}}>
                        <div className='stat'>
                            <div className="stat-label">TOTAL DELIVERIES</div>
                            <div className="stat-value">124</div>
                        </div>

                        <div className='stat'>
                            <div className="stat-label">PENDING</div>
                            <div className="stat-value">08 </div>
                        </div>
                        <div className='stat'>
                            <div className="stat-label">COMPLETED</div>
                            <div className="stat-value">116 </div>
                        </div>
                    </div>
                    </div>
                    <div className='innerpage'>
                        <div className="tabs">
                            <div className="chip active">Pending</div>
                            <div className="chip">Completed</div>
                        </div>

                        <RideRequestCard 
                            orderNum="0042"
                            time="12:45 PM"
                            date="Today"
                            start="Chicken Republic, Awka"
                            stop="12 Oguta Road, Onitsha"
                            distance="2.3"
                            price="850"
                            showBtn={true}
                        />
                        <RideRequestCard 
                            orderNum="0042"
                            time="12:45 PM"
                            date="Today"
                            start="Chicken Republic, Awka"
                            stop="12 Oguta Road, Onitsha"
                            distance="2.3"
                            price="850"
                            showBtn={true}
                        />
                            <RideRequestCard 
                            orderNum="0042"
                            time="12:45 PM"
                            date="Today"
                            start="Chicken Republic, Awka"
                            stop="12 Oguta Road, Onitsha"
                            distance="2.3"
                            price="850"
                            showBtn={true}
                        />
                        <RideRequestCard 
                            orderNum="0042"
                            time="12:45 PM"
                            date="Today"
                            start="Chicken Republic, Awka"
                            stop="12 Oguta Road, Onitsha"
                            distance="2.3"
                            price="850"
                            showBtn={true}
                        />
                        
                    </div>
                </div>
            </>
        )
    }
}

export function Pending () {
    if (props.current === "pending") {
        return (
            <>
                <Subheader text="Ride Requests" click={() => props.navFunction("riderdashboard")}/>
            </>
        )
    }
}