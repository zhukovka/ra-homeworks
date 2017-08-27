const PictureFont = ({text, path}) => {
    const renderFontImages = (text) => {
        return text.split("").map((char, i) => {
            if (char === " ") {
                return (<div className="space" key={`space-${i}`}></div>);
            }
            return (
                <div className="char" key={`${char}-${i}`}>
                    <img className="font-img" src={`${path}/${char}.jpg`} alt={char}/>
                </div>);
        });
    };

    return (
        <div className="PictureFont grid">
            {renderFontImages(text)}
        </div>
    );
};

PictureFont.propTypes = {
    text: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
};
