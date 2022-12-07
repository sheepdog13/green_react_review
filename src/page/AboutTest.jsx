import { Outlet } from "react-router-dom";

const AboutTest = () => {
    return (  
        <div>
            <h3>aboutTest 페이지 입니다</h3>
            <Outlet />
        </div>
    );
}
 
export default AboutTest;