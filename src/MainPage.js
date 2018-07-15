import React from 'react';
import { Link } from 'react-router-dom';
import ListBooks from './ListBooks'
import PropTypes from 'prop-types';

const MainPage = (props) => {
    
    	const { books, changeShelf } = props;
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
MainPage.propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }
export default MainPage