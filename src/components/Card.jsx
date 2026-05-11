import '.././style.css';
import { RoundButton } from './Button';

export function ResturantCard (props) {

    return (
        <div className="restaurant-card" onClick={props.click}>
            <div className="restaurant-card__img-wrap">
                <img className="restaurant-card__img" src={props.img} alt={props.alt} />
                <span className="rating">⭐ {props.rating}</span>
            </div>
            <div style={{padding: "12px"}}>                
                <div className="restaurant-card__name">{props.name}</div>
                <div className="restaurant-card__time">{props.time}</div>
            </div>
        </div>
    )
    
}

function FoodCard (props) {
    return (
        
        <div className="menu-item">
            
            <img className="menu-item__img" src={props.img} alt={props.alt} />
            <div className="menu-item__body">
            <div className="menu-item__name">{props.name}</div>
            <div className="menu-item__desc">{props.des}</div>
            <div className="menu-item__price">{props.price}</div>
            </div>

            <RoundButton />
        </div>
        
    )
}


export default FoodCard;