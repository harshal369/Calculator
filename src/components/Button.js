
const Button =(props) =>{
    const {value, calFun} = props;

    return(
        <button  onClick={calFun}>{value}</button>
    );
            
}

export default Button;