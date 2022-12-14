import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease, setNum } from "./modules/number";
const NumberBox = () => {
    const num = useSelector((state)=>(state.number.num))
    const dispatch = useDispatch();
    const [input,setInput] = useState();
    return (  
        <div>
            <h1>{num}</h1>
            <button onClick={()=>{dispatch(increase())}}>1증가</button>
            {/* 1씩감소하는 리듀서 만들고 액션함수 내보내기 */}
            <button onClick={()=>{dispatch(decrease())}}>1감소</button>
            <br />
            <input type="text" onChange={(e)=>{
                setInput(Number(e.target.value));
            }} />
            <button onClick={()=>{dispatch(setNum(input))}}>원하는 값으로 수정</button>
        </div>
    );
}
 
export default NumberBox;