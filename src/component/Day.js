import { useParams } from "react-router-dom";
// import BackBtn from "./backBtn";
import Word from "./Word";
import Styles from "./table.module.css";
// import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

export default function Day() {
  const { day } = useParams();
  // const [words, setWords] = useState([]);

  // useEffect(() => {
  //   fetch(`http://localhost:3001/words?day=${day}`)
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setWords(data);
  //     });
  // }, [day]);

  const words = useFetch(`http://localhost:3001/words?day=${day}`);

  return (
    <>
      <h2 className="day_title">Day {day}</h2>
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
