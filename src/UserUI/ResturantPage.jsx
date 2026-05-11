import '../style.css';
import Subheader from '../components/Subheader';
import FoodCard from '../components/Card';

function ResturantPage () {
    return (
        <>
            <Subheader text="Resturant"/>
            
            <img className="hero-img" src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80" alt="Gusto restaurant" />

            <div className="info">
                <div className="info__name">GUSTO</div>
                <div className="info__open"><span className="live-dot"></span> Open Now</div>
                <div className="info__rating">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#fad13e" viewBox="0 0 256 256"><path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path></svg>
                    <p>4.9</p>
                    <p style={{color: "#bbb"}}>(450 reviews)</p>
                </div>
            </div>

            <div className="menu">
            <div className="menu__title">OUR MENU</div>

            <div className="category">
                <div className="category__header">
                <span className="category__label">Appetizers</span>
                <svg className="category__icon" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                </div>
            </div>

            <div className="category">
                <div className="category__header">
                <span className="category__label category__label--active">Mains</span>
                <svg className="category__icon category__icon--active" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/></svg>
                </div>

                <div className="menu-items">

                <FoodCard img="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=200&q=80" alt="Truffle Tagliatelle" name="Truffle Tagliatelle" des="Handmade ribbon pasta with seasonal black truffle, and brown butter." price="₦2,800"/>
                <FoodCard img="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&q=80" alt="Wagyu Bresaola Pizza" name="Wagyu Bresaola Pizza" des="Slow-cured wagyu beef, wild arugula, and aged balsamic glaze base." price="₦10,700"/>
                

                

                </div>
            </div>

            <div className="category">
                <div className="category__header">
                <span className="category__label">Sides</span>
                <svg className="category__icon" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                </div>
            </div>

            <div className="category">
                <div className="category__header">
                <span className="category__label">Drinks</span>
                <svg className="category__icon" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                </div>
            </div>

</div>

        </>
    )
}

export default ResturantPage;