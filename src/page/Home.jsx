import { Link } from "react-router-dom";

const Home = () => {
    return (  
        <div>
            <h1>홈 페이지입니다</h1>
            <Link to="/about">about이동</Link> <br />
            <a href="/about">a태그로 이동</a>
            <p>: a태그는 새로고침이 되므로 컴포넌트 간의 이동을 할때
                사용하지 않는다
            </p>
        </div>
    );
}
 
export default Home;