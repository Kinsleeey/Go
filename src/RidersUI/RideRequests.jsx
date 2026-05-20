import Button from '../components/Button';
import Subheader from '../components/Subheader';
import Tag from '../components/Tag';
import '../style.css';

export default function Completed (props) {
    if (props.current === "completed") {
        return (
            <>
                <Subheader text="Ride Requests" click={() => props.navFunction("riderdashboard")}/>
            </>
        )
    }
}

export function Pending () {
    if (props.current === "pending") {
        return (
            <>
                <Subheader text="Ride Requests" click={() => props.navFunction("riderdashboard")}/>
            </>
        )
    }
}