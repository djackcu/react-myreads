import React, { Component } from 'react';
import BookShelf from './BookShelf'

class ListBooks extends Component {
   
    render() {
    	const { books, changeShelf } = this.props;
      const shelf = [
        {title: 'Currently Reading', category:'currentlyReading'},
        {title: 'Read', category:'read'},
        {title: 'Want to read', category:'wantToRead'}
        ]
        return (             
              <div className="list-books-content">
              {shelf.map((shelf) => (
                <div key={shelf.category}>
                  <BookShelf 
                  title={shelf.title}
                  shelf={shelf.category}
                  books={books}
                  changeShelf = {changeShelf}
                  />
                </div>
                ))}           
              </div>
        )
    }
}
export default ListBooks