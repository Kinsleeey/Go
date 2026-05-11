import '.././style.css';
import { RoundButton } from './Button';

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