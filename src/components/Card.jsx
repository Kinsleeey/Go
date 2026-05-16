import '.././style.css';
import { CrementButton, RoundButton } from './Button';

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
            <div className="order-icon">
                <img src={props.imgSrc} alt={props.imgAlt} />
            </div>
            <div className="order-body">
                <div className="order-name">{props.resturantName}</div>
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
    if (props.whatBtn === "single") {
        return <RoundButton extraClass="flex-end" svg={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path></svg>} />
    }
    if(props.whatBtn === "double") {
        return <CrementButton />
    }
    if (props.whatBtn === "none") {
        return <p>{props.whatQty}</p>
    }

}

export default function FoodCard (props) {
    return (
        
        <div className="menu-item">
            
            <img className="menu-item__img" src={props.img} alt={props.alt} />
            <div className="menu-item__body">
                <div className="menu-item__name">{props.name}</div>
                <div className="menu-item__desc">{props.des}</div>
                <div className="menu-item__price">{props.price}</div>
            </div>
    
            <ButtonDecider whatBtn = {props.btn} whatQty={props.qty}/>
            
            
        </div>
        
    )
}


