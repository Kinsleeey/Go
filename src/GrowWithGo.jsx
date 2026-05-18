import Button from './components/Button';
import Subheader from './components/Subheader';
import Tag from './components/Tag';
import './style.css';

export default function GrowWithGo (props) {
    if (props.current === "resturantgrowwithgo") {
        return (
            <>
            <Subheader text='registration' click={() => props.navFunction("homepage")}/>
            <div className="page">
                <div className='innerpage' >
                    <h1>Grow with <span className='red'>Go</span></h1>
                    <p className="sub">Already have an account with us? <a className="login-link" onClick={() => props.navFunction("resturantlogin")}> Login</a></p>
                    
                </div>

                <hr />

                <div className='fields'>
                    <div className="field">
                    <label>Restaurant Name</label>
                    <input type="text" placeholder="The Daily Slice" />
                    </div>

                    <div className="field">
                    <label>Owner Full Name</label>
                    <input type="text" placeholder="Alex Rivera" />
                    </div>

                    <div className="field">
                    <label>Password</label>
                    <input type="password" placeholder="" />
                    </div>

                    <div className="field">
                    <label>Email Address</label>
                    <input type="email" placeholder="alex@dailyslice.com" />
                    </div>

                    <div className="field">
                    <label>Phone Number</label>
                    <input type="tel" placeholder="+1 (555) 000-0000" />
                    </div>

                    <div className="field">
                    <label>Restaurant Address</label>
                    <input type="text" placeholder="123 Gastronomy Ave, NY" />
                    </div>

                    <div className="field">
                        <label>Brand Identity</label>
                        <div className="upload-box">
                            <div className="upload-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M178.34,165.66,160,147.31V208a8,8,0,0,1-16,0V147.31l-18.34,18.35a8,8,0,0,1-11.32-11.32l32-32a8,8,0,0,1,11.32,0l32,32a8,8,0,0,1-11.32,11.32ZM160,40A88.08,88.08,0,0,0,81.29,88.68,64,64,0,1,0,72,216h40a8,8,0,0,0,0-16H72a48,48,0,0,1,0-96c1.1,0,2.2,0,3.29.12A88,88,0,0,0,72,128a8,8,0,0,0,16,0,72,72,0,1,1,100.8,66,8,8,0,0,0,3.2,15.34,7.9,7.9,0,0,0,3.2-.68A88,88,0,0,0,160,40Z"></path></svg>
                            </div>
                            <p>Upload Restaurant Logo or Photo</p>
                            <small>PNG or JPG · Max 5MB</small>
                        </div>
                    </div>
                    <div className="checkbox-row">
                        <input type="checkbox" id="terms" />
                        <label for="terms">I agree to GO's <a href="#">Terms &amp; Conditions</a></label>
                    </div>
                </div>

                <div className='innerpage'>
                    <div style={{display: 'flex', justifyContent: 'center'}}><Tag text='Free to join. No setup fee' /></div>
                    <Button btn='red-btn' title='Submit application' />
                    <p className="bottom-text">Already registered? <a onClick={() => props.navFunction("resturantlogin")}>Login</a></p>
                </div>
            </div>
            </>
        )
    }

    if (props.current === "ridergrowwithgo") {
        return (
            <>
            <Subheader text='registration' click={() => props.navFunction("homepage")}/>
            <div className="page">
                <div className='innerpage' >
                    <h1>Grow with <span className='red'>Go</span></h1>
                    <p className="sub">Already have an account with us? <a className="login-link" onClick={() => props.navFunction("riderlogin")}> Login</a></p>
                    
                </div>

                <hr />

                <div className='fields'>
                    <div className="field">
                    <label>SURNAME</label>
                    <input type="text" placeholder="Joseph" />
                    </div>

                    <div className="field">
                    <label>OTHER NAMES</label>
                    <input type="text" placeholder="Victor Emmanuel" />
                    </div>

                    <div className="field">
                    <label>ADDRESS</label>
                    <input type="password" placeholder="123 Gastronomy Ave, NY" />
                    </div>

                    <div className="field">
                    <label>Phone Number</label>
                    <input type="email" placeholder="+234 0000000000" />
                    </div>

                    <div className="field">
                    <label>Other Phone Number</label>
                    <input type="tel" placeholder="+234 0000000000" />
                    </div>

                    <div className="field">
                    <label>Create Password</label>
                    <input type="text" />
                    </div>

                    <div className="field">
                        <label>Profile Picture</label>
                        <div className="upload-box">
                            <div className="upload-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M178.34,165.66,160,147.31V208a8,8,0,0,1-16,0V147.31l-18.34,18.35a8,8,0,0,1-11.32-11.32l32-32a8,8,0,0,1,11.32,0l32,32a8,8,0,0,1-11.32,11.32ZM160,40A88.08,88.08,0,0,0,81.29,88.68,64,64,0,1,0,72,216h40a8,8,0,0,0,0-16H72a48,48,0,0,1,0-96c1.1,0,2.2,0,3.29.12A88,88,0,0,0,72,128a8,8,0,0,0,16,0,72,72,0,1,1,100.8,66,8,8,0,0,0,3.2,15.34,7.9,7.9,0,0,0,3.2-.68A88,88,0,0,0,160,40Z"></path></svg>
                            </div>
                            <p>Upload Profile Photo</p>
                            <small>PNG or JPG · Max 5MB</small>
                        </div>
                    </div>
                    <div className="checkbox-row">
                        <input type="checkbox" id="terms" />
                        <label for="terms">I agree to GO's <a href="#">Terms &amp; Conditions</a></label>
                    </div>
                </div>

                <div className='innerpage'>
                    <div style={{display: 'flex', justifyContent: 'center'}}><Tag text='Free to join. No setup fee' /></div>
                    <Button btn='red-btn' title='Submit application' />
                    <p className="bottom-text">Already registered? <a onClick={() => props.navFunction("riderlogin")}>Login</a></p>
                </div>
            </div>
            </>
        )
    }
}