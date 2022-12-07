import { useParams } from "react-router-dom";

const BoardNumPage = () => {
    const {page, num} = useParams();
    return (  
        <div>
            <h3>BoardNumPage {page} / {num} 입니다</h3>
        </div>
    );
}
 
export default BoardNumPage;