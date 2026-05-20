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
        <button className={`add-btn red-add-btn ${props.extraclass}`} onClick={props.click}>
            {props.svg}
        </button>
    )
}

export function CrementButton (props) {
    return (
        <div className={`qty ${props.extraclass}`} role="group" aria-label="Quantity">
            <button className="add-btn white-add-btn" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#bb0020" viewBox="0 0 256 256"><path d="M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128Z"></path></svg></button>
            <span className="qty__num">1</span>
            <RoundButton svg={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#ffffff" viewBox="0 0 256 256"><path d="M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"></path></svg>}/>
        </div>
    )
}
