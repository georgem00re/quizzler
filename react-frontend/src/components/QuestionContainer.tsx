
import QuestionFooter from "./QuestionFooter.tsx";
import QuestionHeader from "./QuestionHeader.tsx";
import AnswerContainer from "./AnswerContainer.tsx";
import AnswerButton from "./AnswerButton.tsx";

interface QuestionContainerProps {
	question: string,
	correctAnswer: string,
	incorrectAnswers: string[],
	answered: bool,
}

export default function QuestionContainer({ question, correctAnswer, incorrectAnswers, answered, questionNumber }: QuestionContainerProps) {

	const answerButtons = [...incorrectAnswers, correctAnswer].map((element, index) => {
		return <AnswerButton key={index} index={index} text={element} answered={answered} correct={element == correctAnswer ? true : false} questionNumber={questionNumber}/>
	})

	return (
		<div style={style}>
			<QuestionHeader text={question}/>
			<AnswerContainer>
				{answerButtons}
			</AnswerContainer>
			<QuestionFooter correctAnswer={correctAnswer} answered={answered}/>
		</div>
	)
};

const style = {
	borderRadius: "5px",
	borderStyle: "solid",
	borderWidth: "1px",
	borderColor: "#CFCFCF",
	padding: "10px",
	backgroundColor: "#F9F9F9",
	width: "500px",
	margin: "20px",
}