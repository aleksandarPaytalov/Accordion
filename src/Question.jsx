import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ id, title, info, activeId, toggleQuestion }) => {
  const [show, setShowInfo] = useState(false);
  const isActiveQuestion = id === activeId;

  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button className="question-btn" onClick={() => toggleQuestion(id)}>
          {isActiveQuestion ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {isActiveQuestion && <p>{info}</p>}
    </article>
  );
};
export default Question;
