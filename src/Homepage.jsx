import './style.css';
import Subheader from './components/Subheader';

function Homepage () {
    return (
        <>
            <Subheader text="Home"/>

            <section className="hero">
                <div className="live-badge"><span className="live-dot"></span> LIVE IN YOUR CITY</div>
                <span>
                    <h1>What do you<span> want<br />to do?</span></h1>
                    <p>Fast, reliable services at your fingertips. Everything you need, delivered or booked in seconds.</p>
                </span>
                

                <a href="#" className="action-card action-card--red">
                    <div className="action-card__text">
                        <div className="action-card__title">Buy Food</div>
                        <div className="action-card__sub">Hungry? We've got you.</div>
                    </div>
                    <div className="action-card__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256"><path d="M216,40V224a8,8,0,0,1-16,0V176H152a8,8,0,0,1-8-8,268.75,268.75,0,0,1,7.22-56.88c9.78-40.49,28.32-67.63,53.63-78.47A8,8,0,0,1,216,40Zm-96.11-1.31a8,8,0,1,0-15.78,2.63L111.89,88H88V40a8,8,0,0,0-16,0V88H48.11l7.78-46.68a8,8,0,1,0-15.78-2.63l-8,48A8.17,8.17,0,0,0,32,88a48.07,48.07,0,0,0,40,47.32V224a8,8,0,0,0,16,0V135.32A48.07,48.07,0,0,0,128,88a8.17,8.17,0,0,0-.11-1.31Z"></path></svg>
                    </div>
                </a>

                <a href="#" className="action-card action-card--white">
                    <div className="action-card__text">
                        <div className="action-card__title">Order a Ride</div>
                        <div className="action-card__sub">Get where you need to go.</div>
                    </div>
                    <div className="action-card__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#BB0020" viewBox="0 0 256 256"><path d="M216,120a41,41,0,0,0-6.6.55l-5.82-15.14A55.64,55.64,0,0,1,216,104a8,8,0,0,0,0-16H196.88L183.47,53.13A8,8,0,0,0,176,48H144a8,8,0,0,0,0,16h26.51l9.23,24H152c-18.5,0-33.5,4.31-43.37,12.46a16,16,0,0,1-16.76,2.07c-10.58-4.81-73.29-30.12-73.8-30.26a8,8,0,0,0-5,15.19S68.57,109.4,79.6,120.4A55.67,55.67,0,0,1,95.43,152H79.2a40,40,0,1,0,0,16h52.12a31.91,31.91,0,0,0,30.74-23.1,56,56,0,0,1,26.59-33.72l5.82,15.13A40,40,0,1,0,216,120ZM40,168H62.62a24,24,0,1,1,0-16H40a8,8,0,0,0,0,16Zm176,16a24,24,0,0,1-15.58-42.23l8.11,21.1a8,8,0,1,0,14.94-5.74L215.35,136l.65,0a24,24,0,0,1,0,48Z"></path></svg>
                    </div>
                </a>
            </section>

            <section className="section">
                <div className="section__header">
                    <span className="section__title">Popular near you</span>
                    <a href="#" className="section__link">See all</a>
                </div>
                <div className="popular-scroll">

                    <div className="restaurant-card">
                    <div className="restaurant-card__img-wrap">
                        <img className="restaurant-card__img" src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&q=80" alt="The Burger Loft" />
                        <span className="rating">⭐ 4.8</span>
                    </div>
                    <div style={{padding: "12px"}}>                
                        <div className="restaurant-card__name">The Burger Loft</div>
                        <div className="restaurant-card__time">15–25 min</div>
                    </div>
                    </div>

                    <div className="restaurant-card">
                    <div className="restaurant-card__img-wrap">
                        <img className="restaurant-card__img" src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&q=80" alt="Pizza Express" />
                        <span className="rating">⭐ 4.5</span>
                    </div>
                    <div style={{padding: "12px"}}>
                        <div className="restaurant-card__name">Pizza Express</div>
                        <div className="restaurant-card__time">10–20 min</div>
                    </div>
                    </div>

                    <div className="restaurant-card">
                    <div className="restaurant-card__img-wrap">
                        <img className="restaurant-card__img" src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=300&q=80" alt="More" />
                        <span className="rating">⭐ 4.6</span>
                    </div>
                    <div style={{padding: "12px"}}>
                        <div className="restaurant-card__name">Mo's Kitchen</div>
                        <div className="restaurant-card__time">5–15 min</div>
                    </div>
                    </div>

                </div>
            </section>

            
            <section className="section">
            <div className="section__header">
                <span className="section__title">Grow with GO</span>
            </div>

            
            <div className="grow-card">
                <div className="grow-card__watermark"><svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="#00000008" viewBox="0 0 256 256"><path d="M68,88V40a12,12,0,0,1,24,0V88a12,12,0,0,1-24,0ZM220,40V224a12,12,0,0,1-24,0V180H152a12,12,0,0,1-12-12,273.23,273.23,0,0,1,7.33-57.82C157.42,68.42,176.76,40.33,203.27,29A12,12,0,0,1,220,40ZM196,62.92C182.6,77,175,98,170.77,115.38A254.41,254.41,0,0,0,164.55,156H196ZM128,39A12,12,0,0,0,104,41l4,47.46a28,28,0,0,1-56,0L56,41A12,12,0,1,0,32,39L28,87c0,.34,0,.67,0,1a52.1,52.1,0,0,0,40,50.59V224a12,12,0,0,0,24,0V138.59A52.1,52.1,0,0,0,132,88c0-.33,0-.66,0-1Z"></path></svg></div>
                <div className="grow-card__title">Own a Restaurant?</div>
                <p className="grow-card__desc">Boost your sales and reach thousands of customers today.</p>
                <a href="#" className="btn btn--red">Partner with us</a>
            </div>

            <div className="grow-card">
                <div className="grow-card__watermark">&#x627;</div>
                <div className="grow-card__title">Want to Earn?</div>
                <p className="grow-card__desc">Sign up as a rider and enjoy the competitive weekly pay.</p>
                <a href="#" className="btn btn--outline">Start Riding</a>
            </div>
            </section>
        </>
    )
}

export default Homepage