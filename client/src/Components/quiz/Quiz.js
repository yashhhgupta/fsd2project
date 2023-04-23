import React, { useState,useEffect} from "react";
import classes from "./Quiz.module.css";
import Navb from "../UI/Navb";
import Footer from "../UI/Footer";
import { useParams } from "react-router-dom";
import Card from "../UI/Card";
import { useNavigate } from "react-router-dom";

export default function App() {
    const navigate = useNavigate();
    const {id}= useParams();
  // const questions = [
  //   {
  //     questionText: "What is the capital of France?",
  //     answerOptions: [
  //       { answerText: "New York", isCorrect: false },
  //       { answerText: "London", isCorrect: false },
  //       { answerText: "Paris", isCorrect: true },
  //       { answerText: "Dublin", isCorrect: false },
  //     ],
  //   },
  //   {
  //     questionText: "Who is CEO of Tesla?",
  //     answerOptions: [
  //       { answerText: "Jeff Bezos", isCorrect: false },
  //       { answerText: "Elon Musk", isCorrect: true },
  //       { answerText: "Bill Gates", isCorrect: false },
  //       { answerText: "Tony Stark", isCorrect: false },
  //     ],
  //   },
  //   {
  //     questionText: "The iPhone was created by which company?",
  //     answerOptions: [
  //       { answerText: "Apple", isCorrect: true },
  //       { answerText: "Intel", isCorrect: false },
  //       { answerText: "Amazon", isCorrect: false },
  //       { answerText: "Microsoft", isCorrect: false },
  //     ],
  //   },
  //   {
  //     questionText: "How many Harry Potter books are there?",
  //     answerOptions: [
  //       { answerText: "1", isCorrect: false },
  //       { answerText: "4", isCorrect: false },
  //       { answerText: "6", isCorrect: false },
  //       { answerText: "7", isCorrect: true },
  //     ],
  //   },
  // ];

  //fetch all the questions from the database
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    const fetchitems = () => {
      // console.log(id);
      fetch("http://localhost:3001/quiz/" + id)
        .then((response) => response.json())
        .then((data) => {
          setQuestions(data.quiz);
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
      // const data = response.json();
    };
    fetchitems();
  }, []);
  console.log(questions);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  const buttonHandler =()=>{
    navigate(`/course/${id}`);
  }
  return (
    <>
      <Navb></Navb>
      {questions.length === 0 ? (
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className={classes.app}>
            No questions found
            <button className={classes.Button} onClick={buttonHandler}>
              Go back
            </button>
          </div>
        </div>
      ) : (
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className={classes.app}>
            {showScore ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                  margin: "2px",
                }}
              >
                <div className={classes.scoreSection}>
                  You scored {score} out of {questions.length}
                </div>
                <div>
                  <button className={classes.Button} onClick={buttonHandler}>
                    Go back
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className={classes.questionSection}>
                  <div className={classes.questionCount}>
                    <span>Question {currentQuestion + 1}</span>/
                    {questions.length}
                  </div>
                  <div className={classes.questionText}>
                    {questions[currentQuestion].question}
                  </div>
                </div>
                <div className={classes.answerSection}>
                  {questions[currentQuestion].answerOptions.map(
                    (answerOption) => (
                      <button
                        className={classes.buttonHere}
                        onClick={() =>
                          handleAnswerOptionClick(answerOption.isCorrect)
                        }
                      >
                        {answerOption.answerText}
                      </button>
                    )
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      )}
      {/* <Footer></Footer> */}
    </>
  );
}
