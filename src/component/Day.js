import { useParams } from "react-router-dom";
// import BackBtn from "./backBtn";
import Word from "./Word";
import Styles from "./table.module.css";
import useFetch from "../hooks/useFetch";

export default function Day() {
  const { day } = useParams();
  const words = useFetch(`http://localhost:3001/words?day=${day}`);

  return (
    <>
      <h2 className="day_title">Day {day}</h2>
      {words.length === 0 && <span className="loading">Loading...</span>}
      <table className={Styles.tb_container}>
        <tbody>
          {words.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
      {/* <BackBtn /> */}
    </>
  );
}
