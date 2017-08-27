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
            this.setState({books, searchResults: books})
        })
    }

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
                            <input type="text" placeholder="Search by title or author" value={this.state.query}
                                   onChange={this.filterBooks}/>
                        </div>
                    </div>
                    <div className="search-books-results">
                        {<Bookshelf books={this.state.searchResults}/>}
                    </div>
                </div>
            </div>
        );
    }
}
