const Bookshelf = ({books, chooseAuthor}) => {

    return (
        <div className="bookshelf">
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map(book => (<li key={`book-${book.id}`}><Book book={book} chooseAuthor={chooseAuthor}/></li>))}
                </ol>
            </div>
        </div>
    );
};
Bookshelf.propTypes = {
    books: PropTypes.array.isRequired,
    chooseAuthor: PropTypes.func.isRequired
};