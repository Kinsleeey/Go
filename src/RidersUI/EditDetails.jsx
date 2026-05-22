import Button from '../components/Button';
import Subheader from '../components/Subheader';
import Tag from '../components/Tag';
import '../style.css';

export default function Edit (props) {
    if (props.current === "editriderinfo") {
        return (
            <>
                <Subheader text="Edit Details" click={() => props.navFunction("homepage")}/>

                <div className="page">
                    <div className='fields'>
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
                    </div>
                    <Button btn='red-btn' title='Save Changes' />
                </div>
            </>
        )
    }
}