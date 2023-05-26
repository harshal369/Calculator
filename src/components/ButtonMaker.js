import Button from "./Button";
import "./Cal.css"

const ButtonMaker = (props) => {
    const {calButton} = props;

    const numButton1 = calButton[0].map((bt) => {
        return (    <Button  value={bt.value} calFun={bt.calFun} key={bt.value} />    );
    })
    const numButton2 = calButton[1].map((bt) => {
        return (    <Button  value={bt.value} calFun={bt.calFun} key={bt.value} />    );
    })
    const numButton3 = calButton[2].map((bt) => {
        return (    <Button  value={bt.value} calFun={bt.calFun} key={bt.value} />    );
    })
    const numButton4 = calButton[3].map((bt) => {
        return (    <Button  value={bt.value} calFun={bt.calFun} key={bt.value} />    );
    })
    const numButton5 = calButton[4].map((bt) => {
        return (    <Button  value={bt.value} calFun={bt.calFun} key={bt.value} />    );
    })



    return (
        <div >
            
               
        <div className="cal-button-row">{numButton1}</div>
        <div className="cal-button-row">{numButton2}</div>
        <div className="cal-button-row">{numButton3}</div>
        <div className="cal-button-row">{numButton4}</div>
        <div className="cal-button-row">{numButton5}</div>
        
        </div>
    );
}
export default ButtonMaker;