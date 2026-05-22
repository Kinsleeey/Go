import '.././style.css';
import Button, { CrementButton, RoundButton } from './Button';

export function ResturantCard (props) {

    return (
        <div className={`restaurant-card ${props.extraClass}`} onClick={props.click}>
            <div className="restaurant-card__img-wrap">
                <img className="restaurant-card__img" src={props.img} alt={props.alt} />
                <span className="rating">⭐ {props.rating}</span>
            </div>
            <div style={{padding: "8px 12px", display: 'flex', justifyContent: "space-between", alignItems: "center"}}>
                <div>                
                    <div className="restaurant-card__name">{props.name}</div>
                    <div className="restaurant-card__time">{props.time}</div>
                </div>
                <RoundButton svg={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" viewBox="0 0 256 256"><path d="M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"></path></svg>} />
            </div>
        </div>
    )
    
}

export function OrderHistoryCard (props) {
    return (
        <div className="order-card" onClick={props.click}>
            {props.hasImage && <div className="order-icon"><img src={props.imgSrc} alt={props.imgAlt} /></div>}
            <div className="order-body">
                <div className={`order-name ${props.color}` }>{props.resturantName}</div>
                <div className="order-date">{props.date} &bull; {props.time}</div>
                <div className="order-status">{props.status}</div>
            </div>
            <div className="order-right">
                <div className="order-meta">
                    <div className="order-price">&#8358;{props.price}</div>
                    <div className="order-sub">{props.items} items</div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#cccccc" viewBox="0 0 256 256"><path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path></svg>
            </div>
        </div>
    )
}

function ButtonDecider (props) {
    if (props.whatBtn === "single-edit") {
        return <RoundButton extraclass="down" svg={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" viewBox="0 0 256 256"><path d="M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.68,147.31,64l24-24L216,84.68Z"></path></svg>} />
    }
    if (props.whatBtn === "single") {
        return <RoundButton extraclass="down" svg={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path></svg>} />
    }
    if(props.whatBtn === "double") {
        return <CrementButton extraclass="down"/>
    }
    if (props.whatBtn === "none") {
        return <p className='down' style={{fontSize: '12px'}}>{props.whatQty}</p>
    }

}

export default function FoodCard (props) {
    return (
        
        <div className="menu-item" onClick={props.click}>
            
            <img className="menu-item__img" src={props.img} alt={props.alt} />
            <div className="menu-item__body">
                <div className="menu-item__name">{props.name}</div>
                <div className="menu-item__desc">{props.des}</div>
                <div className="menu-item__price">{props.price}</div>
            </div>
    
            <ButtonDecider whatBtn={props.btn} whatQty={props.qty} />
            
            
        </div>
        
    )
}

export function OptionCard (props) {
    return (
        
        <div className="action" onClick={props.click}>
            <div className="action-icon">
                {props.svg}
            </div>
            <div className="action-text">
            <div className="action-title">{props.title}</div>
            <div className="action-sub">{props.sub}</div>
            </div>
            <span className="action-arrow">&#8250;</span>
        </div>
        
    )
}


export function RideRequestCard (props) {
    return (
        <div class="card">
            <div class="card-header">
                <span class="order-id">#{props.orderNum}</span>
                <span class="order-time">{props.time} • {props.date}</span>
            </div>
            <div class="route">
                <div class="route-row">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12" fill="#bb0020" viewBox="0 0 256 256"><path d="M128,16a88.1,88.1,0,0,0-88,88c0,75.3,80,132.17,83.41,134.55a8,8,0,0,0,9.18,0C136,236.17,216,179.3,216,104A88.1,88.1,0,0,0,128,16Zm0,56a32,32,0,1,1-32,32A32,32,0,0,1,128,72Z"></path></svg>
                    <p>{props.start}</p>
                </div>
                <div class="route-line"></div>
                <div class="route-row">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#bb0020" viewBox="0 0 256 256"><path d="M124,175a8,8,0,0,0,7.94,0c2.45-1.41,60-35,60-94.95A64,64,0,0,0,64,80C64,140,121.58,173.54,124,175ZM128,56a24,24,0,1,1-24,24A24,24,0,0,1,128,56ZM240,184c0,31.18-57.71,48-112,48S16,215.18,16,184c0-14.59,13.22-27.51,37.23-36.37a8,8,0,0,1,5.54,15C42.26,168.74,32,176.92,32,184c0,13.36,36.52,32,96,32s96-18.64,96-32c0-7.08-10.26-15.26-26.77-21.36a8,8,0,0,1,5.54-15C226.78,156.49,240,169.41,240,184Z"></path></svg>
                    <p>{props.stop}</p>
                </div>
            </div>
            <div class="meta">
                <span class="km">{props.distance} km</span>
                <span class="price">₦{props.price}</span>
            </div>
            {props.showBtn && 
            <div style={{display: 'flex', gap: '8px'}}>
                <Button btn='red-btn' title='Accept'/>
                <Button btn='white-btn' title="Reject"/>
            </div>
            }
        </div>
    )
}