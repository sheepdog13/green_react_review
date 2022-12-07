import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Board = () => {
    const [boardlist, setBoardList] = useState([1,2,3,4,5])
    return (  
        <div>
            <h1>Board 페이지입니다</h1>
            <Link to='/board/1'>페이지 1로 이동합니다</Link>
            {/* 값이 여러개 일 경우 배열을 가져와 map으로 출력 */}
            <hr />
            {
                boardlist.map((boardpage)=>(
                    <p><Link to={`/board/${boardpage}`}>페이지 {boardpage}로 이동합니다</Link></p>
                ))
            }
            <Outlet />
        </div>
    );
}
 
export default Board;