import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ListBooks from './ListBooks'
import PropTypes from 'prop-types';

class MainPage extends Component {
   static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

    render() {
    	const { books, changeShelf } = this.props;
        return ( 
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>  
                  <ListBooks 
                  books={books}
                  changeShelf = {changeShelf}
                  />                         
              <div className="open-search">
                <Link to= '/search' >Add a book</Link>
              </div>
            </div>
            
        )
    }
}
export default MainPage