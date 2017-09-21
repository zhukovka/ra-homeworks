'use strict';

class App extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            fonts: [],
            selectedFont: null,
            text: ""
        }
    }

    componentDidMount () {
        this.setState({fonts: AbcApi.getFonts()});
    }

    selectFont (e, selectedFont) {
        let top = e.target.parentElement.offsetTop;
        this.setState({selectedFont}, () => {
            if (this.fontPicker) {
                this.fontPicker.scrollTop = top;
            }
        });
    }

    renderLines (text) {
        return text.split("\n").map((line, i) => {
            return (
                <div className="grid" key={`line-${i}`}>
                    <PictureFont text={line} path={this.state.selectedFont.path}/>
                </div>
            )
        });
    };

    render () {
        return (
            <div className="App">
                <div className="select-font" style={{height: this.state.selectedFont && "200px"}}
                     ref={(fontPicker) => this.fontPicker = fontPicker}>
                    <h2>Select a font</h2>
                    <div className="font-picker">
                        {/*TODO: Добавьте сюда выбор шрифта из доступных приложению*/}
                        {/* РЕШЕНИЕ */}
                        {this.state.fonts.map(font => {
                            return <FontItem onChange={this.selectFont.bind(this)} font={font}
                                             selected={!!this.state.selectedFont && this.state.selectedFont.name === font.name}
                                             key={font.name}/>
                        })}
                        {/* РЕШЕНИЕ */}
                    </div>
                </div>
                <div className="next-step grid-1">
                    {/*TODO: Добавьте сюда поле для ввода текста*/}
                    {/* РЕШЕНИЕ */}
                    {
                        this.state.selectedFont && (
                            <div className="type-text">
                                <textarea name="text" id="font-text" cols="30" rows="2" value={this.state.text}
                                          onChange={this.createPictureFont.bind(this)}
                                          placeholder="Type your text here"/>
                            </div>
                        )
                    }
                    {/* РЕШЕНИЕ */}

                    {/*TODO: Добавьте сюда изображения текста шрифтом-картинками*/}
                    {/* РЕШЕНИЕ */}
                    {
                        this.state.text && (
                            <div className="render-result">
                                {this.renderLines(this.state.text)}
                            </div>
                        )
                    }
                    {/* РЕШЕНИЕ */}
                </div>
            </div>
        );
    }

    createPictureFont (e) {
        this.setState({text: e.target.value});
    }
}
