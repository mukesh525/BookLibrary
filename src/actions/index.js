
import { 
         FETCH_USER_BOOKINGS_SUCCESS,
         FETCH_SEARCH_BOOK_INIT,
         FETCH_SEARCH_BOOK_SUCCESS,
         FETCH_USER_BOOKINGS_INIT,
         } from './types';





// USER BOOKINGS ACTIONS ---------------------------

const fetchUserBookingsInit = () => {
  return {
    type: FETCH_USER_BOOKINGS_INIT
  }
}
const fetchSearchBookingsInit = () => {
  return {
    type: FETCH_SEARCH_BOOK_INIT
  }
}

const fetchUserBookingsSuccess = (userBookings) => {
  return {
    type: FETCH_USER_BOOKINGS_SUCCESS,
    userBookings
  }
}
const fetchBookSearchSuccess = (search) => {
 
  return {
    type: FETCH_SEARCH_BOOK_SUCCESS,
    search
  }
}



export const fetchUserBook = (data) => {
  return dispatch => {
    dispatch(fetchUserBookingsInit());
    dispatch( fetchUserBookingsSuccess(data))
  
  }
}




export const fetchBooks = (book,books) => {
  var searchedBook = books.find((element) => {return element.name == book;})
  debugger
   return dispatch => {
    dispatch(fetchSearchBookingsInit());
    if(searchedBook !== undefined)
    dispatch(fetchBookSearchSuccess(searchedBook))
  
  }
}





















