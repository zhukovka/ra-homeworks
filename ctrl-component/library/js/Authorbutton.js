const Authorbutton = ({current, books, chooseAuthor}) => {

    const authors = ['All'];
    books.map(book => 
        book.authors.map(author => {
                if (authors.indexOf(author) < 0) authors.push(author);
            }
        )
    )

    return (
        <div className="authorbuttons">
            {authors.map(author => ( 
                <input type="button" onClick={chooseAuthor} value={author} className={author === current ? 'isCurrent' : ''} />    
            ))} 
        </div>
    );
};

Authorbutton.propTypes = {
    current: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    chooseAuthor: PropTypes.func.isRequired
};