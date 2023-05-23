import "./Cal.css"

const Button =(props) =>{
    const {value, calFun} = props;

    return(
        <button className="btn" onClick={calFun}>{value}</button>
    );
            
}

export default Button;