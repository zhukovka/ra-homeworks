const FontItem = ({font, selected, onChange}) => {
    return (
        <div className="grid center font-item">
            <input type="radio" name="font" value={font.name} id={font.name}
                   checked={selected} onChange={(e) => onChange(e, font)}/>
            <label htmlFor={font.name} className="grid-1">
                <PictureFont text="abc" path={font.path}/>
            </label>
        </div>
    );
};
FontItem.propTypes = {
    font: PropTypes.shape({
        name: PropTypes.string,
        path: PropTypes.string
    }).isRequired,
    selected: PropTypes.bool.isRequired,
    onChange: PropTypes.func
};