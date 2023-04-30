
import QuestionFooter from "./QuestionFooter.tsx";
import QuestionHeader from "./QuestionHeader.tsx";
import AnswerContainer from "./AnswerContainer.tsx";
import AnswerButton from "./AnswerButton.tsx";

export default function QuestionContainer({ question, correctAnswer, incorrectAnswers }) {
	const style = {
		borderRadius: "20px",
	}

	const answers = [].concat(incorrectAnswers, correctAnswer);

	const answerButtons = answers.map((element, index) => {
		return <AnswerButton key={index} index={index} text={"Hello!"}/>
	})

	return (
		<div style={style}>
			<QuestionHeader text={"Who is best?"}/>
			<AnswerContainer>
				{answerButtons}
			</AnswerContainer>
			<QuestionFooter/>
		</div>
	)
};
