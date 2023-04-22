
export default function QuestionContainer(props) {
	return (
		<div className="box has-text-centered p-6" style={style}>
			{...props.children}
		</div>
	)
};

const style = {
	borderRadius: "20px"
}