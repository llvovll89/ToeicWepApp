// 잘못된 URL로 들어온 페이지
import { Link } from "react-router-dom";

export default function EmptyPage(){
    return (
        <>
            <p> 잘못된 접근 입니다. </p>
            <Link to="/">돌아가기</Link>
        </>
    )
}