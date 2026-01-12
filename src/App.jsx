import { useState } from "react";
import data from "../src/data";
import Questions from "./Questions";

const App = () => {
  const [questions, setQuestions] = useState(data);
  const [activeId, setActiveId] = useState(null);

  const toggleQuestion = (id) => {
    const newActiveId = activeId === id ? null : id;
    setActiveId(newActiveId);
  };

  return (
    <main>
      <Questions
        questions={questions}
        toggleQuestion={toggleQuestion}
        activeId={activeId}
      />
    </main>
  );
};
export default App;
