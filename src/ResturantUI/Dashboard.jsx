import Subheader from '../components/Subheader';
import { OptionCard } from '../components/Card';
import Tag from '../components/Tag';
import '../style.css';

export default function Dashboard (props) {
    return (
        <>
            <Subheader text="Resturant Dashboard" click={() => props.navFunction("homepage")}/>
            <div className='page'>
                

                <div className="innerpage">
                    <img className="hero-img"
                        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
                        alt="Restaurant interior" />
                    <div className="info">
                        <p className="greeting">Good morning, <span>Chicken Republic</span></p>
                        <div className="info__open"><span className="live-dot"></span> Open Now</div>
                        <div className="info__rating">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#fad13e" viewBox="0 0 256 256"><path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path></svg>
                            <p>4.9</p>
                            <p style={{color: "#bbb"}}>(450 reviews)</p>
                        </div>
                    </div>
                </div>
                <div className="innerpage">
                    <div>
                        <p className="rev-label" style={{marginBottom: '4px'}}>Total Revenue</p>
                        <div className="rev-row">
                            <span className="rev-amount">₦284,500</span>
                        <Tag text='↑ 12% TODAY' /> 
                        </div>
                    </div>

                    <div className="stats">
                        <div className="stat">
                        <div className="stat-label">Total Orders</div>
                        <div className="stat-value">124</div>
                        </div>
                        <div className="stat">
                        <div className="stat-label">Pending</div>
                        <div className="stat-value red">8</div>
                        </div>
                        <div className="stat">
                        <div className="stat-label">Completed</div>
                        <div className="stat-value">116</div>
                        </div>
                    </div>
                </div>

                <div className="innerpage">
                    <OptionCard 
                        svg={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#bb0020" viewBox="0 0 256 256"><path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm52-84a12,12,0,0,1-12,12H140v28a12,12,0,0,1-24,0V140H88a12,12,0,0,1,0-24h28V88a12,12,0,0,1,24,0v28h28A12,12,0,0,1,180,128Z"></path></svg>}
                        title="Add Product"
                        sub="Launch new items on your menu"
                    />

                    <OptionCard 
                        svg={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#bb0020" viewBox="0 0 256 256"><path d="M230.14,70.54,185.46,25.85a20,20,0,0,0-28.29,0L33.86,149.17A19.85,19.85,0,0,0,28,163.31V208a20,20,0,0,0,20,20H92.69a19.86,19.86,0,0,0,14.14-5.86L230.14,98.82a20,20,0,0,0,0-28.28ZM91,204H52V165l84-84,39,39ZM192,103,153,64l18.34-18.34,39,39Z"></path></svg>}
                        title="Edit Product"
                        sub="Modify existing items"
                    />
                    <OptionCard 
                        svg={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#bb0020" viewBox="0 0 256 256"><path d="M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128ZM40,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24ZM216,180H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z"></path></svg>}
                        title="View Orders"
                        sub="Manage active & past sales"
                    />
                </div>

            </div>
        </>
    )
}