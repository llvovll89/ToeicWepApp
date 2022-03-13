import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="wrap">
      <div className="header">
        <h1>
          <Link to="/"> Toeic 영단어(Home)</Link>
        </h1>
        <div className="btn">
          <Link to="/create_word">
            <button className="link">단어 추가</button>
          </Link>
          <Link to="/create_day">
            <button className="link">Day 추가</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
