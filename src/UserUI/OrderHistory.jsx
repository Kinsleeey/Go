import { OrderHistoryCard } from '../components/Card';
import Subheader from '../components/Subheader';
import '../style.css';

export default function OrderHistory (props) {

    if(props.current === "orderhistory") {
        return (
            <>
                <Subheader text="Order History" click={() => props.navFunction("orderfoodpage")}/>

                <div className='page'>
                    <div className="stats">
                        <div>
                            <div className="stat__label">TOTAL ORDERS</div>
                            <div className="stat__value">124</div>
                        </div>
                        <div>
                            <div className="stat__label">PENDING</div>
                            <div className="stat__value">08 </div>
                        </div>
                        <div>
                            <div className="stat__label">COMPLETED</div>
                            <div className="stat__value">116 </div>
                        </div>
                    </div>
                    <div className='order-card-div'>
                        <div className="tabs">
                            <div className="order-tab-yellow">Pending</div>
                            <div className="order-tab-white">Completed</div>
                        </div>

                        <OrderHistoryCard imgSrc='https://images.unsplash.com/photo-1513104890138-7c749659a591?w=120&q=80' imgAlt='Mamma Mia' resturantName='Mamma Mia Pizzeria' date='Oct 24' time='12:45 PM' price='4,500' items='2' status='Delivered' />
                        <OrderHistoryCard imgSrc='https://images.unsplash.com/photo-1513104890138-7c749659a591?w=120&q=80' imgAlt='Mamma Mia' resturantName='Mamma Mia Pizzeria' date='Oct 24' time='12:45 PM' price='4,500' items='2' status='Delivered' />
                        <OrderHistoryCard imgSrc='https://images.unsplash.com/photo-1513104890138-7c749659a591?w=120&q=80' imgAlt='Mamma Mia' resturantName='Mamma Mia Pizzeria' date='Oct 24' time='12:45 PM' price='4,500' items='2' status='Delivered' />
                        <OrderHistoryCard imgSrc='https://images.unsplash.com/photo-1513104890138-7c749659a591?w=120&q=80' imgAlt='Mamma Mia' resturantName='Mamma Mia Pizzeria' date='Oct 24' time='12:45 PM' price='4,500' items='2' status='Delivered' />
                        <OrderHistoryCard imgSrc='https://images.unsplash.com/photo-1513104890138-7c749659a591?w=120&q=80' imgAlt='Mamma Mia' resturantName='Mamma Mia Pizzeria' date='Oct 24' time='12:45 PM' price='4,500' items='2' status='Delivered' />
                        <OrderHistoryCard imgSrc='https://images.unsplash.com/photo-1513104890138-7c749659a591?w=120&q=80' imgAlt='Mamma Mia' resturantName='Mamma Mia Pizzeria' date='Oct 24' time='12:45 PM' price='4,500' items='2' status='Delivered' />
                    </div>
                </div>
            </>
        )
    }
}