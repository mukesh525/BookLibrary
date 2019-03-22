import  { FETCH_USER_BOOK_SUCCESS,
          
          FETCH_SEARCH_BOOK_SUCCESS,
          FETCH_SEARCH_BOOK_INIT,
          FETCH_BOOK_ID_SUCCESS,
          FETCH_BOOK_ID_INIT,
          FETCH_USER_BOOK_FAIL,
          FETCH_USER_BOOK_INIT } from 'actions/types';

const INITIAL_STATE = {
  data: [],
  search: [],
  errors: [],
  book:{},
  isFetching: false
}

export const booksReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_USER_BOOK_INIT:
      return {...state, data:[...state.data], errors: [], isFetching: true};
    case FETCH_USER_BOOK_SUCCESS:
       return {
          ...state, 
          data: [...state.data, action.userBookings],
           errors: [], 
          isFetching: false
        };
    
    case FETCH_SEARCH_BOOK_INIT:
      return {...state, errors: [], data:[...state.data], search:[],isFetching: false};
    
    case FETCH_BOOK_ID_INIT:
      return {...state, errors: [], data:[...state.data], search:[],isFetching: false};
    
    case FETCH_BOOK_ID_SUCCESS:
      return {...state, errors: [], data:[...state.data], book:Object.assign({},action.book),isFetching: false};

    case FETCH_SEARCH_BOOK_SUCCESS:
      return {...state, errors: [],data:[...state.data], search:[...state.search,action.search], isFetching: false};

    case FETCH_USER_BOOK_FAIL:
      return {...state, errors: [], data:[...state.data], isFetching: false};
    default:
      return state;
  }
}
