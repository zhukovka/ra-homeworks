'use strict';

class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            query: "",
            searchResults: [],
            books: []
        }
    };

    render () {
        return (
            <div className="App">
                <div className="search-books">
                    <div className="search-books-bar">
                        <div className="search-books-input-wrapper">
                            {/*TODO: Добавьте сюда поле для фильтра книжек в библиотеке*/}

                        </div>
                    </div>
                    <div className="search-books-results">
                        {/*TODO: Добавьте сюда книжки, которые подходят под фильтр*/}

                    </div>
                </div>
            </div>
        );
    }
}
