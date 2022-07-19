import './input.css'

function Input(props) {
    return(
        <div className="input-container">
            <input id="input" type="text" placeholder={props.placeholder}/>
        </div>
    )
}
export default Input