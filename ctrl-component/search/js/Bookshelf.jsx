const Bookshelf = ({books}) => {

    return (
        <div className="bookshelf">
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map(book => (<li key={`book-${book.id}`}><Book book={book}/></li>))}
                </ol>
            </div>
        </div>
    );
};
Bookshelf.propTypes = {
    books: PropTypes.array.isRequired
};