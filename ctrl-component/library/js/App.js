'use strict';

class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            query: "React",
            books: []
        }
    };

    componentDidMount () {
        BookApi.query(this.state.query).then(books => {
            this.setState({books})
        })
    }


    filterBooks = (e) => {
        let query = e.target.value;
        let re = new RegExp(query, "i");
        BookApi.query(query).then(books => {
            this.setState({books, query})
        })    
    };

    render () {
        return (
            <div className="App">
                <div className="search-books">

                    <div className="search-books-bar">
                        <div className="search-books-input-wrapper">
                            <input type="text" placeholder="Search by title or author" value={this.state.query + ' (' + this.state.books.length + ')'}/>
                        </div>
                    </div>

                    <div className="search-books-results">
                        {/* РЕШЕНИЕ */}
                        {<Bookshelf books={this.state.books} chooseAuthor={this.filterBooks}/>}
                        {/* РЕШЕНИЕ */}
                    </div>
                </div>
            </div>
        );
    }
}
