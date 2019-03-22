
import { 
         FETCH_USER_BOOK_SUCCESS,
         FETCH_SEARCH_BOOK_INIT,
         FETCH_SEARCH_BOOK_SUCCESS,
         FETCH_USER_BOOK_INIT,
         FETCH_BOOK_ID_INIT,
         FETCH_BOOK_ID_SUCCESS
         } from './types';





//USER BOOK ACTIONS ---------------------------

const fetchUserBookingsInit = () => {
  return {
    type: FETCH_USER_BOOK_INIT
  }
}
const fetchBookByIDinit = () => {
  return {
    type: FETCH_BOOK_ID_INIT
  }
}
const fetchSearchBookingsInit = () => {
  return {
    type: FETCH_SEARCH_BOOK_INIT
  }
}

const fetchUserBookingsSuccess = (userBookings) => {
  return {
    type: FETCH_USER_BOOK_SUCCESS,
    userBookings
  }
}
const fetchBookSearchSuccess = (search) => {
 
  return {
    type: FETCH_SEARCH_BOOK_SUCCESS,
    search
  }
}

const fetchBookByIdSuccess = (book) => {
 
  return {
    type: FETCH_BOOK_ID_SUCCESS,
    book
  }
}


export const fetchUserBook = (data) => {
  return dispatch => {
    dispatch(fetchUserBookingsInit());
    dispatch( fetchUserBookingsSuccess(data))
  
  }
}




export const fetchBooks = (book,books) => {
  var searchedBook = books.find((element) => {return element.name === book;})
   return dispatch => {
    dispatch(fetchSearchBookingsInit());
    if(searchedBook !== undefined)
    dispatch(fetchBookSearchSuccess(searchedBook))
  
  }
}
export const fetchBooksById = (id,books) => {
  var searchedBook = books.find((element) => {return element.id === parseInt(id);})
   return dispatch => {
    dispatch(fetchBookByIDinit());
    if(searchedBook !== undefined)
    dispatch(fetchBookByIdSuccess(searchedBook))
  
  }
}





















