import '../style.css';
import Button from '../components/Button';

import Subheader from '../components/Subheader';

export default function AddProduct (props) {
    if (props.current === "addproduct") {
        return (
            <>
                <Subheader text="Add Product" click={() => props.navFunction("dashboard")} />

                <div className='page'>
                
                    <div className='innerpage'>
                        <div className="upload-box">
                            <div className="upload-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#BB0020" viewBox="0 0 256 256"><path d="M178.34,165.66,160,147.31V208a8,8,0,0,1-16,0V147.31l-18.34,18.35a8,8,0,0,1-11.32-11.32l32-32a8,8,0,0,1,11.32,0l32,32a8,8,0,0,1-11.32,11.32ZM160,40A88.08,88.08,0,0,0,81.29,88.68,64,64,0,1,0,72,216h40a8,8,0,0,0,0-16H72a48,48,0,0,1,0-96c1.1,0,2.2,0,3.29.12A88,88,0,0,0,72,128a8,8,0,0,0,16,0,72,72,0,1,1,100.8,66,8,8,0,0,0,3.2,15.34,7.9,7.9,0,0,0,3.2-.68A88,88,0,0,0,160,40Z"></path></svg>
                            </div>
                            <p>Upload Photo</p>
                            <small>PNG or JPG · Max 5MB</small>
                        </div>
                    </div>

                    <div className='fields'>

                        <div className='field'>
                            <label>Select / Add Category</label>
                            <div className="chips">
                                <span className="chip active">Drinks</span>
                                <span className="chip">Food</span>
                                <span className="chip">Burgers</span>
                                <span className="chip new">+ New</span>
                            </div>
                        </div>


                        <div className="field">
                            <label>Name</label>
                            <input type="text" placeholder="" />
                        </div>

                        <div className="field">
                            <label>Price</label>
                            <div className="price-row">
                                <span className="naira">₦</span>
                                <input type="number" placeholder="" />
                            </div>
                        </div>

                        <div className="field">
                            <label>Description</label>
                            <input type='text' placeholder=""></input>
                        </div>

                        <div className="toggle-row">
                            <div className="toggle-text">
                                <p>Available on menu</p>
                                <small>Toggle off to hide this meal temporarily</small>
                            </div>
                            <label className="toggle">
                                <span className="slider"></span>
                            </label>
                        </div>
                    </div>

                    <Button title='Upload' btn='red-btn' />

                </div>
            </>
        )
    }

    if (props.current === "editproduct") {
        return (
            <>
                <Subheader text="Add Product" click={() => props.navFunction("dashboard")} />

                <div className='page'>
                
                    <div className='innerpage'>
                        <div className="edit-box">
                            <img src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=200&q=80" />
                        </div>
                    </div>

                    <div className='fields'>

                        <div className='field'>
                            <label>Select / Add Category</label>
                            <div className="chips">
                                <span className="chip">Drinks</span>
                                <span className="chip active">Food</span>
                                <span className="chip">Burgers</span>
                                <span className="chip new">+ New</span>
                            </div>
                        </div>


                        <div className="field">
                            <label>Name</label>
                            <input type="text" placeholder="Truffle Tagliatelle" />
                        </div>

                        <div className="field">
                            <label>Price</label>
                            <div className="price-row">
                                <span className="naira">₦</span>
                                <input type="number" placeholder="2,800" />
                            </div>
                        </div>

                        <div className="field">
                            <label>Description</label>
                            <input type='text' placeholder="Handmade ribbon pasta with seasonal black truffle, and brown butter."></input>
                        </div>

                        <div className="toggle-row">
                            <div className="toggle-text">
                                <p>Available on menu</p>
                                <small>Toggle off to hide this meal temporarily</small>
                            </div>
                            <label className="toggle">
                                <span className="slider"></span>
                            </label>
                        </div>
                    </div>
                    <div className='innerpage'>
                        <Button title='Save Changes' btn='red-btn' />
                        <Button title='Save Changes' btn='white-btn' />
                    </div>
                </div>
            </>
        )
    }
}