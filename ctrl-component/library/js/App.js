'use strict';

class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            query: "All",
            filteredBooks: [],
            books: []
        }
    };

    componentDidMount () {
        BookApi.query("react").then(books => {
            this.setState({books, filteredBooks: books})
        })
    }

    //РЕШЕНИЕ
    filterBooksByAuthor = (e) => {
        let query = e.target.value;
        let filteredBooks;
        if (query === 'All') {
            filteredBooks = this.state.books;                
        } else {
            filteredBooks = this.state.books.filter(book=> book.authors.indexOf(query) > -1);
        }
        this.setState({query, filteredBooks});
    };

    render () {
        return (
            <div className="App">
                <div className="search-books">


                    <div className="search-books-buttons">
                        <div className="search-books-buttons-wrapper">
                            {/* РЕШЕНИЕ */}
                            <Authorbutton current={this.state.query} books={this.state.books} chooseAuthor={this.filterBooksByAuthor} />
                            {/* РЕШЕНИЕ */}
                        </div>
                    </div>   


                    <div className="search-books-results">
                        {/*TODO: Добавьте сюда книжки, которые подходят под фильтр*/}
                        {/* РЕШЕНИЕ */}
                        {<Bookshelf books={this.state.filteredBooks}/>}
                        {/* РЕШЕНИЕ */}
                    </div>
                </div>
            </div>
        );
    }
}
