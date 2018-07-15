import React from 'react';
import Book from './Book'

const BookShelf =(props) => {
      const { title, shelf, books ,changeShelf} = props;
        return (
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{title}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {books
                      .filter((book) => (
                          book.shelf === shelf
                        ))
                      .map((book) => (
                        <li key= {book.id}>
                        <Book 
                        book={book}
                        onChangeShelf = {changeShelf}
                      /> 
                      </li>
                      ))
                    }
                    </ol>
                  </div>
                </div>
                  
        )
}
export default BookShelf