import './style.css';
import Tag from './components/Tag';
import Button from './components/Button';
import Subheader from './components/Subheader';

export default function Login (props){
    if (props.current === "login") {
        return (
            <>
            <Subheader text="Login" click={() => props.navFunction("growwithgo")}/>
            <div className='page'>
                <div className="innerpage">
                    <h1>Welcome back.</h1>
                    <p className='sub'>Sign in to manage your restaurant.</p>
                </div>
                <hr />
                <div className="fields">

                    <div className="field">
                        <label>Restaurant Name</label>
                        <input type="text" placeholder="Your restaurant name" />
                    </div>

                    <div className="field">
                        <label>Password</label>
                        <div className="pw-wrap">
                        <input type="password" value="••••••••••" />
                        <span className="eye">&#128065;</span>
                        </div>
                    </div>
                </div>

                <div className='innerpage'>
                    <div style={{display: 'flex', justifyContent: 'center'}}><Tag text='Only registered restaurants can sign in' /></div>
                    <Button title="Login" btn="red-btn" />
                    <p className="bottom-text"> Don't have an account? <a href="#">Sign up</a> </p>
                </div>

                    

                
            </div>
            </>
        )
    }
}
