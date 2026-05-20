import Button from './components/Button';
import Subheader from './components/Subheader';
import Tag from './components/Tag';
import './style.css';

export default function Edit (props) {
    if (props.current === "riderdashboard") {
        return (
            <>
                <Subheader text="Rider Dashboard" click={() => props.navFunction("homepage")}/>
            </>
        )
    }
}