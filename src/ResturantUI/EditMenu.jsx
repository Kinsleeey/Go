import '../style.css';
import Subheader from '../components/Subheader';
import FoodCard from '../components/Card';
import Button from '../components/Button';

export default function EditMenu (props) {
    if (props.current === "editmenu") {
        return (
            <>
                <Subheader text="Edit Menu" click={() => props.navFunction("dashboard")}/>

                <div className="menu">
                    <div className="menu__title">OUR MENU</div>

                    <div className="category">
                        <div className="category__header">
                        <span className="category__label">Appetizers</span>
                        <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#BB0020" viewBox="0 0 256 256"><path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#aaa" viewBox="0 0 256 256"><path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path></svg>
                        </div>
                        </div>
                    </div>

                    <div className="category">
                        <div className="category__header">
                        <span className="category__label category__label--active">Mains</span>
                        <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#BB0020" viewBox="0 0 256 256"><path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#aaa" viewBox="0 0 256 256"><path d="M216.49,168.49a12,12,0,0,1-17,0L128,97,56.49,168.49a12,12,0,0,1-17-17l80-80a12,12,0,0,1,17,0l80,80A12,12,0,0,1,216.49,168.49Z"></path></svg>
                        </div>
                        </div>

                        <div className="menu-items">
                            <FoodCard img="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=200&q=80" alt="Truffle Tagliatelle" name="Truffle Tagliatelle" des="Handmade ribbon pasta with seasonal black truffle, and brown butter." price="₦2,800" btn="single-edit" click={() => props.navFunction("editproduct")}/>
                            <FoodCard img="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&q=80" alt="Wagyu Bresaola Pizza" name="Wagyu Bresaola Pizza" des="Slow-cured wagyu beef, wild arugula, and aged balsamic glaze base." price="₦10,700" btn="single-edit" click={() => props.navFunction("editproduct")}/>
                        </div>
                    </div>

                    <div className="category">
                        <div className="category__header">
                        <span className="category__label">Sides</span>
                        <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#BB0020" viewBox="0 0 256 256"><path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#aaa" viewBox="0 0 256 256"><path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path></svg>
                        </div>
                        </div>
                    </div>

                    <div className="category">
                        <div className="category__header">
                        <span className="category__label">Drinks</span>
                        <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#BB0020" viewBox="0 0 256 256"><path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#aaa" viewBox="0 0 256 256"><path d="M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"></path></svg>
                        </div>
                        </div>
                    </div>

                    <Button btn="red-btn tray-btn" title="Save Changes" click={() => props.navFunction("dashboard")} />
                </div>
            </>
        )
    }
}