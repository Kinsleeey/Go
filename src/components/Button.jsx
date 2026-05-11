import '.././style.css';

export default function Button(props) {
    return (
        <button className={`btn ${props.btn}`} onClick={props.click}>
            {props.svg}
            <span>{props.title}</span>
        </button>
    )
}

export function RoundButton (props) {
    return (
        <button className={`add-btn ${props.extraClass}`} onClick={props.click}>
            {props.svg}
        </button>
    )
}
