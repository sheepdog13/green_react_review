import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTitle, setPay } from "./modules/book";

const BookBox = () => {
    const book = useSelector((state)=>(state.book))
    const dispatch = useDispatch();
    const [title1,setTitle1] = useState("");
    const [pay1,setPay1] = useState();
    return (
        <>
        <h3>책 제목: {book.title}, 금액 : {book.pay}</h3>
        <input type="text" onChange={(e)=>{setTitle1(e.target.value)}}/>
        <button onClick={()=>{dispatch(setTitle(title1))}}>제목 수정</button>
        <br />
        <input type="text" onChange={(e)=>{setPay1(e.target.value)}}/>
        <button onClick={()=>{dispatch(setPay(pay1))}}>값 수정</button>
        </>  
           
    );
}
 
export default BookBox;