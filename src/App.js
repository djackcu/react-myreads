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
    }).catch((e) => {
       console.log('error',e) 
     }) 
  }
  searchingBook = (query) => {
     BooksAPI.search(query).then((books) => {
      Array.isArray(books)?this.setState({listSearchBooks:books}):this.setState({listSearchBooks:[]})
    })
    }

  changeShelf = (book,shelf) => {
    console.log(book,shelf)
      BooksAPI.update(book,shelf).then(() => {
        this.loadListBook()
      })
       }

  render() {
    const {listSearchBooks,listBooks,query} = this.state
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
