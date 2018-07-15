import React from 'react'
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import MainPage from './MainPage'
import SearchBooks from './SearchBooks'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    listBooks:[],
    listSearchBooks:[],
  }

  componentDidMount(){
    this.loadListBook()
  }

  loadListBook = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({listBooks:books})
    }) 
  }
  searchingBook = (query) => {
     BooksAPI.search(query).then((books) => {
      if (Array.isArray(books)) {
        let shelfSearchBooks = books.map((book) => {
          let shelfBook = this.state.listBooks.find((shelfBook) => {
            return shelfBook.id===book.id
          });
          if (shelfBook) {
            return shelfBook;
          } else {
            book.shelf = 'none';
            return book;
          }
        })
        this.setState({listSearchBooks:shelfSearchBooks})
      } else {
        this.setState({listSearchBooks:[]})
      }
    })
    }

  changeShelf = (book,shelf) => {
      BooksAPI.update(book,shelf).then(() => {
        this.loadListBook()
      })
       }

  render() {
    const {listSearchBooks,listBooks} = this.state
    return (
      <div>

      <Route exact path="/" render={() => (  
          <MainPage
          books={listBooks}
          changeShelf = {this.changeShelf}
          />
        )}

      />
        
      <Route path="/search" render={({history}) => (
          <SearchBooks
          books={listSearchBooks}
          onSearchBook={(this.searchingBook)}
          changeShelf = {this.changeShelf}
          />
        )}  />
      </div>
    )
  }
}

export default BooksApp
