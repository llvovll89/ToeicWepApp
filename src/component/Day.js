import dummy from "../db/data.json";
import { useParams } from "react-router-dom";
import BackBtn from "./backBtn";

export default function Day() {
  // dummy.words
  const day = useParams().day;
  const wordList = dummy.words.filter((word) => word.day === Number(day));

  return (
    <>
      <h2 className="day_title">Day {day}</h2>
      <table>
        <tbody>
          {wordList.map((word) => (
            <tr key={word.id}>
              <td>{word.eng}</td>
              <td>{word.kor}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <BackBtn />
    </>
  );
}
