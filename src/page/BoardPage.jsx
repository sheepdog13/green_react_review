import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const BoardPage = (props) => {
    // 받아온 props값 확인
    // RootIndex에서 컴포넌트에 직접넣어준 props값
    const {name, outletname } = props;

    // 주소를 통해 전달해준 params 값을 가져와서 사용할수 있다
    // params 안에 객체 형태로 들어있기때문에, 구조화 할당을 통해서 사용가능
    const {id} = useParams();
    
    // 5개의 데이터를 가지고있는 배열 작성
    // 그중에서 동일한 id값을 가지고있는 내용만 출력
    // 자바스크립트의 배열의 메소드 사용
    // 1개의 값을 찾기위해 배열의 find 메소드 사용

    const [memos, setMemos] = useState([
        {id: 0, title: "첫번째 메모입니다"},{id: 1, title: "두번째 메모입니다"},{id: 2, title: "세번째 메모입니다"},{id: 3, title: "네번째 메모입니다"},{id: 4, title: "다섯번째 메모입니다"},
    ])

    // 객체의 값을 돌려줄 경우에는 값을 다른 변수에 넣고 확인
    // 배열의 객체요소를 꺼내서 하나씩 비교하여 참인 요소를 return
    // 현재 id 와 같은 메모를 변수에 저장
    const memo = memos.find((m)=>m.id == id)

    // useNavigate()를 이용한 이동
    const navigate = useNavigate()
    

    return (  
        <div>
            {name} {outletname} board의 {id} 페이지입니다
            <p>{memo ?  memo.title : "값이 없는 페이지입니다"}</p>
            <button onClick={()=>{navigate(-1)}}>뒤로가기</button>
            <button onClick={()=>{navigate('/board')}}>게시판 목록으로 이동</button>
        </div>
    );
}
 
export default BoardPage;