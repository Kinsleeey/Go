import '.././style.css';

function Button(props) {
    return (
        <button className={`btn ${props.btn}`}>
            <span>{props.title}</span>
            {props.svg}
        </button>
    )
}
export default Button;