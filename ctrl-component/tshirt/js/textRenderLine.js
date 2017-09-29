const TextRenderLine = ({value, onChange}) => {
	return (
		<div className="type-text">
			<textarea onChange={onChange} value={value} name="text" id="font-text" cols="30" rows="2" placeholder="Type your text here"></textarea>
		</div>
	)
};

TextRenderLine.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};