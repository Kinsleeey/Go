import '../style.css';
import { OrderHistoryCard } from '../components/Card';
import Subheader from '../components/Subheader';

export default function ResturantOrderHistory (props) {
    if (props.current === "resturantorderhistory") {
            return (
                <>
                <Subheader text="Order History" click={() => props.navFunction("dashboard")}/>

                <div className='page'>
                    <div className="stats" style={{width: '100%'}}>
                        <div className='stat'>
                            <div className="stat-label">TOTAL ORDERS</div>
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
                    <div className='order-card-div'>
                        <div className="tabs">
                            <div className="chip active">Pending</div>
                            <div className="chip">Completed</div>
                        </div>

                        <OrderHistoryCard color="red" imgSrc='https://images.unsplash.com/photo-1513104890138-7c749659a591?w=120&q=80' resturantName='#0042' date='Oct 24' time='12:45 PM' price='4,500' items='2' status='John Doe' click={() => props.navFunction("orderhistorydetails")} />
                        <OrderHistoryCard color="red" imgSrc='https://images.unsplash.com/photo-1513104890138-7c749659a591?w=120&q=80' resturantName='#0042' date='Oct 24' time='12:45 PM' price='4,500' items='2' status='John Doe' click={() => props.navFunction("orderhistorydetails")} />
                        <OrderHistoryCard color="red" imgSrc='https://images.unsplash.com/photo-1513104890138-7c749659a591?w=120&q=80' resturantName='#0042' date='Oct 24' time='12:45 PM' price='4,500' items='2' status='John Doe' click={() => props.navFunction("orderhistorydetails")} />
                        <OrderHistoryCard color="red" imgSrc='https://images.unsplash.com/photo-1513104890138-7c749659a591?w=120&q=80' resturantName='#0042' date='Oct 24' time='12:45 PM' price='4,500' items='2' status='John Doe' click={() => props.navFunction("orderhistorydetails")} />
                        <OrderHistoryCard color="red" imgSrc='https://images.unsplash.com/photo-1513104890138-7c749659a591?w=120&q=80' resturantName='#0042' date='Oct 24' time='12:45 PM' price='4,500' items='2' status='John Doe' click={() => props.navFunction("orderhistorydetails")} />
                        <OrderHistoryCard color="red" imgSrc='https://images.unsplash.com/photo-1513104890138-7c749659a591?w=120&q=80' resturantName='#0042' date='Oct 24' time='12:45 PM' price='4,500' items='2' status='John Doe' click={() => props.navFunction("orderhistorydetails")} />
                        <OrderHistoryCard color="red" imgSrc='https://images.unsplash.com/photo-1513104890138-7c749659a591?w=120&q=80' resturantName='#0042' date='Oct 24' time='12:45 PM' price='4,500' items='2' status='John Doe' click={() => props.navFunction("orderhistorydetails")} />
                    </div>
                </div>
            </>
            )
        }
}