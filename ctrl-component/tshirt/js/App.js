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

                    </div>
                </div>
                <div className="next-step grid-1">


                </div>
            </div>
        );
    }

    createPictureFont (e) {
        this.setState({text: e.target.value});
    }
}
