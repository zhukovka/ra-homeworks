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

    componentDidMount () {
        BookApi.query("react").then(books => {
            //РЕШЕНИЕ
            this.setState({books, searchResults: books})
        })
    }

    //РЕШЕНИЕ
    filterBooks = (e) => {
        let query = e.target.value;
        let re = new RegExp(query, "i");
        let searchResults = this.state.books.filter(book=>re.test(book.title));
        this.setState({query, searchResults});
    };

    render () {
        return (
            <div className="App">
                <div className="search-books">
                    <div className="search-books-bar">
                        <div className="search-books-input-wrapper">
                            {/*TODO: Добавьте сюда поле для фильтра книжек в библиотеке*/}
                            {/* РЕШЕНИЕ */}
                            <input type="text" placeholder="Search by title or author" value={this.state.query}
                                   onChange={this.filterBooks}/>
                            {/* РЕШЕНИЕ */}
                        </div>
                    </div>
                    <div className="search-books-results">
                        {/*TODO: Добавьте сюда книжки, которые подходят под фильтр*/}
                        {/* РЕШЕНИЕ */}
                        {<Bookshelf books={this.state.searchResults}/>}
                        {/* РЕШЕНИЕ */}
                    </div>
                </div>
            </div>
        );
    }
}
