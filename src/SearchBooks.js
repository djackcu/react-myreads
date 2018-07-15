import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Book from './Book'

class SearchBooks extends Component {
	static propTypes = {
    	books: PropTypes.array.isRequired,
    	onSearchBook: PropTypes.func.isRequired,
    	changeShelf: PropTypes.func.isRequired
  	}

  	state = {
  		queryToSearch:''
  	}
  	updateQuery (query) {
  		this.setState({ queryToSearch: query }) 
  		this.props.onSearchBook(query)
  	}

    render() {
    	const { queryToSearch } = this.state
    	const {books, changeShelf} = this.props
        return ( 
        	<div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to='/' onClick={(e) => (
              	this.updateQuery('') 
              )}>Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" 
                placeholder="Search by title or author" 
                value={queryToSearch} 
                onChange={(event) => this.updateQuery(event.target.value)}
                />
      

              </div>
            </div>
            <div className="search-books-results">
              {books.length ===0 ?(<div>Not Match</div>):(<ol className="books-grid">
                                          {books.map((book) => (
                                                    <li key= {book.id}>
                                                    <Book 
                                                    book={book}
                                                    onChangeShelf = {changeShelf}
                                                  /> 
                                                  </li>
                                                  ))
                                                } 
                                          </ol>)}
            </div>
          </div>

        )
    }
}
export default SearchBooks