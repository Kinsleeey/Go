import '.././style.css';
import { RoundButton } from './Button';

export function ResturantCard (props) {

    return (
        <div className={`restaurant-card ${props.extraClass}`} onClick={props.click}>
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

            <RoundButton extraClass="flex-end" svg={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path></svg>}/>
        </div>
        
    )
}


export default FoodCard;